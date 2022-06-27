<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Model4NF extends Model
{
    protected $guarded = [];
    protected $hidden = [
        'updated_at',
        'created_at',
        'deleted_at',
    ];

    public $with = ['from', 'to'];
    public function from()
    {
        return $this->hasOne(UserList::class, 'id', 'from');
    }

    public function to()
    {
        return $this->hasOne(UserList::class, 'id', 'to');
    }

}
