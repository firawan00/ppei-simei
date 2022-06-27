<?php

namespace App\Http\Controllers;

use App\Models\export_lkn;
use Illuminate\Http\Request;

class export_lkn_controller extends CustomController
{
    public function __construct(export_lkn $model)
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
