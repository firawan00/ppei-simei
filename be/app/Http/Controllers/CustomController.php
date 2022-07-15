<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

class CustomController extends BaseController
{
    protected $model;

    public function index(Request $r)
    {
        $data = $this->model::Filter($r->all())->get();
        return response()->json($data);
    }

    public function show($id)
    {
        $data = $this->model::whereId($id)->first();
        return response()->json($data);
    }

    public function destroy($id)
    {
        $this->model::whereId($id)->delete();
        return response()->json('success');
    }
}
