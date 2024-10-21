// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';  // Importando o Dashboard
import CadastroAnimais from './pages/CadastroAnimais';
import DetalhesAnimal from './pages/DetalhesAnimal';  // Importando a página de Detalhes
import Doacoes from './pages/Doacoes';
import Despesas from './pages/Despesas';
import RelatoriosFinanceiros from './pages/RelatoriosFinanceiros';
import ControleEstoque from './pages/ControleEstoque';
import ManutencaoInstalacoes from './pages/ManutencaoInstalacoes';
import RelatoriosAdocao from './pages/RelatoriosAdocao';
import Estatisticas from './pages/Estatisticas'; // Importar a página de Estatísticas
import AnexarDocumentos from './pages/AnexarDocumentos';
import VisualizarDocumentos from './pages/VisualizarDocumentos';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Dashboard />} /> {/* Rota inicial para o Dashboard */}
          <Route path="/cadastro-animais" element={<CadastroAnimais />} />
          <Route path="/detalhes-animal" element={<DetalhesAnimal />} />
          <Route path="/doacoes" element={<Doacoes />} />
          <Route path="/despesas" element={<Despesas />} />
          <Route path="/relatorios-financeiros" element={<RelatoriosFinanceiros />} />
          <Route path="/controle-estoque" element={<ControleEstoque />} />
          <Route path="/manutencao-instalacoes" element={<ManutencaoInstalacoes />} />
          <Route path="/relatorios-adocao" element={<RelatoriosAdocao />} />
          <Route path="/estatisticas" element={<Estatisticas />} /> {/* Nova rota para Estatísticas */}
          <Route path="/anexar-documentos" element={<AnexarDocumentos />} />
          <Route path="/visualizar-documentos" element={<VisualizarDocumentos />} />
        </Routes>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
