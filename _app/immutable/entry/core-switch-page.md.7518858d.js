import{S as Oe,i as Ee,s as xe,y as E,z as x,A as z,g as L,d as C,B as F,H as Me,N as qe,a7 as Be,a as v,c as k,b as u,C as Re,h as n,k as d,q as c,al as Ye,l as $,m as h,r as p,n as Je,Y as l}from"../chunks/index.b0fe5a0f.js";import{G as Ke}from"../chunks/navigation.9bd98935.js";import{H as Qe}from"../chunks/Heading.19c03976.js";import{D as Ge}from"../chunks/Demo.82a35c94.js";import{C as We}from"../chunks/Center.b83aac32.js";import{S as J}from"../chunks/Switch.b6752c3e.js";function Xe(b){let t,r;const s=[{checked:!0},b[0]];let i={};for(let o=0;o<s.length;o+=1)i=Me(i,s[o]);return t=new J({props:i}),{c(){E(t.$$.fragment)},l(o){x(t.$$.fragment,o)},m(o,S){z(t,o,S),r=!0},p(o,S){const g=S&1?qe(s,[s[0],Be(o[0])]):{};t.$set(g)},i(o){r||(L(t.$$.fragment,o),r=!0)},o(o){C(t.$$.fragment,o),r=!1},d(o){F(t,o)}}}function Ze(b){let t,r;return t=new We({props:{$$slots:{default:[Xe]},$$scope:{ctx:b}}}),{c(){E(t.$$.fragment)},l(s){x(t.$$.fragment,s)},m(s,i){z(t,s,i),r=!0},p(s,[i]){const o={};i&3&&(o.$$scope={dirty:i,ctx:s}),t.$set(o)},i(s){r||(L(t.$$.fragment,s),r=!0)},o(s){C(t.$$.fragment,s),r=!1},d(s){F(t,s)}}}const et=(b,t)=>`<script>
  import { Switch } from '@svelteuidev/core';
<\/script>

<Switch checked ${b} />`,tt="configurator",st={codeTemplate:et,configurator:[{name:"label",type:"string",initialValue:"I agree to sell my privacy"},{name:"size",type:"size",initialValue:"sm",defaultValue:"sm"},{name:"radius",type:"size",initialValue:"xl",defaultValue:"xl"},{name:"color",type:"color",initialValue:"blue",defaultValue:"blue"},{name:"disabled",type:"boolean",initialValue:!1,defaultValue:!1}],multiline:!0};function at(b,t,r){let{props:s={}}=t;return b.$$set=i=>{"props"in i&&r(0,s=i.props)},[s]}class nt extends Oe{constructor(t){super(),Ee(this,t,at,Ze,xe,{props:0})}}const ot=Object.freeze(Object.defineProperty({__proto__:null,configuration:st,default:nt,type:tt},Symbol.toStringTag,{value:"Module"}));function lt(b){let t,r,s,i,o,S,g,_;return t=new J({props:{size:"sm",onLabel:"ON",offLabel:"OFF"}}),s=new J({props:{size:"md",onLabel:"ON",offLabel:"OFF"}}),o=new J({props:{size:"lg",onLabel:"ON",offLabel:"OFF"}}),g=new J({props:{size:"xl",onLabel:"ON",offLabel:"OFF"}}),{c(){E(t.$$.fragment),r=v(),E(s.$$.fragment),i=v(),E(o.$$.fragment),S=v(),E(g.$$.fragment)},l(a){x(t.$$.fragment,a),r=k(a),x(s.$$.fragment,a),i=k(a),x(o.$$.fragment,a),S=k(a),x(g.$$.fragment,a)},m(a,w){z(t,a,w),u(a,r,w),z(s,a,w),u(a,i,w),z(o,a,w),u(a,S,w),z(g,a,w),_=!0},p:Re,i(a){_||(L(t.$$.fragment,a),L(s.$$.fragment,a),L(o.$$.fragment,a),L(g.$$.fragment,a),_=!0)},o(a){C(t.$$.fragment,a),C(s.$$.fragment,a),C(o.$$.fragment,a),C(g.$$.fragment,a),_=!1},d(a){F(t,a),a&&n(r),F(s,a),a&&n(i),F(o,a),a&&n(S),F(g,a)}}}function rt(b){let t,r;return t=new Ke({props:{position:"center",$$slots:{default:[lt]},$$scope:{ctx:b}}}),{c(){E(t.$$.fragment)},l(s){x(t.$$.fragment,s)},m(s,i){z(t,s,i),r=!0},p(s,[i]){const o={};i&1&&(o.$$scope={dirty:i,ctx:s}),t.$set(o)},i(s){r||(L(t.$$.fragment,s),r=!0)},o(s){C(t.$$.fragment,s),r=!1},d(s){F(t,s)}}}const it=`<script>
	import { Switch } from '@svelteuidev/core';
<\/script>

<Switch size='sm' onLabel="ON" offLabel="OFF" />
<Switch size='md' onLabel="ON" offLabel="OFF" />
<Switch size='lg' onLabel="ON" offLabel="OFF" />
<Switch size='xl' onLabel="ON" offLabel="OFF" />
`,ct="demo",pt={code:it};class ft extends Oe{constructor(t){super(),Ee(this,t,null,rt,xe,{})}}const ut=Object.freeze(Object.defineProperty({__proto__:null,configuration:pt,default:ft,type:ct},Symbol.toStringTag,{value:"Module"}));function mt(b){let t,r,s,i,o,S,g,_,a,w,se,ae,j,ne,oe,K,D,Q,P,le,W,m,re,G,ie,ce,U,pe,fe,A,ue,me,M,de,$e,q,he,_e,X,I,Z,V,be,ee,O,ge,B,we,ve,R,ke,Se,te,N,Ue=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token punctuation">/></span></span> // -> not ok, input is not labeled
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>I agree to everything<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> // -> ok, input and label is connected
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>I agree to everything<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> // -> ok, label is not visible but will be announced by
screen reader</code>`,Y;return document.title=t=ye+" - SvelteUI",s=new Qe({props:{title:ye,group:$t,packageGroup:ht,slug:_t,category:bt,description:gt,importCode:wt,source:vt,docs:kt}}),D=new Ge({props:{demo:ot}}),I=new Ge({props:{demo:ut}}),{c(){r=v(),E(s.$$.fragment),i=v(),o=d("h2"),S=c("Usage"),g=v(),_=d("p"),a=c("Switch component is used to enable/disable something, normally used for boolean values or for binary actions. The component dispatches an "),w=d("code"),se=c("on:change"),ae=c(" event, and supports a "),j=d("code"),ne=c("checked"),oe=c(" prop for programmatically setting the checked state."),K=v(),E(D.$$.fragment),Q=v(),P=d("h2"),le=c("Inner labels and Size"),W=v(),m=d("p"),re=c("There is support for inserting text inside the switch for when it is enabled and/or disabled. It is also possible to control the size of the switch with predefined values: "),G=d("code"),ie=c("xs"),ce=c(", "),U=d("code"),pe=c("sm"),fe=c(", "),A=d("code"),ue=c("md"),me=c(", "),M=d("code"),de=c("lg"),$e=c(", "),q=d("code"),he=c("xl"),_e=c("."),X=v(),E(I.$$.fragment),Z=v(),V=d("h2"),be=c("Accessibility"),ee=v(),O=d("p"),ge=c("Switch is a regular input with checkbox type. Provide "),B=d("code"),we=c("aria-label"),ve=c(" if Switch is used without "),R=d("code"),ke=c("label"),Se=c(":"),te=v(),N=d("pre"),this.h()},l(e){Ye("svelte-pki6ul",document.head).forEach(n),r=k(e),x(s.$$.fragment,e),i=k(e),o=$(e,"H2",{});var ze=h(o);S=p(ze,"Usage"),ze.forEach(n),g=k(e),_=$(e,"P",{});var T=h(_);a=p(T,"Switch component is used to enable/disable something, normally used for boolean values or for binary actions. The component dispatches an "),w=$(T,"CODE",{});var Le=h(w);se=p(Le,"on:change"),Le.forEach(n),ae=p(T," event, and supports a "),j=$(T,"CODE",{});var Ce=h(j);ne=p(Ce,"checked"),Ce.forEach(n),oe=p(T," prop for programmatically setting the checked state."),T.forEach(n),K=k(e),x(D.$$.fragment,e),Q=k(e),P=$(e,"H2",{});var Fe=h(P);le=p(Fe,"Inner labels and Size"),Fe.forEach(n),W=k(e),m=$(e,"P",{});var y=h(m);re=p(y,"There is support for inserting text inside the switch for when it is enabled and/or disabled. It is also possible to control the size of the switch with predefined values: "),G=$(y,"CODE",{});var De=h(G);ie=p(De,"xs"),De.forEach(n),ce=p(y,", "),U=$(y,"CODE",{});var Ie=h(U);pe=p(Ie,"sm"),Ie.forEach(n),fe=p(y,", "),A=$(y,"CODE",{});var Ne=h(A);ue=p(Ne,"md"),Ne.forEach(n),me=p(y,", "),M=$(y,"CODE",{});var Pe=h(M);de=p(Pe,"lg"),Pe.forEach(n),$e=p(y,", "),q=$(y,"CODE",{});var Ve=h(q);he=p(Ve,"xl"),Ve.forEach(n),_e=p(y,"."),y.forEach(n),X=k(e),x(I.$$.fragment,e),Z=k(e),V=$(e,"H2",{});var Te=h(V);be=p(Te,"Accessibility"),Te.forEach(n),ee=k(e),O=$(e,"P",{});var H=h(O);ge=p(H,"Switch is a regular input with checkbox type. Provide "),B=$(H,"CODE",{});var He=h(B);we=p(He,"aria-label"),He.forEach(n),ve=p(H," if Switch is used without "),R=$(H,"CODE",{});var je=h(R);ke=p(je,"label"),je.forEach(n),Se=p(H,":"),H.forEach(n),te=k(e),N=$(e,"PRE",{class:!0});var Ae=h(N);Ae.forEach(n),this.h()},h(){Je(N,"class","language-svelte")},m(e,f){u(e,r,f),z(s,e,f),u(e,i,f),u(e,o,f),l(o,S),u(e,g,f),u(e,_,f),l(_,a),l(_,w),l(w,se),l(_,ae),l(_,j),l(j,ne),l(_,oe),u(e,K,f),z(D,e,f),u(e,Q,f),u(e,P,f),l(P,le),u(e,W,f),u(e,m,f),l(m,re),l(m,G),l(G,ie),l(m,ce),l(m,U),l(U,pe),l(m,fe),l(m,A),l(A,ue),l(m,me),l(m,M),l(M,de),l(m,$e),l(m,q),l(q,he),l(m,_e),u(e,X,f),z(I,e,f),u(e,Z,f),u(e,V,f),l(V,be),u(e,ee,f),u(e,O,f),l(O,ge),l(O,B),l(B,we),l(O,ve),l(O,R),l(R,ke),l(O,Se),u(e,te,f),u(e,N,f),N.innerHTML=Ue,Y=!0},p(e,[f]){(!Y||f&0)&&t!==(t=ye+" - SvelteUI")&&(document.title=t)},i(e){Y||(L(s.$$.fragment,e),L(D.$$.fragment,e),L(I.$$.fragment,e),Y=!0)},o(e){C(s.$$.fragment,e),C(D.$$.fragment,e),C(I.$$.fragment,e),Y=!1},d(e){e&&n(r),F(s,e),e&&n(i),e&&n(o),e&&n(g),e&&n(_),e&&n(K),F(D,e),e&&n(Q),e&&n(P),e&&n(W),e&&n(m),e&&n(X),F(I,e),e&&n(Z),e&&n(V),e&&n(ee),e&&n(O),e&&n(te),e&&n(N)}}}const dt={title:"Switch",group:"svelteuidev-core",packageGroup:"@svelteuidev/core",slug:"/core/switch/",category:"inputs",description:"Capture boolean input from user",importCode:"import { Switch } from '@svelteuidev/core';",source:"svelteui-core/src/components/Switch/Switch.svelte",docs:"core/switch.md"},{title:ye,group:$t,packageGroup:ht,slug:_t,category:bt,description:gt,importCode:wt,source:vt,docs:kt}=dt;class Lt extends Oe{constructor(t){super(),Ee(this,t,null,mt,xe,{})}}export{Lt as default,dt as metadata};
