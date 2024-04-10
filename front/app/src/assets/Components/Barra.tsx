import { get2 } from "../../api/http";
import { useState, useEffect } from "react";
import { CategoryResponse, SubcategoryResponse } from "../../models/category";

function Barra() {
  const [categorias, setCategoria] = useState<CategoryResponse[]>([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<
    CategoryResponse | undefined
  >(undefined);
  const [subcategoriaSeleccionada, setSubcategoriaSeleccionada] = useState<
    SubcategoryResponse | undefined
  >(undefined);
  //--------------------------------------------------------------------
  useEffect(() => {
    get2("categories").then((data) => {
      setCategoria(data);
    });
  }, []);

  useEffect(() => {
    console.log(subcategoriaSeleccionada);
  }, [subcategoriaSeleccionada]);

  //------------------------------------------------------------------

  return (
    <div className="row row-cols-4 w-100 bg-barra alto-100 align-items-center p-4">
      <select
        name="categorias"
        id="categorias"
        className="col-3 alto-50 btn btn-outline-light"
        onChange={(e) => {
          let id: number = Number.parseInt(e.target.value);
          setCategoriaSeleccionada(
            categorias.filter((e: CategoryResponse) => e.id === id)[0]
          );
        }}
      >
        <option key="-1" value="" defaultChecked>
          Seleccione una Categoría
        </option>
        {categorias.map((e: CategoryResponse, i) => (
          <option key={i} value={e.id} className="fs-6">
            {e.name}
          </option>
        ))}
      </select>
      {!!categoriaSeleccionada && (
        <select
          name="subcategoria"
          id="subcategoria"
          className="col-3 alto-50 btn btn-outline-light"
          onChange={(e) => {
            let id: number = Number.parseInt(e.target.value);
            setSubcategoriaSeleccionada(
              categoriaSeleccionada.subcategories?.filter(
                (e: SubcategoryResponse) => e.id == id
              )[0]
            );
          }}
        >
          <option key="-1" value="0" defaultChecked>
            Seleccione una Subcategoría
          </option>
          {categoriaSeleccionada?.subcategories?.map(
            (sub: SubcategoryResponse, i: number) => (
              <option key={i} value={sub.id}>
                {sub.name}
              </option>
            )
          )}
        </select>
      )}
      <input type="text" name="busqueda" id="busqueda" className="" />
    </div>
  );
}

export default Barra;
