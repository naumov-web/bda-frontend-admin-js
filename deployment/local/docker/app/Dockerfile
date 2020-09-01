FROM node:12.10-stretch

COPY . /var/www

WORKDIR /var/www
EXPOSE 3000

RUN yarn global add webpack
RUN yarn global add webpack-cli
RUN yarn global add webpack-dev-server

RUN cd /var/www && yarn
CMD cd /var/www && yarn start