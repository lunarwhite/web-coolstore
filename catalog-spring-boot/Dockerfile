# build
FROM docker.io/maven:3.8.4-openjdk-11-slim AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline -B
COPY src ./src
RUN mvn package -DskipTests

# serve
FROM docker.io/openjdk:11-jre-slim
WORKDIR /app
COPY --from=build /app/target/catalog-1.0-SNAPSHOT.jar /app/app.jar
EXPOSE 9000
CMD ["java", "-jar", "app.jar", "--server.port=9000"]
