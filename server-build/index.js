/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/asset-manifest.json":
/*!***********************************!*\
  !*** ./build/asset-manifest.json ***!
  \***********************************/
/*! exports provided: files, entrypoints, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"files\\\":{\\\"main.css\\\":\\\"/static/css/main.9e74f4a0.chunk.css\\\",\\\"main.js\\\":\\\"/static/js/main.f46c8e17.chunk.js\\\",\\\"main.js.map\\\":\\\"/static/js/main.f46c8e17.chunk.js.map\\\",\\\"runtime-main.js\\\":\\\"/static/js/runtime-main.5873da6b.js\\\",\\\"runtime-main.js.map\\\":\\\"/static/js/runtime-main.5873da6b.js.map\\\",\\\"static/js/2.e67b942f.chunk.js\\\":\\\"/static/js/2.e67b942f.chunk.js\\\",\\\"static/js/2.e67b942f.chunk.js.map\\\":\\\"/static/js/2.e67b942f.chunk.js.map\\\",\\\"index.html\\\":\\\"/index.html\\\",\\\"static/css/main.9e74f4a0.chunk.css.map\\\":\\\"/static/css/main.9e74f4a0.chunk.css.map\\\",\\\"static/js/2.e67b942f.chunk.js.LICENSE.txt\\\":\\\"/static/js/2.e67b942f.chunk.js.LICENSE.txt\\\"},\\\"entrypoints\\\":[\\\"static/js/runtime-main.5873da6b.js\\\",\\\"static/js/2.e67b942f.chunk.js\\\",\\\"static/css/main.9e74f4a0.chunk.css\\\",\\\"static/js/main.f46c8e17.chunk.js\\\"]}\");\n\n//# sourceURL=webpack:///./build/asset-manifest.json?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const md5File = __webpack_require__(/*! md5-file */ \"md5-file\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst path = __webpack_require__(/*! path */ \"path\"); // CSS styles will be imported on load and that complicates matters... ignore those bad boys!\n\n\nconst ignoreStyles = __webpack_require__(/*! ignore-styles */ \"ignore-styles\");\n\nconst register = ignoreStyles.default; // We also want to ignore all image requests\n// When running locally these will load from a standard import\n// When running on the server, we want to load via their hashed version in the build folder\n\nconst extensions = [\".gif\", \".jpeg\", \".jpg\", \".png\", \".svg\"]; // Override the default style ignorer, also modifying all image requests\n\nregister(ignoreStyles.DEFAULT_EXTENSIONS, (mod, filename) => {\n  if (!extensions.find(f => filename.endsWith(f))) {\n    // If we find a style\n    return ignoreStyles.noOp();\n  } // for images that less than 10k, CRA will turn it into Base64 string, but here we have to do it again\n\n\n  const stats = fs.statSync(filename);\n  const fileSizeInBytes = stats.size / 1024;\n\n  if (fileSizeInBytes <= 10) {\n    mod.exports = `data:image/${mod.filename.split(\".\").pop()};base64,${fs.readFileSync(mod.filename, {\n      encoding: \"base64\"\n    })}`;\n    return ignoreStyles.noOp();\n  } // If we find an image\n\n\n  const hash = md5File.sync(filename).slice(0, 8);\n  const bn = path.basename(filename).replace(/(\\.\\w{3})$/, `.${hash}$1`);\n  mod.exports = `/static/media/${bn}`;\n}); // Set up babel to do its thing... env for the latest toys, react-app for CRA\n// Notice three plugins: the first two allow us to use import rather than require, the third is for code splitting\n// Polyfill is required for Babel 7, polyfill includes a custom regenerator runtime and core-js\n\n__webpack_require__(/*! @babel/polyfill */ \"@babel/polyfill\");\n\n__webpack_require__(/*! @babel/register */ \"@babel/register\")({\n  ignore: [/\\/(build|node_modules)\\//],\n  presets: [\"@babel/preset-env\", \"@babel/preset-react\"],\n  plugins: [\"@babel/plugin-syntax-dynamic-import\", \"dynamic-import-node\", \"react-loadable/babel\"]\n}); // Now that the nonsense is over... load up the server entry point\n\n\n__webpack_require__(/*! ./server */ \"./server/server.js\");\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/loader.js":
/*!**************************!*\
  !*** ./server/loader.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_frontload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-frontload */ \"react-frontload\");\n/* harmony import */ var react_frontload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_frontload__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _src_index_tsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/index.tsx */ \"./src/index.tsx\");\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/App */ \"./src/App.tsx\");\n/* harmony import */ var _build_asset_manifest_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../build/asset-manifest.json */ \"./build/asset-manifest.json\");\nvar _build_asset_manifest_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../build/asset-manifest.json */ \"./build/asset-manifest.json\", 1);\n// Express requirements\n\n // React requirements\n\n\n\n\n\n\n\n // Our store, entrypoint, and manifest\n\n\n\n // Some optional Redux functions related to user authentication\n// import { setCurrentUser, logoutUser } from '../src/modules/auth';\n// LOADER\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  /*\r\n    A simple helper function to prepare the HTML markup. This loads:\r\n      - Page title\r\n      - SEO meta tags\r\n      - Preloaded state (for Redux) depending on the current route\r\n      - Code-split script tags depending on the current route\r\n  */\n  const injectHTML = (data, {\n    html,\n    title,\n    meta,\n    body,\n    scripts,\n    state\n  }) => {\n    data = data.replace('<html>', `<html ${html}>`);\n    data = data.replace(/<title>.*?<\\/title>/g, title);\n    data = data.replace('</head>', `${meta}</head>`);\n    data = data.replace('<div id=\"root\"></div>', `<div id=\"root\">${body}</div><script>window.__PRELOADED_STATE__ = ${state}</script>${scripts.join('')}`);\n    return data;\n  }; // Load in our HTML file from our build\n\n\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname, './SLAVA/memcrabStag/matrixTS/build/index.html'), 'utf8', (err, htmlData) => {\n    // If there's an error... serve up something nasty\n    if (err) {\n      console.error('Read error', err);\n      return res.status(404).end();\n    } // Create a store (with a memory history) from our current url\n\n\n    console.log('req.url=', req.url); //const  store  = createStore;\n    // If the user has a cookie (i.e. they're signed in) - set them as the current user\n    // Otherwise, we want to set the current state to be logged out, just in case this isn't the default\n    // if ('mywebsite' in req.cookies) {\n    //   store.dispatch(setCurrentUser(req.cookies.mywebsite));\n    // } else {\n    //   store.dispatch(logoutUser());\n    // }\n\n    const context = {};\n    const modules = [];\n    /*\r\n      Here's the core funtionality of this file. We do the following in specific order (inside-out):\r\n        1. Load the <App /> component\r\n        2. Inside of the Frontload HOC\r\n        3. Inside of a Redux <StaticRouter /> (since we're on the server), given a location and context to write to\r\n        4. Inside of the store provider\r\n        5. Inside of the React Loadable HOC to make sure we have the right scripts depending on page\r\n        6. Render all of this sexiness\r\n        7. Make sure that when rendering Frontload knows to get all the appropriate preloaded requests\r\n        In English, we basically need to know what page we're dealing with, and then load all the appropriate scripts and\r\n      data for that page. We take all that information and compute the appropriate state to send to the user. This is\r\n      then loaded into the correct components and sent as a Promise to be handled below.\r\n    */\n\n    Object(react_frontload__WEBPACK_IMPORTED_MODULE_7__[\"frontloadServerRender\"])(() => Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_loadable__WEBPACK_IMPORTED_MODULE_8___default.a.Capture, {\n      report: m => modules.push(m)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n      store: _src_index_tsx__WEBPACK_IMPORTED_MODULE_9__[\"store\"]\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__[\"StaticRouter\"], {\n      location: req.url,\n      context: context\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_frontload__WEBPACK_IMPORTED_MODULE_7__[\"Frontload\"], {\n      isServer: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null))))))).then(routeMarkup => {\n      if (context.url) {\n        // If context has a url property, then we need to handle a redirection in Redux Router\n        res.writeHead(302, {\n          Location: context.url\n        });\n        res.end();\n      } else {\n        // Otherwise, we carry on...\n        // Let's give ourself a function to load all our page-specific JS assets for code splitting\n        const extractAssets = (assets, chunks) => Object.keys(assets).filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1).map(k => assets[k]); // Let's format those assets into pretty <script> tags\n\n\n        const extraChunks = extractAssets(_build_asset_manifest_json__WEBPACK_IMPORTED_MODULE_11__, modules).map(c => `<script type=\"text/javascript\" src=\"/${c.replace(/^\\//, '')}\"></script>`); // We need to tell Helmet to compute the right meta tags, title, and such\n\n        const helmet = react_helmet__WEBPACK_IMPORTED_MODULE_4___default.a.renderStatic(); // NOTE: Disable if you desire\n        // Let's output the title, just to see SSR is working as intended\n\n        console.log('THE TITLE', helmet.title.toString()); // Pass all this nonsense into our HTML formatting function above\n\n        const html = injectHTML(htmlData, {\n          html: helmet.htmlAttributes.toString(),\n          title: helmet.title.toString(),\n          meta: helmet.meta.toString(),\n          body: routeMarkup,\n          scripts: extraChunks,\n          state: JSON.stringify(_src_index_tsx__WEBPACK_IMPORTED_MODULE_9__[\"store\"].getState()).replace(/</g, '\\\\u003c')\n        }); // We have all the final HTML, let's send it to the user already!\n\n        res.send(html);\n      }\n    });\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./server/loader.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loader */ \"./server/loader.js\");\n// Express requirements\n\n\n\n\n //import forceDomain from 'forcedomain';\n\n\n // Our loader - this basically acts as the entry point for each page load\n\n // Create our express app using the port optionally specified\n\nconst app = express__WEBPACK_IMPORTED_MODULE_2___default()();\nconst PORT = process.env.PORT || 3000; // NOTE: UNCOMMENT THIS IF YOU WANT THIS FUNCTIONALITY\n\n/*\r\n  Forcing www and https redirects in production, totally optional.\r\n\r\n  http://mydomain.com\r\n  http://www.mydomain.com\r\n  https://mydomain.com\r\n\r\n  Resolve to: https://www.mydomain.com\r\n*/\n// if (process.env.NODE_ENV === 'production') {\n//   app.use(\n//     forceDomain({\n//       hostname: 'www.mydomain.com',\n//       protocol: 'https'\n//     })\n//   );\n// }\n// Compress, parse, log, and raid the cookie jar\n\napp.use(compression__WEBPACK_IMPORTED_MODULE_1___default()());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_0___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_0___default.a.urlencoded({\n  extended: false\n}));\napp.use(morgan__WEBPACK_IMPORTED_MODULE_3___default()('dev'));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_6___default()()); // Set up homepage, static assets, and capture everything else\n\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.Router().get('/', _loader__WEBPACK_IMPORTED_MODULE_7__[\"default\"]));\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.static(path__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(__dirname, '../build')));\napp.use(_loader__WEBPACK_IMPORTED_MODULE_7__[\"default\"]); // We tell React Loadable to load all required assets and start listening - ROCK AND ROLL!\n\nreact_loadable__WEBPACK_IMPORTED_MODULE_5___default.a.preloadAll().then(() => {\n  app.listen(PORT, console.log(`App listening on port ${PORT}!`));\n}); // Handle the bugs somehow\n\napp.on('error', error => {\n  if (error.syscall !== 'listen') {\n    throw error;\n  }\n\n  const bind = typeof PORT === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT;\n\n  switch (error.code) {\n    case 'EACCES':\n      console.error(bind + ' requires elevated privileges');\n      process.exit(1);\n      break;\n\n    case 'EADDRINUSE':\n      console.error(bind + ' is already in use');\n      process.exit(1);\n      break;\n\n    default:\n      throw error;\n  }\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AddRow_AddRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AddRow/AddRow */ \"./src/components/AddRow/AddRow.tsx\");\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/actions */ \"./src/redux/actions.tsx\");\n/* harmony import */ var _components_Matrix_Matrix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Matrix/Matrix */ \"./src/components/Matrix/Matrix.tsx\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/config */ \"./src/config/config.tsx\");\n\n\n\n\n\n\n\nconst App = ({\n  addRow,\n  matrix\n}) => {\n  function getMatrixRow(columns = _config_config__WEBPACK_IMPORTED_MODULE_5__[\"N\"], i) {\n    const row = [];\n\n    for (let j = 0; j < columns; j++) {\n      const amount = Math.floor(Math.random() * 1001);\n      row[j] = {\n        id: `${i}x${j}`,\n        amount,\n        bright: false,\n        part: false\n      };\n    }\n\n    return row;\n  }\n\n  const addRowHandle = event => {\n    addRow(getMatrixRow(_config_config__WEBPACK_IMPORTED_MODULE_5__[\"N\"], matrix.length));\n  };\n\n  try {\n    if (!matrix.length) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"\\u041D\\u0435\\u043C\\u0430\\u0454 \\u0436\\u043E\\u0434\\u043D\\u043E\\u0457 \\u0441\\u0442\\u0440\\u0456\\u0447\\u043A\\u0438!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AddRow_AddRow__WEBPACK_IMPORTED_MODULE_2__[\"AddRow\"], {\n      addRowHandle: addRowHandle\n    }));\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Matrix_Matrix__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      matrix: matrix\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AddRow_AddRow__WEBPACK_IMPORTED_MODULE_2__[\"AddRow\"], {\n      addRowHandle: addRowHandle\n    }));\n  } catch (err) {\n    console.log(err.message);\n  }\n};\n\nconst mapStateToProps = state => {\n  return {\n    matrix: state.matrix.matrix\n  };\n};\n\nconst mapDispatchToProps = {\n  addRow: _redux_actions__WEBPACK_IMPORTED_MODULE_3__[\"addRow\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(App));\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/components/AddRow/AddRow.css":
/*!******************************************!*\
  !*** ./src/components/AddRow/AddRow.css ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".addrRow-wrap {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n}\\r\\n.addrRow-wrap button {\\r\\n    margin: 15px 0;\\r\\n    padding: 10px 15px;\\r\\n    height: 40px;\\r\\n    border: none;\\r\\n    outline: none;\\r\\n    border-radius: 5px;\\r\\n    background-color: rgb(13, 51, 51);\\r\\n    color: #ffff;\\r\\n    font-size: 18px;\\r\\n    line-height: 20px;\\r\\n    cursor:pointer;\\r\\n}\\r\\n.addrRow-wrap button:hover {\\r\\n    background-color: rgb(24, 87, 87);\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/components/AddRow/AddRow.css?");

/***/ }),

