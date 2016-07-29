FROM mhart/alpine-node:6

RUN npm install bower -g
RUN apk add --no-cache make gcc g++ python git

RUN mkdir -p /app
WORKDIR /app

# Add package.json first so that the docker image build can use
# the cache as long as contents of package.json hasn't changed.

COPY package.json /app
RUN npm install

# Add bower.json next so that the docker image build can use
# the cache as long as contents of bower.json hasn't changed.

COPY .bowerrc /app
COPY bower.json /app
RUN bower install --allow-root

COPY . /app

CMD npm run compile && \
    rm -rf /dist/* && \
    cp -R dist /