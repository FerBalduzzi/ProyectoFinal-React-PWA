import React, { Component } from "react";
import { Button, Table } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class componenteApp extends Component {
  constructor() {
    super();
    //estado del componente web de react son las propiedates
    this.state = {
      //desde aqui podemos inicilizar valores de las propiedades del componente
      //podemos inicializar los valores vacios al iniciar el componente
      titulo: "",
      descrip: "",
      tareas: [],
      id: "",
    };
    //vincular el metodo al estado del componente
    this.AgregarYActulizarTarea = this.AgregarYActulizarTarea.bind(this);
    this.ManejarElCambio = this.ManejarElCambio.bind(this);
  }

  //componentDidMount se usa para cuando deseamos cargar datos alguna otra cosa inmediatemente despues iniciar la interfaz y lo primero que se renderiza del  componente
  componentDidMount() {
    this.Obtenertareas();
  }

  AgregarYActulizarTarea(e) {
    if (this.state.id) {
      console.log("si exite un id actulizalo");
      fetch("http://localhost:8080/api/tareas/" + this.state.id, {
        method: "PUT",
        body: JSON.stringify(this.state),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.setState({ titulo: "", descrip: "", id: "" });
          this.Obtenertareas();
          toast.success("Tarea actualizada...", {
            position: toast.BOTTOM_LEFT,
          });
        });
    } else {
      fetch("http://localhost:8080/api/tareas/", {
        method: "POST",
        //para convertir el estado a un string json
        body: JSON.stringify(this.state),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())

        .then((data) => {
          console.log(data);
          //intentar mandar una notificacion de que ha sido enviada la peticion

          this.setState({ titulo: "", descrip: "" });
          this.Obtenertareas();
          toast.success("Tarea agregada...", {
            position: toast.BOTTOM_LEFT,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    //para evitar refresco en la vista al enviar datos
    e.preventDefault();
  }
  //evento o metodo mostrar y listar los registros , que hace una peticion al servidor por el metodo GET
  Obtenertareas() {
    fetch("http://localhost:8080/api/tareas/")
      .then((res) => res.json())

      .then((data) => {
        this.setState({ tareas: data });
        console.log(this.state.tareas);
      });
  }

  EliminarTarea(id) {
    console.log("eliminando tarea...", id);

    fetch("http://localhost:8080/api/tareas/" + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.Obtenertareas();
      })
      .catch((err) => {
        console.log(err);
        this.Obtenertareas();
        toast.error("Tarea elimnada...", {
          position: toast.BOTTOM_LEFT,
        });
      });
  }

  async ObtenerIdParaActualizar(id) {
    await fetch("http://localhost:8080/api/tareas/" + id)
      .then((res) => res.json()) //convierte la peticion a formato json
      .then((data) => {
        console.log(data);
        //actualiza el estado
        this.setState({
          titulo: data.titulo,
          descrip: data.descrip,
          id: data.id,
        });
      });
  }
  //evento que supervisa y insercion de datos en el formuario
  ManejarElCambio(e) {
    //obtenemos el nombre y el valor de target o elemento input del formulario
    const { name, value } = e.target;
    //cambiamos el estado del componente mediante el metodo setState
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <div className="row fondoDiv3 ">
          <div className="col-12">
            <h1>ANOTACIONES PROYECTOS</h1>
            <h6>Anotaciones de tareas pendientes y proximos proyectos</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-4 fondoDiv1">
            <h3>Ingresar datos</h3>
            <form onSubmit={this.AgregarYActulizarTarea} method="post">
              <div className="row">
                <div className="col-12">
                  <input
                    type="text"
                    name="titulo"
                    placeholder="Titulo"
                    onChange={this.ManejarElCambio}
                    value={this.state.titulo}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <input
                    type="text"
                    name="descrip"
                    placeholder="Descripcion"
                    onChange={this.ManejarElCambio}
                    value={this.state.descrip}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <Button variant="primary" type="submit">
                    Insertar
                  </Button>
                  <br />
                </div>
              </div>
              <ToastContainer autoClose={1500} />
            </form>
          </div>
          <div className="col-8 fondoDiv2">
            <h3>Muestreo de datos </h3>
            <Table hover size="sm" responsive>
              <thead>
                <tr>
                  <th>Titulo</th>
                  <th>Descripcion</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tareas.map((tarea) => {
                  return (
                    <tr key={tarea.id}>
                      <td> {tarea.titulo} </td>
                      <td> {tarea.descrip} </td>
                      <td>
                        <Button
                          variant="primary"
                          onClick={() => this.EliminarTarea(tarea.id)}
                        >
                          Eliminar
                        </Button>
                        <br />
                      </td>
                      <td>
                        <Button
                          variant="primary"
                          onClick={() => this.ObtenerIdParaActualizar(tarea.id)}
                        >
                          Actualizar
                        </Button>
                        <br />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

//para poder exportar el ponponente y ser usado en otro componente
export default componenteApp;
