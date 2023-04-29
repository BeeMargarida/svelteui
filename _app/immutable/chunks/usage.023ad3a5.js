import{S as z,i as E,s as j,y as d,z as _,A as g,g as k,d as T,B as x,a as S,c as h,b as f,h as u,q as m,r as p,u as v}from"./index.b0fe5a0f.js";import{c as q}from"./filter.683521f9.js";import{S as O}from"./Stack.d0bbbc24.js";import{B as y}from"./Button.38176317.js";import{T as w}from"./navigation.618498c8.js";function A(r,e=!0,n=!0){let t=0,o,l=!0;const i=()=>{o&&(clearTimeout(o),o=void 0)};return $=>{const s=r,a=Date.now()-t;if(i(),s<=0)return t=Date.now(),$();a>s&&(n||!l)?(t=Date.now(),$()):e&&(o=setTimeout(()=>{t=Date.now(),l=!0,i(),$()},s)),!n&&!o&&(o=setTimeout(()=>l=!0,s)),l=!1}}function C(r,e=200,n=!0,t=!0){return q(A(e,n,t),r)}function L(r){let e;return{c(){e=m("Smash me!")},l(n){e=p(n,"Smash me!")},m(n,t){f(n,e,t)},d(n){n&&u(e)}}}function M(r){let e;return{c(){e=m("Delay is set to 1000ms for this demo.")},l(n){e=p(n,"Delay is set to 1000ms for this demo.")},m(n,t){f(n,e,t)},d(n){n&&u(e)}}}function P(r){let e,n;return{c(){e=m("Button clicked: "),n=m(r[1])},l(t){e=p(t,"Button clicked: "),n=p(t,r[1])},m(t,o){f(t,e,o),f(t,n,o)},p(t,o){o&2&&v(n,t[1])},d(t){t&&u(e),t&&u(n)}}}function U(r){let e,n;return{c(){e=m("Event handler called: "),n=m(r[0])},l(t){e=p(t,"Event handler called: "),n=p(t,r[0])},m(t,o){f(t,e,o),f(t,n,o)},p(t,o){o&1&&v(n,t[0])},d(t){t&&u(e),t&&u(n)}}}function W(r){let e,n,t,o,l,i,c,$;return e=new y({props:{$$slots:{default:[L]},$$scope:{ctx:r}}}),e.$on("click",r[2]),t=new w({props:{root:"note",size:"sm",$$slots:{default:[M]},$$scope:{ctx:r}}}),l=new w({props:{$$slots:{default:[P]},$$scope:{ctx:r}}}),c=new w({props:{$$slots:{default:[U]},$$scope:{ctx:r}}}),{c(){d(e.$$.fragment),n=S(),d(t.$$.fragment),o=S(),d(l.$$.fragment),i=S(),d(c.$$.fragment)},l(s){_(e.$$.fragment,s),n=h(s),_(t.$$.fragment,s),o=h(s),_(l.$$.fragment,s),i=h(s),_(c.$$.fragment,s)},m(s,a){g(e,s,a),f(s,n,a),g(t,s,a),f(s,o,a),g(l,s,a),f(s,i,a),g(c,s,a),$=!0},p(s,a){const B={};a&16&&(B.$$scope={dirty:a,ctx:s}),e.$set(B);const F={};a&16&&(F.$$scope={dirty:a,ctx:s}),t.$set(F);const b={};a&18&&(b.$$scope={dirty:a,ctx:s}),l.$set(b);const D={};a&17&&(D.$$scope={dirty:a,ctx:s}),c.$set(D)},i(s){$||(k(e.$$.fragment,s),k(t.$$.fragment,s),k(l.$$.fragment,s),k(c.$$.fragment,s),$=!0)},o(s){T(e.$$.fragment,s),T(t.$$.fragment,s),T(l.$$.fragment,s),T(c.$$.fragment,s),$=!1},d(s){x(e,s),s&&u(n),x(t,s),s&&u(o),x(l,s),s&&u(i),x(c,s)}}}function G(r){let e,n;return e=new O({props:{align:"center",$$slots:{default:[W]},$$scope:{ctx:r}}}),{c(){d(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,o){g(e,t,o),n=!0},p(t,[o]){const l={};o&19&&(l.$$scope={dirty:o,ctx:t}),e.$set(l)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}const H=`
<script>
	import { Button, Text, Stack } from '@svelteuidev/core';
	import { useThrottle } from '@svelteuidev/composables';

	let updated = 0;
	let clicked = 0;

	const throttledFn = useThrottle(() => {
		updated += 1;
	}, 1000);
	
	const clickedFn = () => {
		clicked += 1;
		throttledFn();
	};
<\/script>

<Stack align="center">
	<Button on:click={clickedFn}>Smash me!</Button>
	<Text root="note" size="sm">Delay is set to 1000ms for this demo.</Text>

	<Text>Button clicked: {clicked}</Text>
	<Text>Event handler called: {updated}</Text>
</Stack>
`,I="demo",J={code:H};function K(r,e,n){let t=0,o=0;const l=C(()=>{n(0,t+=1)},1e3);return[t,o,()=>{n(1,o+=1),l()}]}class N extends z{constructor(e){super(),E(this,e,K,G,j,{})}}const Z=Object.freeze(Object.defineProperty({__proto__:null,configuration:J,default:N,type:I},Symbol.toStringTag,{value:"Module"}));export{Z as u};
