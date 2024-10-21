// src/pages/Estatisticas.js
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';

// Registrar os componentes necessários do Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement);

function Estatisticas() {
  // Dados para o gráfico de adoções por mês
  const dataAdocoes = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [
      {
        label: 'Adoções Realizadas',
        data: [5, 12, 8, 15, 7, 9],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Dados para o gráfico de doações por tipo
  const dataDoacoes = {
    labels: ['Dinheiro', 'Alimentos', 'Medicamentos', 'Outros'],
    datasets: [
      {
        label: 'Doações Recebidas',
        data: [5000, 3000, 1200, 800],
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

  // Dados para o gráfico de despesas por categoria
  const dataDespesas = {
    labels: ['Alimentação', 'Medicamentos', 'Manutenção', 'Outros'],
    datasets: [
      {
        label: 'Despesas Totais',
        data: [2000, 1500, 800, 500],
        backgroundColor: [
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderColor: [
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Estatísticas Detalhadas</h2>

      {/* Gráfico de Adoções por Mês */}
      <div className="my-4">
        <h4>Adoções por Mês</h4>
        <Bar data={dataAdocoes} />
      </div>

      {/* Gráfico de Doações por Tipo */}
      <div className="my-4">
        <h4>Doações por Tipo</h4>
        <Pie data={dataDoacoes} />
      </div>

      {/* Gráfico de Despesas por Categoria */}
      <div className="my-4">
        <h4>Despesas por Categoria</h4>
        <Bar data={dataDespesas} />
      </div>
    </div>
  );
}

export default Estatisticas;
