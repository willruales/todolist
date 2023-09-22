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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.box-popup>div {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background-color: white;\r\n    box-shadow: 10px 10px 5px #888888;\r\n    display: none;\r\n    border-radius: 25px;\r\n}\r\n\r\n\r\n.modal2 {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 300px;\r\n    height: 200px;\r\n    background-color: white;\r\n    padding: 20px;\r\n    border: 1px solid black;\r\n    box-shadow: 10px 10px 5px #888888;\r\n    display: none;\r\n}\r\n\r\n.form {\r\n\r\n\r\n    padding: 15px;\r\n    display: grid;\r\n    justify-items: baseline;\r\n    align-items: center;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: Arial, sans-serif;\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n.sidebar {\r\n    background-color: #333;\r\n    color: rgb(176, 112, 241);\r\n    width: 200px;\r\n    height: 100vh;\r\n    top: 0;\r\n    left: -200px;\r\n    transition: left 0.3s ease;\r\n    z-index: 0;\r\n}\r\n\r\n.main {\r\n    display: inline-flex;\r\n}\r\n\r\n.tasks {\r\n    width: 900px;\r\n    background-color: rgba(182, 225, 214, 0.766);\r\n    display: inline;\r\n\r\n}\r\n\r\n\r\n.projectInterFace {\r\n\r\n    display: revert-layer;\r\n    flex: 1;\r\n    margin: 55px;\r\n    width: 600px;\r\n    word-wrap: break-word;\r\n    flex-direction: column;\r\n    align-content: space-evenly;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n.sidebar.open {\r\n    left: 0;\r\n}\r\n\r\n.sidebar ul {\r\n    list-style-type: none;\r\n    padding: 20px;\r\n    margin-top: 50px;\r\n\r\n}\r\n\r\n.sidebar li {\r\n\r\n    font-size: 30px;\r\n    height: 30px;\r\n    padding-left: 10px;\r\n    word-wrap: anywhere;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-left: auto;\r\n    align-items: center;\r\n}\r\n\r\n.sidebar a {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    display: block;\r\n    font-size: 18px;\r\n}\r\n\r\n.content {\r\n    padding: 20px;\r\n    margin-left: 200px;\r\n    transition: margin-left 0.3s ease;\r\n}\r\n\r\n.open .content {\r\n    margin-left: 0;\r\n}\r\n\r\n\r\n\r\n\r\n.sidebar {\r\n    left: -100%;\r\n}\r\n\r\n.open .sidebar {\r\n    left: 0;\r\n}\r\n\r\n.content {\r\n    margin-left: 0;\r\n}\r\n\r\n\r\n.project {\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.project:hover .delete,\r\n.edit {\r\n    display: flex;\r\n    /* background-color: #dc3545;\r\n    color: white; */\r\n    align-items: center;\r\n}\r\n\r\n.project:hover {\r\n    /* border: 2px solid #dc3545; */\r\n    color: rgba(195, 157, 16, 0.766)\r\n}\r\n\r\n.project:hover .modify {\r\n\r\n    display: inline-flex;\r\n}\r\n\r\n.modify {\r\n    background-color: transparent;\r\n    display: none;\r\n}\r\n\r\n.delete {\r\n    right: -20px;\r\n    /* transform: translateY(-50%); */\r\n    background-color: transparent;\r\n    color: red;\r\n    display: none;\r\n    border: none;\r\n    font-size: 22px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s ease;\r\n\r\n\r\n}\r\n\r\n.modify {\r\n    display: none;\r\n    color: rgb(176, 112, 241);\r\n}\r\n\r\n.edit:hover {\r\n    display: block;\r\n    color: rgba(25, 195, 16, 0.766)\r\n}\r\n\r\n.delete:hover {\r\n    display: block;\r\n    /* background-color: #c82333; */\r\n    /* Change color on hover */\r\n    color: rgba(195, 157, 16, 0.766)\r\n}\r\n\r\n.table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n    display: none;\r\n    border-collapse: collapse;\r\n}\r\n\r\nth,\r\ntd {\r\n    border: 1px solid rgba(195, 157, 16, 0.766);\r\n    padding: 8px;\r\n    text-align: left;\r\n}\r\n\r\nth {\r\n    background-color: #f2f2f2;\r\n}\r\n\r\n/* tr:nth-child(even) {\r\n    background-color: #f2f2f2;\r\n} */\r\n\r\n.add-row-button {\r\n    display: block;\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 6px 12px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\nth,\r\ntd {\r\n    border: 1px solid #dddddd;\r\n    text-align: left;\r\n    padding: 8px;\r\n}\r\n\r\n.taskTable {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n    display: none;\r\n    border-collapse: collapse;\r\n}\r\n\r\n.tbody>tr>td {\r\n\r\n    text-decoration: turquoise;\r\n    font-size: 20px;\r\n}\r\n\r\n.projectDescription {\r\n    font-size: 20px;\r\n}\r\n\r\n.taskTitle {\r\n\r\n    font-size: 20px;\r\n}\r\n\r\n.tbody {\r\n    text-decoration: underline;\r\n}\r\n\r\ntable.table tbody tr:hover {\r\n    background-color: #f2f2f2;\r\n    /* Change the background color on hover */\r\n}\r\n\r\n@media screen and (max-width:1500px) {\r\n\r\n    .tasks {\r\n        width: 500px;\r\n        background-color: rgba(97, 62, 173, 0.766);\r\n        display: inline;\r\n\r\n    }\r\n\r\n    .projectInterFace {\r\n        width: 300px;\r\n    }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ deleteProject)\n/* harmony export */ });\n/* harmony import */ var _storage_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/list */ \"./src/storage/list.js\");\n\r\nfunction deleteProject(value) {\r\n\r\n    const projectIndex = _storage_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findIndex(item => item.modifiedName === value);\r\n\r\n    if (projectIndex !== -1) {\r\n        _storage_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(projectIndex, 1);\r\n        console.log(`Deleted project with name: ${value}`);\r\n    } else {\r\n        console.log(`Project with name: ${value} not found.`);\r\n    }\r\n}\n\n//# sourceURL=webpack://todolist/./src/functions/deleteProject.js?");

/***/ }),

