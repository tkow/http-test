FROM node:20.9.0-slim as builder

WORKDIR /work

COPY ./ /work/

ENTRYPOINT [ "node", "index.js" ]
