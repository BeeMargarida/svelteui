import{S as ae,i as se,s as oe,y as ct,z as ut,A as ft,g as M,d as B,B as dt,k as p,a as h,l as c,m as u,h as e,c as b,b as k,v as ce,f as ue,q as _,r as v,Y as o,_ as fe,$ as de,a0 as me,u as ke,al as _e,n as te}from"../chunks/index.b0fe5a0f.js";import{G as ve}from"../chunks/navigation.9bd98935.js";import{H as he}from"../chunks/Heading.19c03976.js";import{D as be}from"../chunks/Demo.82a35c94.js";import{B as ye}from"../chunks/Button.36168772.js";function ee(m,{delay:a=0,duration:l=400,easing:n}){const i="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",s=m.textContent.trim();let r=0;return{delay:a,duration:l,easing:n,tick(f){if(f===1){m.textContent=s;return}const y=Date.now();if(y-r<32)return;r=y;let T="";for(let g=0;g<s.length;g++){const $=g/s.length;s[g]===" "||$<f*.9?T+=s[g]:$<f*1.5?T+=i[Math.floor(Math.random()*i.length)]:$<f*2?T+="-":T+=" "}m.textContent=T}}}function ne(m){let a,l,n,i,s;return{c(){a=p("p"),l=_("Now the transition is playing")},l(r){a=c(r,"P",{});var f=u(a);l=v(f,"Now the transition is playing"),f.forEach(e)},m(r,f){k(r,a,f),o(a,l),s=!0},p(r,f){m=r},i(r){s||(fe(()=>{s&&(i&&i.end(1),n=de(a,ee,m[0]),n.start())}),s=!0)},o(r){n&&n.invalidate(),i=me(a,ee,{duration:200}),s=!1},d(r){r&&e(a),r&&i&&i.end()}}}function $e(m){let a=m[1]?"Stop Transition":"Play Transition",l;return{c(){l=_(a)},l(n){l=v(n,a)},m(n,i){k(n,l,i)},p(n,i){i&2&&a!==(a=n[1]?"Stop Transition":"Play Transition")&&ke(l,a)},d(n){n&&e(l)}}}function ge(m){let a,l,n,i,s=m[1]&&ne(m);return n=new ye({props:{$$slots:{default:[$e]},$$scope:{ctx:m}}}),n.$on("click",m[2]),{c(){a=p("div"),s&&s.c(),l=h(),ct(n.$$.fragment)},l(r){a=c(r,"DIV",{});var f=u(a);s&&s.l(f),f.forEach(e),l=b(r),ut(n.$$.fragment,r)},m(r,f){k(r,a,f),s&&s.m(a,null),k(r,l,f),ft(n,r,f),i=!0},p(r,f){r[1]?s?f&2&&M(s,1):(s=ne(r),s.c(),M(s,1),s.m(a,null)):s&&(ce(),B(s,1,1,()=>{s=null}),ue());const y={};f&10&&(y.$$scope={dirty:f,ctx:r}),n.$set(y)},i(r){i||(M(s),M(n.$$.fragment,r),i=!0)},o(r){B(s),B(n.$$.fragment,r),i=!1},d(r){r&&e(a),s&&s.d(),r&&e(l),dt(n,r)}}}function Ee(m){let a,l;return a=new ve({props:{direction:"column",$$slots:{default:[ge]},$$scope:{ctx:m}}}),{c(){ct(a.$$.fragment)},l(n){ut(a.$$.fragment,n)},m(n,i){ft(a,n,i),l=!0},p(n,[i]){const s={};i&10&&(s.$$scope={dirty:i,ctx:n}),a.$set(s)},i(n){l||(M(a.$$.fragment,n),l=!0)},o(n){B(a.$$.fragment,n),l=!1},d(n){dt(a,n)}}}function Te(m){return m.replaceAll("=",": ").replaceAll("{","").replaceAll("}","")}const we=m=>`
<script>
  import { flipboard } from '@svelteuidev/motion';
<\/script>

<p in:flipboard={{${Te(m)}}}>Now the transition is playing</p>
`,De="configurator",Pe={codeTemplate:we,configurator:[{name:"duration",type:"number",initialValue:400,defaultValue:200,min:100},{name:"delay",type:"number",initialValue:0,defaultValue:0,min:0}]};function Ae(m,a,l){let n=!1;const i=()=>{l(1,n=!n)};let{props:s={}}=a;return m.$$set=r=>{"props"in r&&l(0,s=r.props)},[s,n,i]}class He extends ae{constructor(a){super(),se(this,a,Ae,Ee,oe,{props:0})}}const xe=Object.freeze(Object.defineProperty({__proto__:null,configuration:Pe,default:He,type:De},Symbol.toStringTag,{value:"Module"}));function Ce(m){let a,l,n,i,s,r,f,y,T,g,$,X,O,mt,Z,D,I,P,U,kt,_t,G,vt,ht,w,A,L,bt,yt,Y,$t,gt,H,N,Et,Tt,J,wt,Dt,x,W,Pt,At,q,Ht,tt,S,xt,et,E,Ct,z,Ft,Mt,K,Ot,St,nt,C,re=`<code class="language-js"><span class="token keyword">import</span> type <span class="token punctuation">&#123;</span> FlipboardParams <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@svelteuidev/motion'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">FlipboardParams</span> <span class="token punctuation">&#123;</span>
    delay<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    duration<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    easing<span class="token operator">?</span><span class="token operator">:</span> EasingFunction<span class="token punctuation">;</span>
    css<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">t</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">u</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=></span> string<span class="token punctuation">;</span>
    tick<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">t</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">u</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,at,j,jt,st,F,le='<code class="language-js"><span class="token keyword">function</span> <span class="token function">flipboard</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">node</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> delay<span class="token punctuation">,</span> duration<span class="token punctuation">,</span> easing <span class="token punctuation">&#125;</span><span class="token operator">:</span> FlipboardParams</span><span class="token punctuation">)</span><span class="token operator">:</span> TransitionConfig<span class="token punctuation">;</span></code>',Q;return document.title=a=Rt+" - SvelteUI",n=new he({props:{title:Rt,group:Me,packageGroup:Oe,category:Se,description:je,importCode:Re,source:Ve,docs:Be}}),$=new be({props:{demo:xe}}),{c(){l=h(),ct(n.$$.fragment),i=h(),s=p("h2"),r=_("Usage"),f=h(),y=p("p"),T=_("The flipboard transition displays text with a glitch like effect. Just like every other transition, it is triggered by an element entering or leaving the DOM as a result of a state change. If you attempt to use the flipboard transition on non text nodes, it will result in an error."),g=h(),ct($.$$.fragment),X=h(),O=p("h2"),mt=_("Params"),Z=h(),D=p("table"),I=p("thead"),P=p("tr"),U=p("th"),kt=_("Param"),_t=h(),G=p("th"),vt=_("Description"),ht=h(),w=p("tbody"),A=p("tr"),L=p("td"),bt=_("delay"),yt=h(),Y=p("td"),$t=_("A number representing the duration before the transition starts (in milliseconds)"),gt=h(),H=p("tr"),N=p("td"),Et=_("duration"),Tt=h(),J=p("td"),wt=_("A number representing the duration of the transition (in milliseconds)"),Dt=h(),x=p("tr"),W=p("td"),Pt=_("easing"),At=h(),q=p("td"),Ht=_("An easing function to be applied to the transition. Works with svelte easing and custom easing functions"),tt=h(),S=p("h2"),xt=_("Typescript"),et=h(),E=p("p"),Ct=_("You can import "),z=p("code"),Ft=_("FlipboardParams"),Mt=_(" interface type from "),K=p("code"),Ot=_("@svelteuidev/motion"),St=_(":"),nt=h(),C=p("pre"),at=h(),j=p("h2"),jt=_("Definition"),st=h(),F=p("pre"),this.h()},l(t){_e("svelte-pki6ul",document.head).forEach(e),l=b(t),ut(n.$$.fragment,t),i=b(t),s=c(t,"H2",{});var Vt=u(s);r=v(Vt,"Usage"),Vt.forEach(e),f=b(t),y=c(t,"P",{});var Bt=u(y);T=v(Bt,"The flipboard transition displays text with a glitch like effect. Just like every other transition, it is triggered by an element entering or leaving the DOM as a result of a state change. If you attempt to use the flipboard transition on non text nodes, it will result in an error."),Bt.forEach(e),g=b(t),ut($.$$.fragment,t),X=b(t),O=c(t,"H2",{});var It=u(O);mt=v(It,"Params"),It.forEach(e),Z=b(t),D=c(t,"TABLE",{});var ot=u(D);I=c(ot,"THEAD",{});var Ut=u(I);P=c(Ut,"TR",{});var rt=u(P);U=c(rt,"TH",{});var Gt=u(U);kt=v(Gt,"Param"),Gt.forEach(e),_t=b(rt),G=c(rt,"TH",{});var Lt=u(G);vt=v(Lt,"Description"),Lt.forEach(e),rt.forEach(e),Ut.forEach(e),ht=b(ot),w=c(ot,"TBODY",{});var R=u(w);A=c(R,"TR",{});var lt=u(A);L=c(lt,"TD",{});var Yt=u(L);bt=v(Yt,"delay"),Yt.forEach(e),yt=b(lt),Y=c(lt,"TD",{});var Nt=u(Y);$t=v(Nt,"A number representing the duration before the transition starts (in milliseconds)"),Nt.forEach(e),lt.forEach(e),gt=b(R),H=c(R,"TR",{});var it=u(H);N=c(it,"TD",{});var Jt=u(N);Et=v(Jt,"duration"),Jt.forEach(e),Tt=b(it),J=c(it,"TD",{});var Wt=u(J);wt=v(Wt,"A number representing the duration of the transition (in milliseconds)"),Wt.forEach(e),it.forEach(e),Dt=b(R),x=c(R,"TR",{});var pt=u(x);W=c(pt,"TD",{});var qt=u(W);Pt=v(qt,"easing"),qt.forEach(e),At=b(pt),q=c(pt,"TD",{});var zt=u(q);Ht=v(zt,"An easing function to be applied to the transition. Works with svelte easing and custom easing functions"),zt.forEach(e),pt.forEach(e),R.forEach(e),ot.forEach(e),tt=b(t),S=c(t,"H2",{});var Kt=u(S);xt=v(Kt,"Typescript"),Kt.forEach(e),et=b(t),E=c(t,"P",{});var V=u(E);Ct=v(V,"You can import "),z=c(V,"CODE",{});var Qt=u(z);Ft=v(Qt,"FlipboardParams"),Qt.forEach(e),Mt=v(V," interface type from "),K=c(V,"CODE",{});var Xt=u(K);Ot=v(Xt,"@svelteuidev/motion"),Xt.forEach(e),St=v(V,":"),V.forEach(e),nt=b(t),C=c(t,"PRE",{class:!0});var ie=u(C);ie.forEach(e),at=b(t),j=c(t,"H2",{});var Zt=u(j);jt=v(Zt,"Definition"),Zt.forEach(e),st=b(t),F=c(t,"PRE",{class:!0});var pe=u(F);pe.forEach(e),this.h()},h(){te(C,"class","language-js"),te(F,"class","language-js")},m(t,d){k(t,l,d),ft(n,t,d),k(t,i,d),k(t,s,d),o(s,r),k(t,f,d),k(t,y,d),o(y,T),k(t,g,d),ft($,t,d),k(t,X,d),k(t,O,d),o(O,mt),k(t,Z,d),k(t,D,d),o(D,I),o(I,P),o(P,U),o(U,kt),o(P,_t),o(P,G),o(G,vt),o(D,ht),o(D,w),o(w,A),o(A,L),o(L,bt),o(A,yt),o(A,Y),o(Y,$t),o(w,gt),o(w,H),o(H,N),o(N,Et),o(H,Tt),o(H,J),o(J,wt),o(w,Dt),o(w,x),o(x,W),o(W,Pt),o(x,At),o(x,q),o(q,Ht),k(t,tt,d),k(t,S,d),o(S,xt),k(t,et,d),k(t,E,d),o(E,Ct),o(E,z),o(z,Ft),o(E,Mt),o(E,K),o(K,Ot),o(E,St),k(t,nt,d),k(t,C,d),C.innerHTML=re,k(t,at,d),k(t,j,d),o(j,jt),k(t,st,d),k(t,F,d),F.innerHTML=le,Q=!0},p(t,[d]){(!Q||d&0)&&a!==(a=Rt+" - SvelteUI")&&(document.title=a)},i(t){Q||(M(n.$$.fragment,t),M($.$$.fragment,t),Q=!0)},o(t){B(n.$$.fragment,t),B($.$$.fragment,t),Q=!1},d(t){t&&e(l),dt(n,t),t&&e(i),t&&e(s),t&&e(f),t&&e(y),t&&e(g),dt($,t),t&&e(X),t&&e(O),t&&e(Z),t&&e(D),t&&e(tt),t&&e(S),t&&e(et),t&&e(E),t&&e(nt),t&&e(C),t&&e(at),t&&e(j),t&&e(st),t&&e(F)}}}const Fe={title:"Flipboard",group:"svelteuidev-motion",packageGroup:"@svelteuidev/motion",category:"transitions",description:"Flipboard transition effect for text",importCode:"import { flipboard } from '@svelteuidev/motion';",source:"svelteui-motion/src/lib/dist/transitions/flipboard/flipboard.ts",docs:"motion/flipboard.md"},{title:Rt,group:Me,packageGroup:Oe,category:Se,description:je,importCode:Re,source:Ve,docs:Be}=Fe;class Ne extends ae{constructor(a){super(),se(this,a,null,Ce,oe,{})}}export{Ne as default,Fe as metadata};
