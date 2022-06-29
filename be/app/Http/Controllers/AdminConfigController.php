<?php

namespace App\Http\Controllers;

use App\Models\AdminConfig;
use Illuminate\Http\Request;

class AdminConfigController extends CustomController
{
    public function __construct(AdminConfig $model)
    {
        $this->model = $model;
    }

    public function store(Request $request)
    {
        //
    }

}
