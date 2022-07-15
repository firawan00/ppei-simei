<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Model4NF extends Model
{
    protected $guarded = [];
    protected $hidden = [
        'updated_at',
        'created_at',
        'deleted_at',
    ];

    public $with = ['from', 'to'];

    public function setDateAttribute($value)
    {
        $this->attributes['date'] = Carbon::parse($value);
    }

    public function scopeFilter($query, $request)
    {
        if (isset($request['from'])) {

            $query->Where('from', $request['from']);
        }

    }

    public function from()
    {
        return $this->hasOne(UserList::class, 'id', 'from');
    }

    public function to()
    {
        return $this->hasOne(UserList::class, 'id', 'to');
    }

}
