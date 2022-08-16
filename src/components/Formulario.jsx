import React, { useState } from 'react';
import useLetras from '../hooks/useLetras';
const Formulario = () => {
  const [busqueda, setBusqueda] = useState({ artista: '', cancion: '' });
  const { setAlerta } = useLetras();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(busqueda).includes('')) {
      setAlerta('Coloca nombre de artista y cancion ');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend> Buscar por artista y canción</legend>
      <div className="form-grid">
        <div>
          <label htmlFor="">Artista</label>
          <input
            type="text"
            name="artista"
            placeholder="Buscar por artista"
            onChange={(e) =>
              setBusqueda({ ...busqueda, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="">Canción</label>
          <input
            type="text"
            name="cancion"
            placeholder="Buscar por canción"
            onChange={(e) =>
              setBusqueda({ ...busqueda, [e.target.name]: e.target.value })
            }
          />
        </div>
        <input type="submit" value="Buscar" />
      </div>
    </form>
  );
};

export default Formulario;
