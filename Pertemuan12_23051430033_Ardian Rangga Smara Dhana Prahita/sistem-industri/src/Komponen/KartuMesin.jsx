import React, { useState } from 'react';

/**
 * KOMPONEN: KartuMesin
 * Penyesuaian Langkah 3: Menambahkan State Internal agar status bisa diedit secara lokal.
 */
function KartuMesin({ nama, status, produksi = 0 }) {
  // --- Penyesuaian Gambar: Langkah 3 ---
  const [statusLokal, setStatusLokal] = useState(status);

  // Mapping warna badge agar tetap reaktif terhadap statusLokal
  const statusColors = {
    'Running': 'bg-success',
    'Stop': 'bg-danger',
    'Maintenance': 'bg-warning',
    'default': 'bg-secondary'
  };

  // Sekarang badgeColor mengikuti statusLokal
  const badgeColor = statusColors[statusLokal] || statusColors['default'];

  return (
    <div className="card shadow-sm p-3 mb-3 border-0" style={{ borderRadius: '15px' }}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="card-title mb-0 fw-bold">{nama || "Mesin Tanpa Nama"}</h5>
          
          {/* Menampilkan badge status yang mengikuti perubahan dropdown */}
          <span className={`badge rounded-pill px-3 ${badgeColor}`}>
            {statusLokal || "N/A"}
          </span>
        </div>

        <hr className="text-muted" />

        <div className="d-flex align-items-center mb-3">
          <div className="flex-grow-1">
            <p className="text-muted small mb-1">Output Produksi</p>
            <h4 className="fw-bold text-primary mb-0">
              {produksi} <small className="text-muted fs-6 fw-normal">Unit</small>
            </h4>
          </div>
        </div>

        {/* --- Penyesuaian Gambar: Form Input State --- */}
        <div className="mt-2 pt-2 border-top">
          <label className="form-label small text-muted">Update Status Mesin:</label>
          <select 
            className="form-select form-select-sm"
            value={statusLokal}
            onChange={(e) => setStatusLokal(e.target.value)}
          >
            <option value="Running">Running</option>
            <option value="Stop">Stop</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default KartuMesin;