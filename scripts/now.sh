# /bin/bash

set -ex

SCRIPTPATH="$( cd "$(dirname "$0")" ; pwd -P )"

cd $SCRIPTPATH
cd ../client

npm ci
npm run build
mv public ../now