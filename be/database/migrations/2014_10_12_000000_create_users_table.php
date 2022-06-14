<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
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


        Schema::create('users', function (Blueprint $table) {
            $table->uuid('id')->primary();

            $table->foreignId('status_id')->default(1)->constrained('status')->cascadeOnDelete();
            $table->foreignId('role_id')->default(1)->constrained('user_role')->cascadeOnDelete();

            $table->string('email')->unique();
            $table->string('password')->nullable();

            $table->string('name')->nullable();
            $table->boolean('gender')->nullable();
            $table->string('img_path')->nullable();
            $table->string('address')->nullable();
            $table->boolean('phone')->nullable();


            $table->timestamp('email_verified_at')->nullable();
            $table->string('provider')->nullable();
            $table->text('preference')->nullable();
            $table->text('about')->nullable();;
            // $table->rememberToken();

            $table->timestamps();
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
        Schema::dropIfExists('users');
        Schema::dropIfExists('status');
        Schema::dropIfExists('user_role');
    }
}
