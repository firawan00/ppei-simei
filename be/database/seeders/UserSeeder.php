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

        $data2 = [
            'fasilitator-kepabeanan',
            'fasilitator-bank',
            'fasilitator-cargo',
            'fasilitator-ska',
        ];

        User::create([
            'username' => 'admin',
            'name' => 'admin',
            'password' => 'password',
            'role' => 'admin',
            'address' => "Jl. Letjen S. Parman No.112",

        ], );

        foreach ($data as $d) {
            # code...
            User::create([
                'username' => $d,
                'name' => "PT." . $d,
                'password' => 'password',
                'address' => "Jl. Letjen S. Parman No.112",
                'role' => str_contains($d, 'import') ? 'user-import' : 'user-export',
            ], );

        }

        foreach ($data2 as $d) {
            # code...
            User::create([
                'username' => $d,
                'name' => $d,
                'address' => "Jl. Letjen S. Parman No.112",
                'password' => 'password',
                'role' => $d,
            ], );

        }

    }
}
