import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import HomePage from '../HomePage'
import CategoryPage from '../CategoryPage'
import ListPageApp from '../ListPageApp'

const CatalogRoutes = () => (
  <Router>
	  <Switch>
      	<Route path="/" exact component={HomePage}/>
      	<Route path="/c/" component={CategoryPage}/>
      	<Route path="/l/" component={ListPageApp}/>
      </Switch>
  </Router>
)

export default CatalogRoutes