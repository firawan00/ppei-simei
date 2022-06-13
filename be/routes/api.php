<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\TagGroupController;

use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'auth'], function () {
    Route::post('signin', [AuthController::class, 'signin']);
    Route::post('signup', [AuthController::class, 'signup']);

    Route::post('emailverification', [AuthController::class, 'emailverification']);
    Route::post('reverification', [AuthController::class, 'reverification']);

    Route::post('register', [AuthController::class, 'register'])->middleware('auth:api');;

    Route::post('emailcheck', [AuthController::class, 'emailcheck']);
    Route::post('forgetpassword', [AuthController::class, 'forgetpassword']);
    Route::post('passwordreset', [AuthController::class, 'passwordreset']);
    Route::post('edit', [AuthController::class, 'edit'])->middleware('auth:api');
});

Route::resources([
    'tagsgroup' => TagGroupController::class,
    'tags' => TagController::class,
    'posts' => PostController::class,
    'users' => UserController::class,

]);



// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
