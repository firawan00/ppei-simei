<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class MD_introductionletter extends Model4NF
{
    use HasFactory;

    protected $table = "md_introductionletter";
    // public $with = ['user'];

    // public function user()
    // {
    //     return $this->hasOne(User::class, 'id', 'user_id');
    // }
}
