import{S as M,i as k,s as q,w as S,a4 as B,y as b,z as h,A as y,a5 as C,g,d as p,B as x,o as j,C as O,G as W,H as A,I as E,q as G,r as H,b as I,h as L}from"./index.b4f0bbdc.js";import{f as N,B as P}from"./Box.195443f6.js";import{T as D}from"./Text.d4cabcdc.js";const F=N((i,{query:n,styles:t,largerThan:e,smallerThan:s})=>{const o={root:{}},r=i.fn.size({size:e,sizes:i.breakpoints})+1,u=i.fn.size({size:s,sizes:i.breakpoints});return e!==void 0&&s!==void 0?o.root[`@media (min-width: ${r}px) and (max-width: ${u}px)`]=t:(e!==void 0&&(o.root[`@media (min-width: ${i.fn.size({size:e,sizes:i.breakpoints})+1}px)`]=t),s!==void 0&&(o.root[`@media (max-width: ${i.fn.size({size:s,sizes:i.breakpoints})}px)`]=t)),n&&(o.root[`@media ${n}`]=t),o});function J(i){let n;const t=i[11].default,e=O(t,i,i[13],null);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,o){e&&e.m(s,o),n=!0},p(s,o){e&&e.p&&(!n||o&8192)&&W(e,t,s,s[13],n?E(t,s[13],o,null):A(s[13]),null)},i(s){n||(g(e,s),n=!0)},o(s){p(e,s),n=!1},d(s){e&&e.d(s)}}}function K(i){let n,t,e;function s(r){i[12](r)}let o={use:i[1],class:i[6](i[2],i[5].root,i[4]({css:i[3]})),$$slots:{default:[J]},$$scope:{ctx:i}};return i[0]!==void 0&&(o.element=i[0]),n=new P({props:o}),S.push(()=>B(n,"element",s)),{c(){b(n.$$.fragment)},l(r){h(n.$$.fragment,r)},m(r,u){y(n,r,u),e=!0},p(r,[u]){const f={};u&2&&(f.use=r[1]),u&124&&(f.class=r[6](r[2],r[5].root,r[4]({css:r[3]}))),u&8192&&(f.$$scope={dirty:u,ctx:r}),!t&&u&1&&(t=!0,f.element=r[0],C(()=>t=!1)),n.$set(f)},i(r){e||(g(n.$$.fragment,r),e=!0)},o(r){p(n.$$.fragment,r),e=!1},d(r){x(n,r)}}}function R(i,n,t){let e,s,o,{$$slots:r={},$$scope:u}=n,{use:f=[],element:l=void 0,class:w="",override:z={},smallerThan:d=void 0,largerThan:c=void 0,styles:m=void 0,query:_=void 0}=n;function Q(){l.children[0].classList.add(o().selector)}j(Q);function T(a){l=a,t(0,l)}return i.$$set=a=>{"use"in a&&t(1,f=a.use),"element"in a&&t(0,l=a.element),"class"in a&&t(2,w=a.class),"override"in a&&t(3,z=a.override),"smallerThan"in a&&t(7,d=a.smallerThan),"largerThan"in a&&t(8,c=a.largerThan),"styles"in a&&t(9,m=a.styles),"query"in a&&t(10,_=a.query),"$$scope"in a&&t(13,u=a.$$scope)},i.$$.update=()=>{i.$$.dirty&1920&&t(6,{cx:e,classes:s,getStyles:o}=F({query:_,styles:m,largerThan:c,smallerThan:d},{name:"MediaQuery"}),e,(t(5,s),t(10,_),t(9,m),t(8,c),t(7,d)),(t(4,o),t(10,_),t(9,m),t(8,c),t(7,d)))},[l,f,w,z,o,s,e,d,c,m,_,r,T,u]}class U extends M{constructor(n){super(),k(this,n,R,K,q,{use:1,element:0,class:2,override:3,smallerThan:7,largerThan:8,styles:9,query:10})}}const V=U;function X(i){let n;return{c(){n=G("(max-width: 1200px) and (min-width: 800px) breakpoints")},l(t){n=H(t,"(max-width: 1200px) and (min-width: 800px) breakpoints")},m(t,e){I(t,n,e)},d(t){t&&L(n)}}}function Y(i){let n,t;return n=new D({props:{$$slots:{default:[X]},$$scope:{ctx:i}}}),{c(){b(n.$$.fragment)},l(e){h(n.$$.fragment,e)},m(e,s){y(n,e,s),t=!0},p(e,s){const o={};s&1&&(o.$$scope={dirty:s,ctx:e}),n.$set(o)},i(e){t||(g(n.$$.fragment,e),t=!0)},o(e){p(n.$$.fragment,e),t=!1},d(e){x(n,e)}}}function Z(i){let n,t;return n=new V({props:{query:"(max-width: 1200px) and (min-width: 800px)",styles:{bc:"$blue50",p:"$10"},$$slots:{default:[Y]},$$scope:{ctx:i}}}),{c(){b(n.$$.fragment)},l(e){h(n.$$.fragment,e)},m(e,s){y(n,e,s),t=!0},p(e,[s]){const o={};s&1&&(o.$$scope={dirty:s,ctx:e}),n.$set(o)},i(e){t||(g(n.$$.fragment,e),t=!0)},o(e){p(n.$$.fragment,e),t=!1},d(e){x(n,e)}}}const $=`
<script>
	import { MediaQuery, Text } from '@svelteuidev/core';
<\/script>

<MediaQuery
	query="(max-width: 1200px) and (min-width: 800px)"
	styles={{ bc: '$blue50', p: '$10' }}
>
	<Text>(max-width: 1200px) and (min-width: 800px) breakpoints</Text>
</MediaQuery>
`,v="demo",ee={code:$};class te extends M{constructor(n){super(),k(this,n,null,Z,q,{})}}const oe=Object.freeze(Object.defineProperty({__proto__:null,configuration:ee,default:te,type:v},Symbol.toStringTag,{value:"Module"}));export{oe as M,V as a};
