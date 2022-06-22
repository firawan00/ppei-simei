<?php

namespace App\Http\Controllers;

use App\Models\IntroductionLetter;
use Illuminate\Http\Request;

class IntroductionLetterController extends CustomController
{
    public function __construct(IntroductionLetter $model)
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
