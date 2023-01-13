<?php

namespace App\Http\Controllers;

use App\Models\md_ordering;
use Illuminate\Http\Request;
use App\Models\inbox;
use Illuminate\Support\Facades\Auth;

class md_ordering_controller extends CustomController
{
    public function __construct(md_ordering $model)
    {
        $this->model = $model;
    }

    public function store(Request $r)
    {
        //

        $payload = $r->except(['product_list']);
        $payload['from'] = Auth::user()->id;
        $payload['product_list'] = json_encode($r->product_list);

        $data = md_ordering::updateOrCreate(
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
            'title' => 'Ordering Letter from ' . Auth::user()->name,
            'link' => '/importir/ordering/' . $data->id,
            'ref_id' => $r->doc_no,

        ]
        );
        return response()->json($data);

    }
}
