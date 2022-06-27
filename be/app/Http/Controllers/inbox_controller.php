<?php

namespace App\Http\Controllers;

use App\Models\inbox;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class inbox_controller extends Controller
{

    public function from()
    {
        $data = inbox::whereFrom(Auth::user()->id)->get();
        return response()->json($data);
    }

    public function to()
    {
        $data = inbox::whereTo(Auth::user()->id)->get();
        return response()->json($data);
    }
}
