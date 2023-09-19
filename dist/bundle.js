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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.box-popup>div {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    box-shadow: 10px 10px 5px #888888;\n    display: none;\n    border-radius: 25px;\n}\n\n\n.modal2 {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 300px;\n    height: 200px;\n    background-color: white;\n    padding: 20px;\n    border: 1px solid black;\n    box-shadow: 10px 10px 5px #888888;\n    display: none;\n}\n\n.form {\n\n\n    padding: 15px;\n    display: grid;\n    justify-items: baseline;\n    align-items: center;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: Arial, sans-serif;\n    background-color: #f1f1f1;\n}\n\n.sidebar {\n    background-color: #333;\n    color: rgb(176, 112, 241);\n    width: 200px;\n    height: 100vh;\n    top: 0;\n    left: -200px;\n    transition: left 0.3s ease;\n    z-index: 0;\n}\n\n.main {\n    display: inline-flex;\n}\n\n.tasks {\n    width: 900px;\n    background-color: rgba(195, 157, 16, 0.766);\n    display: inline;\n\n}\n\n\n.projectInterFace {\n\n    display: revert-layer;\n    flex: 1;\n    margin: 55px;\n    width: 600px;\n    word-wrap: break-word;\n    flex-direction: column;\n    align-content: space-evenly;\n    font-size: 20px;\n}\n\n\n.sidebar.open {\n    left: 0;\n}\n\n.sidebar ul {\n    list-style-type: none;\n    padding: 20px;\n    margin-top: 50px;\n\n}\n\n.sidebar li {\n\n    font-size: 30px;\n    font-size: 30px;\n    padding-top: 20px;\n    padding-left: 10px;\n    word-wrap: anywhere;\n    display: flex;\n    justify-content: space-between;\n    margin-left: auto;\n    align-items: center;\n}\n\n.sidebar a {\n    color: #fff;\n    text-decoration: none;\n    display: block;\n    font-size: 18px;\n}\n\n.content {\n    padding: 20px;\n    margin-left: 200px;\n    transition: margin-left 0.3s ease;\n}\n\n.open .content {\n    margin-left: 0;\n}\n\n@media screen and (max-width: 768px) {\n    .sidebar {\n        left: -100%;\n    }\n\n    .open .sidebar {\n        left: 0;\n    }\n\n    .content {\n        margin-left: 0;\n    }\n}\n\n.project {\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.project:hover .delete,\n.edit {\n    display: flex;\n    /* background-color: #dc3545;\n    color: white; */\n}\n\n.project:hover {\n    /* border: 2px solid #dc3545; */\n    color: rgba(195, 157, 16, 0.766)\n}\n\n.project:hover .modify {\n\n    display: flex;\n}\n\n.modify {\n    background-color: transparent;\n    display: none;\n}\n\n.delete {\n    right: -20px;\n    /* transform: translateY(-50%); */\n    background-color: transparent;\n    color: red;\n    display: none;\n    border: none;\n    font-size: 22px;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n\n\n}\n\n.modify {\n    display: none;\n    color: rgb(176, 112, 241);\n}\n\n.edit:hover {\n    display: block;\n    color: rgba(195, 157, 16, 0.766)\n}\n\n.delete:hover {\n    display: block;\n    /* background-color: #c82333; */\n    /* Change color on hover */\n    color: rgba(195, 157, 16, 0.766)\n}\n\n.table {\n    width: 100%;\n    border-collapse: collapse;\n    display: none;\n    border-collapse: collapse;\n}\n\nth,\ntd {\n    border: 1px solid rgba(195, 157, 16, 0.766);\n    padding: 8px;\n    text-align: left;\n}\n\nth {\n    background-color: #f2f2f2;\n}\n\ntr:nth-child(even) {\n    background-color: #f2f2f2;\n}\n\n.add-row-button {\n    display: block;\n    width: 100%;\n    text-align: center;\n    background-color: #4CAF50;\n    color: white;\n    padding: 6px 12px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n\ntable {\n    border-collapse: collapse;\n    width: 100%;\n}\n\nth,\ntd {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even) {\n    background-color: #f2f2f2;\n}\n\n\n.taskTable {\n    width: 100%;\n    border-collapse: collapse;\n    display: none;\n    border-collapse: collapse;\n}\n\n.tbody>tr>td {\n\n    text-decoration: turquoise;\n    font-size: 20px;\n}\n\n.projectDescription {\n    font-size: 20px;\n}\n\n.taskTitle {\n\n    font-size: 20px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/functions/deleteProject.js":
/*!****************************************!*\
  !*** ./src/functions/deleteProject.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ deleteProject)\n/* harmony export */ });\n/* harmony import */ var _storage_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/list */ \"./src/storage/list.js\");\n\nfunction deleteProject(value) {\n\n    const projectIndex = _storage_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findIndex(item => item.modifiedName === value);\n\n    if (projectIndex !== -1) {\n        _storage_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(projectIndex, 1);\n        console.log(`Deleted project with name: ${value}`);\n    } else {\n        console.log(`Project with name: ${value} not found.`);\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/functions/deleteProject.js?");

