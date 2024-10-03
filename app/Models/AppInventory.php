<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AppInventory extends Model
{
    use HasFactory;
    protected $fillable = [
        "app_id",
        "office_id",
        "brand_name",
        "model_no",
        "serial_no",
        "quantity",
    ];
}
