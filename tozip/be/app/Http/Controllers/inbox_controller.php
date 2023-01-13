<?php

namespace App\Http\Controllers;

use App\Models\inbox;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class inbox_controller extends Controller
{

    public function from()
    {
        $data = inbox::whereFrom(Auth::user()->id)->whereDate('created_at', Carbon::today())->orderBy('updated_at', 'DESC')->get();
        return response()->json($data);
    }

    public function to()
    {
        $data = inbox::whereTo(Auth::user()->id)->whereDate('created_at', Carbon::today())->orderBy('updated_at', 'DESC')->get();
        return response()->json($data);
    }

    public function read(Request $r)
    {

        $data = inbox::whereId($r->id)->first();
        $data->hasread = 1;
        $data->save();
        return response()->json('ok');

        # code...
    }

    public function check(Request $r)
    {

        $data = inbox::whereTo(Auth::user()->id)->where('hasread', 0)->count();
        return response()->json($data);

        # code...
    }
}
