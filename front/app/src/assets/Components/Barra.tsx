import { get2 } from "../../api/http";
import { useState, useEffect } from "react";
import { CategoryResponse } from "../../models/category";

function Barra() {
  const [categoria, setCategoria] = useState([]);
  //--------------------------------------------------------------------
  useEffect(() => {
    get2("categories").then((data) => {
      console.log(data);
      setCategoria(data);
    });
  }, []);
  //------------------------------------------------------------------
  return (
    <div className="row row-cols-4 w-100 bg-barra alto-100 align-items-center p-4">
      <select
        name="categoria"
        id="categoria"
        className="col-3 alto-50 text-lowercase btn btn-outline-light"
      >
        <option key="-1" value="0" defaultChecked>
          Seleccione una Categoría
        </option>
        {categoria.map((e: CategoryResponse, i) => (
          <option key={i} value={e.id} className="nombreLibro fs-6">
            {e.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Barra;
