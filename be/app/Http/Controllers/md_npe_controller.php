<?php

namespace App\Http\Controllers;

use App\Models\MD_npe;
use Illuminate\Http\Request;
use App\Models\inbox;
use Illuminate\Support\Facades\Auth;

class md_npe_controller extends CustomController
{
    public function __construct(MD_npe $model)
    {
        $this->model = $model;
    }

    public function store(Request $r)
    {

        $payload = $r->only(['from', 'to']);
        $payload['from'] = Auth::user()->id;
        $payload['data'] = json_encode($r->except(['from', 'to']));

        $data = MD_npe::updateOrCreate(
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
            'title' => 'Dokumen NPE from ' . Auth::user()->name,
            'link' => '/exportir/npe/' . $data->id,
        ]
        );
        return response()->json($data);

    }
}
