import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook de navegação
import styles from "./Login.module.css";
import users from "./users.json"; // Importa o JSON com os dados dos usuários

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Instancia o hook de navegação

  const handleLogin = (e) => {
    e.preventDefault();

    // Verificar se as credenciais estão no JSON
    const user = users.find(
      (user) => user.email === email && user.senha === senha
    );

    if (user) {
      navigate("/Home"); // Redireciona para a página Home
    } else {
      setError("Email ou senha inválidos.");
    }
  };

  return (
    <div className={styles.loginBd}>
      <header>
        <div className={styles.logo}>
          <img
            className={styles.logoImg}
            src="img/Logo.png"
            alt="Logo da Pizzaria"
          />
        </div>
        <h1>BEM-VINDO!</h1>
      </header>
      <main>
        <section aria-label="Login">
          <form onSubmit={handleLogin} className={styles.login}>
            <div className={styles.loginEscopo}>
              <label htmlFor="email" className={styles.loginTexto}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.loginEmail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="senha" className={styles.loginTexto}>
                Password
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                className={styles.loginEmail}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
              {error && <p className={styles.error}>{error}</p>}
              <div className={styles.loginButton}>
                <button type="submit" className={styles.buttonLogin}>
                  Entrar
                </button>
              </div>
              <a className={styles.buttonText} href="./">
                Esqueceu sua senha?
              </a>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;
