ARG VERSION=3.8
#immagine di partenza
FROM node:16.5.0

LABEL maintainer="fabio@moku.io"


ARG VERSION



COPY package.json .


CMD [ "/bin/sh"]
