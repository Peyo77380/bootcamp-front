# architectui-vue-pro

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# HEROKU
## Add static.json


# DOCKER
## change dockerfile 
RUN npm install @vue/cli -g
## add in dockerfile
RUN npm rebuild node-sass

# CMD 
docker build -t front
docker run -it -p 8083:8080 -v ${PWD}:/app -v /app/node_modules --rm  front
