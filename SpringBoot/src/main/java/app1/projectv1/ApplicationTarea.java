package app1.projectv1;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;


import app1.projectv1.repository.RepositorioTarea;



@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})

public class ApplicationTarea {
        
    //inyeccion de dependecias de las clases a usar

        
    @Autowired
    RepositorioTarea repoTarea;
        
    //metodo principal para correr la aplicacion 
    public static void main(String[] args) {
        
		SpringApplication.run(ApplicationTarea.class, args);
	}
        


}
