import { useEffect, useState } from "react";
import "./App.css";
import Libro from "./assets/Components/Libro";
import { DocumentModel } from "./models/document";
import { fetchDocuments } from "./services/documentService";

function App() {
  const [docs, setDocs] = useState<DocumentModel[]>([]);
  // --------------------------------------------------------------
  useEffect(() => {
    getDocuments();
  }, []);
  // --------------------------------------------------------------
  const getDocuments = async () => {
    let res = await fetchDocuments({
      count: 10,
      page: 1,
      query: "",
    });
    if (!!res) {
      setDocs(res.items);
    }
  };
  // --------------------------------------------------------------
  return (
    <div className="container">
      {docs.map((e: DocumentModel, i: number) => (
        <Libro key={i} nombre={e.title} doc_url={e.pdf} image_url={e.image} />
      ))}
    </div>
  );
}

export default App;
