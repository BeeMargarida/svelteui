import{S as Ms,i as Us,s as Vs,D as yt,y as ee,z as se,A as te,J as xt,a6 as St,g as W,d as D,B as ae,e as Me,b as k,X as _e,a2 as kt,h as s,q as r,r as i,k as f,a as v,l as m,m as d,c as _,n as O,W as a}from"./index.b4f0bbdc.js";import{D as dt}from"./Demo.9cccb4ab.js";import{S as ht}from"./SimpleGrid.fe55de4d.js";import{C as vt}from"./Center.c93e1a75.js";function Gt(h,n,l){const t=h.slice();return t[1]=n[l],t[3]=l,t}function Ct(h){let n=h[3]+1+"",l;return{c(){l=r(n)},l(t){l=i(t,n)},m(t,p){k(t,l,p)},p:_e,d(t){t&&s(l)}}}function It(h){let n,l;return n=new vt({props:{override:{bc:"AliceBlue",padding:"$12",color:"$blue600"},$$slots:{default:[Ct]},$$scope:{ctx:h}}}),{c(){ee(n.$$.fragment)},l(t){se(n.$$.fragment,t)},m(t,p){te(n,t,p),l=!0},p(t,p){const o={};p&16&&(o.$$scope={dirty:p,ctx:t}),n.$set(o)},i(t){l||(W(n.$$.fragment,t),l=!0)},o(t){D(n.$$.fragment,t),l=!1},d(t){ae(n,t)}}}function Ot(h){let n,l,t=[...Array(5).keys()],p=[];for(let o=0;o<t.length;o+=1)p[o]=It(Gt(h,t,o));return{c(){for(let o=0;o<p.length;o+=1)p[o].c();n=Me()},l(o){for(let c=0;c<p.length;c+=1)p[c].l(o);n=Me()},m(o,c){for(let g=0;g<p.length;g+=1)p[g]&&p[g].m(o,c);k(o,n,c),l=!0},p:_e,i(o){if(!l){for(let c=0;c<t.length;c+=1)W(p[c]);l=!0}},o(o){p=p.filter(Boolean);for(let c=0;c<p.length;c+=1)D(p[c]);l=!1},d(o){kt(p,o),o&&s(n)}}}function Wt(h){let n,l;const t=[h[0]];let p={$$slots:{default:[Ot]},$$scope:{ctx:h}};for(let o=0;o<t.length;o+=1)p=yt(p,t[o]);return n=new ht({props:p}),{c(){ee(n.$$.fragment)},l(o){se(n.$$.fragment,o)},m(o,c){te(n,o,c),l=!0},p(o,[c]){const g=c&1?xt(t,[St(o[0])]):{};c&16&&(g.$$scope={dirty:c,ctx:o}),n.$set(g)},i(o){l||(W(n.$$.fragment,o),l=!0)},o(o){D(n.$$.fragment,o),l=!1},d(o){ae(n,o)}}}const Dt=(h,n)=>`<script>
  import { SimpleGrid } from '@svelteuidev/core';
<\/script>

<SimpleGrid ${h}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
</SimpleGrid>`,Lt="configurator",Pt={codeTemplate:Dt,configurator:[{name:"cols",type:"number",initialValue:3,min:1,max:5},{name:"spacing",type:"size",initialValue:"md",defaultValue:"md"}]};function jt(h,n,l){let{props:t={}}=n;return h.$$set=p=>{"props"in p&&l(0,t=p.props)},[t]}class Bt extends Ms{constructor(n){super(),Us(this,n,jt,Wt,Vs,{props:0})}}const At=Object.freeze(Object.defineProperty({__proto__:null,configuration:Pt,default:Bt,type:Lt},Symbol.toStringTag,{value:"Module"}));function Ht(h,n,l){const t=h.slice();return t[0]=n[l],t[2]=l,t}function qt(h){let n=h[2]+1+"",l;return{c(){l=r(n)},l(t){l=i(t,n)},m(t,p){k(t,l,p)},p:_e,d(t){t&&s(l)}}}function zt(h){let n,l;return n=new vt({props:{override:{bc:"AliceBlue",padding:"$12",color:"$blue600"},$$slots:{default:[qt]},$$scope:{ctx:h}}}),{c(){ee(n.$$.fragment)},l(t){se(n.$$.fragment,t)},m(t,p){te(n,t,p),l=!0},p(t,p){const o={};p&8&&(o.$$scope={dirty:p,ctx:t}),n.$set(o)},i(t){l||(W(n.$$.fragment,t),l=!0)},o(t){D(n.$$.fragment,t),l=!1},d(t){ae(n,t)}}}function Rt(h){let n,l,t=[...Array(5).keys()],p=[];for(let o=0;o<t.length;o+=1)p[o]=zt(Ht(h,t,o));return{c(){for(let o=0;o<p.length;o+=1)p[o].c();n=Me()},l(o){for(let c=0;c<p.length;c+=1)p[c].l(o);n=Me()},m(o,c){for(let g=0;g<p.length;g+=1)p[g]&&p[g].m(o,c);k(o,n,c),l=!0},p:_e,i(o){if(!l){for(let c=0;c<t.length;c+=1)W(p[c]);l=!0}},o(o){p=p.filter(Boolean);for(let c=0;c<p.length;c+=1)D(p[c]);l=!1},d(o){kt(p,o),o&&s(n)}}}function Tt(h){let n,l;return n=new ht({props:{breakpoints:[{maxWidth:980,cols:3,spacing:"md"},{maxWidth:755,cols:2,spacing:"sm"},{maxWidth:600,cols:1,spacing:"sm"}],cols:3,$$slots:{default:[Rt]},$$scope:{ctx:h}}}),{c(){ee(n.$$.fragment)},l(t){se(n.$$.fragment,t)},m(t,p){te(n,t,p),l=!0},p(t,[p]){const o={};p&8&&(o.$$scope={dirty:p,ctx:t}),n.$set(o)},i(t){l||(W(n.$$.fragment,t),l=!0)},o(t){D(n.$$.fragment,t),l=!1},d(t){ae(n,t)}}}const Mt=`<script>
	import { SimpleGrid } from '@svelteuidev/core';
<\/script>

<SimpleGrid
    breakpoints={[
        { maxWidth: 980, cols: 3, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' }
    ]}
    cols={3}
>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
</SimpleGrid>
`,Ut="demo",Vt={code:Mt};class Yt extends Ms{constructor(n){super(),Us(this,n,null,Tt,Vs,{})}}const Jt=Object.freeze(Object.defineProperty({__proto__:null,configuration:Vt,default:Yt,type:Ut},Symbol.toStringTag,{value:"Module"}));function Xt(h){let n,l,t,p,o,c,g,Ue,ge,L,$e,z,Ve,be,y,Ye,ne,Je,Xe,we,b,x,oe,Fe,Ke,pe,Ne,Qe,Ze,R,le,es,ss,ts,T,re,as,ns,Ee,M,os,ye,P,xe,U,ps,Se,$,E,ls,ie,rs,is,ce,cs,us,fs,V,ms,ue,ds,ks,Y,hs,fe,vs,_s,J,gs,me,$s,Ge,X,bs,Ce,S,ws,de,Es,ys,Ie,j,_t=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SimpleGrid</span>
	<span class="token attr-name">breakpoints=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">[</span>
		<span class="token punctuation">&#123;</span> <span class="token literal-property property">minWidth</span><span class="token operator">:</span> <span class="token string">'sm'</span><span class="token punctuation">,</span> <span class="token literal-property property">cols</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span> <span class="token literal-property property">minWidth</span><span class="token operator">:</span> <span class="token string">'md'</span><span class="token punctuation">,</span> <span class="token literal-property property">cols</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span> <span class="token literal-property property">minWidth</span><span class="token operator">:</span> <span class="token number">1200</span><span class="token punctuation">,</span> <span class="token literal-property property">cols</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">&#125;</span>
	<span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
<span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SimpleGrid</span><span class="token punctuation">></span></span></code>`,Oe,F,xs,We,G,Ss,ke,Gs,Cs,De,B,gt=`<code class="language-svelte">// xl spacing from theme.spacing
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SimpleGrid</span> <span class="token attr-name">spacing</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xl<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>; // 12px spacing
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SimpleGrid</span> <span class="token attr-name">spacing=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">12</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>;</code>`,Le,C,Is,he,Os,Ws,Pe,A,$t=`<code class="language-svelte">// theme.spacing.xl
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SimpleGrid</span> <span class="token attr-name">breakpoints=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">maxWidth</span><span class="token operator">:</span> <span class="token number">755</span><span class="token punctuation">,</span> <span class="token literal-property property">cols</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">spacing</span><span class="token operator">:</span> <span class="token string">'xl'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>; // 12px spacing
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SimpleGrid</span> <span class="token attr-name">breakpoints=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">maxWidth</span><span class="token operator">:</span> <span class="token number">755</span><span class="token punctuation">,</span> <span class="token literal-property property">cols</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">spacing</span><span class="token operator">:</span> <span class="token number">12</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>;</code>`,je,K,Ds,Be,w,Ls,H,Ps,js,q,Bs,As,Ae;return L=new dt({props:{demo:At}}),P=new dt({props:{demo:Jt}}),{c(){n=f("h2"),l=r("Usage"),t=v(),p=f("p"),o=r("SimpleGrid is a simple flexbox container where each child is treated as a column. Each column takes equal amount of space and unlike "),c=f("a"),g=r("Grid"),Ue=r(" component, you do not control column span. Instead, you specify number of columns per row:"),ge=v(),ee(L.$$.fragment),$e=v(),z=f("h2"),Ve=r("Breakpoints"),be=v(),y=f("p"),Ye=r("Provide an array to "),ne=f("code"),Je=r("breakpoints"),Xe=r(" prop to define responsive behavior:"),we=v(),b=f("ul"),x=f("li"),oe=f("code"),Fe=r("maxWidth"),Ke=r(" or "),pe=f("code"),Ne=r("minWidth"),Qe=r(" - max-width or min-width at which media query will work"),Ze=v(),R=f("li"),le=f("code"),es=r("cols"),ss=r(" - number of columns per row at given max-width"),ts=v(),T=f("li"),re=f("code"),as=r("spacing"),ns=r(" - optional spacing at given max-width, if not provided spacing from component prop will be used instead"),Ee=v(),M=f("p"),os=r("Resize browser to see breakpoints behavior:"),ye=v(),ee(P.$$.fragment),xe=v(),U=f("p"),ps=r("In this example:"),Se=v(),$=f("ul"),E=f("li"),ls=r("If screen width is more than 980px then component "),ie=f("code"),rs=r("cols"),is=r(" and "),ce=f("code"),cs=r("spacing"),us=r(" is used - 4 columns, lg spacing"),fs=v(),V=f("li"),ms=r("If screen width is less than 980px, more than 755px and the no of columns is 3, then the spacing will be "),ue=f("code"),ds=r("sm"),ks=v(),Y=f("li"),hs=r("If screen width is less than 755px, more than 600px and the no of columns is 2, then the spacing will be "),fe=f("code"),vs=r("sm"),_s=v(),J=f("li"),gs=r("If screen width is less than 600px and the no of columns is 1, then the spacing will be "),me=f("code"),$s=r("sm"),Ge=v(),X=f("h2"),bs=r("min-width breakpoints"),Ce=v(),S=f("p"),ws=r("If you prefer a mobile first approach, you can use "),de=f("code"),Es=r("min-width"),ys=r(" breakpoints:"),Ie=v(),j=f("pre"),Oe=v(),F=f("h2"),xs=r("Spacing"),We=v(),G=f("p"),Ss=r("You can use either "),ke=f("code"),Gs=r("theme.spacing"),Cs=r(" value or number value for spacing in px:"),De=v(),B=f("pre"),Le=v(),C=f("p"),Is=r("Spacing also works in "),he=f("code"),Os=r("breakpoints"),Ws=r(":"),Pe=v(),A=f("pre"),je=v(),K=f("h2"),Ds=r("Browser support"),Be=v(),w=f("p"),Ls=r("Simple grid uses "),H=f("a"),Ps=r("CSS Grid Layout"),js=r(`,
check `),q=f("a"),Bs=r("caniuse"),As=r(" to find out information about browser support."),this.h()},l(e){n=m(e,"H2",{});var u=d(n);l=i(u,"Usage"),u.forEach(s),t=_(e),p=m(e,"P",{});var He=d(p);o=i(He,"SimpleGrid is a simple flexbox container where each child is treated as a column. Each column takes equal amount of space and unlike "),c=m(He,"A",{href:!0});var Ys=d(c);g=i(Ys,"Grid"),Ys.forEach(s),Ue=i(He," component, you do not control column span. Instead, you specify number of columns per row:"),He.forEach(s),ge=_(e),se(L.$$.fragment,e),$e=_(e),z=m(e,"H2",{});var Js=d(z);Ve=i(Js,"Breakpoints"),Js.forEach(s),be=_(e),y=m(e,"P",{});var qe=d(y);Ye=i(qe,"Provide an array to "),ne=m(qe,"CODE",{});var Xs=d(ne);Je=i(Xs,"breakpoints"),Xs.forEach(s),Xe=i(qe," prop to define responsive behavior:"),qe.forEach(s),we=_(e),b=m(e,"UL",{});var N=d(b);x=m(N,"LI",{});var ve=d(x);oe=m(ve,"CODE",{});var Fs=d(oe);Fe=i(Fs,"maxWidth"),Fs.forEach(s),Ke=i(ve," or "),pe=m(ve,"CODE",{});var Ks=d(pe);Ne=i(Ks,"minWidth"),Ks.forEach(s),Qe=i(ve," - max-width or min-width at which media query will work"),ve.forEach(s),Ze=_(N),R=m(N,"LI",{});var Hs=d(R);le=m(Hs,"CODE",{});var Ns=d(le);es=i(Ns,"cols"),Ns.forEach(s),ss=i(Hs," - number of columns per row at given max-width"),Hs.forEach(s),ts=_(N),T=m(N,"LI",{});var qs=d(T);re=m(qs,"CODE",{});var Qs=d(re);as=i(Qs,"spacing"),Qs.forEach(s),ns=i(qs," - optional spacing at given max-width, if not provided spacing from component prop will be used instead"),qs.forEach(s),N.forEach(s),Ee=_(e),M=m(e,"P",{});var Zs=d(M);os=i(Zs,"Resize browser to see breakpoints behavior:"),Zs.forEach(s),ye=_(e),se(P.$$.fragment,e),xe=_(e),U=m(e,"P",{});var et=d(U);ps=i(et,"In this example:"),et.forEach(s),Se=_(e),$=m(e,"UL",{});var I=d($);E=m(I,"LI",{});var Q=d(E);ls=i(Q,"If screen width is more than 980px then component "),ie=m(Q,"CODE",{});var st=d(ie);rs=i(st,"cols"),st.forEach(s),is=i(Q," and "),ce=m(Q,"CODE",{});var tt=d(ce);cs=i(tt,"spacing"),tt.forEach(s),us=i(Q," is used - 4 columns, lg spacing"),Q.forEach(s),fs=_(I),V=m(I,"LI",{});var zs=d(V);ms=i(zs,"If screen width is less than 980px, more than 755px and the no of columns is 3, then the spacing will be "),ue=m(zs,"CODE",{});var at=d(ue);ds=i(at,"sm"),at.forEach(s),zs.forEach(s),ks=_(I),Y=m(I,"LI",{});var Rs=d(Y);hs=i(Rs,"If screen width is less than 755px, more than 600px and the no of columns is 2, then the spacing will be "),fe=m(Rs,"CODE",{});var nt=d(fe);vs=i(nt,"sm"),nt.forEach(s),Rs.forEach(s),_s=_(I),J=m(I,"LI",{});var Ts=d(J);gs=i(Ts,"If screen width is less than 600px and the no of columns is 1, then the spacing will be "),me=m(Ts,"CODE",{});var ot=d(me);$s=i(ot,"sm"),ot.forEach(s),Ts.forEach(s),I.forEach(s),Ge=_(e),X=m(e,"H2",{});var pt=d(X);bs=i(pt,"min-width breakpoints"),pt.forEach(s),Ce=_(e),S=m(e,"P",{});var ze=d(S);ws=i(ze,"If you prefer a mobile first approach, you can use "),de=m(ze,"CODE",{});var lt=d(de);Es=i(lt,"min-width"),lt.forEach(s),ys=i(ze," breakpoints:"),ze.forEach(s),Ie=_(e),j=m(e,"PRE",{class:!0});var bt=d(j);bt.forEach(s),Oe=_(e),F=m(e,"H2",{});var rt=d(F);xs=i(rt,"Spacing"),rt.forEach(s),We=_(e),G=m(e,"P",{});var Re=d(G);Ss=i(Re,"You can use either "),ke=m(Re,"CODE",{});var it=d(ke);Gs=i(it,"theme.spacing"),it.forEach(s),Cs=i(Re," value or number value for spacing in px:"),Re.forEach(s),De=_(e),B=m(e,"PRE",{class:!0});var wt=d(B);wt.forEach(s),Le=_(e),C=m(e,"P",{});var Te=d(C);Is=i(Te,"Spacing also works in "),he=m(Te,"CODE",{});var ct=d(he);Os=i(ct,"breakpoints"),ct.forEach(s),Ws=i(Te,":"),Te.forEach(s),Pe=_(e),A=m(e,"PRE",{class:!0});var Et=d(A);Et.forEach(s),je=_(e),K=m(e,"H2",{});var ut=d(K);Ds=i(ut,"Browser support"),ut.forEach(s),Be=_(e),w=m(e,"P",{});var Z=d(w);Ls=i(Z,"Simple grid uses "),H=m(Z,"A",{href:!0,rel:!0});var ft=d(H);Ps=i(ft,"CSS Grid Layout"),ft.forEach(s),js=i(Z,`,
check `),q=m(Z,"A",{href:!0,rel:!0});var mt=d(q);Bs=i(mt,"caniuse"),mt.forEach(s),As=i(Z," to find out information about browser support."),Z.forEach(s),this.h()},h(){O(c,"href","/core/grid/"),O(j,"class","language-svelte"),O(B,"class","language-svelte"),O(A,"class","language-svelte"),O(H,"href","https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"),O(H,"rel","nofollow"),O(q,"href","https://caniuse.com/css-grid"),O(q,"rel","nofollow")},m(e,u){k(e,n,u),a(n,l),k(e,t,u),k(e,p,u),a(p,o),a(p,c),a(c,g),a(p,Ue),k(e,ge,u),te(L,e,u),k(e,$e,u),k(e,z,u),a(z,Ve),k(e,be,u),k(e,y,u),a(y,Ye),a(y,ne),a(ne,Je),a(y,Xe),k(e,we,u),k(e,b,u),a(b,x),a(x,oe),a(oe,Fe),a(x,Ke),a(x,pe),a(pe,Ne),a(x,Qe),a(b,Ze),a(b,R),a(R,le),a(le,es),a(R,ss),a(b,ts),a(b,T),a(T,re),a(re,as),a(T,ns),k(e,Ee,u),k(e,M,u),a(M,os),k(e,ye,u),te(P,e,u),k(e,xe,u),k(e,U,u),a(U,ps),k(e,Se,u),k(e,$,u),a($,E),a(E,ls),a(E,ie),a(ie,rs),a(E,is),a(E,ce),a(ce,cs),a(E,us),a($,fs),a($,V),a(V,ms),a(V,ue),a(ue,ds),a($,ks),a($,Y),a(Y,hs),a(Y,fe),a(fe,vs),a($,_s),a($,J),a(J,gs),a(J,me),a(me,$s),k(e,Ge,u),k(e,X,u),a(X,bs),k(e,Ce,u),k(e,S,u),a(S,ws),a(S,de),a(de,Es),a(S,ys),k(e,Ie,u),k(e,j,u),j.innerHTML=_t,k(e,Oe,u),k(e,F,u),a(F,xs),k(e,We,u),k(e,G,u),a(G,Ss),a(G,ke),a(ke,Gs),a(G,Cs),k(e,De,u),k(e,B,u),B.innerHTML=gt,k(e,Le,u),k(e,C,u),a(C,Is),a(C,he),a(he,Os),a(C,Ws),k(e,Pe,u),k(e,A,u),A.innerHTML=$t,k(e,je,u),k(e,K,u),a(K,Ds),k(e,Be,u),k(e,w,u),a(w,Ls),a(w,H),a(H,Ps),a(w,js),a(w,q),a(q,Bs),a(w,As),Ae=!0},p:_e,i(e){Ae||(W(L.$$.fragment,e),W(P.$$.fragment,e),Ae=!0)},o(e){D(L.$$.fragment,e),D(P.$$.fragment,e),Ae=!1},d(e){e&&s(n),e&&s(t),e&&s(p),e&&s(ge),ae(L,e),e&&s($e),e&&s(z),e&&s(be),e&&s(y),e&&s(we),e&&s(b),e&&s(Ee),e&&s(M),e&&s(ye),ae(P,e),e&&s(xe),e&&s(U),e&&s(Se),e&&s($),e&&s(Ge),e&&s(X),e&&s(Ce),e&&s(S),e&&s(Ie),e&&s(j),e&&s(Oe),e&&s(F),e&&s(We),e&&s(G),e&&s(De),e&&s(B),e&&s(Le),e&&s(C),e&&s(Pe),e&&s(A),e&&s(je),e&&s(K),e&&s(Be),e&&s(w)}}}const Zt={title:"SimpleGrid",group:"svelteuidev-core",packageGroup:"@svelteuidev/core",slug:"/core/simple-grid/",category:"layout",description:"Responsive grid where each item takes equal amount of space",importCode:"import { SimpleGrid } from '@svelteuidev/core';",source:"svelteui-core/src/components/SimpleGrid/SimpleGrid.svelte",docs:"core/simple-grid.md"};class ea extends Ms{constructor(n){super(),Us(this,n,null,Xt,Vs,{})}}export{ea as default,Zt as metadata};
