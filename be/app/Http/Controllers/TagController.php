<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use App\Models\TagGroup;

use Illuminate\Http\Request;

class TagController extends CustomController
{

    function __construct(Tag $model)
    {
        $this->model = $model;
    }


    public function store(Request $r)
    {
        //
        if ($r->new_group) {
            $new_group = TagGroup::create([
                'name' => $r->new_group,
            ]);
        }

        $tags = Tag::updateOrCreate(
            ['id' => $r->id || ""],
            [
                'name' => $r->name,
                'group_id' => $r->group_id ?  $r->group_id : $new_group->id,
            ]
        );

        return response()->json($tags);
    }
}
