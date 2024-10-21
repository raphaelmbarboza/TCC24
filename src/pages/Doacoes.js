// src/pages/Doacoes.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Doacoes() {
  return (
    <div>
      <h2>Registro de Doações</h2>
      <Form>
        <Form.Group controlId="doador">
          <Form.Label>Nome do Doador</Form.Label>
          <Form.Control type="text" placeholder="Digite o nome do doador" />
        </Form.Group>
        <Form.Group controlId="formaDoacao">
          <Form.Label>Forma de Doação</Form.Label>
          <Form.Control as="select">
            <option>Dinheiro</option>
            <option>Alimentos</option>
            <option>Medicamentos</option>
            <option>Outros</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="valor">
          <Form.Label>Valor (se aplicável)</Form.Label>
          <Form.Control type="number" placeholder="Digite o valor da doação" />
        </Form.Group>
        <Form.Group controlId="descricao">
          <Form.Label>Descrição</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Detalhes da doação" />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Registrar Doação</Button>
      </Form>
    </div>
  );
}

export default Doacoes;
