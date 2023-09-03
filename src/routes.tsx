import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contacts from './components/Contacts';
import Dashboard from './components/Dashboard';

const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Contacts />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
    </Routes>
  );
};

export default AllRoutes;
