import './App.css' // estilos CSS

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // peticion HTTP

// tipos de datos del JSON
interface ICat {
  id: number;
  name: string;
  gender: string;
  ImageFileName: string;
  description: string;
  age: number;
}

const Gallery: React.FC = () => {
  const [cats, setCats] = useState<ICat[]>([]);
  const [selectedCat, setSelectedCat] = useState<ICat | null>(null);

  // funcion q se ejecuta cada vez q se carga la pagina
  useEffect(() => {
    const fetchData = async () => {
      // obtener JSON
      const result = await axios.get("http://localhost:3000/api/gatos");
      setCats(result.data);
    };

    fetchData();
  }, []);
  return (
    // ventana modal
    // <div className="flex w-full h-full place-content-center place-items-center">
    <div className="grid grid-cols-1 gap-0.5 min-h-screen w-full place-content-center place-items-center">
      {selectedCat ? (
        <div className="max-w-sm">
          <a className='font-bold' href="http://localhost:5173/">X</a>
          <img
                src={`http://localhost:3000/img/${String(selectedCat.ImageFileName)}`}
                alt={selectedCat.name}
          />
          <h2 className="text-lg font-bold">Nombre: {selectedCat.name}</h2>
          <p><span className="text-lg font-bold">ID: </span>{selectedCat.id}</p>
          <p><span className="text-lg font-bold">Genero: </span>{selectedCat.gender}</p>
          <p><span className="text-lg font-bold">Nombre imagen: </span> {selectedCat.ImageFileName}</p>
          <p><span className="text-lg font-bold">Edad: </span> {selectedCat.age}</p>
          <p><span className="text-lg font-bold">Descripcion: </span> {selectedCat.description}</p>
        </div>
      ) : (
        // galeria imagenes / pagina principal / ver mas
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0.5 h-full">
          {cats.map((cat) => (
            <div className="p-6" key={cat.id}>
              <img
                src={`http://localhost:3000/img/${String(cat.ImageFileName)}`}
                alt={cat.name}
              />
              <h2 className="text-lg font-bold">{cat.name}</h2>
              <button
                className="bg-gray-400 py-2 px-4"
                onClick={() => setSelectedCat(cat)}
              >
                Ver más
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;