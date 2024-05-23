
docker pull amazon/aws-lambda-nodejs:20
docker run --platform linux/amd64 --entrypoint /bin/sh -v "$PWD":/var/task -it amazon/aws-lambda-nodejs:20 -c "corepack enable && yarn install"
yarn build
npm install -g serverless
serverless deploy
