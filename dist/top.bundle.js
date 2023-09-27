/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_object_project_top_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/scss/object/project/top.scss */ \"./src/scss/object/project/top.scss\");\n/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vanilla-tilt */ \"./node_modules/vanilla-tilt/lib/vanilla-tilt.js\");\n/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vanilla_tilt__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\n/**\n * カードのTiltアニメーションを開始する関数です。\n */\nfunction cardTiltAnimationInit() {\n  /**\n   * Tiltの対象となるDOM要素です。\n   * @type {NodeList}\n   */\n  var cardList = document.querySelectorAll(\".p-card\");\n  /**\n   * @see https://github.com/micku7zu/vanilla-tilt.js\n   */\n  vanilla_tilt__WEBPACK_IMPORTED_MODULE_1___default().init(cardList, {\n    reverse: true,\n    speed: 2000\n  });\n\n  /**\n   * カード子要素の背景画像に対して個別にTiltを設定します。\n   */\n  cardList.forEach(function (card) {\n    /**\n     * カード背景画像の親要素であるcardのイベント発火がトリガー\n     */\n    card.addEventListener(\"tiltChange\", function () {\n      /**\n       * カードの背景画像のDOM要素です。\n       * @type {NodeList}\n       */\n      var cardBackGroundImage = document.querySelectorAll(\".p-card__bg\");\n      /**\n       * @see https://github.com/micku7zu/vanilla-tilt.js\n       */\n      vanilla_tilt__WEBPACK_IMPORTED_MODULE_1___default().init(cardBackGroundImage, {\n        reverse: true,\n        max: 20,\n        startX: 50,\n        speed: 2000,\n        scale: 1.2\n      });\n    });\n  });\n  cardList.forEach(function (card) {\n    card.removeEventListener(\"mouseleave\", function () {\n      setTimeout(function () {\n        vanilla_tilt__WEBPACK_IMPORTED_MODULE_1___default().reset(card);\n      }, 2000);\n    });\n  });\n}\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  cardTiltAnimationInit();\n});\n\n//# sourceURL=webpack://portfolio/./src/js/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/scss/object/project/top.scss":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/scss/object/project/top.scss ***!
  \*******************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ \"./node_modules/css-loader/dist/runtime/sourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/images/index_about.jpg */ \"./src/images/index_about.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/images/index_work.jpg */ \"./src/images/index_work.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/images/index_skill.jpg */ \"./src/images/index_skill.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/images/index_contact.jpg */ \"./src/images/index_contact.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".p-flex {\\n  display: flex;\\n  flex-flow: column nowrap;\\n  margin: -32px 0 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n.p-flex__item {\\n  margin: 32px 0 0;\\n}\\n@media screen and (min-width: 768px) {\\n  .p-flex {\\n    flex-flow: row wrap;\\n  }\\n  .p-flex__item {\\n    width: 50%;\\n  }\\n}\\n@media screen and (min-width: 992px) {\\n  .p-flex__item {\\n    width: 33.3333333333%;\\n  }\\n}\\n\\n.p-card__link {\\n  color: #fcfffa;\\n}\\n.p-card__inner {\\n  position: relative;\\n  width: 240px;\\n  height: 320px;\\n  background-color: #333;\\n  border-radius: 20px;\\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.66), inset 0 0 0 9px #333, inset 0 0 0 10px rgba(253, 253, 253, 0.6);\\n  overflow: hidden;\\n  margin: 0 auto;\\n}\\n.p-card__bg {\\n  position: absolute;\\n  box-sizing: content-box;\\n  top: -20px;\\n  left: -20px;\\n  height: 100%;\\n  width: 100%;\\n  padding: 20px;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  opacity: 0.5;\\n}\\n.p-card__bg.p-card__bg--about {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n.p-card__bg.p-card__bg--work {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n.p-card__bg.p-card__bg--skill {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n}\\n.p-card__bg.p-card__bg--contact {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n}\\n.p-card__txt {\\n  position: absolute;\\n  height: 100%;\\n  width: 100%;\\n  top: 240px;\\n  left: 20px;\\n  pointer-events: none;\\n  transition: all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);\\n}\\n.p-card__title {\\n  margin: 0;\\n  font-size: 48px;\\n  font-family: Gabriola, sans-serif;\\n  line-height: 1.25;\\n  text-transform: capitalize;\\n}\\n.p-card__description {\\n  margin: 0;\\n  opacity: 0;\\n  transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);\\n}\\n.p-card:hover .p-card__inner {\\n  outline: 1px solid #fcfffa;\\n}\\n.p-card:hover .p-card__txt {\\n  transform: translateY(-15%);\\n}\\n.p-card:hover .p-card__description {\\n  opacity: 1;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://./src/scss/object/project/top.scss\",\"webpack://./src/scss/global/_mq.scss\",\"webpack://./src/scss/global/_variable.scss\"],\"names\":[],\"mappings\":\"AAGA;EACE,aAAA;EACA,wBAAA;EACA,iBAAA;EACA,UAAA;EACA,gBAAA;AAFF;AAIE;EACE,gBAAA;AAFJ;ACAE;EDNF;IAaI,mBAAA;EAHF;EAKE;IACE,UAAA;EAHJ;AACF;ACRE;EDgBE;IACE,qBAAA;EALJ;AACF;;AAmBE;EACE,cEvCe;AFuBnB;AAmBE;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,8GACE;EAGF,gBAAA;EACA,cAAA;AApBJ;AAuBE;EACE,kBAAA;EACA,uBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,2BAAA;EACA,4BAAA;EACA,YAAA;AArBJ;AAuBI;EACE,yDAAA;AArBN;AAwBI;EACE,yDAAA;AAtBN;AAyBI;EACE,yDAAA;AAvBN;AA0BI;EACE,yDAAA;AAxBN;AA4BE;EACE,kBAAA;EACA,YAAA;EACA,WAAA;EACA,UAAA;EACA,UAAA;EACA,oBAAA;EAzDF,wDAAA;AAgCF;AA8BE;EACE,SAAA;EACA,eAAA;EACA,iCAAA;EACA,iBAAA;EACA,0BAAA;AA5BJ;AA+BE;EACE,SAAA;EACA,UAAA;EAxEF,wDAAA;AA4CF;AAkCI;EACE,0BAAA;AAhCN;AAmCI;EACE,2BAAA;AAjCN;AAoCI;EACE,UAAA;AAlCN\",\"sourcesContent\":[\"@use \\\"/src/scss/global/\\\" as *;\\n\\n// topページのみに適用されるスタイルです。\\n.p-flex {\\n  display: flex;\\n  flex-flow: column nowrap;\\n  margin: -32px 0 0;\\n  padding: 0;\\n  list-style: none;\\n\\n  &__item {\\n    margin: 32px 0 0;\\n  }\\n\\n  // 2カラム\\n  @include mq(md) {\\n    flex-flow: row wrap;\\n\\n    &__item {\\n      width: calc(100% / 2);\\n    }\\n  }\\n\\n  // 3カラム\\n  @include mq(lg) {\\n    &__item {\\n      width: calc(100% / 3);\\n    }\\n  }\\n}\\n\\n// transition設定値\\n@mixin card-transition-property(\\n  $target: all,\\n  $duration: 1s,\\n  $timing-function: cubic-bezier(0.39, 0.575, 0.565, 1)\\n) {\\n  transition: $target $duration $timing-function;\\n}\\n\\n.p-card {\\n  &__link {\\n    color: $text-color-white;\\n  }\\n\\n  &__inner {\\n    position: relative;\\n    width: 240px;\\n    height: 320px;\\n    background-color: #333;\\n    border-radius: 20px;\\n    box-shadow:\\n      0 30px 60px 0 rgba(0 0 0 / 66%),\\n      inset 0 0 0 9px #333,\\n      inset 0 0 0 10px rgba(253 253 253 / 60%);\\n    overflow: hidden;\\n    margin: 0 auto;\\n  }\\n\\n  &__bg {\\n    position: absolute;\\n    box-sizing: content-box;\\n    top: -20px;\\n    left: -20px;\\n    height: 100%;\\n    width: 100%;\\n    padding: 20px;\\n    background-position: center;\\n    background-repeat: no-repeat;\\n    opacity: 0.5;\\n\\n    &.p-card__bg--about {\\n      background-image: url(\\\"/src/images/index_about.jpg\\\");\\n    }\\n\\n    &.p-card__bg--work {\\n      background-image: url(\\\"/src/images/index_work.jpg\\\");\\n    }\\n\\n    &.p-card__bg--skill {\\n      background-image: url(\\\"/src/images/index_skill.jpg\\\");\\n    }\\n\\n    &.p-card__bg--contact {\\n      background-image: url(\\\"/src/images/index_contact.jpg\\\");\\n    }\\n  }\\n\\n  &__txt {\\n    position: absolute;\\n    height: 100%;\\n    width: 100%;\\n    top: 240px;\\n    left: 20px;\\n    pointer-events: none;\\n\\n    @include card-transition-property($duration: 0.5s);\\n  }\\n\\n  &__title {\\n    margin: 0;\\n    font-size: 48px;\\n    font-family: Gabriola, sans-serif;\\n    line-height: 1.25;\\n    text-transform: capitalize;\\n  }\\n\\n  &__description {\\n    margin: 0;\\n    opacity: 0;\\n\\n    @include card-transition-property($duration: 0.3s);\\n  }\\n\\n  &:hover {\\n    .p-card__inner {\\n      outline: 1px solid $white;\\n    }\\n\\n    .p-card__txt {\\n      transform: translateY(-15%);\\n    }\\n\\n    .p-card__description {\\n      opacity: 1;\\n    }\\n  }\\n}\\n\",\"$breakpoint: (\\n  sm: \\\"screen and (min-width: 576px)\\\",\\n  md: \\\"screen and (min-width: 768px)\\\",\\n  lg: \\\"screen and (min-width: 992px)\\\",\\n  xl: \\\"screen and (min-width: 1200px)\\\",\\n  xxl: \\\"screen and (min-width: 1400px)\\\",\\n);\\n\\n@mixin mq($bp) {\\n  @media #{map-get($breakpoint, $bp)} {\\n    @content;\\n  }\\n}\\n\",\"// グローバル変数を定義しています。\\n$bg-color: #bcb8ad;\\n$text-color: #111;\\n$text-color-white: #fcfffa;\\n$white: #fcfffa;\\n$content-max-width: 1080px;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://portfolio/./src/scss/object/project/top.scss?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B1%5D!./node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B2%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ (function(module) {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ (function(module) {

eval("\n\nmodule.exports = function (item) {\n  var content = item[1];\n  var cssMapping = item[3];\n  if (!cssMapping) {\n    return content;\n  }\n  if (typeof btoa === \"function\") {\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    var sourceMapping = \"/*# \".concat(data, \" */\");\n    return [content].concat([sourceMapping]).join(\"\\n\");\n  }\n  return [content].join(\"\\n\");\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/css-loader/dist/runtime/sourceMaps.js?");

/***/ }),

