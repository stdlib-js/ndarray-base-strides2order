// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return Math.abs(r)};function t(t){var n,e,u,a,f,i;if(0===(e=t.length))return 0;for(n=!0,u=!0,a=r(t[0]),i=1;i<e;i++){if(f=r(t[i]),n&&f<a?n=!1:u&&f>a&&(u=!1),!u&&!n)return 0;a=f}return u&&n?3:u?1:2}export{t as default};
//# sourceMappingURL=mod.js.map
