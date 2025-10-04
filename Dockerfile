# Use Node.js 18 as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY client/package*.json ./client/

# Install dependencies
RUN npm ci --only=production

# Install client dependencies
RUN cd client && npm ci

# Copy source code
COPY . .

# Build the client
RUN npm run build:client

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
