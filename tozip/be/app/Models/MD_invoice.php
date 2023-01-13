<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class MD_invoice extends Model4NF
{
    use HasFactory;

    protected $table = "md_invoice";
    public function getProductListAttribute($val)
    {
        return json_decode($val);

    }

}
