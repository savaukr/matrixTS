import path from 'path';
import fs from 'fs';
import React from 'react';
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import {rootReducer} from '../src/redux/rootReducer.tsx'
//import express from 'express';
import { renderToString } from 'react-dom/server'
import App from '../src/App.tsx';
import { FormParamsMatrix } from '../src/components/FormParamsMatrix/FormParamsMatrix'

import http from 'http'
import url from 'url'

const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
   res.setHeader("Content-Type", "text/html; charset=utf-8;")
   if ( /^\/\?rows=/.test(req.url) || /^\/$/.test(req.url)) {
      try {
         handleRender(req, res)
      }  catch(e){
         res.end('Щось пішло не так!')
     } 
   }
})

function handleRender(req, res) {
   const query = url.parse(req.url, true).query
   const rows = query.rows
   const columns = query.columns
   if (!parseInt(rows) || !parseInt(columns)) {
      const html= renderToString(<FormParamsMatrix/>)
      res.end(renderFullPage(html))
   }   else {
      const store = createStore(rootReducer)
      const html = renderToString(
         <Provider store={store}>
            <App />
         </Provider>
      )
      const preloadedState = store.getState()
      res.end(renderFullPage(html, preloadedState))
   }
}

function renderFullPage(html, preloadedState={}) {
   const indexFile = path.resolve('./build/index.html');
   let data = fs.readFileSync(indexFile, 'utf8')

   

   if  (data) {
      data = data.replace('<div id="root"></div>', `
      <div id="root">${html}</div>
      <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // https://redux.js.org/recipes/server-rendering/#security-considerations
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
            )}
      </script>
   `)
      data = data.replace(/href="\//g, `href="./build/`)
      
   } else data = "Файл index.html відсутній "
   return data
}

server.listen(PORT)
console.log(`http server running at port:${PORT}` )


//--------------------------------------------------------------------------------------------------------
//const server = express();
// server.use(express.static('build'))
// server.use(express.static('static'))
// //server.use(handleRender)
// server.get('/', handleRender);

// function handleRender(req, res) {
//    console.log('query=', req.query)
//    const {rows, columns} = req.query
//    if (!parseInt(rows) || !parseInt(columns)) {
//       const html= renderToString(<FormParamsMatrix/>)
//       res.send(renderFullPage(html, {}))
//    } else {
//       const store = createStore(rootReducer)
//       const html = renderToString(
//          <Provider store={store}>
//             <App />
//          </Provider>
//       )
//       const preloadedState = store.getState()
//       res.send(renderFullPage(html, preloadedState))
//    }   
// }

// function renderFullPage(html, preloadedState) {
//    const indexFile = path.resolve('./build/index.html');
//    let data = fs.readFileSync(indexFile, 'utf8')
//    if  (data) {
//      data = data.replace('<div id="root"></div>', `
//       <div id="root">${html}</div>
//       <script>
//           // WARNING: See the following for security issues around embedding JSON in HTML:
//           // https://redux.js.org/recipes/server-rendering/#security-considerations
//           window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
//             /</g,
//             '\\u003c'
//           )}
//       </script>
//    `)
//      data = data.replace(/href="\//g, `href="./build/`)
     
//    } else data = "Файл index.html відсутній "
//    return data
// }


// server.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });