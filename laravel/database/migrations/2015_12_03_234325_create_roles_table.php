<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('roles', function (Blueprint $table) {
          $table->increments('id');
          $table->string('title');
      });

      Schema::create('users_roles_rel', function (Blueprint $table)
      {
          $table->integer('user_id')->unsigned();
          $table->integer('role_id')->unsigned();
          $table->foreign('user_id')->references('id')->on('users');
          $table->foreign('role_id')->references('id')->on('roles');
      });

      $adminRole = new \App\Role(["title" => "admin"]);
      $adminRole->save();

      $userRole = new \App\Role(["title" => "user"]);
      $userRole->save();

      $rescueRole = new \App\Role(["title" => "rescue"]);
      $rescueRole->save();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('roles');
        Schema::drop('users_roles_rel');
    }
}
