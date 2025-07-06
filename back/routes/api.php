<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\KompanijaController;
use App\Http\Controllers\KategorijaKompanijeController;
use App\Http\Controllers\OglasController;
use App\Http\Controllers\PrijavaController;
use App\Http\Controllers\KategorijaOglasaController;
use App\Http\Controllers\PostController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('kompanije/kategorije',[KategorijaKompanijeController::class,'index']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('kompanije/oglasi',[UserController::class,'oglasi']);

    Route::get('kompanije/{id}',[KompanijaController::class,'show']);   
    Route::get('kompanije/',[KompanijaController::class,'index']);

    Route::put('kompanije/{id}',[KompanijaController::class,'update']);

    Route::get('oglasi/',[OglasController::class,'index']);
    Route::get('oglasi/{id}',[OglasController::class,'show']);

    Route::post('oglasi',[OglasController::class,'store']);
    Route::delete('oglasi/{id}',[OglasController::class,'destroy']);


    Route::put('prijave/{id}',[PrijavaController::class,'update']);
    Route::post('prijave/',[PrijavaController::class,'store']);



    Route::get('users/studenti',[UserController::class,'vratiStudente']);
       Route::delete('users/{id}',[UserController::class,'destroy']);

    Route::get('users/moje-prijave',[UserController::class,'prijave']);
      Route::apiResource('postovi', PostController::class);

    Route::get('kategorije',[KategorijaOglasaController::class,'index']);
    Route::post('kategorije',[KategorijaOglasaController::class,'store']);
    Route::delete('kategorije/{id}',[KategorijaOglasaController::class,'destroy']);
});
