<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class MD_peb extends Model4NF
{
    use HasFactory;

    protected $table = "md_peb";
    public function getProductListAttribute($val)
    {
        return json_decode($val);

    }

    public function getDataAttribute($val)
    {
        return json_decode($val);

    }
}
