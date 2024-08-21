import * as React from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

import Cadastro from './páginas/cadastro';
import Login from './páginas/login';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}
