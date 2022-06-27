<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Import extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //

        Schema::create('import_introductionletter', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('to');

            $table->string('ref');
            $table->string('desc');
            $table->string('type');
            $table->string('price_fob');

            $table->string('status');

            $table->timestamps();
        });

        Schema::create('import_offeringletter', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('to');
            $table->timestamps();
        });

        Schema::create('import_invoice', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('to');
            $table->timestamps();
        });

        Schema::create('import_packinglist', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('to');
            $table->timestamps();
        });

        Schema::create('import_deliveryorder', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('to');
            $table->timestamps();
        });
        Schema::create('import_billoflading', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('to');
            $table->timestamps();
        });

        Schema::create('import_ska', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('to');
            $table->timestamps();
        });

        Schema::create('import_wessel', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('to');
            $table->timestamps();
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
        Schema::dropIfExists('import_introductionletter');
        Schema::dropIfExists('import_offeringletter');
        Schema::dropIfExists('import_invoice');
        Schema::dropIfExists('import_packinglist');
        Schema::dropIfExists('import_deliveryorder');
        Schema::dropIfExists('import_billoflading');
        Schema::dropIfExists('import_ska');
        Schema::dropIfExists('import_wessel');

    }
}
