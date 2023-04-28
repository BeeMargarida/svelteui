import{S as Ie,i as Re,s as Ue,y as Z,z as ee,A as te,g as oe,d as ae,B as se,a as g,k as f,c as y,l as d,m,h as o,b as u,q as i,r as c,W as s,u as Ye,n as qe,X as ze}from"./index.b4f0bbdc.js";import{D as Ve}from"./Demo.9cccb4ab.js";import{S as Ge}from"./Stack.545b11b0.js";import{B as Ne}from"./Box.195443f6.js";import{p as Pe}from"./use-portal.7e2e192e.js";import{B as We}from"./Button.b50e74fc.js";function Le(h){let t,n;return{c(){t=f("div"),n=i("Look at the top of the page")},l(a){t=d(a,"DIV",{});var l=m(t);n=c(l,"Look at the top of the page"),l.forEach(o)},m(a,l){u(a,t,l),s(t,n)},d(a){a&&o(t)}}}function Xe(h){let t,n=h[0]?"outside":"inside",a,l;return{c(){t=i("I'm being rendered "),a=i(n),l=i(" of the preview")},l(p){t=c(p,"I'm being rendered "),a=c(p,n),l=c(p," of the preview")},m(p,b){u(p,t,b),u(p,a,b),u(p,l,b)},p(p,b){b&1&&n!==(n=p[0]?"outside":"inside")&&Ye(a,n)},d(p){p&&o(t),p&&o(a),p&&o(l)}}}function Fe(h){let t;return{c(){t=i("Click me to see the magic")},l(n){t=c(n,"Click me to see the magic")},m(n,a){u(n,t,a)},d(n){n&&o(t)}}}function Je(h){let t,n,a,l,p,b,_=h[0]&&Le();return a=new Ne({props:{use:[[Pe,h[0]?"h1":null]],css:{bc:"white",border:"1px solid black",br:"$md",padding:"$md"},$$slots:{default:[Xe]},$$scope:{ctx:h}}}),p=new We({props:{$$slots:{default:[Fe]},$$scope:{ctx:h}}}),p.$on("click",h[1]),{c(){_&&_.c(),t=g(),n=f("div"),Z(a.$$.fragment),l=g(),Z(p.$$.fragment)},l(r){_&&_.l(r),t=y(r),n=d(r,"DIV",{});var $=m(n);ee(a.$$.fragment,$),$.forEach(o),l=y(r),ee(p.$$.fragment,r)},m(r,$){_&&_.m(r,$),u(r,t,$),u(r,n,$),te(a,n,null),u(r,l,$),te(p,r,$),b=!0},p(r,$){r[0]?_||(_=Le(),_.c(),_.m(t.parentNode,t)):_&&(_.d(1),_=null);const w={};$&1&&(w.use=[[Pe,r[0]?"h1":null]]),$&5&&(w.$$scope={dirty:$,ctx:r}),a.$set(w);const O={};$&4&&(O.$$scope={dirty:$,ctx:r}),p.$set(O)},i(r){b||(oe(a.$$.fragment,r),oe(p.$$.fragment,r),b=!0)},o(r){ae(a.$$.fragment,r),ae(p.$$.fragment,r),b=!1},d(r){_&&_.d(r),r&&o(t),r&&o(n),se(a),r&&o(l),se(p,r)}}}function Ke(h){let t,n;return t=new Ge({props:{align:"center",$$slots:{default:[Je]},$$scope:{ctx:h}}}),{c(){Z(t.$$.fragment)},l(a){ee(t.$$.fragment,a)},m(a,l){te(t,a,l),n=!0},p(a,[l]){const p={};l&5&&(p.$$scope={dirty:l,ctx:a}),t.$set(p)},i(a){n||(oe(t.$$.fragment,a),n=!0)},o(a){ae(t.$$.fragment,a),n=!1},d(a){se(t,a)}}}const Qe=`
<script>
    import { Box, Button } from '@svelteuidev/core';
    import { portal } from '@svelteuidev/composables';

    let magic = false;
<\/script>

{#if magic}
    <div>
        Look at the top of the page
    </div>
{/if}
<div>
    <Box 
        use={[[portal, magic ? 'h1' : null]]}
        css={{bc: 'white', border: '1px solid black', br: '$md', padding: '$md'}} 
    >
        I'm being rendered {magic ? 'outside' : 'inside'} of the preview
    </Box>
</div>
<Button on:click={() => magic = !magic}>Click me to see the magic</Button>`,Ze="demo",et={code:Qe};function tt(h,t,n){let a=!1;return[a,()=>n(0,a=!a)]}class ot extends Ie{constructor(t){super(),Re(this,t,tt,Ke,Ue,{})}}const at=Object.freeze(Object.defineProperty({__proto__:null,configuration:et,default:ot,type:Ze},Symbol.toStringTag,{value:"Module"}));function st(h){let t,n,a,l,p,b,_,r,$,w,O,z,T,V,k,ne,P,re,le,L,pe,ie,I,ce,fe,G,x,de,N,E,R,C,U,me,ue,j,$e,_e,A,S,Y,ve,be,q,he,W,M,ke,X,B,je='<code class="language-js"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">portal</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">node</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span> <span class="token literal-property property">target</span><span class="token operator">:</span> Target</span><span class="token punctuation">)</span><span class="token operator">:</span> ReturnType<span class="token operator">&lt;</span>Action<span class="token operator">></span><span class="token punctuation">;</span></code>',F;return T=new Ve({props:{demo:at}}),{c(){t=f("h2"),n=i("Usage"),a=g(),l=f("p"),p=i("Render any component or element at the end of "),b=f("code"),_=i("document.body"),r=i(" or at given element. Modal and Drawer components use Portal by default. Use the "),$=f("code"),w=i("portal"),O=i(" action to render a component or element outside of it’s parent. The portal action takes one argument (target):"),z=g(),Z(T.$$.fragment),V=g(),k=f("p"),ne=i("You can specify a DOM node where portal will be rendered by passing target argument. If you don’t specify the target, it will be appended to the "),P=f("code"),re=i("document.body"),le=i(" for each action instance. Target can be a HTMLElement "),L=f("code"),pe=i("{'use:portal={document.body}'}"),ie=i(" or a CSS selector "),I=f("code"),ce=i(`{'use:portal={"#svelteui"}'}`),fe=i(" that points to an already existing element."),G=g(),x=f("h2"),de=i("Params"),N=g(),E=f("table"),R=f("thead"),C=f("tr"),U=f("th"),me=i("Param"),ue=g(),j=f("th"),$e=i("Description"),_e=g(),A=f("tbody"),S=f("tr"),Y=f("td"),ve=i("target"),be=g(),q=f("td"),he=i("DOM element or CSS selector to be appended to."),W=g(),M=f("h2"),ke=i("Definition"),X=g(),B=f("pre"),this.h()},l(e){t=d(e,"H2",{});var v=m(t);n=c(v,"Usage"),v.forEach(o),a=y(e),l=d(e,"P",{});var H=m(l);p=c(H,"Render any component or element at the end of "),b=d(H,"CODE",{});var ge=m(b);_=c(ge,"document.body"),ge.forEach(o),r=c(H," or at given element. Modal and Drawer components use Portal by default. Use the "),$=d(H,"CODE",{});var ye=m($);w=c(ye,"portal"),ye.forEach(o),O=c(H," action to render a component or element outside of it’s parent. The portal action takes one argument (target):"),H.forEach(o),z=y(e),ee(T.$$.fragment,e),V=y(e),k=d(e,"P",{});var D=m(k);ne=c(D,"You can specify a DOM node where portal will be rendered by passing target argument. If you don’t specify the target, it will be appended to the "),P=d(D,"CODE",{});var Ee=m(P);re=c(Ee,"document.body"),Ee.forEach(o),le=c(D," for each action instance. Target can be a HTMLElement "),L=d(D,"CODE",{});var De=m(L);pe=c(De,"{'use:portal={document.body}'}"),De.forEach(o),ie=c(D," or a CSS selector "),I=d(D,"CODE",{});var we=m(I);ce=c(we,`{'use:portal={"#svelteui"}'}`),we.forEach(o),fe=c(D," that points to an already existing element."),D.forEach(o),G=y(e),x=d(e,"H2",{});var Te=m(x);de=c(Te,"Params"),Te.forEach(o),N=y(e),E=d(e,"TABLE",{});var J=m(E);R=d(J,"THEAD",{});var Ce=m(R);C=d(Ce,"TR",{});var K=m(C);U=d(K,"TH",{});var Se=m(U);me=c(Se,"Param"),Se.forEach(o),ue=y(K),j=d(K,"TH",{});var Be=m(j);$e=c(Be,"Description"),Be.forEach(o),K.forEach(o),Ce.forEach(o),_e=y(J),A=d(J,"TBODY",{});var Oe=m(A);S=d(Oe,"TR",{});var Q=m(S);Y=d(Q,"TD",{});var xe=m(Y);ve=c(xe,"target"),xe.forEach(o),be=y(Q),q=d(Q,"TD",{});var Me=m(q);he=c(Me,"DOM element or CSS selector to be appended to."),Me.forEach(o),Q.forEach(o),Oe.forEach(o),J.forEach(o),W=y(e),M=d(e,"H2",{});var He=m(M);ke=c(He,"Definition"),He.forEach(o),X=y(e),B=d(e,"PRE",{class:!0});var Ae=m(B);Ae.forEach(o),this.h()},h(){qe(B,"class","language-js")},m(e,v){u(e,t,v),s(t,n),u(e,a,v),u(e,l,v),s(l,p),s(l,b),s(b,_),s(l,r),s(l,$),s($,w),s(l,O),u(e,z,v),te(T,e,v),u(e,V,v),u(e,k,v),s(k,ne),s(k,P),s(P,re),s(k,le),s(k,L),s(L,pe),s(k,ie),s(k,I),s(I,ce),s(k,fe),u(e,G,v),u(e,x,v),s(x,de),u(e,N,v),u(e,E,v),s(E,R),s(R,C),s(C,U),s(U,me),s(C,ue),s(C,j),s(j,$e),s(E,_e),s(E,A),s(A,S),s(S,Y),s(Y,ve),s(S,be),s(S,q),s(q,he),u(e,W,v),u(e,M,v),s(M,ke),u(e,X,v),u(e,B,v),B.innerHTML=je,F=!0},p:ze,i(e){F||(oe(T.$$.fragment,e),F=!0)},o(e){ae(T.$$.fragment,e),F=!1},d(e){e&&o(t),e&&o(a),e&&o(l),e&&o(z),se(T,e),e&&o(V),e&&o(k),e&&o(G),e&&o(x),e&&o(N),e&&o(E),e&&o(W),e&&o(M),e&&o(X),e&&o(B)}}}const ft={title:"use-portal",group:"svelteuidev-composables",packageGroup:"@svelteuidev/composables",slug:"/composables/use-portal/",description:"Render an element or component anywhere in the DOM",importCode:"import { portal } from '@svelteuidev/composables';",docs:"composables/use-portal.md",source:"svelteui-composables/src/actions/use-portal/use-portal.ts"};class dt extends Ie{constructor(t){super(),Re(this,t,null,st,Ue,{})}}export{dt as default,ft as metadata};