/***/ "./src/scss/object/project/top.scss":
/*!******************************************!*\
  !*** ./src/scss/object/project/top.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_top_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./top.scss */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/scss/object/project/top.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_top_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_top_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_top_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_top_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://portfolio/./src/scss/object/project/top.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/vanilla-tilt/lib/vanilla-tilt.js":
/*!*******************************************************!*\
  !*** ./node_modules/vanilla-tilt/lib/vanilla-tilt.js ***!
  \*******************************************************/
/***/ (function(module) {

eval("\n\nvar classCallCheck = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n};\n\n/**\r\n * Created by Sergiu Șandor (micku7zu) on 1/27/2017.\r\n * Original idea: https://github.com/gijsroge/tilt.js\r\n * MIT License.\r\n * Version 1.8.1\r\n */\n\nvar VanillaTilt = function () {\n  function VanillaTilt(element) {\n    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    classCallCheck(this, VanillaTilt);\n\n    if (!(element instanceof Node)) {\n      throw \"Can't initialize VanillaTilt because \" + element + \" is not a Node.\";\n    }\n\n    this.width = null;\n    this.height = null;\n    this.clientWidth = null;\n    this.clientHeight = null;\n    this.left = null;\n    this.top = null;\n\n    // for Gyroscope sampling\n    this.gammazero = null;\n    this.betazero = null;\n    this.lastgammazero = null;\n    this.lastbetazero = null;\n\n    this.transitionTimeout = null;\n    this.updateCall = null;\n    this.event = null;\n\n    this.updateBind = this.update.bind(this);\n    this.resetBind = this.reset.bind(this);\n\n    this.element = element;\n    this.settings = this.extendSettings(settings);\n\n    this.reverse = this.settings.reverse ? -1 : 1;\n    this.resetToStart = VanillaTilt.isSettingTrue(this.settings[\"reset-to-start\"]);\n    this.glare = VanillaTilt.isSettingTrue(this.settings.glare);\n    this.glarePrerender = VanillaTilt.isSettingTrue(this.settings[\"glare-prerender\"]);\n    this.fullPageListening = VanillaTilt.isSettingTrue(this.settings[\"full-page-listening\"]);\n    this.gyroscope = VanillaTilt.isSettingTrue(this.settings.gyroscope);\n    this.gyroscopeSamples = this.settings.gyroscopeSamples;\n\n    this.elementListener = this.getElementListener();\n\n    if (this.glare) {\n      this.prepareGlare();\n    }\n\n    if (this.fullPageListening) {\n      this.updateClientSize();\n    }\n\n    this.addEventListeners();\n    this.reset();\n\n    if (this.resetToStart === false) {\n      this.settings.startX = 0;\n      this.settings.startY = 0;\n    }\n  }\n\n  VanillaTilt.isSettingTrue = function isSettingTrue(setting) {\n    return setting === \"\" || setting === true || setting === 1;\n  };\n\n  /**\r\n   * Method returns element what will be listen mouse events\r\n   * @return {Node}\r\n   */\n\n\n  VanillaTilt.prototype.getElementListener = function getElementListener() {\n    if (this.fullPageListening) {\n      return window.document;\n    }\n\n    if (typeof this.settings[\"mouse-event-element\"] === \"string\") {\n      var mouseEventElement = document.querySelector(this.settings[\"mouse-event-element\"]);\n\n      if (mouseEventElement) {\n        return mouseEventElement;\n      }\n    }\n\n    if (this.settings[\"mouse-event-element\"] instanceof Node) {\n      return this.settings[\"mouse-event-element\"];\n    }\n\n    return this.element;\n  };\n\n  /**\r\n   * Method set listen methods for this.elementListener\r\n   * @return {Node}\r\n   */\n\n\n  VanillaTilt.prototype.addEventListeners = function addEventListeners() {\n    this.onMouseEnterBind = this.onMouseEnter.bind(this);\n    this.onMouseMoveBind = this.onMouseMove.bind(this);\n    this.onMouseLeaveBind = this.onMouseLeave.bind(this);\n    this.onWindowResizeBind = this.onWindowResize.bind(this);\n    this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this);\n\n    this.elementListener.addEventListener(\"mouseenter\", this.onMouseEnterBind);\n    this.elementListener.addEventListener(\"mouseleave\", this.onMouseLeaveBind);\n    this.elementListener.addEventListener(\"mousemove\", this.onMouseMoveBind);\n\n    if (this.glare || this.fullPageListening) {\n      window.addEventListener(\"resize\", this.onWindowResizeBind);\n    }\n\n    if (this.gyroscope) {\n      window.addEventListener(\"deviceorientation\", this.onDeviceOrientationBind);\n    }\n  };\n\n  /**\r\n   * Method remove event listeners from current this.elementListener\r\n   */\n\n\n  VanillaTilt.prototype.removeEventListeners = function removeEventListeners() {\n    this.elementListener.removeEventListener(\"mouseenter\", this.onMouseEnterBind);\n    this.elementListener.removeEventListener(\"mouseleave\", this.onMouseLeaveBind);\n    this.elementListener.removeEventListener(\"mousemove\", this.onMouseMoveBind);\n\n    if (this.gyroscope) {\n      window.removeEventListener(\"deviceorientation\", this.onDeviceOrientationBind);\n    }\n\n    if (this.glare || this.fullPageListening) {\n      window.removeEventListener(\"resize\", this.onWindowResizeBind);\n    }\n  };\n\n  VanillaTilt.prototype.destroy = function destroy() {\n    clearTimeout(this.transitionTimeout);\n    if (this.updateCall !== null) {\n      cancelAnimationFrame(this.updateCall);\n    }\n\n    this.element.style.willChange = \"\";\n    this.element.style.transition = \"\";\n    this.element.style.transform = \"\";\n    this.resetGlare();\n\n    this.removeEventListeners();\n    this.element.vanillaTilt = null;\n    delete this.element.vanillaTilt;\n\n    this.element = null;\n  };\n\n  VanillaTilt.prototype.onDeviceOrientation = function onDeviceOrientation(event) {\n    if (event.gamma === null || event.beta === null) {\n      return;\n    }\n\n    this.updateElementPosition();\n\n    if (this.gyroscopeSamples > 0) {\n      this.lastgammazero = this.gammazero;\n      this.lastbetazero = this.betazero;\n\n      if (this.gammazero === null) {\n        this.gammazero = event.gamma;\n        this.betazero = event.beta;\n      } else {\n        this.gammazero = (event.gamma + this.lastgammazero) / 2;\n        this.betazero = (event.beta + this.lastbetazero) / 2;\n      }\n\n      this.gyroscopeSamples -= 1;\n    }\n\n    var totalAngleX = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX;\n    var totalAngleY = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY;\n\n    var degreesPerPixelX = totalAngleX / this.width;\n    var degreesPerPixelY = totalAngleY / this.height;\n\n    var angleX = event.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero);\n    var angleY = event.beta - (this.settings.gyroscopeMinAngleY + this.betazero);\n\n    var posX = angleX / degreesPerPixelX;\n    var posY = angleY / degreesPerPixelY;\n\n    if (this.updateCall !== null) {\n      cancelAnimationFrame(this.updateCall);\n    }\n\n    this.event = {\n      clientX: posX + this.left,\n      clientY: posY + this.top\n    };\n\n    this.updateCall = requestAnimationFrame(this.updateBind);\n  };\n\n  VanillaTilt.prototype.onMouseEnter = function onMouseEnter() {\n    this.updateElementPosition();\n    this.element.style.willChange = \"transform\";\n    this.setTransition();\n  };\n\n  VanillaTilt.prototype.onMouseMove = function onMouseMove(event) {\n    if (this.updateCall !== null) {\n      cancelAnimationFrame(this.updateCall);\n    }\n\n    this.event = event;\n    this.updateCall = requestAnimationFrame(this.updateBind);\n  };\n\n  VanillaTilt.prototype.onMouseLeave = function onMouseLeave() {\n    this.setTransition();\n\n    if (this.settings.reset) {\n      requestAnimationFrame(this.resetBind);\n    }\n  };\n\n  VanillaTilt.prototype.reset = function reset() {\n    this.onMouseEnter();\n\n    if (this.fullPageListening) {\n      this.event = {\n        clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,\n        clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight\n      };\n    } else {\n      this.event = {\n        clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width,\n        clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height\n      };\n    }\n\n    var backupScale = this.settings.scale;\n    this.settings.scale = 1;\n    this.update();\n    this.settings.scale = backupScale;\n    this.resetGlare();\n  };\n\n  VanillaTilt.prototype.resetGlare = function resetGlare() {\n    if (this.glare) {\n      this.glareElement.style.transform = \"rotate(180deg) translate(-50%, -50%)\";\n      this.glareElement.style.opacity = \"0\";\n    }\n  };\n\n  VanillaTilt.prototype.getValues = function getValues() {\n    var x = void 0,\n        y = void 0;\n\n    if (this.fullPageListening) {\n      x = this.event.clientX / this.clientWidth;\n      y = this.event.clientY / this.clientHeight;\n    } else {\n      x = (this.event.clientX - this.left) / this.width;\n      y = (this.event.clientY - this.top) / this.height;\n    }\n\n    x = Math.min(Math.max(x, 0), 1);\n    y = Math.min(Math.max(y, 0), 1);\n\n    var tiltX = (this.reverse * (this.settings.max - x * this.settings.max * 2)).toFixed(2);\n    var tiltY = (this.reverse * (y * this.settings.max * 2 - this.settings.max)).toFixed(2);\n    var angle = Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI);\n\n    return {\n      tiltX: tiltX,\n      tiltY: tiltY,\n      percentageX: x * 100,\n      percentageY: y * 100,\n      angle: angle\n    };\n  };\n\n  VanillaTilt.prototype.updateElementPosition = function updateElementPosition() {\n    var rect = this.element.getBoundingClientRect();\n\n    this.width = this.element.offsetWidth;\n    this.height = this.element.offsetHeight;\n    this.left = rect.left;\n    this.top = rect.top;\n  };\n\n  VanillaTilt.prototype.update = function update() {\n    var values = this.getValues();\n\n    this.element.style.transform = \"perspective(\" + this.settings.perspective + \"px) \" + \"rotateX(\" + (this.settings.axis === \"x\" ? 0 : values.tiltY) + \"deg) \" + \"rotateY(\" + (this.settings.axis === \"y\" ? 0 : values.tiltX) + \"deg) \" + \"scale3d(\" + this.settings.scale + \", \" + this.settings.scale + \", \" + this.settings.scale + \")\";\n\n    if (this.glare) {\n      this.glareElement.style.transform = \"rotate(\" + values.angle + \"deg) translate(-50%, -50%)\";\n      this.glareElement.style.opacity = \"\" + values.percentageY * this.settings[\"max-glare\"] / 100;\n    }\n\n    this.element.dispatchEvent(new CustomEvent(\"tiltChange\", {\n      \"detail\": values\n    }));\n\n    this.updateCall = null;\n  };\n\n  /**\r\n   * Appends the glare element (if glarePrerender equals false)\r\n   * and sets the default style\r\n   */\n\n\n  VanillaTilt.prototype.prepareGlare = function prepareGlare() {\n    // If option pre-render is enabled we assume all html/css is present for an optimal glare effect.\n    if (!this.glarePrerender) {\n      // Create glare element\n      var jsTiltGlare = document.createElement(\"div\");\n      jsTiltGlare.classList.add(\"js-tilt-glare\");\n\n      var jsTiltGlareInner = document.createElement(\"div\");\n      jsTiltGlareInner.classList.add(\"js-tilt-glare-inner\");\n\n      jsTiltGlare.appendChild(jsTiltGlareInner);\n      this.element.appendChild(jsTiltGlare);\n    }\n\n    this.glareElementWrapper = this.element.querySelector(\".js-tilt-glare\");\n    this.glareElement = this.element.querySelector(\".js-tilt-glare-inner\");\n\n    if (this.glarePrerender) {\n      return;\n    }\n\n    Object.assign(this.glareElementWrapper.style, {\n      \"position\": \"absolute\",\n      \"top\": \"0\",\n      \"left\": \"0\",\n      \"width\": \"100%\",\n      \"height\": \"100%\",\n      \"overflow\": \"hidden\",\n      \"pointer-events\": \"none\",\n      \"border-radius\": \"inherit\"\n    });\n\n    Object.assign(this.glareElement.style, {\n      \"position\": \"absolute\",\n      \"top\": \"50%\",\n      \"left\": \"50%\",\n      \"pointer-events\": \"none\",\n      \"background-image\": \"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)\",\n      \"transform\": \"rotate(180deg) translate(-50%, -50%)\",\n      \"transform-origin\": \"0% 0%\",\n      \"opacity\": \"0\"\n    });\n\n    this.updateGlareSize();\n  };\n\n  VanillaTilt.prototype.updateGlareSize = function updateGlareSize() {\n    if (this.glare) {\n      var glareSize = (this.element.offsetWidth > this.element.offsetHeight ? this.element.offsetWidth : this.element.offsetHeight) * 2;\n\n      Object.assign(this.glareElement.style, {\n        \"width\": glareSize + \"px\",\n        \"height\": glareSize + \"px\"\n      });\n    }\n  };\n\n  VanillaTilt.prototype.updateClientSize = function updateClientSize() {\n    this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;\n\n    this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;\n  };\n\n  VanillaTilt.prototype.onWindowResize = function onWindowResize() {\n    this.updateGlareSize();\n    this.updateClientSize();\n  };\n\n  VanillaTilt.prototype.setTransition = function setTransition() {\n    var _this = this;\n\n    clearTimeout(this.transitionTimeout);\n    this.element.style.transition = this.settings.speed + \"ms \" + this.settings.easing;\n    if (this.glare) this.glareElement.style.transition = \"opacity \" + this.settings.speed + \"ms \" + this.settings.easing;\n\n    this.transitionTimeout = setTimeout(function () {\n      _this.element.style.transition = \"\";\n      if (_this.glare) {\n        _this.glareElement.style.transition = \"\";\n      }\n    }, this.settings.speed);\n  };\n\n  /**\r\n   * Method return patched settings of instance\r\n   * @param {boolean} settings.reverse - reverse the tilt direction\r\n   * @param {number} settings.max - max tilt rotation (degrees)\r\n   * @param {startX} settings.startX - the starting tilt on the X axis, in degrees. Default: 0\r\n   * @param {startY} settings.startY - the starting tilt on the Y axis, in degrees. Default: 0\r\n   * @param {number} settings.perspective - Transform perspective, the lower the more extreme the tilt gets\r\n   * @param {string} settings.easing - Easing on enter/exit\r\n   * @param {number} settings.scale - 2 = 200%, 1.5 = 150%, etc..\r\n   * @param {number} settings.speed - Speed of the enter/exit transition\r\n   * @param {boolean} settings.transition - Set a transition on enter/exit\r\n   * @param {string|null} settings.axis - What axis should be enabled. Can be \"x\" or \"y\"\r\n   * @param {boolean} settings.glare - if it should have a \"glare\" effect\r\n   * @param {number} settings.max-glare - the maximum \"glare\" opacity (1 = 100%, 0.5 = 50%)\r\n   * @param {boolean} settings.glare-prerender - false = VanillaTilt creates the glare elements for you, otherwise\r\n   * @param {boolean} settings.full-page-listening - If true, parallax effect will listen to mouse move events on the whole document, not only the selected element\r\n   * @param {string|object} settings.mouse-event-element - String selector or link to HTML-element what will be listen mouse events\r\n   * @param {boolean} settings.reset - false = If the tilt effect has to be reset on exit\r\n   * @param {boolean} settings.reset-to-start - true = On reset event (mouse leave) will return to initial start angle (if startX or startY is set)\r\n   * @param {gyroscope} settings.gyroscope - Enable tilting by deviceorientation events\r\n   * @param {gyroscopeSensitivity} settings.gyroscopeSensitivity - Between 0 and 1 - The angle at which max tilt position is reached. 1 = 90deg, 0.5 = 45deg, etc..\r\n   * @param {gyroscopeSamples} settings.gyroscopeSamples - How many gyroscope moves to decide the starting position.\r\n   */\n\n\n  VanillaTilt.prototype.extendSettings = function extendSettings(settings) {\n    var defaultSettings = {\n      reverse: false,\n      max: 15,\n      startX: 0,\n      startY: 0,\n      perspective: 1000,\n      easing: \"cubic-bezier(.03,.98,.52,.99)\",\n      scale: 1,\n      speed: 300,\n      transition: true,\n      axis: null,\n      glare: false,\n      \"max-glare\": 1,\n      \"glare-prerender\": false,\n      \"full-page-listening\": false,\n      \"mouse-event-element\": null,\n      reset: true,\n      \"reset-to-start\": true,\n      gyroscope: true,\n      gyroscopeMinAngleX: -45,\n      gyroscopeMaxAngleX: 45,\n      gyroscopeMinAngleY: -45,\n      gyroscopeMaxAngleY: 45,\n      gyroscopeSamples: 10\n    };\n\n    var newSettings = {};\n    for (var property in defaultSettings) {\n      if (property in settings) {\n        newSettings[property] = settings[property];\n      } else if (this.element.hasAttribute(\"data-tilt-\" + property)) {\n        var attribute = this.element.getAttribute(\"data-tilt-\" + property);\n        try {\n          newSettings[property] = JSON.parse(attribute);\n        } catch (e) {\n          newSettings[property] = attribute;\n        }\n      } else {\n        newSettings[property] = defaultSettings[property];\n      }\n    }\n\n    return newSettings;\n  };\n\n  VanillaTilt.init = function init(elements, settings) {\n    if (elements instanceof Node) {\n      elements = [elements];\n    }\n\n    if (elements instanceof NodeList) {\n      elements = [].slice.call(elements);\n    }\n\n    if (!(elements instanceof Array)) {\n      return;\n    }\n\n    elements.forEach(function (element) {\n      if (!(\"vanillaTilt\" in element)) {\n        element.vanillaTilt = new VanillaTilt(element, settings);\n      }\n    });\n  };\n\n  return VanillaTilt;\n}();\n\nif (typeof document !== \"undefined\") {\n  /* expose the class to window */\n  window.VanillaTilt = VanillaTilt;\n\n  /**\r\n   * Auto load\r\n   */\n  VanillaTilt.init(document.querySelectorAll(\"[data-tilt]\"));\n}\n\nmodule.exports = VanillaTilt;\n\n\n//# sourceURL=webpack://portfolio/./node_modules/vanilla-tilt/lib/vanilla-tilt.js?");

/***/ }),

/***/ "./src/images/index_about.jpg":
/*!************************************!*\
  !*** ./src/images/index_about.jpg ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"d1dc5eb0542fae96f367.jpg\";\n\n//# sourceURL=webpack://portfolio/./src/images/index_about.jpg?");

/***/ }),

/***/ "./src/images/index_contact.jpg":
/*!**************************************!*\
  !*** ./src/images/index_contact.jpg ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"02b027047d831ad57646.jpg\";\n\n//# sourceURL=webpack://portfolio/./src/images/index_contact.jpg?");

/***/ }),

/***/ "./src/images/index_skill.jpg":
/*!************************************!*\
  !*** ./src/images/index_skill.jpg ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"cf5c7180b3f6d12a31a8.jpg\";\n\n//# sourceURL=webpack://portfolio/./src/images/index_skill.jpg?");

/***/ }),

/***/ "./src/images/index_work.jpg":
/*!***********************************!*\
  !*** ./src/images/index_work.jpg ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f89ca3a16bd6732eddba.jpg\";\n\n//# sourceURL=webpack://portfolio/./src/images/index_work.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"top": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;