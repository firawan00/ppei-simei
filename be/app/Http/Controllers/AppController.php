<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Carbon;

use App\Models\MD_introductionletter;
use App\Models\MD_offeringletter;
use App\Models\MD_lc_release;
use App\Models\MD_invoice;
use App\Models\MD_packinglist;
use App\Models\MD_shippinginstruction;
use App\Models\MD_deliveryorder;
use App\Models\MD_peb;
use App\Models\MD_npe;
use App\Models\MD_billoflading;
use App\Models\MD_ska_a;
use App\Models\MD_ska_d;
use App\Models\MD_wessel;

use App\Models\MD_inquiry;
use App\Models\MD_lkn;
use App\Models\md_ordering;
use App\Models\MD_salescontract;
use App\Models\MD_lc;

class AppController extends Controller
{
    //
    public function Dashboard(Request $r)
    {
        $data = (object) [
        ];

        $data->MD_introductionletter = MD_introductionletter::whereFrom(Auth::id())->whereDate('created_at', Carbon::today())->first();
        $data->MD_offeringletter = MD_offeringletter::whereFrom(Auth::id())->whereDate('created_at', Carbon::today())->first();
        $data->MD_lc_release = MD_lc_release::whereTo(Auth::id())->whereDate('created_at', Carbon::today())->first();
        $data->MD_invoice = MD_invoice::whereFrom(Auth::id())->whereDate('created_at', Carbon::today())->first();
        $data->MD_packinglist = MD_packinglist::whereFrom(Auth::id())->whereDate('created_at', Carbon::today())->first();
        $data->MD_shippinginstruction = MD_shippinginstruction::whereFrom(Auth::id())->whereDate('created_at', Carbon::today())->first();
        $data->MD_deliveryorder = MD_deliveryorder::whereTo(Auth::id())->whereDate('created_at', Carbon::today())->first();
        $data->MD_peb = MD_peb::whereFrom(Auth::id())->whereDate('created_at', Carbon::today())->first();
        $data->MD_npe = MD_npe::whereTo(Auth::id())->whereDate('created_at', Carbon::today())->first();
        $data->MD_billoflading = MD_billoflading::whereTo(Auth::id())->whereDate('created_at', Carbon::today())->first();
        $data->MD_ska_a = MD_ska_a::whereFrom(Auth::id())->whereDate('created_at', Carbon::today())->first();
        $data->MD_ska_d = MD_ska_d::whereFrom(Auth::id())->whereDate('created_at', Carbon::today())->first();
        $data->MD_wessel = MD_wessel::whereFrom(Auth::id())->whereDate('created_at', Carbon::today())->first();

        $data->MD_inquiry = MD_inquiry::whereFrom(Auth::id())->whereDate('created_at', Carbon::today())->first();
        $data->MD_lkn = MD_lkn::whereFrom(Auth::id())->whereDate('created_at', Carbon::today())->first();
        $data->md_ordering = md_ordering::whereFrom(Auth::id())->whereDate('created_at', Carbon::today())->first();
        $data->MD_salescontract = MD_salescontract::whereFrom(Auth::id())->whereDate('created_at', Carbon::today())->first();
        $data->MD_lc = MD_lc::whereFrom(Auth::id())->whereDate('created_at', Carbon::today())->first();

        return response()->json($data);
        # code...
    }
}
