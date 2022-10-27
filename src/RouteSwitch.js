import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Animals from './workspaces/animals/Animals';
import App from './workspaces/app/App';
// import Food from './workspaces/food/Food';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/klickgif" element={<Animals />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
