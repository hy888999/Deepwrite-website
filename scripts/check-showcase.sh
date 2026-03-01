#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-https://website.deepwrite.online}"
URLS=(
  "$BASE_URL/showcase/deepwrite-export"
  "$BASE_URL/examples/deepwrite-export"
  "$BASE_URL/examples/deepwrite-export/case-1/"
  "$BASE_URL/examples/deepwrite-export/case-2/"
  "$BASE_URL/examples/deepwrite-export/case-3/"
)

fail_count=0

echo "[check:showcase] BASE_URL=$BASE_URL"

for url in "${URLS[@]}"; do
  final_url=$(curl -s -L -o /tmp/deepwrite_showcase_check.html -w '%{url_effective}' "$url")
  code=$(curl -s -L -o /tmp/deepwrite_showcase_check.html -w '%{http_code}' "$url")
  title=$(grep -o '<title>[^<]*</title>' /tmp/deepwrite_showcase_check.html | head -n 1 | sed -E 's#</?title>##g' || true)

  if [[ "$code" == "200" ]]; then
    echo "✅ $code | $url -> $final_url | $title"
  else
    echo "❌ $code | $url -> $final_url | $title"
    fail_count=$((fail_count + 1))
  fi
done

if [[ "$fail_count" -gt 0 ]]; then
  echo "[check:showcase] failed=$fail_count"
  exit 1
fi

echo "[check:showcase] all urls healthy"
