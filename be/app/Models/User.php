<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use App\Traits\Uuids;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, Uuids, SoftDeletes;

    public $incrementing = false;
    protected $primaryKey = 'id';
    protected $keyType = 'string';
    protected $table = 'users';
    protected $appends = ['token'];

    protected $guarded = [];
    protected $hidden = [
        'password',
        'remember_token', 'deleted_at', 'created_at', 'status_id', 'updated_at',
    ];

    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }

    public function getTokenAttribute()
    {
        return ($this->createToken($this->email . '-' . now()))->accessToken;
    }

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

}
