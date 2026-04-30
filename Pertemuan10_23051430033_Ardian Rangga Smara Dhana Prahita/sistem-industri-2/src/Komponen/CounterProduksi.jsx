import React, { useState } from 'react';

function CounterProduksi() {
  const [hitung, setHitung] = useState(0);
  const [status, setStatus] = useState("NORMAL"); // State status produksi

  // Fungsi untuk reset ke kondisi normal
  const handleReset = () => {
    setHitung(0);
    setStatus("NORMAL");
  };

  return (
    <div className="card shadow-lg p-4 text-center border-0 mb-4" 
         style={{ borderRadius: '15px', backgroundColor: '#1a1d20', color: '#fff' }}>
      
      <h6 className="text-secondary mb-3 fw-bold">SIMULASI HITUNG PRODUK</h6>
      <p className="text-muted small">Pantau *output* produksi secara real-time</p>
      
      <h2 className="display-2 fw-bold mb-2">{hitung}</h2>
      <p className="text-secondary">Target: 100 Unit</p>

      {/* Kondisi 1: Jika status EMERGENCY, tampilkan pesan merah */}
      {status === "EMERGENCY" && (
        <div className="alert alert-danger fw-bold animate__animated animate__flash">
          ⚠️ SISTEM BERHENTI: DARURAT TERDETEKSI!
        </div>
      )}

      {/* Kondisi 2: Pesan berjalan normal */}
      {status === "NORMAL" && (
        <p className="text-info small">Produksi Berjalan... Menuju target 100 unit.</p>
      )}

      <div className="d-flex justify-content-center gap-2 mt-3">
        {/* Tombol +1 akan disabled jika status EMERGENCY */}
        <button 
          className="btn btn-primary btn-sm px-3"
          onClick={() => setHitung(hitung + 1)}
          disabled={status === "EMERGENCY"}
        >
          +1 Unit (Sensor OK)
        </button>

        <button className="btn btn-outline-secondary btn-sm px-3" onClick={handleReset}>
          Reset Shift
        </button>

        {/* Tombol Emergency Stop (Latihan 2) */}
        <button 
          className="btn btn-danger btn-sm px-3 fw-bold"
          onClick={() => setStatus("EMERGENCY")}
        >
          EMERGENCY STOP
        </button>
      </div>
    </div>
  );
}

export default CounterProduksi;