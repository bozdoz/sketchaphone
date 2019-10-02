# /bin/bash

set -ex

cd ./client
npm ci
npm run build
mv public ../now