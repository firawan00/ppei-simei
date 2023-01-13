<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class MD_ska_d extends Model4NF
{
    use HasFactory;
    protected $table = "md_ska_d";
    public function getDataAttribute($val)
    {
        return json_decode($val);

    }
}
