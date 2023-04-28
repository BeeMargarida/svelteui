import{S as Q,i as U,s as X,D as I,K as Z,y as $,a as h,e as G,z as _,c as w,A as g,b as M,J as R,a6 as W,g as p,v as T,d as c,f as q,B as d,h as b,M as C,Q as x,k as ee,l as te,m as ne,Z as oe,a8 as j,q as O,r as B,w as A,a4 as P,a5 as V,X as se}from"./index.b4f0bbdc.js";import{q as z,f as D}from"./index.38638217.js";import{M as re}from"./Modal.3045ee97.js";import{G as y}from"./Group.db734d69.js";import{B as F}from"./Button.b50e74fc.js";import{A as ae}from"./Affix.3bfcdf8c.js";import{N as le}from"./Notification.10e0d347.js";import{S as fe}from"./Stack.545b11b0.js";import{S as ue}from"./Space.a7a52d8c.js";import{T as Y}from"./TextInput.1349bcfb.js";function ie(s){let e,n,t,r,o,i;function a(l){s[8](l)}let f={placeholder:K,label:K};s[4]!==void 0&&(f.value=s[4]),e=new Y({props:f}),A.push(()=>P(e,"value",a));function m(l){s[9](l)}let u={placeholder:L,label:L};return s[5]!==void 0&&(u.value=s[5]),r=new Y({props:u}),A.push(()=>P(r,"value",m)),{c(){$(e.$$.fragment),t=h(),$(r.$$.fragment)},l(l){_(e.$$.fragment,l),t=w(l),_(r.$$.fragment,l)},m(l,k){g(e,l,k),M(l,t,k),g(r,l,k),i=!0},p(l,k){const S={};!n&&k&16&&(n=!0,S.value=l[4],V(()=>n=!1)),e.$set(S);const N={};!o&&k&32&&(o=!0,N.value=l[5],V(()=>o=!1)),r.$set(N)},i(l){i||(p(e.$$.fragment,l),p(r.$$.fragment,l),i=!0)},o(l){c(e.$$.fragment,l),c(r.$$.fragment,l),i=!1},d(l){d(e,l),l&&b(t),d(r,l)}}}function me(s){let e;return{c(){e=O("Cancel")},l(n){e=B(n,"Cancel")},m(n,t){M(n,e,t)},d(n){n&&b(e)}}}function pe(s){let e;return{c(){e=O("Submit")},l(n){e=B(n,"Submit")},m(n,t){M(n,e,t)},d(n){n&&b(e)}}}function ce(s){let e,n,t,r;return e=new F({props:{variant:"outline",$$slots:{default:[me]},$$scope:{ctx:s}}}),e.$on("click",function(){Z(s[2])&&s[2].apply(this,arguments)}),t=new F({props:{$$slots:{default:[pe]},$$scope:{ctx:s}}}),t.$on("click",s[6]),{c(){$(e.$$.fragment),n=h(),$(t.$$.fragment)},l(o){_(e.$$.fragment,o),n=w(o),_(t.$$.fragment,o)},m(o,i){g(e,o,i),M(o,n,i),g(t,o,i),r=!0},p(o,i){s=o;const a={};i&4096&&(a.$$scope={dirty:i,ctx:s}),e.$set(a);const f={};i&4096&&(f.$$scope={dirty:i,ctx:s}),t.$set(f)},i(o){r||(p(e.$$.fragment,o),p(t.$$.fragment,o),r=!0)},o(o){c(e.$$.fragment,o),c(t.$$.fragment,o),r=!1},d(o){d(e,o),o&&b(n),d(t,o)}}}function $e(s){let e,n,t,r,o,i;return e=new fe({props:{$$slots:{default:[ie]},$$scope:{ctx:s}}}),t=new ue({props:{h:"lg"}}),o=new y({props:{position:"right",$$slots:{default:[ce]},$$scope:{ctx:s}}}),{c(){$(e.$$.fragment),n=h(),$(t.$$.fragment),r=h(),$(o.$$.fragment)},l(a){_(e.$$.fragment,a),n=w(a),_(t.$$.fragment,a),r=w(a),_(o.$$.fragment,a)},m(a,f){g(e,a,f),M(a,n,f),g(t,a,f),M(a,r,f),g(o,a,f),i=!0},p(a,f){const m={};f&4144&&(m.$$scope={dirty:f,ctx:a}),e.$set(m);const u={};f&4100&&(u.$$scope={dirty:f,ctx:a}),o.$set(u)},i(a){i||(p(e.$$.fragment,a),p(t.$$.fragment,a),p(o.$$.fragment,a),i=!0)},o(a){c(e.$$.fragment,a),c(t.$$.fragment,a),c(o.$$.fragment,a),i=!1},d(a){d(e,a),a&&b(n),d(t,a),a&&b(r),d(o,a)}}}function E(s){let e,n;return e=new y({props:{position:"center",$$slots:{default:[ge]},$$scope:{ctx:s}}}),{c(){$(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,r){g(e,t,r),n=!0},p(t,r){const o={};r&4097&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function _e(s){let e;return{c(){e=O("Open Modal")},l(n){e=B(n,"Open Modal")},m(n,t){M(n,e,t)},d(n){n&&b(e)}}}function ge(s){let e,n;return e=new F({props:{$$slots:{default:[_e]},$$scope:{ctx:s}}}),e.$on("click",s[10]),{c(){$(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,r){g(e,t,r),n=!0},p(t,r){const o={};r&4096&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function J(s){let e,n;return e=new ae({props:{position:{bottom:20,right:20},$$slots:{default:[be]},$$scope:{ctx:s}}}),{c(){$(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,r){g(e,t,r),n=!0},p(t,r){const o={};r&4104&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function de(s){let e;return{c(){e=O("Your form was subbmitted successfully! No need to think about it any longer.")},l(n){e=B(n,"Your form was subbmitted successfully! No need to think about it any longer.")},m(n,t){M(n,e,t)},d(n){n&&b(e)}}}function be(s){let e,n,t,r;return n=new le({props:{title:"Form Submitted Successfully",$$slots:{default:[de]},$$scope:{ctx:s}}}),n.$on("close",s[11]),{c(){e=ee("div"),$(n.$$.fragment)},l(o){e=te(o,"DIV",{});var i=ne(e);_(n.$$.fragment,i),i.forEach(b)},m(o,i){M(o,e,i),g(n,e,null),r=!0},p(o,i){s=o;const a={};i&4096&&(a.$$scope={dirty:i,ctx:s}),n.$set(a)},i(o){r||(p(n.$$.fragment,o),oe(()=>{r&&(t||(t=j(e,D,{x:100,duration:400,easing:z},!0)),t.run(1))}),r=!0)},o(o){c(n.$$.fragment,o),t||(t=j(e,D,{x:100,duration:400,easing:z},!1)),t.run(0),r=!1},d(o){o&&b(e),d(n),o&&t&&t.end()}}}function Me(s){let e,n,t,r,o;const i=[{opened:s[0]},{title:"Introduce yourself!"},s[7]];let a={$$slots:{default:[$e]},$$scope:{ctx:s}};for(let u=0;u<i.length;u+=1)a=I(a,i[u]);e=new re({props:a}),e.$on("close",function(){Z(s[2])&&s[2].apply(this,arguments)});let f=s[1]&&E(s),m=s[3]&&J(s);return{c(){$(e.$$.fragment),n=h(),f&&f.c(),t=h(),m&&m.c(),r=G()},l(u){_(e.$$.fragment,u),n=w(u),f&&f.l(u),t=w(u),m&&m.l(u),r=G()},m(u,l){g(e,u,l),M(u,n,l),f&&f.m(u,l),M(u,t,l),m&&m.m(u,l),M(u,r,l),o=!0},p(u,[l]){s=u;const k=l&129?R(i,[l&1&&{opened:s[0]},i[1],l&128&&W(s[7])]):{};l&4148&&(k.$$scope={dirty:l,ctx:s}),e.$set(k),s[1]?f?(f.p(s,l),l&2&&p(f,1)):(f=E(s),f.c(),p(f,1),f.m(t.parentNode,t)):f&&(T(),c(f,1,1,()=>{f=null}),q()),s[3]?m?(m.p(s,l),l&8&&p(m,1)):(m=J(s),m.c(),p(m,1),m.m(r.parentNode,r)):m&&(T(),c(m,1,1,()=>{m=null}),q())},i(u){o||(p(e.$$.fragment,u),p(f),p(m),o=!0)},o(u){c(e.$$.fragment,u),c(f),c(m),o=!1},d(u){d(e,u),u&&b(n),f&&f.d(u),u&&b(t),m&&m.d(u),u&&b(r)}}}const K="First Name",L="Last Name";function ke(s,e,n){const t=["opened","withOpenButton","closeModal"];let r=C(e,t),{opened:o=!1}=e,{withOpenButton:i=!0}=e,{closeModal:a=()=>n(0,o=!1)}=e,f=!1,m,u;function l(){n(0,o=!1),n(3,f=!0),setTimeout(()=>n(3,f=!1),4e3)}function k(v){m=v,n(4,m)}function S(v){u=v,n(5,u)}const N=()=>n(0,o=!0),H=()=>n(3,f=!1);return s.$$set=v=>{e=I(I({},e),x(v)),n(7,r=C(e,t)),"opened"in v&&n(0,o=v.opened),"withOpenButton"in v&&n(1,i=v.withOpenButton),"closeModal"in v&&n(2,a=v.closeModal)},[o,i,a,f,m,u,l,r,k,S,N,H]}class ve extends Q{constructor(e){super(),U(this,e,ke,Me,X,{opened:0,withOpenButton:1,closeModal:2})}}const he=ve;function we(s){let e,n;return e=new he({}),{c(){$(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,r){g(e,t,r),n=!0},p:se,i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}const Se=`
<script>
	import { Modal, Group, Button } from '@svelteuidev/core';

	let opened = false;
<\/script>

<!-- This component must be wrapped in SvelteUIProvider (on the application level)
  or you must specify a target with the target prop --!>
<Modal {opened} on:close={closeModal} title="Introduce yourself!">
	<!-- Modal Content -->
</Modal>

<Group position="center">
	<Button on:click={() => (opened = true)}>Open Modal</Button>
</Group>
`,Ne="demo",Oe={code:Se};class Be extends Q{constructor(e){super(),U(this,e,null,we,X,{})}}const ze=Object.freeze(Object.defineProperty({__proto__:null,configuration:Oe,default:Be,type:Ne},Symbol.toStringTag,{value:"Module"}));export{ze as M,he as a};
