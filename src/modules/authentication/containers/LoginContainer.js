import React, { useState } from "react";
import Input from "../components/Input";

export default function LoginContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberEmail, setRememberEmail] = useState("");

  const onChangeEmail = ({ target }) => {
    setEmail(target.value);
  };

  const onChangePassword = ({ target }) => {
    setPassword(target.value);
  };

  const onChangeRememberEmail = ({ target }) => {
    setRememberEmail(target.value);
  };

  const onLogin = (event) => {
    event.preventDefault();
    console.log("Enviando par ao backend: ", email, password);
  };

  return (
    <div>
      <h3>Tela de Login - Login Container</h3>
      <form>
        <div>
          <label>E-mail:</label>
          <Input type="email" value={email} onChange={onChangeEmail} />
        </div>
        <div>
          <label>Senha:</label>
          <Input type="password" value={password} onChange={onChangePassword} />
        </div>
        <div>
          <label>Gostaria de lembrar seu e-mail:</label>
          <Input
            type="checkbox"
            value={rememberEmail}
            onChange={onChangeRememberEmail}
          />
        </div>
        <div>
          <Input type="button" value="Entrar" onClick={onLogin} />
        </div>
      </form>
    </div>
  );
}
