// ==UserScript==
// @name         Reina's AniList Userscript
// @version      0.1.0.2021.4.20.23.31
// @description  Does stuff to AniList that you will like.
// @author       Reina
// @match        *://anilist.co/*
// @match        *://www.anilist.co/*
// @namespace    https://github.com/Reinachan
// @run-at       document-start
// ==/UserScript==
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@typed/compose/lib.es2015/compose.js":
/*!***********************************************************!*\
  !*** ./node_modules/@typed/compose/lib.es2015/compose.js ***!
  \***********************************************************/
/*! exports provided: compose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
function compose() {
    switch (arguments.length) {
        case 1: return _compose1(arguments[0]);
        case 2: return _compose2(arguments[0], arguments[1]);
        case 3: return _compose3(arguments[0], arguments[1], arguments[2]);
        case 4: return _compose4(arguments[0], arguments[1], arguments[2], arguments[3]);
        case 5: return _compose5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    }
    ;
}
function _compose1(f) {
    return function compose1Fn(a) {
        return f(a);
    };
}
function _compose2(g, f) {
    return function compose2Fn(a) {
        return g(f(a));
    };
}
function _compose3(h, g, f) {
    return function compose3Fn(a) {
        return h(g(f(a)));
    };
}
function _compose4(i, h, g, f) {
    return function compose3Fn(a) {
        return i(h(g(f(a))));
    };
}
function _compose5(j, i, h, g, f) {
    return function compose5Fn(a) {
        return j(i(h(g(f(a)))));
    };
}
//# sourceMappingURL=compose.js.map

/***/ }),

/***/ "./node_modules/@typed/compose/lib.es2015/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@typed/compose/lib.es2015/index.js ***!
  \*********************************************************/
/*! exports provided: compose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compose */ "./node_modules/@typed/compose/lib.es2015/compose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _compose__WEBPACK_IMPORTED_MODULE_0__["compose"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/lines-unlines/dist/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/lines-unlines/dist/index.mjs ***!
  \***************************************************/
