import { useContext } from 'react';
import LetraContexto from '../context/LetrasProvider';
const useLetras = () => useContext(LetraContexto);
export default useLetras;
