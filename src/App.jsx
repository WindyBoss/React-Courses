import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppBar from 'components/AppBar';

import Todos from 'pages/Todos';
import Counter from 'pages/Counter';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route path="counter" element={<Counter />} />
            <Route path="todos" element={<Todos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
