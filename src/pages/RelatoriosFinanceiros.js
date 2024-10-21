// src/pages/RelatoriosFinanceiros.js
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';

// Registrar os componentes necessários do Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement);

function RelatoriosFinanceiros() {
  const dataDoacoes = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [
      {
        label: 'Doações Recebidas (R$)',
        data: [3000, 5000, 4000, 7000, 2000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const dataDespesas = {
    labels: ['Alimentação', 'Medicamentos', 'Manutenção', 'Outros'],
    datasets: [
      {
        label: 'Despesas (R$)',
        data: [4000, 2000, 1500, 800],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Relatórios Financeiros</h2>
      <div className="my-4">
        <h4>Gráfico de Doações Recebidas</h4>
        <Bar data={dataDoacoes} />
      </div>
      <div className="my-4">
        <h4>Distribuição de Despesas</h4>
        <Pie data={dataDespesas} />
      </div>
    </div>
  );
}

export default RelatoriosFinanceiros;
