# Use Node base image
FROM node:18

# Set working directory inside the container
WORKDIR /trello-api

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the backend code
COPY . .

# Expose backend port
EXPOSE 4421

# Start backend
CMD ["npm", "start"]
