<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\UserRole as Model;

class UserRole extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $roles = [
            [
                'name' => 'user',
            ],
            [
                'name' => 'admin',
            ],
        ];
        Model::insert($roles);
    }
}
