# Base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies for dev only
RUN yarn add --frozen-lockfile --production=false --dev=true @lmdb/lmdb-linux-x64

# Copy the rest of the application files
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["yarn", "dev"]