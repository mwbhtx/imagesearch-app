# define the image we will build from in Docker Hub, a launch point for our docker image
FROM node

# Create a the working directory to hold the application cold inside the docker image
WORKDIR /app

# Copy our package.json & package-lock.json files into docker image
COPY package.json ./
COPY package-lock.json ./

# Install dependencies found within our package.json
RUN npm install --silent

# Run ci command for production builds (uncomment line below)
# RUN npm ci --only=production

# Bundle app source code
COPY . .

# Expose environment var to development environment to access for production usage
ENV PORT=3001

# Expose external port to access docker container
EXPOSE 3001

# Define command to run app 
CMD ["npm", "start"]

