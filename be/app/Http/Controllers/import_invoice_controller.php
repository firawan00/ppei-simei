<?php

namespace App\Http\Controllers;

use App\Models\import_invoice;
use Illuminate\Http\Request;

class import_invoice_controller extends CustomController
{
    public function __construct(import_invoice $model)
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
