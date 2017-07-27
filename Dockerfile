FROM mhart/alpine-node:8

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

# Copy and compile source in the last step as the source
# might change the most.

COPY . /app/
RUN npm run compile

VOLUME /dist/

CMD rm -rf /dist/* && \
    cp -R dist /