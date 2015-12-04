<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\User;
use View;
use Input;
use Auth;
use Redirect;

class SessionsController extends Controller
{
    /**
     * Representation of a login attempt
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $attempt = Auth::attempt([
        'email' => $request->input('email'),
        'password' => $request->input('password')
      ]);

      return Redirect::back();
    }

    /**
     * Representation of a logout attempt
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy()
    {
        Auth::logout();
        return Redirect::back();
    }

    public function create()
    {
        return view('login');
    }

    public function facebook()
    {
      $user = \Socialize::with('facebook')->stateless()->user();
      if(count(User::where('email', '=', $user->email)->get()) == 0)
      {
        return view('register', ['user' => $user->user]);
      }
    }
}
