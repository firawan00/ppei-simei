<?php

namespace App\Http\Controllers;

use App\Models\MD_shippinginstruction;
use Illuminate\Http\Request;
use App\Models\inbox;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Carbon;

class md_shippinginstruction_controller extends CustomController
{
    public function __construct(MD_shippinginstruction $model)
    {
        $this->model = $model;
    }

    public function index(Request $r)
    {
        $query = MD_shippinginstruction::query();

        if ($r->boolean('available')) {
            $query
                ->where('to', Auth::id())
                ->whereDate('created_at', Carbon::today())
                ->whereDoesntHave('deliveryOrder');
        } else {
            $query->filter($r->all());
        }

        return response()->json($query->latest()->get());
    }

    public function store(Request $r)
    {
        //
        $payload = $r->except(['product_list']);
        $payload['from'] = Auth::user()->id;
        $payload['product_list'] = json_encode($r->product_list);
        $payload['status'] = 'pending';

        $data = MD_shippinginstruction::updateOrCreate(
            [
                'id' => $r->id,
            ],
            $payload);

        inbox::updateOrCreate([
            'ref-model' => get_class($data),
            'ref-id' => $data->id,

        ], [
            "from" => $payload['from'],
            "to" => $r->to,
            "ref-model" => get_class($data),
            "ref-id" => $data->id,
            'title' => 'Shipping Instruction from ' . Auth::user()->name,
            'link' => '/exportir/shippinginstruction/' . $data->id,
            'ref_id' => $r->docref,

        ]
        );

        return response()->json($data);

    }
}
