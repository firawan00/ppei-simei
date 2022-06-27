<?php

namespace App\Http\Controllers;

use App\Models\export_inquiry;
use App\Models\inbox;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class export_inquiry_controller extends CustomController
{
    public function __construct(export_inquiry $model)
    {
        $this->model = $model;
    }

    public function store(Request $r)
    {
        $payload = $r->all();
        $payload['from'] = Auth::user()->id;
        $data = export_inquiry::updateOrCreate(
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
            'link' => '/exportir/inquiry/' . $data->id,
        ]
        );
        return response()->json($data);
    }
}
