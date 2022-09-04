<?php

namespace App\Http\Controllers;

use App\Models\MD_shippinginstruction;
use Illuminate\Http\Request;
use App\Models\inbox;
use Illuminate\Support\Facades\Auth;

class md_shippinginstruction_controller extends CustomController
{
    public function __construct(MD_shippinginstruction $model)
    {
        $this->model = $model;
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
        ]
        );

        return response()->json($data);

    }
}
