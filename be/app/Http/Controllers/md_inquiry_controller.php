<?php

namespace App\Http\Controllers;

use App\Models\MD_inquiry;
use App\Models\inbox;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class md_inquiry_controller extends CustomController
{
    public function __construct(MD_inquiry $model)
    {
        $this->model = $model;
    }

    public function store(Request $r)
    {
        $payload = $r->all();
        $payload['from'] = Auth::user()->id;
        $data = MD_inquiry::updateOrCreate(
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
            'title' => 'Inquery Letter from ' . Auth::user()->name,
            'link' => '/importir/inquiry/' . $data->id,
        ]
        );
        return response()->json($data);
    }
}
