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

# Copy client source code
COPY client/ ./client/

# Install client dependencies
RUN cd client && npm install

# Build the client
RUN npm run build:client

# Copy server source code
COPY server.js ./

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
