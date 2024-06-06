# build
FROM maven:3.8.4-openjdk-11-slim AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline -B
COPY src ./src
RUN mvn package -DskipTests

# serve
FROM openjdk:11-jre-slim
COPY --from=build /app/target/*-runner.jar /deployments/app.jar
EXPOSE 8080
CMD ["java", "-jar", "/deployments/app.jar"]

## commands
# export IMG=quay.io/rh-ee-yuewu/inventory-quarkus:v2.0.0
