// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return Math.abs(r)}function t(t){var n,e,u,f,a,i;if(0===(e=t.length))return 0;for(n=!0,u=!0,f=r(t[0]),i=1;i<e;i++){if(a=r(t[i]),n&&a<f?n=!1:u&&a>f&&(u=!1),!u&&!n)return 0;f=a}return u&&n?3:u?1:2}export{t as default};
//# sourceMappingURL=mod.js.map
