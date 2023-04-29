import{S as Ct,i as It,s as Ot,k as m,y as P,a as v,l as d,m as h,z as L,c as g,h as o,n as Pt,p as Bt,b as _,A as M,Y as l,J as Wt,g as U,d as W,B as R,P as Rt,q as b,r as w,u as jt,al as zt}from"../chunks/index.b0fe5a0f.js";import{T as Lt,a as At}from"../chunks/navigation.9bd98935.js";import{H as qt}from"../chunks/Heading.19c03976.js";import{D as Gt}from"../chunks/Demo.82a35c94.js";import{w as Yt}from"../chunks/singletons.30b49b74.js";import{T as Jt}from"../chunks/TextInput.5cadc6cd.js";import{B as Vt}from"../chunks/Button.36168772.js";import{u as Ht}from"../chunks/upper-first.a5ff10ec.js";function Kt(i){return i.currentTarget instanceof HTMLElement&&i.relatedTarget instanceof HTMLElement?i.currentTarget.contains(i.relatedTarget):!1}function Nt({onBlur:i,onFocus:e}={}){const s=Yt(!1);let r=!1;const n=a=>{s.set(a),r=a},u=a=>{r||(n(!0),e==null||e(a))},f=a=>{r&&!Kt(a)&&(n(!1),i==null||i(a))};return[s,a=>(a==null||a.addEventListener("focusin",u),a==null||a.addEventListener("focusout",f),{destroy:()=>{a==null||a.removeEventListener("focusin",u),a==null||a.removeEventListener("focusout",f)}})]}function Qt(i){let e=Ht(i[0].toString())+"",s;return{c(){s=b(e)},l(r){s=w(r,e)},m(r,n){_(r,s,n)},p(r,n){n&1&&e!==(e=Ht(r[0].toString())+"")&&jt(s,e)},d(r){r&&o(s)}}}function Xt(i){let e,s,r;return s=new Lt({props:{root:"span",inherit:!0,variant:"gradient",$$slots:{default:[Qt]},$$scope:{ctx:i}}}),{c(){e=b(`One of elements has focus:
		`),P(s.$$.fragment)},l(n){e=w(n,`One of elements has focus:
		`),L(s.$$.fragment,n)},m(n,u){_(n,e,u),M(s,n,u),r=!0},p(n,u){const f={};u&33&&(f.$$scope={dirty:u,ctx:n}),s.$set(f)},i(n){r||(U(s.$$.fragment,n),r=!0)},o(n){W(s.$$.fragment,n),r=!1},d(n){n&&o(e),R(s,n)}}}function Zt(i){let e;return{c(){e=b("Click Me")},l(s){e=w(s,"Click Me")},m(s,r){_(s,e,r)},d(s){s&&o(e)}}}function te(i){let e,s,r,n,u,f,T,a,H;return s=new Lt({props:{root:"p",align:"center",size:"md",weight:"bold",tracking:"tight",mb:"lg",$$slots:{default:[Xt]},$$scope:{ctx:i}}}),n=new Jt({props:{label:"Focus this input",placeholder:"Styles will be added to parent"}}),f=new Vt({props:{override:{mt:"$5"},$$slots:{default:[Zt]},$$scope:{ctx:i}}}),{c(){e=m("div"),P(s.$$.fragment),r=v(),P(n.$$.fragment),u=v(),P(f.$$.fragment),this.h()},l(c){e=d(c,"DIV",{style:!0});var $=h(e);L(s.$$.fragment,$),r=g($),L(n.$$.fragment,$),u=g($),L(f.$$.fragment,$),$.forEach(o),this.h()},h(){Pt(e,"style",ne),Bt(e,"background-color",i[0]?i[3]:"transparent")},m(c,$){_(c,e,$),M(s,e,null),l(e,r),M(n,e,null),l(e,u),M(f,e,null),T=!0,a||(H=Wt(i[2].call(null,e)),a=!0)},p(c,[$]){const C={};$&33&&(C.$$scope={dirty:$,ctx:c}),s.$set(C);const E={};$&32&&(E.$$scope={dirty:$,ctx:c}),f.$set(E),$&1&&Bt(e,"background-color",c[0]?c[3]:"transparent")},i(c){T||(U(s.$$.fragment,c),U(n.$$.fragment,c),U(f.$$.fragment,c),T=!0)},o(c){W(s.$$.fragment,c),W(n.$$.fragment,c),W(f.$$.fragment,c),T=!1},d(c){c&&o(e),R(s),R(n),R(f),a=!1,H()}}}const ee=`
<script>
	import { Text, Button, TextInput } from '@svelteuidev/core';
	import { useFocusWithin } from '@svelteuidev/composables';

	const [focused, ref] = useFocusWithin();
<\/script>

<Box 
	use={[[ref]]} 
	css={{ backgroundColor: $focused ? '$blue50' : 'transparent', padding: '$10' }}
>
	<Text 
		root="p" 
		align="center" 
		size="md" 
		weight="bold" 
		tracking="tight" 
		mb="lg"
	>
		One of elements has focus:
		<Text root="span" inherit variant="gradient">{$focused}</Text>
	</Text>
	<TextInput label="Focus this input" placeholder="Styles will be added to parent" />
	<Button override={{ mt: '$5' }}>Click Me</Button>
</Box>
`,se="demo",oe={code:ee},ne="padding:1rem;border-radius:8px";function ae(i,e,s){let r;const[n,u]=Nt();Rt(i,n,a=>s(0,r=a));const T=At().colors.blue50.value;return[r,n,u,T]}class re extends Ct{constructor(e){super(),It(this,e,ae,te,Ot,{})}}const le=Object.freeze(Object.defineProperty({__proto__:null,configuration:oe,default:re,type:se},Symbol.toStringTag,{value:"Module"}));function ie(i){let e,s,r,n,u,f,T,a,H,c,$,C,E,y,K,I,at,N,k,j,x,z,rt,lt,A,it,ct,D,S,q,ut,ft,G,pt,mt,F,Y,dt,ht,J,$t,Q,O,_t,X,B,Mt='<code class="language-js"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useFocusWithin</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> onBlur<span class="token punctuation">,</span> onFocus <span class="token punctuation">&#125;</span><span class="token operator">?</span><span class="token operator">:</span> UseFocusWithinOptions</span><span class="token punctuation">)</span><span class="token operator">:</span> FocusWithin<span class="token punctuation">;</span></code>',V;return document.title=e=vt+" - SvelteUI",r=new qt({props:{title:vt,group:ue,packageGroup:fe,slug:pe,description:me,importCode:de,docs:he,source:$e}}),y=new Gt({props:{demo:le}}),{c(){s=v(),P(r.$$.fragment),n=v(),u=m("h2"),f=b("Usage"),T=v(),a=m("p"),H=b("The "),c=m("code"),$=b("use-focus-within"),C=b(" composable determines whether any element within has focus. It works in the same way that the CSS selector for focus-within works."),E=v(),P(y.$$.fragment),K=v(),I=m("h2"),at=b("Params"),N=v(),k=m("table"),j=m("thead"),x=m("tr"),z=m("th"),rt=b("Param"),lt=v(),A=m("th"),it=b("Description"),ct=v(),D=m("tbody"),S=m("tr"),q=m("td"),ut=b("onBlur"),ft=v(),G=m("td"),pt=b("calls function onBlur"),mt=v(),F=m("tr"),Y=m("td"),dt=b("onFocus"),ht=v(),J=m("td"),$t=b("calls function onFocus"),Q=v(),O=m("h2"),_t=b("Definition"),X=v(),B=m("pre"),this.h()},l(t){zt("svelte-pki6ul",document.head).forEach(o),s=g(t),L(r.$$.fragment,t),n=g(t),u=d(t,"H2",{});var gt=h(u);f=w(gt,"Usage"),gt.forEach(o),T=g(t),a=d(t,"P",{});var Z=h(a);H=w(Z,"The "),c=d(Z,"CODE",{});var bt=h(c);$=w(bt,"use-focus-within"),bt.forEach(o),C=w(Z," composable determines whether any element within has focus. It works in the same way that the CSS selector for focus-within works."),Z.forEach(o),E=g(t),L(y.$$.fragment,t),K=g(t),I=d(t,"H2",{});var wt=h(I);at=w(wt,"Params"),wt.forEach(o),N=g(t),k=d(t,"TABLE",{});var tt=h(k);j=d(tt,"THEAD",{});var Tt=h(j);x=d(Tt,"TR",{});var et=h(x);z=d(et,"TH",{});var kt=h(z);rt=w(kt,"Param"),kt.forEach(o),lt=g(et),A=d(et,"TH",{});var Et=h(A);it=w(Et,"Description"),Et.forEach(o),et.forEach(o),Tt.forEach(o),ct=g(tt),D=d(tt,"TBODY",{});var st=h(D);S=d(st,"TR",{});var ot=h(S);q=d(ot,"TD",{});var yt=h(q);ut=w(yt,"onBlur"),yt.forEach(o),ft=g(ot),G=d(ot,"TD",{});var xt=h(G);pt=w(xt,"calls function onBlur"),xt.forEach(o),ot.forEach(o),mt=g(st),F=d(st,"TR",{});var nt=h(F);Y=d(nt,"TD",{});var Dt=h(Y);dt=w(Dt,"onFocus"),Dt.forEach(o),ht=g(nt),J=d(nt,"TD",{});var St=h(J);$t=w(St,"calls function onFocus"),St.forEach(o),nt.forEach(o),st.forEach(o),tt.forEach(o),Q=g(t),O=d(t,"H2",{});var Ft=h(O);_t=w(Ft,"Definition"),Ft.forEach(o),X=g(t),B=d(t,"PRE",{class:!0});var Ut=h(B);Ut.forEach(o),this.h()},h(){Pt(B,"class","language-js")},m(t,p){_(t,s,p),M(r,t,p),_(t,n,p),_(t,u,p),l(u,f),_(t,T,p),_(t,a,p),l(a,H),l(a,c),l(c,$),l(a,C),_(t,E,p),M(y,t,p),_(t,K,p),_(t,I,p),l(I,at),_(t,N,p),_(t,k,p),l(k,j),l(j,x),l(x,z),l(z,rt),l(x,lt),l(x,A),l(A,it),l(k,ct),l(k,D),l(D,S),l(S,q),l(q,ut),l(S,ft),l(S,G),l(G,pt),l(D,mt),l(D,F),l(F,Y),l(Y,dt),l(F,ht),l(F,J),l(J,$t),_(t,Q,p),_(t,O,p),l(O,_t),_(t,X,p),_(t,B,p),B.innerHTML=Mt,V=!0},p(t,[p]){(!V||p&0)&&e!==(e=vt+" - SvelteUI")&&(document.title=e)},i(t){V||(U(r.$$.fragment,t),U(y.$$.fragment,t),V=!0)},o(t){W(r.$$.fragment,t),W(y.$$.fragment,t),V=!1},d(t){t&&o(s),R(r,t),t&&o(n),t&&o(u),t&&o(T),t&&o(a),t&&o(E),R(y,t),t&&o(K),t&&o(I),t&&o(N),t&&o(k),t&&o(Q),t&&o(O),t&&o(X),t&&o(B)}}}const ce={title:"use-focus-within",group:"svelteuidev-composables",packageGroup:"@svelteuidev/composables",slug:"/composables/use-focus-within/",description:"Detect if any element within has focus.",importCode:"import { useFocusWithin } from '@svelteuidev/composables';",docs:"composables/use-focus-within.md",source:"svelteui-composables/src/utilities/use-focus-within/use-focus-within.ts"},{title:vt,group:ue,packageGroup:fe,slug:pe,description:me,importCode:de,docs:he,source:$e}=ce;class ye extends Ct{constructor(e){super(),It(this,e,null,ie,Ot,{})}}export{ye as default,ce as metadata};
