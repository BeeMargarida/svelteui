import{S as P,i as A,s as E,H as b,w as N,a5 as D,y as R,z as U,A as Y,N as j,a7 as q,a6 as F,g as H,d as M,B as O,O as k,P as T,R as V,T as G,k as I,l as J,m as K,h as y,n as z,b as L}from"./index.b0fe5a0f.js";import{f as Q,u as S,c as W,d as X}from"./navigation.9bd98935.js";import{U as Z}from"./UnstyledButton.5f2ef2f6.js";const w={xs:12,sm:18,md:24,lg:34,xl:42},v=Q((s,{color:t,size:e,opened:r})=>{const n=s.fn.size({size:e,sizes:w});return{root:{borderRadius:s.radii.sm.value,width:n+10,height:n+10,padding:+s.space.xs.value/2,cursor:"pointer"},burger:{position:"relative",userSelect:"none",boxSizing:"border-box","&, &:before, &:after":{[`${s.dark} &`]:{backgroundColor:"white"},display:"block",width:n,height:Math.ceil(n/12),backgroundColor:s.fn.themeColor(t,6),outline:"1px solid transparent",transitionProperty:"background-color, transform",transitionDuration:"300ms","@media (prefers-reduced-motion)":{transitionDuration:"0ms"}},"&:before, &:after":{position:"absolute",content:'""',left:0},"&:before":{top:n/3*-1},"&:after":{top:n/3},"&.opened":r?{backgroundColor:"transparent","&:before":{transform:`translateY(${n/3}px) rotate(45deg)`},"&:after":{transform:`translateY(-${n/3}px) rotate(-45deg)`}}:{}}}});function x(s){let t,e;return{c(){t=I("span"),this.h()},l(r){t=J(r,"SPAN",{class:!0}),K(t).forEach(y),this.h()},h(){z(t,"class",e=s[5](s[7].burger,{opened:s[4]}))},m(r,n){L(r,t,n)},p(r,n){n&176&&e!==(e=r[5](r[7].burger,{opened:r[4]}))&&z(t,"class",e)},d(r){r&&y(t)}}}function $(s){let t,e,r;const n=[{use:[s[8],[S,s[1]]]},{override:{padding:5}},{class:s[5](s[2],s[7].root,s[6]({css:s[3]}))},s[9]];function m(o){s[14](o)}let c={$$slots:{default:[x]},$$scope:{ctx:s}};for(let o=0;o<n.length;o+=1)c=b(c,n[o]);return s[0]!==void 0&&(c.element=s[0]),t=new Z({props:c}),N.push(()=>D(t,"element",m)),{c(){R(t.$$.fragment)},l(o){U(t.$$.fragment,o)},m(o,l){Y(t,o,l),r=!0},p(o,[l]){const u=l&1006?j(n,[l&258&&{use:[o[8],[S,o[1]]]},n[1],l&236&&{class:o[5](o[2],o[7].root,o[6]({css:o[3]}))},l&512&&q(o[9])]):{};l&32944&&(u.$$scope={dirty:l,ctx:o}),!e&&l&1&&(e=!0,u.element=o[0],F(()=>e=!1)),t.$set(u)},i(o){r||(H(t.$$.fragment,o),r=!0)},o(o){M(t.$$.fragment,o),r=!1},d(o){O(t,o)}}}function ee(s,t,e){let r,n,m,c;const o=["use","element","class","override","opened","color","size"];let l=k(t,o),u;T(s,W,a=>e(13,u=a));let{use:_=[],element:g=void 0,class:p="",override:h={},opened:f=!0,color:i=void 0,size:d="md"}=t;const B=X(V());function C(a){g=a,e(0,g)}return s.$$set=a=>{t=b(b({},t),G(a)),e(9,l=k(t,o)),"use"in a&&e(1,_=a.use),"element"in a&&e(0,g=a.element),"class"in a&&e(2,p=a.class),"override"in a&&e(3,h=a.override),"opened"in a&&e(4,f=a.opened),"color"in a&&e(10,i=a.color),"size"in a&&e(11,d=a.size)},s.$$.update=()=>{s.$$.dirty&9216&&e(12,r=i||(u==="dark"?"white":"black")),s.$$.dirty&6160&&e(7,{classes:n,getStyles:m,cx:c}=v({color:r,size:d,opened:f},{name:"Burger"}),n,(e(6,m),e(12,r),e(11,d),e(4,f),e(10,i),e(13,u)),(e(5,c),e(12,r),e(11,d),e(4,f),e(10,i),e(13,u)))},[g,_,p,h,f,c,m,n,B,l,i,d,r,u,C]}class se extends P{constructor(t){super(),A(this,t,ee,$,E,{use:1,element:0,class:2,override:3,opened:4,color:10,size:11})}}const ne=se;export{ne as B};
