/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html,\nbody {\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n}\n\n.container {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n}\n\n.side-bar {\n    width: 20vw;\n    height: 100vh;\n    background-color: #353E98;\n    border: 1px solid;\n    color: white;\n}\n\n.addNewToDo,\n.project {\n    margin: 15px;\n}\n\n#addButton {\n    height: 40px;\n    width: 40px;\n    background-color: #F55028;\n    color: white;\n    font-weight: bold;\n    font-size: medium;\n    align-self: flex-start;\n}\n\n#todo-form {\n    display: none;\n    border: 1px solid #ccc;\n}\n\n#add-todo-button {\n    padding: 8px;\n    background-color: #4caf50;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    font-size: 16px;\n    font-weight: bold;\n}\n\n#description,\n#title\n {\n    width: 100%;\n}\n\n\n\n.project-header {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n}\n\n#add-project {\n    width: 45px;\n    min-width: 45px;\n    height: 45px;\n    font-size: x-large;\n    border-radius: 30px;\n    border: 1px #ccc;\n    background-color: lightgray;\n}\n\n.model-container {\n    padding: 10px;\n    width: 20vw;\n    height: auto;\n    background: #808080;\n    border: 1px black solid;\n    box-shadow: 18px 12px 12px 6px rgba(0, 0, 0, 0.5);\n    position: absolute;\n    float: left;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 10px;\n}\n\n.my-modal {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n#project-list ,\n#add-project-btn {\n    margin-bottom: 10px;\n}\n#project-label {\n    margin-bottom: 5px;\n    display: block;\n\n}\n\n\n#modal_close_button {\n    width: 30px;\n    height: 30px;\n    font-size: medium;\n    border-radius: 30px;\n    border: 1px #ccc;\n    background-color: lightgray;\n}\n\n\n\n.content {\n    width: 80vw;\n    height: 100vh;\n    background-color: white;\n    border: 1px solid;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.to-do-upper {\n    display: flex;\n    padding: 20px;\n    gap: 10px;\n}\n\n.title {\n    background-color: #F4F4F4;\n    color: #A5A9AC;\n    padding: 2px;\n    font-size: 7px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.date {\n    font-size: 10px;\n}\n.todo {\n    display: grid;\n    flex-wrap: wrap;\n    grid-template-columns: repeat(auto-fit, minmax(240px,1fr));\n}\n\n\n.content-container {\n    width: 70vw;\n    background-color: #F2F2F2;\n}\n.content-container h2 {\n    margin-left: 15px;\n    color: #273196;\n}\n\n.project-card{\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    border-radius: 3%;\n}\n.todo-container {\n    margin: 5px 15px 25px 15px;\n    padding: 5px;\n}\n.deleteTodoButton {\n    width: 30px;\n    height: 50px;\n    justify-self: end;\n}\n.deleteTodoButton img {\n    width: 15px;\n}\n.btnDone {\n    background-color: white;\n    border: none;\n}\n\n.upper,\n.lower {\n    display: flex;\n    justify-content: space-between;\n}\n.priority {\n    display: flex;\n    width: 30px;\n    /* background-color: #F25F91; */\n    border-radius: 20%;\n    color: white;\n    padding: 5px;\n    font-size: 10px;\n    align-items: center;\n    justify-content: center;\n}\n#descriptionOne {\n    align-self: center;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectList: () => (/* binding */ projectList),\n/* harmony export */   showTodosInDiv: () => (/* binding */ showTodosInDiv),\n/* harmony export */   todoList: () => (/* binding */ todoList)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\nconst projectList = [\n    // {\n    //     title: \"Home\"\n    // },\n    // {\n    //     title: \"Work\"\n    // },\n    // {\n    //     title: \"School\"\n    // }\n]// [{\"title_Project\":\"Home\"},{\"title_Project\":\"Work\"},{\"title_Project\":\"Gym\"},{\"title_Project\":\"Car\"}]\n// [{\"title\":\"Dishes\",\"description\":\"Washing the Dishes\",\"duedate\":\"2024-04-03T00:00:00.000Z\",\"priority\":\"High\",\"project_Todo\":\"Home\"},{\"title\":\"Job Applications\",\"description\":\"Apply applications\",\"duedate\":\"2024-06-01T00:00:00.000Z\",\"priority\":\"Medium\",\"project_Todo\":\"Work\"},{\"title\":\"Title\",\"description\":\"Renew the title\",\"duedate\":\"2024-06-03T00:00:00.000Z\",\"priority\":\"High\",\"project_Todo\":\"Car\"},{\"title\":\"Gym\",\"description\":\"Go gym everyday\",\"duedate\":\"2024-04-03T00:00:00.000Z\",\"priority\":\"High\",\"project_Todo\":\"Gym\"}]\nconst todoList = [\n    // {\n    //     title: \"Dishes\",\n    //     description: \"Washing the Dishes\",\n    //     duedate: new Date(2023, 2, 14), // March 14, 2023\n    //     project: \"Home\",\n    //     priority: \"Low\"\n    // },\n    // {\n    //     title: \"Laundry\",\n    //     description: \"Doing the Laundry\",\n    //     duedate: new Date(2023, 2, 15),\n    //     project: \"Home\",\n    //     priority: \"High\"\n    // },\n    // {\n    //     title: \"Grocery Shopping\",\n    //     description: \"Buy groceries for the week\",\n    //     duedate: new Date(2023, 2, 16),\n    //     project: \"Home\",\n    //     priority: \"Medium\"\n    // },\n    // {\n    //     title: \"Exercise\",\n    //     description: \"Go for a run or visit the gym\",\n    //     duedate: new Date(2023, 2, 17),\n    //     project: \"Home\",\n    //     priority: \"Low\"\n    // }\n]\n\n\n\nfunction showTodosInDiv() {\n    const container = document.querySelector(\".todo\");\n    container.innerHTML = \"\";\n    container.classList.add(\"todo-container\")\n    todoList.forEach((todo , index) => {\n        const projectCard = document.createElement(\"div\");\n        projectCard.classList.add(\"project-card\");\n\n        const buttonDone = document.createElement(\"button\")\n        buttonDone.classList.add(\"btnDone\");\n        buttonDone.setAttribute(\"data-id\", index);\n\n        const upperDiv = document.createElement(\"div\");\n        upperDiv.classList.add(\"upper\");\n\n        const titleDiv = document.createElement(\"div\");\n        titleDiv.classList.add(\"title\");\n        titleDiv.textContent = todo.title;\n\n        const dateDiv = document.createElement(\"div\");\n        dateDiv.classList.add(\"date\");\n        dateDiv.textContent = todo.duedate.toLocaleDateString('en-US', {\n            month: 'long',\n            day: 'numeric',\n            year: 'numeric'\n        });        \n\n        upperDiv.appendChild(titleDiv);\n        upperDiv.appendChild(dateDiv);\n\n        const descriptionDiv = document.createElement(\"div\");\n        descriptionDiv.classList.add(\"description\");\n        descriptionDiv.textContent = todo.description;\n\n        const lowerDiv = document.createElement(\"div\");\n        lowerDiv.classList.add(\"lower\");\n\n        const priorityDiv = document.createElement(\"div\");\n        priorityDiv.classList.add(\"priority\");\n        if (todo.priority == \"High\") {\n            priorityDiv.textContent = todo.priority;\n            priorityDiv.style.backgroundColor = \"#F25F91\"\n        } else if (todo.priority == \"Medium\") {\n            priorityDiv.textContent = todo.priority;\n            priorityDiv.style.backgroundColor = \"#3CA3F8\"\n        } else if (todo.priority == \"Low\") {\n            priorityDiv.textContent = todo.priority;\n            priorityDiv.style.backgroundColor = \"#42C3B6\"\n        }\n\n\n        const projectDiv = document.createElement(\"div\");\n        projectDiv.classList.add(\"projectName\");\n        projectDiv.textContent = todo.project_Todo;\n\n        const deleteTodoButton = document.createElement(\"button\")\n        deleteTodoButton.classList.add(\"deleteTodoButton\")\n        const img = document.createElement(\"img\")\n        img.src = \"./trash-solid.svg\";\n\n\n        deleteTodoButton.append(img)\n        lowerDiv.appendChild(priorityDiv);\n        lowerDiv.appendChild(projectDiv);\n        buttonDone.appendChild(upperDiv);\n        buttonDone.appendChild(descriptionDiv);\n        buttonDone.appendChild(lowerDiv);\n        projectCard.append(buttonDone)\n\n        container.appendChild(deleteTodoButton);\n        container.appendChild(projectCard);\n        \n        \n    });\n}\n\n\n\n\n\n//# sourceURL=webpack://project-todo-list/./src/content.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.js */ \"./src/sidebar.js\");\n/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.js */ \"./src/content.js\");\n\n\n\n\n\n\nconst showFormButton = document.getElementById(\"addButton\");\nshowFormButton.addEventListener('click', _sidebar_js__WEBPACK_IMPORTED_MODULE_1__.toggleFormVisibility);\n\nconst showModalButton = document.getElementById(\"add-project\");\nshowModalButton.addEventListener('click', _sidebar_js__WEBPACK_IMPORTED_MODULE_1__.toggleModalVisibility)\n\nconst modalCloseButton = document.getElementById(\"modal_close_button\");\nmodalCloseButton.addEventListener('click', _sidebar_js__WEBPACK_IMPORTED_MODULE_1__.modalClose)\n\n\nlet projectKey = `Project List` // from localstorage to project list with DOM \nlet newLocalStorage = localStorage.getItem(projectKey)\nif (newLocalStorage) {\n    let newLocalStorage2 = JSON.parse(newLocalStorage)\n    _content_js__WEBPACK_IMPORTED_MODULE_2__.projectList.push(...newLocalStorage2)\n}\n\nconst selectElement = document.getElementById(\"project\") // Project List data list in the Todo Form as options \n_content_js__WEBPACK_IMPORTED_MODULE_2__.projectList.forEach(project => {\n    const option = document.createElement(\"option\")\n    option.textContent = project.title_Project;\n    selectElement.appendChild(option)\n})\n\nconst addProjectForm = document.getElementById(\"add-project-list\")\naddProjectForm.addEventListener('submit', _sidebar_js__WEBPACK_IMPORTED_MODULE_1__.onProjectSubmitForm)\n\nconst addTodoForm = document.getElementById(\"todo-form\");\naddTodoForm.addEventListener('submit', _sidebar_js__WEBPACK_IMPORTED_MODULE_1__.onToDoSubmitButton);\n\nlet todoKey = 'Todo List' // from localstorage to todo list with DOM \nlet todoLocalStorage = localStorage.getItem(todoKey)\nif (todoLocalStorage) {\n    let tempTodoLocalStorage = JSON.parse(todoLocalStorage)\n    tempTodoLocalStorage.forEach(todo => {\n        todo.duedate = new Date(todo.duedate);\n    });\n\n    _content_js__WEBPACK_IMPORTED_MODULE_2__.todoList.push(...tempTodoLocalStorage)\n}\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const container = document.querySelector(\".todo\");\n\n    container.addEventListener('click', (event) => { // When the button is clicked, the text is linethrough.\n        const buttonDone = event.target.closest('.btnDone');\n        if (buttonDone) {\n            const index = buttonDone.getAttribute('data-id');\n            let selected = localStorage.getItem(`selected_${index}`) === 'true';\n            selected = !selected;\n            updateTextDecoration(buttonDone, selected);\n            localStorage.setItem(`selected_${index}`, selected.toString());// The selected items are saved to local storage.\n        }\n    });\n    for (let i = 0; i < _content_js__WEBPACK_IMPORTED_MODULE_2__.todoList.length; i++) {\n        const isSelected = localStorage.getItem(`selected_${i}`) === 'true';\n        const buttonDone = container.querySelector(`[data-id=\"${i}\"]`);\n        if (isSelected) {\n            updateTextDecoration(buttonDone, true);\n        }\n    }\n    function updateTextDecoration(buttonDone, selected) {\n        const projectCard = buttonDone.closest('.project-card');\n        if (selected) {\n            projectCard.style.textDecoration = 'line-through';\n        } else {\n            projectCard.style.textDecoration = 'none';\n        }\n    }\n\n});\nfunction deleteToDo() {\n    const deleteToDos = document.querySelectorAll(\".deleteTodoButton\"); \n    deleteToDos.forEach((button) => {\n        button.addEventListener('click', (event) => {\n            const index = event.currentTarget.getAttribute(\"data-id\")  \n            _content_js__WEBPACK_IMPORTED_MODULE_2__.todoList.splice(index, 1)\n            localStorage.setItem('Todo List', JSON.stringify(_content_js__WEBPACK_IMPORTED_MODULE_2__.todoList));\n            \n            (0,_content_js__WEBPACK_IMPORTED_MODULE_2__.showTodosInDiv)();\n            console.log(_content_js__WEBPACK_IMPORTED_MODULE_2__.todoList)\n        })\n    })\n}\n\ndocument.addEventListener('DOMContentLoaded', deleteToDo);\nconsole.log(_content_js__WEBPACK_IMPORTED_MODULE_2__.todoList)\n\n\n\n\n\n\n;(0,_content_js__WEBPACK_IMPORTED_MODULE_2__.showTodosInDiv)();\n(0,_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.showProjectsInDiv)();\n\n\n//# sourceURL=webpack://project-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modalClose: () => (/* binding */ modalClose),\n/* harmony export */   onProjectSubmitForm: () => (/* binding */ onProjectSubmitForm),\n/* harmony export */   onToDoSubmitButton: () => (/* binding */ onToDoSubmitButton),\n/* harmony export */   showProjectsInDiv: () => (/* binding */ showProjectsInDiv),\n/* harmony export */   toggleFormVisibility: () => (/* binding */ toggleFormVisibility),\n/* harmony export */   toggleModalVisibility: () => (/* binding */ toggleModalVisibility)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.js */ \"./src/content.js\");\n\n\n\nlet formVisible = false;\nfunction toggleFormVisibility() {\n\n    const form = document.getElementById(\"todo-form\");\n    if (!formVisible) {\n        form.style.display = \"block\";\n        formVisible = true;\n    } else {\n        formVisible = false;\n        form.style.display = \"none\";\n    }\n}\n\nlet modalVisible = false;\nconst modal = document.querySelector(\".model-container\")\nfunction toggleModalVisibility() {\n    if (!modalVisible) {\n        modal.style.display = \"block\"\n        modalVisible = true;\n    }\n}\n\nfunction modalClose() {\n    if (modalVisible) {\n        modal.style.display = \"none\";\n        modalVisible = false;\n    }\n}\nconst projectForm = document.getElementById(\"add-project-list\")\nfunction onProjectSubmitForm(event) {\n    event.preventDefault();\n    const fd = new FormData(projectForm);\n    const obj = Object.fromEntries(fd)\n\n    const newProject = {\n        title_Project: obj.project_list\n    };\n\n\n    let projectKey = `Project List`\n    // console.log(\"Project Key:\", projectKey)\n    _content_js__WEBPACK_IMPORTED_MODULE_1__.projectList.push(newProject)\n    const newLocalStorage = JSON.stringify(_content_js__WEBPACK_IMPORTED_MODULE_1__.projectList)\n    localStorage.setItem(projectKey, newLocalStorage)\n    showProjectsInDiv()\n    location.reload();\n}\n\nfunction showProjectsInDiv() {\n    const projectUl = document.createElement('ul')\n    const project_container = document.getElementById(\"projects_content\");\n    project_container.innerHTML = '';\n    _content_js__WEBPACK_IMPORTED_MODULE_1__.projectList.forEach(project => {\n        const projectLi = document.createElement(\"li\")\n        projectLi.textContent = project.title_Project\n        projectUl.append(projectLi)\n        project_container.append(projectUl)\n    })\n}\nconst todoForm = document.getElementById(\"todo-form\");\nfunction onToDoSubmitButton(event) {\n    event.preventDefault()\n\n    let titleTodo = document.getElementById(\"title\").value\n    let descTodo = document.getElementById(\"description\").value\n    let duedateTodo = new Date(document.getElementById(\"dueDate\").value)\n    let priorityTodo = document.getElementById(\"priority\").value\n    let projectTodo = document.getElementById(\"project\").value\n    \n    const tempTodoForm = {\n        title: titleTodo,\n        description: descTodo,\n        duedate: duedateTodo,\n        priority: priorityTodo,\n        project_Todo: projectTodo\n    }\n    let todoKey = 'Todo List'\n    _content_js__WEBPACK_IMPORTED_MODULE_1__.todoList.push(tempTodoForm)\n    const todoLocalStorage = JSON.stringify(_content_js__WEBPACK_IMPORTED_MODULE_1__.todoList)\n    localStorage.setItem(todoKey, todoLocalStorage)\n    ;(0,_content_js__WEBPACK_IMPORTED_MODULE_1__.showTodosInDiv)();\n    location.reload();\n    console.log(_content_js__WEBPACK_IMPORTED_MODULE_1__.todoList)\n}\n\n\n\n//# sourceURL=webpack://project-todo-list/./src/sidebar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;