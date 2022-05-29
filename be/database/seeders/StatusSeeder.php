<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Status;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $status = [
            [
                'name' => 'upending',
            ],
            [
                'name' => 'uregister',
            ],
            [
                'name' => 'uactive',
            ],

        ];

        $statuspost = [

            [
                'id' => 10,
                'name' => 'pinactive',
            ],
            [
                'id' => 11,
                'name' => 'pactive',
            ]
        ];
        Status::insert($status);
        Status::insert($statuspost);
    }
}
