import{S as j,i as q,s as A,H as h,w as G,a5 as H,y as K,z as L,A as M,N as O,a7 as P,a6 as R,g as B,d as I,B as T,O as z,T as D,G as E,K as F,L as J,M as Q}from"./index.b0fe5a0f.js";import{f as U,n as V,B as W}from"./navigation.fd10cd14.js";const X=V({"from, to":{opacity:.4},"50%":{opacity:1}}),Y=U((o,{animate:t,circle:e,height:n,radius:i,width:r})=>({root:{[`${o.dark} &`]:{"&.visible":{"&::before":{background:o.fn.themeColor("dark",7)},"&::after":{background:o.fn.themeColor("dark",4)}}},height:n,width:e?n:`${r}%`,borderRadius:e?n:`$${i}`,position:"relative",overflow:"hidden","&.visible":{"&::before":{content:'""',position:"absolute",background:"white",top:0,bottom:0,left:0,right:0,zIndex:10},"&::after":{content:'""',position:"absolute",background:o.fn.themeColor("gray",3),top:0,bottom:0,left:0,right:0,animation:t?`${X} 1500ms linear infinite`:"none",zIndex:11}}}}));function Z(o){let t;const e=o[14].default,n=E(e,o,o[16],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),t=!0},p(i,r){n&&n.p&&(!t||r&65536)&&F(n,e,i,i[16],t?Q(e,i[16],r,null):J(i[16]),null)},i(i){t||(B(n,i),t=!0)},o(i){I(n,i),t=!1},d(i){n&&n.d(i)}}}function v(o){let t,e,n;const i=[{class:o[7](o[2],o[6].root,{visible:o[4]},o[5]({css:o[3]}))},{use:o[1]},o[8]];function r(s){o[15](s)}let u={$$slots:{default:[Z]},$$scope:{ctx:o}};for(let s=0;s<i.length;s+=1)u=h(u,i[s]);return o[0]!==void 0&&(u.element=o[0]),t=new W({props:u}),G.push(()=>H(t,"element",r)),{c(){K(t.$$.fragment)},l(s){L(t.$$.fragment,s)},m(s,a){M(t,s,a),n=!0},p(s,[a]){const f=a&510?O(i,[a&252&&{class:s[7](s[2],s[6].root,{visible:s[4]},s[5]({css:s[3]}))},a&2&&{use:s[1]},a&256&&P(s[8])]):{};a&65536&&(f.$$scope={dirty:a,ctx:s}),!e&&a&1&&(e=!0,f.element=s[0],R(()=>e=!1)),t.$set(f)},i(s){n||(B(t.$$.fragment,s),n=!0)},o(s){I(t.$$.fragment,s),n=!1},d(s){T(t,s)}}}function p(o,t,e){let n,i,r;const u=["use","element","class","override","visible","height","width","circle","radius","animate"];let s=z(t,u),{$$slots:a={},$$scope:f}=t,{use:k=[],element:_=void 0,class:S="",override:y={},visible:C=!0,height:c="auto",width:m=100,circle:b=null,radius:g=null,animate:d=!0}=t;function N(l){_=l,e(0,_)}return o.$$set=l=>{t=h(h({},t),D(l)),e(8,s=z(t,u)),"use"in l&&e(1,k=l.use),"element"in l&&e(0,_=l.element),"class"in l&&e(2,S=l.class),"override"in l&&e(3,y=l.override),"visible"in l&&e(4,C=l.visible),"height"in l&&e(9,c=l.height),"width"in l&&e(10,m=l.width),"circle"in l&&e(11,b=l.circle),"radius"in l&&e(12,g=l.radius),"animate"in l&&e(13,d=l.animate),"$$scope"in l&&e(16,f=l.$$scope)},o.$$.update=()=>{o.$$.dirty&15872&&e(7,{cx:n,classes:i,getStyles:r}=Y({animate:d,circle:b,height:c,radius:g,width:m},{name:"Skeleton"}),n,(e(6,i),e(13,d),e(11,b),e(9,c),e(12,g),e(10,m)),(e(5,r),e(13,d),e(11,b),e(9,c),e(12,g),e(10,m)))},[_,k,S,y,C,r,i,n,s,c,m,b,g,d,a,N,f]}class w extends j{constructor(t){super(),q(this,t,p,v,A,{use:1,element:0,class:2,override:3,visible:4,height:9,width:10,circle:11,radius:12,animate:13})}}const ee=w;export{ee as S};