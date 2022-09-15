import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Landing } from './pages/landing/Landing';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/react-select" element={<Landing />} />
      <Route path="*" element={<Navigate to="/react-select" replace />} />
    </Routes>
  </BrowserRouter>
);

// eslint-disable-next-line import/no-default-export
export default App;
