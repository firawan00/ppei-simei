<?php

namespace App\Models;

use App\Models\NewModel;
use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
	protected $table = 'status';

	protected $hidden = [
		'id',
	];
}
