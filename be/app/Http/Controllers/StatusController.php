<?php

namespace App\Http\Controllers;

use App\Models\MD_peb;
use Illuminate\Http\Request;

class StatusController extends Controller
{
    //

    public function status_handler(Request $r)
    {
        $model = 'App\\Models\\' . $r->model;
        $data = $model::where('id', $r->id)->first();
        $data->status = $r->status;
        $data->status_notes = $r->status == 'rejected' ? $r->status_notes : '';
        $data->save();
        return response()->json($data);
        # code...
    }
}
