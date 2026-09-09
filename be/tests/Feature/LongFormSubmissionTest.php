<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class LongFormSubmissionTest extends TestCase
{
    use DatabaseTransactions;

    public function test_long_introduction_letter_keeps_its_id_content_and_inbox_reference()
    {
        $exporter = $this->user('long-form-exporter', 'user-export');
        $importer = $this->user('long-form-importer', 'user-import');
        $description = str_repeat('x', 500);

        $response = $this
            ->actingAs($exporter, 'api')
            ->postJson('/api/md_introductionletter', [
                'to' => $importer->id,
                'docref' => 'LONG-FORM-TEST',
                'desc_of_goods' => $description,
            ]);

        $response
            ->assertOk()
            ->assertJsonPath('desc_of_goods', $description);

        $id = $response->json('id');
        $this->assertNotNull($id);

        $this->assertDatabaseHas('md_introductionletter', [
            'id' => $id,
            'desc_of_goods' => $description,
        ]);
        $this->assertDatabaseHas('inbox', [
            'ref-id' => (string) $id,
            'to' => $importer->id,
        ]);
    }

    private function user($username, $role)
    {
        return User::create([
            'username' => $username,
            'name' => $username,
            'password' => 'password',
            'role' => $role,
        ]);
    }
}
