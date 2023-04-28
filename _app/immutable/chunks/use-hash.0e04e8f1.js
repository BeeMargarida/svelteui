import{S as Z,i as ee,s as te,y as S,z as C,A as D,g as O,d as B,B as U,k as d,q as m,l as _,m as v,r as $,h as a,b as p,W as u,X as pe,a as k,c as w,n as le}from"./index.b4f0bbdc.js";import{D as ie}from"./Demo.9cccb4ab.js";import{G as $e}from"./Group.db734d69.js";import{u as ce}from"./use-hash.71d2901e.js";import{S as de}from"./Stack.545b11b0.js";import{B as _e}from"./Button.b50e74fc.js";function ve(c){let t,o,s,r;return{c(){t=d("p"),o=m("Generated hash: "),s=d("b"),r=m(c[0])},l(l){t=_(l,"P",{});var f=v(t);o=$(f,"Generated hash: "),s=_(f,"B",{});var g=v(s);r=$(g,c[0]),g.forEach(a),f.forEach(a)},m(l,f){p(l,t,f),u(t,o),u(t,s),u(s,r)},p:pe,d(l){l&&a(t)}}}function be(c){let t,o;return t=new $e({props:{position:"center",$$slots:{default:[ve]},$$scope:{ctx:c}}}),{c(){S(t.$$.fragment)},l(s){C(t.$$.fragment,s)},m(s,r){D(t,s,r),o=!0},p(s,[r]){const l={};r&2&&(l.$$scope={dirty:r,ctx:s}),t.$set(l)},i(s){o||(O(t.$$.fragment,s),o=!0)},o(s){B(t.$$.fragment,s),o=!1},d(s){U(t,s)}}}const ge=`
<script>
	import { useHash } from '@svelteuidev/composables';

	const id = useHash('sveleteui');
<\/script>

<p>Generated hash: {id}</p>
`,ke="demo",we={code:ge};function ye(c){return[ce("sveleteui")]}class Ee extends Z{constructor(t){super(),ee(this,t,ye,be,te,{})}}const xe=Object.freeze(Object.defineProperty({__proto__:null,configuration:we,default:Ee,type:ke},Symbol.toStringTag,{value:"Module"}));function He(c){let t;return{c(){t=m("Click to refresh the page")},l(o){t=$(o,"Click to refresh the page")},m(o,s){p(o,t,s)},d(o){o&&a(t)}}}function Te(c){let t,o,s,r,l,f,g;return t=new _e({props:{$$slots:{default:[He]},$$scope:{ctx:c}}}),t.$on("click",c[1]),{c(){S(t.$$.fragment),o=k(),s=d("p"),r=m("Generated hash that won't change: "),l=d("b"),f=m(c[0])},l(i){C(t.$$.fragment,i),o=w(i),s=_(i,"P",{});var h=v(s);r=$(h,"Generated hash that won't change: "),l=_(h,"B",{});var b=v(l);f=$(b,c[0]),b.forEach(a),h.forEach(a)},m(i,h){D(t,i,h),p(i,o,h),p(i,s,h),u(s,r),u(s,l),u(l,f),g=!0},p(i,h){const b={};h&4&&(b.$$scope={dirty:h,ctx:i}),t.$set(b)},i(i){g||(O(t.$$.fragment,i),g=!0)},o(i){B(t.$$.fragment,i),g=!1},d(i){U(t,i),i&&a(o),i&&a(s)}}}function Pe(c){let t,o;return t=new de({props:{align:"center",$$slots:{default:[Te]},$$scope:{ctx:c}}}),{c(){S(t.$$.fragment)},l(s){C(t.$$.fragment,s)},m(s,r){D(t,s,r),o=!0},p(s,[r]){const l={};r&4&&(l.$$scope={dirty:r,ctx:s}),t.$set(l)},i(s){o||(O(t.$$.fragment,s),o=!0)},o(s){B(t.$$.fragment,s),o=!1},d(s){U(t,s)}}}const Ge=`
<script>
	import { useHash } from '@svelteuidev/composables';

	const id = useHash('my-library', true);
<\/script>

<p>Generated hash that won't change: <b>{id}</b></p>
`,je="demo",Se={code:Ge};function Ce(c){return[ce("my-library",!0),()=>window.location.reload()]}class De extends Z{constructor(t){super(),ee(this,t,Ce,Pe,te,{})}}const Oe=Object.freeze(Object.defineProperty({__proto__:null,configuration:Se,default:De,type:je},Symbol.toStringTag,{value:"Module"}));function Be(c){let t,o,s,r,l,f,g,i,h,b,I,T,J,M,y,K,j,N,Q,z,E,q,P,V,L,x,ue='<code class="language-js"><span class="token comment">// no specific exported types</span></code>',R,G,Y,A,H,fe=`<code class="language-js"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useHash</span><span class="token punctuation">(</span>prefix<span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">'svelteui'</span><span class="token punctuation">,</span> <span class="token literal-property property">persist</span><span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">;</span></code>`,W;return b=new ie({props:{demo:xe}}),E=new ie({props:{demo:Oe}}),{c(){t=d("h2"),o=m("Usage"),s=k(),r=d("p"),l=m("The "),f=d("code"),g=m("use-hash"),i=m(" composable function generates a random hash with a specified prefix. The first argument determines the prefix used. If no prefix is specified it defaults to ‘svelteui’."),h=k(),S(b.$$.fragment),I=k(),T=d("h2"),J=m("Persistent hash"),M=k(),y=d("p"),K=m("The "),j=d("code"),N=m("use-hash"),Q=m(" composable also takes a second argument which is a boolean value. If set to true the hash value will be saved in local storage, and therefore persist through the browser."),z=k(),S(E.$$.fragment),q=k(),P=d("h2"),V=m("Typescript"),L=k(),x=d("pre"),R=k(),G=d("h2"),Y=m("Definition"),A=k(),H=d("pre"),this.h()},l(e){t=_(e,"H2",{});var n=v(t);o=$(n,"Usage"),n.forEach(a),s=w(e),r=_(e,"P",{});var X=v(r);l=$(X,"The "),f=_(X,"CODE",{});var se=v(f);g=$(se,"use-hash"),se.forEach(a),i=$(X," composable function generates a random hash with a specified prefix. The first argument determines the prefix used. If no prefix is specified it defaults to ‘svelteui’."),X.forEach(a),h=w(e),C(b.$$.fragment,e),I=w(e),T=_(e,"H2",{});var ae=v(T);J=$(ae,"Persistent hash"),ae.forEach(a),M=w(e),y=_(e,"P",{});var F=v(y);K=$(F,"The "),j=_(F,"CODE",{});var oe=v(j);N=$(oe,"use-hash"),oe.forEach(a),Q=$(F," composable also takes a second argument which is a boolean value. If set to true the hash value will be saved in local storage, and therefore persist through the browser."),F.forEach(a),z=w(e),C(E.$$.fragment,e),q=w(e),P=_(e,"H2",{});var re=v(P);V=$(re,"Typescript"),re.forEach(a),L=w(e),x=_(e,"PRE",{class:!0});var he=v(x);he.forEach(a),R=w(e),G=_(e,"H2",{});var ne=v(G);Y=$(ne,"Definition"),ne.forEach(a),A=w(e),H=_(e,"PRE",{class:!0});var me=v(H);me.forEach(a),this.h()},h(){le(x,"class","language-js"),le(H,"class","language-js")},m(e,n){p(e,t,n),u(t,o),p(e,s,n),p(e,r,n),u(r,l),u(r,f),u(f,g),u(r,i),p(e,h,n),D(b,e,n),p(e,I,n),p(e,T,n),u(T,J),p(e,M,n),p(e,y,n),u(y,K),u(y,j),u(j,N),u(y,Q),p(e,z,n),D(E,e,n),p(e,q,n),p(e,P,n),u(P,V),p(e,L,n),p(e,x,n),x.innerHTML=ue,p(e,R,n),p(e,G,n),u(G,Y),p(e,A,n),p(e,H,n),H.innerHTML=fe,W=!0},p:pe,i(e){W||(O(b.$$.fragment,e),O(E.$$.fragment,e),W=!0)},o(e){B(b.$$.fragment,e),B(E.$$.fragment,e),W=!1},d(e){e&&a(t),e&&a(s),e&&a(r),e&&a(h),U(b,e),e&&a(I),e&&a(T),e&&a(M),e&&a(y),e&&a(z),U(E,e),e&&a(q),e&&a(P),e&&a(L),e&&a(x),e&&a(R),e&&a(G),e&&a(A),e&&a(H)}}}const Re={title:"hash",group:"svelteuidev-utilities",packageGroup:"@svelteuidev/utilities",slug:"/utilities/hash/",description:"Util generates a random hash with a specified prefix.",importCode:"import { useHash } from '@svelteuidev/utilities';",source:"svelteui-composables/src/utilities/use-hash/use-hash.ts",docs:"utilities/hash.md"};class Ae extends Z{constructor(t){super(),ee(this,t,null,Be,te,{})}}export{Ae as default,Re as metadata};
