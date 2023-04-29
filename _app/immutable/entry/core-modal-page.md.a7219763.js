import{S as fe,i as ue,s as de,y as M,a as k,z as E,c as b,A as O,b as u,g as w,d as y,B as C,h as n,q as $,r as m,C as $e,e as G,v as Uo,at as xo,f as Ao,au as Yo,a3 as Lo,k as _,l as v,m as h,Y as f,al as Wo,n as ot}from"../chunks/index.b0fe5a0f.js";import{I as Go}from"../chunks/InfoCircled.ebf34b61.js";import{G as eo,a as Ro,T as Fo}from"../chunks/navigation.fd10cd14.js";import{H as No}from"../chunks/Heading.bb67d8e2.js";import{b as qo}from"../chunks/paths.605af923.js";import{D as pe}from"../chunks/Demo.e6142117.js";import{A as Zo}from"../chunks/Alert.57bce949.js";import{a as to,M as Jo}from"../chunks/Modal.demo.usage.d5a18959.js";import{M as Xt}from"../chunks/Modal.a1ee486c.js";import{B as lt}from"../chunks/Button.a7c0fda0.js";function Ko(i){let t;return{c(){t=$("Modal without header, press escape or click on overlay to close")},l(s){t=m(s,"Modal without header, press escape or click on overlay to close")},m(s,e){u(s,t,e)},d(s){s&&n(t)}}}function Qo(i){let t;return{c(){t=$("Open Modal")},l(s){t=m(s,"Open Modal")},m(s,e){u(s,t,e)},d(s){s&&n(t)}}}function Vo(i){let t,s;return t=new lt({props:{$$slots:{default:[Qo]},$$scope:{ctx:i}}}),t.$on("click",i[2]),{c(){M(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){O(t,e,a),s=!0},p(e,a){const l={};a&8&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){s||(w(t.$$.fragment,e),s=!0)},o(e){y(t.$$.fragment,e),s=!1},d(e){C(t,e)}}}function Xo(i){let t,s,e,a;return t=new Xt({props:{opened:i[0],withCloseButton:!1,$$slots:{default:[Ko]},$$scope:{ctx:i}}}),t.$on("close",i[1]),e=new eo({props:{position:"center",$$slots:{default:[Vo]},$$scope:{ctx:i}}}),{c(){M(t.$$.fragment),s=k(),M(e.$$.fragment)},l(l){E(t.$$.fragment,l),s=b(l),E(e.$$.fragment,l)},m(l,r){O(t,l,r),u(l,s,r),O(e,l,r),a=!0},p(l,[r]){const c={};r&1&&(c.opened=l[0]),r&8&&(c.$$scope={dirty:r,ctx:l}),t.$set(c);const p={};r&9&&(p.$$scope={dirty:r,ctx:l}),e.$set(p)},i(l){a||(w(t.$$.fragment,l),w(e.$$.fragment,l),a=!0)},o(l){y(t.$$.fragment,l),y(e.$$.fragment,l),a=!1},d(l){C(t,l),l&&n(s),C(e,l)}}}const el=`
<script>
	import { Modal } from '@svelteuidev/core';
<\/script>

<Modal withCloseButton={false}>
	Modal without header, press escape or click on overlay to close
</Modal>
`,tl="demo",ol={code:el};function ll(i,t,s){let e;return[e,()=>s(0,e=!1),()=>s(0,e=!0)]}class sl extends fe{constructor(t){super(),ue(this,t,ll,Xo,de,{})}}const al=Object.freeze(Object.defineProperty({__proto__:null,configuration:ol,default:sl,type:tl},Symbol.toStringTag,{value:"Module"}));function nl(i){let t,s;return t=new to({props:{centered:!0}}),{c(){M(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){O(t,e,a),s=!0},p:$e,i(e){s||(w(t.$$.fragment,e),s=!0)},o(e){y(t.$$.fragment,e),s=!1},d(e){C(t,e)}}}const rl=`
<script>
	import { Modal } from '@svelteuidev/core';
<\/script>

<Modal centered /* other props */>
	<!-- Modal Content -->
</Modal>
`,cl="demo",il={code:rl};class pl extends fe{constructor(t){super(),ue(this,t,null,nl,de,{})}}const fl=Object.freeze(Object.defineProperty({__proto__:null,configuration:il,default:pl,type:cl},Symbol.toStringTag,{value:"Module"}));function Co(i,t,s){const e=i.slice();return e[6]=t[s],e}function ul(i){let t=(typeof i[6]=="number"?`${i[6]}px`:i[6])+"",s,e;return{c(){s=$(t),e=k()},l(a){s=m(a,t),e=b(a)},m(a,l){u(a,s,l),u(a,e,l)},p:$e,d(a){a&&n(s),a&&n(e)}}}function zo(i,t){let s,e,a;function l(){return t[4](t[6])}return e=new lt({props:{variant:"outline",$$slots:{default:[ul]},$$scope:{ctx:t}}}),e.$on("click",l),{key:i,first:null,c(){s=G(),M(e.$$.fragment),this.h()},l(r){s=G(),E(e.$$.fragment,r),this.h()},h(){this.first=s},m(r,c){u(r,s,c),O(e,r,c),a=!0},p(r,c){t=r;const p={};c&512&&(p.$$scope={dirty:c,ctx:t}),e.$set(p)},i(r){a||(w(e.$$.fragment,r),a=!0)},o(r){y(e.$$.fragment,r),a=!1},d(r){r&&n(s),C(e,r)}}}function dl(i){let t=[],s=new Map,e,a,l=i[3];const r=c=>c[6];for(let c=0;c<l.length;c+=1){let p=Co(i,l,c),z=r(p);s.set(z,t[c]=zo(z,p))}return{c(){for(let c=0;c<t.length;c+=1)t[c].c();e=G()},l(c){for(let p=0;p<t.length;p+=1)t[p].l(c);e=G()},m(c,p){for(let z=0;z<t.length;z+=1)t[z]&&t[z].m(c,p);u(c,e,p),a=!0},p(c,p){p&11&&(l=c[3],Uo(),t=xo(t,p,r,1,c,l,s,e.parentNode,Yo,zo,e,Co),Ao())},i(c){if(!a){for(let p=0;p<l.length;p+=1)w(t[p]);a=!0}},o(c){for(let p=0;p<t.length;p+=1)y(t[p]);a=!1},d(c){for(let p=0;p<t.length;p+=1)t[p].d(c);c&&n(e)}}}function $l(i){let t,s,e,a;return t=new eo({props:{position:"center",$$slots:{default:[dl]},$$scope:{ctx:i}}}),e=new to({props:{opened:i[1],closeModal:i[5],withOpenButton:!1,size:i[2]}}),{c(){M(t.$$.fragment),s=k(),M(e.$$.fragment)},l(l){E(t.$$.fragment,l),s=b(l),E(e.$$.fragment,l)},m(l,r){O(t,l,r),u(l,s,r),O(e,l,r),a=!0},p(l,[r]){const c={};r&515&&(c.$$scope={dirty:r,ctx:l}),t.$set(c);const p={};r&2&&(p.opened=l[1]),r&2&&(p.closeModal=l[5]),r&4&&(p.size=l[2]),e.$set(p)},i(l){a||(w(t.$$.fragment,l),w(e.$$.fragment,l),a=!0)},o(l){y(t.$$.fragment,l),y(e.$$.fragment,l),a=!1},d(l){C(t,l),l&&n(s),C(e,l)}}}const ml="demo",_l={toggle:!0};function vl(i,t,s){let e,a,l;const r=["xs","sm","md","lg","xl","full",322,"70%"],c=z=>{s(0,a=z),s(1,l=!0)},p=()=>s(1,l=!1);return i.$$.update=()=>{i.$$.dirty&1&&s(2,e=a)},[a,l,e,r,c,p]}class hl extends fe{constructor(t){super(),ue(this,t,vl,$l,de,{})}}const kl=Object.freeze(Object.defineProperty({__proto__:null,configuration:_l,default:hl,type:ml},Symbol.toStringTag,{value:"Module"}));function bl(i){let t,s;return t=new to({props:{overlayColor:i[0].colors.gray200.value,overlayOpacity:.55,overlayBlur:3}}),{c(){M(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){O(t,e,a),s=!0},p:$e,i(e){s||(w(t.$$.fragment,e),s=!0)},o(e){y(t.$$.fragment,e),s=!1},d(e){C(t,e)}}}const gl=`
<script>
    import { Modal, useSvelteUITheme } from '@svelteuidev/core';
    
    const theme = useSvelteUITheme();
<\/script>
    
<Modal
    overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
    overlayOpacity={0.55}
    overlayBlur={3}
>
    {/* Modal content */}
</Modal>
`,wl="demo",yl={code:gl};function Ml(i){return[Ro()]}class El extends fe{constructor(t){super(),ue(this,t,Ml,bl,de,{})}}const Ol=Object.freeze(Object.defineProperty({__proto__:null,configuration:yl,default:El,type:wl},Symbol.toStringTag,{value:"Module"}));function Io(i,t,s){const e=i.slice();return e[6]=t[s],e}function So(i,t,s){const e=i.slice();return e[6]=t[s],e}function Po(i){let t,s=i[6]+"",e;return{c(){t=_("p"),e=$(s)},l(a){t=v(a,"P",{});var l=h(t);e=m(l,s),l.forEach(n)},m(a,l){u(a,t,l),f(t,e)},p:$e,d(a){a&&n(t)}}}function Cl(i){let t,s=st,e=[];for(let a=0;a<s.length;a+=1)e[a]=Po(So(i,s,a));return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=G()},l(a){for(let l=0;l<e.length;l+=1)e[l].l(a);t=G()},m(a,l){for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(a,l);u(a,t,l)},p(a,l){if(l&0){s=st;let r;for(r=0;r<s.length;r+=1){const c=So(a,s,r);e[r]?e[r].p(c,l):(e[r]=Po(c),e[r].c(),e[r].m(t.parentNode,t))}for(;r<e.length;r+=1)e[r].d(1);e.length=s.length}},d(a){Lo(e,a),a&&n(t)}}}function Do(i){let t,s=i[6]+"",e;return{c(){t=_("p"),e=$(s)},l(a){t=v(a,"P",{});var l=h(t);e=m(l,s),l.forEach(n)},m(a,l){u(a,t,l),f(t,e)},p:$e,d(a){a&&n(t)}}}function zl(i){let t,s=st,e=[];for(let a=0;a<s.length;a+=1)e[a]=Do(Io(i,s,a));return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=G()},l(a){for(let l=0;l<e.length;l+=1)e[l].l(a);t=G()},m(a,l){for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(a,l);u(a,t,l)},p(a,l){if(l&0){s=st;let r;for(r=0;r<s.length;r+=1){const c=Io(a,s,r);e[r]?e[r].p(c,l):(e[r]=Do(c),e[r].c(),e[r].m(t.parentNode,t))}for(;r<e.length;r+=1)e[r].d(1);e.length=s.length}},d(a){Lo(e,a),a&&n(t)}}}function Il(i){let t;return{c(){t=$("Outside overflow")},l(s){t=m(s,"Outside overflow")},m(s,e){u(s,t,e)},d(s){s&&n(t)}}}function Sl(i){let t;return{c(){t=$("Inside overflow")},l(s){t=m(s,"Inside overflow")},m(s,e){u(s,t,e)},d(s){s&&n(t)}}}function Pl(i){let t,s,e,a;return t=new lt({props:{color:"pink",$$slots:{default:[Il]},$$scope:{ctx:i}}}),t.$on("click",i[5]),e=new lt({props:{color:"cyan",$$slots:{default:[Sl]},$$scope:{ctx:i}}}),e.$on("click",i[4]),{c(){M(t.$$.fragment),s=k(),M(e.$$.fragment)},l(l){E(t.$$.fragment,l),s=b(l),E(e.$$.fragment,l)},m(l,r){O(t,l,r),u(l,s,r),O(e,l,r),a=!0},p(l,r){const c={};r&2048&&(c.$$scope={dirty:r,ctx:l}),t.$set(c);const p={};r&2048&&(p.$$scope={dirty:r,ctx:l}),e.$set(p)},i(l){a||(w(t.$$.fragment,l),w(e.$$.fragment,l),a=!0)},o(l){y(t.$$.fragment,l),y(e.$$.fragment,l),a=!1},d(l){C(t,l),l&&n(s),C(e,l)}}}function Dl(i){let t,s,e,a,l,r;return t=new Xt({props:{opened:i[1],title:"Please consider this",overflow:"outside",$$slots:{default:[Cl]},$$scope:{ctx:i}}}),t.$on("close",i[3]),e=new Xt({props:{opened:i[0],title:"Please consider this",overflow:"inside",$$slots:{default:[zl]},$$scope:{ctx:i}}}),e.$on("close",i[2]),l=new eo({props:{position:"center",$$slots:{default:[Pl]},$$scope:{ctx:i}}}),{c(){M(t.$$.fragment),s=k(),M(e.$$.fragment),a=k(),M(l.$$.fragment)},l(c){E(t.$$.fragment,c),s=b(c),E(e.$$.fragment,c),a=b(c),E(l.$$.fragment,c)},m(c,p){O(t,c,p),u(c,s,p),O(e,c,p),u(c,a,p),O(l,c,p),r=!0},p(c,[p]){const z={};p&2&&(z.opened=c[1]),p&2048&&(z.$$scope={dirty:p,ctx:c}),t.$set(z);const I={};p&1&&(I.opened=c[0]),p&2048&&(I.$$scope={dirty:p,ctx:c}),e.$set(I);const D={};p&2048&&(D.$$scope={dirty:p,ctx:c}),l.$set(D)},i(c){r||(w(t.$$.fragment,c),w(e.$$.fragment,c),w(l.$$.fragment,c),r=!0)},o(c){y(t.$$.fragment,c),y(e.$$.fragment,c),y(l.$$.fragment,c),r=!1},d(c){C(t,c),c&&n(s),C(e,c),c&&n(a),C(l,c)}}}const Ll=`
// (default) - overflow is handled by modal wrapper
<Modal overflow="outside" />

// overflow is handled by modal body
<Modal overflow="inside" />
`,Tl="demo",Hl={code:Ll},st=Array(100).fill(0).map((i,t)=>"Svelte is a complier");function Bl(i,t,s){let e=!1,a=!1;return[e,a,()=>s(0,e=!1),()=>s(1,a=!1),()=>s(0,e=!0),()=>s(1,a=!0)]}class jl extends fe{constructor(t){super(),ue(this,t,Bl,Dl,de,{})}}const Ul=Object.freeze(Object.defineProperty({__proto__:null,configuration:Hl,default:jl,type:Tl},Symbol.toStringTag,{value:"Module"}));function xl(i){let t,s,e,a,l,r,c,p,z="target={'body'}",I,D;return{c(){t=$("When using the Modal component it's important that you wrap your app in the "),s=_("a"),e=$("SvelteUIProvider"),a=$(". If for some reason you don't want to do that, you must change the "),l=_("code"),r=$("target"),c=$(" prop to something else. Such as "),p=_("code"),I=$(z),D=$("."),this.h()},l(g){t=m(g,"When using the Modal component it's important that you wrap your app in the "),s=v(g,"A",{href:!0});var S=h(s);e=m(S,"SvelteUIProvider"),S.forEach(n),a=m(g,". If for some reason you don't want to do that, you must change the "),l=v(g,"CODE",{});var R=h(l);r=m(R,"target"),R.forEach(n),c=m(g," prop to something else. Such as "),p=v(g,"CODE",{});var H=h(p);I=m(H,z),H.forEach(n),D=m(g,"."),this.h()},h(){ot(s,"href","theming/svelteui-provider")},m(g,S){u(g,t,S),u(g,s,S),f(s,e),u(g,a,S),u(g,l,S),f(l,r),u(g,c,S),u(g,p,S),f(p,I),u(g,D,S)},p:$e,d(g){g&&n(t),g&&n(s),g&&n(a),g&&n(l),g&&n(c),g&&n(p),g&&n(D)}}}function Al(i){let t,s;return t=new Fo({props:{override:{lineHeight:"1.6"},$$slots:{default:[xl]},$$scope:{ctx:i}}}),{c(){M(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){O(t,e,a),s=!0},p(e,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){s||(w(t.$$.fragment,e),s=!0)},o(e){y(t.$$.fragment,e),s=!1},d(e){C(t,e)}}}function Yl(i){let t,s,e,a,l,r,c,p,z,I,D,g,S,R,H,at,De,F,Le,V,nt,Te,N,He,X,rt,Be,L,ct,me,it,pt,_e,ft,ut,je,q,To=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> // -> predefined small size
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span> <span class="token attr-name">size=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">378</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span> // -> size in px
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>55%<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> // -> size in %
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>calc(100vw - 87px)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> // -> size with calc
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>255%<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> // -> max-width is set to 100%, won't work</code>`,Ue,Z,xe,ee,dt,Ae,U,$t,te,mt,_t,Ye,J,We,oe,vt,Ge,x,ht,ve,kt,bt,Re,K,Fe,le,gt,Ne,se,wt,qe,A,Y,he,yt,Mt,ke,Et,Ot,Ct,ae,be,zt,It,Ze,ne,St,Je,P,ge,Pt,Dt,we,Lt,Tt,ye,Ht,Bt,B,jt,Me,Ut,xt,Ee,At,Yt,Wt,j,Gt,Oe,Rt,Ft,Ce,Nt,qt,Ke,W,Zt,ze,Jt,Kt,Qe,Q,Ho=`<code class="language-svelte">// sets title attribute on close button
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span> <span class="token attr-name">closeButtonLabel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Close authentication modal<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code>`,Ie;return document.title=t=Vt+" - SvelteUI",e=new No({props:{title:Vt,group:Gl,packageGroup:Rl,slug:Fl,category:Nl,description:ql,importCode:Zl,source:Jl,docs:Kl}}),p=new Zo({props:{icon:Go,title:"Important!",color:"blue",override:{marginBottom:"16px"},$$slots:{default:[Al]},$$scope:{ctx:i}}}),I=new pe({props:{demo:Jo}}),F=new pe({props:{demo:al}}),N=new pe({props:{demo:fl}}),Z=new pe({props:{demo:kl}}),J=new pe({props:{demo:Ol}}),K=new pe({props:{demo:Ul}}),{c(){s=k(),M(e.$$.fragment),a=k(),l=_("h2"),r=$("Usage"),c=k(),M(p.$$.fragment),z=k(),M(I.$$.fragment),D=k(),g=_("h2"),S=$("Remove title and close button"),R=k(),H=_("p"),at=$(`You can remove modal title and close button.
It will still be possible to close modal by clicking on overlay or pressing escape.`),De=k(),M(F.$$.fragment),Le=k(),V=_("h2"),nt=$("Center modal vertically"),Te=k(),M(N.$$.fragment),He=k(),X=_("h2"),rt=$("Change size"),Be=k(),L=_("p"),ct=$("You can change modal width by setting "),me=_("code"),it=$("size"),pt=$(` prop to predefined size or any valid width, for example, 55% or 200px.
Size controls modal width, max-width is set to 100% with spacing on left and right, no matter what `),_e=_("code"),ft=$("size"),ut=$(" is passed 100% will not be exceeded:"),je=k(),q=_("pre"),Ue=k(),M(Z.$$.fragment),xe=k(),ee=_("h2"),dt=$("Customize overlay"),Ae=k(),U=_("p"),$t=$("Modal uses "),te=_("a"),mt=$("Overlay"),_t=$(" component, so you can change overlay opacity, blur and color:"),Ye=k(),M(J.$$.fragment),We=k(),oe=_("h2"),vt=$("Modal with overflow"),Ge=k(),x=_("p"),ht=$("You can control Modal vertical overflow behavior by setting "),ve=_("code"),kt=$("overflow"),bt=$(" prop:"),Re=k(),M(K.$$.fragment),Fe=k(),le=_("h2"),gt=$("Control behavior"),Ne=k(),se=_("p"),wt=$(`The following props can be used to control Modal behavior.
In most cases you should not turn these features off as it will make your modal less accessible.`),qe=k(),A=_("ul"),Y=_("li"),he=_("code"),yt=$("closeOnEscape"),Mt=$(" – defines whether Modal should be closed when user presses "),ke=_("code"),Et=$("Escape"),Ot=$(" key"),Ct=k(),ae=_("li"),be=_("code"),zt=$("closeOnClickOutside"),It=$(" – defines whether Modal should be closed when user clicks outside of modal body"),Ze=k(),ne=_("h2"),St=$("Accessibility and usability"),Je=k(),P=_("ul"),ge=_("li"),Pt=$("When Modal is opened, focus is trapped inside and vertical scroll is locked at current position"),Dt=k(),we=_("li"),Lt=$("When user clicks on overlay or presses escape, Modal closes"),Tt=k(),ye=_("li"),Ht=$("Modal transitions are disabled if user prefers to reduce motion"),Bt=k(),B=_("li"),jt=$("Modal wrapper has "),Me=_("code"),Ut=$('aria-modal="true"'),xt=$(" and "),Ee=_("code"),At=$('role="dialog"'),Yt=$(" attributes"),Wt=k(),j=_("li"),Gt=$("Modal wrapper has "),Oe=_("code"),Rt=$("aria-labelledby"),Ft=$(" and "),Ce=_("code"),Nt=$("aria-describedby"),qt=$(" pointing to modal title and body"),Ke=k(),W=_("p"),Zt=$("For better screen reader support set "),ze=_("code"),Jt=$("closeButtonLabel"),Kt=$(" prop:"),Qe=k(),Q=_("pre"),this.h()},l(o){Wo("svelte-pki6ul",document.head).forEach(n),s=b(o),E(e.$$.fragment,o),a=b(o),l=v(o,"H2",{});var Se=h(l);r=m(Se,"Usage"),Se.forEach(n),c=b(o),E(p.$$.fragment,o),z=b(o),E(I.$$.fragment,o),D=b(o),g=v(o,"H2",{});var oo=h(g);S=m(oo,"Remove title and close button"),oo.forEach(n),R=b(o),H=v(o,"P",{});var lo=h(H);at=m(lo,`You can remove modal title and close button.
It will still be possible to close modal by clicking on overlay or pressing escape.`),lo.forEach(n),De=b(o),E(F.$$.fragment,o),Le=b(o),V=v(o,"H2",{});var so=h(V);nt=m(so,"Center modal vertically"),so.forEach(n),Te=b(o),E(N.$$.fragment,o),He=b(o),X=v(o,"H2",{});var ao=h(X);rt=m(ao,"Change size"),ao.forEach(n),Be=b(o),L=v(o,"P",{});var re=h(L);ct=m(re,"You can change modal width by setting "),me=v(re,"CODE",{});var no=h(me);it=m(no,"size"),no.forEach(n),pt=m(re,` prop to predefined size or any valid width, for example, 55% or 200px.
Size controls modal width, max-width is set to 100% with spacing on left and right, no matter what `),_e=v(re,"CODE",{});var ro=h(_e);ft=m(ro,"size"),ro.forEach(n),ut=m(re," is passed 100% will not be exceeded:"),re.forEach(n),je=b(o),q=v(o,"PRE",{class:!0});var Bo=h(q);Bo.forEach(n),Ue=b(o),E(Z.$$.fragment,o),xe=b(o),ee=v(o,"H2",{});var co=h(ee);dt=m(co,"Customize overlay"),co.forEach(n),Ae=b(o),U=v(o,"P",{});var Ve=h(U);$t=m(Ve,"Modal uses "),te=v(Ve,"A",{href:!0});var io=h(te);mt=m(io,"Overlay"),io.forEach(n),_t=m(Ve," component, so you can change overlay opacity, blur and color:"),Ve.forEach(n),Ye=b(o),E(J.$$.fragment,o),We=b(o),oe=v(o,"H2",{});var po=h(oe);vt=m(po,"Modal with overflow"),po.forEach(n),Ge=b(o),x=v(o,"P",{});var Xe=h(x);ht=m(Xe,"You can control Modal vertical overflow behavior by setting "),ve=v(Xe,"CODE",{});var fo=h(ve);kt=m(fo,"overflow"),fo.forEach(n),bt=m(Xe," prop:"),Xe.forEach(n),Re=b(o),E(K.$$.fragment,o),Fe=b(o),le=v(o,"H2",{});var uo=h(le);gt=m(uo,"Control behavior"),uo.forEach(n),Ne=b(o),se=v(o,"P",{});var $o=h(se);wt=m($o,`The following props can be used to control Modal behavior.
In most cases you should not turn these features off as it will make your modal less accessible.`),$o.forEach(n),qe=b(o),A=v(o,"UL",{});var et=h(A);Y=v(et,"LI",{});var Pe=h(Y);he=v(Pe,"CODE",{});var mo=h(he);yt=m(mo,"closeOnEscape"),mo.forEach(n),Mt=m(Pe," – defines whether Modal should be closed when user presses "),ke=v(Pe,"CODE",{});var _o=h(ke);Et=m(_o,"Escape"),_o.forEach(n),Ot=m(Pe," key"),Pe.forEach(n),Ct=b(et),ae=v(et,"LI",{});var Qt=h(ae);be=v(Qt,"CODE",{});var vo=h(be);zt=m(vo,"closeOnClickOutside"),vo.forEach(n),It=m(Qt," – defines whether Modal should be closed when user clicks outside of modal body"),Qt.forEach(n),et.forEach(n),Ze=b(o),ne=v(o,"H2",{});var ho=h(ne);St=m(ho,"Accessibility and usability"),ho.forEach(n),Je=b(o),P=v(o,"UL",{});var T=h(P);ge=v(T,"LI",{});var ko=h(ge);Pt=m(ko,"When Modal is opened, focus is trapped inside and vertical scroll is locked at current position"),ko.forEach(n),Dt=b(T),we=v(T,"LI",{});var bo=h(we);Lt=m(bo,"When user clicks on overlay or presses escape, Modal closes"),bo.forEach(n),Tt=b(T),ye=v(T,"LI",{});var go=h(ye);Ht=m(go,"Modal transitions are disabled if user prefers to reduce motion"),go.forEach(n),Bt=b(T),B=v(T,"LI",{});var ce=h(B);jt=m(ce,"Modal wrapper has "),Me=v(ce,"CODE",{});var wo=h(Me);Ut=m(wo,'aria-modal="true"'),wo.forEach(n),xt=m(ce," and "),Ee=v(ce,"CODE",{});var yo=h(Ee);At=m(yo,'role="dialog"'),yo.forEach(n),Yt=m(ce," attributes"),ce.forEach(n),Wt=b(T),j=v(T,"LI",{});var ie=h(j);Gt=m(ie,"Modal wrapper has "),Oe=v(ie,"CODE",{});var Mo=h(Oe);Rt=m(Mo,"aria-labelledby"),Mo.forEach(n),Ft=m(ie," and "),Ce=v(ie,"CODE",{});var Eo=h(Ce);Nt=m(Eo,"aria-describedby"),Eo.forEach(n),qt=m(ie," pointing to modal title and body"),ie.forEach(n),T.forEach(n),Ke=b(o),W=v(o,"P",{});var tt=h(W);Zt=m(tt,"For better screen reader support set "),ze=v(tt,"CODE",{});var Oo=h(ze);Jt=m(Oo,"closeButtonLabel"),Oo.forEach(n),Kt=m(tt," prop:"),tt.forEach(n),Qe=b(o),Q=v(o,"PRE",{class:!0});var jo=h(Q);jo.forEach(n),this.h()},h(){ot(q,"class","language-svelte"),ot(te,"href",qo+"/core/overlay/"),ot(Q,"class","language-svelte")},m(o,d){u(o,s,d),O(e,o,d),u(o,a,d),u(o,l,d),f(l,r),u(o,c,d),O(p,o,d),u(o,z,d),O(I,o,d),u(o,D,d),u(o,g,d),f(g,S),u(o,R,d),u(o,H,d),f(H,at),u(o,De,d),O(F,o,d),u(o,Le,d),u(o,V,d),f(V,nt),u(o,Te,d),O(N,o,d),u(o,He,d),u(o,X,d),f(X,rt),u(o,Be,d),u(o,L,d),f(L,ct),f(L,me),f(me,it),f(L,pt),f(L,_e),f(_e,ft),f(L,ut),u(o,je,d),u(o,q,d),q.innerHTML=To,u(o,Ue,d),O(Z,o,d),u(o,xe,d),u(o,ee,d),f(ee,dt),u(o,Ae,d),u(o,U,d),f(U,$t),f(U,te),f(te,mt),f(U,_t),u(o,Ye,d),O(J,o,d),u(o,We,d),u(o,oe,d),f(oe,vt),u(o,Ge,d),u(o,x,d),f(x,ht),f(x,ve),f(ve,kt),f(x,bt),u(o,Re,d),O(K,o,d),u(o,Fe,d),u(o,le,d),f(le,gt),u(o,Ne,d),u(o,se,d),f(se,wt),u(o,qe,d),u(o,A,d),f(A,Y),f(Y,he),f(he,yt),f(Y,Mt),f(Y,ke),f(ke,Et),f(Y,Ot),f(A,Ct),f(A,ae),f(ae,be),f(be,zt),f(ae,It),u(o,Ze,d),u(o,ne,d),f(ne,St),u(o,Je,d),u(o,P,d),f(P,ge),f(ge,Pt),f(P,Dt),f(P,we),f(we,Lt),f(P,Tt),f(P,ye),f(ye,Ht),f(P,Bt),f(P,B),f(B,jt),f(B,Me),f(Me,Ut),f(B,xt),f(B,Ee),f(Ee,At),f(B,Yt),f(P,Wt),f(P,j),f(j,Gt),f(j,Oe),f(Oe,Rt),f(j,Ft),f(j,Ce),f(Ce,Nt),f(j,qt),u(o,Ke,d),u(o,W,d),f(W,Zt),f(W,ze),f(ze,Jt),f(W,Kt),u(o,Qe,d),u(o,Q,d),Q.innerHTML=Ho,Ie=!0},p(o,[d]){(!Ie||d&0)&&t!==(t=Vt+" - SvelteUI")&&(document.title=t);const Se={};d&1&&(Se.$$scope={dirty:d,ctx:o}),p.$set(Se)},i(o){Ie||(w(e.$$.fragment,o),w(p.$$.fragment,o),w(I.$$.fragment,o),w(F.$$.fragment,o),w(N.$$.fragment,o),w(Z.$$.fragment,o),w(J.$$.fragment,o),w(K.$$.fragment,o),Ie=!0)},o(o){y(e.$$.fragment,o),y(p.$$.fragment,o),y(I.$$.fragment,o),y(F.$$.fragment,o),y(N.$$.fragment,o),y(Z.$$.fragment,o),y(J.$$.fragment,o),y(K.$$.fragment,o),Ie=!1},d(o){o&&n(s),C(e,o),o&&n(a),o&&n(l),o&&n(c),C(p,o),o&&n(z),C(I,o),o&&n(D),o&&n(g),o&&n(R),o&&n(H),o&&n(De),C(F,o),o&&n(Le),o&&n(V),o&&n(Te),C(N,o),o&&n(He),o&&n(X),o&&n(Be),o&&n(L),o&&n(je),o&&n(q),o&&n(Ue),C(Z,o),o&&n(xe),o&&n(ee),o&&n(Ae),o&&n(U),o&&n(Ye),C(J,o),o&&n(We),o&&n(oe),o&&n(Ge),o&&n(x),o&&n(Re),C(K,o),o&&n(Fe),o&&n(le),o&&n(Ne),o&&n(se),o&&n(qe),o&&n(A),o&&n(Ze),o&&n(ne),o&&n(Je),o&&n(P),o&&n(Ke),o&&n(W),o&&n(Qe),o&&n(Q)}}}const Wl={title:"Modal",group:"svelteuidev-core",packageGroup:"@svelteuidev/core",slug:"/core/modal/",category:"overlay",description:"Modal with optional header",importCode:"import { Modal } from '@svelteuidev/core';",source:"svelteui-core/src/components/Modal/Modal.svelte",docs:"core/modal.md"},{title:Vt,group:Gl,packageGroup:Rl,slug:Fl,category:Nl,description:ql,importCode:Zl,source:Jl,docs:Kl}=Wl;class rs extends fe{constructor(t){super(),ue(this,t,null,Yl,de,{})}}export{rs as default,Wl as metadata};