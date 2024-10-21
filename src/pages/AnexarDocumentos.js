// src/pages/AnexarDocumentos.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';

function AnexarDocumentos() {
  return (
    <div>
      <h2>Anexar Documentos de Transparência</h2>
      <Form>
        <Form.Group controlId="documento">
          <Form.Label>Documento</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Anexar Documento</Button>
      </Form>
    </div>
  );
}

export default AnexarDocumentos;
