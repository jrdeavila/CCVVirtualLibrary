import logolibro from "../img/logolibro.png";
export default function BarraTitulo() {
  return (
    <div className="row fondo-azul">
      <div className="col d-flex align-items-center justify-content-around">
        <span>
          <img
            src="https://ccvalledupar.org.co/wp-content/uploads/2023/04/MARCA-BLANCA-HORIZONTAL-CCV-2020-04.png"
            width={200}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Marca_pa%C3%ADs_Colombia_logo.svg/300px-Marca_pa%C3%ADs_Colombia_logo.svg.png"
            width={48}
          />
        </span>
        <span className="">
          <h1 className="text-light fs-3">
            <img src={logolibro} width={35} className="me-2" /> Biblioteca
            Virtual CCV
          </h1>
        </span>
      </div>
    </div>
  );
}
