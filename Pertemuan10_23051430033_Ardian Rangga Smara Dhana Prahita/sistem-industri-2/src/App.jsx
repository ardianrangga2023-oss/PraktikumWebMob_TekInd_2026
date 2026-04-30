import React from 'react';
import KartuMesin from './Komponen/KartuMesin';
import JamDigital from './Komponen/JamDigital'; // Import si cantik Jam Digital
import CounterProduksi from './Komponen/CounterProduksi'; // Import Counter Produksi

function App() {
  const daftarMesin = [
    { id: 1, nama: "CNC-Turning-01", status: "Running", produksi: 150 },
    { id: 2, nama: "CNC-Milling-02", status: "Maintenance", produksi: 0 },
    { id: 3, nama: "Press-Hydraulic-05", status: "Stop", produksi: 85 },
  ];

  return (
    <div className="container mt-5 pb-5">
      <header className="text-center mb-5">
        <h1 className="display-5 fw-bold text-dark">Monitoring Lini Produksi A</h1>
        <p className="text-muted">Laporan Real-time Status Mesin Industri</p>
      </header>

      <div className="row mb-5">
        <div className="col-md-6">
          {/* Manggil Jam Digital (Latihan 1) */}
          <JamDigital />
        </div>
        <div className="col-md-6">
          {/* Manggil Counter Produksi (Latihan 2) */}
          <CounterProduksi />
        </div>
      </div>

      <hr />
      <h3 className="mb-4">Status Mesin Utama</h3>
      <div className="row g-4"> 
        {daftarMesin.map((mesin) => (
          <div className="col-md-4" key={mesin.id}>
            <KartuMesin
              nama={mesin.nama}
              status={mesin.status}
              produksi={mesin.produksi}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;