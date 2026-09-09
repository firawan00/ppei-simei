<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ExpandMultilineFormFields extends Migration
{
    public function up()
    {
        Schema::table('md_inquiry', function (Blueprint $table) {
            $table->text('article')->nullable()->change();
            $table->text('who')->nullable()->change();
            $table->text('sentto')->nullable()->change();
        });

        Schema::table('md_lc_release', function (Blueprint $table) {
            $table->text('sender')->nullable()->change();
            $table->text('receiver')->nullable()->change();
        });
    }

    public function down()
    {
        Schema::table('md_inquiry', function (Blueprint $table) {
            $table->string('article')->nullable()->change();
            $table->string('who')->nullable()->change();
            $table->string('sentto')->nullable()->change();
        });

        Schema::table('md_lc_release', function (Blueprint $table) {
            $table->string('sender')->nullable()->change();
            $table->string('receiver')->nullable()->change();
        });
    }
}
