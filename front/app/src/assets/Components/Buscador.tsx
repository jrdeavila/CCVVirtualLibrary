interface Busqueda {
  sendBusqueda: (busqueda: string) => void;
}
export default function Buscador(props: Busqueda) {
  const { sendBusqueda } = props;

  return (
    <div className="row  mt-5">
      <span className="col d-flex justify-content-center align-items-center">
        <img
          src="https://cdn-icons-png.freepik.com/512/8094/8094123.png?ga=GA1.1.2021833465.1713999463"
          width={20}
          height={20}
          className="me-4 lupa"
        />
        <input
          type="search"
          placeholder="Escriba un título para el libro..."
          className="input-busqueda"
          onChange={(e) => {
            if (e.target.value.length >= 3) {
              sendBusqueda(e.target.value);
            } else if (e.target.value.length == 0) {
              sendBusqueda("");
            }
          }}
        />
      </span>
    </div>
  );
}
