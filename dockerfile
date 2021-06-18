FROM node:lts-alpine

# RUN apt-get update -y && apt-get install -y

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/

RUN npm install
RUN npm install @vue/cli@3.7.0 -g



CMD ["npm", "run", "serve"]