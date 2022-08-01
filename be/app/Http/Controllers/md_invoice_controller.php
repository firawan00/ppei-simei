<?php

namespace App\Http\Controllers;

use App\Models\MD_invoice;
use Illuminate\Http\Request;
use App\Models\inbox;
use Illuminate\Support\Facades\Auth;

class md_invoice_controller extends CustomController
{
    public function __construct(MD_invoice $model)
    {
        $this->model = $model;
    }

    public function store(Request $r)
    {
        //
        $payload = $r->except(['product_list']);
        $payload['from'] = Auth::user()->id;
        $payload['product_list'] = json_encode($r->product_list);

        $data = MD_invoice::updateOrCreate(
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
            'title' => 'Invoice from ' . Auth::user()->name,
            'link' => '/exportir/invoice/' . $data->id,
        ]
        );

        return response()->json($data);

    }
}
