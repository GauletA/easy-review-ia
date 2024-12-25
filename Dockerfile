FROM node:20-buster
FROM ianwalter/pnpm
FROM gplane/pnpm

WORKDIR /app

COPY package.json .

RUN pnpm install

COPY . .

EXPOSE 8090

CMD ["pnpm", "run", "dev"]