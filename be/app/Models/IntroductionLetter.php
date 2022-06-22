<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class IntroductionLetter extends Model4NF
{
    use HasFactory;

    protected $table = "import_introduction_letters";
    public $with = ['user'];

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}
