import{S as F,i as K,s as N,y as T,z as q,A as G,g as S,d as D,B as M,D as Z,J as ee,a6 as te,C as ae,G as se,H as le,I as oe,k as f,q as v,a as y,l as m,m as d,r as h,h as r,c as w,n as ne,b as _,W as u,X as re}from"./index.b4f0bbdc.js";import{D as ie}from"./Demo.9cccb4ab.js";import{I as x}from"./InfoCircled.41a18796.js";import{C as ce}from"./Center.c93e1a75.js";import{A as ue}from"./Alert.cab756e0.js";function pe(i){let e;const o=i[1].default,t=ae(o,i,i[2],null);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,l){t&&t.m(a,l),e=!0},p(a,l){t&&t.p&&(!e||l&4)&&se(t,o,a,a[2],e?oe(o,a[2],l,null):le(a[2]),null)},i(a){e||(S(t,a),e=!0)},o(a){D(t,a),e=!1},d(a){t&&t.d(a)}}}function fe(i){let e,o;const t=[{icon:x},i[0]];let a={$$slots:{default:[pe]},$$scope:{ctx:i}};for(let l=0;l<t.length;l+=1)a=Z(a,t[l]);return e=new ue({props:a}),{c(){T(e.$$.fragment)},l(l){q(e.$$.fragment,l)},m(l,n){G(e,l,n),o=!0},p(l,n){const k=n&1?ee(t,[n&0&&{icon:x},n&1&&te(l[0])]):{};n&4&&(k.$$scope={dirty:n,ctx:l}),e.$set(k)},i(l){o||(S(e.$$.fragment,l),o=!0)},o(l){D(e.$$.fragment,l),o=!1},d(l){M(e,l)}}}function me(i){let e,o;return e=new ce({props:{$$slots:{default:[fe]},$$scope:{ctx:i}}}),{c(){T(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,a){G(e,t,a),o=!0},p(t,[a]){const l={};a&5&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){o||(S(e.$$.fragment,t),o=!0)},o(t){D(e.$$.fragment,t),o=!1},d(t){M(e,t)}}}const de=(i,e)=>`<script>
  import { Alert } from '@svelteuidev/core';
  import { InfoCircled } from 'radix-icons-svelte';
<\/script>

<Alert icon={InfoCircled} ${i}>
    ${e}
</Alert>`,_e="configurator",$e={codeTemplate:de,configurator:[{name:"title",type:"string",initialValue:"Oopsie!"},{name:"children",label:"Content",type:"string",initialValue:"Seems like our servers (actually a single Raspebery pi) crashed, please wait while our underpaid worker tries to solder the CPU again."},{name:"color",type:"color",initialValue:"orange",defaultValue:"orange"},{name:"variant",type:"select",data:[{label:"light",value:"light"},{label:"filled",value:"filled"},{label:"outline",value:"outline"}],initialValue:"light",defaultValue:"light"},{name:"radius",type:"size",initialValue:"sm",defaultValue:"sm"},{name:"withCloseButton",label:"With close button",type:"boolean",initialValue:!1,defaultValue:!1}]};function ge(i,e,o){let{$$slots:t={},$$scope:a}=e,{props:l={}}=e;return i.$$set=n=>{"props"in n&&o(0,l=n.props),"$$scope"in n&&o(2,a=n.$$scope)},[l,t,a]}class ve extends F{constructor(e){super(),K(this,e,ge,me,N,{props:0})}}const he=Object.freeze(Object.defineProperty({__proto__:null,configuration:$e,default:ve,type:_e},Symbol.toStringTag,{value:"Module"}));function ke(i){let e,o,t,a,l,n,k,E,p,b,O,A,H,R,$,U,C,j,z,V,g,Q=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">withCloseButton</span> <span class="token punctuation">/></span></span> // -> not ok
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">withCloseButton</span> <span class="token attr-name">closeButtonLabel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Close alert<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> // -> ok
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token punctuation">/></span></span> // -> ok, without close button. the closeButtonLabel is not needed</code>`,B;return a=new ie({props:{demo:he}}),{c(){e=f("h2"),o=v("Usage"),t=y(),T(a.$$.fragment),l=y(),n=f("h2"),k=v("Accessibility"),E=y(),p=f("ul"),b=f("li"),O=v("Root element role set to "),A=f("code"),H=v("alert"),R=y(),$=f("li"),U=v("Set "),C=f("code"),j=v("closeButtonLabel"),z=v(" prop to make close button visible for screen readers"),V=y(),g=f("pre"),this.h()},l(s){e=m(s,"H2",{});var c=d(e);o=h(c,"Usage"),c.forEach(r),t=w(s),q(a.$$.fragment,s),l=w(s),n=m(s,"H2",{});var W=d(n);k=h(W,"Accessibility"),W.forEach(r),E=w(s),p=m(s,"UL",{});var L=d(p);b=m(L,"LI",{});var P=d(b);O=h(P,"Root element role set to "),A=m(P,"CODE",{});var J=d(A);H=h(J,"alert"),J.forEach(r),P.forEach(r),R=w(L),$=m(L,"LI",{});var I=d($);U=h(I,"Set "),C=m(I,"CODE",{});var X=d(C);j=h(X,"closeButtonLabel"),X.forEach(r),z=h(I," prop to make close button visible for screen readers"),I.forEach(r),L.forEach(r),V=w(s),g=m(s,"PRE",{class:!0});var Y=d(g);Y.forEach(r),this.h()},h(){ne(g,"class","language-svelte")},m(s,c){_(s,e,c),u(e,o),_(s,t,c),G(a,s,c),_(s,l,c),_(s,n,c),u(n,k),_(s,E,c),_(s,p,c),u(p,b),u(b,O),u(b,A),u(A,H),u(p,R),u(p,$),u($,U),u($,C),u(C,j),u($,z),_(s,V,c),_(s,g,c),g.innerHTML=Q,B=!0},p:re,i(s){B||(S(a.$$.fragment,s),B=!0)},o(s){D(a.$$.fragment,s),B=!1},d(s){s&&r(e),s&&r(t),M(a,s),s&&r(l),s&&r(n),s&&r(E),s&&r(p),s&&r(V),s&&r(g)}}}const Ee={title:"Alert",group:"svelteuidev-core",packageGroup:"@svelteuidev/core",slug:"/core/alert/",category:"feedback",description:"Attract user attention with an important message",importCode:"import { Alert } from '@svelteuidev/core';",source:"svelteui-core/src/components/Alert/Alert.svelte",docs:"core/alert.md"};class Ve extends F{constructor(e){super(),K(this,e,null,ke,N,{})}}export{Ve as default,Ee as metadata};
