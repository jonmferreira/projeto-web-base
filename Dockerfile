FROM node:18-bullseye

WORKDIR /app/

COPY ./frontend/package*.json ./

RUN npm install

COPY ./frontend/ ./

EXPOSE 8081

CMD npm run dev
