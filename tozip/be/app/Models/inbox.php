<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Auth;

class inbox extends Model4NF
{

    protected $table = "inbox";

    protected static function boot()
    {
        // Your boot logic here
        parent::boot();

        self::saving(function ($model) {
            Auth::id() != $model->to && $model->hasread = 0;
        });

    }

}
