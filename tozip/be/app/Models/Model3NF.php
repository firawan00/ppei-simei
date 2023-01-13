<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Model3NF extends Model
{
	use SoftDeletes;

	protected $guarded = [];
	protected $hidden = [
		'updated_at',
		'created_at',
		'deleted_at',
	];
}
