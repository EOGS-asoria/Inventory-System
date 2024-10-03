<?php

namespace App\Http\Controllers;

use App\Models\AppInventory;
use Illuminate\Http\Request;

class AppInventoryController extends Controller
{
    public function index()
    {
        $app = AppInventory::get();
        return response()->json([
            'status' => $app
        ], 200);
    }
    public function show($id)
    {
        $app = AppInventory::where('id', $id)->first();
        return response()->json([
            'status' => $app
        ], 200);
    }
    public function store(Request $request)
    {
        AppInventory::create($request->all());
        return response()->json([
            'status' => 'success'
        ], 200);
    }
    public function update(Request $request, $id)
    {
        $app = AppInventory::where('id', $id)->first();
        $app->update($request->all());
        return response()->json([
            'status' => 'success'
        ], 200);
    }
    public function destroy($id)
    {
        $app = AppInventory::where('id', $id)->first();
        $app->delete();
        return response()->json([
            'status' => 'success'
        ], 200);
    }
}
