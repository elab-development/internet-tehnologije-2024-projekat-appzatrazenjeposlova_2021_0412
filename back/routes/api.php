<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\KompanijaController;
use App\Http\Controllers\KategorijaKompanijeController;


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('kompanije/kategorije',[KategorijaKompanijeController::class,'index']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('kompanije/oglasi',[UserController::class,'oglasi']);

    Route::get('kompanije/{id}',[KompanijaController::class,'show']);   
    Route::get('kompanije/',[KompanijaController::class,'index']);
});
