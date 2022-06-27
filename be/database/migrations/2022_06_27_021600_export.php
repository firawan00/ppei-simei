<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Export extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('export_inquiry', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('from')->references('id')->on('users')->onDelete('cascade');
            $table->foreignUuid('to')->references('id')->on('users')->onDelete('cascade');

            $table->string('docto');
            $table->string('tel');
            $table->string('fax');

            $table->string('article');
            $table->string('shipment');

            $table->string('who');
            $table->string('sentto');

            $table->timestamps();
        });

        Schema::create('export_lkn', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('to');
            $table->timestamps();
        });

        Schema::create('export_ordering', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('to');
            $table->timestamps();
        });

        Schema::create('export_peb', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('to');
            $table->timestamps();
        });

        Schema::create('export_salescontract', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('to');
            $table->timestamps();
        });

        Schema::create('export_lc', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('to');
            $table->timestamps();
        });

        Schema::create('export_ska', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('to');
            $table->timestamps();
        });

        Schema::create('export_wessel', function (Blueprint $table) {
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
        Schema::dropIfExists('export_inquiry');
        Schema::dropIfExists('export_lkn');
        Schema::dropIfExists('export_ordering');
        Schema::dropIfExists('export_peb');
        Schema::dropIfExists('export_salescontract');
        Schema::dropIfExists('export_lc');
        Schema::dropIfExists('export_ska');
        Schema::dropIfExists('export_wessel');

    }
}
