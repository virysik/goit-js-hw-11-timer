parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"zVrS":[function(require,module,exports) {

},{}],"clu1":[function(require,module,exports) {

},{"./_styles.css":"zVrS"}],"Focm":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}require("./sass/main.scss");var r=function(t){return l(Math.floor(t/864e5))},a=function(t){return l(Math.floor(t%864e5/36e5))},o=function(t){return l(Math.floor(t%36e5/6e4))},i=function(t){return l(Math.floor(t%6e4/1e3))};function l(t){return String(t).padStart(2,"0")}var u=function(){function e(n){var r=n.selector,a=n.targetDate;t(this,e),this.selector=r,this.targetDate=a,this._intervalId=null}return n(e,[{key:"start",value:function(){var t=this.targetDate.getTime(),e=document.querySelector(this.selector),n=e.querySelector('[data-value="days"]'),l=n.nextElementSibling,u=e.querySelector('[data-value="hours"]'),c=u.nextElementSibling,s=e.querySelector('[data-value="mins"]'),f=s.nextElementSibling,v=e.querySelector('[data-value="secs"]'),S=v.nextElementSibling;this._intervalId=setInterval(function(){var e=Date.now(),x=t-e;n.textContent=r(x),u.textContent=a(x),s.textContent=o(x),v.textContent=i(x),l.textContent="01"===n.textContent?"DAY":"DAYS",c.textContent="01"===u.textContent?"HOUR":"HOURS",f.textContent="01"===s.textContent?"MINUTE":"MINUTES",S.textContent="01"===v.textContent?"SECOND":"SECONDS"},1e3)}},{key:"stop",value:function(){clearInterval(this._intervalId)}}]),e}(),c=new u({selector:"#timer-1",targetDate:new Date("May 15, 2021")});c.start();
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.d8e38277.js.map