<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Module extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('md_inquiry', function (Blueprint $table) {
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

        Schema::create('md_introductionletter', function (Blueprint $table) {

            $table->id();
            $table->foreignUuid('from')->references('id')->on('users')->onDelete('cascade');
            $table->foreignUuid('to')->references('id')->on('users')->onDelete('cascade');

            $table->string('docref');
            $table->string('docto');

            $table->string('desc_of_goods');
            $table->string('type');
            $table->string('price_fob');

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
        // Schema::dropIfExists('import_introductionletter');
        // Schema::dropIfExists('import_offeringletter');
        // Schema::dropIfExists('import_invoice');
        // Schema::dropIfExists('import_packinglist');
        // Schema::dropIfExists('import_deliveryorder');
        // Schema::dropIfExists('import_billoflading');
        // Schema::dropIfExists('import_ska');
        // Schema::dropIfExists('import_wessel');

    }
}
