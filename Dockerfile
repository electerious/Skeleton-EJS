FROM mhart/alpine-node:6

RUN mkdir -p /app/
WORKDIR /app/

RUN npm install bower -g && \
    apk add --no-cache make gcc g++ python git

# Add package.json first so that the docker image build can use
# the cache as long as contents of package.json hasn't changed.

COPY package.json /app/
RUN npm install --no-optional

# Add bower.json next so that the docker image build can use
# the cache as long as contents of bower.json hasn't changed.

COPY bower.json .bowerrc /app/
RUN bower install --allow-root

COPY . /app/
VOLUME /dist/

CMD npm run compile && \
    rm -rf /dist/* && \
    cp -R dist /