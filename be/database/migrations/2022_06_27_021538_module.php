<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Module extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('md_inquiry', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('from')->references('id')->on('users')->onDelete('cascade');
            $table->foreignUuid('to')->references('id')->on('users')->onDelete('cascade');
            $table->date('date')->nullable();

            $table->string('docto')->nullable();
            $table->string('tel')->nullable();
            $table->string('fax')->nullable();

            $table->string('article')->nullable();
            $table->string('shipment')->nullable();

            $table->string('who')->nullable();
            $table->string('sentto')->nullable();

            $table->timestamps();
        });

        Schema::create('md_introductionletter', function (Blueprint $table) {

            $table->id();
            $table->foreignUuid('from')->references('id')->on('users')->onDelete('cascade');
            $table->foreignUuid('to')->references('id')->on('users')->onDelete('cascade');
            $table->date('date')->nullable();

            $table->string('docref')->nullable();
            $table->string('docto')->nullable();

            $table->string('desc_of_goods')->nullable();
            $table->string('type')->nullable();
            $table->string('price_fob')->nullable();

            $table->timestamps();
        });

        Schema::create('md_offeringletter', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('from')->references('id')->on('users')->onDelete('cascade');
            $table->foreignUuid('to')->references('id')->on('users')->onDelete('cascade');
            $table->date('date')->nullable();

            $table->string('doc_no')->nullable();
            $table->string('doc_cc')->nullable();
            $table->string('doc_to')->nullable();

            $table->string('commodity')->nullable();
            $table->string('qty')->nullable();
            $table->string('fob')->nullable();
            $table->string('packing')->nullable();
            $table->string('shipment')->nullable();
            $table->string('top')->nullable();
            $table->string('validity')->nullable();

            $table->timestamps();
        });

        Schema::create('md_lkn', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('from')->references('id')->on('users')->onDelete('cascade');
            $table->foreignUuid('to')->references('id')->on('users')->onDelete('cascade');
            $table->date('date')->nullable();

            $table->string('jenis_incoterm')->nullable();
            $table->string('latest_date_shipment')->nullable();
            $table->longText('product_list')->nullable();

            $table->timestamps();
        });

        Schema::create('md_ordering', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('from')->references('id')->on('users')->onDelete('cascade');
            $table->foreignUuid('to')->references('id')->on('users')->onDelete('cascade');
            $table->date('date')->nullable();

            $table->string('destination')->nullable();
            $table->string('notify')->nullable();
            $table->string('packing')->nullable();
            $table->string('partial_shipment')->nullable();
            $table->string('payment')->nullable();
            $table->string('transshipment')->nullable();
            $table->string('tod')->nullable();

            $table->longText('product_list')->nullable();

            $table->timestamps();
        });

        Schema::create('md_salescontract', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('from')->references('id')->on('users')->onDelete('cascade');
            $table->foreignUuid('to')->references('id')->on('users')->onDelete('cascade');
            $table->date('date')->nullable();

            $table->string('destination')->nullable();
            $table->string('notify_address')->nullable();
            $table->string('partial_shipment')->nullable();
            $table->string('payment')->nullable();
            $table->string('shipment_date')->nullable();
            $table->string('shipping_marks')->nullable();
            $table->string('transshipment')->nullable();

            $table->longText('product_list')->nullable();
            $table->timestamps();
        });

        Schema::create('md_invoice', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('from')->references('id')->on('users')->onDelete('cascade');
            $table->foreignUuid('to')->references('id')->on('users')->onDelete('cascade');
            $table->date('date')->nullable();

            $table->string('consignee')->nullable();

            $table->string('destination')->nullable();
            $table->string('issuing_bank')->nullable();
            $table->string('lcno')->nullable();
            $table->string('no')->nullable();
            $table->string('scno')->nullable();
            $table->string('ship_by')->nullable();
            $table->string('ship_on')->nullable();
            $table->string('shipping_mark')->nullable();
            $table->string('tod')->nullable();

            $table->longText('product_list')->nullable();

            $table->timestamps();
        });

        Schema::create('md_packinglist', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('from')->references('id')->on('users')->onDelete('cascade');
            $table->foreignUuid('to')->references('id')->on('users')->onDelete('cascade');
            $table->date('date')->nullable();

            $table->string('consignee')->nullable();

            $table->string('destination')->nullable();
            $table->string('issuing_bank')->nullable();
            $table->string('lcno')->nullable();
            $table->string('no')->nullable();
            $table->string('scno')->nullable();
            $table->string('ship_by')->nullable();
            $table->string('ship_on')->nullable();
            $table->string('shipping_mark')->nullable();
            $table->string('tod')->nullable();

            $table->longText('product_list')->nullable();

            $table->timestamps();
        });

        Schema::create('md_shippinginstruction', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('from')->references('id')->on('users')->onDelete('cascade');
            $table->foreignUuid('to')->references('id')->on('users')->onDelete('cascade');
            $table->date('date')->nullable();

            $table->string('consignee')->nullable();
            $table->string('copy_bl')->nullable();
            $table->string('desc_goods')->nullable();
            $table->string('docref')->nullable();
            $table->string('docto')->nullable();
            $table->string('feeder_vessel')->nullable();
            $table->string('gross_weight')->nullable();
            $table->string('lc_ref')->nullable();
            $table->string('nett_weight')->nullable();
            $table->string('notify_party')->nullable();

            $table->string('num_package')->nullable();
            $table->string('ocean_vessel')->nullable();
            $table->string('pod')->nullable();
            $table->string('pol')->nullable();
            $table->string('por')->nullable();
            $table->string('shipper')->nullable();
            $table->string('shipping_marks')->nullable();

            $table->timestamps();
        });

        Schema::create('md_deliveryorder', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('from')->references('id')->on('users')->onDelete('cascade');
            $table->foreignUuid('to')->references('id')->on('users')->onDelete('cascade');
            $table->date('date')->nullable();

            $table->string('container_no')->nullable();
            $table->string('est')->nullable();
            $table->string('hal')->nullable();
            $table->string('juml_container')->nullable();
            $table->string('no')->nullable();
            $table->string('rencana_kapal')->nullable();
            $table->string('seal_no')->nullable();
            $table->string('shipper')->nullable();
            $table->string('sino')->nullable();
            $table->string('tujuan')->nullable();

            $table->timestamps();
        });

        Schema::create('md_billoflading', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('from')->references('id')->on('users')->onDelete('cascade');
            $table->foreignUuid('to')->references('id')->on('users')->onDelete('cascade');
            // $table->date('date')->nullable();
            $table->longText('data')->nullable();

            $table->timestamps();
        });

        Schema::create('md_ska_a', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('from')->references('id')->on('users')->onDelete('cascade');
            $table->foreignUuid('to')->references('id')->on('users')->onDelete('cascade');

            $table->unsignedInteger('invoice_id')->nullable();
            $table->unsignedInteger('pl_id')->nullable();
            $table->unsignedInteger('bl_id')->nullable();
            $table->unsignedInteger('npe_id')->nullable();

            $table->string('status')->nullable();
            $table->string('status_notes')->nullable();

            $table->longText('data')->nullable();

            $table->timestamps();
        });

        Schema::create('md_ska_d', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('from')->references('id')->on('users')->onDelete('cascade');
            $table->foreignUuid('to')->references('id')->on('users')->onDelete('cascade');

            $table->unsignedInteger('invoice_id')->nullable();
            $table->unsignedInteger('pl_id')->nullable();
            $table->unsignedInteger('bl_id')->nullable();
            $table->unsignedInteger('npe_id')->nullable();

            $table->string('status')->nullable();
            $table->string('status_notes')->nullable();

            $table->longText('data')->nullable();

            $table->timestamps();
        });

        Schema::create('md_wessel', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('from')->references('id')->on('users')->onDelete('cascade');
            $table->foreignUuid('to')->references('id')->on('users')->onDelete('cascade');

            $table->unsignedInteger('invoice_id')->nullable();
            $table->unsignedInteger('pl_id')->nullable();
            $table->unsignedInteger('bl_id')->nullable();
            $table->unsignedInteger('npe_id')->nullable();
            $table->unsignedInteger('skaa_id')->nullable();
            $table->unsignedInteger('skad_id')->nullable();

            $table->string('status')->nullable();
            $table->string('status_notes')->nullable();

            $table->longText('data')->nullable();

            $table->timestamps();

        });

        Schema::create('md_lc', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('from')->references('id')->on('users')->onDelete('cascade');
            $table->foreignUuid('to')->references('id')->on('users')->onDelete('cascade');

            $table->string('status')->nullable();
            $table->string('status_notes')->nullable();

            $table->longText('data')->nullable();
            $table->string('file_path')->nullable();

            $table->timestamps();

        });

        Schema::create('md_lc_release', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('from')->references('id')->on('users')->onDelete('cascade');
            $table->foreignUuid('to')->references('id')->on('users')->onDelete('cascade');

            $table->string('sender')->nullable();
            $table->string('receiver')->nullable();
            $table->longText('data')->nullable();

            $table->timestamps();

        });

        Schema::create('md_peb', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('from')->references('id')->on('users')->onDelete('cascade');
            $table->foreignUuid('to')->references('id')->on('users')->onDelete('cascade');

            $table->unsignedInteger('invoice_id')->nullable();
            $table->unsignedInteger('si_id')->nullable();
            $table->unsignedInteger('pl_id')->nullable();
            $table->string('status')->nullable();
            $table->string('status_notes')->nullable();

            $table->longText('product_list')->nullable();

            $table->timestamps();

        });

        Schema::create('md_npe', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('from')->references('id')->on('users')->onDelete('cascade');
            $table->foreignUuid('to')->references('id')->on('users')->onDelete('cascade');
            $table->longText('data')->nullable();
            $table->timestamps();

        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        // Schema::dropIfExists('import_introductionletter');
        // Schema::dropIfExists('import_offeringletter');
        // Schema::dropIfExists('import_invoice');
        // Schema::dropIfExists('import_packinglist');
        // Schema::dropIfExists('import_deliveryorder');
        // Schema::dropIfExists('import_billoflading');
        // Schema::dropIfExists('import_ska');
        // Schema::dropIfExists('import_wessel');

    }
}