/***/ "./src/components/AddRow/AddRow.tsx":
/*!******************************************!*\
  !*** ./src/components/AddRow/AddRow.tsx ***!
  \******************************************/
/*! exports provided: AddRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddRow\", function() { return AddRow; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AddRow_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddRow.css */ \"./src/components/AddRow/AddRow.css\");\n\n\nconst AddRow = ({\n  addRowHandle\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"addrRow-wrap\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: addRowHandle\n  }, \"\\u0421\\u0442\\u0432\\u043E\\u0440\\u0438\\u0442\\u0438 \\u0440\\u044F\\u0434\\u043E\\u043A\"));\n};\n\n//# sourceURL=webpack:///./src/components/AddRow/AddRow.tsx?");

/***/ }),

/***/ "./src/components/DeleteRow/DeleteRow.tsx":
/*!************************************************!*\
  !*** ./src/components/DeleteRow/DeleteRow.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions */ \"./src/redux/actions.tsx\");\n\n\n\n\nconst DeleteRow = ({\n  footerClass,\n  deleteRow,\n  ind\n}) => {\n  const deleteHandle = event => {\n    deleteRow(ind);\n  };\n\n  if (footerClass) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);\n  } else {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      onClick: deleteHandle\n    }, \"\\xD7\"));\n  }\n};\n\nconst mapDispatchToProps = {\n  deleteRow: _redux_actions__WEBPACK_IMPORTED_MODULE_2__[\"deleteRow\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(null, mapDispatchToProps)(DeleteRow));\n\n//# sourceURL=webpack:///./src/components/DeleteRow/DeleteRow.tsx?");

