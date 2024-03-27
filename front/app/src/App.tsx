import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Libro from "./assets/Components/Libro";

function App() {
  const [count, setCount] = useState(0);
  const zona = document.getElementById("zona");
  function cargarLibros() {
    zona.innerHTML = "";
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="container">
        <button className="btn btn-primary" onClick={cargarLibros}>
          Cargar libros
        </button>
        <div id="zona">
          <Libro
            nombre="Boletín Entorno"
            image_url="172546ENTORNO%20IV%20TRIMESTRE.png"
            doc_url="17254604%20-%20BOLETIN%20ENTORNO%20EMPRESARIAL%202023%20-%20IV%20TRIMESTRE.pdf"
          />
          <Libro
            nombre="Potencial Comerciantes"
            doc_url="154637POTENCIAL%20DE%20COMERCIANTES%202024%20-%202026.pdf"
            image_url="154637ESTIMACION%20DE%20COMERCIANTES%202024-2026.png"
          />
          <Libro
            nombre="Estudio Económico"
            doc_url="153947ESTUDIO%20ECONOMICO%202023.pdf"
            image_url="153947ESTUDIO%20ECONOMICO%202023.png"
          />
        </div>
      </div>
    </>
  );
}

export default App;
