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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body{\\n    margin: 0;\\n    padding: 0;\\n    background-image: linear-gradient( #ff0000, #000);\\n}\\nnav{\\n    background-image: linear-gradient( #ff0000, #000);\\n    box-shadow: 0 8px 6px -6px black;\\n    height: 50px;\\n    width: 100%;\\n}\\n.navWrap{\\n   display: flex;\\n}\\n.logoWrap{\\n    height: 50px;\\n    width: 20%;\\n}\\n\\n.linkWrap{\\n    align-items: center;\\n    display: flex;\\n    height: 50px;\\n    justify-content: space-around;\\n    margin-left: auto;\\n    width: 70%;\\n}\\n.logo{\\n    color: #fff;\\n    float: right;\\n    font-family: monospace;\\n    font-size: 35px;\\n    font-weight: 700;\\n    padding: 5px 30px;\\n    text-shadow: 1px 1px black;\\n}\\n.logo:hover{\\n    color: #ffffffd8;\\n}\\na{\\n    color: #fff;\\n    text-decoration: none;\\n}\\na:hover{\\n    color: #ffffffd8;\\n}\\n/* container  */\\n.container{\\n    /* background-image: url(./component/images/cleaning-restaurant-kitchen.jpg); */\\n    background-size: cover;\\n    background-repeat: no-repeat;\\n    height: 500px;\\n}\\n.nextAndPrev{\\n\\tdisplay: flex;\\n\\tjustify-content: space-between;\\n}\\n\\n.next{\\n  border-top: 20px solid transparent;\\n  border-right: 30px solid #fff;\\n\\tborder-bottom: 20px solid transparent;\\n\\tmargin-top: 220px;\\n\\theight: 0;\\n\\tpadding-left: 100px;\\n\\twidth: 0;\\n\\tz-index: 3;\\n}\\n.next:hover{\\n\\tborder-right: 30px solid #dddcdc;\\n}\\n.prev{\\n  border-top: 20px solid transparent;\\n  border-left: 30px solid #fff;\\n\\tborder-bottom: 20px solid transparent;\\n\\tmargin-top: 220px;\\n\\theight: 0;\\n\\tpadding-right: 100px;\\n\\twidth: 0;\\n  z-index: 3;\\t\\n}\\n.prev:hover{\\n\\tborder-left: 30px solid #dddcdc;\\n}\\n.welcome{\\n    border-radius: 50%;\\n    height: 250px;\\n    position: absolute;\\n    top: 320px;\\n    left: 70%;\\n    width: 250px;\\n}\\n/* // welcome photo */\\n.imgFluid{\\n    border:10px solid #fff;\\n    border-radius: 100%;\\n    width: 100%;\\n    z-index: 2;\\n}\\n.bottom{\\n    color: #fff;\\n    font-size: 40px;\\n    font-weight: bolder;\\n    left: 200px;\\n    position: absolute;\\n    top: 540px;\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/component/gifs/vapourtea.gif":
/*!******************************************!*\
  !*** ./src/component/gifs/vapourtea.gif ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"17f11cabb4ddfa0b45e39771b95a9add.gif\";\n\n//# sourceURL=webpack:///./src/component/gifs/vapourtea.gif?");

/***/ }),

