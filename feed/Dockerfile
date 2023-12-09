FROM node:lts-bullseye-slim

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm ci --production

COPY . /app

CMD [ "npm", "start" ]