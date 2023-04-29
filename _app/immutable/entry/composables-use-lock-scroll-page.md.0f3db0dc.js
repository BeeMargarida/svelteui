import{S as de,i as _e,s as ke,H as me,V as Te,W as De,m as f,h as l,n as T,X as Be,b as u,Y as c,N as Se,C as xe,O as Oe,T as Me,y as D,z as q,A as B,g as x,d as O,B as P,q as h,r as v,u as je,x as Pe,e as Ue,v as Re,f as qe,a as $,k as m,al as Ne,c as g,l as d}from"../chunks/index.b0fe5a0f.js";import{G as Ye}from"../chunks/navigation.9bd98935.js";import{H as Ze}from"../chunks/Heading.19c03976.js";import{D as We}from"../chunks/Demo.82a35c94.js";import{L as ze}from"../chunks/LockClosed.731ff704.js";import{l as Ge}from"../chunks/use-lock-scroll.df8dd4ce.js";import{B as Xe}from"../chunks/Button.36168772.js";function Fe(i){let e,s,o=[{width:i[1]},{height:i[1]},{viewBox:"0 0 15 15"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},i[2]],r={};for(let n=0;n<o.length;n+=1)r=me(r,o[n]);return{c(){e=Te("svg"),s=Te("path"),this.h()},l(n){e=De(n,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var a=f(e);s=De(a,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),f(s).forEach(l),a.forEach(l),this.h()},h(){T(s,"fill-rule","evenodd"),T(s,"clip-rule","evenodd"),T(s,"d","M9 3.63601C9 2.76044 9.24207 2.11211 9.64154 1.68623C10.0366 1.26502 10.6432 1 11.5014 1C12.4485 1 13.0839 1.30552 13.4722 1.80636C13.8031 2.23312 14 2.84313 14 3.63325H15C15 2.68242 14.7626 1.83856 14.2625 1.19361C13.6389 0.38943 12.6743 0 11.5014 0C10.4294 0 9.53523 0.337871 8.91218 1.0021C8.29351 1.66167 8 2.58135 8 3.63601V6H1C0.447715 6 0 6.44772 0 7V13C0 13.5523 0.447715 14 1 14H10C10.5523 14 11 13.5523 11 13V7C11 6.44772 10.5523 6 10 6H9V3.63601ZM1 7H10V13H1V7Z"),T(s,"fill",i[0]),Be(e,r)},m(n,a){u(n,e,a),c(e,s)},p(n,[a]){a&1&&T(s,"fill",n[0]),Be(e,r=Se(o,[a&2&&{width:n[1]},a&2&&{height:n[1]},{viewBox:"0 0 15 15"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},a&4&&n[2]]))},i:xe,o:xe,d(n){n&&l(e)}}}function Je(i,e,s){const o=["color","size"];let r=Oe(e,o),{color:n="currentColor"}=e,{size:a=15}=e;return i.$$set=_=>{e=me(me({},e),Me(_)),s(2,r=Oe(e,o)),"color"in _&&s(0,n=_.color),"size"in _&&s(1,a=_.size)},[n,a,r]}class Ke extends de{constructor(e){super(),_e(this,e,Je,Fe,ke,{color:0,size:1})}}const Ve=Ke;function Qe(i){let e=i[0]?"Unlock scroll":"Lock scroll",s;return{c(){s=h(e)},l(o){s=v(o,e)},m(o,r){u(o,s,r)},p(o,r){r&1&&e!==(e=o[0]?"Unlock scroll":"Lock scroll")&&je(s,e)},d(o){o&&l(s)}}}function et(i){let e,s,o;var r=i[0]?ze:Ve;function n(a){return{props:{slot:"leftIcon"}}}return r&&(e=Pe(r,n())),{c(){e&&D(e.$$.fragment),s=Ue()},l(a){e&&q(e.$$.fragment,a),s=Ue()},m(a,_){e&&B(e,a,_),u(a,s,_),o=!0},p(a,_){if(_&1&&r!==(r=a[0]?ze:Ve)){if(e){Re();const k=e;O(k.$$.fragment,1,0,()=>{P(k,1)}),qe()}r?(e=Pe(r,n()),D(e.$$.fragment),x(e.$$.fragment,1),B(e,s.parentNode,s)):e=null}},i(a){o||(e&&x(e.$$.fragment,a),o=!0)},o(a){e&&O(e.$$.fragment,a),o=!1},d(a){a&&l(s),e&&P(e,a)}}}function tt(i){let e,s;return e=new Xe({props:{variant:"outline",$$slots:{leftIcon:[et],default:[Qe]},$$scope:{ctx:i}}}),e.$on("click",i[1]),{c(){D(e.$$.fragment)},l(o){q(e.$$.fragment,o)},m(o,r){B(e,o,r),s=!0},p(o,r){const n={};r&5&&(n.$$scope={dirty:r,ctx:o}),e.$set(n)},i(o){s||(x(e.$$.fragment,o),s=!0)},o(o){O(e.$$.fragment,o),s=!1},d(o){P(e,o)}}}function ot(i){let e,s;return e=new Ye({props:{position:"center",use:[[Ge,i[0]]],$$slots:{default:[tt]},$$scope:{ctx:i}}}),{c(){D(e.$$.fragment)},l(o){q(e.$$.fragment,o)},m(o,r){B(e,o,r),s=!0},p(o,[r]){const n={};r&1&&(n.use=[[Ge,o[0]]]),r&5&&(n.$$scope={dirty:r,ctx:o}),e.$set(n)},i(o){s||(x(e.$$.fragment,o),s=!0)},o(o){O(e.$$.fragment,o),s=!1},d(o){P(e,o)}}}const st=`
<script>
	import { lockscroll } from '@svelteuidev/composables';
	import { Button, Group } from '@svelteuidev/core';
	import { LockClosed, LockOpen2 } from 'radix-icons-svelte';

	let scrollLocked = false;
<\/script>

<Group position="center" use={[[lockscroll, scrollLocked]]}>
	<Button on:click={() => (scrollLocked = !scrollLocked)} variant="outline">
		<svelte:component this={scrollLocked ? LockClosed : LockOpen2} slot="leftIcon" />
		{scrollLocked ? 'Unlock scroll' : 'Lock scroll'}
	</Button>
</Group>
`,lt="demo",rt={code:st};function nt(i,e,s){let o=!1;return[o,()=>s(0,o=!o)]}class at extends de{constructor(e){super(),_e(this,e,nt,ot,ke,{})}}const ct=Object.freeze(Object.defineProperty({__proto__:null,configuration:rt,default:at,type:lt},Symbol.toStringTag,{value:"Module"}));function it(i){let e,s,o,r,n,a,_,k,U,Q,ee,z,te,oe,N,w,Y,H,se,Z,b,G,E,V,le,re,A,ne,ae,I,C,S,ce,ie,M,pe,W,y,fe,X,L,Ae='<code class="language-js"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">lockscroll</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">node</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span> lock<span class="token operator">?</span><span class="token operator">:</span> boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> ReturnType<span class="token operator">&lt;</span>Action<span class="token operator">></span><span class="token punctuation">;</span></code>',j;return document.title=e=ue+" - SvelteUI",o=new Ze({props:{title:ue,group:ft,packageGroup:ut,slug:mt,description:dt,importCode:_t,docs:kt,source:ht}}),w=new We({props:{demo:ct}}),{c(){s=$(),D(o.$$.fragment),r=$(),n=m("h2"),a=h("Usage"),_=$(),k=m("p"),U=m("code"),Q=h("lockscroll"),ee=h(" locks scroll at current position by setting "),z=m("code"),te=h("document.body"),oe=h(" overflow to hidden"),N=$(),D(w.$$.fragment),Y=$(),H=m("h2"),se=h("Params"),Z=$(),b=m("table"),G=m("thead"),E=m("tr"),V=m("th"),le=h("Param"),re=$(),A=m("th"),ne=h("Description"),ae=$(),I=m("tbody"),C=m("tr"),S=m("td"),ce=h("lock"),ie=$(),M=m("td"),pe=h("A boolean to specify whether or not to lock the screen"),W=$(),y=m("h2"),fe=h("Definition"),X=$(),L=m("pre"),this.h()},l(t){Ne("svelte-pki6ul",document.head).forEach(l),s=g(t),q(o.$$.fragment,t),r=g(t),n=d(t,"H2",{});var he=f(n);a=v(he,"Usage"),he.forEach(l),_=g(t),k=d(t,"P",{});var R=f(k);U=d(R,"CODE",{});var ve=f(U);Q=v(ve,"lockscroll"),ve.forEach(l),ee=v(R," locks scroll at current position by setting "),z=d(R,"CODE",{});var $e=f(z);te=v($e,"document.body"),$e.forEach(l),oe=v(R," overflow to hidden"),R.forEach(l),N=g(t),q(w.$$.fragment,t),Y=g(t),H=d(t,"H2",{});var ge=f(H);se=v(ge,"Params"),ge.forEach(l),Z=g(t),b=d(t,"TABLE",{});var F=f(b);G=d(F,"THEAD",{});var be=f(G);E=d(be,"TR",{});var J=f(E);V=d(J,"TH",{});var we=f(V);le=v(we,"Param"),we.forEach(l),re=g(J),A=d(J,"TH",{});var Ee=f(A);ne=v(Ee,"Description"),Ee.forEach(l),J.forEach(l),be.forEach(l),ae=g(F),I=d(F,"TBODY",{});var Ce=f(I);C=d(Ce,"TR",{});var K=f(C);S=d(K,"TD",{});var Le=f(S);ce=v(Le,"lock"),Le.forEach(l),ie=g(K),M=d(K,"TD",{});var He=f(M);pe=v(He,"A boolean to specify whether or not to lock the screen"),He.forEach(l),K.forEach(l),Ce.forEach(l),F.forEach(l),W=g(t),y=d(t,"H2",{});var ye=f(y);fe=v(ye,"Definition"),ye.forEach(l),X=g(t),L=d(t,"PRE",{class:!0});var Ie=f(L);Ie.forEach(l),this.h()},h(){T(L,"class","language-js")},m(t,p){u(t,s,p),B(o,t,p),u(t,r,p),u(t,n,p),c(n,a),u(t,_,p),u(t,k,p),c(k,U),c(U,Q),c(k,ee),c(k,z),c(z,te),c(k,oe),u(t,N,p),B(w,t,p),u(t,Y,p),u(t,H,p),c(H,se),u(t,Z,p),u(t,b,p),c(b,G),c(G,E),c(E,V),c(V,le),c(E,re),c(E,A),c(A,ne),c(b,ae),c(b,I),c(I,C),c(C,S),c(S,ce),c(C,ie),c(C,M),c(M,pe),u(t,W,p),u(t,y,p),c(y,fe),u(t,X,p),u(t,L,p),L.innerHTML=Ae,j=!0},p(t,[p]){(!j||p&0)&&e!==(e=ue+" - SvelteUI")&&(document.title=e)},i(t){j||(x(o.$$.fragment,t),x(w.$$.fragment,t),j=!0)},o(t){O(o.$$.fragment,t),O(w.$$.fragment,t),j=!1},d(t){t&&l(s),P(o,t),t&&l(r),t&&l(n),t&&l(_),t&&l(k),t&&l(N),P(w,t),t&&l(Y),t&&l(H),t&&l(Z),t&&l(b),t&&l(W),t&&l(y),t&&l(X),t&&l(L)}}}const pt={title:"use-lock-scroll",group:"svelteuidev-composables",packageGroup:"@svelteuidev/composables",slug:"/composables/use-lock-scroll/",description:"Lock scroll at current position.",importCode:"import { lockscroll } from '@svelteuidev/composables';",docs:"composables/use-lock-scroll.md",source:"svelteui-composables/src/actions/use-lock-scroll/use-lock-scroll.ts"},{title:ue,group:ft,packageGroup:ut,slug:mt,description:dt,importCode:_t,docs:kt,source:ht}=pt;class Lt extends de{constructor(e){super(),_e(this,e,null,it,ke,{})}}export{Lt as default,pt as metadata};
