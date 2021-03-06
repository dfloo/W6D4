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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(nodes){\n    this.nodes = nodes;\n  }\n  \n  html(string){\n    if (string === undefined) return this.nodes[0].innerHTML;\n    \n    for (var i = 0; i < this.nodes.length; i++) {\n      this.nodes[i].innerHTML = string;\n    }\n  }\n  \n  empty(){\n    this.html('');\n  }\n  \n  append(...args){\n    for (var i = 0; i < this.nodes.length; i++) {\n      for (var j = 0; j < args.length; j++) {\n        this.nodes[i].innerHTML += args[j];\n      }\n    }\n  }\n  \n  attr(attrName, attrValue){\n    for (var i = 0; i < this.nodes.length; i++) {\n      if (attrValue === undefined) { \n        return this.nodes[i].className;\n      } else {\n        this.nodes[i].className = attrValue;\n        return this.nodes[i];\n      }\n    }\n  }\n  \n  addClass(className) {\n    for (var i = 0; i < this.nodes.length; i++) {\n      if (this.nodes[i].className === \"\") {\n        this.nodes[i].className = className;\n      } else {\n        this.nodes[i].className += (' ' + className);\n        return this.nodes[i];\n      }\n    }\n  }\n  \n  removeClass(removeName) {\n    for (var i = 0; i < this.nodes.length; i++) {\n      if (removeName === undefined) {\n        this.nodes[i].className = '';\n        return this.nodes[i];\n      } else {\n        let classNameStr = this.nodes[i].className;\n        const classNameArr = classNameStr.split(' ');\n        classNameArr.splice(classNameArr.indexOf(removeName), 1);\n        classNameStr = classNameArr.join(' ');\n        this.nodes[i].className = classNameStr;\n        return this.nodes[i];\n      }\n    }\n  }\n  \n  children() {\n    for (var i = 0; i < this.nodes.length; i++) {\n      return new DOMNodeCollection(this.nodes[i].children);\n    }\n  }\n  \n  parent() {\n    for (var i = 0; i < this.nodes.length; i++) {\n      return new DOMNodeCollection(this.nodes[i].parentNode);\n    }\n  }\n  \n  find(el) {\n    for (var i = 0; i < this.nodes.length; i++) {\n      return new DOMNodeCollection(this.nodes[i].querySelectorAll(el));\n    }\n  }\n  \n  remove() {\n    for (var i = 0; i < this.nodes.length; i++) {\n      this.nodes[i].innerHTML = \"\";\n    }\n  }\n  \n  on(eventType, callback){\n    for (var i = 0; i < this.nodes.length; i++) {\n      this.nodes[i].addEventListener(eventType, callback);\n      const eventKey = `jqliteEvents-${eventType}`;\n      if (this.nodes[i][eventKey] === undefined) {\n        this.nodes[i][eventKey] = callback;\n      }\n    }\n  }\n  \n  off(eventType) {\n    for (var i = 0; i < this.nodes.length; i++) {\n      const eventKey = `jqliteEvents-${eventType}`;\n      const callback = this.nodes[i][eventKey];\n      // debugger;\n      console.log(callback);\n      this.nodes[i].removeEventListener(eventType, callback);\n      // const eventKey = `jqliteEvents-${eventType}`;\n      // this.nodes[i][eventKey] = undefined;\n    }\n  }\n  \n  \n}\n\n\n\nmodule.exports = DOMNodeCollection;\n\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__ (/*! ./dom_node_collection.js */ \"./lib/dom_node_collection.js\");\n\n\nwindow.$l = (el) => {\n  \n  switch (typeof el) {\n    case \"string\":\n      const nodeList = document.querySelectorAll(el);\n      return new DOMNodeCollection(Array.from(nodeList));\n    case \"object\":\n      if (el instanceof HTMLElement) {\n        return new DomNodeCollection(Array.from(el));\n      }\n  }\n};\n\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });