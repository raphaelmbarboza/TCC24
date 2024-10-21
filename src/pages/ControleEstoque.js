// src/pages/ControleEstoque.js
import React from 'react';
import { Form, Button, Table } from 'react-bootstrap';

function ControleEstoque() {
  return (
    <div>
      <h2>Controle de Estoque</h2>
      <Form>
        <Form.Group controlId="itemEstoque">
          <Form.Label>Item</Form.Label>
          <Form.Control type="text" placeholder="Nome do item" />
        </Form.Group>
        <Form.Group controlId="quantidade">
          <Form.Label>Quantidade</Form.Label>
          <Form.Control type="number" placeholder="Quantidade disponível" />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Adicionar ao Estoque</Button>
      </Form>

      <h3 className="mt-4">Itens em Estoque</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ração</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Medicamentos</td>
            <td>50</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ControleEstoque;
