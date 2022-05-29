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
            'name' => 'admin',
            'password' => 'password',
            'email' => 'admin@admin.com',
            'status_id' => 3,

        ],);

        User::create([
            'name' => 'genesha admin',
            'password' => 'password',
            'email' => 'genesha@admin.com',
            'role_id' => 2,
            'status_id' => 3,


        ]);

        User::create([
            'name' => 'genesha user',
            'password' => 'password',
            'email' => 'genesha@user.com',
            'status_id' => 3,
        ]);
    }
}
