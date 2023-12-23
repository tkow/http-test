FROM node:20.9.0-slim as builder

WORKDIR /work

COPY ./ /work/

EXPOSE 8080

ENTRYPOINT [ "node", "index.js" ]
