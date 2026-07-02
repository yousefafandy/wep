<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    public function up(): void
    {
        if (Schema::hasColumn('ec_order_addresses', 'latitude')) {
            return;
        }

        Schema::table('ec_order_addresses', function (Blueprint $table): void {
            $table->decimal('latitude', 10, 8)->nullable()->after('zip_code');
            $table->decimal('longitude', 11, 8)->nullable()->after('latitude');
        });
    }

    public function down(): void
    {
        try {
            Schema::table('ec_order_addresses', function (Blueprint $table): void {
                $table->dropColumn(['latitude', 'longitude']);
            });
        } catch (Throwable) {
        }
    }
};