/*! exports provided: lines, unlines */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lines", function() { return lines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unlines", function() { return unlines; });
function lines(s) {
    return s === "" ? [] : s.replace(/\n$/, "").split("\n");
}
function unlines(ls) {
    return ls.map(line => line + "\n").join("");
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ts-type-guards/dist/array.mjs":
/*!****************************************************!*\
  !*** ./node_modules/ts-type-guards/dist/array.mjs ***!
  \****************************************************/
/*! exports provided: isArrayOfBooleans, isArrayOfNumbers, isArrayOfStrings, isArrayOfSymbols, isArrayOfNulls, isArrayOfUndefineds, isArrayOfPrimitives, isArrayOfObjects, isArrayOf, isArrayOfLike */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayOfBooleans", function() { return isArrayOfBooleans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayOfNumbers", function() { return isArrayOfNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayOfStrings", function() { return isArrayOfStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayOfSymbols", function() { return isArrayOfSymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayOfNulls", function() { return isArrayOfNulls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayOfUndefineds", function() { return isArrayOfUndefineds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayOfPrimitives", function() { return isArrayOfPrimitives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayOfObjects", function() { return isArrayOfObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayOf", function() { return isArrayOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayOfLike", function() { return isArrayOfLike; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/ts-type-guards/dist/is.mjs");

function isArrayOfBooleans(x) {
    return isArrayOfLike(true)(x);
}
function isArrayOfNumbers(x) {
    return isArrayOfLike(1)(x);
}
function isArrayOfStrings(x) {
    return isArrayOfLike("")(x);
}
function isArrayOfSymbols(x) {
    return isArrayOfLike(Symbol())(x);
}
function isArrayOfNulls(x) {
    return isArrayOfLike(null)(x);
}
function isArrayOfUndefineds(x) {
    return isArrayOfLike(undefined)(x);
}
function isArrayOfPrimitives(x) {
    return Object(_is__WEBPACK_IMPORTED_MODULE_0__["is"])(Array)(x) && x.every(_is__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"]);
}
function isArrayOfObjects(x) {
    return Object(_is__WEBPACK_IMPORTED_MODULE_0__["is"])(Array)(x) && x.every(_is__WEBPACK_IMPORTED_MODULE_0__["isNonPrimitive"]);
}
function isArrayOf(type) {
    return (xs) => Object(_is__WEBPACK_IMPORTED_MODULE_0__["is"])(Array)(xs) && xs.every(Object(_is__WEBPACK_IMPORTED_MODULE_0__["is"])(type));
}
function isArrayOfLike(reference) {
    return (x) => Object(_is__WEBPACK_IMPORTED_MODULE_0__["is"])(Array)(x) && x.every(Object(_is__WEBPACK_IMPORTED_MODULE_0__["isLike"])(reference));
}
//# sourceMappingURL=array.js.map

/***/ }),

/***/ "./node_modules/ts-type-guards/dist/index.mjs":
/*!****************************************************!*\
  !*** ./node_modules/ts-type-guards/dist/index.mjs ***!
  \****************************************************/
/*! exports provided: isBoolean, isNumber, isString, isSymbol, isNull, isUndefined, isPrimitive, isNonPrimitive, is, isLike, isArrayOfBooleans, isArrayOfNumbers, isArrayOfStrings, isArrayOfSymbols, isArrayOfNulls, isArrayOfUndefineds, isArrayOfPrimitives, isArrayOfObjects, isArrayOf, isArrayOfLike, onlyBooleans, onlyNumbers, onlyStrings, onlySymbols, onlyNulls, onlyUndefineds, onlyPrimitives, onlyObjects, only, onlyLike */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/ts-type-guards/dist/is.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _is__WEBPACK_IMPORTED_MODULE_0__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _is__WEBPACK_IMPORTED_MODULE_0__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _is__WEBPACK_IMPORTED_MODULE_0__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return _is__WEBPACK_IMPORTED_MODULE_0__["isSymbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return _is__WEBPACK_IMPORTED_MODULE_0__["isNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _is__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _is__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNonPrimitive", function() { return _is__WEBPACK_IMPORTED_MODULE_0__["isNonPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "is", function() { return _is__WEBPACK_IMPORTED_MODULE_0__["is"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLike", function() { return _is__WEBPACK_IMPORTED_MODULE_0__["isLike"]; });

/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/ts-type-guards/dist/array.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayOfBooleans", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["isArrayOfBooleans"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayOfNumbers", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["isArrayOfNumbers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayOfStrings", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["isArrayOfStrings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayOfSymbols", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["isArrayOfSymbols"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayOfNulls", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["isArrayOfNulls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayOfUndefineds", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["isArrayOfUndefineds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayOfPrimitives", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["isArrayOfPrimitives"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayOfObjects", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["isArrayOfObjects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayOf", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["isArrayOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayOfLike", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["isArrayOfLike"]; });

/* harmony import */ var _only__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./only */ "./node_modules/ts-type-guards/dist/only.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onlyBooleans", function() { return _only__WEBPACK_IMPORTED_MODULE_2__["onlyBooleans"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onlyNumbers", function() { return _only__WEBPACK_IMPORTED_MODULE_2__["onlyNumbers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onlyStrings", function() { return _only__WEBPACK_IMPORTED_MODULE_2__["onlyStrings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onlySymbols", function() { return _only__WEBPACK_IMPORTED_MODULE_2__["onlySymbols"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onlyNulls", function() { return _only__WEBPACK_IMPORTED_MODULE_2__["onlyNulls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onlyUndefineds", function() { return _only__WEBPACK_IMPORTED_MODULE_2__["onlyUndefineds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onlyPrimitives", function() { return _only__WEBPACK_IMPORTED_MODULE_2__["onlyPrimitives"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onlyObjects", function() { return _only__WEBPACK_IMPORTED_MODULE_2__["onlyObjects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "only", function() { return _only__WEBPACK_IMPORTED_MODULE_2__["only"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onlyLike", function() { return _only__WEBPACK_IMPORTED_MODULE_2__["onlyLike"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ts-type-guards/dist/is.mjs":
/*!*************************************************!*\
  !*** ./node_modules/ts-type-guards/dist/is.mjs ***!
  \*************************************************/
/*! exports provided: isBoolean, isNumber, isString, isSymbol, isNull, isUndefined, isPrimitive, isNonPrimitive, is, isLike */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return isSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonPrimitive", function() { return isNonPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLike", function() { return isLike; });
const TYPE_GUARDS_PRIMITIVE = [isBoolean, isNumber, isString, isSymbol, isNull, isUndefined];
function isBoolean(x) {
    return typeof x === "boolean";
}
function isNumber(x) {
    return typeof x === "number";
}
function isString(x) {
    return typeof x === "string";
}
function isSymbol(x) {
    return typeof x === "symbol";
}
function isNull(x) {
    return x === null;
}
function isUndefined(x) {
    return x === undefined;
}
function isPrimitive(x) {
    return TYPE_GUARDS_PRIMITIVE.some(f => f(x));
}
function isNonPrimitive(x) {
    return !isPrimitive(x);
}
function namedFunction(name, fun) {
    return Object.defineProperty(fun, "name", { value: name, writable: false });
}
function namedTypeGuard(creator, type, typeGuard) {
    return namedFunction(`${creator.name}(${type.name})`, typeGuard);
}
function is(type) {
    if (isPrimitive(type)) {
        return (_) => false;
    }
    return namedTypeGuard(is, type, (x) => x instanceof type);
}
function isLike(reference) {
    for (const f of TYPE_GUARDS_PRIMITIVE) {
        if (f(reference)) {
            return (x) => f(x);
        }
    }
    if (is(Array)(reference)) {
        const referenceAsArray = reference;
        return (x) => is(Array)(x) && (referenceAsArray.length > 0 ? x.every(isLike(referenceAsArray[0])) : true);
    }
    if (reference.constructor === Object) {
        return (x) => (![undefined, null].includes(x)
            &&
                Object.keys(reference).every(k => isLike(reference[k])(x[k])));
    }
    if (reference.constructor instanceof Function) {
        return is(reference.constructor);
    }
    throw new TypeError(isLike.name + ` cannot use this object as reference because it has no constructor: ` + JSON.stringify(reference));
}
//# sourceMappingURL=is.js.map

/***/ }),

/***/ "./node_modules/ts-type-guards/dist/only.mjs":
/*!***************************************************!*\
  !*** ./node_modules/ts-type-guards/dist/only.mjs ***!
  \***************************************************/
/*! exports provided: onlyBooleans, onlyNumbers, onlyStrings, onlySymbols, onlyNulls, onlyUndefineds, onlyPrimitives, onlyObjects, only, onlyLike */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyBooleans", function() { return onlyBooleans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyNumbers", function() { return onlyNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyStrings", function() { return onlyStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlySymbols", function() { return onlySymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyNulls", function() { return onlyNulls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyUndefineds", function() { return onlyUndefineds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyPrimitives", function() { return onlyPrimitives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyObjects", function() { return onlyObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "only", function() { return only; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyLike", function() { return onlyLike; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/ts-type-guards/dist/is.mjs");

function onlyBooleans(xs) {
    return xs.filter(_is__WEBPACK_IMPORTED_MODULE_0__["isBoolean"]);
}
function onlyNumbers(xs) {
    return xs.filter(_is__WEBPACK_IMPORTED_MODULE_0__["isNumber"]);
}
function onlyStrings(xs) {
    return xs.filter(_is__WEBPACK_IMPORTED_MODULE_0__["isString"]);
}
function onlySymbols(xs) {
    return xs.filter(_is__WEBPACK_IMPORTED_MODULE_0__["isSymbol"]);
}
function onlyNulls(xs) {
    return xs.filter(_is__WEBPACK_IMPORTED_MODULE_0__["isNull"]);
}
function onlyUndefineds(xs) {
    return xs.filter(_is__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]);
}
function onlyPrimitives(xs) {
    return xs.filter(_is__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"]);
}
function onlyObjects(xs) {
    return xs.filter(_is__WEBPACK_IMPORTED_MODULE_0__["isNonPrimitive"]);
}
function only(type) {
    return (xs) => xs.filter(Object(_is__WEBPACK_IMPORTED_MODULE_0__["is"])(type));
}
function onlyLike(reference) {
    return (xs) => xs.filter(Object(_is__WEBPACK_IMPORTED_MODULE_0__["isLike"])(reference));
}
//# sourceMappingURL=only.js.map

/***/ }),

/***/ "./node_modules/userscripter/lib/environment.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/userscripter/lib/environment.mjs ***!
  \*******************************************************/
/*! exports provided: ALWAYS, NEVER, DOMCONTENTLOADED, LOAD */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALWAYS", function() { return ALWAYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEVER", function() { return NEVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMCONTENTLOADED", function() { return DOMCONTENTLOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD", function() { return LOAD; });
const ALWAYS = () => true;
const NEVER = () => false;
const DOMCONTENTLOADED = (state) => state !== "loading";
const LOAD = (state) => state === "complete";


/***/ }),

/***/ "./node_modules/userscripter/lib/errors.mjs":
/*!**************************************************!*\
  !*** ./node_modules/userscripter/lib/errors.mjs ***!
  \**************************************************/
/*! exports provided: explanation, failureDescriber */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "explanation", function() { return explanation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failureDescriber", function() { return failureDescriber; });
/* harmony import */ var lines_unlines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lines-unlines */ "./node_modules/lines-unlines/dist/index.mjs");

const INDENTATION = "  ";
function formatDependency(d) {
    return INDENTATION + d.key + ": " + d.selector;
}
function explanation(failure) {
    switch (failure.result.reason) {
        case 0:
            return Object(lines_unlines__WEBPACK_IMPORTED_MODULE_0__["unlines"])([
                `These dependencies were not found:`,
                ``,
                Object(lines_unlines__WEBPACK_IMPORTED_MODULE_0__["unlines"])(failure.result.dependencies.map(formatDependency)),
            ]);
        case 1:
            return Object(lines_unlines__WEBPACK_IMPORTED_MODULE_0__["unlines"])([
                `The operation failed with this error:`,
                ``,
                failure.result.message,
            ]);
    }
}
function failureDescriber(context) {
    return failure => Object(lines_unlines__WEBPACK_IMPORTED_MODULE_0__["unlines"])([
        `Could not ${failure.operation.description} on this page:`,
        ``,
        INDENTATION + location.href,
        ``,
        explanation(failure).trim(),
        ``,
        `This problem might be caused by ${context.siteName} changing its content/structure, in which case ${context.extensionName} needs to be updated accordingly. Otherwise, it's probably a bug in ${context.extensionName}.`,
        ``,
        `If you file a bug report, please include this message.`,
    ]);
}


/***/ }),

/***/ "./node_modules/userscripter/lib/index.mjs":
/*!*************************************************!*\
  !*** ./node_modules/userscripter/lib/index.mjs ***!
  \*************************************************/
/*! exports provided: environment, errors, log, operations, preferences, stylesheets, userscripter */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ "./node_modules/userscripter/lib/environment.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return _environment__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./node_modules/userscripter/lib/errors.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return _errors__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log */ "./node_modules/userscripter/lib/log.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "log", function() { return _log__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operations */ "./node_modules/userscripter/lib/operations.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "operations", function() { return _operations__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _preferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preferences */ "./node_modules/userscripter/lib/preferences.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "preferences", function() { return _preferences__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _stylesheets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stylesheets */ "./node_modules/userscripter/lib/stylesheets.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "stylesheets", function() { return _stylesheets__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var _userscripter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userscripter */ "./node_modules/userscripter/lib/userscripter.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "userscripter", function() { return _userscripter__WEBPACK_IMPORTED_MODULE_6__; });










/***/ }),

/***/ "./node_modules/userscripter/lib/log.mjs":
/*!***********************************************!*\
  !*** ./node_modules/userscripter/lib/log.mjs ***!
  \***********************************************/
/*! exports provided: setPrefix, setLogger, log, info, warning, error */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPrefix", function() { return setPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLogger", function() { return setLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "info", function() { return info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
let prefix = "";
let logger = console;
function setPrefix(p) {
    prefix = p;
}
function setLogger(l) {
    logger = l;
}
function log(str) {
    logger.log(prefix, str);
}
function info(str) {
    logger.info(prefix, str);
}
function warning(str) {
    logger.warn(prefix, str);
}
function error(str) {
    logger.error(prefix, str);
}


/***/ }),

/***/ "./node_modules/userscripter/lib/operations.mjs":
/*!******************************************************!*\
  !*** ./node_modules/userscripter/lib/operations.mjs ***!
  \******************************************************/
/*! exports provided: operation, run */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operation", function() { return operation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony import */ var ts_type_guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-type-guards */ "./node_modules/ts-type-guards/dist/index.mjs");

const SUCCESS = undefined;
function operation(spec) {
    return spec;
}
function run(plan) {
    function recurse(operations, failures, triesLeft) {
        const lastTry = Object(ts_type_guards__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(triesLeft) && triesLeft <= 0;
        const operationsToRunNow = [];
        const remaining = [];
        const readyState = document.readyState;
        for (const o of operations) {
            const shouldRunNow = o.deferUntil === undefined || o.deferUntil(readyState);
            (shouldRunNow ? operationsToRunNow : remaining).push(o);
        }
        for (const o of operationsToRunNow) {
            const result = tryToPerform(o);
            if (result !== SUCCESS) {
                switch (result.reason) {
                    case 0:
                        lastTry ? failures.push({ result, operation: o }) : remaining.push(o);
                        break;
                    case 1:
                        failures.push({ result, operation: o });
                        break;
                }
            }
        }
        if (remaining.length > 0) {
            setTimeout(() => recurse(remaining, failures, (Object(ts_type_guards__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(triesLeft)
                ? triesLeft - 1
                : plan.tryUntil(readyState) ? plan.extraTries : undefined)), plan.interval);
        }
        else if (failures.length > 0) {
            plan.handleFailures(failures);
        }
    }
    recurse(plan.operations.filter(o => o.condition(window)), []);
}
function tryToPerform(o) {
    const dependencies = o.dependencies === undefined ? {} : o.dependencies;
    const queryResults = Object.entries(dependencies).map(([key, selector]) => ({
        key, selector, element: document.querySelector(selector),
    }));
    const missingDependencies = queryResults.filter(x => Object(ts_type_guards__WEBPACK_IMPORTED_MODULE_0__["isNull"])(x.element));
    if (missingDependencies.length > 0) {
        return { reason: 0, dependencies: missingDependencies };
    }
    const e = queryResults.reduce((acc, x) => Object.defineProperty(acc, x.key, { value: x.element }), {});
    return fromActionResult(o.action(e));
}
function fromActionResult(r) {
    return Object(ts_type_guards__WEBPACK_IMPORTED_MODULE_0__["isString"])(r) ? { reason: 1, message: r } : SUCCESS;
}


/***/ }),

/***/ "./node_modules/userscripter/lib/preferences.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/userscripter/lib/preferences.mjs ***!
  \*******************************************************/
/*! exports provided: subscriptable, loggingResponseHandler, noopResponseHandler */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscriptable", function() { return subscriptable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggingResponseHandler", function() { return loggingResponseHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noopResponseHandler", function() { return noopResponseHandler; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./node_modules/userscripter/lib/log.mjs");

function subscriptable(handler) {
    const changeListeners = new Set();
    return {
        subscribe: (listener) => { changeListeners.add(listener); },
        unsubscribe: (listener) => { changeListeners.delete(listener); },
        handler: (summary, preferences) => {
            if (summary.action === "set") {
                changeListeners.forEach(f => f(summary.preference));
            }
            return handler(summary, preferences);
        },
    };
}
function loggingResponseHandler(summary, preferences) {
    const response = summary.response;
    switch (response.status) {
        case 0:
            return response;
        case 1:
            if (summary.action === "get") {
                _log__WEBPACK_IMPORTED_MODULE_0__["warning"](`The saved value for preference '${summary.preference.key}' (${JSON.stringify(response.saved)}) was invalid. Replacing it with ${JSON.stringify(response.value)}.`);
                preferences.set(summary.preference, response.value);
            }
            if (summary.action === "set") {
                _log__WEBPACK_IMPORTED_MODULE_0__["warning"](`Could not set value ${JSON.stringify(response.value)} for preference '${summary.preference.key}' because it was invalid.`);
            }
            return response;
        case 2:
            if (summary.action === "get") {
                _log__WEBPACK_IMPORTED_MODULE_0__["warning"](`The saved value for preference '${summary.preference.key}' had the wrong type. Replacing it with ${JSON.stringify(response.value)}.`);
                preferences.set(summary.preference, response.value);
            }
            return response;
        case 3:
            if (summary.action === "get") {
                _log__WEBPACK_IMPORTED_MODULE_0__["warning"](`The saved value for preference '${summary.preference.key}' could not be parsed. Replacing it with ${JSON.stringify(response.value)}.`);
                preferences.set(summary.preference, response.value);
            }
            return response;
        case 4:
            switch (summary.action) {
                case "get":
                    _log__WEBPACK_IMPORTED_MODULE_0__["error"](`Could not read preference '${summary.preference.key}' because localStorage could not be accessed. Using value ${JSON.stringify(summary.preference.default)}.`);
                    break;
                case "set":
                    _log__WEBPACK_IMPORTED_MODULE_0__["error"](`Could not save value ${JSON.stringify(summary.response.value)} for preference '${summary.preference.key}' because localStorage could not be accessed.`);
                    break;
                default:
                    assertUnreachable(summary.action);
            }
            return response;
        default:
            return assertUnreachable(response.status);
    }
}
function noopResponseHandler(summary, _) {
    return summary.response;
}
function assertUnreachable(x) {
    throw new Error("assertUnreachable: " + x);
}


/***/ }),

/***/ "./node_modules/userscripter/lib/stylesheets.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/userscripter/lib/stylesheets.mjs ***!
  \*******************************************************/
/*! exports provided: stylesheet, insert, enable, disable */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stylesheet", function() { return stylesheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enable", function() { return enable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disable", function() { return disable; });
const MATCH_ALL = "all";
const MATCH_NONE = "not all";
function stylesheet(spec) {
    return spec;
}
function insert(stylesheets) {
    const fragment = document.createDocumentFragment();
    Object.entries(stylesheets).forEach(([_, sheet]) => {
        const style = document.createElement("style");
        if (sheet.id !== undefined)
            style.id = sheet.id;
        style.textContent = sheet.css;
        style.media = sheet.condition(window) ? MATCH_ALL : MATCH_NONE;
        fragment.appendChild(style);
    });
    document.documentElement.appendChild(fragment);
}
const setMediaQuery = (m) => (s) => {
    const element = document.getElementById(s.id);
    if (element !== null) {
        element.setAttribute("media", m);
    }
};
const enable = setMediaQuery(MATCH_ALL);
const disable = setMediaQuery(MATCH_NONE);


/***/ }),

/***/ "./node_modules/userscripter/lib/userscripter.mjs":
/*!********************************************************!*\
  !*** ./node_modules/userscripter/lib/userscripter.mjs ***!
  \********************************************************/
/*! exports provided: run */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./node_modules/userscripter/lib/log.mjs");
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operations */ "./node_modules/userscripter/lib/operations.mjs");
/* harmony import */ var _stylesheets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stylesheets */ "./node_modules/userscripter/lib/stylesheets.mjs");



function run(userscript) {
    _log__WEBPACK_IMPORTED_MODULE_0__["setPrefix"](`[${userscript.name}]`);
    const attr = attribute(userscript.id);
    if (document.documentElement.hasAttribute(attr)) {
        _log__WEBPACK_IMPORTED_MODULE_0__["warning"](`It looks as though ${userscript.name} has already run (because the attribute "${attr}" was found on <head>). Stopping.`);
    }
    else {
        document.documentElement.setAttribute(attr, "");
        userscript.initialAction();
        _stylesheets__WEBPACK_IMPORTED_MODULE_2__["insert"](userscript.stylesheets);
        _operations__WEBPACK_IMPORTED_MODULE_1__["run"](userscript.operationsPlan);
    }
}
function attribute(id) {
    return "data-" + id + "-has-run";
}


/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: OPERATIONS_INTERVAL, OPERATIONS_EXTRA_TRIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATIONS_INTERVAL", function() { return OPERATIONS_INTERVAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATIONS_EXTRA_TRIES", function() { return OPERATIONS_EXTRA_TRIES; });
// This file cannot contain Webpack-resolved imports (e.g. "~src/foo").
const OPERATIONS_INTERVAL = 200; // ms
const OPERATIONS_EXTRA_TRIES = 3;


/***/ }),

/***/ "./src/helpers/create.ts":
/*!*******************************!*\
  !*** ./src/helpers/create.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Creates an HTML element based on destructured parameters.
 *
 * Requires type and must have 'before: {}' (if you're not using it, make it an empty object).
 */
const create = ({ type, id, classPrefix, classes, before: { node, referenceNode }, childOf, text, html, }) => {
    const element = document.createElement(type);
    if (id) {
        element.id = id;
    }
    if (Array.isArray(classes)) {
        classes.forEach((className) => {
            element.classList.add(classPrefix + '-' + className);
        });
    }
    else if (classes) {
        element.classList.add(classPrefix + '-' + classes);
    }
    if (node) {
        node.insertBefore(element, referenceNode !== null && referenceNode !== void 0 ? referenceNode : null);
    }
    else if (childOf) {
        childOf.appendChild(element);
    }
    if (text) {
        element.innerText = text;
    }
    if (html) {
        element.innerHTML = html;
    }
    return element;
};
/* harmony default export */ __webpack_exports__["default"] = (create);


/***/ }),

/***/ "./src/helpers/fetchElement.ts":
/*!*************************************!*\
  !*** ./src/helpers/fetchElement.ts ***!
  \*************************************/
/*! exports provided: fetchElement, fetchElementAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchElement", function() { return fetchElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchElementAll", function() { return fetchElementAll; });
const fetchElement = (query) => {
    return document.querySelector(query);
};
const fetchElementAll = (query) => {
    return document.querySelectorAll(query);
};


/***/ }),

/***/ "./src/helpers/replaceEmoji.ts":
/*!*************************************!*\
  !*** ./src/helpers/replaceEmoji.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Replaces emoji and other characters that SQL can't process into a unicode string that it can actually understand.
 */
const replaceEmoji = (input) => {
    var _a;
    let result = '';
    for (let i = 0; i < input.value.length; i += 1) {
        const code = (_a = input.value.codePointAt(i)) !== null && _a !== void 0 ? _a : 0;
        if (code > 0xffff) {
            result += ['&#', code, ';'].join('');
            i += 1;
        }
        else {
            result += String.fromCodePoint(code);
        }
    }
    return result;
};
/* harmony default export */ __webpack_exports__["default"] = (replaceEmoji);


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _typed_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @typed/compose */ "./node_modules/@typed/compose/lib.es2015/index.js");
/* harmony import */ var userscripter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! userscripter */ "./node_modules/userscripter/lib/index.mjs");
/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~src/config */ "./src/config.ts");
/* harmony import */ var _src_operations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~src/operations */ "./src/operations.ts");
/* harmony import */ var _src_site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~src/site */ "./src/site.ts");
/* harmony import */ var _src_stylesheets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~src/stylesheets */ "./src/stylesheets.ts");
/* harmony import */ var _src_userscript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~src/userscript */ "./src/userscript.ts");







