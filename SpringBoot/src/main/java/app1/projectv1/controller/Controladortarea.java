package app1.projectv1.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import app1.projectv1.entity.impl.Tarea;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import app1.projectv1.service.impl.ServiciosTarea;
import java.util.List;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


//controlador para procesar las tareas CRUD put,get,post,delete
//para permitir peticiones de un servidor especifico en esta caso de host del frontend, donde admite metodos como put,get,post,delete
@CrossOrigin(origins = "http://localhost:3000" ,methods = {RequestMethod.DELETE,RequestMethod.GET,RequestMethod.PUT,RequestMethod.POST})
@RestController
//@Controller
public class Controladortarea {

    //esta es un ejemplo de injeccion de dependecias la cual injecta otra clase llamada servTarea
    @Autowired
    ServiciosTarea servTarea;
    
    // obtener todas las tareas con el uso del metodo get 
    @GetMapping("/api/tareas")
    private List<Tarea> getAllTareas(){
        return servTarea.getAllTareas();
    }

    @GetMapping("/api/tareasT")
    private List<Tarea> getAllTareasQuery(){
        return servTarea.getAllTareasQuery();
    }

    @GetMapping("/api/tareasO")
    private List<Tarea> getAllTareasQueryOrder() {
        return servTarea.getAllTareasQueryOrder(2);
    }

    // obtener un tarea especifica con id con el uso del metodo get
    @GetMapping("api/tareas/{id}")
    private Tarea getTarea(@PathVariable("id")long id){
        return servTarea.getTareaById(id);
    }
    

    @PostMapping("/api/tareas")
    private long saveTarea(@RequestBody Tarea tarea){
        servTarea.saveTarea(tarea);
        return tarea.getId();
    }
    

    @DeleteMapping("api/tareas/{id}")
    private void deleteTarea(@PathVariable("id")long id){
        System.out.println("el id eliminado es:"+id);
        servTarea.deleteTarea(id);
    }
    

    @PutMapping("/api/tareas/{id}")
    private Tarea updateTarea(@RequestBody Tarea tarea){
        servTarea.saveTarea(tarea);
        return tarea;
    }
    
    
}
    
   
    
