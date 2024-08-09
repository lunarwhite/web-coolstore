# build
FROM docker.io/node:14-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN chmod -R a+rw /usr/src/app
USER 1001
EXPOSE 3000
CMD ["npm", "start"]

## commands
# export IMG=quay.io/rh-ee-yuewu/web-nodejs:v2.0.0