const describeFailure = userscripter__WEBPACK_IMPORTED_MODULE_1__["errors"].failureDescriber({
    siteName: _src_site__WEBPACK_IMPORTED_MODULE_4__["NAME"],
    extensionName: _src_userscript__WEBPACK_IMPORTED_MODULE_6__["default"].name,
    location: document.location,
});
userscripter__WEBPACK_IMPORTED_MODULE_1__["userscripter"].run({
    id: _src_userscript__WEBPACK_IMPORTED_MODULE_6__["default"].id,
    name: _src_userscript__WEBPACK_IMPORTED_MODULE_6__["default"].name,
    initialAction: () => userscripter__WEBPACK_IMPORTED_MODULE_1__["log"].log(`${_src_userscript__WEBPACK_IMPORTED_MODULE_6__["default"].name} ${_src_userscript__WEBPACK_IMPORTED_MODULE_6__["default"].version}`),
    stylesheets: _src_stylesheets__WEBPACK_IMPORTED_MODULE_5__["default"],
    operationsPlan: {
        operations: _src_operations__WEBPACK_IMPORTED_MODULE_3__["default"],
        interval: _src_config__WEBPACK_IMPORTED_MODULE_2__["OPERATIONS_INTERVAL"],
        tryUntil: userscripter__WEBPACK_IMPORTED_MODULE_1__["environment"].DOMCONTENTLOADED,
        extraTries: _src_config__WEBPACK_IMPORTED_MODULE_2__["OPERATIONS_EXTRA_TRIES"],
        handleFailures: failures => failures.forEach(Object(_typed_compose__WEBPACK_IMPORTED_MODULE_0__["compose"])(userscripter__WEBPACK_IMPORTED_MODULE_1__["log"].error, describeFailure)),
    },
});


/***/ }),

/***/ "./src/modules/unicodifier.ts":
/*!************************************!*\
  !*** ./src/modules/unicodifier.ts ***!
  \************************************/
/*! exports provided: unicodifier, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unicodifier", function() { return unicodifier; });
/* harmony import */ var _src_helpers_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~src/helpers/create */ "./src/helpers/create.ts");
/* harmony import */ var _src_helpers_fetchElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~src/helpers/fetchElement */ "./src/helpers/fetchElement.ts");
/* harmony import */ var _src_helpers_replaceEmoji__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~src/helpers/replaceEmoji */ "./src/helpers/replaceEmoji.ts");



const createReplaceAction = (actionElement, textbox) => {
    const publish = actionElement === null || actionElement === void 0 ? void 0 : actionElement.children[1];
    if (actionElement) {
        const alreadyExist = actionElement === null || actionElement === void 0 ? void 0 : actionElement.querySelector('.reina-replace');
        if (!alreadyExist) {
            const replace = Object(_src_helpers_create__WEBPACK_IMPORTED_MODULE_0__["default"])({
                type: 'div',
                classPrefix: 'reina',
                classes: ['button', 'replace'],
                before: {},
                childOf: actionElement,
                text: 'Replace',
            });
            console.log(publish);
            replace.addEventListener('click', () => {
                textbox.dispatchEvent(new Event('input'));
            });
            /* if (publish) {
                replace.addEventListener('click', function () {
                    publish.dispatchEvent(new Event('click'));
                });
            } */
        }
    }
};
const unicodifier = () => {
    const textboxes = Object(_src_helpers_fetchElement__WEBPACK_IMPORTED_MODULE_1__["fetchElementAll"])('.activity-edit > .input > textarea');
    const activityActions = Object(_src_helpers_fetchElement__WEBPACK_IMPORTED_MODULE_1__["fetchElementAll"])('.activity-edit .actions');
    const totalTextboxes = textboxes ? textboxes.length : null;
    if (textboxes && totalTextboxes && activityActions)
        for (let i = 0; i < totalTextboxes; i += 1) {
            const input = textboxes[i];
            const action = activityActions[i];
            createReplaceAction(action, input);
            if (input.value) {
                textboxes[i].value = Object(_src_helpers_replaceEmoji__WEBPACK_IMPORTED_MODULE_2__["default"])(input);
                textboxes[i].dispatchEvent(new Event('input'));
            }
        }
};
/* harmony default export */ __webpack_exports__["default"] = (unicodifier);


