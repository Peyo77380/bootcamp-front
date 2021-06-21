FROM node:lts-alpine

WORKDIR /app

COPY package.json /app/

ENV PATH /app/node_modules/.bin:$PATH


EXPOSE 8080
RUN npm install
RUN npm install @vue/cli@3.7.0 -g

CMD ["npm", "run", "serve"]