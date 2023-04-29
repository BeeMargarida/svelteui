import{S as R,i as Y,s as F,y as C,z as W,A as G,g as O,d as q,B as I,P as N,q as c,r as m,b as l,u as L,h as n,a as _,k as y,al as Q,c as $,l as z,m as S,n as X,Y as g}from"../chunks/index.b0fe5a0f.js";import{T as Z}from"../chunks/navigation.9bd98935.js";import{H as ee}from"../chunks/Heading.19c03976.js";import{D as te}from"../chunks/Demo.82a35c94.js";import{u as se}from"../chunks/use-viewport-size.e6b9fb20.js";function oe(u){let o,a,s,i;return{c(){o=c("Width: "),a=c(u[1]),s=c(", Height: "),i=c(u[0])},l(t){o=m(t,"Width: "),a=m(t,u[1]),s=m(t,", Height: "),i=m(t,u[0])},m(t,r){l(t,o,r),l(t,a,r),l(t,s,r),l(t,i,r)},p(t,r){r&2&&L(a,t[1]),r&1&&L(i,t[0])},d(t){t&&n(o),t&&n(a),t&&n(s),t&&n(i)}}}function ae(u){let o,a;return o=new Z({props:{align:"center",$$slots:{default:[oe]},$$scope:{ctx:u}}}),{c(){C(o.$$.fragment)},l(s){W(o.$$.fragment,s)},m(s,i){G(o,s,i),a=!0},p(s,[i]){const t={};i&19&&(t.$$scope={dirty:i,ctx:s}),o.$set(t)},i(s){a||(O(o.$$.fragment,s),a=!0)},o(s){q(o.$$.fragment,s),a=!1},d(s){I(o,s)}}}const ne=`
<script>
	import { Text } from '@svelteuidev/core';
	import { useViewportSize } from '@svelteuidev/composables';

	const viewport = useViewportSize();
	$: ({ width, height } = $viewport);
<\/script>

<Text>Width: {width}, Height: {height}</Text>
`,ie="demo",pe={code:ne};function re(u,o,a){let s,i,t;const r=se();return N(u,r,v=>a(3,t=v)),u.$$.update=()=>{u.$$.dirty&8&&a(1,{width:s,height:i}=t,s,(a(0,i),a(3,t)))},[i,s,r,t]}class le extends R{constructor(o){super(),Y(this,o,re,ae,F,{})}}const ue=Object.freeze(Object.defineProperty({__proto__:null,configuration:pe,default:le,type:ie},Symbol.toStringTag,{value:"Module"}));function ce(u){let o,a,s,i,t,r,v,f,D,k,P,U,x,d,T,w,V,E,h,J=`<code class="language-js"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useViewportSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Writable<span class="token operator">&lt;</span><span class="token punctuation">&#123;</span>
	<span class="token literal-property property">width</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
	<span class="token literal-property property">height</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token operator">></span><span class="token punctuation">;</span></code>`,b;return document.title=o=j+" - SvelteUI",s=new ee({props:{title:j,group:fe,packageGroup:de,slug:he,description:ve,importCode:we,docs:_e,source:$e}}),d=new te({props:{demo:ue}}),{c(){a=_(),C(s.$$.fragment),i=_(),t=y("h2"),r=c("Usage"),v=_(),f=y("p"),D=c("The "),k=y("code"),P=c("use-viewport-size"),U=c(" composable allows you get access to the current with and height of the viewport, and it also subscribes to viewport changes."),x=_(),C(d.$$.fragment),T=_(),w=y("h2"),V=c("Definition"),E=_(),h=y("pre"),this.h()},l(e){Q("svelte-pki6ul",document.head).forEach(n),a=$(e),W(s.$$.fragment,e),i=$(e),t=z(e,"H2",{});var M=S(t);r=m(M,"Usage"),M.forEach(n),v=$(e),f=z(e,"P",{});var H=S(f);D=m(H,"The "),k=z(H,"CODE",{});var A=S(k);P=m(A,"use-viewport-size"),A.forEach(n),U=m(H," composable allows you get access to the current with and height of the viewport, and it also subscribes to viewport changes."),H.forEach(n),x=$(e),W(d.$$.fragment,e),T=$(e),w=z(e,"H2",{});var B=S(w);V=m(B,"Definition"),B.forEach(n),E=$(e),h=z(e,"PRE",{class:!0});var K=S(h);K.forEach(n),this.h()},h(){X(h,"class","language-js")},m(e,p){l(e,a,p),G(s,e,p),l(e,i,p),l(e,t,p),g(t,r),l(e,v,p),l(e,f,p),g(f,D),g(f,k),g(k,P),g(f,U),l(e,x,p),G(d,e,p),l(e,T,p),l(e,w,p),g(w,V),l(e,E,p),l(e,h,p),h.innerHTML=J,b=!0},p(e,[p]){(!b||p&0)&&o!==(o=j+" - SvelteUI")&&(document.title=o)},i(e){b||(O(s.$$.fragment,e),O(d.$$.fragment,e),b=!0)},o(e){q(s.$$.fragment,e),q(d.$$.fragment,e),b=!1},d(e){e&&n(a),I(s,e),e&&n(i),e&&n(t),e&&n(v),e&&n(f),e&&n(x),I(d,e),e&&n(T),e&&n(w),e&&n(E),e&&n(h)}}}const me={title:"use-viewport-size",group:"svelteuidev-composables",packageGroup:"@svelteuidev/composables",slug:"/composables/use-viewport-size/",description:"Get viewport width and height.",importCode:"import { useViewportSize } from '@svelteuidev/composables';",docs:"composables/use-viewport-size.md",source:"svelteui-composables/src/utilities/use-viewport-size/use-viewport-size.ts"},{title:j,group:fe,packageGroup:de,slug:he,description:ve,importCode:we,docs:_e,source:$e}=me;class Se extends R{constructor(o){super(),Y(this,o,null,ce,F,{})}}export{Se as default,me as metadata};
