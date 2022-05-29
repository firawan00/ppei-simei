<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Traits\Uuids;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, Uuids, SoftDeletes;

    public $incrementing = false;
    protected $primaryKey = 'id';
    protected $keyType = 'string';
    protected $table = 'users';
    // protected $appends = array('status');


    protected $guarded = [];
    protected $hidden = [
        'password',
        'remember_token', 'deleted_at', 'created_at', 'status_id'
    ];

    protected $role = [
        'user',
        'admin',
    ];

    public $with = ['store', 'status', 'role'];


    public function getRoleAttribute($val)
    {
        return $this->role[$val];
    }



    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function store()
    {
        return $this->hasOne(UserStore::class, 'id', 'user_id');
    }

    public function status()
    {
        return $this->hasOne(Status::class, 'id', 'status_id')->select(['name', 'id']);
    }
    public function role()
    {
        return $this->hasOne(UserRole::class, 'id', 'role_id');
    }
}
