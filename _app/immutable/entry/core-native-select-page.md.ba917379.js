import{S as O,i as j,s as A,H as Ee,V as $t,W as _t,m as _,h as o,n as ee,X as gt,b as u,Y as f,N as wt,C as te,O as bt,T as xt,y as S,z as V,A as h,a7 as Et,g as y,d as w,B as k,w as Pt,a5 as Tt,a as d,c as $,a6 as Ct,q as m,r as v,u as Ot,x as St,e as ht,v as jt,f as At,k as g,al as Rt,l as b}from"../chunks/index.b0fe5a0f.js";import{T as kt}from"../chunks/navigation.9bd98935.js";import{H as Dt}from"../chunks/Heading.19c03976.js";import{D as W}from"../chunks/Demo.82a35c94.js";import{N as D}from"../chunks/Prism.a6dc880d.js";import{S as zt}from"../chunks/StarFilled.8ecefe17.js";function Ht(c){let t,l,a=[{width:c[1]},{height:c[1]},{viewBox:"0 0 15 15"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},c[2]],n={};for(let r=0;r<a.length;r+=1)n=Ee(n,a[r]);return{c(){t=$t("svg"),l=$t("path"),this.h()},l(r){t=_t(r,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var i=_(t);l=_t(i,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),_(l).forEach(o),i.forEach(o),this.h()},h(){ee(l,"fill-rule","evenodd"),ee(l,"clip-rule","evenodd"),ee(l,"d","M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"),ee(l,"fill",c[0]),gt(t,n)},m(r,i){u(r,t,i),f(t,l)},p(r,[i]){i&1&&ee(l,"fill",r[0]),gt(t,n=wt(a,[i&2&&{width:r[1]},i&2&&{height:r[1]},{viewBox:"0 0 15 15"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},i&4&&r[2]]))},i:te,o:te,d(r){r&&o(t)}}}function Mt(c,t,l){const a=["color","size"];let n=bt(t,a),{color:r="currentColor"}=t,{size:i=15}=t;return c.$$set=N=>{t=Ee(Ee({},t),xt(N)),l(2,n=bt(t,a)),"color"in N&&l(0,r=N.color),"size"in N&&l(1,i=N.size)},[r,i,n]}class It extends O{constructor(t){super(),j(this,t,Mt,Ht,A,{color:0,size:1})}}const yt=It;function Bt(c){let t,l;const a=[{data:["Svelte","React","Vue","Angular","Solid"]},c[0]];let n={};for(let r=0;r<a.length;r+=1)n=Ee(n,a[r]);return t=new D({props:n}),{c(){S(t.$$.fragment)},l(r){V(t.$$.fragment,r)},m(r,i){h(t,r,i),l=!0},p(r,[i]){const N=i&1?wt(a,[a[0],Et(r[0])]):{};t.$set(N)},i(r){l||(y(t.$$.fragment,r),l=!0)},o(r){w(t.$$.fragment,r),l=!1},d(r){k(t,r)}}}const Ut=c=>`
<script>
  import { NativeSelect } from '@svelteuidev/core';
<\/script>

<NativeSelect data={['Svelte', 'React', 'Vue', 'Angular', 'Solid']} ${c} />
`,Lt="configurator",Wt={codeTemplate:Ut,configurator:[{name:"placeholder",type:"string",initialValue:"Pick one"},{name:"label",type:"string",initialValue:"Select your favorite framework/library"},{name:"description",type:"string",initialValue:"This is anonymous"},{name:"error",type:"string"},{name:"variant",type:"select",data:[{label:"default",value:"default"},{label:"filled",value:"filled"},{label:"unstyled",value:"unstyled"},{label:"headless",value:"headless"}],initialValue:"default",defaultValue:"default"},{name:"radius",type:"size",initialValue:"sm",defaultValue:"sm"},{name:"size",type:"size",initialValue:"sm",defaultValue:"sm"},{name:"disabled",type:"boolean",initialValue:!1,defaultValue:!1},{name:"required",type:"boolean",initialValue:!0,defaultValue:!0}],multiline:!0};function Yt(c,t,l){let{props:a={}}=t;return c.$$set=n=>{"props"in n&&l(0,a=n.props)},[a]}class qt extends O{constructor(t){super(),j(this,t,Yt,Bt,A,{props:0})}}const Ft=Object.freeze(Object.defineProperty({__proto__:null,configuration:Wt,default:qt,type:Lt},Symbol.toStringTag,{value:"Module"}));function Gt(c){let t;return{c(){t=m(c[0])},l(l){t=v(l,c[0])},m(l,a){u(l,t,a)},p(l,a){a&1&&Ot(t,l[0])},d(l){l&&o(t)}}}function Jt(c){let t,l,a;return l=new kt({props:{root:"span",inline:!0,variant:"gradient",$$slots:{default:[Gt]},$$scope:{ctx:c}}}),{c(){t=m("The best is "),S(l.$$.fragment)},l(n){t=v(n,"The best is "),V(l.$$.fragment,n)},m(n,r){u(n,t,r),h(l,n,r),a=!0},p(n,r){const i={};r&5&&(i.$$scope={dirty:r,ctx:n}),l.$set(i)},i(n){a||(y(l.$$.fragment,n),a=!0)},o(n){w(l.$$.fragment,n),a=!1},d(n){n&&o(t),k(l,n)}}}function Xt(c){let t,l,a,n,r;function i(p){c[1](p)}let N={data:["Svelte","React","Vue","Angular"],override:{select:{padding:0}},label:"What is the best framework?"};return c[0]!==void 0&&(N.value=c[0]),t=new D({props:N}),Pt.push(()=>Tt(t,"value",i)),n=new kt({props:{$$slots:{default:[Jt]},$$scope:{ctx:c}}}),{c(){S(t.$$.fragment),a=d(),S(n.$$.fragment)},l(p){V(t.$$.fragment,p),a=$(p),V(n.$$.fragment,p)},m(p,E){h(t,p,E),u(p,a,E),h(n,p,E),r=!0},p(p,[E]){const C={};!l&&E&1&&(l=!0,C.value=p[0],Ct(()=>l=!1)),t.$set(C);const Y={};E&5&&(Y.$$scope={dirty:E,ctx:p}),n.$set(Y)},i(p){r||(y(t.$$.fragment,p),y(n.$$.fragment,p),r=!0)},o(p){w(t.$$.fragment,p),w(n.$$.fragment,p),r=!1},d(p){k(t,p),p&&o(a),k(n,p)}}}const Zt=`<script>
    import { NativeSelect, Text } from '@svelteuidev/core';

    let value = 'Svelte';
<\/script>

<NativeSelect
    data={['Svelte', 'React', 'Vue', 'Angular']}
    bind:value
    label="What is the best framework?"
/>
<Text>The best is <Text root="span" inline variant="gradient">{value}</Text></Text>`,Kt="demo",Qt={code:Zt};function ea(c,t,l){let a="Svelte";function n(r){a=r,l(0,a)}return[a,n]}class ta extends O{constructor(t){super(),j(this,t,ea,Xt,A,{})}}const aa=Object.freeze(Object.defineProperty({__proto__:null,configuration:Qt,default:ta,type:Kt},Symbol.toStringTag,{value:"Module"}));function la(c){let t,l,a,n;return t=new D({props:{data:["Svelte","Vue","Angular","React"],placeholder:"Pick one",label:"Select your favorite framework/library",error:!0}}),a=new D({props:{data:["Svelte","Vue","Angular","React"],placeholder:"Pick one",label:"Select your favorite framework/library",error:"Pick at least one item"}}),{c(){S(t.$$.fragment),l=d(),S(a.$$.fragment)},l(r){V(t.$$.fragment,r),l=$(r),V(a.$$.fragment,r)},m(r,i){h(t,r,i),u(r,l,i),h(a,r,i),n=!0},p:te,i(r){n||(y(t.$$.fragment,r),y(a.$$.fragment,r),n=!0)},o(r){w(t.$$.fragment,r),w(a.$$.fragment,r),n=!1},d(r){k(t,r),r&&o(l),k(a,r)}}}const ra=`<script>
    import { NativeSelect } from '@svelteuidev/core';
<\/script>

<NativeSelect
    data={['Svelte', 'Vue', 'Angular', 'React']}
    placeholder="Pick one"
    label="Select your favorite framework/library"
    error
/>
<NativeSelect
    data={['Svelte', 'Vue', 'Angular', 'React']}
    placeholder="Pick one"
    label="Select your favorite framework/library"
    error="Pick at least one item"
/>`,na="demo",oa={code:ra};class sa extends O{constructor(t){super(),j(this,t,null,la,A,{})}}const ia=Object.freeze(Object.defineProperty({__proto__:null,configuration:oa,default:sa,type:na},Symbol.toStringTag,{value:"Module"}));function ca(c){let t,l;return t=new D({props:{data:["Svelte","Vue","Angular","React"],label:"Disabled select",disabled:!0}}),{c(){S(t.$$.fragment)},l(a){V(t.$$.fragment,a)},m(a,n){h(t,a,n),l=!0},p:te,i(a){l||(y(t.$$.fragment,a),l=!0)},o(a){w(t.$$.fragment,a),l=!1},d(a){k(t,a)}}}const ua=`<script>
    import { NativeSelect } from '@svelteuidev/core';
<\/script>

<NativeSelect data={['Svelte', 'Vue', 'Angular', 'React']} label="Disabled select" disabled />`,fa="demo",pa={code:ua};class ma extends O{constructor(t){super(),j(this,t,null,ca,A,{})}}const va=Object.freeze(Object.defineProperty({__proto__:null,configuration:pa,default:ma,type:fa},Symbol.toStringTag,{value:"Module"}));function da(c){let t,l;return t=new D({props:{data:["Svelte","Vue","Angular","React"],label:"Pick the best",icon:zt,override:{".withIcon":{pl:"40px !important"}}}}),{c(){S(t.$$.fragment)},l(a){V(t.$$.fragment,a)},m(a,n){h(t,a,n),l=!0},p:te,i(a){l||(y(t.$$.fragment,a),l=!0)},o(a){w(t.$$.fragment,a),l=!1},d(a){k(t,a)}}}const $a=`<script>
    import { NativeSelect } from '@svelteuidev/core';
    import { StarFilled } from 'radix-icons-svelte';
<\/script>

<NativeSelect
    data={['Svelte', 'Vue', 'Angular', 'React']}
    label="Pick the best"
    icon={StarFilled}
/>`,_a="demo",ga={code:$a};class ba extends O{constructor(t){super(),j(this,t,null,da,A,{})}}const Sa=Object.freeze(Object.defineProperty({__proto__:null,configuration:ga,default:ba,type:_a},Symbol.toStringTag,{value:"Module"}));function ha(c){let t,l,a;var n=yt;function r(i){return{props:{slot:"rightSection"}}}return n&&(t=St(n,r())),{c(){t&&S(t.$$.fragment),l=ht()},l(i){t&&V(t.$$.fragment,i),l=ht()},m(i,N){t&&h(t,i,N),u(i,l,N),a=!0},p(i,N){if(n!==(n=yt)){if(t){jt();const p=t;w(p.$$.fragment,1,0,()=>{k(p,1)}),At()}n?(t=St(n,r()),S(t.$$.fragment),y(t.$$.fragment,1),h(t,l.parentNode,l)):t=null}},i(i){a||(t&&y(t.$$.fragment,i),a=!0)},o(i){t&&w(t.$$.fragment,i),a=!1},d(i){i&&o(l),t&&k(t,i)}}}function ya(c){let t,l;return t=new D({props:{data:["Svelte","Vue","Angular","React"],label:"Select your favorite framework/library",$$slots:{rightSection:[ha]},$$scope:{ctx:c}}}),{c(){S(t.$$.fragment)},l(a){V(t.$$.fragment,a)},m(a,n){h(t,a,n),l=!0},p(a,[n]){const r={};n&1&&(r.$$scope={dirty:n,ctx:a}),t.$set(r)},i(a){l||(y(t.$$.fragment,a),l=!0)},o(a){w(t.$$.fragment,a),l=!1},d(a){k(t,a)}}}const wa=`<script>
    import { NativeSelect } from '@svelteuidev/core';
    import { ChevronDown } from 'radix-icons-svelte';
<\/script>

<NativeSelect
	data={['Svelte', 'Vue', 'Angular', 'React']}
	label="Select your favorite framework/library"
>
  <svelte:component slot="rightSection" this={ChevronDown} />
</NativeSelect>
`,ka="demo",Na={code:wa};class Va extends O{constructor(t){super(),j(this,t,null,ya,A,{})}}const xa=Object.freeze(Object.defineProperty({__proto__:null,configuration:Na,default:Va,type:ka},Symbol.toStringTag,{value:"Module"}));function Ea(c){let t,l;return t=new D({props:{data:[{label:"Svelte",value:"svelte"},{label:"Vue",value:"vue"},{label:"Angular",value:"angular"},{label:"React",value:"react"}],placeholder:"Pick one",label:"Select your favorite framework/library"}}),{c(){S(t.$$.fragment)},l(a){V(t.$$.fragment,a)},m(a,n){h(t,a,n),l=!0},p:te,i(a){l||(y(t.$$.fragment,a),l=!0)},o(a){w(t.$$.fragment,a),l=!1},d(a){k(t,a)}}}const Pa=`<script>
    import { NativeSelect } from '@svelteuidev/core';
<\/script>

<NativeSelect
    data={[
      { label: 'Svelte', value: 'svelte' },
      { label: 'Vue', value: 'vue' },
      { label: 'Angular', value: 'angular' },
      { label: 'React', value: 'react' }
    ]}
    placeholder="Pick one"
    label="Select your favorite framework/library"
/>`,Ta="demo",Ca={code:Pa};class Oa extends O{constructor(t){super(),j(this,t,null,Ea,A,{})}}const ja=Object.freeze(Object.defineProperty({__proto__:null,configuration:Ca,default:Oa,type:Ta},Symbol.toStringTag,{value:"Module"}));function Aa(c){let t,l,a,n,r,i,N,p,E,C,Y,ue,q,Pe,fe,z,pe,F,Te,me,H,ve,G,Ce,de,M,$e,J,Oe,_e,I,ge,X,je,be,P,Ae,ae,Re,De,le,ze,He,Se,B,he,Z,Me,ye,x,Ie,re,Be,Ue,ne,Le,We,oe,Ye,qe,se,Fe,Ge,we,U,ke,K,Je,Ne,R,Xe,ie,Ze,Ke,Ve,L,Nt=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NativeSelect</span> <span class="token punctuation">/></span></span> // -> not ok, select is not labeled
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NativeSelect</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>My select<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> // -> ok, select and label is connected
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NativeSelect</span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>My select<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> // -> ok, label is not visible but will be announced by screen
reader</code>`,ce;return document.title=t=Qe+" - SvelteUI",a=new Dt({props:{title:Qe,group:Da,packageGroup:za,slug:Ha,category:Ma,description:Ia,importCode:Ba,source:Ua,docs:La}}),p=new W({props:{demo:Ft}}),z=new W({props:{demo:aa}}),H=new W({props:{demo:ia}}),M=new W({props:{demo:va}}),I=new W({props:{demo:Sa}}),B=new W({props:{demo:xa}}),U=new W({props:{demo:ja}}),{c(){l=d(),S(a.$$.fragment),n=d(),r=g("h2"),i=m("Usage"),N=d(),S(p.$$.fragment),E=d(),C=g("h2"),Y=m("Value Binding"),ue=d(),q=g("p"),Pe=m("Just like with regular inputs you may bind to the value for two way data binding. The value must match a value from the array passed in to data."),fe=d(),S(z.$$.fragment),pe=d(),F=g("h2"),Te=m("Invalid state and error"),me=d(),S(H.$$.fragment),ve=d(),G=g("h2"),Ce=m("Disabled state"),de=d(),S(M.$$.fragment),$e=d(),J=g("h2"),Oe=m("With icon"),_e=d(),S(I.$$.fragment),ge=d(),X=g("h2"),je=m("Right section"),be=d(),P=g("p"),Ae=m("You can replace the icon in the right section with "),ae=g("code"),Re=m("rightSection"),De=m(" named slot. Note that in this case "),le=g("code"),ze=m("clearable"),He=m(" option will not work and you will need to handle it yourself:"),Se=d(),S(B.$$.fragment),he=d(),Z=g("h2"),Me=m("Using objects"),ye=d(),x=g("p"),Ie=m("You can pass an array of objects instead of strings. In those cases, the key "),re=g("code"),Be=m("value"),Ue=m(" is mandatory, since that value is the one being returned on the "),ne=g("code"),Le=m("change"),We=m(" event. The key "),oe=g("code"),Ye=m("label"),qe=m(" can also be provided and will be the one shown in the select (defaults to "),se=g("code"),Fe=m("value"),Ge=m(" if not provided)."),we=d(),S(U.$$.fragment),ke=d(),K=g("h2"),Je=m("Accessibility"),Ne=d(),R=g("p"),Xe=m("Provide "),ie=g("code"),Ze=m("aria-label"),Ke=m(" in case you use component without label for screen reader support:"),Ve=d(),L=g("pre"),this.h()},l(e){Rt("svelte-pki6ul",document.head).forEach(o),l=$(e),V(a.$$.fragment,e),n=$(e),r=b(e,"H2",{});var et=_(r);i=v(et,"Usage"),et.forEach(o),N=$(e),V(p.$$.fragment,e),E=$(e),C=b(e,"H2",{});var tt=_(C);Y=v(tt,"Value Binding"),tt.forEach(o),ue=$(e),q=b(e,"P",{});var at=_(q);Pe=v(at,"Just like with regular inputs you may bind to the value for two way data binding. The value must match a value from the array passed in to data."),at.forEach(o),fe=$(e),V(z.$$.fragment,e),pe=$(e),F=b(e,"H2",{});var lt=_(F);Te=v(lt,"Invalid state and error"),lt.forEach(o),me=$(e),V(H.$$.fragment,e),ve=$(e),G=b(e,"H2",{});var rt=_(G);Ce=v(rt,"Disabled state"),rt.forEach(o),de=$(e),V(M.$$.fragment,e),$e=$(e),J=b(e,"H2",{});var nt=_(J);Oe=v(nt,"With icon"),nt.forEach(o),_e=$(e),V(I.$$.fragment,e),ge=$(e),X=b(e,"H2",{});var ot=_(X);je=v(ot,"Right section"),ot.forEach(o),be=$(e),P=b(e,"P",{});var Q=_(P);Ae=v(Q,"You can replace the icon in the right section with "),ae=b(Q,"CODE",{});var st=_(ae);Re=v(st,"rightSection"),st.forEach(o),De=v(Q," named slot. Note that in this case "),le=b(Q,"CODE",{});var it=_(le);ze=v(it,"clearable"),it.forEach(o),He=v(Q," option will not work and you will need to handle it yourself:"),Q.forEach(o),Se=$(e),V(B.$$.fragment,e),he=$(e),Z=b(e,"H2",{});var ct=_(Z);Me=v(ct,"Using objects"),ct.forEach(o),ye=$(e),x=b(e,"P",{});var T=_(x);Ie=v(T,"You can pass an array of objects instead of strings. In those cases, the key "),re=b(T,"CODE",{});var ut=_(re);Be=v(ut,"value"),ut.forEach(o),Ue=v(T," is mandatory, since that value is the one being returned on the "),ne=b(T,"CODE",{});var ft=_(ne);Le=v(ft,"change"),ft.forEach(o),We=v(T," event. The key "),oe=b(T,"CODE",{});var pt=_(oe);Ye=v(pt,"label"),pt.forEach(o),qe=v(T," can also be provided and will be the one shown in the select (defaults to "),se=b(T,"CODE",{});var mt=_(se);Fe=v(mt,"value"),mt.forEach(o),Ge=v(T," if not provided)."),T.forEach(o),we=$(e),V(U.$$.fragment,e),ke=$(e),K=b(e,"H2",{});var vt=_(K);Je=v(vt,"Accessibility"),vt.forEach(o),Ne=$(e),R=b(e,"P",{});var xe=_(R);Xe=v(xe,"Provide "),ie=b(xe,"CODE",{});var dt=_(ie);Ze=v(dt,"aria-label"),dt.forEach(o),Ke=v(xe," in case you use component without label for screen reader support:"),xe.forEach(o),Ve=$(e),L=b(e,"PRE",{class:!0});var Vt=_(L);Vt.forEach(o),this.h()},h(){ee(L,"class","language-svelte")},m(e,s){u(e,l,s),h(a,e,s),u(e,n,s),u(e,r,s),f(r,i),u(e,N,s),h(p,e,s),u(e,E,s),u(e,C,s),f(C,Y),u(e,ue,s),u(e,q,s),f(q,Pe),u(e,fe,s),h(z,e,s),u(e,pe,s),u(e,F,s),f(F,Te),u(e,me,s),h(H,e,s),u(e,ve,s),u(e,G,s),f(G,Ce),u(e,de,s),h(M,e,s),u(e,$e,s),u(e,J,s),f(J,Oe),u(e,_e,s),h(I,e,s),u(e,ge,s),u(e,X,s),f(X,je),u(e,be,s),u(e,P,s),f(P,Ae),f(P,ae),f(ae,Re),f(P,De),f(P,le),f(le,ze),f(P,He),u(e,Se,s),h(B,e,s),u(e,he,s),u(e,Z,s),f(Z,Me),u(e,ye,s),u(e,x,s),f(x,Ie),f(x,re),f(re,Be),f(x,Ue),f(x,ne),f(ne,Le),f(x,We),f(x,oe),f(oe,Ye),f(x,qe),f(x,se),f(se,Fe),f(x,Ge),u(e,we,s),h(U,e,s),u(e,ke,s),u(e,K,s),f(K,Je),u(e,Ne,s),u(e,R,s),f(R,Xe),f(R,ie),f(ie,Ze),f(R,Ke),u(e,Ve,s),u(e,L,s),L.innerHTML=Nt,ce=!0},p(e,[s]){(!ce||s&0)&&t!==(t=Qe+" - SvelteUI")&&(document.title=t)},i(e){ce||(y(a.$$.fragment,e),y(p.$$.fragment,e),y(z.$$.fragment,e),y(H.$$.fragment,e),y(M.$$.fragment,e),y(I.$$.fragment,e),y(B.$$.fragment,e),y(U.$$.fragment,e),ce=!0)},o(e){w(a.$$.fragment,e),w(p.$$.fragment,e),w(z.$$.fragment,e),w(H.$$.fragment,e),w(M.$$.fragment,e),w(I.$$.fragment,e),w(B.$$.fragment,e),w(U.$$.fragment,e),ce=!1},d(e){e&&o(l),k(a,e),e&&o(n),e&&o(r),e&&o(N),k(p,e),e&&o(E),e&&o(C),e&&o(ue),e&&o(q),e&&o(fe),k(z,e),e&&o(pe),e&&o(F),e&&o(me),k(H,e),e&&o(ve),e&&o(G),e&&o(de),k(M,e),e&&o($e),e&&o(J),e&&o(_e),k(I,e),e&&o(ge),e&&o(X),e&&o(be),e&&o(P),e&&o(Se),k(B,e),e&&o(he),e&&o(Z),e&&o(ye),e&&o(x),e&&o(we),k(U,e),e&&o(ke),e&&o(K),e&&o(Ne),e&&o(R),e&&o(Ve),e&&o(L)}}}const Ra={title:"NativeSelect",group:"svelteuidev-core",packageGroup:"@svelteuidev/core",slug:"/core/native-select/",category:"inputs",description:"Capture user feedback limited to large set of options",importCode:"import { NativeSelect } from '@svelteuidev/core';",source:"svelteui-core/src/components/NativeSelect/NativeSelect.svelte",docs:"core/native-select.md"},{title:Qe,group:Da,packageGroup:za,slug:Ha,category:Ma,description:Ia,importCode:Ba,source:Ua,docs:La}=Ra;class Xa extends O{constructor(t){super(),j(this,t,null,Aa,A,{})}}export{Xa as default,Ra as metadata};
