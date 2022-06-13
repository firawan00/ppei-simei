<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPaidToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('status', function (Blueprint $table) {
            //
            $table->id();
            $table->string('name')->nullable();
        });

        Schema::create('user_role', function (Blueprint $table) {
            //
            $table->id();
            $table->string('name')->nullable();
        });


        Schema::table('users', function (Blueprint $table) {
            //
            $table->string('name')->nullable()->change();
            $table->string('password')->nullable()->change();

            $table->foreignId('status_id')->after('id')->default(1)->constrained('status')->cascadeOnDelete();
            $table->foreignId('role_id')->after('id')->default(1)->constrained('user_role')->cascadeOnDelete();

            $table->boolean('gender')->nullable()->after('password');
            $table->string('img_path')->nullable()->after('password');
            $table->string('address')->nullable()->after('password');
            $table->boolean('phone')->nullable()->after('password');

            $table->string('provider')->nullable()->after('password');
            $table->text('preference')->nullable();
            $table->text('about')->nullable()->after('password');;

            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
}