/***/ "./src/functions/loopList.js":
/*!***********************************!*\
  !*** ./src/functions/loopList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createProjectListItem)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project */ \"./src/project.js\");\n/* harmony import */ var _storage_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/list */ \"./src/storage/list.js\");\n\r\n\r\n\r\nfunction createProjectListItem() {\r\n    const projects = _storage_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map(data => new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data._name, data._description));\r\n    console.log(_storage_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\r\n\r\n    projects.forEach((project) => {\r\n        project.appendProject();\r\n        console.log(\"loop works!\")\r\n    });\r\n\r\n\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./src/functions/loopList.js?");

/***/ }),

/***/ "./src/functions/popUp.js":
/*!********************************!*\
  !*** ./src/functions/popUp.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ popUp)\n/* harmony export */ });\nfunction popUp() {\r\n    const projectpopup = document.getElementById(\"project-popup\");\r\n    projectpopup.style.display = \"flex\"\r\n}\n\n//# sourceURL=webpack://todolist/./src/functions/popUp.js?");

/***/ }),

/***/ "./src/functions/populateLogTable.js":
/*!*******************************************!*\
  !*** ./src/functions/populateLogTable.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ populateLogTable)\n/* harmony export */ });\n\r\nfunction populateLogTable(currentTask) {\r\n    const logTableBody = document.getElementById('logtablebody');\r\n\r\n    for (const logEntry of currentTask) {\r\n        const newRow = logTableBody.insertRow();\r\n\r\n        const logCell = newRow.insertCell(0);\r\n        const dateCell = newRow.insertCell(1);\r\n\r\n\r\n        logCell.textContent = logEntry.LogName;\r\n        dateCell.textContent = logEntry.timestamp;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://todolist/./src/functions/populateLogTable.js?");

/***/ }),