/***/ }),

/***/ "./src/operations.ts":
/*!***************************!*\
  !*** ./src/operations.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var userscripter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! userscripter */ "./node_modules/userscripter/lib/index.mjs");
/* harmony import */ var userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! userscripter/lib/environment */ "./node_modules/userscripter/lib/environment.mjs");
/* harmony import */ var userscripter_lib_operations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! userscripter/lib/operations */ "./node_modules/userscripter/lib/operations.mjs");
/* harmony import */ var _helpers_fetchElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/fetchElement */ "./src/helpers/fetchElement.ts");
/* harmony import */ var _modules_unicodifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/unicodifier */ "./src/modules/unicodifier.ts");





const OPERATIONS = [
    Object(userscripter_lib_operations__WEBPACK_IMPORTED_MODULE_2__["operation"])({
        description: 'Test',
        condition: userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_1__["ALWAYS"],
        /* dependencies: { activityActions: SITE.SELECTOR_ACTIVITY_ACTIONS }, */
        action: () => {
            document.body.addEventListener('click', function () {
                if (Object(_helpers_fetchElement__WEBPACK_IMPORTED_MODULE_3__["fetchElement"])('.activity-edit .actions')) {
                    Object(_modules_unicodifier__WEBPACK_IMPORTED_MODULE_4__["default"])();
                    userscripter__WEBPACK_IMPORTED_MODULE_0__["log"].log('fired');
                }
            });
        },
        deferUntil: userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_1__["DOMCONTENTLOADED"],
    }),
];
/* harmony default export */ __webpack_exports__["default"] = (OPERATIONS);


/***/ }),

/***/ "./src/site.ts":
/*!*********************!*\
  !*** ./src/site.ts ***!
  \*********************/
/*! exports provided: NAME, HOSTNAME, SELECTOR_ACTIVITY_ACTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME", function() { return NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSTNAME", function() { return HOSTNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTOR_ACTIVITY_ACTIONS", function() { return SELECTOR_ACTIVITY_ACTIONS; });
/* harmony import */ var _userscript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript */ "./src/userscript.ts");
// This file cannot contain Webpack-resolved imports (e.g. "~src/foo").

const NAME = _userscript__WEBPACK_IMPORTED_MODULE_0__["default"].sitename;
const HOSTNAME = _userscript__WEBPACK_IMPORTED_MODULE_0__["default"].hostname;
const SELECTOR_ACTIVITY_ACTIONS = '.activity-edit .actions';


/***/ }),

/***/ "./src/stylesheets.ts":
/*!****************************!*\
  !*** ./src/stylesheets.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! userscripter/lib/environment */ "./node_modules/userscripter/lib/environment.mjs");
/* harmony import */ var userscripter_lib_stylesheets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! userscripter/lib/stylesheets */ "./node_modules/userscripter/lib/stylesheets.mjs");


const STYLESHEETS = {
    main: Object(userscripter_lib_stylesheets__WEBPACK_IMPORTED_MODULE_1__["stylesheet"])({
        condition: userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_0__["ALWAYS"],
        css: `
            .reina-button {
                align-items: center;
                background: rgb(var(--color-blue));
                border-radius: 4px;
                color: rgb(var(--color-text-bright));
                cursor: pointer;
                display: inline-flex;
                font-family: Overpass,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
                font-size: 1.3rem;
                font-weight: 900;
                margin-left: 18px;
                padding: 10px 15px;
                transition: .2s;
            }

            .reina-button.reina-replace {
                background: rgb(var(--color-green));
            }
        `,
    }),
};
// This trick uncovers type errors in STYLESHEETS while retaining the static knowledge of its properties (so we can still write e.g. STYLESHEETS.foo):
const _ = STYLESHEETS;
void _;
/* harmony default export */ __webpack_exports__["default"] = (STYLESHEETS);


/***/ }),

