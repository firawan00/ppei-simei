<?php

namespace App\Models;

use App\Models\Model4NF;

class Status extends Model4NF
{
	protected $table = 'status';

	protected $hidden = [
		'id',
	];
}
