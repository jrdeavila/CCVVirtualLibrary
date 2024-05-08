export default function Buscador() {
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
        />
      </span>
    </div>
  );
}
