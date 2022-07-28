<?php

namespace App\Http\Controllers;

use App\Models\MD_wessel;
use Illuminate\Http\Request;
use App\Models\inbox;
use Illuminate\Support\Facades\Auth;

class md_wessel_controller extends CustomController
{
    public function __construct(MD_wessel $model)
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
            'skaa_id' => $r->skaa_id,
            'skad_id' => $r->skad_id,

            'data' => json_encode($r->except(['from'])),
        ];

        $data = MD_wessel::updateOrCreate(
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
            'title' => 'Pengajuan Wessel from ' . Auth::user()->name,
            'link' => '/exportir/wessel/' . $data->id,
        ]
        );
        return response()->json($data);

    }
}
