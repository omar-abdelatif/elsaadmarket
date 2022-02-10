import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Login from './login';
import Dashboard from './dashboard';
import Members from './members';
import History from './history';
import Orders from './orders';

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route index path="elsaadmarket" element={<Login />} />
        <Route path="elsaadmarket/dashboard" element={<Dashboard />} />
        <Route path="elsaadmarket/members" element={<Members />} />
        <Route path="elsaadmarket/history" element={<History />} />
        <Route path="elsaadmarket/orders" element={<Orders />} />
      </Routes>
    </React.Fragment>
  );
}
export default App;