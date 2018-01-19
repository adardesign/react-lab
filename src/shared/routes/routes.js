import React from "react";
import Loadable from 'react-loadable';
import Loading from '../components/Loading';
import "isomorphic-fetch";
import HomePage from '../pages/HomePage';


// *******************
//      Loaders
// *******************

function waitFor(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

function createLoader(delay, loader, error) {
  return () => {
    return waitFor(delay).then(() => {
      if (loader) {
        return loader();
      } else {
        throw error;
      }
    });
  };
}


const LoadableHomePage = Loadable({
//   loader: () => import('../pages/HomePage'),
  loader: createLoader(400, () => HomePage),
  modules: ['../pages/HomePage'],
  loading () { return <Loading type="HomePage"/>},
  delay: 450,
  timeout: 500
});

const LoadableCategoryPagePage = Loadable({
  loader: () => import('../pages/CategoryPage'),
   modules: ['../pages/CategoryPage'],
  loading () { return <Loading type="CategoryPage"/>}
});

const LoadableListPagePage = Loadable({
  loader: () => import('../pages/ListPage'),
  modules: ['../pages/ListPage'],
  loading () { return <Loading type="ListPage"/>}
});

const LoadableProductPage = Loadable({
  loader: () => import('../pages/ProductPage'),
  modules: ['../pages/ProductPage'],
  loading () { return <Loading type="ProductPage"/>}
});


const Routes = [
  {
    path: "/",
    exact: true,
    component: LoadableHomePage
  },
  {
    path: "/c/",
    component: LoadableCategoryPagePage
  },
  {
    path: "/l/",
    component: LoadableListPagePage
  },
  {
    path: "/p/",
    component: LoadableProductPage
  }
];

export default Routes;
