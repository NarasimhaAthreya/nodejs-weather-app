FROM alpine
WORKDIR /weather-app
RUN apk add nodejs
RUN apk add npm
COPY . .
RUN npm install package.json
EXPOSE 3000 8080
CMD ["node","src/web.js"]

