# Sets the base image of the application to the node’s official image.
FROM node:17

# Sets the Working Directory as "/server"
WORKDIR /server
# Copies the package.json file into "/server" and runs npm i
COPY package.json /server
RUN npm i
# Copies the entire source code into "/server"
COPY . /server

# Specifies the port the node app will be running on
EXPOSE 4444

# Runs "node server.js" after the above step is completed
CMD ["npm", "run", "start:dev"]

# WORKDIR /app
# COPY package.json /app/package.json
# RUN apk --no-cache add --virtual builds-deps build-base python
# RUN npm install
# COPY . /app
# RUN npm run build
# FROM node:12-alpine
# WORKDIR /app
# COPY --from=builder /app/dist /app
# COPY package.json /app/package.json
# RUN apk --no-cache add --virtual builds-deps build-base python
# RUN npm install --only=prod
# EXPOSE 8080 
# USER node
# CMD ["node", "index.js"]

