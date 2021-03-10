import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import theme from "../utils/theme";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Redirect from "./Redirect";
import server from "../api/server";

const App = () => {
  useEffect(() => {
    server.get("/").then((res) => console.log(res.data.msg));
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" exact component={Redirect} />
        </Switch>
      </Router>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
