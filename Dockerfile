FROM node:14-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY . .

RUN npm install

RUN npm build

EXPOSE 3000

CMD ["npm", "start"]
