FROM node:8-alpine
ADD . /project
WORKDIR /project
RUN npm i 

CMD [ "npm", "start" ]