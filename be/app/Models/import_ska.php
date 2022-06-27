<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class import_ska extends Model4NF
{
    use HasFactory;

    protected $table = "import_ska";
    public $with = ['user'];

}
