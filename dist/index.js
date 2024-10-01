"use strict";var v=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var o=v(function(m,n){
var f=require('@stdlib/math-base-special-abs/dist');function l(t){var r,a,e,s,i,u;if(a=t.length,a===0)return 0;for(r=!0,e=!0,s=f(t[0]),u=1;u<a;u++)if(i=f(t[u]),r&&i<s?r=!1:e&&i>s&&(e=!1),e||r)s=i;else return 0;return e&&r?3:e?1:2}n.exports=l
});var c=o();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