/***/ }),

/***/ "./src/components/Matrix/Matrix.css":
/*!******************************************!*\
  !*** ./src/components/Matrix/Matrix.css ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".container {\\r\\n    overflow: auto;\\r\\n}\\r\\n.matrix-wrap {\\r\\n    max-width:100%;\\r\\n    display:flex;\\r\\n    padding: 15px 0;\\r\\n\\tjustify-content: space-between;\\r\\n}\\r\\n.matrix-content {\\r\\n    border: 1px solid rgb(24, 1, 1);\\r\\n    border-radius: 10px;\\r\\n    padding: 5px;\\r\\n    margin-left: 20px;\\r\\n    background-color: rgb(80,227,164);\\r\\n    display:flex;\\r\\n    flex-direction: column;\\r\\n\\tjustify-content: center;\\r\\n}\\r\\n.matrix-header {\\r\\n    align-self: flex-end;\\r\\n    min-width:100px;\\r\\n    color:rgb(255,255,255);\\r\\n    padding: 5px;\\r\\n    font-size: 18px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/components/Matrix/Matrix.css?");

/***/ }),

/***/ "./src/components/Matrix/Matrix.tsx":
/*!******************************************!*\
  !*** ./src/components/Matrix/Matrix.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Row_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Row/Row */ \"./src/components/Row/Row.tsx\");\n/* harmony import */ var _Matrix_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Matrix.css */ \"./src/components/Matrix/Matrix.css\");\n\n\n\n\n\nconst Matrix = ({\n  matrix\n}) => {\n  const [matrixJSX, setMatrixJSX] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n\n  const getAverages = arr => {\n    const arrAverage = [];\n    const rowCount = arr.length || 0;\n    const columnCount = arr[0].length || 0;\n\n    for (let j = 0; j < columnCount; j++) {\n      let sum = 0;\n\n      for (let i = 0; i < rowCount; i++) {\n        sum += arr[i][j][\"amount\"];\n      }\n\n      arrAverage[j] = {\n        id: `footer${j}`,\n        amount: Math.ceil(sum / rowCount)\n      };\n    }\n\n    return arrAverage;\n  };\n\n  function getMatrixJsx(arr) {\n    let table = [];\n\n    for (let i = 0; i < arr.length; i++) {\n      table[i] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Row_Row__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        key: i,\n        arrRow: arr[i],\n        ind: i,\n        footerClass: \"\"\n      });\n    }\n\n    table[arr.length] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Row_Row__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: arr.length,\n      ind: arr.length,\n      arrRow: getAverages(arr),\n      footerClass: \"footer\"\n    });\n    return table;\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    setMatrixJSX(getMatrixJsx(matrix));\n  }, [matrix]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"matrix-wrap\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"matrix-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Matrix \", matrix.length, \"x\", matrix[0].length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"matrix-header\"\n  }, \"\\u0421\\u0443\\u043C\\u0430 \\u043F\\u043E \\u0440\\u044F\\u0434\\u043A\\u0443\"), matrixJSX));\n};\n\nconst mapStateToProps = state => {\n  return {\n    matrix: state.matrix.matrix\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, null)(Matrix));\n\n//# sourceURL=webpack:///./src/components/Matrix/Matrix.tsx?");

