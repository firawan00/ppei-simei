<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\template1;



class EmailController extends Controller
{
    public $_fe_url;

    function __construct()
    {
        $this->fe_url = 'http://localhost:3000/';
    }

    public function email_test()
    {
        echo 'mail prep';
        $data = [
            'subject' => "Email Test",
            'heading' => "Thanks for testing up!",
            'body' => "this is just test email <br>",
            'button_text' => 'Verify my email address',
            'button_link' => $this->fe_url,
        ];
        Mail::to('genesha.irzan@gmail.com')->send(new template1($data));
        return true;
    }

    public function email_verification($email)
    {

        $user = User::firstWhere('email', $email);
        // --prepare email data
        $data = [
            'subject' => "Email verification ",
            'heading' => "Thanks for signing up!",
            'body' => "Help us secure your account by verifying that your email address is <br>" . $user->email,
            'button_text' => 'Verify my email address',
            'button_link' => $this->fe_url . 'user/verification/' . $user->id,
        ];

        // --sent email data
        Mail::to($user->email)->send(new template1($data));
        return true;
    }

    public function email_forgetpassword($email, $token)
    {
        // --prepare email data
        $data = [
            'subject' => "Password Recovery",
            'heading' => "There was a request to change your password!",
            'body' => "please click this link to change your password",
            'button_text' => 'Password Reset',
            'button_link' => $this->fe_url . 'newpassword/' . $token,
        ];
        // --sent email data
        Mail::to($email)->send(new template1($data));
        return true;
    }
}
