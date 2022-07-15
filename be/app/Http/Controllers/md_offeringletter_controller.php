<?php

namespace App\Http\Controllers;

use App\Models\MD_offeringletter;
use App\Models\inbox;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class md_offeringletter_controller extends CustomController
{
    public function __construct(MD_offeringletter $model)
    {
        $this->model = $model;
    }

    public function store(Request $r)
    {
        //

        $payload = $r->all();
        $payload['from'] = Auth::user()->id;
        $data = MD_offeringletter::updateOrCreate(
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
            'title' => 'Offering Letter from ' . Auth::user()->name,
            'link' => '/exportir/offeringletter/' . $data->id,
        ]
        );
        return response()->json($data);

    }
}
