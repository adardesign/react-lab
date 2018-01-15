
First React component 
https://s.codepen.io/adardesign/debug/RxgeRV/XBkGRoXEwXJA


Functional component - are better for optimization - Simple componants that dont carry state.
you can reuse the props of a parent (onClick) and then props.onClick
AJAX fetch
React Router 

Pages 
  - [x] Home
  - [x] Catagory
  - [x] List
  - [x] Product Detail 
  
TODO:
- [x] Conditional rendering the parts that mobile doesn't show 
  - [ ] Exclude component code and logic from the bundle 
- [x] Router/SPA
- [x] AJAX json
- [x] Skeleton transition
- [x] Lazy loading components
- [x] Uglify the bundles to reduce size
- [ ] Simplify the webpack config
- [ ] SSR
- [ ] Change the images to proper device size 
- [ ] basic Actions 
- [ ] exlusion sections (cretio CSP)
- [ ] 3rd party libs (that inject html in the areas that react Rendered)
- [ ] GraphQL
- [ ] State managment (redux, vs .. mobx)

======================================================

temporary  Configured to run and build multiple pages.
npm run build  --env.appHtml=public/listing-page.html --env.appIndexJs=src/listPage-index.js

npm run start --env.appHtml=public/listing-page.html --env.appIndexJs=src/listPage-index.js


http://adardesign.com/codelab/react/build/catagory-page/index.html
http://adardesign.com/codelab/react/build/listing-page/index.html


http://www.webpagetest.org/result/180104_N9_44af6cb22e51ded140db8c1889c6d040/
http://www.webpagetest.org/result/180104_M4_12cd503d0bb566efa35955e6e956795a/

## Resources:
###Redux Saga and React Router v4
https://www.youtube.com/watch?v=EifOGwAW5ZM

### React Router v4 with Michael Jackson and Ryan Florence - Modern Web
https://www.youtube.com/watch?v=Vur2dAFZ4GE

### React Router v4 and animating transitions by Sam Parsons (July 20, 2017)
https://www.youtube.com/watch?v=chAJ61qxrz0

###My Thoughts On Server-Side Rendering
https://www.youtube.com/watch?v=9PrJjdPiTaQ

### Deploying Create React App with GitHub Pages
https://www.youtube.com/watch?v=7yA7BGos2KQ

### redux
https://redux.js.org/docs/advanced/ExampleRedditAPI.html
