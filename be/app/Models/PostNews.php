<?php

namespace App\Models;

use App\Models\ModelDefault;
use App\Traits\Uuids;

class PostNews extends ModelDefault
{

    use Uuids;

    public $incrementing = false;
    protected $primaryKey = 'id';
    protected $keyType = 'string';

    protected $table = 'posts_news';

    public function meta()
    {
        return $this->morphOne(Meta::class, 'content');
    }
}
