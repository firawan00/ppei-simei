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

        $data = [
            'user-export1', 'user-export2', 'user-export3', 'user-export4', 'user-export5',
            'user-import1', 'user-import2', 'user-import3', 'user-import4', 'user-import5',
        ];

        User::create([
            'username' => 'admin',
            'name' => 'admin',
            'password' => 'password',
            'role' => 'admin',
        ], );

        foreach ($data as $d) {
            # code...
            User::create([
                'username' => $d,
                'name' => $d,
                'password' => 'password',
                'role' => str_contains($d, 'import') ? 'user-import' : 'user-export',
            ], );

        }

    }
}
