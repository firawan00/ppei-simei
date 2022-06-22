<?php

namespace App\Http\Controllers;

use App\Models\SKA;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SkaController extends CustomController
{
    public function __construct(SKA $model)
    {
        $this->model = $model;
    }

    public function store(Request $r)
    {
        //
        $user = Auth::user();
        $uploadedFile = $r->file('file');
        $filename = $user->id . '-' . $uploadedFile->getClientOriginalName();
        $filename = $user->id . '-ska.doc';

        return response()->json($filename);
    }

}
