# Use Node.js 18 as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install server dependencies
RUN npm ci --only=production

# Install client dependencies
RUN cd client && npm install

# Build the client
RUN npm run build:client

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