/***/ "./src/userscript.ts":
/*!***************************!*\
  !*** ./src/userscript.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    id: "reina",
    name: "Reina's AniList Userscript",
    version: "0.1.0",
    description: "Does stuff to AniList that you will like.",
    author: "Reina",
    hostname: "anilist.co",
    sitename: "AniList",
    namespace: "https://github.com/Reinachan",
    runAt: "document-start",
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVpbmEudXNlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHR5cGVkL2NvbXBvc2UvbGliLmVzMjAxNS9jb21wb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdHlwZWQvY29tcG9zZS9saWIuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saW5lcy11bmxpbmVzL2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cy10eXBlLWd1YXJkcy9kaXN0L2FycmF5Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHMtdHlwZS1ndWFyZHMvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzLXR5cGUtZ3VhcmRzL2Rpc3QvaXMubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cy10eXBlLWd1YXJkcy9kaXN0L29ubHkubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91c2Vyc2NyaXB0ZXIvbGliL2Vudmlyb25tZW50Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9lcnJvcnMubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91c2Vyc2NyaXB0ZXIvbGliL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9sb2cubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91c2Vyc2NyaXB0ZXIvbGliL29wZXJhdGlvbnMubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91c2Vyc2NyaXB0ZXIvbGliL3ByZWZlcmVuY2VzLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9zdHlsZXNoZWV0cy5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZXJzY3JpcHRlci9saWIvdXNlcnNjcmlwdGVyLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2NyZWF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9mZXRjaEVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvcmVwbGFjZUVtb2ppLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3VuaWNvZGlmaWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9vcGVyYXRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9zaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXNlcnNjcmlwdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIF9jb21wb3NlMShhcmd1bWVudHNbMF0pO1xuICAgICAgICBjYXNlIDI6IHJldHVybiBfY29tcG9zZTIoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBjYXNlIDM6IHJldHVybiBfY29tcG9zZTMoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGNhc2UgNDogcmV0dXJuIF9jb21wb3NlNChhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM10pO1xuICAgICAgICBjYXNlIDU6IHJldHVybiBfY29tcG9zZTUoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdLCBhcmd1bWVudHNbNF0pO1xuICAgIH1cbiAgICA7XG59XG5mdW5jdGlvbiBfY29tcG9zZTEoZikge1xuICAgIHJldHVybiBmdW5jdGlvbiBjb21wb3NlMUZuKGEpIHtcbiAgICAgICAgcmV0dXJuIGYoYSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9jb21wb3NlMihnLCBmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBvc2UyRm4oYSkge1xuICAgICAgICByZXR1cm4gZyhmKGEpKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2NvbXBvc2UzKGgsIGcsIGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY29tcG9zZTNGbihhKSB7XG4gICAgICAgIHJldHVybiBoKGcoZihhKSkpO1xuICAgIH07XG59XG5mdW5jdGlvbiBfY29tcG9zZTQoaSwgaCwgZywgZikge1xuICAgIHJldHVybiBmdW5jdGlvbiBjb21wb3NlM0ZuKGEpIHtcbiAgICAgICAgcmV0dXJuIGkoaChnKGYoYSkpKSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9jb21wb3NlNShqLCBpLCBoLCBnLCBmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBvc2U1Rm4oYSkge1xuICAgICAgICByZXR1cm4gaihpKGgoZyhmKGEpKSkpKTtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9zZS5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvc2UnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGxpbmVzKHMpIHtcbiAgICByZXR1cm4gcyA9PT0gXCJcIiA/IFtdIDogcy5yZXBsYWNlKC9cXG4kLywgXCJcIikuc3BsaXQoXCJcXG5cIik7XG59XG5leHBvcnQgZnVuY3Rpb24gdW5saW5lcyhscykge1xuICAgIHJldHVybiBscy5tYXAobGluZSA9PiBsaW5lICsgXCJcXG5cIikuam9pbihcIlwiKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IGlzUHJpbWl0aXZlLCBpc05vblByaW1pdGl2ZSwgaXMsIGlzTGlrZSB9IGZyb20gXCIuL2lzXCI7XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mQm9vbGVhbnMoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKHRydWUpKHgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZk51bWJlcnMoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKDEpKHgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZlN0cmluZ3MoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKFwiXCIpKHgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZlN5bWJvbHMoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKFN5bWJvbCgpKSh4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZOdWxscyh4KSB7XG4gICAgcmV0dXJuIGlzQXJyYXlPZkxpa2UobnVsbCkoeCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mVW5kZWZpbmVkcyh4KSB7XG4gICAgcmV0dXJuIGlzQXJyYXlPZkxpa2UodW5kZWZpbmVkKSh4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZQcmltaXRpdmVzKHgpIHtcbiAgICByZXR1cm4gaXMoQXJyYXkpKHgpICYmIHguZXZlcnkoaXNQcmltaXRpdmUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZk9iamVjdHMoeCkge1xuICAgIHJldHVybiBpcyhBcnJheSkoeCkgJiYgeC5ldmVyeShpc05vblByaW1pdGl2ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mKHR5cGUpIHtcbiAgICByZXR1cm4gKHhzKSA9PiBpcyhBcnJheSkoeHMpICYmIHhzLmV2ZXJ5KGlzKHR5cGUpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZMaWtlKHJlZmVyZW5jZSkge1xuICAgIHJldHVybiAoeCkgPT4gaXMoQXJyYXkpKHgpICYmIHguZXZlcnkoaXNMaWtlKHJlZmVyZW5jZSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXJyYXkuanMubWFwIiwiZXhwb3J0IHsgaXNCb29sZWFuLCBpc051bWJlciwgaXNTdHJpbmcsIGlzU3ltYm9sLCBpc051bGwsIGlzVW5kZWZpbmVkLCBpc1ByaW1pdGl2ZSwgaXNOb25QcmltaXRpdmUsIGlzLCBpc0xpa2UsIH0gZnJvbSBcIi4vaXNcIjtcbmV4cG9ydCB7IGlzQXJyYXlPZkJvb2xlYW5zLCBpc0FycmF5T2ZOdW1iZXJzLCBpc0FycmF5T2ZTdHJpbmdzLCBpc0FycmF5T2ZTeW1ib2xzLCBpc0FycmF5T2ZOdWxscywgaXNBcnJheU9mVW5kZWZpbmVkcywgaXNBcnJheU9mUHJpbWl0aXZlcywgaXNBcnJheU9mT2JqZWN0cywgaXNBcnJheU9mLCBpc0FycmF5T2ZMaWtlLCB9IGZyb20gXCIuL2FycmF5XCI7XG5leHBvcnQgeyBvbmx5Qm9vbGVhbnMsIG9ubHlOdW1iZXJzLCBvbmx5U3RyaW5ncywgb25seVN5bWJvbHMsIG9ubHlOdWxscywgb25seVVuZGVmaW5lZHMsIG9ubHlQcmltaXRpdmVzLCBvbmx5T2JqZWN0cywgb25seSwgb25seUxpa2UsIH0gZnJvbSBcIi4vb25seVwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiY29uc3QgVFlQRV9HVUFSRFNfUFJJTUlUSVZFID0gW2lzQm9vbGVhbiwgaXNOdW1iZXIsIGlzU3RyaW5nLCBpc1N5bWJvbCwgaXNOdWxsLCBpc1VuZGVmaW5lZF07XG5leHBvcnQgZnVuY3Rpb24gaXNCb29sZWFuKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09IFwiYm9vbGVhblwiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09IFwibnVtYmVyXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcoeCkge1xuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzdHJpbmdcIjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1N5bWJvbCh4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbCh4KSB7XG4gICAgcmV0dXJuIHggPT09IG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQoeCkge1xuICAgIHJldHVybiB4ID09PSB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcmltaXRpdmUoeCkge1xuICAgIHJldHVybiBUWVBFX0dVQVJEU19QUklNSVRJVkUuc29tZShmID0+IGYoeCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9uUHJpbWl0aXZlKHgpIHtcbiAgICByZXR1cm4gIWlzUHJpbWl0aXZlKHgpO1xufVxuZnVuY3Rpb24gbmFtZWRGdW5jdGlvbihuYW1lLCBmdW4pIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1biwgXCJuYW1lXCIsIHsgdmFsdWU6IG5hbWUsIHdyaXRhYmxlOiBmYWxzZSB9KTtcbn1cbmZ1bmN0aW9uIG5hbWVkVHlwZUd1YXJkKGNyZWF0b3IsIHR5cGUsIHR5cGVHdWFyZCkge1xuICAgIHJldHVybiBuYW1lZEZ1bmN0aW9uKGAke2NyZWF0b3IubmFtZX0oJHt0eXBlLm5hbWV9KWAsIHR5cGVHdWFyZCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXModHlwZSkge1xuICAgIGlmIChpc1ByaW1pdGl2ZSh0eXBlKSkge1xuICAgICAgICByZXR1cm4gKF8pID0+IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZWRUeXBlR3VhcmQoaXMsIHR5cGUsICh4KSA9PiB4IGluc3RhbmNlb2YgdHlwZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNMaWtlKHJlZmVyZW5jZSkge1xuICAgIGZvciAoY29uc3QgZiBvZiBUWVBFX0dVQVJEU19QUklNSVRJVkUpIHtcbiAgICAgICAgaWYgKGYocmVmZXJlbmNlKSkge1xuICAgICAgICAgICAgcmV0dXJuICh4KSA9PiBmKHgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpcyhBcnJheSkocmVmZXJlbmNlKSkge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VBc0FycmF5ID0gcmVmZXJlbmNlO1xuICAgICAgICByZXR1cm4gKHgpID0+IGlzKEFycmF5KSh4KSAmJiAocmVmZXJlbmNlQXNBcnJheS5sZW5ndGggPiAwID8geC5ldmVyeShpc0xpa2UocmVmZXJlbmNlQXNBcnJheVswXSkpIDogdHJ1ZSk7XG4gICAgfVxuICAgIGlmIChyZWZlcmVuY2UuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICByZXR1cm4gKHgpID0+ICghW3VuZGVmaW5lZCwgbnVsbF0uaW5jbHVkZXMoeClcbiAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocmVmZXJlbmNlKS5ldmVyeShrID0+IGlzTGlrZShyZWZlcmVuY2Vba10pKHhba10pKSk7XG4gICAgfVxuICAgIGlmIChyZWZlcmVuY2UuY29uc3RydWN0b3IgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gaXMocmVmZXJlbmNlLmNvbnN0cnVjdG9yKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihpc0xpa2UubmFtZSArIGAgY2Fubm90IHVzZSB0aGlzIG9iamVjdCBhcyByZWZlcmVuY2UgYmVjYXVzZSBpdCBoYXMgbm8gY29uc3RydWN0b3I6IGAgKyBKU09OLnN0cmluZ2lmeShyZWZlcmVuY2UpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLmpzLm1hcCIsImltcG9ydCB7IGlzQm9vbGVhbiwgaXNOdW1iZXIsIGlzU3RyaW5nLCBpc1N5bWJvbCwgaXNOdWxsLCBpc1VuZGVmaW5lZCwgaXNQcmltaXRpdmUsIGlzTm9uUHJpbWl0aXZlLCBpcywgaXNMaWtlIH0gZnJvbSBcIi4vaXNcIjtcbmV4cG9ydCBmdW5jdGlvbiBvbmx5Qm9vbGVhbnMoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzQm9vbGVhbik7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seU51bWJlcnMoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzTnVtYmVyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5U3RyaW5ncyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNTdHJpbmcpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlTeW1ib2xzKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc1N5bWJvbCk7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seU51bGxzKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc051bGwpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlVbmRlZmluZWRzKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc1VuZGVmaW5lZCk7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seVByaW1pdGl2ZXMoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzUHJpbWl0aXZlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5T2JqZWN0cyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNOb25QcmltaXRpdmUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHkodHlwZSkge1xuICAgIHJldHVybiAoeHMpID0+IHhzLmZpbHRlcihpcyh0eXBlKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seUxpa2UocmVmZXJlbmNlKSB7XG4gICAgcmV0dXJuICh4cykgPT4geHMuZmlsdGVyKGlzTGlrZShyZWZlcmVuY2UpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9ubHkuanMubWFwIiwiZXhwb3J0IGNvbnN0IEFMV0FZUyA9ICgpID0+IHRydWU7XG5leHBvcnQgY29uc3QgTkVWRVIgPSAoKSA9PiBmYWxzZTtcbmV4cG9ydCBjb25zdCBET01DT05URU5UTE9BREVEID0gKHN0YXRlKSA9PiBzdGF0ZSAhPT0gXCJsb2FkaW5nXCI7XG5leHBvcnQgY29uc3QgTE9BRCA9IChzdGF0ZSkgPT4gc3RhdGUgPT09IFwiY29tcGxldGVcIjtcbiIsImltcG9ydCB7IHVubGluZXMgfSBmcm9tIFwibGluZXMtdW5saW5lc1wiO1xuY29uc3QgSU5ERU5UQVRJT04gPSBcIiAgXCI7XG5mdW5jdGlvbiBmb3JtYXREZXBlbmRlbmN5KGQpIHtcbiAgICByZXR1cm4gSU5ERU5UQVRJT04gKyBkLmtleSArIFwiOiBcIiArIGQuc2VsZWN0b3I7XG59XG5leHBvcnQgZnVuY3Rpb24gZXhwbGFuYXRpb24oZmFpbHVyZSkge1xuICAgIHN3aXRjaCAoZmFpbHVyZS5yZXN1bHQucmVhc29uKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiB1bmxpbmVzKFtcbiAgICAgICAgICAgICAgICBgVGhlc2UgZGVwZW5kZW5jaWVzIHdlcmUgbm90IGZvdW5kOmAsXG4gICAgICAgICAgICAgICAgYGAsXG4gICAgICAgICAgICAgICAgdW5saW5lcyhmYWlsdXJlLnJlc3VsdC5kZXBlbmRlbmNpZXMubWFwKGZvcm1hdERlcGVuZGVuY3kpKSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gdW5saW5lcyhbXG4gICAgICAgICAgICAgICAgYFRoZSBvcGVyYXRpb24gZmFpbGVkIHdpdGggdGhpcyBlcnJvcjpgLFxuICAgICAgICAgICAgICAgIGBgLFxuICAgICAgICAgICAgICAgIGZhaWx1cmUucmVzdWx0Lm1lc3NhZ2UsXG4gICAgICAgICAgICBdKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZmFpbHVyZURlc2NyaWJlcihjb250ZXh0KSB7XG4gICAgcmV0dXJuIGZhaWx1cmUgPT4gdW5saW5lcyhbXG4gICAgICAgIGBDb3VsZCBub3QgJHtmYWlsdXJlLm9wZXJhdGlvbi5kZXNjcmlwdGlvbn0gb24gdGhpcyBwYWdlOmAsXG4gICAgICAgIGBgLFxuICAgICAgICBJTkRFTlRBVElPTiArIGxvY2F0aW9uLmhyZWYsXG4gICAgICAgIGBgLFxuICAgICAgICBleHBsYW5hdGlvbihmYWlsdXJlKS50cmltKCksXG4gICAgICAgIGBgLFxuICAgICAgICBgVGhpcyBwcm9ibGVtIG1pZ2h0IGJlIGNhdXNlZCBieSAke2NvbnRleHQuc2l0ZU5hbWV9IGNoYW5naW5nIGl0cyBjb250ZW50L3N0cnVjdHVyZSwgaW4gd2hpY2ggY2FzZSAke2NvbnRleHQuZXh0ZW5zaW9uTmFtZX0gbmVlZHMgdG8gYmUgdXBkYXRlZCBhY2NvcmRpbmdseS4gT3RoZXJ3aXNlLCBpdCdzIHByb2JhYmx5IGEgYnVnIGluICR7Y29udGV4dC5leHRlbnNpb25OYW1lfS5gLFxuICAgICAgICBgYCxcbiAgICAgICAgYElmIHlvdSBmaWxlIGEgYnVnIHJlcG9ydCwgcGxlYXNlIGluY2x1ZGUgdGhpcyBtZXNzYWdlLmAsXG4gICAgXSk7XG59XG4iLCJpbXBvcnQgKiBhcyBlbnZpcm9ubWVudCBmcm9tIFwiLi9lbnZpcm9ubWVudFwiO1xuaW1wb3J0ICogYXMgZXJyb3JzIGZyb20gXCIuL2Vycm9yc1wiO1xuaW1wb3J0ICogYXMgbG9nIGZyb20gXCIuL2xvZ1wiO1xuaW1wb3J0ICogYXMgb3BlcmF0aW9ucyBmcm9tIFwiLi9vcGVyYXRpb25zXCI7XG5pbXBvcnQgKiBhcyBwcmVmZXJlbmNlcyBmcm9tIFwiLi9wcmVmZXJlbmNlc1wiO1xuaW1wb3J0ICogYXMgc3R5bGVzaGVldHMgZnJvbSBcIi4vc3R5bGVzaGVldHNcIjtcbmltcG9ydCAqIGFzIHVzZXJzY3JpcHRlciBmcm9tIFwiLi91c2Vyc2NyaXB0ZXJcIjtcbmV4cG9ydCB7IGVudmlyb25tZW50LCBlcnJvcnMsIGxvZywgb3BlcmF0aW9ucywgcHJlZmVyZW5jZXMsIHN0eWxlc2hlZXRzLCB1c2Vyc2NyaXB0ZXIsIH07XG4iLCJsZXQgcHJlZml4ID0gXCJcIjtcbmxldCBsb2dnZXIgPSBjb25zb2xlO1xuZXhwb3J0IGZ1bmN0aW9uIHNldFByZWZpeChwKSB7XG4gICAgcHJlZml4ID0gcDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2dnZXIobCkge1xuICAgIGxvZ2dlciA9IGw7XG59XG5leHBvcnQgZnVuY3Rpb24gbG9nKHN0cikge1xuICAgIGxvZ2dlci5sb2cocHJlZml4LCBzdHIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGluZm8oc3RyKSB7XG4gICAgbG9nZ2VyLmluZm8ocHJlZml4LCBzdHIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5pbmcoc3RyKSB7XG4gICAgbG9nZ2VyLndhcm4ocHJlZml4LCBzdHIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yKHN0cikge1xuICAgIGxvZ2dlci5lcnJvcihwcmVmaXgsIHN0cik7XG59XG4iLCJpbXBvcnQgeyBpc051bGwsIGlzTnVtYmVyLCBpc1N0cmluZyB9IGZyb20gXCJ0cy10eXBlLWd1YXJkc1wiO1xuY29uc3QgU1VDQ0VTUyA9IHVuZGVmaW5lZDtcbmV4cG9ydCBmdW5jdGlvbiBvcGVyYXRpb24oc3BlYykge1xuICAgIHJldHVybiBzcGVjO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJ1bihwbGFuKSB7XG4gICAgZnVuY3Rpb24gcmVjdXJzZShvcGVyYXRpb25zLCBmYWlsdXJlcywgdHJpZXNMZWZ0KSB7XG4gICAgICAgIGNvbnN0IGxhc3RUcnkgPSBpc051bWJlcih0cmllc0xlZnQpICYmIHRyaWVzTGVmdCA8PSAwO1xuICAgICAgICBjb25zdCBvcGVyYXRpb25zVG9SdW5Ob3cgPSBbXTtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nID0gW107XG4gICAgICAgIGNvbnN0IHJlYWR5U3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlO1xuICAgICAgICBmb3IgKGNvbnN0IG8gb2Ygb3BlcmF0aW9ucykge1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkUnVuTm93ID0gby5kZWZlclVudGlsID09PSB1bmRlZmluZWQgfHwgby5kZWZlclVudGlsKHJlYWR5U3RhdGUpO1xuICAgICAgICAgICAgKHNob3VsZFJ1bk5vdyA/IG9wZXJhdGlvbnNUb1J1bk5vdyA6IHJlbWFpbmluZykucHVzaChvKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IG8gb2Ygb3BlcmF0aW9uc1RvUnVuTm93KSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0cnlUb1BlcmZvcm0obyk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBTVUNDRVNTKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXN1bHQucmVhc29uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RUcnkgPyBmYWlsdXJlcy5wdXNoKHsgcmVzdWx0LCBvcGVyYXRpb246IG8gfSkgOiByZW1haW5pbmcucHVzaChvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlcy5wdXNoKHsgcmVzdWx0LCBvcGVyYXRpb246IG8gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbWFpbmluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlY3Vyc2UocmVtYWluaW5nLCBmYWlsdXJlcywgKGlzTnVtYmVyKHRyaWVzTGVmdClcbiAgICAgICAgICAgICAgICA/IHRyaWVzTGVmdCAtIDFcbiAgICAgICAgICAgICAgICA6IHBsYW4udHJ5VW50aWwocmVhZHlTdGF0ZSkgPyBwbGFuLmV4dHJhVHJpZXMgOiB1bmRlZmluZWQpKSwgcGxhbi5pbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmFpbHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcGxhbi5oYW5kbGVGYWlsdXJlcyhmYWlsdXJlcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVjdXJzZShwbGFuLm9wZXJhdGlvbnMuZmlsdGVyKG8gPT4gby5jb25kaXRpb24od2luZG93KSksIFtdKTtcbn1cbmZ1bmN0aW9uIHRyeVRvUGVyZm9ybShvKSB7XG4gICAgY29uc3QgZGVwZW5kZW5jaWVzID0gby5kZXBlbmRlbmNpZXMgPT09IHVuZGVmaW5lZCA/IHt9IDogby5kZXBlbmRlbmNpZXM7XG4gICAgY29uc3QgcXVlcnlSZXN1bHRzID0gT2JqZWN0LmVudHJpZXMoZGVwZW5kZW5jaWVzKS5tYXAoKFtrZXksIHNlbGVjdG9yXSkgPT4gKHtcbiAgICAgICAga2V5LCBzZWxlY3RvciwgZWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvciksXG4gICAgfSkpO1xuICAgIGNvbnN0IG1pc3NpbmdEZXBlbmRlbmNpZXMgPSBxdWVyeVJlc3VsdHMuZmlsdGVyKHggPT4gaXNOdWxsKHguZWxlbWVudCkpO1xuICAgIGlmIChtaXNzaW5nRGVwZW5kZW5jaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHsgcmVhc29uOiAwLCBkZXBlbmRlbmNpZXM6IG1pc3NpbmdEZXBlbmRlbmNpZXMgfTtcbiAgICB9XG4gICAgY29uc3QgZSA9IHF1ZXJ5UmVzdWx0cy5yZWR1Y2UoKGFjYywgeCkgPT4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGFjYywgeC5rZXksIHsgdmFsdWU6IHguZWxlbWVudCB9KSwge30pO1xuICAgIHJldHVybiBmcm9tQWN0aW9uUmVzdWx0KG8uYWN0aW9uKGUpKTtcbn1cbmZ1bmN0aW9uIGZyb21BY3Rpb25SZXN1bHQocikge1xuICAgIHJldHVybiBpc1N0cmluZyhyKSA/IHsgcmVhc29uOiAxLCBtZXNzYWdlOiByIH0gOiBTVUNDRVNTO1xufVxuIiwiaW1wb3J0ICogYXMgbG9nIGZyb20gXCIuL2xvZ1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmlwdGFibGUoaGFuZGxlcikge1xuICAgIGNvbnN0IGNoYW5nZUxpc3RlbmVycyA9IG5ldyBTZXQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdWJzY3JpYmU6IChsaXN0ZW5lcikgPT4geyBjaGFuZ2VMaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTsgfSxcbiAgICAgICAgdW5zdWJzY3JpYmU6IChsaXN0ZW5lcikgPT4geyBjaGFuZ2VMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTsgfSxcbiAgICAgICAgaGFuZGxlcjogKHN1bW1hcnksIHByZWZlcmVuY2VzKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3VtbWFyeS5hY3Rpb24gPT09IFwic2V0XCIpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VMaXN0ZW5lcnMuZm9yRWFjaChmID0+IGYoc3VtbWFyeS5wcmVmZXJlbmNlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlcihzdW1tYXJ5LCBwcmVmZXJlbmNlcyk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBsb2dnaW5nUmVzcG9uc2VIYW5kbGVyKHN1bW1hcnksIHByZWZlcmVuY2VzKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBzdW1tYXJ5LnJlc3BvbnNlO1xuICAgIHN3aXRjaCAocmVzcG9uc2Uuc3RhdHVzKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgaWYgKHN1bW1hcnkuYWN0aW9uID09PSBcImdldFwiKSB7XG4gICAgICAgICAgICAgICAgbG9nLndhcm5pbmcoYFRoZSBzYXZlZCB2YWx1ZSBmb3IgcHJlZmVyZW5jZSAnJHtzdW1tYXJ5LnByZWZlcmVuY2Uua2V5fScgKCR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2Uuc2F2ZWQpfSkgd2FzIGludmFsaWQuIFJlcGxhY2luZyBpdCB3aXRoICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UudmFsdWUpfS5gKTtcbiAgICAgICAgICAgICAgICBwcmVmZXJlbmNlcy5zZXQoc3VtbWFyeS5wcmVmZXJlbmNlLCByZXNwb25zZS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3VtbWFyeS5hY3Rpb24gPT09IFwic2V0XCIpIHtcbiAgICAgICAgICAgICAgICBsb2cud2FybmluZyhgQ291bGQgbm90IHNldCB2YWx1ZSAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLnZhbHVlKX0gZm9yIHByZWZlcmVuY2UgJyR7c3VtbWFyeS5wcmVmZXJlbmNlLmtleX0nIGJlY2F1c2UgaXQgd2FzIGludmFsaWQuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGlmIChzdW1tYXJ5LmFjdGlvbiA9PT0gXCJnZXRcIikge1xuICAgICAgICAgICAgICAgIGxvZy53YXJuaW5nKGBUaGUgc2F2ZWQgdmFsdWUgZm9yIHByZWZlcmVuY2UgJyR7c3VtbWFyeS5wcmVmZXJlbmNlLmtleX0nIGhhZCB0aGUgd3JvbmcgdHlwZS4gUmVwbGFjaW5nIGl0IHdpdGggJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS52YWx1ZSl9LmApO1xuICAgICAgICAgICAgICAgIHByZWZlcmVuY2VzLnNldChzdW1tYXJ5LnByZWZlcmVuY2UsIHJlc3BvbnNlLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgaWYgKHN1bW1hcnkuYWN0aW9uID09PSBcImdldFwiKSB7XG4gICAgICAgICAgICAgICAgbG9nLndhcm5pbmcoYFRoZSBzYXZlZCB2YWx1ZSBmb3IgcHJlZmVyZW5jZSAnJHtzdW1tYXJ5LnByZWZlcmVuY2Uua2V5fScgY291bGQgbm90IGJlIHBhcnNlZC4gUmVwbGFjaW5nIGl0IHdpdGggJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS52YWx1ZSl9LmApO1xuICAgICAgICAgICAgICAgIHByZWZlcmVuY2VzLnNldChzdW1tYXJ5LnByZWZlcmVuY2UsIHJlc3BvbnNlLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgc3dpdGNoIChzdW1tYXJ5LmFjdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJnZXRcIjpcbiAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKGBDb3VsZCBub3QgcmVhZCBwcmVmZXJlbmNlICcke3N1bW1hcnkucHJlZmVyZW5jZS5rZXl9JyBiZWNhdXNlIGxvY2FsU3RvcmFnZSBjb3VsZCBub3QgYmUgYWNjZXNzZWQuIFVzaW5nIHZhbHVlICR7SlNPTi5zdHJpbmdpZnkoc3VtbWFyeS5wcmVmZXJlbmNlLmRlZmF1bHQpfS5gKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNldFwiOlxuICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoYENvdWxkIG5vdCBzYXZlIHZhbHVlICR7SlNPTi5zdHJpbmdpZnkoc3VtbWFyeS5yZXNwb25zZS52YWx1ZSl9IGZvciBwcmVmZXJlbmNlICcke3N1bW1hcnkucHJlZmVyZW5jZS5rZXl9JyBiZWNhdXNlIGxvY2FsU3RvcmFnZSBjb3VsZCBub3QgYmUgYWNjZXNzZWQuYCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGFzc2VydFVucmVhY2hhYmxlKHN1bW1hcnkuYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBhc3NlcnRVbnJlYWNoYWJsZShyZXNwb25zZS5zdGF0dXMpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBub29wUmVzcG9uc2VIYW5kbGVyKHN1bW1hcnksIF8pIHtcbiAgICByZXR1cm4gc3VtbWFyeS5yZXNwb25zZTtcbn1cbmZ1bmN0aW9uIGFzc2VydFVucmVhY2hhYmxlKHgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJhc3NlcnRVbnJlYWNoYWJsZTogXCIgKyB4KTtcbn1cbiIsImNvbnN0IE1BVENIX0FMTCA9IFwiYWxsXCI7XG5jb25zdCBNQVRDSF9OT05FID0gXCJub3QgYWxsXCI7XG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzaGVldChzcGVjKSB7XG4gICAgcmV0dXJuIHNwZWM7XG59XG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0KHN0eWxlc2hlZXRzKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgT2JqZWN0LmVudHJpZXMoc3R5bGVzaGVldHMpLmZvckVhY2goKFtfLCBzaGVldF0pID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgIGlmIChzaGVldC5pZCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgc3R5bGUuaWQgPSBzaGVldC5pZDtcbiAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBzaGVldC5jc3M7XG4gICAgICAgIHN0eWxlLm1lZGlhID0gc2hlZXQuY29uZGl0aW9uKHdpbmRvdykgPyBNQVRDSF9BTEwgOiBNQVRDSF9OT05FO1xuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbn1cbmNvbnN0IHNldE1lZGlhUXVlcnkgPSAobSkgPT4gKHMpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocy5pZCk7XG4gICAgaWYgKGVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtKTtcbiAgICB9XG59O1xuZXhwb3J0IGNvbnN0IGVuYWJsZSA9IHNldE1lZGlhUXVlcnkoTUFUQ0hfQUxMKTtcbmV4cG9ydCBjb25zdCBkaXNhYmxlID0gc2V0TWVkaWFRdWVyeShNQVRDSF9OT05FKTtcbiIsImltcG9ydCAqIGFzIGxvZyBmcm9tIFwiLi9sb2dcIjtcbmltcG9ydCAqIGFzIG9wZXJhdGlvbnMgZnJvbSBcIi4vb3BlcmF0aW9uc1wiO1xuaW1wb3J0ICogYXMgc3R5bGVzaGVldHMgZnJvbSBcIi4vc3R5bGVzaGVldHNcIjtcbmV4cG9ydCBmdW5jdGlvbiBydW4odXNlcnNjcmlwdCkge1xuICAgIGxvZy5zZXRQcmVmaXgoYFske3VzZXJzY3JpcHQubmFtZX1dYCk7XG4gICAgY29uc3QgYXR0ciA9IGF0dHJpYnV0ZSh1c2Vyc2NyaXB0LmlkKTtcbiAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyKSkge1xuICAgICAgICBsb2cud2FybmluZyhgSXQgbG9va3MgYXMgdGhvdWdoICR7dXNlcnNjcmlwdC5uYW1lfSBoYXMgYWxyZWFkeSBydW4gKGJlY2F1c2UgdGhlIGF0dHJpYnV0ZSBcIiR7YXR0cn1cIiB3YXMgZm91bmQgb24gPGhlYWQ+KS4gU3RvcHBpbmcuYCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIFwiXCIpO1xuICAgICAgICB1c2Vyc2NyaXB0LmluaXRpYWxBY3Rpb24oKTtcbiAgICAgICAgc3R5bGVzaGVldHMuaW5zZXJ0KHVzZXJzY3JpcHQuc3R5bGVzaGVldHMpO1xuICAgICAgICBvcGVyYXRpb25zLnJ1bih1c2Vyc2NyaXB0Lm9wZXJhdGlvbnNQbGFuKTtcbiAgICB9XG59XG5mdW5jdGlvbiBhdHRyaWJ1dGUoaWQpIHtcbiAgICByZXR1cm4gXCJkYXRhLVwiICsgaWQgKyBcIi1oYXMtcnVuXCI7XG59XG4iLCIvLyBUaGlzIGZpbGUgY2Fubm90IGNvbnRhaW4gV2VicGFjay1yZXNvbHZlZCBpbXBvcnRzIChlLmcuIFwifnNyYy9mb29cIikuXHJcbmV4cG9ydCBjb25zdCBPUEVSQVRJT05TX0lOVEVSVkFMID0gMjAwOyAvLyBtc1xyXG5leHBvcnQgY29uc3QgT1BFUkFUSU9OU19FWFRSQV9UUklFUyA9IDM7XHJcbiIsIi8qKiBDcmVhdGVzIGFuIEhUTUwgZWxlbWVudCBiYXNlZCBvbiBkZXN0cnVjdHVyZWQgcGFyYW1ldGVycy5cclxuICpcclxuICogUmVxdWlyZXMgdHlwZSBhbmQgbXVzdCBoYXZlICdiZWZvcmU6IHt9JyAoaWYgeW91J3JlIG5vdCB1c2luZyBpdCwgbWFrZSBpdCBhbiBlbXB0eSBvYmplY3QpLlxyXG4gKi9cclxuY29uc3QgY3JlYXRlID0gKHsgdHlwZSwgaWQsIGNsYXNzUHJlZml4LCBjbGFzc2VzLCBiZWZvcmU6IHsgbm9kZSwgcmVmZXJlbmNlTm9kZSB9LCBjaGlsZE9mLCB0ZXh0LCBodG1sLCB9KSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIGVsZW1lbnQuaWQgPSBpZDtcclxuICAgIH1cclxuICAgIGlmIChBcnJheS5pc0FycmF5KGNsYXNzZXMpKSB7XHJcbiAgICAgICAgY2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzUHJlZml4ICsgJy0nICsgY2xhc3NOYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNsYXNzZXMpIHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NQcmVmaXggKyAnLScgKyBjbGFzc2VzKTtcclxuICAgIH1cclxuICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgbm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgcmVmZXJlbmNlTm9kZSAhPT0gbnVsbCAmJiByZWZlcmVuY2VOb2RlICE9PSB2b2lkIDAgPyByZWZlcmVuY2VOb2RlIDogbnVsbCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjaGlsZE9mKSB7XHJcbiAgICAgICAgY2hpbGRPZi5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgIH1cclxuICAgIGlmICh0ZXh0KSB7XHJcbiAgICAgICAgZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG4gICAgaWYgKGh0bWwpIHtcclxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlO1xyXG4iLCJleHBvcnQgY29uc3QgZmV0Y2hFbGVtZW50ID0gKHF1ZXJ5KSA9PiB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBmZXRjaEVsZW1lbnRBbGwgPSAocXVlcnkpID0+IHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KTtcclxufTtcclxuIiwiLyoqIFJlcGxhY2VzIGVtb2ppIGFuZCBvdGhlciBjaGFyYWN0ZXJzIHRoYXQgU1FMIGNhbid0IHByb2Nlc3MgaW50byBhIHVuaWNvZGUgc3RyaW5nIHRoYXQgaXQgY2FuIGFjdHVhbGx5IHVuZGVyc3RhbmQuXHJcbiAqL1xyXG5jb25zdCByZXBsYWNlRW1vamkgPSAoaW5wdXQpID0+IHtcclxuICAgIHZhciBfYTtcclxuICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQudmFsdWUubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBjb25zdCBjb2RlID0gKF9hID0gaW5wdXQudmFsdWUuY29kZVBvaW50QXQoaSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IDA7XHJcbiAgICAgICAgaWYgKGNvZGUgPiAweGZmZmYpIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IFsnJiMnLCBjb2RlLCAnOyddLmpvaW4oJycpO1xyXG4gICAgICAgICAgICBpICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21Db2RlUG9pbnQoY29kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgcmVwbGFjZUVtb2ppO1xyXG4iLCJpbXBvcnQgeyBjb21wb3NlIH0gZnJvbSBcIkB0eXBlZC9jb21wb3NlXCI7XHJcbmltcG9ydCB7IGVudmlyb25tZW50LCBlcnJvcnMsIGxvZywgdXNlcnNjcmlwdGVyIH0gZnJvbSBcInVzZXJzY3JpcHRlclwiO1xyXG5pbXBvcnQgKiBhcyBDT05GSUcgZnJvbSBcIn5zcmMvY29uZmlnXCI7XHJcbmltcG9ydCBPUEVSQVRJT05TIGZyb20gXCJ+c3JjL29wZXJhdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgU0lURSBmcm9tIFwifnNyYy9zaXRlXCI7XHJcbmltcG9ydCBTVFlMRVNIRUVUUyBmcm9tIFwifnNyYy9zdHlsZXNoZWV0c1wiO1xyXG5pbXBvcnQgVSBmcm9tIFwifnNyYy91c2Vyc2NyaXB0XCI7XHJcbmNvbnN0IGRlc2NyaWJlRmFpbHVyZSA9IGVycm9ycy5mYWlsdXJlRGVzY3JpYmVyKHtcclxuICAgIHNpdGVOYW1lOiBTSVRFLk5BTUUsXHJcbiAgICBleHRlbnNpb25OYW1lOiBVLm5hbWUsXHJcbiAgICBsb2NhdGlvbjogZG9jdW1lbnQubG9jYXRpb24sXHJcbn0pO1xyXG51c2Vyc2NyaXB0ZXIucnVuKHtcclxuICAgIGlkOiBVLmlkLFxyXG4gICAgbmFtZTogVS5uYW1lLFxyXG4gICAgaW5pdGlhbEFjdGlvbjogKCkgPT4gbG9nLmxvZyhgJHtVLm5hbWV9ICR7VS52ZXJzaW9ufWApLFxyXG4gICAgc3R5bGVzaGVldHM6IFNUWUxFU0hFRVRTLFxyXG4gICAgb3BlcmF0aW9uc1BsYW46IHtcclxuICAgICAgICBvcGVyYXRpb25zOiBPUEVSQVRJT05TLFxyXG4gICAgICAgIGludGVydmFsOiBDT05GSUcuT1BFUkFUSU9OU19JTlRFUlZBTCxcclxuICAgICAgICB0cnlVbnRpbDogZW52aXJvbm1lbnQuRE9NQ09OVEVOVExPQURFRCxcclxuICAgICAgICBleHRyYVRyaWVzOiBDT05GSUcuT1BFUkFUSU9OU19FWFRSQV9UUklFUyxcclxuICAgICAgICBoYW5kbGVGYWlsdXJlczogZmFpbHVyZXMgPT4gZmFpbHVyZXMuZm9yRWFjaChjb21wb3NlKGxvZy5lcnJvciwgZGVzY3JpYmVGYWlsdXJlKSksXHJcbiAgICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IGNyZWF0ZSBmcm9tICd+c3JjL2hlbHBlcnMvY3JlYXRlJztcclxuaW1wb3J0IHsgZmV0Y2hFbGVtZW50QWxsIH0gZnJvbSAnfnNyYy9oZWxwZXJzL2ZldGNoRWxlbWVudCc7XHJcbmltcG9ydCByZXBsYWNlRW1vamkgZnJvbSAnfnNyYy9oZWxwZXJzL3JlcGxhY2VFbW9qaSc7XHJcbmNvbnN0IGNyZWF0ZVJlcGxhY2VBY3Rpb24gPSAoYWN0aW9uRWxlbWVudCwgdGV4dGJveCkgPT4ge1xyXG4gICAgY29uc3QgcHVibGlzaCA9IGFjdGlvbkVsZW1lbnQgPT09IG51bGwgfHwgYWN0aW9uRWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWN0aW9uRWxlbWVudC5jaGlsZHJlblsxXTtcclxuICAgIGlmIChhY3Rpb25FbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgYWxyZWFkeUV4aXN0ID0gYWN0aW9uRWxlbWVudCA9PT0gbnVsbCB8fCBhY3Rpb25FbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhY3Rpb25FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWluYS1yZXBsYWNlJyk7XHJcbiAgICAgICAgaWYgKCFhbHJlYWR5RXhpc3QpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVwbGFjZSA9IGNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGl2JyxcclxuICAgICAgICAgICAgICAgIGNsYXNzUHJlZml4OiAncmVpbmEnLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NlczogWydidXR0b24nLCAncmVwbGFjZSddLFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlOiB7fSxcclxuICAgICAgICAgICAgICAgIGNoaWxkT2Y6IGFjdGlvbkVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnUmVwbGFjZScsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwdWJsaXNoKTtcclxuICAgICAgICAgICAgcmVwbGFjZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRleHRib3guZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JykpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLyogaWYgKHB1Ymxpc2gpIHtcclxuICAgICAgICAgICAgICAgIHJlcGxhY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHVibGlzaC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSAqL1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuZXhwb3J0IGNvbnN0IHVuaWNvZGlmaWVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGV4dGJveGVzID0gZmV0Y2hFbGVtZW50QWxsKCcuYWN0aXZpdHktZWRpdCA+IC5pbnB1dCA+IHRleHRhcmVhJyk7XHJcbiAgICBjb25zdCBhY3Rpdml0eUFjdGlvbnMgPSBmZXRjaEVsZW1lbnRBbGwoJy5hY3Rpdml0eS1lZGl0IC5hY3Rpb25zJyk7XHJcbiAgICBjb25zdCB0b3RhbFRleHRib3hlcyA9IHRleHRib3hlcyA/IHRleHRib3hlcy5sZW5ndGggOiBudWxsO1xyXG4gICAgaWYgKHRleHRib3hlcyAmJiB0b3RhbFRleHRib3hlcyAmJiBhY3Rpdml0eUFjdGlvbnMpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbFRleHRib3hlczsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gdGV4dGJveGVzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBhY3Rpdml0eUFjdGlvbnNbaV07XHJcbiAgICAgICAgICAgIGNyZWF0ZVJlcGxhY2VBY3Rpb24oYWN0aW9uLCBpbnB1dCk7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGV4dGJveGVzW2ldLnZhbHVlID0gcmVwbGFjZUVtb2ppKGlucHV0KTtcclxuICAgICAgICAgICAgICAgIHRleHRib3hlc1tpXS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHVuaWNvZGlmaWVyO1xyXG4iLCJpbXBvcnQgeyBsb2cgfSBmcm9tICd1c2Vyc2NyaXB0ZXInO1xyXG5pbXBvcnQgeyBBTFdBWVMsIERPTUNPTlRFTlRMT0FERUQgfSBmcm9tICd1c2Vyc2NyaXB0ZXIvbGliL2Vudmlyb25tZW50JztcclxuaW1wb3J0IHsgb3BlcmF0aW9uIH0gZnJvbSAndXNlcnNjcmlwdGVyL2xpYi9vcGVyYXRpb25zJztcclxuaW1wb3J0IHsgZmV0Y2hFbGVtZW50IH0gZnJvbSAnLi9oZWxwZXJzL2ZldGNoRWxlbWVudCc7XHJcbmltcG9ydCB1bmljb2RpZmllciBmcm9tICcuL21vZHVsZXMvdW5pY29kaWZpZXInO1xyXG5jb25zdCBPUEVSQVRJT05TID0gW1xyXG4gICAgb3BlcmF0aW9uKHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1Rlc3QnLFxyXG4gICAgICAgIGNvbmRpdGlvbjogQUxXQVlTLFxyXG4gICAgICAgIC8qIGRlcGVuZGVuY2llczogeyBhY3Rpdml0eUFjdGlvbnM6IFNJVEUuU0VMRUNUT1JfQUNUSVZJVFlfQUNUSU9OUyB9LCAqL1xyXG4gICAgICAgIGFjdGlvbjogKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZldGNoRWxlbWVudCgnLmFjdGl2aXR5LWVkaXQgLmFjdGlvbnMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaWNvZGlmaWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nLmxvZygnZmlyZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWZlclVudGlsOiBET01DT05URU5UTE9BREVELFxyXG4gICAgfSksXHJcbl07XHJcbmV4cG9ydCBkZWZhdWx0IE9QRVJBVElPTlM7XHJcbiIsIi8vIFRoaXMgZmlsZSBjYW5ub3QgY29udGFpbiBXZWJwYWNrLXJlc29sdmVkIGltcG9ydHMgKGUuZy4gXCJ+c3JjL2Zvb1wiKS5cclxuaW1wb3J0IFUgZnJvbSAnLi91c2Vyc2NyaXB0JztcclxuZXhwb3J0IGNvbnN0IE5BTUUgPSBVLnNpdGVuYW1lO1xyXG5leHBvcnQgY29uc3QgSE9TVE5BTUUgPSBVLmhvc3RuYW1lO1xyXG5leHBvcnQgY29uc3QgU0VMRUNUT1JfQUNUSVZJVFlfQUNUSU9OUyA9ICcuYWN0aXZpdHktZWRpdCAuYWN0aW9ucyc7XHJcbiIsImltcG9ydCB7IEFMV0FZUyB9IGZyb20gJ3VzZXJzY3JpcHRlci9saWIvZW52aXJvbm1lbnQnO1xyXG5pbXBvcnQgeyBzdHlsZXNoZWV0IH0gZnJvbSAndXNlcnNjcmlwdGVyL2xpYi9zdHlsZXNoZWV0cyc7XHJcbmNvbnN0IFNUWUxFU0hFRVRTID0ge1xyXG4gICAgbWFpbjogc3R5bGVzaGVldCh7XHJcbiAgICAgICAgY29uZGl0aW9uOiBBTFdBWVMsXHJcbiAgICAgICAgY3NzOiBgXG4gICAgICAgICAgICAucmVpbmEtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYih2YXIoLS1jb2xvci1ibHVlKSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IodmFyKC0tY29sb3ItdGV4dC1icmlnaHQpKTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE92ZXJwYXNzLC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMThweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmVpbmEtYnV0dG9uLnJlaW5hLXJlcGxhY2Uge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYih2YXIoLS1jb2xvci1ncmVlbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICBgLFxyXG4gICAgfSksXHJcbn07XHJcbi8vIFRoaXMgdHJpY2sgdW5jb3ZlcnMgdHlwZSBlcnJvcnMgaW4gU1RZTEVTSEVFVFMgd2hpbGUgcmV0YWluaW5nIHRoZSBzdGF0aWMga25vd2xlZGdlIG9mIGl0cyBwcm9wZXJ0aWVzIChzbyB3ZSBjYW4gc3RpbGwgd3JpdGUgZS5nLiBTVFlMRVNIRUVUUy5mb28pOlxyXG5jb25zdCBfID0gU1RZTEVTSEVFVFM7XHJcbnZvaWQgXztcclxuZXhwb3J0IGRlZmF1bHQgU1RZTEVTSEVFVFM7XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGlkOiBcInJlaW5hXCIsXHJcbiAgICBuYW1lOiBcIlJlaW5hJ3MgQW5pTGlzdCBVc2Vyc2NyaXB0XCIsXHJcbiAgICB2ZXJzaW9uOiBcIjAuMS4wXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJEb2VzIHN0dWZmIHRvIEFuaUxpc3QgdGhhdCB5b3Ugd2lsbCBsaWtlLlwiLFxyXG4gICAgYXV0aG9yOiBcIlJlaW5hXCIsXHJcbiAgICBob3N0bmFtZTogXCJhbmlsaXN0LmNvXCIsXHJcbiAgICBzaXRlbmFtZTogXCJBbmlMaXN0XCIsXHJcbiAgICBuYW1lc3BhY2U6IFwiaHR0cHM6Ly9naXRodWIuY29tL1JlaW5hY2hhblwiLFxyXG4gICAgcnVuQXQ6IFwiZG9jdW1lbnQtc3RhcnRcIixcclxufTtcclxuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDekRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9