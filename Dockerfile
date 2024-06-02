FROM node:22.2.0-alpine

WORKDIR /app

COPY package.json ./

RUN yarn

COPY . .

EXPOSE 8000

CMD ["yarn", "start"]
