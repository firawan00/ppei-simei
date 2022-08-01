<?php

namespace App\Http\Controllers;

use App\Models\MD_deliveryorder;
use Illuminate\Http\Request;
use App\Models\inbox;
use Illuminate\Support\Facades\Auth;

class md_deliveryorder_controller extends CustomController
{
    public function __construct(MD_deliveryorder $model)
    {
        $this->model = $model;
    }

    public function store(Request $r)
    {
        //
        $payload = $r->except(['product_list']);
        $payload['from'] = Auth::user()->id;

        $data = MD_deliveryorder::updateOrCreate(
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
            'title' => 'Delviery Order from ' . Auth::user()->name,
            'link' => '/exportir/deliveryorder/' . $data->id,
        ]
        );
        return response()->json($data);

    }
}
