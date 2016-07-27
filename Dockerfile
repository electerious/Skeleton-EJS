FROM node:6

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install bower -g

CMD npm install && \
    bower install --allow-root && \
    npm run compile