import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


import Loadable from 'react-loadable';
import Loading from '../components/Loading';


// *******************
//      Loaders
// *******************
const LoadableHomePage = Loadable({
  loader: () => import('../pages/HomePage'),
  loading () { return <Loading type="HomePage"/>}
});

const LoadableCategoryPagePage = Loadable({
  loader: () => import('../pages/CategoryPage'),
  loading () { return <Loading type="CategoryPage"/>}
});

const LoadableListPagePage = Loadable({
  loader: () => import('../pages/ListPage'),
  loading () { return <Loading type="ListPage"/>}
});

const LoadableProductPage = Loadable({
  loader: () => import('../pages/ProductPage'),
  loading () { return <Loading type="ProductPage"/>}
});




const CatalogRoutes = () => (
  <Router>
	  <Switch>
      	<Route path="/" exact component={LoadableHomePage}/>
      	
      	<Route path="/c/" component={LoadableCategoryPagePage}/>
      	
      	<Route path="/l/" component={LoadableListPagePage}/>

        <Route path="/p/" component={LoadableProductPage}/>
      </Switch>
  </Router>
)

export default CatalogRoutes