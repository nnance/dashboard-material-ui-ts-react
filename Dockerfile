FROM node:11-alpine

COPY package*.json ./
COPY ./build ./build
COPY ./bin ./bin

RUN npm install --production

EXPOSE 3000

CMD [ "./bin/www" ]
