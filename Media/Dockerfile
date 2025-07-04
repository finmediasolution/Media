# ---- Build stage ----
FROM maven:3.9.6-eclipse-temurin-17 AS builder

# Set working directory inside the builder
WORKDIR /app

# Copy entire project
COPY . .

# Change to the directory containing pom.xml (e.g., Media/Media)
WORKDIR /app/Media/Media

# Build the Spring Boot application
RUN mvn clean package -DskipTests

# ---- Final image ----
FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

# Copy the built JAR file from the builder stage
COPY --from=builder /app/Media/Media/target/Media-0.0.1-SNAPSHOT.jar /app/Media.jar

# Expose the port your app runs on
EXPOSE 8080

# Run the JAR
CMD ["java", "-jar", "Media.jar"]
