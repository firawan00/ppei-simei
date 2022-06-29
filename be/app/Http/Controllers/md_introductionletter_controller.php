<?php

namespace App\Http\Controllers;

use App\Models\MD_introductionletter;
use App\Models\inbox;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class md_introductionletter_controller extends CustomController
{
    public function __construct(MD_introductionletter $model)
    {
        $this->model = $model;
    }

    public function store(Request $r)
    {
        //

        $payload = $r->all();
        $payload['from'] = Auth::user()->id;
        $data = MD_introductionletter::updateOrCreate(
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
            'title' => 'Introduction Letter from ' . Auth::user()->name,
            'link' => '/exportir/introductionletter/' . $data->id,
        ]
        );
        return response()->json($data);

    }
}
