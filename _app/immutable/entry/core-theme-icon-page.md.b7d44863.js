import{S as ce,i as ie,s as se,y as E,z as I,A as w,g as h,d as b,B as V,H as ct,N as it,a7 as st,e as tt,b as v,v as ft,f as ut,a3 as mt,h as u,a as y,c as T,k as d,q as m,al as gt,l as g,m as _,r as $,n as ot,Y as f}from"../chunks/index.b0fe5a0f.js";import{G as $t}from"../chunks/navigation.9bd98935.js";import{H as _t}from"../chunks/Heading.19c03976.js";import{D as Le}from"../chunks/Demo.82a35c94.js";import{G as ht}from"../chunks/Gear.ffe07cc9.js";import{C as pt}from"../chunks/Center.b83aac32.js";import{T as Re}from"../chunks/ThemeIcon.0c4fb880.js";import{R as dt}from"../chunks/Rocket.35f82675.js";function vt(s){let t,r;return t=new ht({}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,o){w(t,e,o),r=!0},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){V(t,e)}}}function bt(s){let t,r;const e=[s[0]];let o={$$slots:{default:[vt]},$$scope:{ctx:s}};for(let a=0;a<e.length;a+=1)o=ct(o,e[a]);return t=new Re({props:o}),{c(){E(t.$$.fragment)},l(a){I(t.$$.fragment,a)},m(a,n){w(t,a,n),r=!0},p(a,n){const i=n&1?it(e,[st(a[0])]):{};n&2&&(i.$$scope={dirty:n,ctx:a}),t.$set(i)},i(a){r||(h(t.$$.fragment,a),r=!0)},o(a){b(t.$$.fragment,a),r=!1},d(a){V(t,a)}}}function yt(s){let t,r;return t=new pt({props:{$$slots:{default:[bt]},$$scope:{ctx:s}}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,o){w(t,e,o),r=!0},p(e,[o]){const a={};o&3&&(a.$$scope={dirty:o,ctx:e}),t.$set(a)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){V(t,e)}}}const Tt=(s,t)=>`<script>
    import { ThemeIcon } from '@svelteuidev/core';
    import { Gear } from 'radix-icons-svelte';
<\/script>

<ThemeIcon${s}>
    <Gear />
</ThemeIcon>`,Et="configurator",It={codeTemplate:Tt,configurator:[{name:"variant",type:"select",data:[{label:"filled",value:"filled"},{label:"light",value:"light"},{label:"gradient",value:"gradient"},{label:"outline",value:"outline"},{label:"subtle",value:"subtle"},{label:"default",value:"default"},{label:"white",value:"white"}],initialValue:"filled",defaultValue:"filled"},{name:"radius",type:"size",initialValue:"sm",defaultValue:"sm"},{name:"size",type:"size",initialValue:"md",defaultValue:"md"},{name:"color",type:"color",initialValue:"blue",defaultValue:"blue",when:{control:"variant",comparator:"!==",value:"gradient"}},{name:"gradient",type:"composite",controls:[{name:"from",type:"color",initialValue:"indigo",defaultValue:"indigo"},{name:"to",type:"color",initialValue:"cyan",defaultValue:"cyan"},{name:"deg",type:"number",initialValue:45,defaultValue:45}],when:{control:"variant",comparator:"===",value:"gradient"}}]};function wt(s,t,r){let{props:e={}}=t;return s.$$set=o=>{"props"in o&&r(0,e=o.props)},[e]}class Vt extends ce{constructor(t){super(),ie(this,t,wt,yt,se,{props:0})}}const kt=Object.freeze(Object.defineProperty({__proto__:null,configuration:It,default:Vt,type:Et},Symbol.toStringTag,{value:"Module"}));function rt(s,t,r){const e=s.slice();return e[2]=t[r],e}function lt(s,t,r){const e=s.slice();return e[5]=t[r],e}function Ct(s){let t,r;return t=new dt({}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,o){w(t,e,o),r=!0},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){V(t,e)}}}function nt(s){let t,r;return t=new Re({props:{variant:s[2],color:s[5],$$slots:{default:[Ct]},$$scope:{ctx:s}}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,o){w(t,e,o),r=!0},p(e,o){const a={};o&256&&(a.$$scope={dirty:o,ctx:e}),t.$set(a)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){V(t,e)}}}function Ot(s){let t,r,e=s[1],o=[];for(let n=0;n<e.length;n+=1)o[n]=nt(lt(s,e,n));const a=n=>b(o[n],1,1,()=>{o[n]=null});return{c(){for(let n=0;n<o.length;n+=1)o[n].c();t=y()},l(n){for(let i=0;i<o.length;i+=1)o[i].l(n);t=T(n)},m(n,i){for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(n,i);v(n,t,i),r=!0},p(n,i){if(i&3){e=n[1];let c;for(c=0;c<e.length;c+=1){const O=lt(n,e,c);o[c]?(o[c].p(O,i),h(o[c],1)):(o[c]=nt(O),o[c].c(),h(o[c],1),o[c].m(t.parentNode,t))}for(ft(),c=e.length;c<o.length;c+=1)a(c);ut()}},i(n){if(!r){for(let i=0;i<e.length;i+=1)h(o[i]);r=!0}},o(n){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)b(o[i]);r=!1},d(n){mt(o,n),n&&u(t)}}}function at(s){let t,r;return t=new $t({props:{position:"center",$$slots:{default:[Ot]},$$scope:{ctx:s}}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,o){w(t,e,o),r=!0},p(e,o){const a={};o&256&&(a.$$scope={dirty:o,ctx:e}),t.$set(a)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){V(t,e)}}}function xt(s){let t,r,e=s[0],o=[];for(let n=0;n<e.length;n+=1)o[n]=at(rt(s,e,n));const a=n=>b(o[n],1,1,()=>{o[n]=null});return{c(){for(let n=0;n<o.length;n+=1)o[n].c();t=tt()},l(n){for(let i=0;i<o.length;i+=1)o[i].l(n);t=tt()},m(n,i){for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(n,i);v(n,t,i),r=!0},p(n,i){if(i&3){e=n[0];let c;for(c=0;c<e.length;c+=1){const O=rt(n,e,c);o[c]?(o[c].p(O,i),h(o[c],1)):(o[c]=at(O),o[c].c(),h(o[c],1),o[c].m(t.parentNode,t))}for(ft(),c=e.length;c<o.length;c+=1)a(c);ut()}},i(n){if(!r){for(let i=0;i<e.length;i+=1)h(o[i]);r=!0}},o(n){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)b(o[i]);r=!1},d(n){mt(o,n),n&&u(t)}}}function Dt(s){let t,r;return t=new $t({props:{position:"center",$$slots:{default:[xt]},$$scope:{ctx:s}}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,o){w(t,e,o),r=!0},p(e,[o]){const a={};o&256&&(a.$$scope={dirty:o,ctx:e}),t.$set(a)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){V(t,e)}}}const Gt="demo",St={toggle:!0};function jt(s){return[["filled","light","outline","subtle","default","white"],["dark","gray","red","pink","grape","violet","indigo","blue","cyan","teal","green","lime","yellow","orange"]]}class zt extends ce{constructor(t){super(),ie(this,t,jt,Dt,se,{})}}const Ht=Object.freeze(Object.defineProperty({__proto__:null,configuration:St,default:zt,type:Gt},Symbol.toStringTag,{value:"Module"}));function Pt(s){let t,r;return t=new dt({}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,o){w(t,e,o),r=!0},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){V(t,e)}}}function Lt(s){let t,r;const e=[{variant:"gradient"},s[0]];let o={$$slots:{default:[Pt]},$$scope:{ctx:s}};for(let a=0;a<e.length;a+=1)o=ct(o,e[a]);return t=new Re({props:o}),{c(){E(t.$$.fragment)},l(a){I(t.$$.fragment,a)},m(a,n){w(t,a,n),r=!0},p(a,n){const i=n&1?it(e,[e[0],st(a[0])]):{};n&2&&(i.$$scope={dirty:n,ctx:a}),t.$set(i)},i(a){r||(h(t.$$.fragment,a),r=!0)},o(a){b(t.$$.fragment,a),r=!1},d(a){V(t,a)}}}function Ut(s){let t,r;return t=new pt({props:{$$slots:{default:[Lt]},$$scope:{ctx:s}}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,o){w(t,e,o),r=!0},p(e,[o]){const a={};o&3&&(a.$$scope={dirty:o,ctx:e}),t.$set(a)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){V(t,e)}}}const Rt=(s,t)=>`<script>
  import { ThemeIcon } from '@svelteuidev/core';
<\/script>

<ThemeIcon variant='gradient' ${s}>
    <Rocket />
</ThemeIcon>`,At="configurator",Bt={codeTemplate:Rt,configurator:[{name:"gradient",type:"composite",controls:[{name:"from",type:"color",initialValue:"indigo",defaultValue:"indigo"},{name:"to",type:"color",initialValue:"cyan",defaultValue:"cyan"},{name:"deg",type:"number",initialValue:45,defaultValue:45}]}]};function Mt(s,t,r){let{props:e={}}=t;return s.$$set=o=>{"props"in o&&r(0,e=o.props)},[e]}class Nt extends ce{constructor(t){super(),ie(this,t,Mt,Ut,se,{props:0})}}const qt=Object.freeze(Object.defineProperty({__proto__:null,configuration:Bt,default:Nt,type:At},Symbol.toStringTag,{value:"Module"}));function Yt(s){let t,r,e,o,a,n,i,c,O,P,fe,ee,x,ue,L,me,$e,U,pe,de,te,j,oe,R,ge,re,A,_e,le,k,D,he,N,ve,be,q,ye,Te,z,Ee,Y,Ie,we,Ve,C,F,ke,Ce,J,Oe,xe,K,De,Ge,Q,Se,je,B,W,ze,He,ne,H,X;return document.title=t=Ue+" - SvelteUI",e=new _t({props:{title:Ue,group:Jt,packageGroup:Kt,slug:Qt,category:Wt,description:Xt,importCode:Zt,source:eo,docs:to}}),c=new Le({props:{demo:kt}}),j=new Le({props:{demo:Ht}}),H=new Le({props:{demo:qt}}),{c(){r=y(),E(e.$$.fragment),o=y(),a=d("h2"),n=m("Usage"),i=y(),E(c.$$.fragment),O=y(),P=d("h2"),fe=m("Color"),ee=y(),x=d("p"),ue=m("ThemeIcon supports all colors from "),L=d("a"),me=m("theme.colors"),$e=m(", default color is "),U=d("a"),pe=m("theme.primaryColor"),de=m(":"),te=y(),E(j.$$.fragment),oe=y(),R=d("h2"),ge=m("Gradient variant"),re=y(),A=d("p"),_e=m("To use gradient as ThemeIcon background:"),le=y(),k=d("ul"),D=d("li"),he=m("set "),N=d("code"),ve=m("variant"),be=m(" to "),q=d("code"),ye=m("gradient"),Te=y(),z=d("li"),Ee=m("set "),Y=d("code"),Ie=m("gradient"),we=m(" prop"),Ve=y(),C=d("li"),F=d("code"),ke=m("color-from"),Ce=m(" and "),J=d("code"),Oe=m("color-to"),xe=m(" options in "),K=d("code"),De=m("gradient"),Ge=m(" prop are colors from "),Q=d("code"),Se=m("theme.colors"),je=y(),B=d("li"),W=d("code"),ze=m("deg"),He=m(" is linear gradient degree"),ne=y(),E(H.$$.fragment),this.h()},l(l){gt("svelte-pki6ul",document.head).forEach(u),r=T(l),I(e.$$.fragment,l),o=T(l),a=g(l,"H2",{});var Ae=_(a);n=$(Ae,"Usage"),Ae.forEach(u),i=T(l),I(c.$$.fragment,l),O=T(l),P=g(l,"H2",{});var Be=_(P);fe=$(Be,"Color"),Be.forEach(u),ee=T(l),x=g(l,"P",{});var M=_(x);ue=$(M,"ThemeIcon supports all colors from "),L=g(M,"A",{href:!0});var Me=_(L);me=$(Me,"theme.colors"),Me.forEach(u),$e=$(M,", default color is "),U=g(M,"A",{href:!0});var Ne=_(U);pe=$(Ne,"theme.primaryColor"),Ne.forEach(u),de=$(M,":"),M.forEach(u),te=T(l),I(j.$$.fragment,l),oe=T(l),R=g(l,"H2",{});var qe=_(R);ge=$(qe,"Gradient variant"),qe.forEach(u),re=T(l),A=g(l,"P",{});var Ye=_(A);_e=$(Ye,"To use gradient as ThemeIcon background:"),Ye.forEach(u),le=T(l),k=g(l,"UL",{});var G=_(k);D=g(G,"LI",{});var Z=_(D);he=$(Z,"set "),N=g(Z,"CODE",{});var Fe=_(N);ve=$(Fe,"variant"),Fe.forEach(u),be=$(Z," to "),q=g(Z,"CODE",{});var Je=_(q);ye=$(Je,"gradient"),Je.forEach(u),Z.forEach(u),Te=T(G),z=g(G,"LI",{});var ae=_(z);Ee=$(ae,"set "),Y=g(ae,"CODE",{});var Ke=_(Y);Ie=$(Ke,"gradient"),Ke.forEach(u),we=$(ae," prop"),ae.forEach(u),Ve=T(G),C=g(G,"LI",{});var S=_(C);F=g(S,"CODE",{});var Qe=_(F);ke=$(Qe,"color-from"),Qe.forEach(u),Ce=$(S," and "),J=g(S,"CODE",{});var We=_(J);Oe=$(We,"color-to"),We.forEach(u),xe=$(S," options in "),K=g(S,"CODE",{});var Xe=_(K);De=$(Xe,"gradient"),Xe.forEach(u),Ge=$(S," prop are colors from "),Q=g(S,"CODE",{});var Ze=_(Q);Se=$(Ze,"theme.colors"),Ze.forEach(u),S.forEach(u),je=T(G),B=g(G,"LI",{});var Pe=_(B);W=g(Pe,"CODE",{});var et=_(W);ze=$(et,"deg"),et.forEach(u),He=$(Pe," is linear gradient degree"),Pe.forEach(u),G.forEach(u),ne=T(l),I(H.$$.fragment,l),this.h()},h(){ot(L,"href","/theming/extend-theme/#default-colors"),ot(U,"href","/theming/extend-theme/#primary-color")},m(l,p){v(l,r,p),w(e,l,p),v(l,o,p),v(l,a,p),f(a,n),v(l,i,p),w(c,l,p),v(l,O,p),v(l,P,p),f(P,fe),v(l,ee,p),v(l,x,p),f(x,ue),f(x,L),f(L,me),f(x,$e),f(x,U),f(U,pe),f(x,de),v(l,te,p),w(j,l,p),v(l,oe,p),v(l,R,p),f(R,ge),v(l,re,p),v(l,A,p),f(A,_e),v(l,le,p),v(l,k,p),f(k,D),f(D,he),f(D,N),f(N,ve),f(D,be),f(D,q),f(q,ye),f(k,Te),f(k,z),f(z,Ee),f(z,Y),f(Y,Ie),f(z,we),f(k,Ve),f(k,C),f(C,F),f(F,ke),f(C,Ce),f(C,J),f(J,Oe),f(C,xe),f(C,K),f(K,De),f(C,Ge),f(C,Q),f(Q,Se),f(k,je),f(k,B),f(B,W),f(W,ze),f(B,He),v(l,ne,p),w(H,l,p),X=!0},p(l,[p]){(!X||p&0)&&t!==(t=Ue+" - SvelteUI")&&(document.title=t)},i(l){X||(h(e.$$.fragment,l),h(c.$$.fragment,l),h(j.$$.fragment,l),h(H.$$.fragment,l),X=!0)},o(l){b(e.$$.fragment,l),b(c.$$.fragment,l),b(j.$$.fragment,l),b(H.$$.fragment,l),X=!1},d(l){l&&u(r),V(e,l),l&&u(o),l&&u(a),l&&u(i),V(c,l),l&&u(O),l&&u(P),l&&u(ee),l&&u(x),l&&u(te),V(j,l),l&&u(oe),l&&u(R),l&&u(re),l&&u(A),l&&u(le),l&&u(k),l&&u(ne),V(H,l)}}}const Ft={title:"ThemeIcon",group:"svelteuidev-core",packageGroup:"@svelteuidev/core",slug:"/core/theme-icon/",category:"data-display",description:"Render icon inside element with theme colors",importCode:"import { ThemeIcon } from '@svelteuidev/core';",source:"svelteui-core/src/components/ThemeIcon/ThemeIcon.svelte",docs:"core/theme-icon.md"},{title:Ue,group:Jt,packageGroup:Kt,slug:Qt,category:Wt,description:Xt,importCode:Zt,source:eo,docs:to}=Ft;class fo extends ce{constructor(t){super(),ie(this,t,null,Yt,se,{})}}export{fo as default,Ft as metadata};