/***/ }),

/***/ "./src/functions/hidePopUp.js":
/*!************************************!*\
  !*** ./src/functions/hidePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ hidePopUp)\n/* harmony export */ });\nfunction hidePopUp(event) {\n    const nearestParent = event.target.closest('.hide');\n\n    if (nearestParent) {\n        nearestParent.style.display = none;\n    }\n} \n\n//# sourceURL=webpack://todolist/./src/functions/hidePopUp.js?");

/***/ }),

/***/ "./src/functions/loopList.js":
/*!***********************************!*\
  !*** ./src/functions/loopList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createProjectListItem)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project */ \"./src/project.js\");\n/* harmony import */ var _storage_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/list */ \"./src/storage/list.js\");\n\n\n\nfunction createProjectListItem() {\n    const projects = _storage_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map(data => new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data._name, data._description));\n    console.log(_storage_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n    projects.forEach((project) => {\n        project.appendProject();\n        console.log(\"loop works!\")\n    });\n\n\n}\n\n\n//# sourceURL=webpack://todolist/./src/functions/loopList.js?");

/***/ }),

/***/ "./src/functions/popUp.js":
/*!********************************!*\
  !*** ./src/functions/popUp.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ popUp)\n/* harmony export */ });\nfunction popUp() {\n    const projectpopup = document.getElementById(\"project-popup\");\n    projectpopup.style.display = \"flex\"\n}\n\n//# sourceURL=webpack://todolist/./src/functions/popUp.js?");

/***/ }),

/***/ "./src/functions/populateLogTable.js":
/*!*******************************************!*\
  !*** ./src/functions/populateLogTable.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ populateLogTable)\n/* harmony export */ });\n\nfunction populateLogTable(currentTask) {\n    const logTableBody = document.getElementById('logtablebody');\n\n    for (const logEntry of currentTask) {\n        const newRow = logTableBody.insertRow();\n\n        const logCell = newRow.insertCell(0);\n        const dateCell = newRow.insertCell(1);\n\n\n        logCell.textContent = logEntry.LogName;\n        dateCell.textContent = logEntry.timestamp;\n    }\n\n}\n\n//# sourceURL=webpack://todolist/./src/functions/populateLogTable.js?");

/***/ }),

