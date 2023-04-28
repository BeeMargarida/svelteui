import{S as X,i as Y,s as Z,D as W,w,a4 as x,y as $,z as ee,A as oe,J as se,a6 as te,a5 as ne,g as _,d as b,B as le,M as j,ai as re,P as ie,Q as ae,C as A,a as F,k as E,e as L,c as M,l as I,m as P,h as m,n as C,b as k,v as O,f as q,G as R,H as D,I as H}from"./index.b4f0bbdc.js";import{f as fe,u as G,B as ce,d as ue}from"./Box.195443f6.js";const N={xs:{fontSize:9,height:16},sm:{fontSize:10,height:18},md:{fontSize:11,height:20},lg:{fontSize:13,height:26},xl:{fontSize:16,height:32}},de={xs:4,sm:4,md:6,lg:8,xl:10},ge=fe((o,{fullWidth:n,radius:l,size:i,color:f,gradientDeg:r,gradientFrom:s,gradientTo:e})=>{const g=o.fn.size({size:i,sizes:de}),u=o.fn.variant({color:f,variant:"light"}),a=o.fn.variant({color:f,variant:"filled"}),t=o.fn.variant({color:f,variant:"outline"}),d=o.fn.variant({variant:"gradient",gradient:{from:s,to:e,deg:r}}),{fontSize:p,height:h}=i in N?N[i]:N.md;return{root:{focusRing:"auto",fontSize:p,height:h,WebkitTapHighlightColor:"transparent",lineHeight:`${h-2}px`,textDecoration:"none",padding:`0 ${o.fn.size({size:i,sizes:o.space})/1.5}px`,boxSizing:"border-box",display:n?"flex":"inline-flex",alignItems:"center",justifyContent:"center",width:n?"100%":"auto",textTransform:"uppercase",borderRadius:o.fn.radius(l),fontWeight:700,letterSpacing:.25,cursor:"default",textOverflow:"ellipsis",overflow:"hidden","&.light":{[`${o.dark} &`]:{backgroundColor:u.background[0],color:u.color[0]},backgroundColor:u.background[1],color:u.color[1],border:"1px solid transparent"},"&.filled":{[`${o.dark} &`]:{backgroundColor:a.background[0]},backgroundColor:a.background[1],color:a.color,border:"1px solid transparent"},"&.outline":{[`${o.dark} &`]:{color:t.color[0],border:`1px solid ${t.border[0]}`},backgroundColor:t.background,color:t.color[1],border:`1px solid ${t.border[1]}`},"&.gradient":{backgroundImage:d.background,color:d.color,border:0},"&.dot":{darkMode:{color:o.fn.themeColor("dark",0),border:`1px solid ${o.fn.themeColor("dark",3)}`,"&::before":{backgroundColor:o.fn.themeColor(f,4)}},backgroundColor:"transparent",color:o.fn.themeColor("gray",7),border:`1px solid ${o.fn.themeColor("gray",3)}`,paddingLeft:o.fn.size({size:i,sizes:o.space})/1.5-g/2,"&::before":{content:'""',display:"block",width:g,height:g,borderRadius:g,backgroundColor:o.fn.themeColor(f,6),marginRight:g}}},leftSection:{marginRight:parseInt(o.space.xs.value)/2},rightSection:{marginLeft:parseInt(o.space.xs.value)/2},inner:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}}),_e=o=>({}),J=o=>({}),me=o=>({}),Q=o=>({});function y(o){let n,l,i;const f=o[15].leftSection,r=A(f,o,o[17],Q);return{c(){n=E("span"),r&&r.c(),this.h()},l(s){n=I(s,"SPAN",{class:!0});var e=P(n);r&&r.l(e),e.forEach(m),this.h()},h(){C(n,"class",l=o[4].leftSection)},m(s,e){k(s,n,e),r&&r.m(n,null),i=!0},p(s,e){r&&r.p&&(!i||e&131072)&&R(r,f,s,s[17],i?H(f,s[17],e,me):D(s[17]),Q),(!i||e&16&&l!==(l=s[4].leftSection))&&C(n,"class",l)},i(s){i||(_(r,s),i=!0)},o(s){b(r,s),i=!1},d(s){s&&m(n),r&&r.d(s)}}}function K(o){let n,l,i;const f=o[15].rightSection,r=A(f,o,o[17],J);return{c(){n=E("span"),r&&r.c(),this.h()},l(s){n=I(s,"SPAN",{class:!0});var e=P(n);r&&r.l(e),e.forEach(m),this.h()},h(){C(n,"class",l=o[4].rightSection)},m(s,e){k(s,n,e),r&&r.m(n,null),i=!0},p(s,e){r&&r.p&&(!i||e&131072)&&R(r,f,s,s[17],i?H(f,s[17],e,_e):D(s[17]),J),(!i||e&16&&l!==(l=s[4].rightSection))&&C(n,"class",l)},i(s){i||(_(r,s),i=!0)},o(s){b(r,s),i=!1},d(s){s&&m(n),r&&r.d(s)}}}function be(o){let n,l,i,f,r,s,e=o[8].leftSection&&y(o);const g=o[15].default,u=A(g,o,o[17],null);let a=o[8].rightSection&&K(o);return{c(){e&&e.c(),n=F(),l=E("span"),u&&u.c(),f=F(),a&&a.c(),r=L(),this.h()},l(t){e&&e.l(t),n=M(t),l=I(t,"SPAN",{class:!0});var d=P(l);u&&u.l(d),d.forEach(m),f=M(t),a&&a.l(t),r=L(),this.h()},h(){C(l,"class",i=o[4].inner)},m(t,d){e&&e.m(t,d),k(t,n,d),k(t,l,d),u&&u.m(l,null),k(t,f,d),a&&a.m(t,d),k(t,r,d),s=!0},p(t,d){t[8].leftSection?e?(e.p(t,d),d&256&&_(e,1)):(e=y(t),e.c(),_(e,1),e.m(n.parentNode,n)):e&&(O(),b(e,1,1,()=>{e=null}),q()),u&&u.p&&(!s||d&131072)&&R(u,g,t,t[17],s?H(g,t[17],d,null):D(t[17]),null),(!s||d&16&&i!==(i=t[4].inner))&&C(l,"class",i),t[8].rightSection?a?(a.p(t,d),d&256&&_(a,1)):(a=K(t),a.c(),_(a,1),a.m(r.parentNode,r)):a&&(O(),b(a,1,1,()=>{a=null}),q())},i(t){s||(_(e),_(u,t),_(a),s=!0)},o(t){b(e),b(u,t),b(a),s=!1},d(t){e&&e.d(t),t&&m(n),t&&m(l),u&&u.d(t),t&&m(f),a&&a.d(t),t&&m(r)}}}function he(o){let n,l,i;const f=[{use:[o[6],[G,o[1]]]},{class:o[5](o[2],o[3],o[4].root)},o[7]];function r(e){o[16](e)}let s={$$slots:{default:[be]},$$scope:{ctx:o}};for(let e=0;e<f.length;e+=1)s=W(s,f[e]);return o[0]!==void 0&&(s.element=o[0]),n=new ce({props:s}),w.push(()=>x(n,"element",r)),{c(){$(n.$$.fragment)},l(e){ee(n.$$.fragment,e)},m(e,g){oe(n,e,g),i=!0},p(e,[g]){const u=g&254?se(f,[g&66&&{use:[e[6],[G,e[1]]]},g&60&&{class:e[5](e[2],e[3],e[4].root)},g&128&&te(e[7])]):{};g&131344&&(u.$$scope={dirty:g,ctx:e}),!l&&g&1&&(l=!0,u.element=e[0],ne(()=>l=!1)),n.$set(u)},i(e){i||(_(n.$$.fragment,e),i=!0)},o(e){b(n.$$.fragment,e),i=!1},d(e){le(n,e)}}}function pe(o,n,l){let i,f;const r=["use","element","class","override","color","variant","gradient","size","radius","fullWidth"];let s=j(n,r),{$$slots:e={},$$scope:g}=n;const u=re(e);let{use:a=[],element:t=void 0,class:d="",override:p={},color:h="blue",variant:T="light",gradient:S={from:"blue",to:"cyan",deg:45},size:z="md",radius:v="xl",fullWidth:B=!1}=n;const U=ue(ie());function V(c){t=c,l(0,t)}return o.$$set=c=>{n=W(W({},n),ae(c)),l(7,s=j(n,r)),"use"in c&&l(1,a=c.use),"element"in c&&l(0,t=c.element),"class"in c&&l(2,d=c.class),"override"in c&&l(9,p=c.override),"color"in c&&l(10,h=c.color),"variant"in c&&l(3,T=c.variant),"gradient"in c&&l(11,S=c.gradient),"size"in c&&l(12,z=c.size),"radius"in c&&l(13,v=c.radius),"fullWidth"in c&&l(14,B=c.fullWidth),"$$scope"in c&&l(17,g=c.$$scope)},o.$$.update=()=>{o.$$.dirty&32256&&l(5,{cx:i,classes:f}=ge({color:h,fullWidth:B,size:z,radius:v,gradientDeg:S.deg,gradientFrom:S.from,gradientTo:S.to},{override:p,name:"Badge"}),i,(l(4,f),l(10,h),l(14,B),l(12,z),l(13,v),l(11,S),l(9,p)))},[t,a,d,T,f,i,U,s,u,p,h,S,z,v,B,e,V,g]}class Se extends X{constructor(n){super(),Y(this,n,pe,he,Z,{use:1,element:0,class:2,override:9,color:10,variant:3,gradient:11,size:12,radius:13,fullWidth:14})}}const ze=Se;export{ze as B};
