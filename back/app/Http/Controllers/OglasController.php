<?php

namespace App\Http\Controllers;

use App\Models\Oglas;
use App\Http\Resources\OglasResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class OglasController extends Controller
{
    public function index(Request $request)
    {
        try {
           
            $validator = $request->validate([
                'tip' => 'nullable|string|max:255',
                 'kategorija_id' => 'nullable|integer|exists:kategorije_oglasa,id',
               
            ]);

            $query = Oglas::query();

           
            if ($request->filled('tip')) {
                $query->where('tip', 'like', '%' . $request->tip . '%');
            }

           
            if ($request->filled('kategorija_id')) {
                $query->where('kategorija_id', $request->kategorija_id);
            }

           
            $oglasi = $query->orderBy('created_at', 'desc')->paginate(10);

            return OglasResource::collection($oglasi);

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
            $user = Auth::user();
            $role=null;
            if($user->type=='admin')
            $role='admin';
            $oglas = Oglas::findOrFail($id);
            if($user->id==$oglas->user_id)
            $role='company';

            return response()->json([
                'data'=>  new OglasResource($oglas),
                'role'=>$role,
            ]);
           
        }  catch (\Exception $e) {
           
            return response()->json([
                'success' => false,
                'message' => 'Došlo je do greške prilikom obrade zahteva.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }




}
