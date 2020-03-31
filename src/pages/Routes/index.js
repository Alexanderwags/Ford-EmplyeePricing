import React from "react";
import Header from "../../components/Header";
import Footer from "components/footer";
import Step1 from "../Step-1";
import Home from "../Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Routes = () => {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Step1" component={Step1} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default Routes;
