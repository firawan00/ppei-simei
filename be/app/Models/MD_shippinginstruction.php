<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class MD_shippinginstruction extends Model4NF
{
    use HasFactory;

    protected $table = "md_shippinginstruction";
    public function getProductListAttribute($val)
    {
        return json_decode($val);

    }

    public function deliveryOrder()
    {
        return $this->hasOne(MD_deliveryorder::class, 'si_id');
    }

}
