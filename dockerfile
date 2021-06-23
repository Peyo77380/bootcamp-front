FROM node:12.2.0-alpine

WORKDIR /app

COPY package.json /app/

ENV PATH /app/node_modules/.bin:$PATH


EXPOSE 8080
RUN npm install
RUN npm install @vue/cli -g
RUN npm rebuild node-sass

CMD ["npm", "run", "serve"]