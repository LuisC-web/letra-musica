import { useState } from 'react';
import AppLetras from './components/AppLetras';
import { LetraProvider } from './context/LetrasProvider';
function App() {
  return (
    <LetraProvider>
      <AppLetras></AppLetras>;
    </LetraProvider>
  );
}

export default App;
