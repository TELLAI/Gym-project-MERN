import React, { useState } from "react";
import SigninForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import imgMario from "../../mario2.png";

const Log = (props) => {
  const [signUpModal, setSignUpModal] = useState(props.signup);
  const [signInModal, setSignInModal] = useState(props.signin);

  const handelModals = (e) => {
    if (e.target.id == "register") {
      setSignInModal(false);
      setSignUpModal(true);
    } else if (e.target.id == "login") {
      setSignInModal(true);
      setSignUpModal(false);
    }
  };

  return (
    <div className="connection-form">
      <div className="form-container">
        <ul>
          <li>
            <button
              onClick={handelModals}
              id="register"
              className={signUpModal ? "active-btn" : null}
            >
              S'inscrire
            </button>
          </li>
          <li>
            <button
              onClick={handelModals}
              id="login"
              className={signInModal ? "active-btn" : null}
            >
              Se connecter
            </button>
          </li>
        </ul>
      <div className="img-container">
        <img src={imgMario} alt="img-log" />
      </div>
      </div>
      {signUpModal && <SignUpForm />}
      {signInModal && <SigninForm />}
      
    </div>
  );
};

export default Log;
