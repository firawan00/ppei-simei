<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        User::create([
            'username' => 'admin',
            'name' => 'admin',
            'password' => 'password',
            'role' => 'admin',
        ], );

        User::create([
            'username' => 'user-import',
            'name' => 'user-import',
            'password' => 'password',
            'role' => 'user-import',
        ], );

        User::create([
            'username' => 'user-export',
            'name' => 'user-export',
            'password' => 'password',
            'role' => 'user-export',
        ], );

    }
}
