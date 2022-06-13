<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UserStore extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('users_store', function (Blueprint $table) {
            //
            $table->uuid('id')->primary();
            $table->uuid('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            $table->string('name')->nullable();
            $table->text('about')->nullable();

            $table->string('phone')->nullable();
            $table->string('address')->nullable();
            $table->string('website')->nullable();
            $table->string('instagram')->nullable();
            $table->string('facebook')->nullable();
            $table->text('opportunities')->nullable();
        });

        Schema::create('users_store_product', function (Blueprint $table) {
            //
            $table->uuid('id')->primary();;
            $table->uuid('store_id');
            $table->foreign('store_id')->references('id')->on('users_store')->onDelete('cascade');

            $table->string('name')->nullable();
            $table->text('desc')->nullable();
            $table->integer('price')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
