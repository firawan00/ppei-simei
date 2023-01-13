<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class MD_wessel extends Model4NF
{
    use HasFactory;

    protected $table = "md_wessel";
    public function getDataAttribute($val)
    {
        return json_decode($val);

    }
}
