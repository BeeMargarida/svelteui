import{S as T,i as M,s as N,e as u,b as g,v as E,d as m,f as L,g as d,h as p,X as h,x as z,y as k,z as v,A as y,J as I,a6 as P,B as H,k as G,l as R,m as V,n as S,D as A}from"./index.b4f0bbdc.js";import{f as C}from"./Box.195443f6.js";const W=C((s,{iconSize:e})=>({root:{focusRing:"auto",position:"relative",appearance:"none",WebkitAppearance:"none",WebkitTapHighlightColor:"transparent",boxSizing:"border-box",height:`${s.fn.size({size:e,sizes:s.space})}px`,minHeight:`${s.fn.size({size:e,sizes:s.space})}px`,width:`${s.fn.size({size:e,sizes:s.space})}px`,minWidth:`${s.fn.size({size:e,sizes:s.space})}px`,padding:0,lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",textDecoration:"none"},icon:{height:`${s.fn.size({size:e,sizes:s.space})}px`,minHeight:`${s.fn.size({size:e,sizes:s.space})}px`,position:"static",margin:0,ml:0,mr:0,mt:0,mb:0}}));function j(s){let e,n=(s[2]instanceof HTMLElement||s[2]instanceof SVGElement)&&w(s);return{c(){n&&n.c(),e=u()},l(o){n&&n.l(o),e=u()},m(o,t){n&&n.m(o,t),g(o,e,t)},p(o,t){o[2]instanceof HTMLElement||o[2]instanceof SVGElement?n?n.p(o,t):(n=w(o),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:h,o:h,d(o){n&&n.d(o),o&&p(e)}}}function q(s){let e,n,o;const t=[{class:s[6](s[0],s[4].root,s[5]({css:s[1]}))},s[3]];var a=s[2];function c(r){let i={};for(let f=0;f<t.length;f+=1)i=A(i,t[f]);return{props:i}}return a&&(e=z(a,c())),{c(){e&&k(e.$$.fragment),n=u()},l(r){e&&v(e.$$.fragment,r),n=u()},m(r,i){e&&y(e,r,i),g(r,n,i),o=!0},p(r,i){const f=i&123?I(t,[i&115&&{class:r[6](r[0],r[4].root,r[5]({css:r[1]}))},i&8&&P(r[3])]):{};if(i&4&&a!==(a=r[2])){if(e){E();const _=e;m(_.$$.fragment,1,0,()=>{H(_,1)}),L()}a?(e=z(a,c()),k(e.$$.fragment),d(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(r){o||(e&&d(e.$$.fragment,r),o=!0)},o(r){e&&m(e.$$.fragment,r),o=!1},d(r){r&&p(n),e&&H(e,r)}}}function w(s){let e,n=s[2].outerHTML+"",o;return{c(){e=G("span"),this.h()},l(t){e=R(t,"SPAN",{class:!0});var a=V(e);a.forEach(p),this.h()},h(){S(e,"class",o=s[6](s[0],s[4].root,s[5]({css:s[1]})))},m(t,a){g(t,e,a),e.innerHTML=n},p(t,a){a&4&&n!==(n=t[2].outerHTML+"")&&(e.innerHTML=n),a&115&&o!==(o=t[6](t[0],t[4].root,t[5]({css:t[1]})))&&S(e,"class",o)},d(t){t&&p(e)}}}function D(s){let e,n,o,t;const a=[q,j],c=[];function r(i,f){return typeof i[2]=="function"?0:i[7]?-1:1}return~(e=r(s))&&(n=c[e]=a[e](s)),{c(){n&&n.c(),o=u()},l(i){n&&n.l(i),o=u()},m(i,f){~e&&c[e].m(i,f),g(i,o,f),t=!0},p(i,[f]){let _=e;e=r(i),e===_?~e&&c[e].p(i,f):(n&&(E(),m(c[_],1,1,()=>{c[_]=null}),L()),~e?(n=c[e],n?n.p(i,f):(n=c[e]=a[e](i),n.c()),d(n,1),n.m(o.parentNode,o)):n=null)},i(i){t||(d(n),t=!0)},o(i){m(n),t=!1},d(i){~e&&c[e].d(i),i&&p(o)}}}function B(s,e,n){let o,t,a,{className:c="",override:r={},icon:i=void 0,iconSize:f=16,iconProps:_={}}=e;const b=typeof HTMLElement>"u"&&typeof SVGElement>"u";return s.$$set=l=>{"className"in l&&n(0,c=l.className),"override"in l&&n(1,r=l.override),"icon"in l&&n(2,i=l.icon),"iconSize"in l&&n(8,f=l.iconSize),"iconProps"in l&&n(3,_=l.iconProps)},s.$$.update=()=>{s.$$.dirty&256&&n(6,{cx:o,getStyles:t,classes:a}=W({iconSize:f},{name:"IconRenderer"}),o,(n(5,t),n(8,f)),(n(4,a),n(8,f))),s.$$.dirty&20&&!b&&(i instanceof HTMLElement||i instanceof SVGElement)&&i.classList.add(...a.icon.split(" "))},[c,r,i,_,a,t,o,b,f]}class J extends T{constructor(e){super(),M(this,e,B,D,N,{className:0,override:1,icon:2,iconSize:8,iconProps:3})}}const K=J;export{K as I};
