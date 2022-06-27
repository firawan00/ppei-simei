<?php

namespace App\Http\Controllers;

use App\Models\export_lc;
use Illuminate\Http\Request;

class export_lc_controller extends CustomController
{
    public function __construct(export_lc $model)
    {
        $this->model = $model;
    }

    public function store(Request $r)
    {
        //
        return response()->json($r);
        $user = Auth::user();
        $uploadedFile = $r->file('file');
        $filename = $user->id . '-' . $uploadedFile->getClientOriginalName();
        $filename = $user->id . '-ska.doc';

        return response()->json($filename);
    }
}
