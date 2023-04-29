import{S as F,i as J,s as L,y as _,z as g,A as b,g as v,d as x,B as K,q as c,r as p,b as m,h as f,a as y,c as E,k as B,al as Z,l as G,m as O,n as ee,Y as w}from"../chunks/index.b0fe5a0f.js";import{B as te}from"../chunks/navigation.9bd98935.js";import{H as re}from"../chunks/Heading.19c03976.js";import{D as X}from"../chunks/Demo.82a35c94.js";import{C as oe}from"../chunks/Center.b83aac32.js";import{K as j}from"../chunks/Kbd.a07e6c9a.js";import{M as se}from"../chunks/MagnifyingGlass.b97ff8b6.js";import{T as ne}from"../chunks/TextInput.5cadc6cd.js";function $e(l){let e;return{c(){e=c("⌘")},l(o){e=p(o,"⌘")},m(o,r){m(o,e,r)},d(o){o&&f(e)}}}function fe(l){let e;return{c(){e=c("shift")},l(o){e=p(o,"shift")},m(o,r){m(o,e,r)},d(o){o&&f(e)}}}function ae(l){let e;return{c(){e=c("M")},l(o){e=p(o,"M")},m(o,r){m(o,e,r)},d(o){o&&f(e)}}}function le(l){let e,o,r,a,$,u;return e=new j({props:{$$slots:{default:[$e]},$$scope:{ctx:l}}}),r=new j({props:{$$slots:{default:[fe]},$$scope:{ctx:l}}}),$=new j({props:{$$slots:{default:[ae]},$$scope:{ctx:l}}}),{c(){_(e.$$.fragment),o=c(" + "),_(r.$$.fragment),a=c(" + "),_($.$$.fragment)},l(t){g(e.$$.fragment,t),o=p(t," + "),g(r.$$.fragment,t),a=p(t," + "),g($.$$.fragment,t)},m(t,n){b(e,t,n),m(t,o,n),b(r,t,n),m(t,a,n),b($,t,n),u=!0},p(t,n){const h={};n&1&&(h.$$scope={dirty:n,ctx:t}),e.$set(h);const d={};n&1&&(d.$$scope={dirty:n,ctx:t}),r.$set(d);const S={};n&1&&(S.$$scope={dirty:n,ctx:t}),$.$set(S)},i(t){u||(v(e.$$.fragment,t),v(r.$$.fragment,t),v($.$$.fragment,t),u=!0)},o(t){x(e.$$.fragment,t),x(r.$$.fragment,t),x($.$$.fragment,t),u=!1},d(t){K(e,t),t&&f(o),K(r,t),t&&f(a),K($,t)}}}function me(l){let e,o;return e=new oe({props:{$$slots:{default:[le]},$$scope:{ctx:l}}}),{c(){_(e.$$.fragment)},l(r){g(e.$$.fragment,r)},m(r,a){b(e,r,a),o=!0},p(r,[a]){const $={};a&1&&($.$$scope={dirty:a,ctx:r}),e.$set($)},i(r){o||(v(e.$$.fragment,r),o=!0)},o(r){x(e.$$.fragment,r),o=!1},d(r){K(e,r)}}}const ie=`
<script>
    import { Kbd } from '@svelteuidev/core';
<\/script>

<Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>
	`,ce="demo",pe={code:ie};class ue extends F{constructor(e){super(),J(this,e,null,me,L,{})}}const de=Object.freeze(Object.defineProperty({__proto__:null,configuration:pe,default:ue,type:ce},Symbol.toStringTag,{value:"Module"}));function _e(l){let e;return{c(){e=c("Ctrl")},l(o){e=p(o,"Ctrl")},m(o,r){m(o,e,r)},d(o){o&&f(e)}}}function ge(l){let e;return{c(){e=c("+")},l(o){e=p(o,"+")},m(o,r){m(o,e,r)},d(o){o&&f(e)}}}function be(l){let e;return{c(){e=c("K")},l(o){e=p(o,"K")},m(o,r){m(o,e,r)},d(o){o&&f(e)}}}function ve(l){let e,o,r,a,$,u;return e=new j({props:{$$slots:{default:[_e]},$$scope:{ctx:l}}}),r=new te({props:{root:"span",css:{m:"0 5px"},$$slots:{default:[ge]},$$scope:{ctx:l}}}),$=new j({props:{$$slots:{default:[be]},$$scope:{ctx:l}}}),{c(){_(e.$$.fragment),o=y(),_(r.$$.fragment),a=y(),_($.$$.fragment)},l(t){g(e.$$.fragment,t),o=E(t),g(r.$$.fragment,t),a=E(t),g($.$$.fragment,t)},m(t,n){b(e,t,n),m(t,o,n),b(r,t,n),m(t,a,n),b($,t,n),u=!0},p(t,n){const h={};n&1&&(h.$$scope={dirty:n,ctx:t}),e.$set(h);const d={};n&1&&(d.$$scope={dirty:n,ctx:t}),r.$set(d);const S={};n&1&&(S.$$scope={dirty:n,ctx:t}),$.$set(S)},i(t){u||(v(e.$$.fragment,t),v(r.$$.fragment,t),v($.$$.fragment,t),u=!0)},o(t){x(e.$$.fragment,t),x(r.$$.fragment,t),x($.$$.fragment,t),u=!1},d(t){K(e,t),t&&f(o),K(r,t),t&&f(a),K($,t)}}}function xe(l){let e,o;return e=new ne({props:{placeholder:"Search",icon:se,rightSectionWidth:90,override:{"&. rightSection":{pointerEvents:"none"}},$$slots:{rightSection:[ve]},$$scope:{ctx:l}}}),{c(){_(e.$$.fragment)},l(r){g(e.$$.fragment,r)},m(r,a){b(e,r,a),o=!0},p(r,[a]){const $={};a&1&&($.$$scope={dirty:a,ctx:r}),e.$set($)},i(r){o||(v(e.$$.fragment,r),o=!0)},o(r){x(e.$$.fragment,r),o=!1},d(r){K(e,r)}}}const Ke=`
<script>
  import { Kbd, TextInput } from '@svelteuidev/core';
  import { MagnifyingGlass } from 'radix-icons-svelte';
<\/script>

<TextInput
  placeholder="Search"
  icon={MagnifyingGlass}
  rightSectionWidth={90}
>
  <svelte:fragment slot='rightSection'>
    <Kbd>Ctrl</Kbd>
    <Box root='span'>+</Box>
    <Kbd>K</Kbd>
  </svelte:fragment>
</TextInput>`,he="demo",ke={code:Ke};class Se extends F{constructor(e){super(),J(this,e,null,xe,L,{})}}const we=Object.freeze(Object.defineProperty({__proto__:null,configuration:ke,default:Se,type:he},Symbol.toStringTag,{value:"Module"}));function ye(l){let e,o,r,a,$,u,t,n,h,d,S,D,k,P,M,z,q,I,A,W,H,C,U;return document.title=e=Y+" - SvelteUI",r=new re({props:{title:Y,group:Ce,packageGroup:Me,slug:Te,category:Ie,description:Ue,importCode:Be,source:Ge,docs:Oe}}),n=new X({props:{demo:de}}),C=new X({props:{demo:we}}),{c(){o=y(),_(r.$$.fragment),a=y(),$=B("h2"),u=c("Usage"),t=y(),_(n.$$.fragment),h=y(),d=B("h2"),S=c("Example"),D=y(),k=B("p"),P=c("Usage example with "),M=B("a"),z=c("TextInput"),q=c(" component – "),I=B("code"),A=c("Kbd"),W=c(" is used to describe a keyboard shortcut:"),H=y(),_(C.$$.fragment),this.h()},l(s){Z("svelte-pki6ul",document.head).forEach(f),o=E(s),g(r.$$.fragment,s),a=E(s),$=G(s,"H2",{});var N=O($);u=p(N,"Usage"),N.forEach(f),t=E(s),g(n.$$.fragment,s),h=E(s),d=G(s,"H2",{});var Q=O(d);S=p(Q,"Example"),Q.forEach(f),D=E(s),k=G(s,"P",{});var T=O(k);P=p(T,"Usage example with "),M=G(T,"A",{href:!0});var R=O(M);z=p(R,"TextInput"),R.forEach(f),q=p(T," component – "),I=G(T,"CODE",{});var V=O(I);A=p(V,"Kbd"),V.forEach(f),W=p(T," is used to describe a keyboard shortcut:"),T.forEach(f),H=E(s),g(C.$$.fragment,s),this.h()},h(){ee(M,"href","/core/text-input")},m(s,i){m(s,o,i),b(r,s,i),m(s,a,i),m(s,$,i),w($,u),m(s,t,i),b(n,s,i),m(s,h,i),m(s,d,i),w(d,S),m(s,D,i),m(s,k,i),w(k,P),w(k,M),w(M,z),w(k,q),w(k,I),w(I,A),w(k,W),m(s,H,i),b(C,s,i),U=!0},p(s,[i]){(!U||i&0)&&e!==(e=Y+" - SvelteUI")&&(document.title=e)},i(s){U||(v(r.$$.fragment,s),v(n.$$.fragment,s),v(C.$$.fragment,s),U=!0)},o(s){x(r.$$.fragment,s),x(n.$$.fragment,s),x(C.$$.fragment,s),U=!1},d(s){s&&f(o),K(r,s),s&&f(a),s&&f($),s&&f(t),K(n,s),s&&f(h),s&&f(d),s&&f(D),s&&f(k),s&&f(H),K(C,s)}}}const Ee={title:"Kbd",group:"svelteuidev-core",packageGroup:"@svelteuidev/core",slug:"/core/kbd/",category:"data-display",description:"Display keyboard button or keys combination",importCode:"import { Kbd } from '@svelteuidev/core';",source:"svelteui-core/src/components/Kbd/Kbd.svelte",docs:"core/kbd.md"},{title:Y,group:Ce,packageGroup:Me,slug:Te,category:Ie,description:Ue,importCode:Be,source:Ge,docs:Oe}=Ee;class Ye extends F{constructor(e){super(),J(this,e,null,ye,L,{})}}export{Ye as default,Ee as metadata};
