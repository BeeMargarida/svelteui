import{S as h,i as b,s as y,y as I,z as v,A as G,g as S,d as E,B as w,k as f,q as m,l as _,m as $,r as g,h as l,b as x,W as p,X as B}from"./index.b4f0bbdc.js";import{G as X}from"./Group.db734d69.js";let a=256,u;const c=[];for(;a--;)c[a]=(a+256).toString(16).substring(1);function j(){let t=0,e,o="";if(!u||a+16>256){for(u=Array(t=256);t--;)u[t]=256*Math.random()|0;t=a=0}for(;t<16;t++)e=u[a+t],t==6?o+=c[e&15|64]:t==8?o+=c[e&63|128]:o+=c[e],t&1&&t>1&&t<11&&(o+="-");return a++,o}function q(t){let e,o,n,s;return{c(){e=f("p"),o=m("Generated Id: "),n=f("b"),s=m(t[0])},l(r){e=_(r,"P",{});var i=$(e);o=g(i,"Generated Id: "),n=_(i,"B",{});var d=$(n);s=g(d,t[0]),d.forEach(l),i.forEach(l)},m(r,i){x(r,e,i),p(e,o),p(e,n),p(n,s)},p:B,d(r){r&&l(e)}}}function z(t){let e,o;return e=new X({props:{position:"center",$$slots:{default:[q]},$$scope:{ctx:t}}}),{c(){I(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,s){G(e,n,s),o=!0},p(n,[s]){const r={};s&2&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){o||(S(e.$$.fragment,n),o=!0)},o(n){E(e.$$.fragment,n),o=!1},d(n){w(e,n)}}}const A=`
<script>
	import { useId } from '@svelteuidev/composables';

	const uuid = useId()
<\/script>
	
<p>Generated Id: <b>{uuid}</b></p>
`,F="demo",M={code:A};function O(t){return[j()]}class P extends h{constructor(e){super(),b(this,e,O,z,y,{})}}const C=Object.freeze(Object.defineProperty({__proto__:null,configuration:M,default:P,type:F},Symbol.toStringTag,{value:"Module"}));export{C as u};
