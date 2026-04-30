import React, { useState, useEffect } from 'react';

function JamDigital() {
  const [waktu, setWaktu] = useState(new Date());
  const [kota, setKota] = useState(""); 

  useEffect(() => {
    const timerID = setInterval(() => {
      setWaktu(new Date());
    }, 1000);
    return () => clearInterval(timerID);
  }, []);

  useEffect(() => {
    document.title = kota ? `Jam [${kota}]` : "Jam Digital";
  }, [kota]);

  return (
    <div className="card shadow-lg p-4 text-center border-0 mb-4" 
         style={{ borderRadius: '15px', backgroundColor: '#1a1d20', color: '#fff' }}>
      
      <h6 className="text-secondary mb-3 fw-bold" style={{ letterSpacing: '1px' }}>
        WAKTU SISTEM {kota ? `DI ${kota.toUpperCase()}` : ""}
      </h6>
      
      <h2 className="display-4 fw-bold text-white mb-4">
        {waktu.toLocaleTimeString()}
      </h2>

      {/* Bagian Input yang sekarang diposisikan di tengah */}
      <div className="d-flex flex-column align-items-center">
        <label className="small fw-bold text-secondary mb-2">Masukkan Nama Kota:</label>
        <input 
          type="text" 
          className="form-control form-control-sm bg-dark text-white border-secondary text-center" 
          placeholder="Ketik kota di sini..."
          value={kota}
          onChange={(e) => setKota(e.target.value)}
          style={{ borderRadius: '20px', maxWidth: '250px' }} 
        />
        <p className="mt-2 text-secondary" style={{ fontSize: '0.75rem' }}>
          Tab browser otomatis: <strong>Jam [{kota || "..."}]</strong>
        </p>
      </div>
    </div>
  );
}

export default JamDigital;