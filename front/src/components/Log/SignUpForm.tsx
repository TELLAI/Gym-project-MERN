import React, { useState } from "react";
import axios from "axios";

const SignUpForm = () => {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    await axios({
      method: "post",
      url: `http://localhost:5000/api/user/register`,
      data: {
        pseudo,
        email,
        password,
      },
    });
  
};
return (
  <form action="" onSubmit={handleRegister} id="sign-up-form">
    <label htmlFor="pseudo">Pseudo</label>
    <br />
    <input
      type="text"
      name="pseudo"
      id="pseudo"
      onChange={(e) => setPseudo(e.target.value)}
      value={pseudo}
    />
    <br />
    <label htmlFor="email">Email</label>
    <br />
    <input
      type="text"
      name="email"
      id="email"
      onChange={(e) => setEmail(e.target.value)}
      value={email}
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
    <input type="submit" value="Valider inscription" />
  </form>
  );
};
  export default SignUpForm;