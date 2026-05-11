import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

function GrafikProduksi() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Simulasi Fetch API dengan Mock Data
    const fetchData = () => {
      const labels = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'];
      const randomProduction = labels.map(() => Math.floor(Math.random() * (250 - 100 + 1)) + 100);
      
      setChartData({
        labels,
        datasets: [
          {
            type: 'bar',
            label: 'Produksi Real-time (Unit)',
            data: randomProduction,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
          },
          {
            type: 'line',
            label: 'Target',
            data: [150, 150, 150, 150, 150, 150],
            borderColor: '#ff6384',
            borderWidth: 2,
            fill: false,
          }
        ]
      });
    };

    fetchData();
  }, []);

  if (!chartData) return <div className="text-center p-5">Loading Data...</div>;

  return (
    <div style={{ height: '300px' }}>
      <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
}

export default GrafikProduksi;