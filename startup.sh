#!/bin/bash
set -e

cd /app

# Generate .env from container environment variables
touch .env
printenv | while IFS='=' read -r name value; do
    echo "$name=$value" >> .env
done

# Optimize Laravel
php artisan config:cache 2>/dev/null || true
php artisan route:cache 2>/dev/null || true

# Fix permissions
chmod -R 777 storage bootstrap/cache public/vendor public/storage 2>/dev/null || true

# Create storage symlink
php artisan storage:link 2>/dev/null || true

# Start nginx and php-fpm
node /assets/scripts/prestart.mjs /assets/nginx.template.conf /nginx.conf
php-fpm -y /assets/php-fpm.conf
nginx -c /nginx.conf
