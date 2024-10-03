<?php

use App\Http\Controllers\AppInventoryController;
use App\Http\Controllers\AppTypeController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\EquipmentInventoryController;
use App\Http\Controllers\EquipmentTypeController;
use App\Http\Controllers\MaintenanceController;
use App\Http\Controllers\OfficeController;
use App\Http\Controllers\PositionController;
use App\Http\Controllers\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
 
Route::resource('users', UsersController::class);
Route::resource('employee', EmployeeController::class);
Route::resource('department', DepartmentController::class);
Route::resource('office', OfficeController::class);
Route::resource('position', PositionController::class);
Route::resource('equipment_type', EquipmentTypeController::class);
Route::resource('app_type', AppTypeController::class);
Route::resource('maintenance', MaintenanceController::class);
Route::resource('equipment_inventory', EquipmentInventoryController::class);
Route::resource('app_inventory', AppInventoryController::class);