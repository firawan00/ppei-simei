<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Introductionletterchangeattr extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('md_introductionletter', function (Blueprint $table) {
            $table->text('desc_of_goods')->nullable()->change();

        });
        Schema::table('md_offeringletter', function (Blueprint $table) {
            $table->text('commodity')->nullable()->change();

        });
        Schema::table('md_inquiry', function (Blueprint $table) {
            $table->string('article')->nullable()->change();
            $table->string('who')->nullable()->change();
            $table->string('sentto')->nullable()->change();

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
