import React, { useState } from 'react';

function KalkulatorOEE() {
  const [planTime, setPlanTime] = useState(0);
  const [runTime, setRunTime] = useState(0);
  const [totalParts, setTotalParts] = useState(0);
  const [goodParts, setGoodParts] = useState(0);

  // 1. Logika Perhitungan OEE (Latihan 3.c & 3.d)
  const availability = planTime > 0 ? (runTime / planTime) : 0;
  
  // Asumsi Ideal Cycle Time = 1 part/menit
  const performance = runTime > 0 ? (totalParts / (runTime * 1)) : 0; 
  
  const quality = totalParts > 0 ? (goodParts / totalParts) : 0;

  const oeeScore = (availability * performance * quality) * 100;

  // 2. LATIHAN 3.e: Logika Indikator Warna (HEX Code Mutlak)
  let warnaSkor = "#ffc107"; // Kuning (Default)
  
  if (oeeScore < 50) {
    warnaSkor = "#dc3545"; // Merah (Jika < 50%)
  } else if (oeeScore > 85) {
    warnaSkor = "#198754"; // Hijau (Jika > 85%)
  }

  return (
    <div className="card shadow-lg p-4 text-center border-0" 
         style={{ borderRadius: '15px', backgroundColor: '#1a1d20', color: '#fff' }}>
      
      {/* Judul Besar (Latihan 3.a) */}
      <h3 className="fw-bold mb-4 text-info" style={{ letterSpacing: '2px' }}>
        TUGAS PROYEK MINI: KALKULATOR OEE
      </h3>

      <div className="container">
        {/* Baris 1: Plan & Run Time */}
        <div className="row mb-3 align-items-center">
          <div className="col-md-6 d-flex align-items-center justify-content-between">
            <label className="fw-bold text-secondary me-2 text-start" style={{ minWidth: '150px' }}>Plan Time (Min)</label>
            <input type="number" className="form-control bg-dark text-white border-secondary" 
              placeholder="0" onChange={(e) => setPlanTime(Number(e.target.value))} />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-between">
            <label className="fw-bold text-secondary me-2 text-start" style={{ minWidth: '150px' }}>Run Time (Min)</label>
            <input type="number" className="form-control bg-dark text-white border-secondary" 
              placeholder="0" onChange={(e) => setRunTime(Number(e.target.value))} />
          </div>
        </div>

        {/* Baris 2: Total & Good Parts */}
        <div className="row mb-3 align-items-center">
          <div className="col-md-6 d-flex align-items-center justify-content-between">
            <label className="fw-bold text-secondary me-2 text-start" style={{ minWidth: '150px' }}>Total Parts</label>
            <input type="number" className="form-control bg-dark text-white border-secondary" 
              placeholder="0" onChange={(e) => setTotalParts(Number(e.target.value))} />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-between">
            <label className="fw-bold text-secondary me-2 text-start" style={{ minWidth: '150px' }}>Good Parts</label>
            <input type="number" className="form-control bg-dark text-white border-secondary" 
              placeholder="0" onChange={(e) => setGoodParts(Number(e.target.value))} />
          </div>
        </div>
      </div>

      {/* Bagian Hasil (Latihan 3.e) */}
      <div className="mt-4 pt-3 border-top border-secondary">
        <p className="text-muted mb-0 small text-uppercase fw-bold" style={{ letterSpacing: '1px' }}>
          Real-time OEE Score:
        </p>
        
        {/* Skor dengan warna dinamis yang dipaksa lewat style */}
        <h1 className="display-2 fw-bold" style={{ color: warnaSkor }}>
          {oeeScore > 100 ? "100.0" : oeeScore.toFixed(1)}%
        </h1>
        
        <div className="d-flex justify-content-center gap-4 mt-2 fw-bold" style={{ color: '#aaa' }}>
          <span>A: {(availability * 100).toFixed(0)}%</span>
          <span>P: {(performance * 100).toFixed(0)}%</span>
          <span>Q: {(quality * 100).toFixed(0)}%</span>
        </div>
      </div>
    </div>
  );
}

export default KalkulatorOEE;