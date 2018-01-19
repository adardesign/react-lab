import React from "react";
import {
  Route,
  Switch
} from 'react-router-dom'

import routes from "./routes";

const App = (props) => {
  return (
    <Switch>
      {routes.map((route, i) => <Route key={i} {...route} {...props} />)}
    </Switch>
  );
};

export default App;
