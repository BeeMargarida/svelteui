import{S as E,i as h,s as j,y as p,z as d,A as _,g,d as k,B as T,a as x,c as S,b as u,h as f,q as m,r as $,u as z}from"./index.b0fe5a0f.js";import{c as q}from"./filter.683521f9.js";import{S as O}from"./Stack.2f330b05.js";import{B as W}from"./Button.36168772.js";import{T as B}from"./navigation.9bd98935.js";function y(r,t={}){let n,e;return c=>{const i=r,a=t.maxWait;if(n&&clearTimeout(n),i<=0||a!==void 0&&a<=0)return e&&(clearTimeout(e),e=null),c();a&&!e&&(e=setTimeout(()=>{n&&clearTimeout(n),e=null,c()},a)),n=setTimeout(()=>{e&&clearTimeout(e),e=null,c()},i)}}function A(r,t=200,n={}){return q(y(t,n),r)}function C(r){let t;return{c(){t=m("Smash me!")},l(n){t=$(n,"Smash me!")},m(n,e){u(n,t,e)},d(n){n&&f(t)}}}function M(r){let t;return{c(){t=m("Delay is set to 1000ms for this demo.")},l(n){t=$(n,"Delay is set to 1000ms for this demo.")},m(n,e){u(n,t,e)},d(n){n&&f(t)}}}function P(r){let t,n;return{c(){t=m("Button clicked: "),n=m(r[1])},l(e){t=$(e,"Button clicked: "),n=$(e,r[1])},m(e,o){u(e,t,o),u(e,n,o)},p(e,o){o&2&&z(n,e[1])},d(e){e&&f(t),e&&f(n)}}}function U(r){let t,n;return{c(){t=m("Event handler called: "),n=m(r[0])},l(e){t=$(e,"Event handler called: "),n=$(e,r[0])},m(e,o){u(e,t,o),u(e,n,o)},p(e,o){o&1&&z(n,e[0])},d(e){e&&f(t),e&&f(n)}}}function G(r){let t,n,e,o,c,i,a,b;return t=new W({props:{$$slots:{default:[C]},$$scope:{ctx:r}}}),t.$on("click",r[2]),e=new B({props:{root:"note",size:"sm",$$slots:{default:[M]},$$scope:{ctx:r}}}),c=new B({props:{$$slots:{default:[P]},$$scope:{ctx:r}}}),a=new B({props:{$$slots:{default:[U]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment),n=x(),p(e.$$.fragment),o=x(),p(c.$$.fragment),i=x(),p(a.$$.fragment)},l(s){d(t.$$.fragment,s),n=S(s),d(e.$$.fragment,s),o=S(s),d(c.$$.fragment,s),i=S(s),d(a.$$.fragment,s)},m(s,l){_(t,s,l),u(s,n,l),_(e,s,l),u(s,o,l),_(c,s,l),u(s,i,l),_(a,s,l),b=!0},p(s,l){const F={};l&16&&(F.$$scope={dirty:l,ctx:s}),t.$set(F);const D={};l&16&&(D.$$scope={dirty:l,ctx:s}),e.$set(D);const v={};l&18&&(v.$$scope={dirty:l,ctx:s}),c.$set(v);const w={};l&17&&(w.$$scope={dirty:l,ctx:s}),a.$set(w)},i(s){b||(g(t.$$.fragment,s),g(e.$$.fragment,s),g(c.$$.fragment,s),g(a.$$.fragment,s),b=!0)},o(s){k(t.$$.fragment,s),k(e.$$.fragment,s),k(c.$$.fragment,s),k(a.$$.fragment,s),b=!1},d(s){T(t,s),s&&f(n),T(e,s),s&&f(o),T(c,s),s&&f(i),T(a,s)}}}function H(r){let t,n;return t=new O({props:{align:"center",$$slots:{default:[G]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,o){_(t,e,o),n=!0},p(e,[o]){const c={};o&19&&(c.$$scope={dirty:o,ctx:e}),t.$set(c)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){T(t,e)}}}const I=`
	<script>
		import { Button, Text, Stack } from '@svelteuidev/core';
		import { useDebounce } from '@svelteuidev/composables';

		let updated = 0;
		let clicked = 0;
		const debouncedFn = useDebounce(() => {
			updated += 1;
		}, 1000);
		const clickedFn = () => {
			clicked += 1;
			debouncedFn();
		};
	<\/script>
	
	<Stack align="center">
		<Button on:click={clickedFn}>Smash me!</Button>
		<Text root="note" size="sm">Delay is set to 1000ms for this demo.</Text>

		<Text>Button clicked: {clicked}</Text>
		<Text>Event handler called: {updated}</Text>
	</Stack>
	`,J="demo",K={code:I};function L(r,t,n){let e=0,o=0;const c=A(()=>{n(0,e+=1)},1e3);return[e,o,()=>{n(1,o+=1),c()}]}class N extends E{constructor(t){super(),h(this,t,L,H,j,{})}}const Z=Object.freeze(Object.defineProperty({__proto__:null,configuration:K,default:N,type:J},Symbol.toStringTag,{value:"Module"}));export{Z as u};
