// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";function e(e){var r,s,n,i,a,f;if(0===(s=e.length))return 0;for(r=!0,n=!0,i=t(e[0]),f=1;f<s;f++){if(a=t(e[f]),r&&a<i?r=!1:n&&a>i&&(n=!1),!n&&!r)return 0;i=a}return n&&r?3:n?1:2}export{e as default};
//# sourceMappingURL=index.mjs.map
