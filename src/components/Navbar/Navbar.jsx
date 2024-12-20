import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <button onClick={() => (window.location.href = "../Home")}>Home</button>
      <button onClick={() => (window.location.href = "../Produto")}>
        Produto
      </button>
      <button>Pedidos</button>
      <button>Relatório</button>
      <button>Usuários</button>
      <button>Configuração</button>
      <div className="left-button">
        <a href="/" type="button">Sair</a>
      </div>
    </nav>
  );
}

export default Navbar;
