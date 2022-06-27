<?php

namespace App\Http\Controllers;

use App\Models\import_packinglist;
use Illuminate\Http\Request;

class import_packinglist_controller extends CustomController
{
    public function __construct(import_packinglist $model)
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
