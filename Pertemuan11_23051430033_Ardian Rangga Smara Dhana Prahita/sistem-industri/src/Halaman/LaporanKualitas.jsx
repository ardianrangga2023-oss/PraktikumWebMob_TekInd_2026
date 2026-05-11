import React from 'react';
import { Link } from 'react-router-dom';

function LaporanKualitas() {
  const dataCacat = [
    { id: 1, item: "Baut Baja", jumlah: 5, alasan: "Korosi" },
    { id: 2, item: "Plat Besi", jumlah: 2, alasan: "Bengkok" },
    { id: 3, item: "Mur 12mm", jumlah: 10, alasan: "Ulir Rusak" },
  ];

  // Gaya CSS agar tabel berada di tengah dan bergaris putih
  const tableStyle = {
    margin: '0 auto',
    width: '80%',
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
    <div className="container mt-4 text-center text-white">
      <h1 className="text-danger mb-4">Laporan Kontrol Kualitas</h1>
      <p className="mb-4">Daftar bahan baku yang terdeteksi cacat (Reject).</p>

      <div style={{ width: '100%' }}>
        <table style={tableStyle}>
          <thead style={{ backgroundColor: '#dc3545' }}> {/* Header merah untuk kesan peringatan */}
            <tr>
              <th style={cellStyle}>ID</th>
              <th style={cellStyle}>Item</th>
              <th style={cellStyle}>Jumlah Cacat</th>
              <th style={cellStyle}>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {dataCacat.map((d) => (
              <tr key={d.id}>
                <td style={cellStyle}>{d.id}</td>
                <td style={cellStyle}>{d.item}</td>
                <td style={cellStyle}>{d.jumlah}</td>
                <td style={cellStyle}>{d.alasan}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4">
          <Link to="/" className="text-white text-decoration-underline">
            Kembali ke Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LaporanKualitas;