/***/ "./src/functions/populateTable.js":
/*!****************************************!*\
  !*** ./src/functions/populateTable.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ populateTable)\n/* harmony export */ });\nfunction populateTable(tasks) {\r\n    const tbodyElement = document.querySelector(\".tbody\")\r\n\r\n    tbodyElement.innerHTML = \"\";\r\n\r\n    tasks.forEach((task, index) => {\r\n        const row = document.createElement(\"tr\");\r\n\r\n        const nameCell = document.createElement(\"td\");\r\n        nameCell.textContent = task.TaskName;\r\n        nameCell.dataset.userid = index\r\n        const descriptionCell = document.createElement(\"td\");\r\n        descriptionCell.textContent = task.TaskDescription;\r\n        descriptionCell.dataset.userid = index\r\n        const checkboxCell = document.createElement(\"td\");\r\n        const checkbox = document.createElement(\"input\");\r\n        checkbox.type = \"checkbox\";\r\n        checkboxCell.appendChild(checkbox);\r\n        checkboxCell.dataset.userid = index\r\n\r\n        checkbox.checked = task.completed;\r\n        checkbox.addEventListener(\"change\", function () {\r\n            task.completed = checkbox.checked;\r\n        });\r\n\r\n\r\n\r\n\r\n        row.appendChild(nameCell)\r\n        row.appendChild(descriptionCell);\r\n        row.appendChild(checkboxCell);\r\n\r\n        tbodyElement.appendChild(row);\r\n    });\r\n}\n\n//# sourceURL=webpack://todolist/./src/functions/populateTable.js?");

/***/ }),

