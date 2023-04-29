import{S as J,i as U,s as V,k as L,a as Y,l as S,m as T,c as j,h as y,n as f,am as b,a8 as R,b as q,Y as I,J as X,a1 as G,F as K,C as z,E as M,R as O,q as Q,r as Z,u as p,w as v}from"./index.b0fe5a0f.js";import{f as x,e as w,u as $,d as ee}from"./navigation.fd10cd14.js";import{r as oe}from"./random-id.a2782d3f.js";const A={xs:2,sm:4,md:8,lg:16,xl:32},h={xs:{height:16,width:30,handle:12,labelFont:12,insideLabelFont:5},sm:{height:20,width:38,handle:14,labelFont:14,insideLabelFont:6},md:{height:24,width:46,handle:18,labelFont:16,insideLabelFont:7},lg:{height:30,width:56,handle:22,labelFont:18,insideLabelFont:9},xl:{height:36,width:68,handle:28,labelFont:20,insideLabelFont:11}},le=x((o,{radius:n,size:e,transitionFunction:d,color:s,offLabel:a,onLabel:c})=>({root:{display:"flex",alignItems:"center"},input:{focusRing:"auto",overflow:"hidden",WebkitTapHighlightColor:"transparent",position:"relative",borderRadius:A[n],backgroundColor:o.fn.themeColor("gray",2),border:`1px solid ${o.fn.themeColor("gray",3)}`,height:h[e].height,width:h[e].width,minWidth:h[e].width,margin:0,transitionProperty:"background-color, border-color",transitionTimingFunction:d,transitionDuration:"150ms",boxSizing:"border-box",appearance:"none",display:"flex",alignItems:"center",fontSize:h[e].insideLabelFont,fontWeight:600,[`${w.selector} &`]:{backgroundColor:o.fn.themeColor("dark",6),borderColor:o.fn.themeColor("dark",4)},"&:hover":{cursor:"pointer"},"&::before":{zIndex:1,borderRadius:A[n],boxSizing:"border-box",content:"''",display:"block",backgroundColor:"White",border:`1px solid ${o.fn.themeColor("gray",3)}`,height:h[e].handle,width:h[e].handle,transition:`transform 150ms ${d}`,transform:`translateX(${e==="xs"?1:2}px)`,"@media (prefers-reduced-motion)":{transitionDuration:"0ms"},[`${w.selector} &`]:{borderColor:"White"}},"&::after":{position:"absolute",zIndex:0,display:"flex",height:"100%",alignItems:"center",lineHeight:0,right:"10%",transform:"translateX(0)",content:a?`'${a}'`:"''",color:o.fn.themeColor("gray",6),transition:`color 150ms ${d}`,[`${w.selector} &`]:{color:o.fn.themeColor("dark",1)}},"&:checked":{backgroundColor:o.fn.themeColor(s,6),borderColor:o.fn.themeColor(s,6),"&::before":{transform:`translateX(${h[e].width-h[e].handle-(e==="xs"?3:4)}px)`,borderColor:"White"},"&::after":{transform:"translateX(-200%)",content:c?`'${c}'`:"''",color:"White"}},"&.disabled":{backgroundColor:o.fn.themeColor("gray",2),borderColor:o.fn.themeColor("gray",2),cursor:"not-allowed",[`${w.selector} &`]:{backgroundColor:o.fn.themeColor("dark",4),borderColor:o.fn.themeColor("dark",3)},"&::before":{borderColor:o.fn.themeColor("gray",2),backgroundColor:o.fn.themeColor("gray",0),[`${w.selector} &`]:{backgroundColor:o.fn.themeColor("dark",3),borderColor:o.fn.themeColor("dark",4)}}}},label:{fontSize:h[e].labelFont,lineHeight:`${h[e].height}px`,fontWeight:600,paddingLeft:o.fn.size({size:"sm",sizes:o.space})}}));function H(o){let n,e,d;return{c(){n=L("label"),e=Q(o[6]),this.h()},l(s){n=S(s,"LABEL",{for:!0,class:!0});var a=T(n);e=Z(a,o[6]),a.forEach(y),this.h()},h(){f(n,"for",o[5]),f(n,"class",d=b(o[9].label)+" svelte-1oesh6k")},m(s,a){q(s,n,a),I(n,e)},p(s,a){a&64&&p(e,s[6]),a&32&&f(n,"for",s[5]),a&512&&d!==(d=b(s[9].label)+" svelte-1oesh6k")&&f(n,"class",d)},d(s){s&&y(n)}}}function ne(o){let n,e,d,s,a,c,u,g,i=o[6]&&H(o);return{c(){n=L("div"),e=L("input"),a=Y(),i&&i.c(),this.h()},l(r){n=S(r,"DIV",{class:!0});var t=T(n);e=S(t,"INPUT",{id:!0,type:!0,class:!0}),a=j(t),i&&i.l(t),t.forEach(y),this.h()},h(){f(e,"id",o[5]),e.disabled=o[7],f(e,"type","checkbox"),f(e,"class",d=b(o[10](o[3],o[9].input,o[8]({css:o[4]})))+" svelte-1oesh6k"),R(e,"disabled",o[7]),f(n,"class",c=b(o[10](o[3],o[9].root))+" svelte-1oesh6k")},m(r,t){q(r,n,t),I(n,e),o[18](e),e.checked=o[1],I(n,a),i&&i.m(n,null),u||(g=[X(s=$.call(null,e,o[2])),X(o[11].call(null,e)),G(e,"change",o[19])],u=!0)},p(r,[t]){t&32&&f(e,"id",r[5]),t&128&&(e.disabled=r[7]),t&1816&&d!==(d=b(r[10](r[3],r[9].input,r[8]({css:r[4]})))+" svelte-1oesh6k")&&f(e,"class",d),s&&K(s.update)&&t&4&&s.update.call(null,r[2]),t&2&&(e.checked=r[1]),t&1944&&R(e,"disabled",r[7]),r[6]?i?i.p(r,t):(i=H(r),i.c(),i.m(n,null)):i&&(i.d(1),i=null),t&1544&&c!==(c=b(r[10](r[3],r[9].root))+" svelte-1oesh6k")&&f(n,"class",c)},i:z,o:z,d(r){r&&y(n),o[18](null),i&&i.d(),u=!1,M(g)}}}function re(o,n,e){let d,s,a,{use:c=[],element:u=void 0,class:g="",override:i={},color:r="blue",size:t="sm",radius:m="xl",transitionFunction:_="linear",id:W=oe(),label:E="",onLabel:k="",offLabel:C="",disabled:D=!1,checked:F=!1}=n;const N=ee(O());function P(l){v[l?"unshift":"push"](()=>{u=l,e(0,u)})}function B(){F=this.checked,e(1,F)}return o.$$set=l=>{"use"in l&&e(2,c=l.use),"element"in l&&e(0,u=l.element),"class"in l&&e(3,g=l.class),"override"in l&&e(4,i=l.override),"color"in l&&e(12,r=l.color),"size"in l&&e(13,t=l.size),"radius"in l&&e(14,m=l.radius),"transitionFunction"in l&&e(15,_=l.transitionFunction),"id"in l&&e(5,W=l.id),"label"in l&&e(6,E=l.label),"onLabel"in l&&e(16,k=l.onLabel),"offLabel"in l&&e(17,C=l.offLabel),"disabled"in l&&e(7,D=l.disabled),"checked"in l&&e(1,F=l.checked)},o.$$.update=()=>{o.$$.dirty&258048&&e(10,{cx:d,classes:s,getStyles:a}=le({color:r,offLabel:C,onLabel:k,radius:m,size:t,transitionFunction:_},{name:"Switch"}),d,(e(9,s),e(12,r),e(17,C),e(16,k),e(14,m),e(13,t),e(15,_)),(e(8,a),e(12,r),e(17,C),e(16,k),e(14,m),e(13,t),e(15,_)))},[u,F,c,g,i,W,E,D,a,s,d,N,r,t,m,_,k,C,P,B]}class se extends J{constructor(n){super(),U(this,n,re,ne,V,{use:2,element:0,class:3,override:4,color:12,size:13,radius:14,transitionFunction:15,id:5,label:6,onLabel:16,offLabel:17,disabled:7,checked:1})}}const de=se;export{de as S};