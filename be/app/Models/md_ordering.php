<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class md_ordering extends Model4NF
{
    use HasFactory;

    protected $table = "md_ordering";

    public function getProductListAttribute($val)
    {
        return json_decode($val);

    }
}
