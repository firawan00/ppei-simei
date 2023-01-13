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

    public function store(Request $r)
    {

        $config = AdminConfig::whereId($r->id)->first();
        if ($config->type == 'text') {
            $config->value = $r->value;
        }

        if ($config->type == 'file') {
            $file = $r->file('file');
            $file->move(public_path("uploads/template/"), 'lc-template.xls');

        }

        $config->save();

        return response()->json($config);
    }

}