/***/ }),

/***/ "./src/components/Row/Row.css":
/*!************************************!*\
  !*** ./src/components/Row/Row.css ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".matrix-row {\\r\\n    display:flex;\\r\\n    justify-content: center;\\r\\n}\\r\\n.matrix-row:last-child {\\r\\n    margin-top:10px;\\r\\n}\\r\\n.matrix-ceil {\\r\\n    width:45px;\\r\\n    height: 55px;\\r\\n    margin:1px;\\r\\n    padding: 0 10px;\\r\\n    border: 1px solid rgb(255,255,255);\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    font-weight: 500;\\r\\n    font-size: 1.3rem;\\r\\n    color: rgb(80,80,80);\\r\\n}\\r\\n.matrix-ceil.part {\\r\\n    color: rgb(20,20,20);\\r\\n    position: relative;\\r\\n    z-index: 2;\\r\\n}\\r\\n.matrix-ceil.part div:last-child {\\r\\n    position:absolute;\\r\\n    bottom: 0;\\r\\n    width:100%;\\r\\n    background-color:  rgba(80,80,80, 0.6);\\r\\n}\\r\\n/*\\r\\n.matrix-ceil.part::after {\\r\\n    content: '';\\r\\n    position:absolute;\\r\\n    bottom: 0;\\r\\n    text-align: center;\\r\\n    display: block;\\r\\n    width:100%;\\r\\n    height: attr(data-part);\\r\\n    color: rgb(255,255,255);\\r\\n    background-color:  rgba(80,80,80, 0.3);\\r\\n    \\r\\n}\\r\\n*/\\r\\n.bright {\\r\\n    background-color: rgb(80,80,80);\\r\\n    color: rgb(255,255,255)\\r\\n}\\r\\n.sum {\\r\\n    min-width:80px;\\r\\n    color:rgb(255,255,255);\\r\\n    background-color: rgb(55,202,139);\\r\\n}\\r\\n.footer {\\r\\n    background-color: rgb(255,255,255);\\r\\n    color: rgb(80, 80, 80);\\r\\n    border-color: rgb(80, 80, 80);\\r\\n}\\r\\n.sidebar-row {\\r\\n    width:80px;\\r\\n    background-color: rgb(55,202,139);\\r\\n}\\r\\n.sidebar-row button {\\r\\n    width:60%;\\r\\n    height: 70%;\\r\\n    border-radius: 50%;\\r\\n    cursor: pointer;\\r\\n    outline: none;\\r\\n    border:none;\\r\\n}\\r\\n.sidebar-row button:hover {\\r\\n    background-color: rgb(136, 4, 11);\\r\\n}\\r\\n.matrix-row:last-child .sidebar-row:after {\\r\\n    content:'Середнє стовпця';\\r\\n    font-size: 16px;\\r\\n    width:100%;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/components/Row/Row.css?");

/***/ }),

