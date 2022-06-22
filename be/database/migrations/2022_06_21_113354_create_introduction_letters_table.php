<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIntroductionLettersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('import_introduction_letters', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('user_id')->references('id')->on('users')->onDelete('cascade');

            $table->string('ref');
            $table->string('to');
            $table->string('desc');
            $table->string('type');
            $table->string('price_fob');

            $table->string('status');

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
        Schema::dropIfExists('introduction_letters');
    }
}
