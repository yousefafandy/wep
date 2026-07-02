<?php

use Botble\Ecommerce\Models\Address;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    public function up(): void
    {
        if (! Schema::hasColumn('ec_customer_addresses', 'latitude')) {
            Schema::table('ec_customer_addresses', function (Blueprint $table) {
                $table->string('latitude', 25)->nullable()->after('zip_code');
                $table->string('longitude', 25)->nullable()->after('latitude');
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasColumn('ec_customer_addresses', 'latitude')) {
            Schema::table('ec_customer_addresses', function (Blueprint $table) {
                $table->dropColumn(['latitude', 'longitude']);
            });
        }
    }
};
