<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\NewModel;
use App\Traits\Uuids;

use Illuminate\Database\Eloquent\SoftDeletes;

class Meta extends NewModel
{
    use Uuids, SoftDeletes;

    public $with = ['content'];

    public function getTagsAttribute($val)
    {
        return  json_decode($val);
    }

    public function content()
    {
        return $this->morphTo();
    }
}
