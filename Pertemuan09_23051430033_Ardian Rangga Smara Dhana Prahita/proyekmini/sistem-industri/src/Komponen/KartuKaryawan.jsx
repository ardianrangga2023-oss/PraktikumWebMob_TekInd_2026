import React from 'react';

// Destructuring props langsung: nama, jabatan, bagian
function KartuKaryawan({ nama, jabatan, bagian }) {
  return (
    <div className="card shadow-sm mb-4 border-start border-4 border-primary" style={{ borderRadius: '10px' }}>
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-auto">
            {/* Ikon avatar sederhana menggunakan inisial */}
            <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', fontSize: '1.2rem' }}>
              {nama.charAt(0)}
            </div>
          </div>
          <div className="col">
            <h5 className="mb-0 fw-bold">{nama}</h5>
            <p className="text-primary mb-0 small fw-semibold">{jabatan}</p>
            <p className="text-muted mb-0 x-small">Bagian: {bagian}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KartuKaryawan;