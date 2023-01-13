<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class MD_salescontract extends Model4NF
{
    use HasFactory;

    protected $table = "md_salescontract";
    public function getProductListAttribute($val)
    {
        return json_decode($val);

    }
}
