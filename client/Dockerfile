FROM --platform=arm64 node:18-alpine
WORKDIR /app
COPY ./client/package.json ./
RUN npm install
COPY ./client .
RUN npm run build && npm prune --production
ENV PORT 80
EXPOSE 80
CMD ["node", "build"]