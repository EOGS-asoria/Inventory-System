<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('login/page');
});

Route::get('/admin/dashboard', function () {
    return Inertia::render('admin/dashboard/page');
});

Route::get('/admin/users', function () {
    return Inertia::render('admin/users/page');
});

Route::get('/admin/department', function () {
    return Inertia::render('admin/department/page');
});

Route::get('/admin/office', function () {
    return Inertia::render('admin/office/page');
});

Route::get('/admin/position', function () {
    return Inertia::render('admin/position/page');
});

Route::get('/admin/equiptype', function () {
    return Inertia::render('admin/equiptype/page');
});

Route::get('/admin/apptype', function () {
    return Inertia::render('admin/apptype/page');
});

Route::get('/admin/maintenance', function () {
    return Inertia::render('admin/maintenance/page');
});

Route::get('/admin/reports', function () {
    return Inertia::render('admin/reports/page');
});

Route::get('/admin/equipinventory', function () {
    return Inertia::render('admin/equipinventory/page');
});

Route::get('/admin/appinventory', function () {
    return Inertia::render('admin/appinventory/page');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
