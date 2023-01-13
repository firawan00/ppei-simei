<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class MD_lkn extends Model4NF
{
    use HasFactory;

    protected $table = "md_lkn";

    public function getProductListAttribute($val)
    {
        return json_decode($val);

    }

}
