// src/pages/RelatoriosAdocao.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Registrar os componentes necessários do Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function RelatoriosAdocao() {
  const dataAdocoes = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [
      {
        label: 'Adoções Realizadas',
        data: [5, 10, 3, 7, 8],
        fill: false,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  return (
    <div>
      <h2>Relatórios de Adoção</h2>
      <div className="my-4">
        <h4>Evolução das Adoções</h4>
        <Line data={dataAdocoes} />
      </div>
    </div>
  );
}

export default RelatoriosAdocao;
