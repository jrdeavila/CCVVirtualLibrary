import { get2 } from "../../api/http";
import { useState, useEffect } from "react";
import { CategoryResponse, SubcategoryResponse } from "../../models/category";
interface BarraParams {
  sendSubcat: (categoriaSeleccionada: SubcategoryResponse | undefined) => void;
}
function Barra(props: BarraParams) {
  const { sendSubcat } = props;
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
    sendSubcat(subcategoriaSeleccionada);
  }, [subcategoriaSeleccionada]);

  //------------------------------------------------------------------

  return (
    <div className="row w-100 m-0 border-0 p-0">
      <nav className="row w-100 d-flex justify-content-center alto-barra p-4 sticky-top d-flex navbar navbar-expand-lg m-0">
        <select
          name="categorias"
          id="categorias"
          className="alto-50 btn btn-sm"
          onChange={(e) => {
            const id: number = Number.parseInt(e.target.value);
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
            className="alto-50 btn btn-sm"
            onChange={(e) => {
              const id: number = Number.parseInt(e.target.value);
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
      </nav>
    </div>
  );
}

export default Barra;
