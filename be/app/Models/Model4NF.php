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
}
