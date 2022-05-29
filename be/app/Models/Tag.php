<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\NewModel;


class Tag extends NewModel
{
    use HasFactory;

    public $with = ['group'];

    public function scopeFilter($query, $request)
    {
        if (isset($request['isActived']))
            $query->Where('is_actived', 1);
        if (isset($request['pax']))
            $query->Where('max_travelers', '>=', $request['pax']);
    }


    public function group()
    {
        return $this->hasOne(TagGroup::class, 'id', 'group_id');
    }
}
