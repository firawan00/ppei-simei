<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class MD_billoflading extends Model4NF
{
    use HasFactory;

    protected $table = "md_billoflading";
    protected $appends = ["buffer"];

    public function getBufferAttribute()
    {
        return "-";

    }
    public function getDataAttribute($val)
    {
        return json_decode($val);

    }
}
