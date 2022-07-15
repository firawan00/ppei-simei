<?php

namespace App\Http\Controllers;

use App\Models\MD_lc_release;
use Illuminate\Http\Request;
use App\Models\inbox;
use Illuminate\Support\Facades\Auth;

class md_lc_release_controller extends CustomController
{
    public function __construct(MD_lc_release $model)
    {
        $this->model = $model;
    }

    public function store(Request $r)
    {

        $payload = $r->except(['file', 'name', 'type']);
        $payload['from'] = Auth::user()->id;

        $data = MD_lc_release::updateOrCreate(
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
            'title' => 'Release LC from ' . Auth::user()->name,
            'link' => '/exportir/lc/' . $data->id,
        ]
        );
        return response()->json($data);

    }
}
