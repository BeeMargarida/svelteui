import{S as U,i as y,s as x,H as V,V as I,W as M,m as B,h as c,n as E,X as O,b as g,Y as q,N as fe,C as R,O as X,T as le,y as b,z as h,A as w,g as $,d as u,B as k,P as Z,a as C,e as D,c as S,v as P,f as G,k as ee,q as L,l as te,r as T,u as H,J as se,a1 as ne,F as oe,E as ie}from"./index.b0fe5a0f.js";import{C as ae}from"./Cube.49bed4b5.js";import{o as $e,c as ue,G as W,T as z,B as ce,i as me}from"./navigation.9bd98935.js";import{S as re}from"./Stack.2f330b05.js";import{T as pe}from"./Tooltip.26353fe9.js";import{T as _e}from"./Title.5120ef89.js";import{C as A}from"./Center.b83aac32.js";import{c as ge}from"./use-clipboard.e2ea98fc.js";function de(n){let e,f,t=[{width:n[1]},{height:n[1]},{viewBox:"0 0 15 15"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},n[2]],l={};for(let r=0;r<t.length;r+=1)l=V(l,t[r]);return{c(){e=I("svg"),f=I("path"),this.h()},l(r){e=M(r,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var s=B(e);f=M(s,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),B(f).forEach(c),s.forEach(c),this.h()},h(){E(f,"fill-rule","evenodd"),E(f,"clip-rule","evenodd"),E(f,"d","M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z"),E(f,"fill",n[0]),O(e,l)},m(r,s){g(r,e,s),q(e,f)},p(r,[s]){s&1&&E(f,"fill",r[0]),O(e,l=fe(t,[s&2&&{width:r[1]},s&2&&{height:r[1]},{viewBox:"0 0 15 15"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},s&4&&r[2]]))},i:R,o:R,d(r){r&&c(e)}}}function be(n,e,f){const t=["color","size"];let l=X(e,t),{color:r="currentColor"}=e,{size:s=15}=e;return n.$$set=o=>{e=V(V({},e),le(o)),f(2,l=X(e,t)),"color"in o&&f(0,r=o.color),"size"in o&&f(1,s=o.size)},[r,s,l]}class he extends U{constructor(e){super(),y(this,e,be,de,x,{color:0,size:1})}}const we=he;function j(n){let e,f;return e=new _e({props:{order:3,$$slots:{default:[ke]},$$scope:{ctx:n}}}),{c(){b(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,l){w(e,t,l),f=!0},p(t,l){const r={};l&4098&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){f||($(e.$$.fragment,t),f=!0)},o(t){u(e.$$.fragment,t),f=!1},d(t){k(e,t)}}}function ke(n){let e;return{c(){e=L(n[1])},l(f){e=T(f,n[1])},m(f,t){g(f,e,t)},p(f,t){t&2&&H(e,f[1])},d(f){f&&c(e)}}}function ve(n){let e,f,t,l,r,s=n[1]&&j(n);return{c(){e=ee("h1"),f=L(n[0]),t=C(),s&&s.c(),l=D(),this.h()},l(o){e=te(o,"H1",{class:!0});var a=B(e);f=T(a,n[0]),a.forEach(c),t=S(o),s&&s.l(o),l=D(),this.h()},h(){E(e,"class","svelte-hsgtrm")},m(o,a){g(o,e,a),q(e,f),g(o,t,a),s&&s.m(o,a),g(o,l,a),r=!0},p(o,a){(!r||a&1)&&H(f,o[0]),o[1]?s?(s.p(o,a),a&2&&$(s,1)):(s=j(o),s.c(),$(s,1),s.m(l.parentNode,l)):s&&(P(),u(s,1,1,()=>{s=null}),G())},i(o){r||($(s),r=!0)},o(o){u(s),r=!1},d(o){o&&c(e),o&&c(t),s&&s.d(o),o&&c(l)}}}function F(n){let e,f;return e=new W({props:{noWrap:!0,spacing:n[7]<650?10:70,$$slots:{default:[Te]},$$scope:{ctx:n}}}),{c(){b(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,l){w(e,t,l),f=!0},p(t,l){const r={};l&128&&(r.spacing=t[7]<650?10:70),l&4296&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){f||($(e.$$.fragment,t),f=!0)},o(t){u(e.$$.fragment,t),f=!1},d(t){k(e,t)}}}function J(n){let e,f;return e=new z({props:{$$slots:{default:[Ce]},$$scope:{ctx:n}}}),{c(){b(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,l){w(e,t,l),f=!0},i(t){f||($(e.$$.fragment,t),f=!0)},o(t){u(e.$$.fragment,t),f=!1},d(t){k(e,t)}}}function Ce(n){let e;return{c(){e=L("Import")},l(f){e=T(f,"Import")},m(f,t){g(f,e,t)},d(f){f&&c(e)}}}function Se(n){let e,f,t,l,r;return{c(){e=ee("code"),f=L(n[3])},l(s){e=te(s,"CODE",{});var o=B(e);f=T(o,n[3]),o.forEach(c)},m(s,o){g(s,e,o),q(e,f),l||(r=[se(t=ge.call(null,e,n[3])),ne(e,"useclipboard",n[11])],l=!0)},p(s,o){o&8&&H(f,s[3]),t&&oe(t.update)&&o&8&&t.update.call(null,s[3])},d(s){s&&c(e),l=!1,ie(r)}}}function Le(n){let e,f;return e=new ce({props:{css:n[10],$$slots:{default:[Se]},$$scope:{ctx:n}}}),{c(){b(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,l){w(e,t,l),f=!0},p(t,l){const r={};l&4104&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){f||($(e.$$.fragment,t),f=!0)},o(t){u(e.$$.fragment,t),f=!1},d(t){k(e,t)}}}function Te(n){let e,f,t,l=n[7]>975&&J(n);return f=new pe({props:{closeDelay:200,withArrow:!0,position:n[7]<500?"top":"right",label:n[6]?"Copied":"Copy",color:n[6]?"green":"gray",$$slots:{default:[Le]},$$scope:{ctx:n}}}),{c(){l&&l.c(),e=C(),b(f.$$.fragment)},l(r){l&&l.l(r),e=S(r),h(f.$$.fragment,r)},m(r,s){l&&l.m(r,s),g(r,e,s),w(f,r,s),t=!0},p(r,s){r[7]>975?l?s&128&&$(l,1):(l=J(r),l.c(),$(l,1),l.m(e.parentNode,e)):l&&(P(),u(l,1,1,()=>{l=null}),G());const o={};s&128&&(o.position=r[7]<500?"top":"right"),s&64&&(o.label=r[6]?"Copied":"Copy"),s&64&&(o.color=r[6]?"green":"gray"),s&4104&&(o.$$scope={dirty:s,ctx:r}),f.$set(o)},i(r){t||($(l),$(f.$$.fragment,r),t=!0)},o(r){u(l),u(f.$$.fragment,r),t=!1},d(r){l&&l.d(r),r&&c(e),k(f,r)}}}function Y(n){let e,f;return e=new W({props:{spacing:65,$$slots:{default:[Ge]},$$scope:{ctx:n}}}),{c(){b(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,l){w(e,t,l),f=!0},p(t,l){const r={};l&4112&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){f||($(e.$$.fragment,t),f=!0)},o(t){u(e.$$.fragment,t),f=!1},d(t){k(e,t)}}}function ze(n){let e;return{c(){e=L("Source")},l(f){e=T(f,"Source")},m(f,t){g(f,e,t)},d(f){f&&c(e)}}}function Ee(n){let e,f,t;return e=new me({}),{c(){b(e.$$.fragment),f=L(`
					View Source Code`)},l(l){h(e.$$.fragment,l),f=T(l,`
					View Source Code`)},m(l,r){w(e,l,r),g(l,f,r),t=!0},i(l){t||($(e.$$.fragment,l),t=!0)},o(l){u(e.$$.fragment,l),t=!1},d(l){k(e,l),l&&c(f)}}}function Pe(n){let e,f;return e=new A({props:{override:{gap:"$4"},inline:!0,$$slots:{default:[Ee]},$$scope:{ctx:n}}}),{c(){b(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,l){w(e,t,l),f=!0},p(t,l){const r={};l&4096&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){f||($(e.$$.fragment,t),f=!0)},o(t){u(e.$$.fragment,t),f=!1},d(t){k(e,t)}}}function Ge(n){let e,f,t,l;return e=new z({props:{$$slots:{default:[ze]},$$scope:{ctx:n}}}),t=new z({props:{variant:"link",root:"a",href:`${n[9].github}${n[4]}`,$$slots:{default:[Pe]},$$scope:{ctx:n}}}),{c(){b(e.$$.fragment),f=C(),b(t.$$.fragment)},l(r){h(e.$$.fragment,r),f=S(r),h(t.$$.fragment,r)},m(r,s){w(e,r,s),g(r,f,s),w(t,r,s),l=!0},p(r,s){const o={};s&4096&&(o.$$scope={dirty:s,ctx:r}),e.$set(o);const a={};s&16&&(a.href=`${r[9].github}${r[4]}`),s&4096&&(a.$$scope={dirty:s,ctx:r}),t.$set(a)},i(r){l||($(e.$$.fragment,r),$(t.$$.fragment,r),l=!0)},o(r){u(e.$$.fragment,r),u(t.$$.fragment,r),l=!1},d(r){k(e,r),r&&c(f),k(t,r)}}}function K(n){let e,f;return e=new W({props:{spacing:78,$$slots:{default:[He]},$$scope:{ctx:n}}}),{c(){b(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,l){w(e,t,l),f=!0},p(t,l){const r={};l&4100&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){f||($(e.$$.fragment,t),f=!0)},o(t){u(e.$$.fragment,t),f=!1},d(t){k(e,t)}}}function Ne(n){let e;return{c(){e=L("Docs")},l(f){e=T(f,"Docs")},m(f,t){g(f,e,t)},d(f){f&&c(e)}}}function Be(n){let e,f,t;return e=new we({}),{c(){b(e.$$.fragment),f=L(`
					Edit This Page`)},l(l){h(e.$$.fragment,l),f=T(l,`
					Edit This Page`)},m(l,r){w(e,l,r),g(l,f,r),t=!0},i(l){t||($(e.$$.fragment,l),t=!0)},o(l){u(e.$$.fragment,l),t=!1},d(l){k(e,l),l&&c(f)}}}function De(n){let e,f;return e=new A({props:{override:{gap:"$4"},inline:!0,$$slots:{default:[Be]},$$scope:{ctx:n}}}),{c(){b(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,l){w(e,t,l),f=!0},p(t,l){const r={};l&4096&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){f||($(e.$$.fragment,t),f=!0)},o(t){u(e.$$.fragment,t),f=!1},d(t){k(e,t)}}}function He(n){let e,f,t,l;return e=new z({props:{$$slots:{default:[Ne]},$$scope:{ctx:n}}}),t=new z({props:{variant:"link",root:"a",href:`${n[9].docs}${n[2]}`,$$slots:{default:[De]},$$scope:{ctx:n}}}),{c(){b(e.$$.fragment),f=C(),b(t.$$.fragment)},l(r){h(e.$$.fragment,r),f=S(r),h(t.$$.fragment,r)},m(r,s){w(e,r,s),g(r,f,s),w(t,r,s),l=!0},p(r,s){const o={};s&4096&&(o.$$scope={dirty:s,ctx:r}),e.$set(o);const a={};s&4&&(a.href=`${r[9].docs}${r[2]}`),s&4096&&(a.$$scope={dirty:s,ctx:r}),t.$set(a)},i(r){l||($(e.$$.fragment,r),$(t.$$.fragment,r),l=!0)},o(r){u(e.$$.fragment,r),u(t.$$.fragment,r),l=!1},d(r){k(e,r),r&&c(f),k(t,r)}}}function Q(n){let e,f;return e=new W({props:{spacing:55,$$slots:{default:[Ae]},$$scope:{ctx:n}}}),{c(){b(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,l){w(e,t,l),f=!0},p(t,l){const r={};l&4128&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){f||($(e.$$.fragment,t),f=!0)},o(t){u(e.$$.fragment,t),f=!1},d(t){k(e,t)}}}function We(n){let e;return{c(){e=L("Package")},l(f){e=T(f,"Package")},m(f,t){g(f,e,t)},d(f){f&&c(e)}}}function Ve(n){let e,f,t,l;return e=new ae({}),{c(){b(e.$$.fragment),f=C(),t=L(n[5])},l(r){h(e.$$.fragment,r),f=S(r),t=T(r,n[5])},m(r,s){w(e,r,s),g(r,f,s),g(r,t,s),l=!0},p(r,s){(!l||s&32)&&H(t,r[5])},i(r){l||($(e.$$.fragment,r),l=!0)},o(r){u(e.$$.fragment,r),l=!1},d(r){k(e,r),r&&c(f),r&&c(t)}}}function qe(n){let e,f;return e=new A({props:{override:{gap:"$4"},inline:!0,$$slots:{default:[Ve]},$$scope:{ctx:n}}}),{c(){b(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,l){w(e,t,l),f=!0},p(t,l){const r={};l&4128&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){f||($(e.$$.fragment,t),f=!0)},o(t){u(e.$$.fragment,t),f=!1},d(t){k(e,t)}}}function Ae(n){let e,f,t,l;return e=new z({props:{$$slots:{default:[We]},$$scope:{ctx:n}}}),t=new z({props:{variant:"link",root:"a",href:`${n[9].npm}${n[5]}`,$$slots:{default:[qe]},$$scope:{ctx:n}}}),{c(){b(e.$$.fragment),f=C(),b(t.$$.fragment)},l(r){h(e.$$.fragment,r),f=S(r),h(t.$$.fragment,r)},m(r,s){w(e,r,s),g(r,f,s),w(t,r,s),l=!0},p(r,s){const o={};s&4096&&(o.$$scope={dirty:s,ctx:r}),e.$set(o);const a={};s&32&&(a.href=`${r[9].npm}${r[5]}`),s&4128&&(a.$$scope={dirty:s,ctx:r}),t.$set(a)},i(r){l||($(e.$$.fragment,r),$(t.$$.fragment,r),l=!0)},o(r){u(e.$$.fragment,r),u(t.$$.fragment,r),l=!1},d(r){k(e,r),r&&c(f),k(t,r)}}}function Ie(n){let e,f,t,l,r,s,o;e=new re({props:{override:{mb:20,h1:{mb:0,mt:0},"@md":{mt:0}},spacing:"xs",$$slots:{default:[ve]},$$scope:{ctx:n}}});let a=n[3]&&F(n),p=n[4]&&Y(n),_=n[2]&&K(n),d=n[5]&&Q(n);return{c(){b(e.$$.fragment),f=C(),a&&a.c(),t=C(),p&&p.c(),l=C(),_&&_.c(),r=C(),d&&d.c(),s=D()},l(i){h(e.$$.fragment,i),f=S(i),a&&a.l(i),t=S(i),p&&p.l(i),l=S(i),_&&_.l(i),r=S(i),d&&d.l(i),s=D()},m(i,m){w(e,i,m),g(i,f,m),a&&a.m(i,m),g(i,t,m),p&&p.m(i,m),g(i,l,m),_&&_.m(i,m),g(i,r,m),d&&d.m(i,m),g(i,s,m),o=!0},p(i,m){const N={};m&4099&&(N.$$scope={dirty:m,ctx:i}),e.$set(N),i[3]?a?(a.p(i,m),m&8&&$(a,1)):(a=F(i),a.c(),$(a,1),a.m(t.parentNode,t)):a&&(P(),u(a,1,1,()=>{a=null}),G()),i[4]?p?(p.p(i,m),m&16&&$(p,1)):(p=Y(i),p.c(),$(p,1),p.m(l.parentNode,l)):p&&(P(),u(p,1,1,()=>{p=null}),G()),i[2]?_?(_.p(i,m),m&4&&$(_,1)):(_=K(i),_.c(),$(_,1),_.m(r.parentNode,r)):_&&(P(),u(_,1,1,()=>{_=null}),G()),i[5]?d?(d.p(i,m),m&32&&$(d,1)):(d=Q(i),d.c(),$(d,1),d.m(s.parentNode,s)):d&&(P(),u(d,1,1,()=>{d=null}),G())},i(i){o||($(e.$$.fragment,i),$(a),$(p),$(_),$(d),o=!0)},o(i){u(e.$$.fragment,i),u(a),u(p),u(_),u(d),o=!1},d(i){k(e,i),i&&c(f),a&&a.d(i),i&&c(t),p&&p.d(i),i&&c(l),_&&_.d(i),i&&c(r),d&&d.d(i),i&&c(s)}}}function Me(n){let e,f;return e=new re({props:{override:{backgroundColor:n[8]==="light"?"$blue100":"$dark800",padding:"$8",borderRadius:"0.5rem"},$$slots:{default:[Ie]},$$scope:{ctx:n}}}),{c(){b(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,l){w(e,t,l),f=!0},p(t,[l]){const r={};l&256&&(r.override={backgroundColor:t[8]==="light"?"$blue100":"$dark800",padding:"$8",borderRadius:"0.5rem"}),l&4351&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){f||($(e.$$.fragment,t),f=!0)},o(t){u(e.$$.fragment,t),f=!1},d(t){k(e,t)}}}function Oe(n,e,f){let t,l;Z(n,$e,v=>f(7,t=v)),Z(n,ue,v=>f(8,l=v));let{title:r,description:s=!1,docs:o=!1,importCode:a=!1,source:p=!1,packageGroup:_=!1}=e;const d={github:"https://github.com/svelteuidev/svelteui/blob/main/packages/",docs:"https://github.com/svelteuidev/svelteui/blob/main/apps/docs/src/pages/",npm:"https://www.npmjs.com/package/"};let i={overflowX:"scroll","&:hover":{cursor:"pointer"},code:{fontSize:t<500?10:"$sm"},"@sm":{code:{fontSize:"$sm"}},"@md":{code:{fontSize:"$md"}}},m=!1;function N(){f(6,m=!0),setTimeout(()=>f(6,m=!1),1e3)}return n.$$set=v=>{"title"in v&&f(0,r=v.title),"description"in v&&f(1,s=v.description),"docs"in v&&f(2,o=v.docs),"importCode"in v&&f(3,a=v.importCode),"source"in v&&f(4,p=v.source),"packageGroup"in v&&f(5,_=v.packageGroup)},[r,s,o,a,p,_,m,t,l,d,i,N]}class Qe extends U{constructor(e){super(),y(this,e,Oe,Me,x,{title:0,description:1,docs:2,importCode:3,source:4,packageGroup:5})}}export{Qe as H};
