// src/pages/Despesas.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Despesas() {
  return (
    <div>
      <h2>Registro de Despesas</h2>
      <Form>
        <Form.Group controlId="categoriaDespesa">
          <Form.Label>Categoria</Form.Label>
          <Form.Control as="select">
            <option>Alimentação</option>
            <option>Medicamentos</option>
            <option>Manutenção</option>
            <option>Outros</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="descricaoDespesa">
          <Form.Label>Descrição</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Detalhes da despesa" />
        </Form.Group>
        <Form.Group controlId="valorDespesa">
          <Form.Label>Valor</Form.Label>
          <Form.Control type="number" placeholder="Digite o valor da despesa" />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Registrar Despesa</Button>
      </Form>
    </div>
  );
}

export default Despesas;
