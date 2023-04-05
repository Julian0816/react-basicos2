import React from "react";
import logo from "./logo.svg";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RederizadoElementos";
import {EventosES6, EventosES7} from "./components/Eventos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>

        <section>
          <Componente msg="Hola soy un Componente Funcional Expresado desde un prop" />
          <hr />
          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={19}
            booleano={true}
            arreglo={[1, 2, 3]}
            objeto={{
              nombre: "Julian",
              correo: "julian.martinez.cs@gmail.com",
            }}
            funcion={(num) => num * num}
            elementoReact={<i>Esto es un Elemento React</i>}
            componenteReact={
              <Componente msg="Soy un componente pasado como Prop" />
            }
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
        </section>
      </header>
    </div>
  );
}

export default App;