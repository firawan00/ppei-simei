<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Meta;
use App\Models\PostNews;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

use Illuminate\Support\Str;

// $request->only('username', 'password');
// or
// $request->except('_method', '_token');

class PostController extends CustomController
{
    protected $content;

    function __construct(Meta $model)
    {
        $this->model = $model;
    }

    public function setnews($r)
    {
        $post = PostNews::updateOrCreate(
            ['id' => isset($r->id) ? $r->id : null],
            $r->except('imgCover', 'type')->toArray()
        );
        return $post;
    }

    public function posts_receipt($r)
    {
        # code...
    }

    public function store(Request $r)

    {
        $this->content = $r->type;

        $fn = 'set' . $r->type;
        $post = $this->$fn(collect($r->except('type')));

        if (isset($r->imgCover)) {
            $path = "img/post/{$r->type}";
            $name = "{$post->id}.png";

            $r->imgCover->move(public_path($path), $name);

            $post->img_cover = "{$path}/{$name}";
            $post->save();
        }

        $post->meta()->create($r->only('type', 'tags'));

        return response()->json($post);
    }
}
