<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;

class CustomController extends BaseController
{
	protected $model;

	public function index()
	{
		return response()->json($this->model::all());
	}


	public function show($id)
	{
		$data = $this->modelCmodel::whereId($id)->first();
		return response()->json($data);
	}


	public function destroy($id)
	{
		$this->model::whereId($id)->delete();
		return response()->json('success');
	}
}