/***/ "./src/components/Row/Row.tsx":
/*!************************************!*\
  !*** ./src/components/Row/Row.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DeleteRow_DeleteRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DeleteRow/DeleteRow */ \"./src/components/DeleteRow/DeleteRow.tsx\");\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ \"./src/redux/actions.tsx\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/config */ \"./src/config/config.tsx\");\n/* harmony import */ var _Row_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Row.css */ \"./src/components/Row/Row.css\");\n\n\n\n\n\n\n\nconst Row = ({\n  matrix,\n  arrRow,\n  footerClass,\n  ind,\n  increaseAmount,\n  mouseOverCeil,\n  mouseOverSum,\n  mouseOut\n}) => {\n  const getSumRow = row => {\n    return row.reduce((summa, item) => summa + item.amount, 0);\n  };\n\n  const sum = getSumRow(arrRow); //   interface Event extends React.MouseEvent{\n  //     dataset: {id:string};\n  // }\n  //event:Event ????????????????\n\n  const increaseAmountHandle = event => {\n    if (event.target.dataset.id[0] !== \"f\") {\n      const row = +event.currentTarget.dataset.id.split(\"x\")[0];\n      const column = +event.currentTarget.dataset.id.split(\"x\")[1];\n      increaseAmount(row, column);\n    }\n  };\n\n  const mouseOverHandler = event => {\n    //мошук масиву  X найближчих Amount до вибраного\n    //arr - state, elem - обраний елемент в state\n    const findXNearAmount = (arr, elem, X) => {\n      const arrSort = [];\n      let k = 0;\n\n      for (let i = 0; i < arr.length; i++) {\n        for (let j = 0; j < arr[i].length; j++) {\n          arrSort[k] = Object.assign({}, arr[i][j]);\n          k++;\n        }\n      }\n\n      arrSort.sort((a, b) => {\n        return a.amount - b.amount;\n      });\n      const index = +arrSort.findIndex(item => item.amount === elem.amount);\n      let start, end; // початок та кінець найближчих Amount\n\n      start = index - Math.ceil(X / 2);\n      end = index + Math.ceil(X / 2);\n\n      while (start < 0) {\n        start++;\n        end++;\n      }\n\n      while (end >= arrSort.length) {\n        start--;\n        end--;\n      }\n\n      if (X % 2) {\n        const diffStart = arrSort[start][\"amount\"] - arrSort[index][\"amount\"];\n        const diffEnd = arrSort[index][\"amount\"] - arrSort[end][\"amount\"];\n        if (diffStart !== diffEnd && diffStart > diffEnd) start++;else end--;\n      } //щоб виділити обраний елемент замінити index+1 на  index\n\n\n      return [...arrSort.slice(start, index), ...arrSort.slice(index + 1, end + 1)];\n    };\n\n    if (event.target.dataset.id[0] !== \"f\" && event.target.dataset.id[0] !== \"s\") {\n      const row = +event.target.dataset.id.split(\"x\")[0];\n      const column = +event.target.dataset.id.split(\"x\")[1];\n      const arr = matrix.concat();\n      let arrNear = findXNearAmount(arr, arr[row][column], _config_config__WEBPACK_IMPORTED_MODULE_4__[\"X\"]);\n      arrNear.forEach(elem => {\n        const i = +elem.id.split(\"x\")[0];\n        const j = +elem.id.split(\"x\")[1];\n        elem.bright = !elem.bright;\n        arr[i][j] = Object.assign({}, elem);\n      });\n      mouseOverCeil(arr);\n    }\n  };\n\n  const mouseOverSumHandler = event => {\n    if (event.target.dataset.ind) {\n      const arr = matrix.concat();\n\n      if (ind < arr.length) {\n        arr[ind].forEach(item => {\n          item.part = !item.part;\n        });\n      }\n\n      mouseOverSum(arr);\n    }\n  };\n\n  const mouseOutHandler = event => {\n    const arr = matrix.concat();\n    mouseOverHandler(event);\n    arr.forEach(row => {\n      row.forEach(ceil => ceil.bright = false);\n    });\n    mouseOut(arr);\n  };\n\n  const row = arrRow.map(item => {\n    const styles = {\n      height: Math.round(item.amount * 100 / sum) * 2 + \"%\"\n    };\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: item.id,\n      className: `matrix-ceil ${footerClass || \"\"} ${item.bright ? \"bright\" : \"\"} ${item.part ? \"part\" : \"\"}`,\n      \"data-part\": `${Math.round(item.amount * 100 / sum)}%`,\n      \"data-id\": item.id,\n      onClick: increaseAmountHandle,\n      onMouseDown: event => {\n        event.preventDefault();\n      },\n      onMouseOver: mouseOverHandler,\n      onMouseOut: mouseOutHandler\n    }, item.part ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, `${Math.round(item.amount * 100 / sum)}%`) : item.amount, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: styles\n    }));\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"matrix-row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"matrix-ceil sidebar-row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeleteRow_DeleteRow__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    footerClass: footerClass,\n    ind: ind\n  })), row, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"matrix-ceil sum\",\n    \"data-id\": \"sum\",\n    \"data-ind\": ind,\n    onMouseOver: mouseOverSumHandler,\n    onMouseOut: mouseOverSumHandler\n  }, sum));\n};\n\nconst mapStateToProps = state => {\n  return {\n    matrix: state.matrix.matrix\n  };\n};\n\nconst mapDispatchToProps = {\n  increaseAmount: _redux_actions__WEBPACK_IMPORTED_MODULE_3__[\"increaseAmount\"],\n  mouseOverCeil: _redux_actions__WEBPACK_IMPORTED_MODULE_3__[\"mouseOverCeil\"],\n  mouseOut: _redux_actions__WEBPACK_IMPORTED_MODULE_3__[\"mouseOut\"],\n  mouseOverSum: _redux_actions__WEBPACK_IMPORTED_MODULE_3__[\"mouseOverSum\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Row));\n\n//# sourceURL=webpack:///./src/components/Row/Row.tsx?");

