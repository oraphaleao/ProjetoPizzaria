import React, { useState } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import "./Produto.css";
import placeholderImg from "../../img/img/rectangle.png"; // Substitua pelo caminho correto da imagem
import setaImg from "../../img/icones/setabaixo.png"; // Substitua pelo caminho correto da imagem
import carrinhoImg from "../../img/icones/carrinho.png";
import "./Produto.css"; // Ajuste para o caminho correto dos seus arquivos CSS
import "../../Styles/Cor.css";
import "../../Styles/Tipografia.css";
const Produto = () => {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");

  const handleAddProduto = (e) => {
    e.preventDefault();

    if (!nome || !descricao || !preco) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const novoProduto = { nome, descricao, preco };
    setProdutos([...produtos, novoProduto]);

    // Limpar os campos
    setNome("");
    setDescricao("");
    setPreco("");
  };
  return (
    <div>
      <Header />
      <Navbar />
      {/* Conteúdo Principal */}
      <main>
        <h1 className="texto-produto font-1-xl cor-l4">Produtos</h1>
        <div className="container">
          {/* Formulário de Cadastro de Produto */}
          <form className="produto-container" onSubmit={handleAddProduto}>
            <div className="produto-img">
              <img src={placeholderImg} alt="Imagem do produto" />
              <div className="seta">
                <img src={setaImg} alt="Seta" />
              </div>
            </div>
            <div className="produto-content">
              <input
                className="font-1-m-b"
                type="text"
                placeholder="Nome do Produto"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="produto-content">
              <textarea
                className="font-1-m-b"
                rows="5"
                placeholder="Descrição do Produto"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>
            <div className="produto-content">
              <input
                className="font-1-m-b"
                type="text"
                placeholder="Preço do Produto"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
              />
            </div>
            <button className="button">Adicionar Produto</button>
          </form>

          <section>
            <div class="produtos-container">
              <div class="font-2-l produtos cor-l4">
                <h1>Produtos Cadatrados</h1>
                <img src={carrinhoImg} alt="Carrinho" />
              </div>

              <ul class="produtos-cadastrados">
                <li class="font-1-s cor-l4">
                  <img src={placeholderImg} alt="Imagem do produto" />
                  <div class="produtos-descricao">
                    <h2>Calabresa</h2>
                    <p>
                      mussarela,calabresa,cebola
                      <br />
                      ,pimentao,azeitona e oregano
                    </p>
                  </div>
                </li>

                <li class="font-1-s cor-l4">
                  <img src={placeholderImg} alt="Imagem do produto" />
                  <div class="produtos-descricao">
                    <h2>Calabresa</h2>
                    <p>
                      mussarela,calabresa,cebola
                      <br />
                      ,pimentao,azeitona e oregano
                    </p>
                  </div>
                </li>

                <li class="font-1-s cor-l4">
                  <img src={placeholderImg} alt="Imagem do produto" />
                  <div class="produtos-descricao">
                    <h2>Calabresa</h2>
                    <p>
                      mussarela,calabresa,cebola
                      <br />
                      ,pimentao,azeitona e oregano
                    </p>
                  </div>
                </li>

                <li class="font-1-s cor-l4">
                  <img src={placeholderImg} alt="Imagem do produto" />
                  <div class="produtos-descricao">
                    <h2>Calabresa</h2>
                    <p>
                      mussarela,calabresa,cebola
                      <br />
                      ,pimentao,azeitona e oregano
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Produto;
