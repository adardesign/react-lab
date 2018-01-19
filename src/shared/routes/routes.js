import React from "react";
import loadable from 'loadable-components'
import Loading from '../components/Loading';




// *******************
//      Loaders
// *******************

export const LoadableHomePage = loadable(() => import('../pages/HomePage'))


// const LoadableHomePage = Loadable({
//   loader: () => import('../pages/HomePage'),
//   modules: ['../pages/HomePage'],
//   render(loaded, props) {
//     console.log(loaded, props)
//     let Component = loaded.namedExport;
//     return <Component {...props}/>;
//   },
//   loading () { return <Loading type="HomePage"/>}
// });

// const LoadableCategoryPagePage = Loadable({
//   loader: () => import('../pages/CategoryPage'),
//    modules: ['../pages/CategoryPage'],
//   loading () { return <Loading type="CategoryPage"/>}
// });
// 
// const LoadableListPagePage = Loadable({
//   loader: () => import('../pages/ListPage'),
//   modules: ['../pages/ListPage'],
//   loading () { return <Loading type="ListPage"/>}
// });
// 
// const LoadableProductPage = Loadable({
//   loader: () => import('../pages/ProductPage'),
//   modules: ['../pages/ProductPage'],
//   loading () { return <Loading type="ProductPage"/>}
// });


const Routes = [
  {
    path: "/",
    exact: true,
    component: LoadableHomePage
  }
  // ,
  //{
  //  path: "/c/",
  //  component: LoadableCategoryPagePage
  //},
  //{
  //  path: "/l/",
  //  component: LoadableListPagePage
  //},
  //{
  //  path: "/p/",
  //  component: LoadableProductPage
  //}
];

export default Routes;
