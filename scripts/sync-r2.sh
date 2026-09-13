#!/usr/bin/env bash
# Sync local public/images to Cloudflare R2 (S3-compatible).
# Requires R2_* vars in .env.local
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ -f .env.local ]]; then
  set -a
  # shellcheck disable=SC1091
  source .env.local
  set +a
fi

: "${R2_BUCKET:?R2_BUCKET required}"
: "${R2_ENDPOINT:?R2_ENDPOINT required}"
: "${R2_ACCESS_KEY_ID:?R2_ACCESS_KEY_ID required}"
: "${R2_SECRET_ACCESS_KEY:?R2_SECRET_ACCESS_KEY required}"

export AWS_ACCESS_KEY_ID="$R2_ACCESS_KEY_ID"
export AWS_SECRET_ACCESS_KEY="$R2_SECRET_ACCESS_KEY"
export AWS_DEFAULT_REGION="${AWS_DEFAULT_REGION:-auto}"

echo "Syncing public/images → s3://${R2_BUCKET}/images/"
aws s3 sync public/images "s3://${R2_BUCKET}/images/" \
  --endpoint-url "$R2_ENDPOINT" \
  --exclude ".DS_Store" \
  --exclude "**/.DS_Store"

echo "Done."
aws s3 ls "s3://${R2_BUCKET}/images/" --endpoint-url "$R2_ENDPOINT" --recursive --summarize | tail -5
