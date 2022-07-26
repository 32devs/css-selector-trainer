FROM openjdk:11
RUN mkdir "/app"
COPY /build/libs/app.jar /app/app.jar
ENV	USE_PROFILE docker


EXPOSE 8080
CMD ["java","-Dspring.profiles.active=${USE_PROFILE}","-jar","/app/app.jar"]
