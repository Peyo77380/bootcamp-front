FROM node:lts-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/

RUN npm install
RUN npm install @vue/cli -g
RUN npm rebuild node-sass

EXPOSE 8080


CMD ["npm", "run", "serve"]