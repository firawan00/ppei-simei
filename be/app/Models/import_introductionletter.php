<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class import_introductionletter extends Model4NF
{
    use HasFactory;

    protected $table = "import_introductionletter";
    public $with = ['user'];

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}
