import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ScrollToTop, HomeView, Nav, Footer, MailingList } from "../config/C4";

const AppRouter = () => {
  return (
    <Router>
      <Nav />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={HomeView} />
      </Switch>
      <MailingList />
      <Footer />
    </Router>
  );
};

export default AppRouter;
