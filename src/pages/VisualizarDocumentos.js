// src/pages/VisualizarDocumentos.js
import React from 'react';
import { Table } from 'react-bootstrap';

function VisualizarDocumentos() {
  return (
    <div>
      <h2>Documentos de Transparência</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Documento</th>
            <th>Data de Anexo</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Relatório Financeiro 2024</td>
            <td>2024-10-21</td>
            <td><a href="#">Baixar</a></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default VisualizarDocumentos;
