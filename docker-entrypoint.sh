#!/bin/sh
set -e

echo "🚀 Injecting environment variables into env-config.js..."

# Replace placeholders with actual environment variables
if [ -f /usr/share/nginx/html/env-config.js ]; then
  envsubst < /usr/share/nginx/html/env-config.js > /usr/share/nginx/html/env-config.js.tmp
  mv /usr/share/nginx/html/env-config.js.tmp /usr/share/nginx/html/env-config.js
else
  echo "⚠️  env-config.js not found, skipping injection."
fi

echo "✅ Starting Nginx..."
exec "$@"
