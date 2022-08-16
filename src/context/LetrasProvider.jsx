import axios from 'axios';
import { useState, createContext } from 'react';
const LetraContexto = createContext();

const LetraProvider = ({ children }) => {
  const [alerta, setAlerta] = useState('');
  const [letra, setLetra] = useState('');
  const [cargando, setCargando] = useState(false);
  const busquedaLetra = async (busqueda) => {
    try {
      setCargando(true);
      setLetra('');
      const { artista, cancion } = busqueda;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const { data } = await axios(url);
      console.log(data.lyrics);
      setLetra(data.lyrics);
      setCargando(false);
    } catch (error) {
      setCargando(false);
      setAlerta('Cancion no encontrada');
    }
  };
  return (
    <LetraContexto.Provider
      value={{ alerta, setAlerta, busquedaLetra, cargando, letra }}
    >
      {children}
    </LetraContexto.Provider>
  );
};
export { LetraProvider };
export default LetraContexto;
