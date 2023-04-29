import{S as X,i as H,s as J,y as S,z as R,A as T,g as _,d as k,B as W,a as C,e as v,c as E,b as m,v as A,f as D,h as $,t as G,q as b,k as B,r as g,l as U,C as K,m as h,Y as j,u as O}from"./index.b0fe5a0f.js";import{d as Q}from"./_configurable.5540db98.js";import{S as q}from"./Stack.2f330b05.js";import{u as V}from"./use-raf-fn.e10cff7c.js";import{T as y}from"./navigation.9bd98935.js";import{B as F}from"./Button.36168772.js";const Z=a=>t=>{const r=t.data[0];return Promise.resolve(a.apply(void 0,r)).then(e=>{postMessage(["SUCCESS",e])}).catch(e=>{postMessage(["ERROR",e])})},x=Z,ee=a=>a.length===0?"":`importScripts(${a.map(r=>`'${r}'`).toString()})`,te=ee,re=(a,t)=>{const r=`${te(t)}; onmessage=(${x})(${a})`,e=new Blob([r],{type:"text/javascript"});return URL.createObjectURL(e)},oe=re,ne=(a,t={})=>{const{dependencies:r=[],timeout:e,window:n=Q}=t;let s,f,i="PENDING",c={};const l=(p="PENDING")=>{f&&f._url&&n&&(f.terminate(),URL.revokeObjectURL(f._url),c={},f=void 0,n.clearTimeout(s),i=p)};l();const o=()=>{const p=oe(a,r),w=new Worker(p);return w._url=p,w.onmessage=N=>{const{resolve:M=()=>{},reject:Y=()=>{}}=c,[I,P]=N.data;switch(I){case"SUCCESS":M(P),l(I);break;default:Y(P),l("ERROR");break}},w.onerror=N=>{const{reject:M=()=>{}}=c;M(N),l("ERROR")},e&&(s=setTimeout(()=>l("TIMEOUT_EXPIRED"),e)),w},u=(...p)=>new Promise((w,N)=>{c={resolve:w,reject:N},f&&f.postMessage([[...p]]),i="RUNNING"});return{workerFn:(...p)=>i==="RUNNING"?(console.error("[useWebWorker] You can only run one instance of the worker at a time."),Promise.reject()):(f=o(),u(...p)),workerStatus:i,workerTerminate:l}};function se(a){let t,r;return{c(){t=b("This is a demo showing sort for large array (5 milion numbers) with or w/o WebWorker."),r=B("br")},l(e){t=g(e,"This is a demo showing sort for large array (5 milion numbers) with or w/o WebWorker."),r=U(e,"BR",{})},m(e,n){m(e,t,n),m(e,r,n)},p:K,d(e){e&&$(t),e&&$(r)}}}function ae(a){let t,r,e;return{c(){t=b("Current Count: "),r=B("b"),e=b(a[2])},l(n){t=g(n,"Current Count: "),r=U(n,"B",{});var s=h(r);e=g(s,a[2]),s.forEach($)},m(n,s){m(n,t,s),m(n,r,s),j(r,e)},p(n,s){s&4&&O(e,n[2])},d(n){n&&$(t),n&&$(r)}}}function le(a){let t;return{c(){t=b("Sort in Main Thread")},l(r){t=g(r,"Sort in Main Thread")},m(r,e){m(r,t,e)},d(r){r&&$(t)}}}function ce(a){let t,r;return t=new F({props:{color:"orange",$$slots:{default:[fe]},$$scope:{ctx:a}}}),t.$on("click",a[7]),{c(){S(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,n){T(t,e,n),r=!0},p(e,n){const s={};n&2048&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){k(t.$$.fragment,e),r=!1},d(e){W(t,e)}}}function ue(a){let t,r;return t=new F({props:{$$slots:{default:[ie]},$$scope:{ctx:a}}}),t.$on("click",a[6]),{c(){S(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,n){T(t,e,n),r=!0},p(e,n){const s={};n&2048&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){k(t.$$.fragment,e),r=!1},d(e){W(t,e)}}}function fe(a){let t;return{c(){t=b("Terminate Worker")},l(r){t=g(r,"Terminate Worker")},m(r,e){m(r,t,e)},d(r){r&&$(t)}}}function ie(a){let t;return{c(){t=b("Sort in Worker")},l(r){t=g(r,"Sort in Worker")},m(r,e){m(r,t,e)},d(r){r&&$(t)}}}function $e(a){let t,r,e,n,s,f;t=new F({props:{$$slots:{default:[le]},$$scope:{ctx:a}}}),t.$on("click",a[5]);const i=[ue,ce],c=[];function l(o,u){return o[3]?1:0}return e=l(a),n=c[e]=i[e](a),{c(){S(t.$$.fragment),r=C(),n.c(),s=v()},l(o){R(t.$$.fragment,o),r=E(o),n.l(o),s=v()},m(o,u){T(t,o,u),m(o,r,u),c[e].m(o,u),m(o,s,u),f=!0},p(o,u){const d={};u&2048&&(d.$$scope={dirty:u,ctx:o}),t.$set(d);let p=e;e=l(o),e===p?c[e].p(o,u):(A(),k(c[p],1,1,()=>{c[p]=null}),D(),n=c[e],n?n.p(o,u):(n=c[e]=i[e](o),n.c()),_(n,1),n.m(s.parentNode,s))},i(o){f||(_(t.$$.fragment,o),_(n),f=!0)},o(o){k(t.$$.fragment,o),k(n),f=!1},d(o){W(t,o),o&&$(r),c[e].d(o),o&&$(s)}}}function L(a){let t,r;return t=new y({props:{$$slots:{default:[me]},$$scope:{ctx:a}}}),{c(){S(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,n){T(t,e,n),r=!0},p(e,n){const s={};n&2051&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){k(t.$$.fragment,e),r=!1},d(e){W(t,e)}}}function me(a){let t,r,e,n,s,f,i;return{c(){t=b("Thread: "),r=B("strong"),e=b(a[1]),n=B("br"),s=b(`
			Result: `),f=B("strong"),i=b(a[0])},l(c){t=g(c,"Thread: "),r=U(c,"STRONG",{});var l=h(r);e=g(l,a[1]),l.forEach($),n=U(c,"BR",{}),s=g(c,`
			Result: `),f=U(c,"STRONG",{});var o=h(f);i=g(o,a[0]),o.forEach($)},m(c,l){m(c,t,l),m(c,r,l),j(r,e),m(c,n,l),m(c,s,l),m(c,f,l),j(f,i)},p(c,l){l&2&&O(e,c[1]),l&1&&O(i,c[0])},d(c){c&&$(t),c&&$(r),c&&$(n),c&&$(s),c&&$(f)}}}function pe(a){let t,r,e,n,s,f,i,c;t=new y({props:{root:"note",size:"sm",weight:"bold",$$slots:{default:[se]},$$scope:{ctx:a}}}),e=new y({props:{$$slots:{default:[ae]},$$scope:{ctx:a}}}),s=new q({props:{$$slots:{default:[$e]},$$scope:{ctx:a}}});let l=a[0]&&L(a);return{c(){S(t.$$.fragment),r=C(),S(e.$$.fragment),n=C(),S(s.$$.fragment),f=C(),l&&l.c(),i=v()},l(o){R(t.$$.fragment,o),r=E(o),R(e.$$.fragment,o),n=E(o),R(s.$$.fragment,o),f=E(o),l&&l.l(o),i=v()},m(o,u){T(t,o,u),m(o,r,u),T(e,o,u),m(o,n,u),T(s,o,u),m(o,f,u),l&&l.m(o,u),m(o,i,u),c=!0},p(o,u){const d={};u&2048&&(d.$$scope={dirty:u,ctx:o}),t.$set(d);const p={};u&2052&&(p.$$scope={dirty:u,ctx:o}),e.$set(p);const w={};u&2056&&(w.$$scope={dirty:u,ctx:o}),s.$set(w),o[0]?l?(l.p(o,u),u&1&&_(l,1)):(l=L(o),l.c(),_(l,1),l.m(i.parentNode,i)):l&&(A(),k(l,1,1,()=>{l=null}),D())},i(o){c||(_(t.$$.fragment,o),_(e.$$.fragment,o),_(s.$$.fragment,o),_(l),c=!0)},o(o){k(t.$$.fragment,o),k(e.$$.fragment,o),k(s.$$.fragment,o),k(l),c=!1},d(o){W(t,o),o&&$(r),W(e,o),o&&$(n),W(s,o),o&&$(f),l&&l.d(o),o&&$(i)}}}function _e(a){let t,r;return t=new q({props:{align:"center",$$slots:{default:[pe]},$$scope:{ctx:a}}}),{c(){S(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,n){T(t,e,n),r=!0},p(e,[n]){const s={};n&2063&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){k(t.$$.fragment,e),r=!1},d(e){W(t,e)}}}const ke=`
<script>
	import { Button, Stack, Text } from '@svelteuidev/core';
	import { useWebWorker, useRafFn } from '@svelteuidev/composables';
	import { tick } from 'svelte';

	let data;
	let runner = '';
	let count = 0;

	const controls = useRafFn(() => count++);
	const { workerFn, workerStatus, workerTerminate } = useWebWorker(heavyTask);

	const baseSort = async () => {
		data = null;
		await tick();
		data = heavyTask();
		runner = 'Main';
	};
	const workerSort = async () => {
		data = null;
		await tick();
		data = await workerFn();
		runner = 'Worker';
	};
	$: running = workerStatus === 'RUNNING';
	controls.resume();
<\/script>

<Stack align="center">
	<Text>Current Count: <b>{count}</b></Text>
	<Stack>
		<Button on:click={baseSort}>Sort in Main Thread</Button>
		{#if !running}
			<Button on:click={workerSort}>Sort in Worker</Button>
		{:else}
			<Button color="orange" on:click={() => workerTerminate()}>Terminate Worker</Button>
		{/if}
	</Stack>
</Stack>
`,be="demo",ge={code:ke,toggle:!0},z=()=>{const a=()=>Math.trunc(Math.random()*5e5),t=Array(5e6).fill(void 0).map(a);return t.sort(),t.slice(0,5)};function we(a,t,r){let e,n,s="",f=0;const i=V(()=>r(2,f++,f)),{workerFn:c,workerStatus:l,workerTerminate:o}=ne(z),u=async()=>{r(0,n=null),await G(),r(0,n=z()),r(1,s="Main")},d=async()=>{r(0,n=null),await G(),r(0,n=await c()),r(1,s="Worker")};i.resume();const p=()=>o();return r(3,e=l==="RUNNING"),[n,s,f,e,o,u,d,p]}class de extends X{constructor(t){super(),H(this,t,we,_e,J,{})}}const Ue=Object.freeze(Object.defineProperty({__proto__:null,configuration:ge,default:de,type:be},Symbol.toStringTag,{value:"Module"}));export{Ue as u};
