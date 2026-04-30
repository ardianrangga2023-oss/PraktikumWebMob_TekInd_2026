import React from 'react';
import KalkulatorOEE from './Komponen/KalkulatorOEE'; 

function App() {
  return (
    <div className="container mt-5 pb-5">
      <header className="text-center mb-5">
        <h1 className="display-5 fw-bold text-dark">Monitoring Lini Produksi A</h1>
        <p className="text-muted">Laporan Real-time Status Mesin Industri</p>
      </header>

      {/* Bagian Utama: Langsung menampilkan Proyek Mini sesuai instruksi */}
      <div className="row justify-content-center">
        <div className="col-md-10">
          <KalkulatorOEE />
        </div>
      </div>

      <div className="ticks mt-5"></div>
    </div>
  );
}

export default App;