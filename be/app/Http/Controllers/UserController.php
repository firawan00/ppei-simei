<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User as Cmodel;

class UserController extends Controller
{
    public function index()
    {
        return response()->json(Cmodel::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    public function store(Request $r)
    {
        $data = Cmodel::updateOrCreate(
            ['id' => $r->id || ""],
            $r->all()
        );

        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TagGroup  $tagGroup
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $data = Cmodel::whereId($id)->first();
        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TagGroup  $tagGroup
     * @return \Illuminate\Http\Response
     */
    public function edit(TagGroup $tagGroup)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TagGroup  $tagGroup
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TagGroup $tagGroup)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TagGroup  $tagGroup
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        Cmodel::whereId($id)->delete();
        return response()->json('success');
    }
}
