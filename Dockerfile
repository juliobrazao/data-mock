FROM node:alpine
WORKDIR /src
COPY package.json ./
RUN npm cache clean --force
RUN npm cache verify
COPY . /src
RUN npm i
EXPOSE 3003
CMD ["npm", "start"]