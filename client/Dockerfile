FROM node:14.17.6-buster-slim
WORKDIR /client
ADD package.json package.json
RUN npm install || find /root/.npm/_logs/  -name \* | sort | xargs -I{} cat {}
ADD . .
RUN npm run build
CMD ["npm", "start"]
EXPOSE 3000