import React, { useState } from 'react';
import useLetras from '../hooks/useLetras';
const Formulario = () => {
  const [busqueda, setBusqueda] = useState({ artista: '', cancion: '' });
  const { setAlerta, busquedaLetra } = useLetras();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(busqueda).includes('')) {
      setAlerta('Coloca el nombre de artista y cancion ');
      return;
    }
    setAlerta('');
    busquedaLetra(busqueda);
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
            placeholder="Nombre del artista"
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
            placeholder="Nombre de la canción"
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
