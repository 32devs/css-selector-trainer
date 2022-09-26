FROM openjdk:11
RUN mkdir "/app"
WORKDIR "/app"
RUN mkdir "springboot"
COPY build/libs/app.jar /app/springboot/app.jar

EXPOSE 8080
CMD ["java","-jar","/app/springboot/app.jar"]
