export default function Libro({nombre="", image_url="", doc_url=""}){
    const IMG_URL = "https://appccvalledupar.co/timeit/BibliotecaVirtual/imagen/";
    const URL = "https://appccvalledupar.co/timeit/laravel/api/";
    return <div className="">
        <a href={URL+doc_url}><img src={IMG_URL+image_url}/></a>
        <h3>{nombre}</h3>
    </div>
}