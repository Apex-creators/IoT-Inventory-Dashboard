// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import InventoryReport from './components/InventoryReport';
import CompanyDashboard from './components/CompanyDashboard';
import DataAnalysisDashboard from './components/DataAnalysisDashboard';
import ProjectInfo from './components/ProjectInfo';

function App() {
  return (
    <div>
      <NavigationBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory-report" element={<InventoryReport />} />
          <Route path="/company-dashboard" element={<CompanyDashboard />} />
          <Route path="/data-analysis" element={<DataAnalysisDashboard />} />
          <Route path="/project-info" element={<ProjectInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
