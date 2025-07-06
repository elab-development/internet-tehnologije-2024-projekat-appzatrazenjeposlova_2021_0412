<?php
 
 namespace App\Http\Controllers;

 use App\Models\User;

 use Illuminate\Http\Request;
 
 use App\Http\Resources\OglasResource;

 use Illuminate\Support\Facades\Auth;
 use Illuminate\Support\Facades\Log;
 
 class UserController extends Controller
 {
     


    public function oglasi(){
        try {
            
  
            $user = Auth::user();
            return  OglasResource::collection($user->nasiOglasi);
            

        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Došlo je do greške prilikom uzimanja oglasa korisnika.',
                'message' => $e->getMessage(),
            ], 500);
        }

    }
   



    

     
 }