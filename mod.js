// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return Math.abs(r)};var t=function(t){var n,a,e,u,f,i;if(0===(a=t.length))return 0;for(n=!0,e=!0,u=r(t[0]),i=1;i<a;i++){if(f=r(t[i]),n&&f<u?n=!1:e&&f>u&&(e=!1),!e&&!n)return 0;u=f}return e&&n?3:e?1:2};export{t as default};
//# sourceMappingURL=mod.js.map
