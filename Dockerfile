FROM  node:21-alpine3.18

WORKDIR /app
COPY . . 

ENTRYPOINT [ "npm", "run", "dev" ]