FROM node:18-alpine
WORKDIR /app
COPY ./server/package.json ./
RUN npm install
COPY ./server .
RUN npm prune --production
ENV NODE_ENV production
EXPOSE 4000
CMD ["node", "server.js"]