import React from 'react';
import Formulario from './Formulario';
import useLetras from '../hooks/useLetras';
import Alerta from './Alerta';
import Spinner from './Spinner';
import Letra from './Letra';
const AppLetras = () => {
  const { alerta, cargando, letra } = useLetras();
  return (
    <>
      <header>Buscador de música</header>
      <Formulario></Formulario>
      <main>
        {alerta ? (
          <Alerta>{alerta}</Alerta>
        ) : cargando ? (
          <Spinner></Spinner>
        ) : letra ? (
          <Letra></Letra>
        ) : (
          <p>¡Busca tú canción!</p>
        )}
      </main>
    </>
  );
};

export default AppLetras;
