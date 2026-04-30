import React from 'react';

/**
 * KOMPONEN: KartuMesin
 * * LATIHAN 1 (Destructuring): Mengambil 'nama', 'status', 'produksi' langsung di parameter.
 * LATIHAN 2 (Default Props): Memberikan nilai default 'produksi = 0' jika user lupa mengirimnya.
 */
function KartuMesin({ nama, status, produksi = 0 }) {
  
  // Mapping warna badge agar kode return tetap bersih
  const statusColors = {
    'Running': 'bg-success',
    'Stop': 'bg-danger',
    'Maintenance': 'bg-warning',
    'default': 'bg-secondary'
  };

  // Pilih warna berdasarkan status, jika tidak cocok gunakan warna default
  const badgeColor = statusColors[status] || statusColors['default'];

  return (
    <div className="card shadow-sm p-3 mb-3 border-0" style={{ borderRadius: '15px' }}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          {/* Menggunakan variabel nama hasil destructuring */}
          <h5 className="card-title mb-0 fw-bold">{nama || "Mesin Tanpa Nama"}</h5>
          
          {/* Menampilkan badge status */}
          <span className={`badge rounded-pill px-3 ${badgeColor}`}>
            {status || "N/A"}
          </span>
        </div>

        <hr className="text-muted" />

        <div className="d-flex align-items-center">
          <div className="flex-grow-1">
            <p className="text-muted small mb-1">Output Produksi</p>
            <h4 className="fw-bold text-primary mb-0">
              {/* LATIHAN 2: Jika produksi tidak ada, otomatis muncul 0 */}
              {produksi} <small className="text-muted fs-6 fw-normal">Unit</small>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KartuMesin;