# build
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --production

# serve
FROM node:14-slim
ENV COOLSTORE_GW_ENDPOINT=http://localhost:9090
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY . /app
EXPOSE 3000
ENTRYPOINT ["npm", "start"]

## commands
# export IMG=quay.io/rh-ee-yuewu/web-nodejs:v1.0.0
