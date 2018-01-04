
First React component 
https://s.codepen.io/adardesign/debug/RxgeRV/XBkGRoXEwXJA


Functional component - are better for optimization - Simple componants that dont carry state.
you can reuse the props of a parent (onClick) and then props.onClick
AJAX fetch
React Router 

POC - 
  1. Catagory
  2. List
  3. PDP 
  
TODO:
- Not render the parts that mobile doesnt show 
  - Exclude component code and logic from the bundle 
- AJAX json
- Change the images to proper device size 
- Router/SPA
- Skeleton transition
- SSR
- basic Actions 
- exlusion sections (cretio CSP)
- 3rd party libs (that inject html in the areas that react Rendered)


temporary  Configured to run and build multiple pages.
npm run build  --env.appHtml=public/listing-page.html --env.appIndexJs=src/listPage-index.js

npm run start --env.appHtml=public/listing-page.html --env.appIndexJs=src/listPage-index.js


http://adardesign.com/codelab/react/build/catagory-page/index.html
http://adardesign.com/codelab/react/build/listing-page/index.html