<?php

namespace App\Http\Controllers;

use App\Models\MD_lc;
use Illuminate\Http\Request;
use App\Models\inbox;
use Illuminate\Support\Facades\Auth;

class md_lc_controller extends CustomController
{
    public function __construct(MD_lc $model)
    {
        $this->model = $model;
    }

    public function store(Request $r)
    {
        //
        $r->validate([
            'file' => 'required|mimes:doc,docx|max:512',
        ]);

        $payload = $r->except(['file', 'name', 'type']);
        $payload['from'] = Auth::user()->id;
        $payload['status'] = 'pending';

        $data = MD_lc::updateOrCreate(
            [
                'id' => $r->id,
            ],
            $payload);

        if ($r->hasFile('file')) {
            //
            $file = $r->file('file');
            $path = '/uploads/lc/';
            $filename = Auth::user()->id . "{$data->id}.doc";
            $file->move(public_path($path), $filename);

            $data->file_path = $path . $filename;
            $data->save();
        }

        inbox::updateOrCreate([
            'ref-model' => get_class($data),
            'ref-id' => $data->id,

        ], [
            "from" => $payload['from'],
            "to" => $r->to,
            "ref-model" => get_class($data),
            "ref-id" => $data->id,
            'title' => 'Pengajuan LC from ' . Auth::user()->name,
            'link' => '/exportir/offeringletter/' . $data->id,
        ]
        );
        return response()->json($data);

    }
}
