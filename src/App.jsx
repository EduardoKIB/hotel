import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import cadastro from './páginas/cadastro';
import login from './páginas/login';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<cadastro />} />
        <Route path="login" element={<login />} />
      </Routes>
    </div>
  );
}
