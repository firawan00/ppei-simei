<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class Model4NF extends Model
{
    protected $guarded = [];
    protected $hidden = [
        // 'created_at',
        'deleted_at',
    ];

    public $with = ['from', 'to'];

    public function setIdAttribute($value)
    {
        if (!is_null($value)) {
            $this->attributes['id'] = $value;
            return;
        }

        $latest = DB::table($this->getTable())->latest('id')->first();
        $this->attributes['id'] = $latest ? $latest->id + 1 : 1;
    }

    // public function setDateAttribute($value)
    // {
    //     $this->attributes['date'] = Carbon::parse($value);
    // }

    public function scopeFilter($query, $request)
    {
        if (isset($request['from'])) {
            $query->Where('from', $request['from']);
        }

        if (isset($request['to'])) {
            $query->where('to', $request['to']);
        }

        if (isset($request['status'])) {
            $query->Where('status', $request['status']);
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
