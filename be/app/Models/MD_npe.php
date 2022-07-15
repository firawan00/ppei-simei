<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class MD_npe extends Model4NF
{
    use HasFactory;

    protected $table = "md_npe";
    protected $appends = ["buffer"];

    public function getDataAttribute($val)
    {
        return json_decode($val);

    }
    public function getBufferAttribute($val)
    {
        return '-';

    }
}
