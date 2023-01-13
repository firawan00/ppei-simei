<?php

namespace App\Http\Controllers;

use App\Models\MD_billoflading;
use Illuminate\Http\Request;
use App\Models\inbox;
use Illuminate\Support\Facades\Auth;

class md_billoflading_controller extends CustomController
{
    public function __construct(MD_billoflading $model)
    {
        $this->model = $model;
    }

    public function store(Request $r)
    {
        //
        $payload = [
            'from' => Auth::user()->id,
            'to' => $r->to,
            'data' => json_encode($r->except(['from'])),
        ];

        $data = MD_billoflading::updateOrCreate(
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
            'title' => 'Bill of lading  from ' . Auth::user()->name,
            'link' => '/exportir/billoflanding/' . $data->id,
            'ref_id' => $r->blno,

        ]
        );
        return response()->json($data);

    }
}
