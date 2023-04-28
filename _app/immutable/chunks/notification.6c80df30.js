import{S as Ht,i as It,s as Lt,y as j,z as A,A as D,g as C,d as y,B as R,D as Et,a as k,c as b,b as u,J as Ct,a6 as yt,h as n,C as Bt,G as Gt,H as Ot,I as jt,k as m,q as d,l as $,m as _,r as g,n as Pt,W as r,X as Rt}from"./index.b4f0bbdc.js";import{D as St}from"./Demo.9cccb4ab.js";import{C as Vt,N as Ut}from"./Notification.demo.usage.75edb225.js";import{C as zt}from"./Center.c93e1a75.js";import{S as qt}from"./Stack.545b11b0.js";import{N as Tt}from"./Notification.10e0d347.js";function Mt(c){let a;const i=c[1].default,t=Bt(i,c,c[2],null);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,l){t&&t.m(o,l),a=!0},p(o,l){t&&t.p&&(!a||l&4)&&Gt(t,i,o,o[2],a?jt(i,o[2],l,null):Ot(o[2]),null)},i(o){a||(C(t,o),a=!0)},o(o){y(t,o),a=!1},d(o){t&&t.d(o)}}}function Wt(c){let a;const i=c[1].default,t=Bt(i,c,c[2],null);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,l){t&&t.m(o,l),a=!0},p(o,l){t&&t.p&&(!a||l&4)&&Gt(t,i,o,o[2],a?jt(i,o[2],l,null):Ot(o[2]),null)},i(o){a||(C(t,o),a=!0)},o(o){y(t,o),a=!1},d(o){t&&t.d(o)}}}function Jt(c){let a,i,t,o;const l=[c[0]];let v={$$slots:{default:[Mt]},$$scope:{ctx:c}};for(let s=0;s<l.length;s+=1)v=Et(v,l[s]);a=new Tt({props:v});const h=[{icon:Vt},c[0]];let P={$$slots:{default:[Wt]},$$scope:{ctx:c}};for(let s=0;s<h.length;s+=1)P=Et(P,h[s]);return t=new Tt({props:P}),{c(){j(a.$$.fragment),i=k(),j(t.$$.fragment)},l(s){A(a.$$.fragment,s),i=b(s),A(t.$$.fragment,s)},m(s,p){D(a,s,p),u(s,i,p),D(t,s,p),o=!0},p(s,p){const N=p&1?Ct(l,[yt(s[0])]):{};p&4&&(N.$$scope={dirty:p,ctx:s}),a.$set(N);const w=p&1?Ct(h,[p&0&&{icon:Vt},p&1&&yt(s[0])]):{};p&4&&(w.$$scope={dirty:p,ctx:s}),t.$set(w)},i(s){o||(C(a.$$.fragment,s),C(t.$$.fragment,s),o=!0)},o(s){y(a.$$.fragment,s),y(t.$$.fragment,s),o=!1},d(s){R(a,s),s&&n(i),R(t,s)}}}function Xt(c){let a,i;return a=new qt({props:{position:"center",$$slots:{default:[Jt]},$$scope:{ctx:c}}}),{c(){j(a.$$.fragment)},l(t){A(a.$$.fragment,t)},m(t,o){D(a,t,o),i=!0},p(t,o){const l={};o&5&&(l.$$scope={dirty:o,ctx:t}),a.$set(l)},i(t){i||(C(a.$$.fragment,t),i=!0)},o(t){y(a.$$.fragment,t),i=!1},d(t){R(a,t)}}}function Ft(c){let a,i;return a=new zt({props:{$$slots:{default:[Xt]},$$scope:{ctx:c}}}),{c(){j(a.$$.fragment)},l(t){A(a.$$.fragment,t)},m(t,o){D(a,t,o),i=!0},p(t,[o]){const l={};o&5&&(l.$$scope={dirty:o,ctx:t}),a.$set(l)},i(t){i||(C(a.$$.fragment,t),i=!0)},o(t){y(a.$$.fragment,t),i=!1},d(t){R(a,t)}}}const Kt=(c,a)=>`<script>
  import { Notification } from '@svelteuidev/core';
  import { Check } from 'radix-icons-svelte';
<\/script>

<Notification ${c}>
    ${a}
</Notification>
<Notification icon={Check} ${c}>
    ${a}
</Notification>`,Qt="configurator",Yt={codeTemplate:Kt,configurator:[{name:"title",type:"string",initialValue:"Please bear in mind"},{name:"children",label:"Content",type:"string",initialValue:"That you are now obligated to give feedback on SvelteUI on GitHub"},{name:"color",type:"color",initialValue:"blue",defaultValue:"blue"},{name:"radius",type:"size",initialValue:"sm",defaultValue:"sm"},{name:"loading",type:"boolean",initialValue:!1,defaultValue:!1},{name:"withCloseButton",label:"With close button",type:"boolean",initialValue:!0,defaultValue:!0}]};function Zt(c,a,i){let{$$slots:t={},$$scope:o}=a,{props:l={}}=a;return c.$$set=v=>{"props"in v&&i(0,l=v.props),"$$scope"in v&&i(2,o=v.$$scope)},[l,t,o]}class xt extends Ht{constructor(a){super(),It(this,a,Zt,Ft,Lt,{props:0})}}const te=Object.freeze(Object.defineProperty({__proto__:null,configuration:Yt,default:xt,type:Qt},Symbol.toStringTag,{value:"Module"}));function ee(c){let a,i,t,o,l,v,h,P,s,p,N,w,x,tt,et,I,U,at,ot,st,S,z,nt,it,L,lt,M,V,W,B,rt,J,T,X,G,ct,F,E,pt,q,ft,ut,K,H,At=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Notification</span> <span class="token attr-name">closeButtonProps=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> <span class="token string-property property">'aria-label'</span><span class="token operator">:</span> <span class="token string">'Hide notification'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Notification</span> <span class="token attr-name">closeButtonProps=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Hide notification'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,Q;return V=new St({props:{demo:Ut}}),T=new St({props:{demo:te}}),{c(){a=m("h2"),i=d("Usage"),t=k(),o=m("p"),l=d("Notification is a base component for notification system."),v=k(),h=m("p"),P=d("It has 3 variants:"),s=k(),p=m("ul"),N=m("li"),w=m("strong"),x=d("default"),tt=d(" – with colored line on the left"),et=k(),I=m("li"),U=m("strong"),at=d("icon"),ot=d(" – line is replaced with icon"),st=k(),S=m("li"),z=m("strong"),nt=d("loading"),it=d(" – icon or line are replaced with "),L=m("a"),lt=d("Loader"),M=k(),j(V.$$.fragment),W=k(),B=m("h2"),rt=d("Colors and state"),J=k(),j(T.$$.fragment),X=k(),G=m("h2"),ct=d("Accessibility"),F=k(),E=m("p"),pt=d("To support screen readers set close button aria-label or title with "),q=m("code"),ft=d("closeButtonProps"),ut=d(":"),K=k(),H=m("pre"),this.h()},l(e){a=$(e,"H2",{});var f=_(a);i=g(f,"Usage"),f.forEach(n),t=b(e),o=$(e,"P",{});var _t=_(o);l=g(_t,"Notification is a base component for notification system."),_t.forEach(n),v=b(e),h=$(e,"P",{});var dt=_(h);P=g(dt,"It has 3 variants:"),dt.forEach(n),s=b(e),p=$(e,"UL",{});var O=_(p);N=$(O,"LI",{});var mt=_(N);w=$(mt,"STRONG",{});var gt=_(w);x=g(gt,"default"),gt.forEach(n),tt=g(mt," – with colored line on the left"),mt.forEach(n),et=b(O),I=$(O,"LI",{});var $t=_(I);U=$($t,"STRONG",{});var vt=_(U);at=g(vt,"icon"),vt.forEach(n),ot=g($t," – line is replaced with icon"),$t.forEach(n),st=b(O),S=$(O,"LI",{});var Y=_(S);z=$(Y,"STRONG",{});var kt=_(z);nt=g(kt,"loading"),kt.forEach(n),it=g(Y," – icon or line are replaced with "),L=$(Y,"A",{href:!0});var bt=_(L);lt=g(bt,"Loader"),bt.forEach(n),Y.forEach(n),O.forEach(n),M=b(e),A(V.$$.fragment,e),W=b(e),B=$(e,"H2",{});var ht=_(B);rt=g(ht,"Colors and state"),ht.forEach(n),J=b(e),A(T.$$.fragment,e),X=b(e),G=$(e,"H2",{});var Nt=_(G);ct=g(Nt,"Accessibility"),Nt.forEach(n),F=b(e),E=$(e,"P",{});var Z=_(E);pt=g(Z,"To support screen readers set close button aria-label or title with "),q=$(Z,"CODE",{});var wt=_(q);ft=g(wt,"closeButtonProps"),wt.forEach(n),ut=g(Z,":"),Z.forEach(n),K=b(e),H=$(e,"PRE",{class:!0});var Dt=_(H);Dt.forEach(n),this.h()},h(){Pt(L,"href","core/loader"),Pt(H,"class","language-svelte")},m(e,f){u(e,a,f),r(a,i),u(e,t,f),u(e,o,f),r(o,l),u(e,v,f),u(e,h,f),r(h,P),u(e,s,f),u(e,p,f),r(p,N),r(N,w),r(w,x),r(N,tt),r(p,et),r(p,I),r(I,U),r(U,at),r(I,ot),r(p,st),r(p,S),r(S,z),r(z,nt),r(S,it),r(S,L),r(L,lt),u(e,M,f),D(V,e,f),u(e,W,f),u(e,B,f),r(B,rt),u(e,J,f),D(T,e,f),u(e,X,f),u(e,G,f),r(G,ct),u(e,F,f),u(e,E,f),r(E,pt),r(E,q),r(q,ft),r(E,ut),u(e,K,f),u(e,H,f),H.innerHTML=At,Q=!0},p:Rt,i(e){Q||(C(V.$$.fragment,e),C(T.$$.fragment,e),Q=!0)},o(e){y(V.$$.fragment,e),y(T.$$.fragment,e),Q=!1},d(e){e&&n(a),e&&n(t),e&&n(o),e&&n(v),e&&n(h),e&&n(s),e&&n(p),e&&n(M),R(V,e),e&&n(W),e&&n(B),e&&n(J),R(T,e),e&&n(X),e&&n(G),e&&n(F),e&&n(E),e&&n(K),e&&n(H)}}}const re={title:"Notification",group:"svelteuidev-core",packageGroup:"@svelteuidev/core",slug:"/core/notification/",category:"feedback",description:"Attract user attention with an important message",importCode:"import { Notification } from '@svelteuidev/core';",source:"svelteui-core/src/components/Notification/Notification.svelte",docs:"core/notification.md"};class ce extends Ht{constructor(a){super(),It(this,a,null,ee,Lt,{})}}export{ce as default,re as metadata};
