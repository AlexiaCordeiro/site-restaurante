import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8800/login");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUsers();
  }, []);

  function handleLogin(ev) {
    ev.preventDefault();

    const currentUser = users.find((user) => user.email === userEmail);

    if (currentUser?.email === userEmail && currentUser?.senha == password) {
      localStorage.setItem("usuario", userEmail);
      currentUser.tipo_usuario === 0
        ? navigate("/Admin")
        : navigate("/Products");
    } else {
      window.alert("Usuário ou senha inválidos!");
    }
  }

  return (
    <div>
      <div onSubmit={handleLogin} className={styles.page}>
        <form>
          <fieldset>
            <div className={styles.fieldsetWrapper}>
              <legend>Fazer Login</legend>
              <div className={styles.inputWrapper}>
                <label htmlFor="mail">E-mail:</label>
                <input
                  type="email"
                  id="mail"
                  autoComplete="off"
                  required
                  onChange={(ev) => setUserEmail(ev.target.value)}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="password">Senha:</label>
                <input
                  type="password"
                  id="password"
                  autoComplete="off"
                  required
                  onChange={(ev) => setPassword(ev.target.value)}
                />
              </div>
            </div>
          </fieldset>
          <input type="submit" value="Entrar" className={styles.submit} />
        </form>
        <div className={styles.createUserCard}>
          <h2>
            Ainda não possue uma conta? Clique no botão a seguir para criar uma
            conta!
          </h2>
          <button onClick={() => navigate("/CreateUser")}>Cadastrar</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
