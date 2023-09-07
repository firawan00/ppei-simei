<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminConfigController;
use App\Http\Controllers\AppController;

use App\Http\Controllers\md_inquiry_controller;
use App\Http\Controllers\md_introductionletter_controller;
use App\Http\Controllers\md_offeringletter_controller;
use App\Http\Controllers\md_lkn_controller;
use App\Http\Controllers\md_ordering_controller;
use App\Http\Controllers\md_salescontract_controller;
use App\Http\Controllers\md_invoice_controller;
use App\Http\Controllers\md_packinglist_controller;
use App\Http\Controllers\md_shippinginstruction_controller;
use App\Http\Controllers\md_deliveryorder_controller;
use App\Http\Controllers\md_billoflading_controller;
use App\Http\Controllers\md_ska_a_controller;
use App\Http\Controllers\md_ska_d_controller;
use App\Http\Controllers\md_wessel_controller;
use App\Http\Controllers\md_peb_controller;
use App\Http\Controllers\md_npe_controller;
use App\Http\Controllers\md_lc_controller;
use App\Http\Controllers\md_lc_release_controller;

use App\Http\Controllers\inbox_controller;
use App\Http\Controllers\StatusController;

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
        Route::post('read', [inbox_controller::class, 'read']);
        Route::get('check', [inbox_controller::class, 'check']);
        Route::get('all', [inbox_controller::class, 'all']);
        Route::post('clear', [inbox_controller::class, 'clear']);
    });
    Route::post('status_handler', [StatusController::class, 'status_handler']);
    Route::post('dashboard', [AppController::class, 'dashboard']);

    Route::resources([
        'users' => UserController::class,
        'config' => AdminConfigController::class,

        'md_introductionletter' => md_introductionletter_controller::class,
        'md_inquiry' => md_inquiry_controller::class,
        'md_offeringletter' => md_offeringletter_controller::class,
        'md_lkn' => md_lkn_controller::class,
        'md_ordering' => md_ordering_controller::class,
        'md_salescontract' => md_salescontract_controller::class,
        'md_invoice' => md_invoice_controller::class,
        'md_packinglist' => md_packinglist_controller::class,
        'md_shippinginstruction' => md_shippinginstruction_controller::class,
        'md_deliveryorder' => md_deliveryorder_controller::class,
        'md_billoflading' => md_billoflading_controller::class,
        'md_ska_a' => md_ska_a_controller::class,
        'md_ska_d' => md_ska_d_controller::class,

        'md_wessel' => md_wessel_controller::class,
        'md_peb' => md_peb_controller::class,
        'md_npe' => md_npe_controller::class,

        'md_lc' => md_lc_controller::class,
        'md_lc_release' => md_lc_release_controller::class,

    ]);
});
