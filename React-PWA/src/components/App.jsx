import React, { Component } from "react";
import { Container } from "reactstrap";
import "./App.css";
import ComponenteAppSring from "./conponentesSecundarios/componenteAppSpring";

class App extends Component {
  constructor() {
    super();

    this.state = { users: [] };
  }

  render() {
    //se renderiza los datos que se han obtenido de al cargar el arreglo y solo se muestran
    return (
      <Container>
        <div className="App">
          <ComponenteAppSring />
        </div>
      </Container>
    );
  }
}

export default App;
