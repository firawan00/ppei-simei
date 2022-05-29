<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class EmailVerification extends Mailable
{
    use Queueable, SerializesModels;

    public $details;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        //
        $this->data = $data;
    }


    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        // return $this->view('email.verification');
        dd($this->data)

        return $this->from(env("MAIL_FROM_ADDRESS", "helloha_no-reply@helloha.app"))
            ->subject($this->data->mail_subject)
            ->view('email.' . $this->data->mail_template)
            ->with(
                [
                    'data' => $this->data,
                    'arrContextOptions' => $arrContextOptions,
                ]
            );
    }
}
