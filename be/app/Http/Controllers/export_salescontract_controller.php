<?php

namespace App\Http\Controllers;

use App\Models\export_salescontract;
use Illuminate\Http\Request;

class export_salescontract_controller extends CustomController
{
    public function __construct(export_salescontract $model)
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
