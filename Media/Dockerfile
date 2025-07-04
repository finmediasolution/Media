# ---- Build stage ----
FROM maven:3.9.6-eclipse-temurin-17 AS builder

# Set working directory to where pom.xml is
WORKDIR /app

# Copy project files
COPY . .

# Build the Spring Boot application (JAR will be in target/)
RUN mvn clean package -DskipTests

# ---- Final stage ----
FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

# Copy only the built JAR file from builder
COPY --from=builder /app/target/Media-0.0.1-SNAPSHOT.jar /app/Media.jar

# Expose the port the app runs on
EXPOSE 8080

# Run the app
CMD ["java", "-jar", "Media.jar"]
