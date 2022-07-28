<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CustomController extends BaseController
{
    protected $model;

    public function index(Request $r)
    {
        if ((Auth::user()->role == 'user-export' || Auth::user()->role == 'user-import') && class_basename($this->model) != 'AdminConfig') {
            $data = $this->model::Filter($r->all())->where('from', Auth::id())->orWhere('to', Auth::id())->get();
        } else {
            $data = $this->model::Filter($r->all())->get();
        }

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
