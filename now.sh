# /bin/bash

set -ex

cd ./client

npm i
npm run build
mv public ..
cd ..