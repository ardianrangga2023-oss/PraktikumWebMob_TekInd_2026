import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Komponen/Sidebar';
import Dashboard from './Halaman/Dashboard';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    // d-flex memastikan anak elemen (Sidebar & Main) berjajar ke samping
    <div className="d-flex" style={{ minHeight: '100vh', width: '100vw', overflowX: 'hidden' }}>
      
      {/* 1. Komponen Sidebar (Kiri) */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* 2. Main Content (Kanan) */}
      <div className="flex-grow-1 bg-light d-flex flex-column">
        
        {/* Header / User Profile */}
        <header className="navbar navbar-light bg-white shadow-sm px-4 py-2 sticky-top">
          <button className="btn btn-outline-dark d-md-none" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            <i className="bi bi-list"></i>
          </button>
          
          <div className="ms-auto text-end">
            <div className="fw-bold text-primary" style={{ fontSize: '0.9rem' }}>Admin Teknik Industri</div>
            <small className="text-muted" style={{ fontSize: '0.75rem' }}>Senin, 11 Mei 2026</small>
          </div>
        </header>

        {/* Konten Dashboard */}
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Tambahkan route lain di sini jika ada */}
          </Routes>
        </main>
      </div>

    </div>
  );
}

export default App;