/***/ "./src/component/homepage.js":
/*!***********************************!*\
  !*** ./src/component/homepage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return main; });\n/* harmony import */ var _gifs_vapourtea_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gifs/vapourtea.gif */ \"./src/component/gifs/vapourtea.gif\");\n/* harmony import */ var _gifs_vapourtea_gif__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gifs_vapourtea_gif__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_classic_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/classic.jpg */ \"./src/component/images/classic.jpg\");\n/* harmony import */ var _images_classic_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_classic_jpg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_desert_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/desert.jpg */ \"./src/component/images/desert.jpg\");\n/* harmony import */ var _images_desert_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_desert_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_drinks_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/drinks.jpg */ \"./src/component/images/drinks.jpg\");\n/* harmony import */ var _images_drinks_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_drinks_jpg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_meal_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/meal.jpg */ \"./src/component/images/meal.jpg\");\n/* harmony import */ var _images_meal_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_meal_jpg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _images_sandwich_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/sandwich.jpg */ \"./src/component/images/sandwich.jpg\");\n/* harmony import */ var _images_sandwich_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_sandwich_jpg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _images_cleaning_restaurant_kitchen_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/cleaning-restaurant-kitchen.jpg */ \"./src/component/images/cleaning-restaurant-kitchen.jpg\");\n/* harmony import */ var _images_cleaning_restaurant_kitchen_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_cleaning_restaurant_kitchen_jpg__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nlet images = [_images_cleaning_restaurant_kitchen_jpg__WEBPACK_IMPORTED_MODULE_6___default.a, _images_classic_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _images_desert_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _images_drinks_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, _images_meal_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _images_sandwich_jpg__WEBPACK_IMPORTED_MODULE_5___default.a]\n\nconst main = () => {\n\tlet container = document.createElement('div');\n\tcontainer.classList.add('container');\n\tcontainer.style.backgroundImage = _images_cleaning_restaurant_kitchen_jpg__WEBPACK_IMPORTED_MODULE_6___default.a;\n\n\tlet welcome = document.createElement('div');\n\twelcome.classList.add('welcome');\n\tcontainer.appendChild(welcome);\n\n\tconst welcomePhoto = new Image();\n\twelcomePhoto.classList.add('imgFluid');\n\twelcomePhoto.src = _gifs_vapourtea_gif__WEBPACK_IMPORTED_MODULE_0___default.a;\n\twelcome.appendChild(welcomePhoto);\n\n\tconst bottom = document.createElement('h3');\n\tbottom.innerHTML = \"Eat good, Eat healthy !!!\"\n\tcontainer.appendChild(bottom);\n\tbottom.classList.add('bottom');\n\n\tlet nextAndPrev = document.createElement('div');\n\tcontainer.appendChild(nextAndPrev);\n\tnextAndPrev.classList.add('nextAndPrev');\n\tlet prevPhoto = document.createElement('a');\n\tprevPhoto.classList.add('prev');\n\tlet nextPhoto = document.createElement('a');\n\tnextPhoto.classList.add('next');\n\tnextAndPrev.appendChild(nextPhoto);\n\tnextAndPrev.appendChild(prevPhoto);\n\n\treturn container\n}\ndocument.body.appendChild(main())\n\n\n//# sourceURL=webpack:///./src/component/homepage.js?");

/***/ }),

/***/ "./src/component/images/classic.jpg":
/*!******************************************!*\
  !*** ./src/component/images/classic.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"3f7d3abc5e680dc36e0727d30b20f2d4.jpg\";\n\n//# sourceURL=webpack:///./src/component/images/classic.jpg?");

/***/ }),

/***/ "./src/component/images/cleaning-restaurant-kitchen.jpg":
/*!**************************************************************!*\
  !*** ./src/component/images/cleaning-restaurant-kitchen.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"8c13d26c956538aa2ec78ecc7d510670.jpg\";\n\n//# sourceURL=webpack:///./src/component/images/cleaning-restaurant-kitchen.jpg?");

/***/ }),

/***/ "./src/component/images/desert.jpg":
/*!*****************************************!*\
  !*** ./src/component/images/desert.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"9d5a8993281bb942c8d5e51b35339c17.jpg\";\n\n//# sourceURL=webpack:///./src/component/images/desert.jpg?");

/***/ }),

/***/ "./src/component/images/drinks.jpg":
/*!*****************************************!*\
  !*** ./src/component/images/drinks.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ccb9e7f7c579f71f9b309a35385f1d08.jpg\";\n\n//# sourceURL=webpack:///./src/component/images/drinks.jpg?");

/***/ }),

/***/ "./src/component/images/meal.jpg":
/*!***************************************!*\
  !*** ./src/component/images/meal.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fb8304542dbe91b8a3ec45edcf084208.jpg\";\n\n//# sourceURL=webpack:///./src/component/images/meal.jpg?");

/***/ }),

/***/ "./src/component/images/sandwich.jpg":
/*!*******************************************!*\
  !*** ./src/component/images/sandwich.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ac018fbe8ec5bd4b98bf090db1a113ef.jpg\";\n\n//# sourceURL=webpack:///./src/component/images/sandwich.jpg?");

/***/ }),

