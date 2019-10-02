# /bin/bash

set -ex

cd ./client

npm i
npm run build
cd ..
mv public .