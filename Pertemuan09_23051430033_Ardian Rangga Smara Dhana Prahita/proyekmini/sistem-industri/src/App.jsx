import React from 'react';
import KartuKaryawan from './Komponen/KartuKaryawan';

function App() {
  return (
    <div className="container mt-5">
      <header className="mb-4">
        <h2 className="fw-bold text-dark border-bottom pb-2">Daftar Karyawan Produksi</h2>
      </header>

      <div className="row">
        {/* Karyawan 1: Manager */}
        <div className="col-md-4">
          <KartuKaryawan 
            nama="Ardian Rangga" 
            jabatan="Production Manager" 
            bagian="Management" 
          />
        </div>

        {/* Karyawan 2: Operator */}
        <div className="col-md-4">
          <KartuKaryawan 
            nama="Budi Santoso" 
            jabatan="Machine Operator" 
            bagian="Produksi CNC" 
          />
        </div>

        {/* Karyawan 3: QC */}
        <div className="col-md-4">
          <KartuKaryawan 
            nama="Siti Aminah" 
            jabatan="Quality Control" 
            bagian="Inspection" 
          />
        </div>
      </div>
    </div>
  );
}

export default App;