/***/ }),

/***/ "./src/config/config.tsx":
/*!*******************************!*\
  !*** ./src/config/config.tsx ***!
  \*******************************/
/*! exports provided: M, N, X */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"M\", function() { return M; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"N\", function() { return N; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"X\", function() { return X; });\nconst M = 5; // кількість стрічок\n\nconst N = 10; //кількість стовпчиків\n\nconst X = 3; // кількість близьких Amount\n\n//# sourceURL=webpack:///./src/config/config.tsx?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\r\\n  margin: 0;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! exports provided: store, app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"app\", function() { return app; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ \"./src/App.tsx\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _redux_rootReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redux/rootReducer */ \"./src/redux/rootReducer.tsx\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_frontload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-frontload */ \"react-frontload\");\n/* harmony import */ var react_frontload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_frontload__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n //import reportWebVitals from \"./reportWebVitals\";\n\n\n\n //import {FormParamsMatrix} from './components/FormParamsMatrix/FormParamsMatrix'\n\n\n\nlet preloadedState;\nlet storeTemp;\n\nif (typeof window !== 'undefined') {\n  preloadedState = globalThis.__PRELOADED_STATE__;\n  console.log(preloadedState);\n  delete globalThis.__PRELOADED_STATE__;\n  storeTemp = Object(redux__WEBPACK_IMPORTED_MODULE_4__[\"createStore\"])(_redux_rootReducer__WEBPACK_IMPORTED_MODULE_6__[\"rootReducer\"], preloadedState, Object(redux__WEBPACK_IMPORTED_MODULE_4__[\"compose\"])(globalThis.__REDUX_DEVTOOLS_EXTENSION__ && globalThis.__REDUX_DEVTOOLS_EXTENSION__()));\n} else {\n  preloadedState = globalThis.__PRELOADED_STATE__;\n  console.log(preloadedState);\n  delete globalThis.__PRELOADED_STATE__;\n  storeTemp = Object(redux__WEBPACK_IMPORTED_MODULE_4__[\"createStore\"])(_redux_rootReducer__WEBPACK_IMPORTED_MODULE_6__[\"rootReducer\"], preloadedState, Object(redux__WEBPACK_IMPORTED_MODULE_4__[\"compose\"])(globalThis.__REDUX_DEVTOOLS_EXTENSION__ && globalThis.__REDUX_DEVTOOLS_EXTENSION__()));\n}\n\nconst store = storeTemp;\nconst app = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n  store: store\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_frontload__WEBPACK_IMPORTED_MODULE_8__[\"Frontload\"], {\n  noServerRender: true\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))); // ReactDOM.hydrate(\n//   <React.StrictMode>{app}</React.StrictMode>,\n//   document.getElementById(\"root\")\n// );\n\nif (typeof window !== 'undefined') {\n  const root = document.getElementById('root');\n\n  if (root.hasChildNodes() === true) {\n    // If it's an SSR, we use hydrate to get fast page loads by just\n    // attaching event listeners after the initial render\n    react_loadable__WEBPACK_IMPORTED_MODULE_7___default.a.preloadReady().then(() => {\n      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate(app, root);\n    });\n  } else {\n    // If we're not running on the server, just render like normal\n    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(app, root);\n  }\n} // If you want to start measuring performance in your app, pass a function\n// to log results (for example: reportWebVitals(console.log))\n// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals\n//reportWebVitals();\n\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ }),

