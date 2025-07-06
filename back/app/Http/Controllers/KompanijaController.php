<?php

namespace App\Http\Controllers;

use App\Models\Kompanija;
use App\Models\User;
use App\Http\Resources\UserResource;
use App\Http\Resources\KompanijaResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class KompanijaController extends Controller
{
    public function index(Request $request)
{
    try {
      
        $validator = $request->validate([
            'kategorija' => 'nullable|array',
            'kategorija.id' => 'required_with:kategorija|integer|exists:kategorije_kompanije,id',
            'kategorija.naziv' => 'nullable|string|max:255',
        ]);

       
        $query = Kompanija::query();

      
       

      
        if ($request->filled('kategorija.id')) {
            $query->where('kategorija_id', $request->input('kategorija.id'));
        }

        else {
            $query->orderBy('naziv', 'asc');
        }
      
        $kompanije = $query->paginate(6);

        return  KompanijaResource::collection($kompanije);
    } catch (\Exception $e) {
       
        return response()->json([
            'success' => false,
            'message' => 'Došlo je do greške prilikom obrade zahteva.',
            'error' => $e->getMessage(),
        ], 500);
    }
}



public function show($id)
{
    try {
             $user = User::findOrFail($id);
            return new UserResource($user);
      
    } catch (\Exception $e) {

        return response()->json([
            'success' => false,
            'message' => 'Došlo je do greške prilikom učitavanja podataka o kompaniji.',
            'error' => $e->getMessage(),
        ], 500);
    }
}






}
