<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class export_ordering extends Model4NF
{
    use HasFactory;

    protected $table = "export_ordering";
    public $with = ['user'];

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}