/***/ "./src/redux/actions.tsx":
/*!*******************************!*\
  !*** ./src/redux/actions.tsx ***!
  \*******************************/
/*! exports provided: addRow, deleteRow, increaseAmount, mouseOverCeil, mouseOut, mouseOverSum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addRow\", function() { return addRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteRow\", function() { return deleteRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"increaseAmount\", function() { return increaseAmount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mouseOverCeil\", function() { return mouseOverCeil; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mouseOut\", function() { return mouseOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mouseOverSum\", function() { return mouseOverSum; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/redux/types.tsx\");\n\nfunction addRow(row) {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"ADD_ROW\"],\n    payload: row\n  };\n}\nfunction deleteRow(ind) {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"DELETE_ROW\"],\n    payload: ind\n  };\n}\nfunction increaseAmount(row, column) {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"INCREASE_AMOUNT\"],\n    payload: {\n      row,\n      column\n    }\n  };\n}\nfunction mouseOverCeil(arr) {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"MOUSE_OVER_CEIL\"],\n    payload: arr\n  };\n}\nfunction mouseOut(arr) {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"MOUSE_OUT\"],\n    payload: arr\n  };\n}\nfunction mouseOverSum(arr) {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"MOUSE_OVER_SUM\"],\n    payload: arr\n  };\n}\n\n//# sourceURL=webpack:///./src/redux/actions.tsx?");

/***/ }),

/***/ "./src/redux/matrixReducer.tsx":
/*!*************************************!*\
  !*** ./src/redux/matrixReducer.tsx ***!
  \*************************************/
