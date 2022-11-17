FROM node:gallium
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD [ "npx", "serve","-s", "dist/contacts-app" ]
