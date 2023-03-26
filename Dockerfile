FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install
RUN npm install -g pm2
RUN npm install -g nodemon

COPY . ./

EXPOSE 3000
EXPOSE 9200

CMD npm run start


# FROM node:16-alpine
# # WORKDIR /app
# COPY package.json /app
# RUN npm install 
# COPY . /app
# EXPOSE 3000
# EXPOSE 9200
# CMD [ "npm","start" ]