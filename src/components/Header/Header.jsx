import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Carioca's Pizzaria - Administração</h1>
      <img
        src="../../img/Logo.png"
        alt="Logo Carioca's Pizzaria"
        className="logo"
      />
    </header>
  );
}

export default Header;
