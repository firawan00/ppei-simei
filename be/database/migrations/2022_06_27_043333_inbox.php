<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Inbox extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('inbox', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('from')->references('id')->on('users')->onDelete('cascade');
            $table->foreignUuid('to')->references('id')->on('users')->onDelete('cascade');

            $table->string('ref-model');
            $table->string('ref-id');

            $table->string('title');
            $table->string('link');

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
    }
}
