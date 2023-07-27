FROM node:16-alpine
WORKDIR /app
COPY ./client/package.json ./
RUN npm install --legacy-peer-deps
COPY ./client .
RUN npm run build && npm prune --production
EXPOSE 5173
CMD ["node", "build"]