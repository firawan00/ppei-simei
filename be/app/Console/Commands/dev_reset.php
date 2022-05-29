<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class dev_reset extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'g:reset {--withdata}';


    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $devider = "------\n";

        echo "GENESHA INITIALIZATION\n";
        echo $devider;

        Artisan::call('migrate:fresh --seed', [], $this->getOutput());
        Artisan::call('optimize', [], $this->getOutput());
        echo $devider;


        return;
    }
}
