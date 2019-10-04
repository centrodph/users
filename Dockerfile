FROM node:10

WORKDIR /app

CMD rm ./package.json
CMD rm ./package-lock.json

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install --no-cache

COPY . .

EXPOSE 3000

CMD npm start