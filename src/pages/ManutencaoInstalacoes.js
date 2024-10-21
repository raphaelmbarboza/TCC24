// src/pages/ManutencaoInstalacoes.js
import React from 'react';
import { Form, Button, Table } from 'react-bootstrap';

function ManutencaoInstalacoes() {
  return (
    <div>
      <h2>Manutenção de Instalações</h2>
      <Form>
        <Form.Group controlId="manutencaoDescricao">
          <Form.Label>Descrição da Manutenção</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Descreva a manutenção necessária" />
        </Form.Group>
        <Form.Group controlId="dataManutencao">
          <Form.Label>Data Prevista</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Registrar Manutenção</Button>
      </Form>

      <h3 className="mt-4">Manutenções Registradas</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reparo no canil</td>
            <td>2024-10-15</td>
          </tr>
          <tr>
            <td>Troca de lâmpadas</td>
            <td>2024-10-20</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ManutencaoInstalacoes;
