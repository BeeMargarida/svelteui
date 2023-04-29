import{S as Fe,i as Je,s as Ke,y as F,a as v,z as J,c as C,A as K,b as m,g as Q,d as V,B as W,h as n,q as o,r,k as i,al as We,l as c,m as u,n as Xe,Y as t}from"../chunks/index.b0fe5a0f.js";import{t as Ze}from"../chunks/navigation.fd10cd14.js";import{H as et}from"../chunks/Heading.bb67d8e2.js";import"../chunks/paths.605af923.js";import{D as tt}from"../chunks/Demo.e6142117.js";import{C as Se}from"../chunks/Container.473c26ea.js";function nt(_){let a;return{c(){a=o("Default container")},l(p){a=r(p,"Default container")},m(p,l){m(p,a,l)},d(p){p&&n(a)}}}function st(_){let a;return{c(){a=o("xs container with xs horizontal padding")},l(p){a=r(p,"xs container with xs horizontal padding")},m(p,l){m(p,a,l)},d(p){p&&n(a)}}}function at(_){let a;return{c(){a=o("200px container with 0px horizontal padding")},l(p){a=r(p,"200px container with 0px horizontal padding")},m(p,l){m(p,a,l)},d(p){p&&n(a)}}}function ot(_){let a,p,l,x,$,z;return a=new Se({props:{override:{backgroundColor:_[0],height:50},$$slots:{default:[nt]},$$scope:{ctx:_}}}),l=new Se({props:{size:"xs",override:{backgroundColor:_[0],height:50,px:"$sm",mt:20},mt:20,$$slots:{default:[st]},$$scope:{ctx:_}}}),$=new Se({props:{size:200,override:{backgroundColor:_[0],height:50,px:0,mt:20},$$slots:{default:[at]},$$scope:{ctx:_}}}),{c(){F(a.$$.fragment),p=v(),F(l.$$.fragment),x=v(),F($.$$.fragment)},l(s){J(a.$$.fragment,s),p=C(s),J(l.$$.fragment,s),x=C(s),J($.$$.fragment,s)},m(s,d){K(a,s,d),m(s,p,d),K(l,s,d),m(s,x,d),K($,s,d),z=!0},p(s,[d]){const O={};d&2&&(O.$$scope={dirty:d,ctx:s}),a.$set(O);const w={};d&2&&(w.$$scope={dirty:d,ctx:s}),l.$set(w);const h={};d&2&&(h.$$scope={dirty:d,ctx:s}),$.$set(h)},i(s){z||(Q(a.$$.fragment,s),Q(l.$$.fragment,s),Q($.$$.fragment,s),z=!0)},o(s){V(a.$$.fragment,s),V(l.$$.fragment,s),V($.$$.fragment,s),z=!1},d(s){W(a,s),s&&n(p),W(l,s),s&&n(x),W($,s)}}}const rt=`
    <script>
        import { Container } from '@svelteuidev/core'
    <\/script>

    <Container override={{bc: 'AliceBlue'}}>
        Default container
    </Container>

    <Container size="xs" override={{px: 'xs', bc: 'AliceBlue'}}>
        xs container with xs horizontal padding
    </Container>

    <Container size={200} override={{px: 0, bc: 'AliceBlue'}}>
        200px container with 0px horizontal padding
    </Container>
    
	`,pt="demo",lt={code:rt};function it(_){return[Ze.colors.blue50.value]}class ct extends Fe{constructor(a){super(),Je(this,a,it,ot,Ke,{})}}const ut=Object.freeze(Object.defineProperty({__proto__:null,configuration:lt,default:ct,type:pt},Symbol.toStringTag,{value:"Module"}));function dt(_){let a,p,l,x,$,z,s,d,O,w,h,S,G,se,ae,oe,k,H,re,pe,L,le,ie,P,ce,ue,U,de,fe,j,me,ke,A,$e,ge,B,_e,he,ve,E,R,Ce,xe,N,ze,Ee,X,b,Z,T,ye,ee,y,we,q,be,De,te,D,Qe=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Container <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@svelteuidev/core'</span><span class="token punctuation">;</span>

    <span class="token literal-property property">sizes</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">xs</span><span class="token operator">:</span> <span class="token number">540</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sm</span><span class="token operator">:</span> <span class="token number">720</span><span class="token punctuation">,</span>
        <span class="token literal-property property">md</span><span class="token operator">:</span> <span class="token number">960</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lg</span><span class="token operator">:</span> <span class="token number">1140</span><span class="token punctuation">,</span>
        <span class="token literal-property property">xl</span><span class="token operator">:</span> <span class="token number">1320</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Container</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>sizes<span class="token punctuation">&#125;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Your app<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Container</span><span class="token punctuation">></span></span></code>`,M;return document.title=a=Te+" - SvelteUI",l=new et({props:{title:Te,group:mt,packageGroup:kt,slug:$t,category:gt,description:_t,importCode:ht,source:vt,docs:Ct}}),b=new tt({props:{demo:ut}}),{c(){p=v(),F(l.$$.fragment),x=v(),$=i("h2"),z=o("Usage"),s=v(),d=i("p"),O=o(`Container is the most basic layout element. It centers content horizontally and adds horizontal padding from theme.
The component accepts these props:`),w=v(),h=i("ul"),S=i("li"),G=i("strong"),se=o("size"),ae=o(" - controls default max width"),oe=v(),k=i("li"),H=i("strong"),re=o("padding"),pe=o(" - controls horizontal padding of container, use "),L=i("code"),le=o("xs"),ie=o(", "),P=i("code"),ce=o("sm"),ue=o(", "),U=i("code"),de=o("md"),fe=o(", "),j=i("code"),me=o("lg"),ke=o(", "),A=i("code"),$e=o("xl"),ge=o(" for value defined in "),B=i("code"),_e=o("theme.spacing"),he=o(" or number to set horizontal padding in px"),ve=v(),E=i("li"),R=i("strong"),Ce=o("fluid"),xe=o(" - overwrites "),N=i("code"),ze=o("size"),Ee=o(" prop and sets max-width to 100%"),X=v(),F(b.$$.fragment),Z=v(),T=i("h2"),ye=o("Configure sizes"),ee=v(),y=i("p"),we=o("To configure container sizes, use the "),q=i("code"),be=o("sizes"),De=o(" prop:"),te=v(),D=i("pre"),this.h()},l(e){We("svelte-pki6ul",document.head).forEach(n),p=C(e),J(l.$$.fragment,e),x=C(e),$=c(e,"H2",{});var Ie=u($);z=r(Ie,"Usage"),Ie.forEach(n),s=C(e),d=c(e,"P",{});var Ge=u(d);O=r(Ge,`Container is the most basic layout element. It centers content horizontally and adds horizontal padding from theme.
The component accepts these props:`),Ge.forEach(n),w=C(e),h=c(e,"UL",{});var I=u(h);S=c(I,"LI",{});var Oe=u(S);G=c(Oe,"STRONG",{});var He=u(G);se=r(He,"size"),He.forEach(n),ae=r(Oe," - controls default max width"),Oe.forEach(n),oe=C(I),k=c(I,"LI",{});var g=u(k);H=c(g,"STRONG",{});var Le=u(H);re=r(Le,"padding"),Le.forEach(n),pe=r(g," - controls horizontal padding of container, use "),L=c(g,"CODE",{});var Pe=u(L);le=r(Pe,"xs"),Pe.forEach(n),ie=r(g,", "),P=c(g,"CODE",{});var Ue=u(P);ce=r(Ue,"sm"),Ue.forEach(n),ue=r(g,", "),U=c(g,"CODE",{});var je=u(U);de=r(je,"md"),je.forEach(n),fe=r(g,", "),j=c(g,"CODE",{});var Ae=u(j);me=r(Ae,"lg"),Ae.forEach(n),ke=r(g,", "),A=c(g,"CODE",{});var Be=u(A);$e=r(Be,"xl"),Be.forEach(n),ge=r(g," for value defined in "),B=c(g,"CODE",{});var Re=u(B);_e=r(Re,"theme.spacing"),Re.forEach(n),he=r(g," or number to set horizontal padding in px"),g.forEach(n),ve=C(I),E=c(I,"LI",{});var Y=u(E);R=c(Y,"STRONG",{});var Ne=u(R);Ce=r(Ne,"fluid"),Ne.forEach(n),xe=r(Y," - overwrites "),N=c(Y,"CODE",{});var qe=u(N);ze=r(qe,"size"),qe.forEach(n),Ee=r(Y," prop and sets max-width to 100%"),Y.forEach(n),I.forEach(n),X=C(e),J(b.$$.fragment,e),Z=C(e),T=c(e,"H2",{});var Me=u(T);ye=r(Me,"Configure sizes"),Me.forEach(n),ee=C(e),y=c(e,"P",{});var ne=u(y);we=r(ne,"To configure container sizes, use the "),q=c(ne,"CODE",{});var Ye=u(q);be=r(Ye,"sizes"),Ye.forEach(n),De=r(ne," prop:"),ne.forEach(n),te=C(e),D=c(e,"PRE",{class:!0});var Ve=u(D);Ve.forEach(n),this.h()},h(){Xe(D,"class","language-svelte")},m(e,f){m(e,p,f),K(l,e,f),m(e,x,f),m(e,$,f),t($,z),m(e,s,f),m(e,d,f),t(d,O),m(e,w,f),m(e,h,f),t(h,S),t(S,G),t(G,se),t(S,ae),t(h,oe),t(h,k),t(k,H),t(H,re),t(k,pe),t(k,L),t(L,le),t(k,ie),t(k,P),t(P,ce),t(k,ue),t(k,U),t(U,de),t(k,fe),t(k,j),t(j,me),t(k,ke),t(k,A),t(A,$e),t(k,ge),t(k,B),t(B,_e),t(k,he),t(h,ve),t(h,E),t(E,R),t(R,Ce),t(E,xe),t(E,N),t(N,ze),t(E,Ee),m(e,X,f),K(b,e,f),m(e,Z,f),m(e,T,f),t(T,ye),m(e,ee,f),m(e,y,f),t(y,we),t(y,q),t(q,be),t(y,De),m(e,te,f),m(e,D,f),D.innerHTML=Qe,M=!0},p(e,[f]){(!M||f&0)&&a!==(a=Te+" - SvelteUI")&&(document.title=a)},i(e){M||(Q(l.$$.fragment,e),Q(b.$$.fragment,e),M=!0)},o(e){V(l.$$.fragment,e),V(b.$$.fragment,e),M=!1},d(e){e&&n(p),W(l,e),e&&n(x),e&&n($),e&&n(s),e&&n(d),e&&n(w),e&&n(h),e&&n(X),W(b,e),e&&n(Z),e&&n(T),e&&n(ee),e&&n(y),e&&n(te),e&&n(D)}}}const ft={title:"Container",group:"svelteuidev-core",packageGroup:"@svelteuidev/core",slug:"/core/container/",category:"layout",description:"Center content horizontally with predefined max-width",importCode:"import { Container } from '@svelteuidev/core';",source:"svelteui-core/src/components/Container/Container.svelte",docs:"core/container.md"},{title:Te,group:mt,packageGroup:kt,slug:$t,category:gt,description:_t,importCode:ht,source:vt,docs:Ct}=ft;class Dt extends Fe{constructor(a){super(),Je(this,a,null,dt,Ke,{})}}export{Dt as default,ft as metadata};