/*! exports provided: matrixReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matrixReducer\", function() { return matrixReducer; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/redux/types.tsx\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ \"./src/config/config.tsx\");\n\n\n\nfunction getMatrixRow(columns = _config_config__WEBPACK_IMPORTED_MODULE_1__[\"N\"], i) {\n  const row = [];\n\n  for (let j = 0; j < columns; j++) {\n    const amount = Math.floor(Math.random() * 1001);\n    row[j] = {\n      id: `${i}x${j}`,\n      amount,\n      bright: false,\n      part: false\n    };\n  }\n\n  return row;\n}\n\nfunction getMatrix(rows = _config_config__WEBPACK_IMPORTED_MODULE_1__[\"M\"], columns = _config_config__WEBPACK_IMPORTED_MODULE_1__[\"N\"]) {\n  let table = [];\n\n  for (let i = 0; i < rows; i++) {\n    table[i] = getMatrixRow(columns, i);\n  }\n\n  return table;\n}\n\nconst initialState = {\n  matrix: getMatrix()\n};\nconst matrixReducer = (state = initialState, action) => {\n  let arr = state.matrix.concat();\n\n  switch (action.type) {\n    case _types__WEBPACK_IMPORTED_MODULE_0__[\"ADD_ROW\"]:\n      return { ...state,\n        matrix: [...state.matrix, action.payload]\n      };\n\n    case _types__WEBPACK_IMPORTED_MODULE_0__[\"DELETE_ROW\"]:\n      arr.splice(action.payload, 1);\n\n      for (let i = action.payload; i < arr.length; i++) {\n        for (let j = 0; j < arr[i].length; j++) {\n          const row = +arr[i][j].id.split('x')[0];\n          arr[i][j].id = `${row - 1}x${j}`;\n        }\n      }\n\n      return { ...state,\n        matrix: [...arr]\n      };\n\n    case _types__WEBPACK_IMPORTED_MODULE_0__[\"INCREASE_AMOUNT\"]:\n      const row = action.payload.row;\n      const column = action.payload.column;\n      arr[row][column]['amount'] = arr[row][column]['amount'] + 1;\n      return { ...state,\n        matrix: [...arr]\n      };\n\n    case _types__WEBPACK_IMPORTED_MODULE_0__[\"MOUSE_OVER_CEIL\"]:\n      return { ...state,\n        matrix: [...action.payload]\n      };\n\n    case _types__WEBPACK_IMPORTED_MODULE_0__[\"MOUSE_OUT\"]:\n      return { ...state,\n        matrix: [...action.payload]\n      };\n\n    case _types__WEBPACK_IMPORTED_MODULE_0__[\"MOUSE_OVER_SUM\"]:\n      return { ...state,\n        matrix: [...action.payload]\n      };\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/redux/matrixReducer.tsx?");

/***/ }),

/***/ "./src/redux/rootReducer.tsx":
/*!***********************************!*\
  !*** ./src/redux/rootReducer.tsx ***!
  \***********************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rootReducer\", function() { return rootReducer; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _matrixReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrixReducer */ \"./src/redux/matrixReducer.tsx\");\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  matrix: _matrixReducer__WEBPACK_IMPORTED_MODULE_1__[\"matrixReducer\"]\n});\n\n//# sourceURL=webpack:///./src/redux/rootReducer.tsx?");

/***/ }),

/***/ "./src/redux/types.tsx":
/*!*****************************!*\
  !*** ./src/redux/types.tsx ***!
  \*****************************/
/*! exports provided: ADD_ROW, DELETE_ROW, INCREASE_AMOUNT, MOUSE_OVER_CEIL, MOUSE_OVER_SUM, MOUSE_OUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_ROW\", function() { return ADD_ROW; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DELETE_ROW\", function() { return DELETE_ROW; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INCREASE_AMOUNT\", function() { return INCREASE_AMOUNT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MOUSE_OVER_CEIL\", function() { return MOUSE_OVER_CEIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MOUSE_OVER_SUM\", function() { return MOUSE_OVER_SUM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MOUSE_OUT\", function() { return MOUSE_OUT; });\nconst ADD_ROW = 'ADD_ROW';\nconst DELETE_ROW = 'DELETE_ROW';\nconst INCREASE_AMOUNT = 'INCREASE_AMOUNT';\nconst MOUSE_OVER_CEIL = 'MOUSE_OVER_CEIL';\nconst MOUSE_OVER_SUM = 'MOUSE_OVER_SUM';\nconst MOUSE_OUT = 'MOUSE_OUT';\n\n//# sourceURL=webpack:///./src/redux/types.tsx?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "@babel/register":
/*!**********************************!*\
  !*** external "@babel/register" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/register\");\n\n//# sourceURL=webpack:///external_%22@babel/register%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "ignore-styles":
/*!********************************!*\
  !*** external "ignore-styles" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ignore-styles\");\n\n//# sourceURL=webpack:///external_%22ignore-styles%22?");

/***/ }),

/***/ "md5-file":
/*!***************************!*\
  !*** external "md5-file" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"md5-file\");\n\n//# sourceURL=webpack:///external_%22md5-file%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-frontload":
/*!**********************************!*\
  !*** external "react-frontload" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-frontload\");\n\n//# sourceURL=webpack:///external_%22react-frontload%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-loadable\");\n\n//# sourceURL=webpack:///external_%22react-loadable%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ })

/******/ });