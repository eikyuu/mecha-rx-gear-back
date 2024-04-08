# Use a Node.js base image
FROM node:20-bookworm-slim

# Set the working directory in the Docker image
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and yarn.lock files to the working directory
COPY package*.json ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application files to the working directory
COPY . .

# Build TypeScript files
RUN pnpm run build

# Expose the port on which the application will run
EXPOSE 3333

# Command to start the application
CMD  ["node", "build/bin/server.js"]
