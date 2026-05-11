import React from 'react';
import GrafikProduksi from '../Komponen/GrafikProduksi';
import GrafikDonat from '../Komponen/GrafikDonat';

function Dashboard() {
  return (
    <div className="container-fluid p-0">
      <div className="mb-4">
        <h4 className="fw-bold mb-0">Dashboard Produksi</h4>
        <small className="text-muted">Monitoring Smart Factory</small>
      </div>

      {/* Baris Grafik: Produksi di kiri, Donat di kanan */}
      <div className="row g-3 mb-4">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm p-3 h-100">
            <h6 className="fw-bold small text-muted text-center mb-3">Grafik Produksi Harian</h6>
            <GrafikProduksi />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm p-3 h-100 text-center">
            <h6 className="fw-bold small text-muted mb-3">Proporisi Cacat</h6>
            <div className="d-flex justify-content-center align-items-center" style={{height: '250px'}}>
               <GrafikDonat />
            </div>
          </div>
        </div>
      </div>

      {/* Baris Tabel di bawah */}
      <div className="row">
        <div className="col-12">
          <div className="card border-0 shadow-sm p-4">
            <h6 className="fw-bold mb-3">Tabel Produksi Mesin</h6>
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Nama Mesin</th>
                    <th className="text-center">Output</th>
                    <th className="text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CNC-01</td>
                    <td className="text-center">320</td>
                    <td className="text-center"><span className="badge bg-success-subtle text-success rounded-pill">Running</span></td>
                  </tr>
                  <tr>
                    <td>CNC-02</td>
                    <td className="text-center">310</td>
                    <td className="text-center"><span className="badge bg-success-subtle text-success rounded-pill">Running</span></td>
                  </tr>
                  <tr>
                    <td>PRESS-01</td>
                    <td className="text-center">150</td>
                    <td className="text-center"><span className="badge bg-danger-subtle text-danger rounded-pill">Stop</span></td>
                  </tr>
                  <tr>
                    <td>WELD-04</td>
                    <td className="text-center">0</td>
                    <td className="text-center"><span className="badge bg-warning-subtle text-warning rounded-pill">Maintenance</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;