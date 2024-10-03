<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('equipment_inventories', function (Blueprint $table) {
            $table->id();
            $table->bigInteger("equipment_id")->nullable();
            $table->bigInteger("office_id")->nullable();
            $table->string("brand_name")->nullable();
            $table->string("model_no")->nullable();
            $table->string("serial_no")->nullable();
            $table->string("equipment_status")->nullable();
            $table->string("operating_system")->nullable();
            $table->string("processor")->nullable();
            $table->string("memory")->nullable();
            $table->string("storage")->nullable();
            $table->string("equipment_cost")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('equipment_inventories');
    }
};
