# ProyectoFinal-React-Spring-PWA

Aqui les presento una app de agenda , donde vas a poder anotar todos tus proyectos pendientes , o que desees realizar , podras ingresarlo y que se agende en la base de datos , podras modificarlo y unaa vez ya terminado podras eliminarlo.

PARA JAVA-SPRING 
clonar el repo o descargarlo en formato zip 
en application.properties:

DEBERA CAMBIAR EL PUERTO DE SU LOCALHOST DE MYSQL , USERNAME , PASSWORD

logging.level.root=INFO
server.error.whitelabel.enabled=true
spring.datasource.url=jdbc:mysql://localhost:3306/cardb?createDatabaseIfNotExist=true&useSSL=false&serverTimezone=UTC&LegacyDatetimeCode=false
spring.datasource.driverClassName=com.mysql.cj.jdbc.Driver
spring.datasource.username=root
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.MySQL5Dialect
spring.jpa.generate-ddl=true
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true


PARA REACT
clonar el repo o descargarlo en formato zip

npm install en la terminal para instalar las dependencias

npm start para levantar el proyecto 


