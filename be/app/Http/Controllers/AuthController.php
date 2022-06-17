<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Http;

class AuthController extends Controller
{

    public function signin(Request $r)
    {
        $r->validate([
            'username' => 'required',
            'password' => 'required',
        ]);

        if (Auth::attempt(['username' => $r->username, 'password' => $r->password])) {
            $user = Auth::user();
            return response()->json($user);
        } else {
            return response()->json([
                'error' => 'invalid login',
            ], 400);
        }

    }

    public function signup(Request $r)
    {

        if ($r->passcode != '1234') {
            return response()->json([
                'error' => 'passcode missmatch',
            ], 400);
        }

        if (User::whereUsername($r->username)->first()) {
            return response()->json([
                'error' => 'username registered, please try user another username',
            ], 400);
        }

        $user = User::firstOrCreate(['username' => $r->username], $r->except(['passcode']));
        return response()->json($user);

    }

    public function emailverification(Request $r)
    {
        $user = User::whereId($r->id)->first();
        if ($user) {

            if ($user->status_id == 1) {
                $user->email_verified_at = Carbon::now();
                $user->status_id = 2;
                $user->save();

                return response()->json(['data' => 'success']);
            } else {
                return response()->json(['data' => 'already actived']);
            }
        }
        return response()->json([
            'error' => 'invalid varification',
        ], 400);
    }

    public function reverification(Request $r)
    {
        $email = new EmailController;
        $email->email_verification($r->email);
        return response()->json($r);
    }

    public function register(Request $r)
    {
        $user = Auth::user();
        $user->update($r->except(['id']));
        $user->save();
        // $token = ['token' => ($user->createToken($user->email . '-' . now()))->accessToken];
        // $data = (object)array_merge((array)json_decode($user), (array)$token);
        // return response()->json($data);

        return response()->json($user);
        # code...
    }

    public function emailcheck(Request $r)
    {
        $user = User::whereEmail($r->email)->first();
        if ($user) {
            return response()->json('email exist');
        } else {
            return response()->json('ok');
        }

    }

    public function forgetpassword(Request $r)
    {
        # code...

        $user = User::whereEmail($r->email)->first();
        if ($user) {
            $token = \Str::random(40);
            $user->reset_token = $token;
            $user->save();
            $email = new EmailController;
            $email->email_forgetpassword($r->email, $token);
            return response()->json('ok');
        } else {
            return response()->json('not ok');
        }

    }
    public function passwordreset(Request $r)
    {
        $user = User::where('reset_token', $r->reset_token)->first();
        if ($user) {
            $user->reset_token = '';
            $user->password = $r->password;
            $user->save();
            return response()->json('ok');
        } else {
            return response()->json('not ok');
        }

    }

    public function edit(Request $r)
    {
        # code...dd
        $user = Auth::user();
        if ($user) {
            $user->name = $r->name;
            $user->phone = $r->phone;
            $user->password = $r->password;
            $user->save();

            $token = ['token' => ($user->createToken($user->email . '-' . now()))->accessToken];
            $data = (object) array_merge((array) json_decode($user), (array) $token);
            return response()->json($data);
        } else {
            return response()->json('not ok');
        }

    }
}
