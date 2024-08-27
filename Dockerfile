FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npx", "tsc" ]

CMD [ "node", "./dist/index.js" ]