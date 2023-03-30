<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class testcontroller extends Controller
{
    //
    private $hris;

    public function __construct()
    {
        $this->hris = 'https://localhost/bakamlahris/be/api/hcdp/auth';
    }

    public function apicall(Request $r)
    {

        dd($data);
        // return response()->json($response);

        return response()->json('$r');
        # code...
    }
}
