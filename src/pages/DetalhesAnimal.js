// src/pages/DetalhesAnimal.js
import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';

function DetalhesAnimal() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [animalInfo, setAnimalInfo] = useState({
    nome: 'Rex',
    idade: 4,
    raca: 'Labrador',
    sexo: 'Macho',
    vacinas: 'V10, Antirrábica',
    dataEntrada: '2022-06-15',
    status: 'Disponível',
  });

  // Funções de abertura e fechamento do modal
  const handleShowEditModal = () => setShowEditModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);

  // Função para simular a adoção
  const handleAdopt = () => {
    setAnimalInfo({ ...animalInfo, status: 'Adotado' });
  };

  // Função para salvar as edições
  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Lógica para salvar alterações (exemplo de simulação)
    alert('Informações do animal atualizadas!');
    setShowEditModal(false);
  };

  return (
    <div>
      <h2>Detalhes do Animal</h2>
      <Card>
        <Card.Body>
          <Card.Title>{animalInfo.nome}</Card.Title>
          <Card.Text>
            <strong>Idade:</strong> {animalInfo.idade} anos<br />
            <strong>Raça:</strong> {animalInfo.raca}<br />
            <strong>Sexo:</strong> {animalInfo.sexo}<br />
            <strong>Vacinas:</strong> {animalInfo.vacinas}<br />
            <strong>Data de Entrada:</strong> {animalInfo.dataEntrada}<br />
            <strong>Status:</strong> {animalInfo.status}
          </Card.Text>
          <Button variant="success" onClick={handleAdopt} disabled={animalInfo.status === 'Adotado'}>
            {animalInfo.status === 'Adotado' ? 'Adotado' : 'Marcar como Adotado'}
          </Button>{' '}
          <Button variant="primary" onClick={handleShowEditModal}>
            Editar Informações
          </Button>
        </Card.Body>
      </Card>

      {/* Modal para editar as informações do animal */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Informações do Animal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSaveChanges}>
            <Form.Group controlId="nomeAnimal">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                defaultValue={animalInfo.nome}
                onChange={(e) => setAnimalInfo({ ...animalInfo, nome: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="idadeAnimal">
              <Form.Label>Idade</Form.Label>
              <Form.Control
                type="number"
                defaultValue={animalInfo.idade}
                onChange={(e) => setAnimalInfo({ ...animalInfo, idade: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="racaAnimal">
              <Form.Label>Raça</Form.Label>
              <Form.Control
                type="text"
                defaultValue={animalInfo.raca}
                onChange={(e) => setAnimalInfo({ ...animalInfo, raca: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="sexoAnimal">
              <Form.Label>Sexo</Form.Label>
              <Form.Control
                as="select"
                defaultValue={animalInfo.sexo}
                onChange={(e) => setAnimalInfo({ ...animalInfo, sexo: e.target.value })}
              >
                <option>Macho</option>
                <option>Fêmea</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="vacinasAnimal">
              <Form.Label>Vacinas</Form.Label>
              <Form.Control
                type="text"
                defaultValue={animalInfo.vacinas}
                onChange={(e) => setAnimalInfo({ ...animalInfo, vacinas: e.target.value })}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Salvar Alterações
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DetalhesAnimal;
