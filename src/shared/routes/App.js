import React from "react";
import {
  Route,
  Switch
} from 'react-router-dom'

import Routes from "./Routes";

const App = (props) => {
  return (
    <Switch>
      {Routes.map((route, i) => <Route key={i} render={ (routeProps) => {  
      		let Comp = route.component;
      		console.log(route);
      		<Comp data={props.data} {...routeProps}  />}
      	}/>
      )}
    </Switch>
  );
}

export default App;
