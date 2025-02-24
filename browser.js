// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";function e(e){return Math.abs(e)}return function(t){var n,r,f,o,i,u;if(0===(r=t.length))return 0;for(n=!0,f=!0,o=e(t[0]),u=1;u<r;u++){if(i=e(t[u]),n&&i<o?n=!1:f&&i>o&&(f=!1),!f&&!n)return 0;o=i}return f&&n?3:f?1:2}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).strides2order=t();
//# sourceMappingURL=browser.js.map
