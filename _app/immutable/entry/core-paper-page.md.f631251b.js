import{S as ua,i as ia,s as fa,y as L,z as D,A as O,g as U,d as C,B as K,H as ha,N as ga,a7 as $a,G as va,K as wa,L as Pa,M as ba,a as f,k as m,q as d,al as ya,h as p,c as k,l as _,m as h,r as g,n as I,b as l,Y as i}from"../chunks/index.b0fe5a0f.js";import"../chunks/navigation.fd10cd14.js";import{H as xa}from"../chunks/Heading.bb67d8e2.js";import{b as ca}from"../chunks/paths.605af923.js";import{D as Ea}from"../chunks/Demo.e6142117.js";import{C as Ha}from"../chunks/Center.d0c4d84f.js";import{P as Sa}from"../chunks/Paper.6813ea13.js";function Va(c){let s;const r=c[1].default,e=va(r,c,c[2],null);return{c(){e&&e.c()},l(n){e&&e.l(n)},m(n,t){e&&e.m(n,t),s=!0},p(n,t){e&&e.p&&(!s||t&4)&&wa(e,r,n,n[2],s?ba(r,n[2],t,null):Pa(n[2]),null)},i(n){s||(U(e,n),s=!0)},o(n){C(e,n),s=!1},d(n){e&&e.d(n)}}}function ja(c){let s,r;const e=[c[0]];let n={$$slots:{default:[Va]},$$scope:{ctx:c}};for(let t=0;t<e.length;t+=1)n=ha(n,e[t]);return s=new Sa({props:n}),{c(){L(s.$$.fragment)},l(t){D(s.$$.fragment,t)},m(t,u){O(s,t,u),r=!0},p(t,u){const w=u&1?ga(e,[$a(t[0])]):{};u&4&&(w.$$scope={dirty:u,ctx:t}),s.$set(w)},i(t){r||(U(s.$$.fragment,t),r=!0)},o(t){C(s.$$.fragment,t),r=!1},d(t){K(s,t)}}}function Ua(c){let s,r;return s=new Ha({props:{override:{width:400,height:200,m:"auto"},$$slots:{default:[ja]},$$scope:{ctx:c}}}),{c(){L(s.$$.fragment)},l(e){D(s.$$.fragment,e)},m(e,n){O(s,e,n),r=!0},p(e,[n]){const t={};n&5&&(t.$$scope={dirty:n,ctx:e}),s.$set(t)},i(e){r||(U(s.$$.fragment,e),r=!0)},o(e){C(s.$$.fragment,e),r=!1},d(e){K(s,e)}}}const Ca=(c,s)=>`
<script>
  import { Paper } from '@svelteuidev/core';
<\/script>

<Paper${c}>
  ${s}
</Paper>
`,Ra="Paper is the most basic UI component. Use it to create cards, dropdowns, modals and other components that require background with shadow",Ya="configurator",za={codeTemplate:Ca,configurator:[{name:"shadow",type:"size",initialValue:"xs",defaultValue:"xs"},{name:"radius",type:"size",initialValue:"sm",defaultValue:"sm"},{name:"withBorder",label:"With Border",type:"boolean",initialValue:!1,defaultValue:!1},{name:"children",type:"string",initialValue:Ra}]};function Ma(c,s,r){let{$$slots:e={},$$scope:n}=s,{props:t={}}=s;return c.$$set=u=>{"props"in u&&r(0,t=u.props),"$$scope"in u&&r(2,n=u.$$scope)},[t,e,n]}class Ta extends ua{constructor(s){super(),ia(this,s,Ma,Ua,fa,{props:0})}}const qa=Object.freeze(Object.defineProperty({__proto__:null,configuration:za,default:Ta,type:Ya},Symbol.toStringTag,{value:"Module"}));function Aa(c){let s,r,e,n,t,u,w,x,N,R,P,Y,E,W,z,$,F,H,J,Q,M,b,ma=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Paper <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@svelteuidev/core'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Paper</span> <span class="token attr-name">shadow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xs<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Paper</span> <span class="token attr-name">shadow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>13px 18px 25px #e5e5e5, 1px 3px 3px #e5e5e5, -1px 3px 3px #e5e5e5<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code>`,T,S,X,q,v,Z,V,aa,ea,A,y,da=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Paper <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@svelteuidev/core'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Paper</span> <span class="token attr-name">radius</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Paper</span> <span class="token attr-name">radius=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">10</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,j;return document.title=s=sa+" - SvelteUI",e=new xa({props:{title:sa,group:Ga,packageGroup:Ia,slug:La,category:Da,description:Oa,importCode:Ka,source:Na,docs:Wa}}),P=new Ea({props:{demo:qa}}),{c(){r=f(),L(e.$$.fragment),n=f(),t=m("h2"),u=d("Usage"),w=f(),x=m("p"),N=d("Paper component renders white or dark background with shadow, border-radius and border from theme."),R=f(),L(P.$$.fragment),Y=f(),E=m("h2"),W=d("Shadow"),z=f(),$=m("p"),F=d("You can use the predefined shadows from the "),H=m("a"),J=d("theme"),Q=d(", or supply your own:"),M=f(),b=m("pre"),T=f(),S=m("h2"),X=d("Radius"),q=f(),v=m("p"),Z=d("You can use the predefined radius value from the "),V=m("a"),aa=d("theme"),ea=d(" or use a number value that will be set to px:"),A=f(),y=m("pre"),this.h()},l(a){ya("svelte-pki6ul",document.head).forEach(p),r=k(a),D(e.$$.fragment,a),n=k(a),t=_(a,"H2",{});var ta=h(t);u=g(ta,"Usage"),ta.forEach(p),w=k(a),x=_(a,"P",{});var na=h(x);N=g(na,"Paper component renders white or dark background with shadow, border-radius and border from theme."),na.forEach(p),R=k(a),D(P.$$.fragment,a),Y=k(a),E=_(a,"H2",{});var pa=h(E);W=g(pa,"Shadow"),pa.forEach(p),z=k(a),$=_(a,"P",{});var B=h($);F=g(B,"You can use the predefined shadows from the "),H=_(B,"A",{href:!0});var oa=h(H);J=g(oa,"theme"),oa.forEach(p),Q=g(B,", or supply your own:"),B.forEach(p),M=k(a),b=_(a,"PRE",{class:!0});var ka=h(b);ka.forEach(p),T=k(a),S=_(a,"H2",{});var ra=h(S);X=g(ra,"Radius"),ra.forEach(p),q=k(a),v=_(a,"P",{});var G=h(v);Z=g(G,"You can use the predefined radius value from the "),V=_(G,"A",{href:!0});var la=h(V);aa=g(la,"theme"),la.forEach(p),ea=g(G," or use a number value that will be set to px:"),G.forEach(p),A=k(a),y=_(a,"PRE",{class:!0});var _a=h(y);_a.forEach(p),this.h()},h(){I(H,"href",ca+"/theming/default-theme#shadows"),I(b,"class","language-svelte"),I(V,"href",ca+"/theming/default-theme#radius"),I(y,"class","language-svelte")},m(a,o){l(a,r,o),O(e,a,o),l(a,n,o),l(a,t,o),i(t,u),l(a,w,o),l(a,x,o),i(x,N),l(a,R,o),O(P,a,o),l(a,Y,o),l(a,E,o),i(E,W),l(a,z,o),l(a,$,o),i($,F),i($,H),i(H,J),i($,Q),l(a,M,o),l(a,b,o),b.innerHTML=ma,l(a,T,o),l(a,S,o),i(S,X),l(a,q,o),l(a,v,o),i(v,Z),i(v,V),i(V,aa),i(v,ea),l(a,A,o),l(a,y,o),y.innerHTML=da,j=!0},p(a,[o]){(!j||o&0)&&s!==(s=sa+" - SvelteUI")&&(document.title=s)},i(a){j||(U(e.$$.fragment,a),U(P.$$.fragment,a),j=!0)},o(a){C(e.$$.fragment,a),C(P.$$.fragment,a),j=!1},d(a){a&&p(r),K(e,a),a&&p(n),a&&p(t),a&&p(w),a&&p(x),a&&p(R),K(P,a),a&&p(Y),a&&p(E),a&&p(z),a&&p($),a&&p(M),a&&p(b),a&&p(T),a&&p(S),a&&p(q),a&&p(v),a&&p(A),a&&p(y)}}}const Ba={title:"Paper",group:"svelteuidev-core",packageGroup:"@svelteuidev/core",slug:"/core/paper/",category:"misc",description:"Renders white or dark containers depending on color scheme",importCode:"import { Paper } from '@svelteuidev/core';",source:"svelteui-core/src/components/Paper/Paper.svelte",docs:"core/paper.md"},{title:sa,group:Ga,packageGroup:Ia,slug:La,category:Da,description:Oa,importCode:Ka,source:Na,docs:Wa}=Ba;class se extends ua{constructor(s){super(),ia(this,s,null,Aa,fa,{})}}export{se as default,Ba as metadata};