# Use an official Node.js runtime as the base image
FROM node:18-bullseye

# Set the working directory inside the container
WORKDIR /app

# Install system dependencies required for Cypress and browsers
RUN apt-get update && \
    apt-get install -y \
    libgtk2.0-0 \
    libgtk-3-0 \
    libgbm-dev \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    libxtst6 \
    xauth \
    xvfb \
    # Clean up to reduce image size
    && apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Run Cypress tests
CMD ["npx", "cypress", "run"]