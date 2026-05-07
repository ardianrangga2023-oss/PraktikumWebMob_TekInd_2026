import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import Dashboard from './Halaman/Dashboard';
import Inventori from './Halaman/Inventori';
import NotFound from './Halaman/NotFound';
import LaporanKualitas from './Halaman/LaporanKualitas';

// Komponen Detail Sederhana
function DetailItem() {
  const { id } = useParams();
  return (
    <div className="container mt-5 text-center">
      <div className="card p-4 shadow-sm">
        <h2 className="text-primary">Detail Bahan Baku</h2>
        <hr />
        <p>Menampilkan data untuk Item ID: <strong>{id}</strong></p>
        <Link to="/inventori" className="btn btn-outline-secondary">Kembali ke Inventori</Link>
      </div>
    </div>
  );
}

// Komponen Navbar
function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark mb-4 shadow text-center">
      <div className="container d-flex flex-column align-items-center">
        <Link className="navbar-brand fw-bold mb-2" to="/">SISTEM PABRIK</Link>
        
        {/* Baris Pertama: Menu Utama dengan spasi */}
        <div className="d-flex justify-content-center">
          <Link className="nav-link px-3 text-white" to="/">Dashboard</Link>
        </div>

        {/* Baris Kedua */}
        <div className="d-flex justify-content-center">
          <Link className="nav-link px-3 text-info" to="/laporan">Laporan Kualitas</Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventori" element={<Inventori />} />
        <Route path="/inventori/:id" element={<DetailItem />} />
        <Route path="/laporan" element={<LaporanKualitas />} />
        {/* Route 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;