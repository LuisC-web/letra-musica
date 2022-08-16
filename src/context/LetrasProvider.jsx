import { useState, createContext } from 'react';

const LetraContexto = createContext();

const LetraProvider = ({ children }) => {
  const [alerta, setAlerta] = useState('');
  return (
    <LetraContexto.Provider value={{ alerta, setAlerta }}>
      {children}
    </LetraContexto.Provider>
  );
};
export { LetraProvider };
export default LetraContexto;
