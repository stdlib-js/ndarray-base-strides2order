"use strict";var v=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var o=v(function(m,n){
var f=require('@stdlib/math-base-special-abs/dist');function l(t){var r,s,e,i,u,a;if(s=t.length,s===0)return 0;for(r=!0,e=!0,i=f(t[0]),a=1;a<s;a++)if(u=f(t[a]),r&&u<i?r=!1:e&&u>i&&(e=!1),e||r)i=u;else return 0;return e&&r?3:e?1:2}n.exports=l
});var c=o();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
