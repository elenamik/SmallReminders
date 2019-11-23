FROM node:12

# working app directory
WORKDIR /usr/src/app

# install npm dependencies
COPY package*.json ./
RUN npm install

# bundle app source
COPY . . 

EXPOSE 8080

CMD ["node","app.js"]
