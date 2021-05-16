import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SigninForm = () => {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault(); // pour eviter que la page se recharge à chaque fois !!

    axios({
      method: "post",
      url: `http://localhost:5000/api/user/login`,
      withCredentials: true,
      data: {
        pseudo,
        password,
      },
    });
    history.push("/profil");
  };
  return (
    <form action="" onSubmit={handleLogin} id="sign-up-form">
      <label htmlFor="pseudo">Pseudo</label>
      <br />
      <input
        type="text"
        name="pseudo"
        onChange={(e) => setPseudo(e.target.value)}
        value={pseudo}
      />
      <br />
      <label htmlFor="password">Mot de passe</label>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <br />
      <input type="submit" value="Se connecter" />
    </form>
  );
};

export default SigninForm;