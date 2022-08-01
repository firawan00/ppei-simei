<?php

namespace App\Http\Controllers;

use App\Models\MD_ska_a;
use Illuminate\Http\Request;
use App\Models\inbox;
use Illuminate\Support\Facades\Auth;

class md_ska_a_controller extends CustomController
{
    public function __construct(MD_ska_a $model)
    {
        $this->model = $model;
    }

    public function store(Request $r)
    {
        $payload = [
            'from' => Auth::user()->id,
            'to' => $r->to,
            'status' => 'pending',

            'invoice_id' => $r->invoice_id,
            'pl_id' => $r->pl_id,
            'bl_id' => $r->bl_id,
            'npe_id' => $r->npe_id,

            'data' => json_encode($r->except(['from'])),
        ];

        $data = MD_ska_a::updateOrCreate(
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
            'title' => 'Pengajuan SKA-A from ' . Auth::user()->name,
            'link' => '/exportir/ska-a/' . $data->id,
        ]
        );
        return response()->json($data);

    }
}
