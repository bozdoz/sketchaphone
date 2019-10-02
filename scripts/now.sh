# /bin/bash

set -ex

SCRIPTPATH="$( cd "$(dirname "$0")" ; pwd -P )"

cd $SCRIPTPATH
cd ../client

npm i
npm run build
mv public $SCRIPTPATH
cd $SCRIPTPATH