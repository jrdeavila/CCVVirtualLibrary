export default function Libro({ nombre = "", image_url = "", doc_url = "" }) {
  const IMG_URL = "https://appccvalledupar.co/timeit/BibliotecaVirtual/imagen/";
  const URL = "https://appccvalledupar.co/timeit/laravel/api/";
  return (
    <span className="espacioLibro">
      <a href={URL + doc_url}>
        <img width="200px" src={IMG_URL + image_url} />
      </a>
      <h3 className="nombreLibro">{nombre}</h3>
    </span>
  );
}
