import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="container mt-5 text-center">
      <h1>Dashboard Utama Pabrik</h1>
      <p>Selamat datang di sistem monitoring terpadu.</p>
      
      {/* Tombol yang sudah ada */}
      <div className="mb-2">
        <Link to="/inventori" className="btn btn-primary">
          Ke Halaman Inventori
        </Link>
      </div>

      {/* --- TOMBOL BARU UNTUK TES 404 --- */}
      <div>
        <Link to="/halaman-yang-tidak-ada" className="btn btn-outline-danger btn-sm">
          2026
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;