import React from "react";
import { Button } from "react-bootstrap";
import error from "../assets/ErrorImage/error.webp";
import "./Errores.css";
class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tieneError: false, mensajeError: "" };
  }

  static getDerivedStateFromError(error) {
    // Método 1
    return { tieneError: true, mensajeError: error.message };
  }

  componentDidCatch(error) {
    // Método 2
    // Ambos sirven por igual
    console.log("Component did catch:", error.message);
  }

  render() {
    if (this.state.tieneError) {
      // "UI de emergencia"
      return (
        <div class="contenedorError">
          <div class="containerCenter">
            <div>
              <h1 class="centarttitle">Ha ocurrido un error 😥:</h1>
            </div>
            <div>
              <img class="imagenerror" src={error} alt=""></img>
            </div>
            <div class="centrar_parrafo">
              <p> {this.state.mensajeError} </p>
            </div>
            <div class="centrar_boton">
              <Button variant="danger" className="" onClick={null} class="">
                Recargar la página {""}
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default Error;
