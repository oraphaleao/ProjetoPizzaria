import React from "react";
import "./Dashboard.css";

function Dashboard() {
  const cards = [
    { title: "Pedidos Hoje", value: "50", icon: "🛒" },
    { title: "Novos Clientes", value: "10", icon: "👥" },
    { title: "Faturamento Hoje", value: "R$1.950,00", icon: "💰" },
    { title: "Pedidos Pendentes", value: "2", icon: "🔄" },
  ];

  return (
    <div className="dashboard">
      <h2>Visão Geral</h2>
      <div className="cards">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <span>{card.title}</span>
              <span className="icon">{card.icon}</span>
            </div>
            <div className="card-value">{card.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
