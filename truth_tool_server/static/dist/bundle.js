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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("\r\nfunction getReviewId() {\r\n    return $('#review-id')[0].innerHTML;\r\n}\r\n\r\nfunction getSelectionText() {\r\n    var text = \"\";\r\n    if (window.getSelection) {\r\n        text = window.getSelection().toString();\r\n    } else if (document.selection && document.selection.type != \"Control\") {\r\n        text = document.selection.createRange().text;\r\n    }\r\n    return text;\r\n}\r\n\r\nfunction getRadioValue() {\r\n    var radios = $(\".radio-options\");\r\n\r\n    for(var i = 0; i < radios.length; i++){\r\n        if(radios[i].checked){\r\n            return radios[i].value;\r\n        }\r\n    }\r\n    return null;\r\n}\r\n\r\nfunction prepJsonSubmission() {\r\n    var data = {};\r\n\r\n    data.value = getRadioValue();\r\n    data.selectedText = getSelectionText();\r\n    data.reviewId = getReviewId();\r\n    return JSON.stringify(data);\r\n}\r\n\r\nfunction validateInputs() {\r\n    if (getRadioValue() == null) {\r\n        // Get the snackbar DIV\r\n        var x = $(\"#snackbar\")\r\n\r\n        // Add the \"show\" class to DIV\r\n        x.className = \"\";\r\n\r\n        // After 3 seconds, remove the show class from DIV\r\n        setTimeout(function(){ x.className = \"invisible\"; }, 3000);\r\n        return false;\r\n    }\r\n\r\n    return true;\r\n}\r\n\r\n$( \"#submit-button\" ).click(function() {\r\n\r\n    if (validateInputs()) {\r\n        alert(\"POST /review/\" + getReviewId() + \"/truth \" + prepJsonSubmission());\r\n    }\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2luZGV4LmpzPzdjMGMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmZ1bmN0aW9uIGdldFJldmlld0lkKCkge1xyXG4gICAgcmV0dXJuICQoJyNyZXZpZXctaWQnKVswXS5pbm5lckhUTUw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNlbGVjdGlvblRleHQoKSB7XHJcbiAgICB2YXIgdGV4dCA9IFwiXCI7XHJcbiAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICAgIHRleHQgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKTtcclxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uICYmIGRvY3VtZW50LnNlbGVjdGlvbi50eXBlICE9IFwiQ29udHJvbFwiKSB7XHJcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpLnRleHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGV4dDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmFkaW9WYWx1ZSgpIHtcclxuICAgIHZhciByYWRpb3MgPSAkKFwiLnJhZGlvLW9wdGlvbnNcIik7XHJcblxyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHJhZGlvcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgaWYocmFkaW9zW2ldLmNoZWNrZWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmFkaW9zW2ldLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwSnNvblN1Ym1pc3Npb24oKSB7XHJcbiAgICB2YXIgZGF0YSA9IHt9O1xyXG5cclxuICAgIGRhdGEudmFsdWUgPSBnZXRSYWRpb1ZhbHVlKCk7XHJcbiAgICBkYXRhLnNlbGVjdGVkVGV4dCA9IGdldFNlbGVjdGlvblRleHQoKTtcclxuICAgIGRhdGEucmV2aWV3SWQgPSBnZXRSZXZpZXdJZCgpO1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUlucHV0cygpIHtcclxuICAgIGlmIChnZXRSYWRpb1ZhbHVlKCkgPT0gbnVsbCkge1xyXG4gICAgICAgIC8vIEdldCB0aGUgc25hY2tiYXIgRElWXHJcbiAgICAgICAgdmFyIHggPSAkKFwiI3NuYWNrYmFyXCIpXHJcblxyXG4gICAgICAgIC8vIEFkZCB0aGUgXCJzaG93XCIgY2xhc3MgdG8gRElWXHJcbiAgICAgICAgeC5jbGFzc05hbWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAvLyBBZnRlciAzIHNlY29uZHMsIHJlbW92ZSB0aGUgc2hvdyBjbGFzcyBmcm9tIERJVlxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgeC5jbGFzc05hbWUgPSBcImludmlzaWJsZVwiOyB9LCAzMDAwKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbiQoIFwiI3N1Ym1pdC1idXR0b25cIiApLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIGlmICh2YWxpZGF0ZUlucHV0cygpKSB7XHJcbiAgICAgICAgYWxlcnQoXCJQT1NUIC9yZXZpZXcvXCIgKyBnZXRSZXZpZXdJZCgpICsgXCIvdHJ1dGggXCIgKyBwcmVwSnNvblN1Ym1pc3Npb24oKSk7XHJcbiAgICB9XHJcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);