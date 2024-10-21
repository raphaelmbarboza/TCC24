// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Navbar.css'; // Caso tenha o CSS personalizado

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Navbar.Brand href="/" className="ml-3">Gestão Recanto São Francisco</Navbar.Brand> {/* Ajuste para espaçamento à esquerda */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Animais" id="dropdown-animais">
            <NavDropdown.Item as={Link} to="/cadastro-animais">
              Cadastro de Animais
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/detalhes-animal">
              Detalhes dos Animais
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Relatórios" id="dropdown-relatorios">
            <NavDropdown.Item as={Link} to="/relatorios-financeiros">
              Relatórios Financeiros
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/relatorios-adocao">
              Relatórios de Adoção
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Financeiro" id="dropdown-financeiro">
            <NavDropdown.Item as={Link} to="/doacoes">
              Doações
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/despesas">
              Despesas
            </NavDropdown.Item>
          </NavDropdown>

          {/* Link para a página de Estatísticas */}
          <Nav.Link as={Link} to="/estatisticas">Estatísticas</Nav.Link>

          <NavDropdown title="Documentos" id="dropdown-documentos">
            <NavDropdown.Item as={Link} to="/anexar-documentos">
              Anexar Documentos
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/visualizar-documentos">
              Visualizar Documentos
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Infraestrutura" id="dropdown-infraestrutura">
            <NavDropdown.Item as={Link} to="/controle-estoque">
              Controle de Estoque
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/manutencao-instalacoes">
              Manutenção de Instalações
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
