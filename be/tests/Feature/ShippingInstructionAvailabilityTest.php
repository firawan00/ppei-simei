<?php

namespace Tests\Feature;

use App\Models\MD_deliveryorder;
use App\Models\MD_shippinginstruction;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Carbon;
use Tests\TestCase;

class ShippingInstructionAvailabilityTest extends TestCase
{
    use DatabaseTransactions;

    public function test_cargo_only_sees_todays_unused_shipping_instructions_sent_to_them()
    {
        $exporter = $this->user('diagnosis-exporter', 'user-export');
        $otherExporter = $this->user('diagnosis-other-exporter', 'user-export');
        $cargo = $this->user('diagnosis-cargo', 'fasilitator-cargo');
        $otherCargo = $this->user('diagnosis-other-cargo', 'fasilitator-cargo');

        $old = $this->shippingInstruction($exporter, $cargo, 'DUPLICATE', Carbon::now()->subMonths(2));
        $used = $this->shippingInstruction($exporter, $cargo, 'DUPLICATE', Carbon::now()->subMinute());
        $available = $this->shippingInstruction($exporter, $cargo, 'DUPLICATE', Carbon::now());
        $wrongCargo = $this->shippingInstruction($otherExporter, $otherCargo, 'DUPLICATE', Carbon::now());

        MD_deliveryorder::create([
            'from' => $cargo->id,
            'to' => $exporter->id,
            'si_id' => $used->id,
        ]);

        $this->assertSame(
            Carbon::now()->subMonths(2)->toDateString(),
            Carbon::parse($old->fresh()->created_at)->toDateString()
        );
        $this->assertTrue($used->deliveryOrder()->exists());

        $response = $this
            ->actingAs($cargo, 'api')
            ->getJson("/api/md_shippinginstruction?to={$otherCargo->id}&available=1");

        $response
            ->assertOk()
            ->assertJsonCount(1)
            ->assertJsonPath('0.id', $available->id);

        $returnedIds = collect($response->json())->pluck('id');
        $this->assertFalse($returnedIds->contains($old->id));
        $this->assertFalse($returnedIds->contains($used->id));
        $this->assertFalse($returnedIds->contains($wrongCargo->id));
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

    private function shippingInstruction(User $from, User $to, $docref, Carbon $createdAt)
    {
        return MD_shippinginstruction::create([
            'from' => $from->id,
            'to' => $to->id,
            'docref' => $docref,
            'product_list' => '[]',
            'status' => 'pending',
            'created_at' => $createdAt,
            'updated_at' => $createdAt,
        ]);
    }
}
