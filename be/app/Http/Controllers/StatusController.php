<?php

namespace App\Http\Controllers;

use App\Models\MD_peb;
use Illuminate\Http\Request;
use App\Models\User;

class StatusController extends Controller
{
    //

    public function status_handler(Request $r)
    {
        $model = 'App\\Models\\' . $r->model;
        $data = $model::where('id', $r->id)->first();
        $data->status = $r->status;
        $data->status_notes = $r->status == 'rejected' ? $r->status_notes : '';

        if ($r->status == 'approved' && ($r->model == 'MD_invoice' || $r->model == 'MD_packinglist' || $r->model == 'MD_shippinginstruction')) {
            $data->to = User::where('role', 'fasilitator-cargo')->first()->id;
            if ($r->model == 'MD_invoice' || $r->model == 'MD_packinglist') {

                $data->status_notes = 'Approved by Fasilitator Bank, Forward to Fasilitator Cargo';
            }

        }

        $data->save();
        return response()->json($data);
        # code...
    }
}
