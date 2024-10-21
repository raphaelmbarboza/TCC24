// src/pages/Dashboard.js
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Registrar os componentes necessários do Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale);

function Dashboard() {
  // Dados fictícios para os cards
  const totalAdocoes = 150;
  const totalAnimaisDisponiveis = 35;
  const totalDoacoesMes = 20;

  // Dados para o gráfico de adoções
  const dataAdocoesMes = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [
      {
        label: 'Adoções Realizadas',
        data: [5, 10, 8, 15, 20, 18],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Visão Geral</h2>
      <Row className="my-4">
        {/* Card de Animais Adotados */}
        <Col md={4}>
          <Card bg="success" text="white" className="mb-3">
            <Card.Body>
              <Card.Title>Animais Adotados</Card.Title>
              <Card.Text style={{ fontSize: '2rem' }}>{totalAdocoes}</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card de Animais Disponíveis */}
        <Col md={4}>
          <Card bg="primary" text="white" className="mb-3">
            <Card.Body>
              <Card.Title>Animais Disponíveis</Card.Title>
              <Card.Text style={{ fontSize: '2rem' }}>{totalAnimaisDisponiveis}</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card de Doações Recentes */}
        <Col md={4}>
          <Card bg="info" text="white" className="mb-3">
            <Card.Body>
              <Card.Title>Doações no Mês</Card.Title>
              <Card.Text style={{ fontSize: '2rem' }}>{totalDoacoesMes}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h4 className="my-4">Adoções por Mês</h4>
      {/* Gráfico de Adoções por Mês */}
      <Bar data={dataAdocoesMes} />
    </div>
  );
}

export default Dashboard;
