<?php
 
 namespace App\Http\Controllers;

 use App\Models\User;

 use Illuminate\Http\Request;
 
 use App\Http\Resources\OglasResource;
 use App\Http\Resources\UserResource;
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
   


       public function vratiStudente()
    {
        try {
           
            $studenti = User::where('type', 'student')->paginate(5);
            return UserResource::collection($studenti);
    
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Došlo je do greške prilikom učitavanja korisnika.',
                'error' => $e->getMessage()
            ], 500); 
        }
    }


    

     
 }