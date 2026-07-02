<?php
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$filter = app('botble.filter');
$ref = new ReflectionClass($filter);
$prop = $ref->getProperty('filters');
$prop->setAccessible(true);
$filters = $prop->getValue($filter);

$hookName = 'ecommerce_checkout_address_form_after';
if (isset($filters[$hookName])) {
    echo "FILTER '$hookName' HAS " . count($filters[$hookName]) . " HANDLERS\n";
} else {
    echo "FILTER '$hookName' NOT FOUND\n";
}
$hookName2 = 'ecommerce_checkout_form_before';
if (isset($filters[$hookName2])) {
    echo "FILTER '$hookName2' HAS " . count($filters[$hookName2]) . " HANDLERS\n";
} else {
    echo "FILTER '$hookName2' NOT FOUND\n";
}
echo "Done\n";
