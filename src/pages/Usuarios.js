// src/pages/Usuarios.js
import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

function Usuarios() {
  const [users, setUsers] = useState([
    { id: 1, nome: 'Admin', role: 'Administrador' },
    { id: 2, nome: 'Moderador1', role: 'Moderador' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // Função para abrir modal de edição/adicionar
  const handleShowModal = (user = null) => {
    setEditingUser(user);
    setShowModal(true);
  };

  // Função para salvar o usuário
  const handleSaveUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nome = formData.get('nome');
    const role = formData.get('role');

    if (editingUser) {
      setUsers(users.map(user => (user.id === editingUser.id ? { ...user, nome, role } : user)));
    } else {
      setUsers([...users, { id: users.length + 1, nome, role }]);
    }
    setShowModal(false);
  };

  // Função para remover o usuário
  const handleRemoveUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <h2>Gerenciamento de Usuários</h2>
      <Button variant="primary" className="mb-3" onClick={() => handleShowModal()}>
        Adicionar Usuário
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Função</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.nome}</td>
              <td>{user.role}</td>
              <td>
                <Button variant="warning" onClick={() => handleShowModal(user)}>Editar</Button>{' '}
                <Button variant="danger" onClick={() => handleRemoveUser(user.id)}>Remover</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal de Adicionar/Editar Usuário */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editingUser ? 'Editar Usuário' : 'Adicionar Usuário'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSaveUser}>
            <Form.Group controlId="nome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="nome"
                defaultValue={editingUser ? editingUser.nome : ''}
                required
              />
            </Form.Group>
            <Form.Group controlId="role">
              <Form.Label>Função</Form.Label>
              <Form.Control as="select" name="role" defaultValue={editingUser ? editingUser.role : 'Moderador'}>
                <option>Administrador</option>
                <option>Moderador</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Salvar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Usuarios;
