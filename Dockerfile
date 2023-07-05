# Stage 1: Build stage
FROM node:18-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the entire project to the working directory
COPY . .

# Build the project
RUN npm run build

# Stage 2: Release stage
FROM nginx:stable-alpine3.17-slim as release

# Set the working directory inside the container
WORKDIR /opt/app

# Copy the NGINX configuration file
COPY ./config/default.conf /etc/nginx/conf.d

# Copy the built project from the build stage to the release stage
COPY --from=build /app/dist/. .

# Expose the port that NGINX will listen on
EXPOSE 8080
