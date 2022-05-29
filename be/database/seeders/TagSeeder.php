<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Tag;
use App\Models\TagGroup;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $group = ['gr1', 'gr2'];

        foreach ($group as $val) {
            TagGroup::create([
                'name' => $val,
            ]);
        }


        for ($i = 0; $i < 10; $i++) {
            Tag::create(
                [
                    'name' => "group" . $i,
                    'group_id' => $i < 5 ? 1 : 2,
                ]
            );
        }
    }
}
