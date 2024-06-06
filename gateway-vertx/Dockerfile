# build
FROM maven:3.8.4-openjdk-11-slim AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline -B
COPY src ./src
RUN mvn package -DskipTests

# serve
FROM openjdk:11-jre-slim
WORKDIR /app
COPY --from=build /app/target/gateway-1.0-SNAPSHOT.jar /app/gateway.jar
EXPOSE 9090
CMD ["java", "-Djava.net.preferIPv4Stack=true", "-Dvertx.cacheDirBase=/tmp/vertx", "-Djava.io.tmpdir=/tmp", "-jar", "gateway.jar", "--server.port=9090"]

## commands
# export IMG=quay.io/rh-ee-yuewu/gateway-vertx:v2.0.0
