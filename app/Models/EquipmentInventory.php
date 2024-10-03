<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EquipmentInventory extends Model
{
    use HasFactory;
    protected $fillable = [
        "equipment_id",
        "office_id",
        "brand_name",
        "model_no",
        "serial_no",
        "equipment_status",
        "operating_system",
        "processor",
        "memory",
        "storage",
        "equipment_cost",
    ];


}
