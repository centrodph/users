Url: [https://backusers.herokuapp.com/](https://backusers.herokuapp.com/)

## setup steps

- [X] Setup a basic backend using typescript, nodejs, expressJS

- [X] Setup  basic expressJS that respond JSON

- [X] Setup docker

- [X] Config `pg`

- [X] Create a user table

- [X] Create a endpoint users to retrieve the users table

- [X] Deploy to heroku/aws

## application steps

- [X] Setup passport with local strategy

- [X] Setup JWT authentication

- [] Create operations table

- [] Create an ACL with the basic rules

- [] Add operation endpoint

- [] Edit operation endpoint

- [] Remove operation endpoint

- [] Add operation endpoint

- [] Edit operator endpoint

- [] Remove operation endpoint


## TODO

- [] Use bcrypt to encrypt the password

- [] Use different config files prod/development

- [] Fix the issue with the missing dependencies in the npm install inside the docker container

- [] Fix the issue with the missing dependencies in the npm install inside the docker container


## run the app

1. npm i
2. docker-compose up --build
3. npm run watch-node (dev) or npm run start


## issues

if you get an error when you run docker-composer up --build

```

docker exec -it <container-name> /bin/bash
$ npm install

```
