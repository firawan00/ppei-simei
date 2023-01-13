<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class MD_packinglist extends Model4NF
{
    use HasFactory;

    protected $table = "md_packinglist";
    public function getProductListAttribute($val)
    {
        return json_decode($val);

    }
}
