"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[12].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[12].use[2]!./styles/global.css":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[12].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[12].use[2]!./styles/global.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Global Styles */\\r\\n\\r\\n:root {\\r\\n  --primary-color: #B3E5FC;\\r\\n  --secondary-color: #F5F5F5;\\r\\n  --text-color: #424242;\\r\\n  --accent-color: #A5D6A7;\\r\\n  --error-color: #EF9A9A;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: Arial, sans-serif;\\r\\n  background-color: var(--secondary-color);\\r\\n  color: var(--text-color);\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  line-height: 1.6;\\r\\n}\\r\\n\\r\\n/* Form Container - Consistent style for all forms */\\r\\n.form-container {\\r\\n  background-color: #fff;\\r\\n  max-width: 700px;\\r\\n  margin: 2rem auto;\\r\\n  padding: 2rem;\\r\\n  border-radius: 8px;\\r\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n\\r\\n/* Section Headings */\\r\\n/* Section Headings with Dark Color and Light Background */\\r\\nh2, h3 {\\r\\n  text-align: center;\\r\\n  color: var(--text-color); /* Dark color for headings */\\r\\n  background-color: #E3F2FD; /* Light background for headings */\\r\\n  padding: 0.5rem;\\r\\n  border-radius: 5px;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n/* Two-Column Layout specifically for Loan and Insurance Details Forms */\\r\\n.loan-form .field-group,\\r\\n.insurance-form .field-group {\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    gap: 1rem;\\r\\n    margin-top: 1rem;\\r\\n}\\r\\n\\r\\n/* Each field in Loan and Insurance forms takes up half the width */\\r\\n.loan-form .field-group > div,\\r\\n.insurance-form .field-group > div {\\r\\n    flex: 1 1 48%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n/* Responsive design for smaller screens */\\r\\n@media (max-width: 768px) {\\r\\n  .loan-form .field-group > div,\\r\\n  .insurance-form .field-group > div {\\r\\n      flex: 1 1 100%;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* Labels and Input Fields */\\r\\nlabel {\\r\\n  font-weight: bold;\\r\\n  font-size: 0.9rem;\\r\\n  margin-bottom: 0.3rem;\\r\\n}\\r\\n\\r\\ninput[type=\\\"text\\\"], input[type=\\\"number\\\"], select {\\r\\n  padding: 0.8rem;\\r\\n  font-size: 0.9rem;\\r\\n  border: 1px solid #ddd;\\r\\n  border-radius: 5px;\\r\\n  width: 100%;\\r\\n  background-color: #ffffff;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n/* Error Message */\\r\\n.error {\\r\\n  color: var(--error-color);\\r\\n  font-size: 0.8rem;\\r\\n  margin-top: 0.25rem;\\r\\n}\\r\\n\\r\\n/* Button Group for Navigation */\\r\\n/* Button Group for Navigation */\\r\\n.button-group {\\r\\n  display: flex;\\r\\n  justify-content: space-between; /* Ensures previous and next buttons stay at the edges */\\r\\n  margin-top: 1.5rem;\\r\\n}\\r\\n\\r\\n.prev-button, .next-button {\\r\\n  padding: 0.5rem 1.25rem;\\r\\n  color: #fff;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n  font-size: 0.9rem;\\r\\n  cursor: pointer;\\r\\n  transition: background-color 0.3s ease;\\r\\n}\\r\\n\\r\\n\\r\\n/* Previous Button */\\r\\n.prev-button {\\r\\n  background-color: #5A6268; /* Darker gray for better visibility */\\r\\n}\\r\\n\\r\\n.next-button {\\r\\n  background-color: #2196F3; /* Rich blue for the next button */\\r\\n}\\r\\n\\r\\n/* Hover Effects */\\r\\n.prev-button:hover {\\r\\n  background-color: #495057;\\r\\n}\\r\\n\\r\\n.next-button:hover {\\r\\n  background-color: #1E88E5;\\r\\n}\\r\\n\\r\\n/* Summary Page Styles */\\r\\n.summary-container {\\r\\n  max-width: 800px;\\r\\n  margin: 2rem auto;\\r\\n  padding: 2rem;\\r\\n  background-color: #fff;\\r\\n  border-radius: 8px;\\r\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n\\r\\n.advisory-content {\\r\\n  font-size: 1rem;\\r\\n  color: var(--text-color);\\r\\n  line-height: 1.6;\\r\\n  margin-top: 1rem;\\r\\n}\\r\\n\\r\\n/* Download and Reset Buttons */\\r\\n.download-button, .reset-button {\\r\\n  padding: 0.75rem 1.5rem;\\r\\n  font-size: 1rem;\\r\\n  color: #fff;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n  cursor: pointer;\\r\\n  transition: background-color 0.3s ease;\\r\\n}\\r\\n\\r\\n.download-button {\\r\\n  background-color: var(--primary-color);\\r\\n}\\r\\n\\r\\n.reset-button {\\r\\n  background-color: var(--error-color);\\r\\n}\\r\\n\\r\\n.download-button:hover, .reset-button:hover {\\r\\n  opacity: 0.9;\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/global.css\"],\"names\":[],\"mappings\":\"AAAA,kBAAkB;;AAElB;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,qBAAqB;EACrB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,8BAA8B;EAC9B,wCAAwC;EACxC,wBAAwB;EACxB,SAAS;EACT,UAAU;EACV,gBAAgB;AAClB;;AAEA,oDAAoD;AACpD;EACE,sBAAsB;EACtB,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;EACb,kBAAkB;EAClB,wCAAwC;AAC1C;;AAEA,qBAAqB;AACrB,0DAA0D;AAC1D;EACE,kBAAkB;EAClB,wBAAwB,EAAE,4BAA4B;EACtD,yBAAyB,EAAE,kCAAkC;EAC7D,eAAe;EACf,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA,wEAAwE;AACxE;;IAEI,aAAa;IACb,eAAe;IACf,SAAS;IACT,gBAAgB;AACpB;;AAEA,mEAAmE;AACnE;;IAEI,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA,0CAA0C;AAC1C;EACE;;MAEI,cAAc;EAClB;AACF;;AAEA,4BAA4B;AAC5B;EACE,iBAAiB;EACjB,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;EACX,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA,kBAAkB;AAClB;EACE,yBAAyB;EACzB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA,gCAAgC;AAChC,gCAAgC;AAChC;EACE,aAAa;EACb,8BAA8B,EAAE,wDAAwD;EACxF,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,sCAAsC;AACxC;;;AAGA,oBAAoB;AACpB;EACE,yBAAyB,EAAE,sCAAsC;AACnE;;AAEA;EACE,yBAAyB,EAAE,kCAAkC;AAC/D;;AAEA,kBAAkB;AAClB;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,wBAAwB;AACxB;EACE,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,wCAAwC;AAC1C;;AAEA;EACE,eAAe;EACf,wBAAwB;EACxB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA,+BAA+B;AAC/B;EACE,uBAAuB;EACvB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,YAAY;AACd\",\"sourcesContent\":[\"/* Global Styles */\\r\\n\\r\\n:root {\\r\\n  --primary-color: #B3E5FC;\\r\\n  --secondary-color: #F5F5F5;\\r\\n  --text-color: #424242;\\r\\n  --accent-color: #A5D6A7;\\r\\n  --error-color: #EF9A9A;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: Arial, sans-serif;\\r\\n  background-color: var(--secondary-color);\\r\\n  color: var(--text-color);\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  line-height: 1.6;\\r\\n}\\r\\n\\r\\n/* Form Container - Consistent style for all forms */\\r\\n.form-container {\\r\\n  background-color: #fff;\\r\\n  max-width: 700px;\\r\\n  margin: 2rem auto;\\r\\n  padding: 2rem;\\r\\n  border-radius: 8px;\\r\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n\\r\\n/* Section Headings */\\r\\n/* Section Headings with Dark Color and Light Background */\\r\\nh2, h3 {\\r\\n  text-align: center;\\r\\n  color: var(--text-color); /* Dark color for headings */\\r\\n  background-color: #E3F2FD; /* Light background for headings */\\r\\n  padding: 0.5rem;\\r\\n  border-radius: 5px;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n/* Two-Column Layout specifically for Loan and Insurance Details Forms */\\r\\n.loan-form .field-group,\\r\\n.insurance-form .field-group {\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    gap: 1rem;\\r\\n    margin-top: 1rem;\\r\\n}\\r\\n\\r\\n/* Each field in Loan and Insurance forms takes up half the width */\\r\\n.loan-form .field-group > div,\\r\\n.insurance-form .field-group > div {\\r\\n    flex: 1 1 48%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n/* Responsive design for smaller screens */\\r\\n@media (max-width: 768px) {\\r\\n  .loan-form .field-group > div,\\r\\n  .insurance-form .field-group > div {\\r\\n      flex: 1 1 100%;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* Labels and Input Fields */\\r\\nlabel {\\r\\n  font-weight: bold;\\r\\n  font-size: 0.9rem;\\r\\n  margin-bottom: 0.3rem;\\r\\n}\\r\\n\\r\\ninput[type=\\\"text\\\"], input[type=\\\"number\\\"], select {\\r\\n  padding: 0.8rem;\\r\\n  font-size: 0.9rem;\\r\\n  border: 1px solid #ddd;\\r\\n  border-radius: 5px;\\r\\n  width: 100%;\\r\\n  background-color: #ffffff;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n/* Error Message */\\r\\n.error {\\r\\n  color: var(--error-color);\\r\\n  font-size: 0.8rem;\\r\\n  margin-top: 0.25rem;\\r\\n}\\r\\n\\r\\n/* Button Group for Navigation */\\r\\n/* Button Group for Navigation */\\r\\n.button-group {\\r\\n  display: flex;\\r\\n  justify-content: space-between; /* Ensures previous and next buttons stay at the edges */\\r\\n  margin-top: 1.5rem;\\r\\n}\\r\\n\\r\\n.prev-button, .next-button {\\r\\n  padding: 0.5rem 1.25rem;\\r\\n  color: #fff;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n  font-size: 0.9rem;\\r\\n  cursor: pointer;\\r\\n  transition: background-color 0.3s ease;\\r\\n}\\r\\n\\r\\n\\r\\n/* Previous Button */\\r\\n.prev-button {\\r\\n  background-color: #5A6268; /* Darker gray for better visibility */\\r\\n}\\r\\n\\r\\n.next-button {\\r\\n  background-color: #2196F3; /* Rich blue for the next button */\\r\\n}\\r\\n\\r\\n/* Hover Effects */\\r\\n.prev-button:hover {\\r\\n  background-color: #495057;\\r\\n}\\r\\n\\r\\n.next-button:hover {\\r\\n  background-color: #1E88E5;\\r\\n}\\r\\n\\r\\n/* Summary Page Styles */\\r\\n.summary-container {\\r\\n  max-width: 800px;\\r\\n  margin: 2rem auto;\\r\\n  padding: 2rem;\\r\\n  background-color: #fff;\\r\\n  border-radius: 8px;\\r\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n\\r\\n.advisory-content {\\r\\n  font-size: 1rem;\\r\\n  color: var(--text-color);\\r\\n  line-height: 1.6;\\r\\n  margin-top: 1rem;\\r\\n}\\r\\n\\r\\n/* Download and Reset Buttons */\\r\\n.download-button, .reset-button {\\r\\n  padding: 0.75rem 1.5rem;\\r\\n  font-size: 1rem;\\r\\n  color: #fff;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n  cursor: pointer;\\r\\n  transition: background-color 0.3s ease;\\r\\n}\\r\\n\\r\\n.download-button {\\r\\n  background-color: var(--primary-color);\\r\\n}\\r\\n\\r\\n.reset-button {\\r\\n  background-color: var(--error-color);\\r\\n}\\r\\n\\r\\n.download-button:hover, .reset-button:hover {\\r\\n  opacity: 0.9;\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZlsxMl0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzEyXS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFsLmNzcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUN3SDtBQUN4SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsNEVBQTRFLCtCQUErQixpQ0FBaUMsNEJBQTRCLDhCQUE4Qiw2QkFBNkIsS0FBSyxjQUFjLHFDQUFxQywrQ0FBK0MsK0JBQStCLGdCQUFnQixpQkFBaUIsdUJBQXVCLEtBQUssa0ZBQWtGLDZCQUE2Qix1QkFBdUIsd0JBQXdCLG9CQUFvQix5QkFBeUIsK0NBQStDLEtBQUsseUdBQXlHLHlCQUF5QixnQ0FBZ0MsOERBQThELHlEQUF5RCx5QkFBeUIsMEJBQTBCLEtBQUssK0lBQStJLHNCQUFzQix3QkFBd0Isa0JBQWtCLHlCQUF5QixLQUFLLHNKQUFzSixzQkFBc0Isc0JBQXNCLCtCQUErQixLQUFLLGtGQUFrRiw4RUFBOEUseUJBQXlCLE9BQU8sS0FBSyxnREFBZ0Qsd0JBQXdCLHdCQUF3Qiw0QkFBNEIsS0FBSyw4REFBOEQsc0JBQXNCLHdCQUF3Qiw2QkFBNkIseUJBQXlCLGtCQUFrQixnQ0FBZ0MsNkJBQTZCLEtBQUssdUNBQXVDLGdDQUFnQyx3QkFBd0IsMEJBQTBCLEtBQUssaUdBQWlHLG9CQUFvQixzQ0FBc0Msa0ZBQWtGLEtBQUssb0NBQW9DLDhCQUE4QixrQkFBa0IsbUJBQW1CLHlCQUF5Qix3QkFBd0Isc0JBQXNCLDZDQUE2QyxLQUFLLG1EQUFtRCxpQ0FBaUMsNENBQTRDLHNCQUFzQixpQ0FBaUMsd0NBQXdDLG1E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QUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJEOlxcRmluYW5jZTFcXHN0eWxlc1xcZ2xvYmFsLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogR2xvYmFsIFN0eWxlcyAqL1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tcHJpbWFyeS1jb2xvcjogI0IzRTVGQztcXHJcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjRjVGNUY1O1xcclxcbiAgLS10ZXh0LWNvbG9yOiAjNDI0MjQyO1xcclxcbiAgLS1hY2NlbnQtY29sb3I6ICNBNUQ2QTc7XFxyXFxuICAtLWVycm9yLWNvbG9yOiAjRUY5QTlBO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9ybSBDb250YWluZXIgLSBDb25zaXN0ZW50IHN0eWxlIGZvciBhbGwgZm9ybXMgKi9cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIG1heC13aWR0aDogNzAwcHg7XFxyXFxuICBtYXJnaW46IDJyZW0gYXV0bztcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTZWN0aW9uIEhlYWRpbmdzICovXFxyXFxuLyogU2VjdGlvbiBIZWFkaW5ncyB3aXRoIERhcmsgQ29sb3IgYW5kIExpZ2h0IEJhY2tncm91bmQgKi9cXHJcXG5oMiwgaDMge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpOyAvKiBEYXJrIGNvbG9yIGZvciBoZWFkaW5ncyAqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UzRjJGRDsgLyogTGlnaHQgYmFja2dyb3VuZCBmb3IgaGVhZGluZ3MgKi9cXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi8qIFR3by1Db2x1bW4gTGF5b3V0IHNwZWNpZmljYWxseSBmb3IgTG9hbiBhbmQgSW5zdXJhbmNlIERldGFpbHMgRm9ybXMgKi9cXHJcXG4ubG9hbi1mb3JtIC5maWVsZC1ncm91cCxcXHJcXG4uaW5zdXJhbmNlLWZvcm0gLmZpZWxkLWdyb3VwIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi8qIEVhY2ggZmllbGQgaW4gTG9hbiBhbmQgSW5zdXJhbmNlIGZvcm1zIHRha2VzIHVwIGhhbGYgdGhlIHdpZHRoICovXFxyXFxuLmxvYW4tZm9ybSAuZmllbGQtZ3JvdXAgPiBkaXYsXFxyXFxuLmluc3VyYW5jZS1mb3JtIC5maWVsZC1ncm91cCA+IGRpdiB7XFxyXFxuICAgIGZsZXg6IDEgMSA0OCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi8qIFJlc3BvbnNpdmUgZGVzaWduIGZvciBzbWFsbGVyIHNjcmVlbnMgKi9cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5sb2FuLWZvcm0gLmZpZWxkLWdyb3VwID4gZGl2LFxcclxcbiAgLmluc3VyYW5jZS1mb3JtIC5maWVsZC1ncm91cCA+IGRpdiB7XFxyXFxuICAgICAgZmxleDogMSAxIDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIExhYmVscyBhbmQgSW5wdXQgRmllbGRzICovXFxyXFxubGFiZWwge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSwgc2VsZWN0IHtcXHJcXG4gIHBhZGRpbmc6IDAuOHJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIEVycm9yIE1lc3NhZ2UgKi9cXHJcXG4uZXJyb3Ige1xcclxcbiAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQnV0dG9uIEdyb3VwIGZvciBOYXZpZ2F0aW9uICovXFxyXFxuLyogQnV0dG9uIEdyb3VwIGZvciBOYXZpZ2F0aW9uICovXFxyXFxuLmJ1dHRvbi1ncm91cCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAvKiBFbnN1cmVzIHByZXZpb3VzIGFuZCBuZXh0IGJ1dHRvbnMgc3RheSBhdCB0aGUgZWRnZXMgKi9cXHJcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByZXYtYnV0dG9uLCAubmV4dC1idXR0b24ge1xcclxcbiAgcGFkZGluZzogMC41cmVtIDEuMjVyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFByZXZpb3VzIEJ1dHRvbiAqL1xcclxcbi5wcmV2LWJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUE2MjY4OyAvKiBEYXJrZXIgZ3JheSBmb3IgYmV0dGVyIHZpc2liaWxpdHkgKi9cXHJcXG59XFxyXFxuXFxyXFxuLm5leHQtYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7IC8qIFJpY2ggYmx1ZSBmb3IgdGhlIG5leHQgYnV0dG9uICovXFxyXFxufVxcclxcblxcclxcbi8qIEhvdmVyIEVmZmVjdHMgKi9cXHJcXG4ucHJldi1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NztcXHJcXG59XFxyXFxuXFxyXFxuLm5leHQtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxRTg4RTU7XFxyXFxufVxcclxcblxcclxcbi8qIFN1bW1hcnkgUGFnZSBTdHlsZXMgKi9cXHJcXG4uc3VtbWFyeS1jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiA4MDBweDtcXHJcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWR2aXNvcnktY29udGVudCB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRG93bmxvYWQgYW5kIFJlc2V0IEJ1dHRvbnMgKi9cXHJcXG4uZG93bmxvYWQtYnV0dG9uLCAucmVzZXQtYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvd25sb2FkLWJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0LWJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5kb3dubG9hZC1idXR0b246aG92ZXIsIC5yZXNldC1idXR0b246aG92ZXIge1xcclxcbiAgb3BhY2l0eTogMC45O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0JBQWtCOztBQUVsQjtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsd0NBQXdDO0VBQ3hDLHdCQUF3QjtFQUN4QixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQSxvREFBb0Q7QUFDcEQ7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHdDQUF3QztBQUMxQzs7QUFFQSxxQkFBcUI7QUFDckIsMERBQTBEO0FBQzFEO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QixFQUFFLDRCQUE0QjtFQUN0RCx5QkFBeUIsRUFBRSxrQ0FBa0M7RUFDN0QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUEsd0VBQXdFO0FBQ3hFOztJQUVJLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQSxtRUFBbUU7QUFDbkU7O0lBRUksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUEsMENBQTBDO0FBQzFDO0VBQ0U7O01BRUksY0FBYztFQUNsQjtBQUNGOztBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBLGdDQUFnQztBQUNoQyxnQ0FBZ0M7QUFDaEM7RUFDRSxhQUFhO0VBQ2IsOEJBQThCLEVBQUUsd0RBQXdEO0VBQ3hGLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHNDQUFzQztBQUN4Qzs7O0FBR0Esb0JBQW9CO0FBQ3BCO0VBQ0UseUJBQXlCLEVBQUUsc0NBQXNDO0FBQ25FOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUsa0NBQWtDO0FBQy9EOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR2xvYmFsIFN0eWxlcyAqL1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tcHJpbWFyeS1jb2xvcjogI0IzRTVGQztcXHJcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjRjVGNUY1O1xcclxcbiAgLS10ZXh0LWNvbG9yOiAjNDI0MjQyO1xcclxcbiAgLS1hY2NlbnQtY29sb3I6ICNBNUQ2QTc7XFxyXFxuICAtLWVycm9yLWNvbG9yOiAjRUY5QTlBO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9ybSBDb250YWluZXIgLSBDb25zaXN0ZW50IHN0eWxlIGZvciBhbGwgZm9ybXMgKi9cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIG1heC13aWR0aDogNzAwcHg7XFxyXFxuICBtYXJnaW46IDJyZW0gYXV0bztcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTZWN0aW9uIEhlYWRpbmdzICovXFxyXFxuLyogU2VjdGlvbiBIZWFkaW5ncyB3aXRoIERhcmsgQ29sb3IgYW5kIExpZ2h0IEJhY2tncm91bmQgKi9cXHJcXG5oMiwgaDMge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpOyAvKiBEYXJrIGNvbG9yIGZvciBoZWFkaW5ncyAqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UzRjJGRDsgLyogTGlnaHQgYmFja2dyb3VuZCBmb3IgaGVhZGluZ3MgKi9cXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi8qIFR3by1Db2x1bW4gTGF5b3V0IHNwZWNpZmljYWxseSBmb3IgTG9hbiBhbmQgSW5zdXJhbmNlIERldGFpbHMgRm9ybXMgKi9cXHJcXG4ubG9hbi1mb3JtIC5maWVsZC1ncm91cCxcXHJcXG4uaW5zdXJhbmNlLWZvcm0gLmZpZWxkLWdyb3VwIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi8qIEVhY2ggZmllbGQgaW4gTG9hbiBhbmQgSW5zdXJhbmNlIGZvcm1zIHRha2VzIHVwIGhhbGYgdGhlIHdpZHRoICovXFxyXFxuLmxvYW4tZm9ybSAuZmllbGQtZ3JvdXAgPiBkaXYsXFxyXFxuLmluc3VyYW5jZS1mb3JtIC5maWVsZC1ncm91cCA+IGRpdiB7XFxyXFxuICAgIGZsZXg6IDEgMSA0OCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi8qIFJlc3BvbnNpdmUgZGVzaWduIGZvciBzbWFsbGVyIHNjcmVlbnMgKi9cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5sb2FuLWZvcm0gLmZpZWxkLWdyb3VwID4gZGl2LFxcclxcbiAgLmluc3VyYW5jZS1mb3JtIC5maWVsZC1ncm91cCA+IGRpdiB7XFxyXFxuICAgICAgZmxleDogMSAxIDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIExhYmVscyBhbmQgSW5wdXQgRmllbGRzICovXFxyXFxubGFiZWwge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSwgc2VsZWN0IHtcXHJcXG4gIHBhZGRpbmc6IDAuOHJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIEVycm9yIE1lc3NhZ2UgKi9cXHJcXG4uZXJyb3Ige1xcclxcbiAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQnV0dG9uIEdyb3VwIGZvciBOYXZpZ2F0aW9uICovXFxyXFxuLyogQnV0dG9uIEdyb3VwIGZvciBOYXZpZ2F0aW9uICovXFxyXFxuLmJ1dHRvbi1ncm91cCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAvKiBFbnN1cmVzIHByZXZpb3VzIGFuZCBuZXh0IGJ1dHRvbnMgc3RheSBhdCB0aGUgZWRnZXMgKi9cXHJcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByZXYtYnV0dG9uLCAubmV4dC1idXR0b24ge1xcclxcbiAgcGFkZGluZzogMC41cmVtIDEuMjVyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFByZXZpb3VzIEJ1dHRvbiAqL1xcclxcbi5wcmV2LWJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUE2MjY4OyAvKiBEYXJrZXIgZ3JheSBmb3IgYmV0dGVyIHZpc2liaWxpdHkgKi9cXHJcXG59XFxyXFxuXFxyXFxuLm5leHQtYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7IC8qIFJpY2ggYmx1ZSBmb3IgdGhlIG5leHQgYnV0dG9uICovXFxyXFxufVxcclxcblxcclxcbi8qIEhvdmVyIEVmZmVjdHMgKi9cXHJcXG4ucHJldi1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NztcXHJcXG59XFxyXFxuXFxyXFxuLm5leHQtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxRTg4RTU7XFxyXFxufVxcclxcblxcclxcbi8qIFN1bW1hcnkgUGFnZSBTdHlsZXMgKi9cXHJcXG4uc3VtbWFyeS1jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiA4MDBweDtcXHJcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWR2aXNvcnktY29udGVudCB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRG93bmxvYWQgYW5kIFJlc2V0IEJ1dHRvbnMgKi9cXHJcXG4uZG93bmxvYWQtYnV0dG9uLCAucmVzZXQtYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvd25sb2FkLWJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0LWJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5kb3dubG9hZC1idXR0b246aG92ZXIsIC5yZXNldC1idXR0b246aG92ZXIge1xcclxcbiAgb3BhY2l0eTogMC45O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[12].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[12].use[2]!./styles/global.css\n"));

/***/ })

});