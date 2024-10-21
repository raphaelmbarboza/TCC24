// src/pages/CadastroAnimais.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';

function CadastroAnimais() {
  return (
    <div>
      <h2>Cadastro de Animais</h2>
      <Form>
        <Form.Group controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Digite o nome do animal" />
        </Form.Group>
        <Form.Group controlId="idade">
          <Form.Label>Idade</Form.Label>
          <Form.Control type="number" placeholder="Digite a idade do animal" />
        </Form.Group>
        <Form.Group controlId="raca">
          <Form.Label>Raça</Form.Label>
          <Form.Control type="text" placeholder="Digite a raça" />
        </Form.Group>
        <Form.Group controlId="sexo">
          <Form.Label>Sexo</Form.Label>
          <Form.Control as="select">
            <option>Macho</option>
            <option>Fêmea</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="vacinas">
          <Form.Label>Vacinas</Form.Label>
          <Form.Control type="text" placeholder="Digite as vacinas" />
        </Form.Group>
        <Form.Group controlId="dataEntrada">
          <Form.Label>Data de Entrada</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group controlId="dataSaida">
          <Form.Label>Data de Saída</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group controlId="fotos">
          <Form.Label>Fotos</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Cadastrar {/* Adicionando margin-top */}
        </Button>
      </Form>
      <br></br>
      <br></br>
    </div>
  );
}

export default CadastroAnimais;
