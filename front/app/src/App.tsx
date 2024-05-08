import { useEffect, useState } from "react";
import "./App.css";
import Libro from "./assets/Components/Libro";
import { DocumentModel } from "./models/document";
import { fetchDocuments } from "./services/documentService";
import Barra from "./assets/Components/Barra";
import { SubcategoryResponse } from "./models/category";
import BarraTitulo from "./assets/Components/BarraTitulo";
import Buscador from "./assets/Components/Buscador";

function App() {
  const [docs, setDocs] = useState<DocumentModel[]>([]);
  const [subcategoriaSeleccionada, setSubcategoriaSeleccionada] = useState<
    SubcategoryResponse | undefined
  >();
  // --------------------------------------------------------------
  useEffect(() => {
    getDocuments();
  }, []);
  // --------------------------------------------------------------
  const getDocuments = async () => {
    const res = await fetchDocuments({
      count: 50,
      page: 1,
      query: "",
    });
    if (res != undefined) {
      setDocs(res.items);
    }
  };
  const changeSubcategory = (subcategoria: SubcategoryResponse | undefined) => {
    setSubcategoriaSeleccionada(subcategoria);
  };

  const capitalizar = (frase: string) => {
    let nuevaPalabra = "";
    let nuevaFrase = "";
    frase = frase.toLowerCase();
    const palabras = frase.split(" ");
    palabras.map((palabra) => {
      const letras = palabra.split("");
      letras[0] && letras[0].toUpperCase();
      for (let i = 0; i < palabra.length; i++) {
        nuevaPalabra = nuevaPalabra + letras[i];
      }
      nuevaFrase = nuevaFrase + nuevaPalabra + " ";
      nuevaPalabra = "";
    });
    console.log(nuevaFrase);
    return nuevaFrase;
  };
  // --------------------------------------------------------------
  return (
    <div className="">
      <BarraTitulo />
      <Buscador />
      <Barra sendSubcat={changeSubcategory} />
      <div className="d-flex flex-wrap justify-content-around">
        {subcategoriaSeleccionada
          ? docs
              .filter(
                (doc) => doc.subcategory.id === subcategoriaSeleccionada?.id
              )
              .map((e: DocumentModel, i: number) => (
                <Libro
                  key={i}
                  nombre={capitalizar(e.title)}
                  doc_url={e.pdf}
                  image_url={e.image}
                />
              ))
          : docs.map((e: DocumentModel, i: number) => (
              <Libro
                key={i}
                nombre={capitalizar(e.title)}
                doc_url={e.pdf}
                image_url={e.image}
              />
            ))}
      </div>
    </div>
  );
}

export default App;
