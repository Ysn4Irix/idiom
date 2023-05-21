FROM --platform=arm64 node:18-alpine
WORKDIR /app
COPY ./server/package.json ./
RUN npm install
COPY ./server .
RUN npm prune --production
ENV NODE_ENV production
ENV PORT 80
EXPOSE 80
CMD ["node", "server.js"]