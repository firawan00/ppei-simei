<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('metas', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('type')->nullable();
            $table->integer('likes')->default(0);
            $table->integer('bookmarked')->default(0);

            $table->foreignId('status_id')->default(11)->constrained('status')->cascadeOnDelete();

            $table->string('tags')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->uuid('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            $table->uuidMorphs('content');
        });

        Schema::create('posts_news', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title');
            $table->string('content')->nullable();
            $table->string('img_cover')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('posts_receipt', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title');
            $table->string('content')->nullable();
            $table->string('img_cover')->nullable();
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
        Schema::dropIfExists('posts');
    }
}
