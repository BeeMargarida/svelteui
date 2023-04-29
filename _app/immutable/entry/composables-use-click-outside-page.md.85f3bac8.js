import{S as Ce,i as Se,s as Be,y as U,z as j,A as R,g,d as T,B as A,k as f,a as h,l as d,m,c as _,h as o,p as je,b as k,Y as n,J as Re,v as Ae,f as Ge,F as Le,q as v,r as b,al as ze,n as qe}from"../chunks/index.b0fe5a0f.js";import{a as We,G as Ye}from"../chunks/navigation.9bd98935.js";import{H as xe}from"../chunks/Heading.19c03976.js";import{D as Fe}from"../chunks/Demo.82a35c94.js";import{C as Je}from"../chunks/Center.b83aac32.js";import{c as Ve}from"../chunks/use-click-outside.750b9c83.js";import{B as Ke}from"../chunks/Button.36168772.js";import{P as Ne}from"../chunks/Paper.1639a6b3.js";function Qe(i){let e;return{c(){e=v("Open Modal")},l(a){e=b(a,"Open Modal")},m(a,s){k(a,e,s)},d(a){a&&o(e)}}}function Xe(i){let e,a;return e=new Ke({props:{$$slots:{default:[Qe]},$$scope:{ctx:i}}}),e.$on("click",i[2]),{c(){U(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,r){R(e,s,r),a=!0},p(s,r){const c={};r&16&&(c.$$scope={dirty:r,ctx:s}),e.$set(c)},i(s){a||(g(e.$$.fragment,s),a=!0)},o(s){T(e.$$.fragment,s),a=!1},d(s){A(e,s)}}}function He(i){let e,a;return e=new Ne({props:{shadow:"sm",override:{zIndex:1,width:300,height:60,position:"absolute",top:0,left:"calc(50% - 150px)",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:i[1].colors.white.value,darkMode:{color:i[1].fn.themeColor("dark",6)}},$$slots:{default:[Ze]},$$scope:{ctx:i}}}),{c(){U(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,r){R(e,s,r),a=!0},p(s,r){const c={};r&16&&(c.$$scope={dirty:r,ctx:s}),e.$set(c)},i(s){a||(g(e.$$.fragment,s),a=!0)},o(s){T(e.$$.fragment,s),a=!1},d(s){A(e,s)}}}function Ze(i){let e;return{c(){e=v("This is a modal, click anywhere to close")},l(a){e=b(a,"This is a modal, click anywhere to close")},m(a,s){k(a,e,s)},d(a){a&&o(e)}}}function et(i){let e,a,s,r,c,E,y;a=new Ye({props:{position:"center",$$slots:{default:[Xe]},$$scope:{ctx:i}}});let l=i[0]&&He(i);return{c(){e=f("div"),U(a.$$.fragment),s=h(),l&&l.c(),this.h()},l(p){e=d(p,"DIV",{style:!0});var $=m(e);j(a.$$.fragment,$),s=_($),l&&l.l($),$.forEach(o),this.h()},h(){je(e,"position","relative")},m(p,$){k(p,e,$),R(a,e,null),n(e,s),l&&l.m(e,null),c=!0,E||(y=Re(r=Ve.call(null,e,{enabled:i[0],callback:i[3]})),E=!0)},p(p,$){const S={};$&17&&(S.$$scope={dirty:$,ctx:p}),a.$set(S),p[0]?l?(l.p(p,$),$&1&&g(l,1)):(l=He(p),l.c(),g(l,1),l.m(e,null)):l&&(Ae(),T(l,1,1,()=>{l=null}),Ge()),r&&Le(r.update)&&$&1&&r.update.call(null,{enabled:p[0],callback:p[3]})},i(p){c||(g(a.$$.fragment,p),g(l),c=!0)},o(p){T(a.$$.fragment,p),T(l),c=!1},d(p){p&&o(e),A(a),l&&l.d(),E=!1,y()}}}function tt(i){let e,a;return e=new Je({props:{$$slots:{default:[et]},$$scope:{ctx:i}}}),{c(){U(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,r){R(e,s,r),a=!0},p(s,[r]){const c={};r&17&&(c.$$scope={dirty:r,ctx:s}),e.$set(c)},i(s){a||(g(e.$$.fragment,s),a=!0)},o(s){T(e.$$.fragment,s),a=!1},d(s){A(e,s)}}}const st=`
<script>
    import { Button, Paper } from '@svelteuidev/core';
    import { clickoutside } from '@svelteuidev/composables';

    let open = true;
<\/script>

<div use:clickoutside={{ enabled: open, callback: () => open = false }}>
    <Button on:click={() => open = true}>Open Modal</Button>
    {#if open}
        <Paper shadow='sm'>
            This is a modal, click anywhere to close
        </Paper>
    {/if}
</div>`,at="demo",ot={code:st};function nt(i,e,a){let s=!1,r=We();return[s,r,()=>a(0,s=!0),()=>a(0,s=!1)]}class lt extends Ce{constructor(e){super(),Se(this,e,nt,tt,Be,{})}}const rt=Object.freeze(Object.defineProperty({__proto__:null,configuration:ot,default:lt,type:at},Symbol.toStringTag,{value:"Module"}));function ct(i){let e,a,s,r,c,E,y,l,p,$,S,oe,J,D,V,B,ne,K,w,G,P,L,le,re,z,ce,ie,M,O,q,pe,ue,W,fe,de,H,Y,me,$e,x,ke,N,I,he,Q,C,Ie=`<code class="language-js"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">clickOutside</span><span class="token punctuation">(</span>
	<span class="token parameter"><span class="token literal-property property">node</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span>
	<span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">enabled</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span> callback<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token operator">?</span><span class="token operator">:</span> HTMLElement</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span> <span class="token punctuation">&#125;</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> ReturnType<span class="token operator">&lt;</span>Action<span class="token operator">></span><span class="token punctuation">;</span></code>`,F;return document.title=e=_e+" - SvelteUI",s=new xe({props:{title:_e,group:pt,packageGroup:ut,slug:ft,description:dt,importCode:mt,docs:$t,source:kt}}),D=new Fe({props:{demo:rt}}),{c(){a=h(),U(s.$$.fragment),r=h(),c=f("h2"),E=v("Usage"),y=h(),l=f("p"),p=v("With the "),$=f("code"),S=v("use-click-outside"),oe=v(" action, a callback function will be fired whenever the user clicks outside of the DOM node the action is applied to."),J=h(),U(D.$$.fragment),V=h(),B=f("h2"),ne=v("Params"),K=h(),w=f("table"),G=f("thead"),P=f("tr"),L=f("th"),le=v("Param"),re=h(),z=f("th"),ce=v("Description"),ie=h(),M=f("tbody"),O=f("tr"),q=f("td"),pe=v("enabled"),ue=h(),W=f("td"),fe=v("Sets the action to an enabled state if true, if false, action will not trigger"),de=h(),H=f("tr"),Y=f("td"),me=v("callback"),$e=h(),x=f("td"),ke=v("The callback to be fired once the user clicks outside of the DOM node"),N=h(),I=f("h2"),he=v("Definition"),Q=h(),C=f("pre"),this.h()},l(t){ze("svelte-pki6ul",document.head).forEach(o),a=_(t),j(s.$$.fragment,t),r=_(t),c=d(t,"H2",{});var ve=m(c);E=b(ve,"Usage"),ve.forEach(o),y=_(t),l=d(t,"P",{});var X=m(l);p=b(X,"With the "),$=d(X,"CODE",{});var be=m($);S=b(be,"use-click-outside"),be.forEach(o),oe=b(X," action, a callback function will be fired whenever the user clicks outside of the DOM node the action is applied to."),X.forEach(o),J=_(t),j(D.$$.fragment,t),V=_(t),B=d(t,"H2",{});var ge=m(B);ne=b(ge,"Params"),ge.forEach(o),K=_(t),w=d(t,"TABLE",{});var Z=m(w);G=d(Z,"THEAD",{});var Ee=m(G);P=d(Ee,"TR",{});var ee=m(P);L=d(ee,"TH",{});var we=m(L);le=b(we,"Param"),we.forEach(o),re=_(ee),z=d(ee,"TH",{});var Te=m(z);ce=b(Te,"Description"),Te.forEach(o),ee.forEach(o),Ee.forEach(o),ie=_(Z),M=d(Z,"TBODY",{});var te=m(M);O=d(te,"TR",{});var se=m(O);q=d(se,"TD",{});var ye=m(q);pe=b(ye,"enabled"),ye.forEach(o),ue=_(se),W=d(se,"TD",{});var De=m(W);fe=b(De,"Sets the action to an enabled state if true, if false, action will not trigger"),De.forEach(o),se.forEach(o),de=_(te),H=d(te,"TR",{});var ae=m(H);Y=d(ae,"TD",{});var Pe=m(Y);me=b(Pe,"callback"),Pe.forEach(o),$e=_(ae),x=d(ae,"TD",{});var Me=m(x);ke=b(Me,"The callback to be fired once the user clicks outside of the DOM node"),Me.forEach(o),ae.forEach(o),te.forEach(o),Z.forEach(o),N=_(t),I=d(t,"H2",{});var Oe=m(I);he=b(Oe,"Definition"),Oe.forEach(o),Q=_(t),C=d(t,"PRE",{class:!0});var Ue=m(C);Ue.forEach(o),this.h()},h(){qe(C,"class","language-js")},m(t,u){k(t,a,u),R(s,t,u),k(t,r,u),k(t,c,u),n(c,E),k(t,y,u),k(t,l,u),n(l,p),n(l,$),n($,S),n(l,oe),k(t,J,u),R(D,t,u),k(t,V,u),k(t,B,u),n(B,ne),k(t,K,u),k(t,w,u),n(w,G),n(G,P),n(P,L),n(L,le),n(P,re),n(P,z),n(z,ce),n(w,ie),n(w,M),n(M,O),n(O,q),n(q,pe),n(O,ue),n(O,W),n(W,fe),n(M,de),n(M,H),n(H,Y),n(Y,me),n(H,$e),n(H,x),n(x,ke),k(t,N,u),k(t,I,u),n(I,he),k(t,Q,u),k(t,C,u),C.innerHTML=Ie,F=!0},p(t,[u]){(!F||u&0)&&e!==(e=_e+" - SvelteUI")&&(document.title=e)},i(t){F||(g(s.$$.fragment,t),g(D.$$.fragment,t),F=!0)},o(t){T(s.$$.fragment,t),T(D.$$.fragment,t),F=!1},d(t){t&&o(a),A(s,t),t&&o(r),t&&o(c),t&&o(y),t&&o(l),t&&o(J),A(D,t),t&&o(V),t&&o(B),t&&o(K),t&&o(w),t&&o(N),t&&o(I),t&&o(Q),t&&o(C)}}}const it={title:"use-click-outside",group:"svelteuidev-composables",packageGroup:"@svelteuidev/composables",slug:"/composables/use-click-outside/",description:"Detect click and touch events outside of specified element",importCode:"import { clickoutside } from '@svelteuidev/composables';",docs:"composables/use-click-outside.md",source:"svelteui-composables/src/actions/use-click-outside/use-click-outside.ts"},{title:_e,group:pt,packageGroup:ut,slug:ft,description:dt,importCode:mt,docs:$t,source:kt}=it;class yt extends Ce{constructor(e){super(),Se(this,e,null,ct,Be,{})}}export{yt as default,it as metadata};
