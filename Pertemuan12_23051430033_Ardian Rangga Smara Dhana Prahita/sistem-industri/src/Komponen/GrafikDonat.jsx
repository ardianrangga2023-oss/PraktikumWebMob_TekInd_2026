import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const GrafikDonat = () => {
  const data = {
    labels: ['Scratch', 'Dent', 'Lainnya'],
    datasets: [{
      data: [50, 30, 20],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverOffset: 4
    }]
  };

  return (
    <div style={{ height: '250px' }} className="d-flex justify-content-center">
      <Doughnut data={data} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default GrafikDonat;