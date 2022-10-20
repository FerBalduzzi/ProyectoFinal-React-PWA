/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package app1.projectv1.service.impl;


import java.util.List;

import app1.projectv1.service.IServiciosTarea;
import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;
import app1.projectv1.entity.impl.Tarea;
import app1.projectv1.repository.RepositorioTarea;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.ArrayList;

/**
 *
 * @author Caren
 */
@Service
public class ServiciosTarea implements IServiciosTarea {
    
    @Autowired
    RepositorioTarea repoTarea;

    @PersistenceContext
    EntityManager em;
    
    //servicios basicos CRUD "create- crear, read-leer, update-actualzar, delete-eliminar"
    
    //metodo para obtener todos los datos en la base de datos 
    @Override
    public List<Tarea> getAllTareas(){
        List<Tarea> Tareas = new ArrayList<>();
        repoTarea.findAll().forEach(tarea1 -> Tareas.add(tarea1));
        return Tareas;
    }

    @Override
    public List<Tarea> getAllTareasQuery() {
        //jpql
        String consulta = "SELECT c FROM Tarea c";
        Query query = em.createQuery(consulta);

        return query.getResultList();
    }

    @Override
    public List<Tarea> getAllTareasQueryOrder(long id) {



        //consulta con set parametros
        String consulta = "SELECT c.titulo FROM Tarea c WHERE c.id=:identidicador";
        Query query = em.createQuery(consulta);
        query.setParameter("identidicador",id);

        return query.getResultList();
    }


    //metodo para un unico registro por medio del identificador 
    @Override
    public Tarea getTareaById(long id){
        return repoTarea.findById(id).get();
    }
    

    @Override
    public void saveTarea(Tarea tarea){
        repoTarea.save(tarea);
    }
    

    @Override
    public void deleteTarea(long id){
        repoTarea.deleteById(id);
    }
    

    @Override
    public void updateTarea(Tarea tarea, long id){
        repoTarea.save(tarea);
        //repoTarea.save(tare
    }
    
}


