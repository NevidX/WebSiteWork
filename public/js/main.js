/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const burger = __webpack_require__(/*! ./module/burger.js */ \"./src/js/module/burger.js\");\n\n//# sourceURL=webpack://WorkDirectory/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/burger.js":
/*!*********************************!*\
  !*** ./src/js/module/burger.js ***!
  \*********************************/
/***/ (function() {

eval("\r\nconst burgerTrigger = document.querySelectorAll(\".burger__trigger\");\r\nconst burgerBody = document.querySelectorAll(\".burger__body\");\r\nlet subMenu = document.querySelectorAll(\".header__nav-sub-menu\")\r\nlet navItem = document.querySelectorAll(\".header__nav-item\")\r\nconst style = \"active\";\r\nconst contentWidth = \"100vh\";\r\n\r\n\r\nburgerTrigger.forEach((item, i) => {\r\n    burgerBody[i].style.height = \"0\";\r\n    item.addEventListener(\"click\", () => {\r\n        if (!(style === \"none\")) {\r\n            item.classList.toggle(style);\r\n        }\r\n        if ((item.classList.contains(\"active\"))) {\r\n            document.getElementById(\"body\").style.overflow = \"hidden\"\r\n        } else {\r\n            document.getElementById(\"body\").style.overflowY = \"scroll\"\r\n        }\r\n        if (burgerBody[i].style.height === \"0px\") {\r\n            burgerBody[i].style.height = contentWidth;\r\n        } else {\r\n            burgerBody[i].style.height = \"0\";\r\n        }\r\n    });\r\n    window.addEventListener(\"resize\", () => {\r\n        let pageWidth = document.documentElement.scrollWidth;\r\n        if (pageWidth >= 1000) {\r\n            burgerBody[i].style.height = \"0\";\r\n            item.classList.remove(\"active\")\r\n        }\r\n        if (!(item.classList.contains(\"active\"))) {\r\n            document.getElementByTagName(\"body\").style.overflowY = \"scroll\" // Don't forget add ID to <body id=\"body\"></body>\r\n        }\r\n    })\r\n});\r\n\r\n\r\n\r\nnavItem.forEach((nav) => {\r\n    nav.addEventListener(\"click\", (event) => {\r\n        let currentItem = event.target.nextElementSibling\r\n        currentItem.classList.toggle(\"sub-menu-active\")\r\n    })\r\n})\r\n\n\n//# sourceURL=webpack://WorkDirectory/./src/js/module/burger.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;