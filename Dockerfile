# Dockerfile image
FROM  

WORKDIR /app

COPY . .


ARG VERSION  

EXPOSE 8080 
ENTRYPOINT ["./bin"]