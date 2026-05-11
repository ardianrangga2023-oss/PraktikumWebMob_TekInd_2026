import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Inventori() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts([
        { id: 1, title: "Kertas" },
        { id: 2, title: "Penggaris" },
        { id: 3, title: "Pensil" },
        { id: 4, title: "Tinta bolpoin" },
        { id: 5, title: "Printer" },
      ]);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const tableStyle = {
    margin: '0 auto',
    width: '85%',
    borderCollapse: 'collapse',
    border: '1px solid white'
  };

  const cellStyle = {
    border: '1px solid white',
    padding: '12px',
    textAlign: 'center',
    color: 'white'
  };

  return (
    <div className="container mt-4 text-center">
      <h1 className="mb-4">Data Inventori Bahan Baku</h1>
      
      {loading ? (
        <div className="alert alert-info w-50 mx-auto text-dark">Memuat data...</div>
      ) : (
        <div style={{ width: '100%' }}>
          <table style={tableStyle}>
            <thead style={{ backgroundColor: '#2c2c2c' }}>
              <tr>
                <th style={cellStyle}>ID</th>
                <th style={cellStyle}>Nama Bahan (Klik untuk Detail)</th>
                <th style={cellStyle}>Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.id}>
                  <td style={cellStyle}>{item.id}</td>
                  <td style={cellStyle}>
                    <Link 
                      to={`/inventori/${item.id}`} 
                      className="fw-bold text-decoration-none"
                      style={{ color: 'white' }} // Kunci warna putih di sini
                    >
                      {item.title}
                    </Link>
                  </td>
                  <td style={cellStyle}>Tersedia</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4">
            <Link to="/" className="text-white text-decoration-underline">
              Kembali ke Dashboard
            </Link>
          </div>

          <div className="mt-5">
            <Link to="/arsip-2026" style={{ color: '#444', textDecoration: 'none', fontSize: '0.8rem' }}>
              2026
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Inventori;