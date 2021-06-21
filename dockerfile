FROM node:lts-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/

RUN npm install
RUN npm install @vue/cli@3.7.0 -g

EXPOSE 8080

CMD ["npm", "run", "serve"]