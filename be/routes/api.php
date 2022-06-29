<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminConfigController;

use App\Http\Controllers\md_inquiry_controller;
use App\Http\Controllers\md_introductionletter_controller;

use App\Http\Controllers\import_offeringletter_controller;
use App\Http\Controllers\import_invoice_controller;
use App\Http\Controllers\import_packinglist_controller;
use App\Http\Controllers\import_deliveryorder_controller;
use App\Http\Controllers\import_billoflading_controller;
use App\Http\Controllers\import_ska_controller;
use App\Http\Controllers\import_wessel_controller;

use App\Http\Controllers\export_lkn_controller;
use App\Http\Controllers\export_ordering_controller;
use App\Http\Controllers\export_peb_controller;
use App\Http\Controllers\export_salescontract_controller;
use App\Http\Controllers\export_lc_controller;
use App\Http\Controllers\export_ska_controller;
use App\Http\Controllers\export_wessel_controller;

use App\Http\Controllers\inbox_controller;

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

Route::group(['middleware' => 'auth:api'], function () {

    Route::group(['prefix' => 'inbox'], function () {
        Route::get('from', [inbox_controller::class, 'from']);
        Route::get('to', [inbox_controller::class, 'to']);
    });

    Route::resources([
        'users' => UserController::class,
        'config' => AdminConfigController::class,

        'md_introductionletter' => md_introductionletter_controller::class,
        'md_inquiry' => md_inquiry_controller::class,

        'import_offeringletter' => import_offeringletter_controller::class,
        'import_invoice' => import_invoice_controller::class,
        'import_packinglist' => import_packinglist_controller::class,
        'import_deliveryorder' => import_deliveryorder_controller::class,
        'import_billoflading' => import_billoflading_controller::class,
        'import_ska' => import_ska_controller::class,
        'import_wessel' => import_wessel_controller::class,
        'export_lkn' => export_lkn_controller::class,
        'export_ordering' => export_ordering_controller::class,
        'export_peb' => export_peb_controller::class,
        'export_salescontract' => export_salescontract_controller::class,
        'export_lc' => export_lc_controller::class,
        'export_ska' => export_ska_controller::class,
        'export_wessel' => export_wessel_controller::class,

    ]);
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
