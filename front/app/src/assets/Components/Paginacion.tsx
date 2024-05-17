import React from "react";

interface Props {
  cantidad: number;
  paginaActual: number;
  cambiarPagina: (changePaginaActual: number) => void;
}

const ListaNumeros: React.FC<Props> = ({
  cantidad,
  paginaActual,
  cambiarPagina,
}) => {
  // Generar una matriz de números del 1 al 'cantidad'
  const numeros = Array.from({ length: cantidad }, (_, index) => index + 1);
  return (
    <ul className="pagination justify-content-center pagination-sm">
      <li className="page-item">
        <a
          className="page-link"
          href="#"
          onClick={() => {
            if (paginaActual > 1) {
              cambiarPagina(paginaActual - 1);
            }
          }}
        >
          &laquo;
        </a>
      </li>
      {numeros
        .filter((numero) => Math.abs(numero - paginaActual) < 3)
        .map((numero) => (
          <li className="page-item" key={numero}>
            <a
              className="page-link"
              href="#"
              onClick={() => cambiarPagina(numero)}
            >
              {numero}
            </a>
          </li>
        ))}
      <li className="page-item">
        <a
          className="page-link"
          href="#"
          onClick={() => {
            if (paginaActual < numeros.length) cambiarPagina(paginaActual + 1);
          }}
        >
          &raquo;
        </a>
      </li>
    </ul>
  );
};

export default ListaNumeros;
