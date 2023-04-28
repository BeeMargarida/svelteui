import{S as $n,i as vn,s as _n,y as A,z as D,A as U,g as P,d as V,B as H,D as hn,J as bn,a6 as wn,X as yn,k as f,q as c,a as _,l as d,m as $,r as i,h as s,c as g,n as q,b as r,W as u}from"./index.b4f0bbdc.js";import{I as Wn}from"./InfoCircled.41a18796.js";import{D as En}from"./Demo.9cccb4ab.js";import{A as Sn}from"./Alert.cab756e0.js";import{C as xn}from"./Center.c93e1a75.js";import{I as Tn,a as Cn}from"./Input.32dba1e9.js";function qn(m){let a,e;return a=new Cn({props:{id:"input-demo",placeholder:"Write here the information"}}),{c(){A(a.$$.fragment)},l(t){D(a.$$.fragment,t)},m(t,l){U(a,t,l),e=!0},p:yn,i(t){e||(P(a.$$.fragment,t),e=!0)},o(t){V(a.$$.fragment,t),e=!1},d(t){H(a,t)}}}function An(m){let a,e;const t=[m[0]];let l={$$slots:{default:[qn]},$$scope:{ctx:m}};for(let o=0;o<t.length;o+=1)l=hn(l,t[o]);return a=new Tn({props:l}),{c(){A(a.$$.fragment)},l(o){D(a.$$.fragment,o)},m(o,k){U(a,o,k),e=!0},p(o,k){const j=k&1?bn(t,[wn(o[0])]):{};k&2&&(j.$$scope={dirty:k,ctx:o}),a.$set(j)},i(o){e||(P(a.$$.fragment,o),e=!0)},o(o){V(a.$$.fragment,o),e=!1},d(o){H(a,o)}}}function Dn(m){let a,e;return a=new xn({props:{$$slots:{default:[An]},$$scope:{ctx:m}}}),{c(){A(a.$$.fragment)},l(t){D(a.$$.fragment,t)},m(t,l){U(a,t,l),e=!0},p(t,[l]){const o={};l&3&&(o.$$scope={dirty:l,ctx:t}),a.$set(o)},i(t){e||(P(a.$$.fragment,t),e=!0)},o(t){V(a.$$.fragment,t),e=!1},d(t){H(a,t)}}}const Un=(m,a)=>`<script>
  import { Input, InputWrapper } from '@svelteuidev/core';
<\/script>

<InputWrapper id='input-demo' ${m}>
    <Input placeholder='Write here the information' />
</InputWrapper>`,Pn="configurator",Vn={codeTemplate:Un,configurator:[{name:"label",type:"string",initialValue:"Credit card information"},{name:"description",type:"string",initialValue:"Please enter your credit card information, we need some money"},{name:"error",type:"string",initialValue:"Your credit card expired"},{name:"size",type:"size",initialValue:"sm",defaultValue:"sm"},{name:"required",type:"boolean",initialValue:!0,defaultValue:!0}]};function Hn(m,a,e){let{props:t={}}=a;return m.$$set=l=>{"props"in l&&e(0,t=l.props)},[t]}class jn extends $n{constructor(a){super(),vn(this,a,Hn,Dn,_n,{props:0})}}const zn=Object.freeze(Object.defineProperty({__proto__:null,configuration:Vn,default:jn,type:Pn},Symbol.toStringTag,{value:"Module"}));function Rn(m){let a;return{c(){a=c("Do not use InputWrapper with SvelteUI inputs, it is already included in most inputs.")},l(e){a=i(e,"Do not use InputWrapper with SvelteUI inputs, it is already included in most inputs.")},m(e,t){r(e,a,t)},d(e){e&&s(a)}}}function Gn(m){let a,e,t,l,o,k,j=`<code class="language-svelte">// Incorrect usage, input is not accessible
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputWrapper</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Input label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextInput</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InputWrapper</span><span class="token punctuation">></span></span>

// TextInput already includes InputWrapper
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextInput</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Input label<span class="token punctuation">"</span></span> <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Input description<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code>`,z,y,F,R,v,K,W,Q,Z,E,nn,an,G,I,tn,S,sn,en,M,b,O,x,pn,Y,h,on,C,ln,un,L,w,gn=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> InputWrapper <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@svelteuidev/core'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputWrapper</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>with-label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>with-label<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InputWrapper</span><span class="token punctuation">></span></span>

// id is not required for div label as it is not connected to any element

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputWrapper</span> <span class="token attr-name">labelElement</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>div<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InputWrapper</span><span class="token punctuation">></span></span></code>`,N;return l=new Sn({props:{icon:Wn,title:"Important",color:"blue",$$slots:{default:[Rn]},$$scope:{ctx:m}}}),b=new En({props:{demo:zn}}),{c(){a=f("h2"),e=c("Disclaimer"),t=_(),A(l.$$.fragment),o=_(),k=f("pre"),z=_(),y=f("h2"),F=c("Usage"),R=_(),v=f("p"),K=c("InputWrapper is used to wrap all SvelteUI inputs (Select (not yet implemented), "),W=f("a"),Q=c("TextInput"),Z=c(", "),E=f("a"),nn=c("NumberInput"),an=c(` and others).
It includes label with optional required asterisk, description and error message.`),G=_(),I=f("p"),tn=c("All SvelteUI inputs support the same props as InputWrapper. You can combine it with "),S=f("a"),sn=c("Input"),en=c(` component
to build your own custom inputs with the same style and behavior.`),M=_(),A(b.$$.fragment),O=_(),x=f("h2"),pn=c("Change label element"),Y=_(),h=f("p"),on=c(`Some inputs like RadioGroup (not yet implemented) may require to detach label from certain element.
To implement this, use `),C=f("code"),ln=c("labelElement"),un=c(":"),L=_(),w=f("pre"),this.h()},l(n){a=d(n,"H2",{});var p=$(a);e=i(p,"Disclaimer"),p.forEach(s),t=g(n),D(l.$$.fragment,n),o=g(n),k=d(n,"PRE",{class:!0});var B=$(k);B.forEach(s),z=g(n),y=d(n,"H2",{});var rn=$(y);F=i(rn,"Usage"),rn.forEach(s),R=g(n),v=d(n,"P",{});var T=$(v);K=i(T,"InputWrapper is used to wrap all SvelteUI inputs (Select (not yet implemented), "),W=d(T,"A",{href:!0});var cn=$(W);Q=i(cn,"TextInput"),cn.forEach(s),Z=i(T,", "),E=d(T,"A",{href:!0});var mn=$(E);nn=i(mn,"NumberInput"),mn.forEach(s),an=i(T,` and others).
It includes label with optional required asterisk, description and error message.`),T.forEach(s),G=g(n),I=d(n,"P",{});var J=$(I);tn=i(J,"All SvelteUI inputs support the same props as InputWrapper. You can combine it with "),S=d(J,"A",{href:!0});var kn=$(S);sn=i(kn,"Input"),kn.forEach(s),en=i(J,` component
to build your own custom inputs with the same style and behavior.`),J.forEach(s),M=g(n),D(b.$$.fragment,n),O=g(n),x=d(n,"H2",{});var fn=$(x);pn=i(fn,"Change label element"),fn.forEach(s),Y=g(n),h=d(n,"P",{});var X=$(h);on=i(X,`Some inputs like RadioGroup (not yet implemented) may require to detach label from certain element.
To implement this, use `),C=d(X,"CODE",{});var dn=$(C);ln=i(dn,"labelElement"),dn.forEach(s),un=i(X,":"),X.forEach(s),L=g(n),w=d(n,"PRE",{class:!0});var In=$(w);In.forEach(s),this.h()},h(){q(k,"class","language-svelte"),q(W,"href","core/text-input"),q(E,"href","core/number-input"),q(S,"href","core/input"),q(w,"class","language-svelte")},m(n,p){r(n,a,p),u(a,e),r(n,t,p),U(l,n,p),r(n,o,p),r(n,k,p),k.innerHTML=j,r(n,z,p),r(n,y,p),u(y,F),r(n,R,p),r(n,v,p),u(v,K),u(v,W),u(W,Q),u(v,Z),u(v,E),u(E,nn),u(v,an),r(n,G,p),r(n,I,p),u(I,tn),u(I,S),u(S,sn),u(I,en),r(n,M,p),U(b,n,p),r(n,O,p),r(n,x,p),u(x,pn),r(n,Y,p),r(n,h,p),u(h,on),u(h,C),u(C,ln),u(h,un),r(n,L,p),r(n,w,p),w.innerHTML=gn,N=!0},p(n,[p]){const B={};p&1&&(B.$$scope={dirty:p,ctx:n}),l.$set(B)},i(n){N||(P(l.$$.fragment,n),P(b.$$.fragment,n),N=!0)},o(n){V(l.$$.fragment,n),V(b.$$.fragment,n),N=!1},d(n){n&&s(a),n&&s(t),H(l,n),n&&s(o),n&&s(k),n&&s(z),n&&s(y),n&&s(R),n&&s(v),n&&s(G),n&&s(I),n&&s(M),H(b,n),n&&s(O),n&&s(x),n&&s(Y),n&&s(h),n&&s(L),n&&s(w)}}}const Jn={title:"InputWrapper",group:"svelteuidev-core",packageGroup:"@svelteuidev/core",slug:"/core/input-wrapper/",category:"inputs",description:"Enhance custom inputs with label, error and description",importCode:"import { InputWrapper } from '@svelteuidev/core';",source:"svelteui-core/src/components/InputWrapper/InputWrapper.svelte",docs:"core/input-wrapper.md"};class Xn extends $n{constructor(a){super(),vn(this,a,null,Gn,_n,{})}}export{Xn as default,Jn as metadata};