/***/ "./src/functions/populateTable.js":
/*!****************************************!*\
  !*** ./src/functions/populateTable.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ populateTable)\n/* harmony export */ });\nfunction populateTable(tasks) {\n    const tbodyElement = document.querySelector(\".tbody\")\n\n    tbodyElement.innerHTML = \"\";\n\n    tasks.forEach((task, index) => {\n        const row = document.createElement(\"tr\");\n\n        const nameCell = document.createElement(\"td\");\n        nameCell.textContent = task.TaskName;\n        nameCell.dataset.userid = index\n        const descriptionCell = document.createElement(\"td\");\n        descriptionCell.textContent = task.TaskDescription;\n        descriptionCell.dataset.userid = index\n        const checkboxCell = document.createElement(\"td\");\n        const checkbox = document.createElement(\"input\");\n        checkbox.type = \"checkbox\";\n        checkboxCell.appendChild(checkbox);\n        checkboxCell.dataset.userid = index\n\n        checkbox.checked = task.completed;\n        checkbox.addEventListener(\"change\", function () {\n            task.completed = checkbox.checked;\n        });\n\n\n\n\n        row.appendChild(nameCell)\n        row.appendChild(descriptionCell);\n        row.appendChild(checkboxCell);\n\n        tbodyElement.appendChild(row);\n    });\n}\n\n//# sourceURL=webpack://todolist/./src/functions/populateTable.js?");

/***/ }),

/***/ "./src/functions/projectSelect.js":
/*!****************************************!*\
  !*** ./src/functions/projectSelect.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projectSelect)\n/* harmony export */ });\n/* harmony import */ var _storage_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/list */ \"./src/storage/list.js\");\n\nfunction projectSelect(event) {\n\n    let projectSelect = event.target.dataset.userid\n    console.log(projectSelect)\n    const selectedInstance = _storage_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(item => item.modifiedName === projectSelect);\n    return selectedInstance\n\n}\n\n//# sourceURL=webpack://todolist/./src/functions/projectSelect.js?");

/***/ }),

