<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


## Development environment

1. Clone the github repository

2. Execute

```bash
$ yarn install
```

3. Install Nest CLI

```
npm i -g @nestjs/cli
```

4. Install the docker container

```
docker-compose up -d
```
5. Clone the file ___.env.template___ and rename it as ```.env```
   
6. Fill the .env variables
7. Run the app in dev
```
yarn start:dev
```


8. Seed data

```
localhost:3000/api/v2/seed
```


## App Stack
* MongoDB
* Nest


# Production Build
1. Create the file ```.env.prod```
2. fill the environment vars
3. Create the new image ```docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build```
4. 


## Run the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
