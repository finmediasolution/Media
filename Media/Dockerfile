# Use Maven to build the project first
FROM maven:3.9.6-eclipse-temurin-17 AS builder

# Set working directory
WORKDIR /app

# Copy source code
COPY . .

# Build the app (creates the JAR in target/)
RUN mvn clean package -DskipTests

# ---- Final image ----
FROM eclipse-temurin:17-jdk-jammy

# Set working directory
WORKDIR /app

# Copy built JAR from builder image
COPY --from=builder /app/target/Media-0.0.1-SNAPSHOT.jar /app/Media.jar

# Expose port
EXPOSE 8080

# Start app
CMD ["java", "-jar", "Media.jar"]