/***/ "./src/functions/taskSelect.js":
/*!*************************************!*\
  !*** ./src/functions/taskSelect.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   taskSelect: () => (/* binding */ taskSelect)\n/* harmony export */ });\nfunction taskSelect(event, value) {\n    let taskSelect = event.target.dataset.userid;\n    // const selectedInstance = value.find(item => item.id === parseInt(taskSelect)); // Make sure to parse taskSelect to an integer if it's a string\n    // console.log(selectedInstance);\n\n    console.log(taskSelect)\n    // return selectedInstance;\n}\n\n\n\n\n//# sourceURL=webpack://todolist/./src/functions/taskSelect.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   eventSelect: () => (/* binding */ eventSelect),\n/* harmony export */   projectList: () => (/* binding */ projectList)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _functions_populateTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/populateTable */ \"./src/functions/populateTable.js\");\n/* harmony import */ var _functions_popUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/popUp */ \"./src/functions/popUp.js\");\n/* harmony import */ var _functions_projectSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/projectSelect */ \"./src/functions/projectSelect.js\");\n/* harmony import */ var _storage_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage/list */ \"./src/storage/list.js\");\n/* harmony import */ var _functions_populateLogTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/populateLogTable */ \"./src/functions/populateLogTable.js\");\n/* harmony import */ var _storage_task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage/task */ \"./src/storage/task.js\");\n/* harmony import */ var _functions_taskSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functions/taskSelect */ \"./src/functions/taskSelect.js\");\n/* harmony import */ var _storage_log__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./storage/log */ \"./src/storage/log.js\");\n/* harmony import */ var _functions_loopList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./functions/loopList */ \"./src/functions/loopList.js\");\n/* harmony import */ var _functions_deleteProject__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./functions/deleteProject */ \"./src/functions/deleteProject.js\");\n/* harmony import */ var _functions_hidePopUp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./functions/hidePopUp */ \"./src/functions/hidePopUp.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst projectForm = document.getElementById('projectForm');\nconst newTask = document.querySelector(\".createNew\");;\nconst projectList = document.querySelector(\".projectList\")\nconst taskbox = document.querySelector(\"#taskTable\")\nconst projectpopup = document.getElementById(\"project-popup\");\nconst projectpopupedit = document.getElementById(\"projectedit-popup\");\nconst editForm = document.getElementById(\"projectedit-popup\");\n\nconst projecteditsubmit = projectpopupedit.querySelector(\"button\")\nconst taskSubmit = document.querySelector(\".taskSubmit\")\nconst form = document.querySelector('.form');\nconst taskpopup = document.getElementById(\"task-popup\")\nconst projectHeader = document.querySelector(\".projectHeader\")\nconst projectDescription = document.querySelector(\".projectDescription\")\nconst taskTable = document.querySelector(\".taskTable\")\nconst logRowButton = document.getElementById(\"addLogButton\");\nconst logPop = document.querySelector(\"#log-popup\")\nconst logSubmit = document.querySelector(\"#logSubmit\");\nconst logTable = document.querySelector('.logTable');\nconst logTableBody = document.getElementById('logtablebody');\nconst taskHeader = document.querySelector(\".taskTitle\")\nconst deleteButton = document.querySelector(\".delete-button\")\n\n\nlet projectListElements = null;\n\nnewTask.addEventListener(\"click\", _functions_popUp__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\nlet eventSelect = null;\nlet newTaskSelect = null;\n\nprojectForm.addEventListener(\"submit\", function (event) {\n    event.preventDefault()\n\n    const nameInput = document.getElementById(\"ProjectName\").value;\n    const descriptionInput = document.getElementById(\"ProjectDescription\").value;\n\n    const newProject = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](nameInput, descriptionInput);\n\n    _storage_list__WEBPACK_IMPORTED_MODULE_5__[\"default\"].push(newProject)\n    //projects[nameInput] = newProject;\n\n    //newProject.appendProject(nameInput);\n    projectForm.reset();\n\n    projectList.innerHTML = \"\";\n    (0,_functions_loopList__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n    projectpopup.style.display = \"none\";\n\n});\n\nprojectList.addEventListener(\"click\", function (event) {\n    if (event.target.classList.contains(\"edit\")) {\n        eventSelect = (0,_functions_projectSelect__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(event)\n        const test = event.target.parentElement.getAttribute('data-userid');\n        console.log(test)\n        eventSelect = (0,_functions_projectSelect__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(event)\n\n\n        editForm.style.display = \"flex\";\n\n        const editButton = document.querySelector(\".edit\");\n\n\n        editButton.addEventListener(\"click\", function () {\n            const userId = projectItem.querySelector('[data-userid]').getAttribute(\"data-userid\");\n            console.log(`Edit button clicked for user with ID: ${userId}`);\n            const projectpopupedit = document.getElementById(\"projectedit-popup\");\n            projectpopupedit.style.display = flex;\n\n        });\n\n\n        console.log(eventSelect)\n    }\n    else if (event.target.classList.contains(\"delete\")) {\n        console.log(\"deleteseen\")\n        eventSelect = (0,_functions_projectSelect__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(event);\n        (0,_functions_deleteProject__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(eventSelect.modifiedName);\n        projectList.innerHTML = \"\";\n        console.log(taskbox)\n        taskbox.style.display = \"none\";\n        (0,_functions_loopList__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n    }\n\n    else {\n        event.preventDefault()\n        eventSelect = (0,_functions_projectSelect__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(event)//rearange select att on html\n        console.log(eventSelect)\n        eventSelect.createTable()\n        //populateTable(eventSelect.tasks)\n        eventSelect.appendTable()\n\n        projectHeader.innerHTML = eventSelect.name;\n        projectDescription.innerHTML = eventSelect.description\n        taskpopup.style.display = \"none\";\n        console.log(eventSelect)\n\n        return eventSelect\n    }\n    logTable.style.display = \"none\"\n\n})\n\ntaskpopup.addEventListener(\"submit\", function (event) {\n    event.preventDefault()\n    const form = taskSubmit.parentElement;\n    //eventSelect = projectSelect(event)\n    newTaskSelect = Object.create(_storage_task__WEBPACK_IMPORTED_MODULE_7__.taskData)\n    newTaskSelect.logs = [];\n    for (const field of form.elements) {\n\n        if (field.name && field.type !== 'submit') {\n            newTaskSelect[field.name] = field.value;\n        }\n    }\n\n    taskpopup.style.display = \"none\";\n    console.log(eventSelect)\n    eventSelect.addTasks(newTaskSelect)\n    ;(0,_functions_populateTable__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(eventSelect.tasks)\n\n\n    return newTaskSelect\n\n});\n\nconst tbody = document.querySelector(\".tbody\");\n\ntbody.addEventListener(\"click\", function (event) {\n    const clickedElement = event.target.dataset.userid;\n    taskHeader.innerHTML = \"\";\n    newTaskSelect = eventSelect.tasks[clickedElement]\n    console.log(newTaskSelect)\n    console.log(clickedElement)\n    taskHeader.innerHTML = newTaskSelect.TaskName\n    logTableBody.innerHTML = '';\n    let currentTask = newTaskSelect.logs\n    ;(0,_functions_populateLogTable__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(currentTask)\n\n    logTable.style.display = \"table\";\n    return newTaskSelect\n\n});\n\nlogRowButton.addEventListener(\"click\", function (event) {\n    event.preventDefault()\n    logPop.style.display = \"flex\"\n\n})\n\nlogPop.addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n    logPop.style.display = \"none\";\n    logTableBody.innerHTML = '';\n    const form = document.getElementById(\"logForm\");\n\n\n    let newLog = {};\n\n    for (const field of form.elements) {\n        if (field.name && field.type !== 'submit') {\n\n            newLog[field.name] = field.value;\n            newLog[\"timestamp\"] = new Date().toISOString();\n\n        }\n    }\n    newTaskSelect.logs.push(newLog);\n    console.log(newTaskSelect);\n\n\n    let currentTask = newTaskSelect.logs\n\n\n    ;(0,_functions_populateLogTable__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(currentTask)\n\n});\n\n\neditForm.addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n    projectList.innerHTML = \"\";\n\n    console.log(eventSelect);\n    const nameInput = document.getElementById(\"editProjectName\").value;\n    const descriptionInput = document.getElementById(\"editProjectDescription\").value;\n    eventSelect.name = nameInput;\n    eventSelect.description = descriptionInput;\n    eventSelect.getModifiedName()\n    const projecteditsubmit = projectpopupedit.querySelector(\"button\")\n\n    editForm.style.display = \"none\"\n    ;(0,_functions_loopList__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n    console.log(eventSelect.modifiedName)\n\n});\n\n\nconst cancelButtons = document.querySelectorAll(\".cancel\");\nconsole.log(cancelButtons)\n\ncancelButtons.forEach((cancelButton) => {\n    cancelButton.addEventListener(\"click\", function () {\n        console.log(\"hy\")\n        const popupBox = cancelButton.parentElement.parentElement;\n        console.log(popupBox)\n        if (popupBox) {\n            popupBox.style.display = \"none\";\n        }\n    });\n});\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ project)\n/* harmony export */ });\n\nclass project {\n    constructor(name, description) {\n        this.name = name;\n        this.description = description;\n        this._tasks = [];\n        this.getModifiedName();\n        this.modifiedName = this.getModifiedName()\n\n    }\n    get name() {\n        return this._name;\n    }\n\n    set name(value) {\n        return this._name = value;\n    }\n\n    get description() {\n        return this._description;\n    }\n\n    set description(value) {\n        return this._description = value;\n    }\n\n    get tasks() {\n        return this._tasks\n    }\n    set tasks(value) {\n        this._tasks = value\n    }\n    addTasks(obj) {\n        this.tasks.push(obj);\n    }\n    getModifiedName() {\n        return this.modifiedName = this.name.replace(/ /g, \"\");\n    }\n\n\n    appendProject = () => {\n        const projectList = document.querySelector(\".projectList\")\n        const form = document.querySelector('.form');\n        const modifiedName = this.name.replace(/ /g, \"\");\n\n\n        const projectItem = document.createElement(\"li\");\n\n        projectItem.classList.add(\"project\");\n        projectItem.dataset.userid = this.name;\n\n        const htmlString = `\n            <div data-userid=\"${this.modifiedName}\">${this.name}</div>\n            <div class=\"modify\" data-userid=\"${this.modifiedName}\">\n                <div class=\"edit\" data-userid=\"${this.modifiedName}\">⚙</div>\n                <button data-userid=\"${this.modifiedName}\"class=\"delete\">🗑</button>\n            </div>\n        `;\n\n        projectItem.innerHTML = htmlString;\n        projectList.appendChild(projectItem)\n\n\n        form.reset();\n\n        return projectItem;\n    }\n\n    appendTable() {\n\n        const tbodyElement = document.querySelector(\".tbody\")\n\n        tbodyElement.innerHTML = \"\";\n\n        this._tasks.forEach((task, index) => {\n            const row = document.createElement(\"tr\");\n\n            const nameCell = document.createElement(\"td\");\n            nameCell.textContent = task.TaskName;\n            nameCell.dataset.userid = index\n            const descriptionCell = document.createElement(\"td\");\n            descriptionCell.textContent = task.TaskDescription;\n            descriptionCell.dataset.userid = index\n            const checkboxCell = document.createElement(\"td\");\n            const checkbox = document.createElement(\"input\");\n            checkbox.type = \"checkbox\";\n            checkboxCell.appendChild(checkbox);\n            checkboxCell.dataset.userid = index\n\n            checkbox.checked = task.completed;\n            checkbox.addEventListener(\"change\", function () {\n                task.completed = checkbox.checked;\n            });\n\n\n\n\n            row.appendChild(nameCell)\n            row.appendChild(descriptionCell);\n            row.appendChild(checkboxCell);\n\n            tbodyElement.appendChild(row);\n        });\n    }\n\n    createTable = () => {\n        console.log(\"testworks!\");\n        const taskSubmit = document.querySelector(\".taskSubmit\")\n\n        taskSubmit.dataset.userid = this.modifiedName;\n\n        const taskpopup = document.getElementById(\"task-popup\")\n        const taskForm = document.getElementById('taskForm');\n        const table = document.querySelector(\".table\")\n\n        const addRowButton = document.querySelector(\".add-row-button\")\n        addRowButton.dataset.userid = this.name;\n\n        table.style.display = \"table\";\n\n\n        addRowButton.addEventListener(\"click\", addRow);\n        function addRow() {\n\n            taskpopup.style.display = \"flex\"\n        }\n\n\n    }\n\n}\n\n//# sourceURL=webpack://todolist/./src/project.js?");

/***/ }),

/***/ "./src/storage/list.js":
/*!*****************************!*\
  !*** ./src/storage/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst list = []\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (list);\n\n//# sourceURL=webpack://todolist/./src/storage/list.js?");

/***/ }),

/***/ "./src/storage/log.js":
/*!****************************!*\
  !*** ./src/storage/log.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   log: () => (/* binding */ log)\n/* harmony export */ });\nconst log = {\n\n\n}\n\n\n//# sourceURL=webpack://todolist/./src/storage/log.js?");

/***/ }),

/***/ "./src/storage/task.js":
/*!*****************************!*\
  !*** ./src/storage/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   taskData: () => (/* binding */ taskData)\n/* harmony export */ });\nconst taskData = {\n    //id: taskIdCounter++,\n    completed: false,\n    // logs: []\n\n};\n\n\n\n//# sourceURL=webpack://todolist/./src/storage/task.js?");

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