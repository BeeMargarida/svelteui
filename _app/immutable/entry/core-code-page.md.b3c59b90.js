import{S as R,i as Y,s as J,y as v,z as C,A as w,g as y,d as b,B as k,q as u,r as p,b as f,h as c,e as Ne,C as je,a3 as Re,a as g,k as d,al as Ye,c as h,l as $,m as _,n as Qe,Y as a}from"../chunks/index.b0fe5a0f.js";import{G as Je,B as Ve}from"../chunks/navigation.9bd98935.js";import{H as Xe}from"../chunks/Heading.19c03976.js";import{D as fe}from"../chunks/Demo.82a35c94.js";import{C as Ze}from"../chunks/Center.b83aac32.js";import{C as De}from"../chunks/Code.b56c158f.js";import{P as et}from"../chunks/Prism.a6dc880d.js";function tt(i){let t;return{c(){t=u("This code will be inline")},l(r){t=p(r,"This code will be inline")},m(r,e){f(r,t,e)},d(r){r&&c(t)}}}function ot(i){let t,r;return t=new De({props:{$$slots:{default:[tt]},$$scope:{ctx:i}}}),{c(){v(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,l){w(t,e,l),r=!0},p(e,l){const s={};l&1&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){r||(y(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){k(t,e)}}}function rt(i){let t,r;return t=new Ze({props:{$$slots:{default:[ot]},$$scope:{ctx:i}}}),{c(){v(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,l){w(t,e,l),r=!0},p(e,[l]){const s={};l&1&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){r||(y(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){k(t,e)}}}const lt=`<script>
    import { Code } from '@svelteuidev/core';
<\/script>

<Code>This code will be inline</Code>
`,ct="demo",st={code:lt};class nt extends R{constructor(t){super(),Y(this,t,null,rt,J,{})}}const it=Object.freeze(Object.defineProperty({__proto__:null,configuration:st,default:nt,type:ct},Symbol.toStringTag,{value:"Module"}));function at(i){let t;return{c(){t=u("This code will be in block and you can copy")},l(r){t=p(r,"This code will be in block and you can copy")},m(r,e){f(r,t,e)},d(r){r&&c(t)}}}function ft(i){let t,r;return t=new De({props:{block:!0,copy:!0,message:"This code will be in block and you can copy",$$slots:{default:[at]},$$scope:{ctx:i}}}),{c(){v(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,l){w(t,e,l),r=!0},p(e,[l]){const s={};l&1&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){r||(y(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){k(t,e)}}}const ut=`<script>
    import { Code } from '@svelteuidev/core';
<\/script>

<Code block copy message='This code will be in block and you can copy'>
    This code will be in block and you can copy
</Code>
`,pt="demo",mt={code:ut};class dt extends R{constructor(t){super(),Y(this,t,null,ft,J,{})}}const $t=Object.freeze(Object.defineProperty({__proto__:null,configuration:mt,default:dt,type:pt},Symbol.toStringTag,{value:"Module"}));function _t(i,t,r){const e=i.slice();return e[0]=t[r],e}function gt(i){let t,r;return{c(){t=u("This code is "),r=u(i[0])},l(e){t=p(e,"This code is "),r=p(e,i[0])},m(e,l){f(e,t,l),f(e,r,l)},p:je,d(e){e&&c(t),e&&c(r)}}}function ht(i){let t,r;return t=new De({props:{color:i[0],$$slots:{default:[gt]},$$scope:{ctx:i}}}),{c(){v(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,l){w(t,e,l),r=!0},p(e,l){const s={};l&8&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){r||(y(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){k(t,e)}}}function yt(i){let t,r,e=["red","teal","blue"],l=[];for(let s=0;s<3;s+=1)l[s]=ht(_t(i,e,s));return{c(){for(let s=0;s<3;s+=1)l[s].c();t=Ne()},l(s){for(let m=0;m<3;m+=1)l[m].l(s);t=Ne()},m(s,m){for(let T=0;T<3;T+=1)l[T]&&l[T].m(s,m);f(s,t,m),r=!0},p:je,i(s){if(!r){for(let m=0;m<3;m+=1)y(l[m]);r=!0}},o(s){l=l.filter(Boolean);for(let m=0;m<3;m+=1)b(l[m]);r=!1},d(s){Re(l,s),s&&c(t)}}}function bt(i){let t,r;return t=new Je({props:{position:"center",$$slots:{default:[yt]},$$scope:{ctx:i}}}),{c(){v(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,l){w(t,e,l),r=!0},p(e,[l]){const s={};l&8&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){r||(y(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){k(t,e)}}}const vt=`<script>
    import { Code } from '@svelteuidev/core';
<\/script>

<Code color="red">This code is red</Code>
<Code color="teal">This code is teal</Code>
<Code color="blue">This code is blue</Code>
`,Ct="demo",wt={code:vt};class kt extends R{constructor(t){super(),Y(this,t,null,bt,J,{})}}const Et=Object.freeze(Object.defineProperty({__proto__:null,configuration:wt,default:kt,type:Ct},Symbol.toStringTag,{value:"Module"}));function xt(i){let t,r;return t=new et({props:{language:"svelte",code:i[0]}}),{c(){v(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,l){w(t,e,l),r=!0},p:je,i(e){r||(y(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){k(t,e)}}}function Tt(i){let t,r;return t=new Ve({props:{css:{pre:{bc:"$gray50"},"pre code":{color:"$gray900"}},$$slots:{default:[xt]},$$scope:{ctx:i}}}),{c(){v(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,l){w(t,e,l),r=!0},p(e,[l]){const s={};l&2&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){r||(y(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){k(t,e)}}}const Pt=`<script>
    import { Prism } from '@svelteuidev/prism';
<\/script>

<Prism language='svelte' code={prismExampleCode} />
`,St="demo",Bt={code:Pt};function Ot(i){return[`
    <script>
        import { Button } from '@svelteuidev/core';
    <\/script>

    <Button>Hello</Button>
    `]}class jt extends R{constructor(t){super(),Y(this,t,Ot,Tt,J,{})}}const Dt=Object.freeze(Object.defineProperty({__proto__:null,configuration:Bt,default:jt,type:St},Symbol.toStringTag,{value:"Module"}));function Ht(i){let t,r,e,l,s,m,T,E,ue,F,pe,me,W,de,$e,V,B,X,H,_e,Z,x,ge,K,he,ye,L,be,ve,ee,q,N,Ce,te,O,oe,z,we,re,P,ke,G,Ee,xe,le,j,ce,I,Te,se,S,Pe,U,Se,Be,ne,D,Q;return document.title=t=Oe+" - SvelteUI",e=new Xe({props:{title:Oe,group:zt,packageGroup:Gt,slug:It,category:Ut,description:Mt,importCode:At,source:Ft,docs:Wt}}),B=new fe({props:{demo:it}}),O=new fe({props:{demo:$t}}),j=new fe({props:{demo:Et}}),D=new fe({props:{demo:Dt}}),{c(){r=g(),v(e.$$.fragment),l=g(),s=d("h2"),m=u("Usage"),T=g(),E=d("p"),ue=u("By default the Code component renders "),F=d("strong"),pe=u("inline"),me=g(),W=d("code"),de=u("code"),$e=u(" html element:"),V=g(),v(B.$$.fragment),X=g(),H=d("h2"),_e=u("Block code"),Z=g(),x=d("p"),ge=u("To render code in "),K=d("code"),he=u("pre"),ye=u(" element pass block prop to Code component. It is also possible to allow copying the code to the clipboard with the prop "),L=d("code"),be=u("copy"),ve=u(":"),ee=g(),q=d("blockquote"),N=d("p"),Ce=u("Due to a bug with the docs, block code isn’t shown correctly. When you download the package it will work as intended."),te=g(),v(O.$$.fragment),oe=g(),z=d("h2"),we=u("Custom color"),re=g(),P=d("p"),ke=u("By default, code has gray color, you can change it to any color from "),G=d("a"),Ee=u("theme colors"),xe=u(":"),le=g(),v(j.$$.fragment),ce=g(),I=d("h2"),Te=u("Syntax highlight"),se=g(),S=d("p"),Pe=u("For syntax highlighting, consult the "),U=d("a"),Se=u("Prism package"),Be=u("."),ne=g(),v(D.$$.fragment),this.h()},l(o){Ye("svelte-pki6ul",document.head).forEach(c),r=h(o),C(e.$$.fragment,o),l=h(o),s=$(o,"H2",{});var He=_(s);m=p(He,"Usage"),He.forEach(c),T=h(o),E=$(o,"P",{});var M=_(E);ue=p(M,"By default the Code component renders "),F=$(M,"STRONG",{});var qe=_(F);pe=p(qe,"inline"),qe.forEach(c),me=h(M),W=$(M,"CODE",{});var ze=_(W);de=p(ze,"code"),ze.forEach(c),$e=p(M," html element:"),M.forEach(c),V=h(o),C(B.$$.fragment,o),X=h(o),H=$(o,"H2",{});var Ge=_(H);_e=p(Ge,"Block code"),Ge.forEach(c),Z=h(o),x=$(o,"P",{});var A=_(x);ge=p(A,"To render code in "),K=$(A,"CODE",{});var Ie=_(K);he=p(Ie,"pre"),Ie.forEach(c),ye=p(A," element pass block prop to Code component. It is also possible to allow copying the code to the clipboard with the prop "),L=$(A,"CODE",{});var Ue=_(L);be=p(Ue,"copy"),Ue.forEach(c),ve=p(A,":"),A.forEach(c),ee=h(o),q=$(o,"BLOCKQUOTE",{});var Me=_(q);N=$(Me,"P",{});var Ae=_(N);Ce=p(Ae,"Due to a bug with the docs, block code isn’t shown correctly. When you download the package it will work as intended."),Ae.forEach(c),Me.forEach(c),te=h(o),C(O.$$.fragment,o),oe=h(o),z=$(o,"H2",{});var Fe=_(z);we=p(Fe,"Custom color"),Fe.forEach(c),re=h(o),P=$(o,"P",{});var ie=_(P);ke=p(ie,"By default, code has gray color, you can change it to any color from "),G=$(ie,"A",{href:!0});var We=_(G);Ee=p(We,"theme colors"),We.forEach(c),xe=p(ie,":"),ie.forEach(c),le=h(o),C(j.$$.fragment,o),ce=h(o),I=$(o,"H2",{});var Ke=_(I);Te=p(Ke,"Syntax highlight"),Ke.forEach(c),se=h(o),S=$(o,"P",{});var ae=_(S);Pe=p(ae,"For syntax highlighting, consult the "),U=$(ae,"A",{href:!0});var Le=_(U);Se=p(Le,"Prism package"),Le.forEach(c),Be=p(ae,"."),ae.forEach(c),ne=h(o),C(D.$$.fragment,o),this.h()},h(){Qe(G,"href","/theming/default-theme"),Qe(U,"href","/others/prism")},m(o,n){f(o,r,n),w(e,o,n),f(o,l,n),f(o,s,n),a(s,m),f(o,T,n),f(o,E,n),a(E,ue),a(E,F),a(F,pe),a(E,me),a(E,W),a(W,de),a(E,$e),f(o,V,n),w(B,o,n),f(o,X,n),f(o,H,n),a(H,_e),f(o,Z,n),f(o,x,n),a(x,ge),a(x,K),a(K,he),a(x,ye),a(x,L),a(L,be),a(x,ve),f(o,ee,n),f(o,q,n),a(q,N),a(N,Ce),f(o,te,n),w(O,o,n),f(o,oe,n),f(o,z,n),a(z,we),f(o,re,n),f(o,P,n),a(P,ke),a(P,G),a(G,Ee),a(P,xe),f(o,le,n),w(j,o,n),f(o,ce,n),f(o,I,n),a(I,Te),f(o,se,n),f(o,S,n),a(S,Pe),a(S,U),a(U,Se),a(S,Be),f(o,ne,n),w(D,o,n),Q=!0},p(o,[n]){(!Q||n&0)&&t!==(t=Oe+" - SvelteUI")&&(document.title=t)},i(o){Q||(y(e.$$.fragment,o),y(B.$$.fragment,o),y(O.$$.fragment,o),y(j.$$.fragment,o),y(D.$$.fragment,o),Q=!0)},o(o){b(e.$$.fragment,o),b(B.$$.fragment,o),b(O.$$.fragment,o),b(j.$$.fragment,o),b(D.$$.fragment,o),Q=!1},d(o){o&&c(r),k(e,o),o&&c(l),o&&c(s),o&&c(T),o&&c(E),o&&c(V),k(B,o),o&&c(X),o&&c(H),o&&c(Z),o&&c(x),o&&c(ee),o&&c(q),o&&c(te),k(O,o),o&&c(oe),o&&c(z),o&&c(re),o&&c(P),o&&c(le),k(j,o),o&&c(ce),o&&c(I),o&&c(se),o&&c(S),o&&c(ne),k(D,o)}}}const qt={title:"Code",group:"svelteuidev-core",packageGroup:"@svelteuidev/core",slug:"/core/code/",category:"typography",description:"Inline or block code without syntax highlight",importCode:"import { Code } from '@svelteuidev/core';",source:"svelteui-core/src/components/Code/Code.svelte",docs:"core/code.md"},{title:Oe,group:zt,packageGroup:Gt,slug:It,category:Ut,description:Mt,importCode:At,source:Ft,docs:Wt}=qt;class Vt extends R{constructor(t){super(),Y(this,t,null,Ht,J,{})}}export{Vt as default,qt as metadata};