/***/ "./src/component/navigation.js":
/*!*************************************!*\
  !*** ./src/component/navigation.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return navigation; });\nconst navigation = () => {\n\tlet navbar = document.createElement('nav');\n\tlet navWrap = document.createElement('div');\n\tnavWrap.classList.add('navWrap');\n\tnavbar.appendChild(navWrap);\n\n\tlet logoWrap = document.createElement('div');\n\tlet linkWrap = document.createElement('div');\n\tlogoWrap.classList.add('logoWrap');\n\tlinkWrap.classList.add('linkWrap');\n\tnavWrap.appendChild(logoWrap);\n\tnavWrap.appendChild(linkWrap);\n\t// create logo for navbar\n\tlet logo = document.createElement('a');\n\tlogo.classList.add('logo');\n\tlogoWrap.appendChild(logo);\n\tlogo.innerHTML = \"Linda\"\n\t// create links for navbar\n\tlet navLinkOne = document.createElement('span');\n\tlet navAnchorOne = document.createElement('a');\n\tnavLinkOne.appendChild(navAnchorOne);\n\tlinkWrap.appendChild(navLinkOne);\n\tnavAnchorOne.innerHTML = 'Chicken'\n\tnavAnchorOne.href = \"#\"\n\n\tlet navLinkTwo = document.createElement('span');\n\tlet navAnchorTwo = document.createElement('a');\n\tnavLinkTwo.appendChild(navAnchorTwo);\n\tlinkWrap.appendChild(navLinkTwo);\n\tnavAnchorTwo.innerHTML = 'Sandwich'\n\tnavAnchorTwo.href = \"#\"\n\n\tlet navLinkThree = document.createElement('span');\n\tlet navAnchorThree = document.createElement('a');\n\tnavLinkThree.appendChild(navAnchorThree);\n\tlinkWrap.appendChild(navLinkThree);\n\tnavAnchorThree.innerHTML = 'Meal';\n\tnavAnchorThree.href = \"#\";\n\n\tlet navLinkFour = document.createElement('span');\n\tlet navAnchorFour = document.createElement('a');\n\tnavLinkFour.appendChild(navAnchorFour);\n\tlinkWrap.appendChild(navLinkFour);\n\tnavAnchorFour.innerHTML = '$5 fill ups';\n\tnavAnchorFour.href = \"#\";\n\n\tlet navLinkFive = document.createElement('span');\n\tlet navAnchorFive = document.createElement('a');\n\tnavLinkFive.appendChild(navAnchorFive);\n\tlinkWrap.appendChild(navLinkFive);\n\tnavAnchorFive.href = \"#\";\n\tnavAnchorFive.innerHTML = 'Sides';\n\n\tlet navLinkSix = document.createElement('span');\n\tlet navAnchorSix = document.createElement('a');\n\tnavLinkSix.appendChild(navAnchorSix);\n\tlinkWrap.appendChild(navLinkSix);\n\tnavAnchorSix.href = \"#\";\n\tnavAnchorSix.innerHTML = 'Classic';\n\n\tlet navLinkSeven = document.createElement('span');\n\tlet navAnchorSeven = document.createElement('a');\n\tnavLinkSeven.appendChild(navAnchorSeven);\n\tlinkWrap.appendChild(navLinkSeven);\n\tnavAnchorSeven.href = \"#\";\n\tnavAnchorSeven.innerHTML = 'Dessert';\n\n\tlet navLinkEight = document.createElement('span');\n\tlet navAnchorEight = document.createElement('a');\n\tnavLinkEight.appendChild(navAnchorEight);\n\tlinkWrap.appendChild(navLinkEight);\n\tnavAnchorEight.href = \"#\";\n\tnavAnchorEight.innerHTML = 'Drinks';\n\n\tlet navLinkNine = document.createElement('span');\n\tlet navAnchorNine = document.createElement('a');\n\tnavLinkNine.appendChild(navAnchorNine);\n\tlinkWrap.appendChild(navLinkNine);\n\tnavAnchorNine.href = \"#\";\n\tnavAnchorNine.innerHTML = 'Sauce';\n\n\treturn navbar\n}\ndocument.body.appendChild(navigation())\n\n\n//# sourceURL=webpack:///./src/component/navigation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_navigation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/navigation.js */ \"./src/component/navigation.js\");\n/* harmony import */ var _component_homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/homepage.js */ \"./src/component/homepage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\n// import 'lodash';\n\n\n\n\n\nObject(_component_navigation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nObject(_component_homepage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });