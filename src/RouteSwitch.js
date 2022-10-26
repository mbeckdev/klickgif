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
        <Route path="/" element={<Animals />} />
        {/* <Route path="/animals" element={<Animals />} /> */}
        {/* <Route path="/food" element={<Food />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
