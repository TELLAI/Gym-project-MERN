import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import React from "react";
import Profil from "../../pages/profil";
import Category from "../../pages/category";
import Home from "../../pages/home";
import Upload from "../../pages/upload";
import Connexion from "../../pages/connexion";

const index = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profil" exact component={Profil} />
        <Route path="/category" exact component={Category} />
        <Route path="/upload" exact component={Upload} />
        <Route path="/connexion" exact component={Connexion} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default index;
