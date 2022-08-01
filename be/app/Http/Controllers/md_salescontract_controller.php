<?php

namespace App\Http\Controllers;

use App\Models\MD_salescontract;
use Illuminate\Http\Request;
use App\Models\inbox;
use Illuminate\Support\Facades\Auth;

class md_salescontract_controller extends CustomController
{
    public function __construct(MD_salescontract $model)
    {
        $this->model = $model;
    }

    public function store(Request $r)
    {
        //

        $payload = $r->except(['product_list']);
        $payload['from'] = Auth::user()->id;
        $payload['product_list'] = json_encode($r->product_list);

        $data = MD_salescontract::updateOrCreate(
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
            'title' => 'Sales Contract from ' . Auth::user()->name,
            'link' => '/importir/salescontract/' . $data->id,
        ]
        );
        return response()->json($data);

    }
}
