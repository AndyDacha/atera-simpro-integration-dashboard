# Use Node.js 18 as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install server dependencies
RUN npm ci --only=production

# Copy client package files
COPY client/package*.json ./client/

# Copy source code
COPY . .

# Install client dependencies
RUN cd client && npm ci

# Build the client
RUN npm run build:client

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
