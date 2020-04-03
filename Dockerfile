FROM node:carbon-jessie-slim
WORKDIR /app
COPY $PWD /app
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "watch"]
