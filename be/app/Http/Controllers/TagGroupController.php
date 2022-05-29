<?php

namespace App\Http\Controllers;

use App\Models\TagGroup;

class TagGroupController extends CustomController
{
    function __construct(TagGroup $model)
    {
        $this->model = $model;
    }
}
