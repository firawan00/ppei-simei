<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\AdminConfig;

class AdminConfigsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        AdminConfig::create([
            'name' => 'Template LC',
            'value' => 'uploads/template/lc-template.xls',
            'type' => 'file',
        ], );

        AdminConfig::create([
            'name' => 'Exchange IDRUSD',
            'value' => '16000',
            'type' => 'text',
        ], );

    }
}
