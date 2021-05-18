import path from 'path';
import fs from 'fs';
import React from 'react';
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import {rootReducer} from '../src/redux/rootReducer.tsx'
import express from 'express';
import { renderToString } from 'react-dom/server'
import App from '../src/App.tsx';
import { FormParamsMatrix } from '../src/components/FormParamsMatrix/FormParamsMatrix'

const PORT = process.env.PORT || 4000;
const server = express();

server.use(express.static('build'))
server.use(express.static('static'))
//server.use(handleRender)
server.get('/', handleRender);

function handleRender(req, res) {
   console.log('query=', req.query)
   const {rows, columns} = req.query
   if (!parseInt(rows) || !parseInt(columns)) {
      const html= renderToString(<FormParamsMatrix/>)
      res.send(renderFullPage(html, {}))
   } else {
      const store = createStore(rootReducer)
      const html = renderToString(
         <Provider store={store}>
            <App />
         </Provider>
      )
      const preloadedState = store.getState()
      res.send(renderFullPage(html, preloadedState))
   }   
}

function renderFullPage(html, preloadedState) {
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

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});