/***/ "./src/functions/projectSelect.js":
/*!****************************************!*\
  !*** ./src/functions/projectSelect.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projectSelect)\n/* harmony export */ });\n/* harmony import */ var _storage_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/list */ \"./src/storage/list.js\");\n\r\nfunction projectSelect(event) {\r\n\r\n    let projectSelect = event.target.dataset.userid\r\n    console.log(projectSelect)\r\n    const selectedInstance = _storage_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(item => item.modifiedName === projectSelect);\r\n    return selectedInstance\r\n\r\n}\n\n//# sourceURL=webpack://todolist/./src/functions/projectSelect.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   eventSelect: () => (/* binding */ eventSelect),\n/* harmony export */   projectList: () => (/* binding */ projectList)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _functions_populateTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/populateTable */ \"./src/functions/populateTable.js\");\n/* harmony import */ var _functions_popUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/popUp */ \"./src/functions/popUp.js\");\n/* harmony import */ var _functions_projectSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/projectSelect */ \"./src/functions/projectSelect.js\");\n/* harmony import */ var _storage_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage/list */ \"./src/storage/list.js\");\n/* harmony import */ var _functions_populateLogTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/populateLogTable */ \"./src/functions/populateLogTable.js\");\n/* harmony import */ var _storage_task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage/task */ \"./src/storage/task.js\");\n/* harmony import */ var _functions_loopList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functions/loopList */ \"./src/functions/loopList.js\");\n/* harmony import */ var _functions_deleteProject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./functions/deleteProject */ \"./src/functions/deleteProject.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst projectForm = document.getElementById('projectForm');\r\nconst newTask = document.querySelector(\".createNew\");;\r\nconst projectList = document.querySelector(\".projectList\")\r\nconst taskbox = document.querySelector(\"#taskTable\")\r\nconst projectpopup = document.getElementById(\"project-popup\");\r\nconst projectpopupedit = document.getElementById(\"projectedit-popup\");\r\nconst editForm = document.getElementById(\"projectedit-popup\");\r\n\r\nconst taskSubmit = document.querySelector(\".taskSubmit\")\r\nconst taskpopup = document.getElementById(\"task-popup\")\r\nconst projectHeader = document.querySelector(\".projectHeader\")\r\nconst projectDescription = document.querySelector(\".projectDescription\")\r\nconst logRowButton = document.getElementById(\"addLogButton\");\r\nconst logPop = document.querySelector(\"#log-popup\")\r\nconst logTable = document.querySelector('.logTable');\r\nconst logTableBody = document.getElementById('logtablebody');\r\nconst taskHeader = document.querySelector(\".taskTitle\");\r\n\r\n\r\n\r\nnewTask.addEventListener(\"click\", _functions_popUp__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n\r\nlet eventSelect = null;\r\nlet newTaskSelect = null;\r\n\r\nprojectForm.addEventListener(\"submit\", function (event) {\r\n    event.preventDefault()\r\n\r\n    const nameInput = document.getElementById(\"ProjectName\").value;\r\n    const descriptionInput = document.getElementById(\"ProjectDescription\").value;\r\n\r\n    const newProject = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](nameInput, descriptionInput);\r\n\r\n    _storage_list__WEBPACK_IMPORTED_MODULE_5__[\"default\"].push(newProject)\r\n    //projects[nameInput] = newProject;\r\n\r\n    //newProject.appendProject(nameInput);\r\n    projectForm.reset();\r\n\r\n    projectList.innerHTML = \"\";\r\n    (0,_functions_loopList__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n    projectpopup.style.display = \"none\";\r\n\r\n});\r\n\r\nprojectList.addEventListener(\"click\", function (event) {\r\n    if (event.target.classList.contains(\"edit\")) {\r\n        eventSelect = (0,_functions_projectSelect__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(event)\r\n        const test = event.target.parentElement.getAttribute('data-userid');\r\n        console.log(test)\r\n        eventSelect = (0,_functions_projectSelect__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(event)\r\n\r\n\r\n        editForm.style.display = \"flex\";\r\n\r\n        const editButton = document.querySelector(\".edit\");\r\n\r\n\r\n        editButton.addEventListener(\"click\", function () {\r\n            const userId = projectItem.querySelector('[data-userid]').getAttribute(\"data-userid\");\r\n            console.log(`Edit button clicked for user with ID: ${userId}`);\r\n            const projectpopupedit = document.getElementById(\"projectedit-popup\");\r\n            projectpopupedit.style.display = flex;\r\n\r\n        });\r\n\r\n\r\n        console.log(eventSelect)\r\n    }\r\n    else if (event.target.classList.contains(\"delete\")) {\r\n        console.log(\"deleteseen\")\r\n        eventSelect = (0,_functions_projectSelect__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(event);\r\n        (0,_functions_deleteProject__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(eventSelect.modifiedName);\r\n        projectList.innerHTML = \"\";\r\n        console.log(taskbox)\r\n        taskbox.style.display = \"none\";\r\n        (0,_functions_loopList__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n\r\n    }\r\n\r\n    else {\r\n        event.preventDefault()\r\n        eventSelect = (0,_functions_projectSelect__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(event)\r\n        console.log(eventSelect)\r\n        eventSelect.createTable()\r\n        eventSelect.appendTable()\r\n\r\n        projectHeader.innerHTML = eventSelect.name;\r\n        projectDescription.innerHTML = eventSelect.description\r\n        taskpopup.style.display = \"none\";\r\n        console.log(eventSelect)\r\n\r\n        return eventSelect\r\n    }\r\n    logTable.style.display = \"none\"\r\n\r\n})\r\n\r\ntaskpopup.addEventListener(\"submit\", function (event) {\r\n    event.preventDefault()\r\n    const form = taskSubmit.parentElement;\r\n    newTaskSelect = Object.create(_storage_task__WEBPACK_IMPORTED_MODULE_7__.taskData)\r\n    newTaskSelect.logs = [];\r\n    for (const field of form.elements) {\r\n\r\n        if (field.name && field.type !== 'submit') {\r\n            newTaskSelect[field.name] = field.value;\r\n        }\r\n    }\r\n\r\n    taskpopup.style.display = \"none\";\r\n    console.log(eventSelect)\r\n    eventSelect.addTasks(newTaskSelect)\r\n    ;(0,_functions_populateTable__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(eventSelect.tasks)\r\n\r\n\r\n    return newTaskSelect\r\n\r\n});\r\n\r\nconst tbody = document.querySelector(\".tbody\");\r\n\r\ntbody.addEventListener(\"click\", function (event) {\r\n    const clickedElement = event.target.dataset.userid;\r\n    taskHeader.innerHTML = \"\";\r\n    newTaskSelect = eventSelect.tasks[clickedElement]\r\n    console.log(newTaskSelect)\r\n    console.log(clickedElement)\r\n    taskHeader.innerHTML = newTaskSelect.TaskName\r\n    logTableBody.innerHTML = '';\r\n    let currentTask = newTaskSelect.logs\r\n    ;(0,_functions_populateLogTable__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(currentTask)\r\n\r\n    logTable.style.display = \"table\";\r\n    return newTaskSelect\r\n\r\n});\r\n\r\nlogRowButton.addEventListener(\"click\", function (event) {\r\n    event.preventDefault()\r\n    logPop.style.display = \"flex\"\r\n\r\n})\r\n\r\nlogPop.addEventListener(\"submit\", function (event) {\r\n    event.preventDefault();\r\n    logPop.style.display = \"none\";\r\n    logTableBody.innerHTML = '';\r\n    const form = document.getElementById(\"logForm\");\r\n\r\n\r\n    let newLog = {};\r\n\r\n    for (const field of form.elements) {\r\n        if (field.name && field.type !== 'submit') {\r\n\r\n            newLog[field.name] = field.value;\r\n            newLog[\"timestamp\"] = new Date().toISOString();\r\n\r\n        }\r\n    }\r\n    newTaskSelect.logs.push(newLog);\r\n    console.log(newTaskSelect);\r\n\r\n\r\n    let currentTask = newTaskSelect.logs\r\n\r\n\r\n    ;(0,_functions_populateLogTable__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(currentTask)\r\n\r\n});\r\n\r\n\r\neditForm.addEventListener(\"submit\", function (event) {\r\n    event.preventDefault();\r\n    projectList.innerHTML = \"\";\r\n\r\n    console.log(eventSelect);\r\n    const nameInput = document.getElementById(\"editProjectName\").value;\r\n    const descriptionInput = document.getElementById(\"editProjectDescription\").value;\r\n    eventSelect.name = nameInput;\r\n    eventSelect.description = descriptionInput;\r\n    eventSelect.getModifiedName()\r\n    const projecteditsubmit = projectpopupedit.querySelector(\"button\")\r\n\r\n    editForm.style.display = \"none\"\r\n    ;(0,_functions_loopList__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n    console.log(eventSelect.modifiedName)\r\n\r\n});\r\n\r\n\r\nconst cancelButtons = document.querySelectorAll(\".cancel\");\r\nconsole.log(cancelButtons)\r\n\r\ncancelButtons.forEach((cancelButton) => {\r\n    cancelButton.addEventListener(\"click\", function () {\r\n        console.log(\"hy\")\r\n        const popupBox = cancelButton.parentElement.parentElement;\r\n        console.log(popupBox)\r\n        if (popupBox) {\r\n            popupBox.style.display = \"none\";\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ project)\n/* harmony export */ });\n\r\nclass project {\r\n    constructor(name, description) {\r\n        this.name = name;\r\n        this.description = description;\r\n        this._tasks = [];\r\n        this.getModifiedName();\r\n        this.modifiedName = this.getModifiedName()\r\n\r\n    }\r\n    get name() {\r\n        return this._name;\r\n    }\r\n\r\n    set name(value) {\r\n        return this._name = value;\r\n    }\r\n\r\n    get description() {\r\n        return this._description;\r\n    }\r\n\r\n    set description(value) {\r\n        return this._description = value;\r\n    }\r\n\r\n    get tasks() {\r\n        return this._tasks\r\n    }\r\n    set tasks(value) {\r\n        this._tasks = value\r\n    }\r\n    addTasks(obj) {\r\n        this.tasks.push(obj);\r\n    }\r\n    getModifiedName() {\r\n        return this.modifiedName = this.name.replace(/ /g, \"\");\r\n    }\r\n\r\n\r\n    appendProject = () => {\r\n        const projectList = document.querySelector(\".projectList\")\r\n        const form = document.querySelector('.form');\r\n        const projectItem = document.createElement(\"li\");\r\n\r\n        projectItem.classList.add(\"project\");\r\n        projectItem.dataset.userid = this.name;\r\n\r\n        const htmlString = `\r\n            <div data-userid=\"${this.modifiedName}\">${this.name}</div>\r\n            <div class=\"modify\" data-userid=\"${this.modifiedName}\">\r\n                <div class=\"edit\" data-userid=\"${this.modifiedName}\">⚙</div>\r\n                <button data-userid=\"${this.modifiedName}\"class=\"delete\">🗑</button>\r\n            </div>\r\n        `;\r\n\r\n        projectItem.innerHTML = htmlString;\r\n        projectList.appendChild(projectItem)\r\n\r\n\r\n        form.reset();\r\n\r\n        return projectItem;\r\n    }\r\n\r\n    appendTable() {\r\n\r\n        const tbodyElement = document.querySelector(\".tbody\")\r\n\r\n        tbodyElement.innerHTML = \"\";\r\n\r\n        this._tasks.forEach((task, index) => {\r\n            const row = document.createElement(\"tr\");\r\n\r\n            const nameCell = document.createElement(\"td\");\r\n            nameCell.textContent = task.TaskName;\r\n            nameCell.dataset.userid = index\r\n            const descriptionCell = document.createElement(\"td\");\r\n            descriptionCell.textContent = task.TaskDescription;\r\n            descriptionCell.dataset.userid = index\r\n            const checkboxCell = document.createElement(\"td\");\r\n            const checkbox = document.createElement(\"input\");\r\n            checkbox.type = \"checkbox\";\r\n            checkboxCell.appendChild(checkbox);\r\n            checkboxCell.dataset.userid = index\r\n\r\n            checkbox.checked = task.completed;\r\n            checkbox.addEventListener(\"change\", function () {\r\n                task.completed = checkbox.checked;\r\n            });\r\n\r\n\r\n\r\n\r\n            row.appendChild(nameCell)\r\n            row.appendChild(descriptionCell);\r\n            row.appendChild(checkboxCell);\r\n\r\n            tbodyElement.appendChild(row);\r\n        });\r\n    }\r\n\r\n    createTable = () => {\r\n        console.log(\"testworks!\");\r\n        const taskSubmit = document.querySelector(\".taskSubmit\")\r\n\r\n        taskSubmit.dataset.userid = this.modifiedName;\r\n\r\n        const taskpopup = document.getElementById(\"task-popup\")\r\n        const taskForm = document.getElementById('taskForm');\r\n        const table = document.querySelector(\".table\")\r\n\r\n        const addRowButton = document.querySelector(\".add-row-button\")\r\n        addRowButton.dataset.userid = this.name;\r\n\r\n        table.style.display = \"table\";\r\n\r\n\r\n        addRowButton.addEventListener(\"click\", addRow);\r\n        function addRow() {\r\n\r\n            taskpopup.style.display = \"flex\"\r\n        }\r\n\r\n\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://todolist/./src/project.js?");

/***/ }),

/***/ "./src/storage/list.js":
/*!*****************************!*\
  !*** ./src/storage/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst list = []\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (list);\n\n//# sourceURL=webpack://todolist/./src/storage/list.js?");

/***/ }),

/***/ "./src/storage/task.js":
/*!*****************************!*\
  !*** ./src/storage/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   taskData: () => (/* binding */ taskData)\n/* harmony export */ });\nconst taskData = {\r\n    //id: taskIdCounter++,\r\n    completed: false,\r\n    // logs: []\r\n\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/storage/task.js?");

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