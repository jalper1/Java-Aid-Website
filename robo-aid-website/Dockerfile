FROM node:18.17.1

WORKDIR /home/node/app

COPY . .

RUN npm install --include=dev

CMD npx vite --host
