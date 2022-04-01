// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";var t=r;var e=function(r){var e,s,a,n,i,f;if(0===(s=r.length))return 0;for(e=!0,a=!0,n=t(r[0]),f=1;f<s;f++){if(i=t(r[f]),e&&i<n?e=!1:a&&i>n&&(a=!1),!a&&!e)return 0;n=i}return a&&e?3:a?1:2};export{e as default};
//# sourceMappingURL=index.mjs.map
