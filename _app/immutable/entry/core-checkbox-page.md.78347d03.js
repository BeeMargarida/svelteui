import{S as I,i as A,s as W,H as T,w as Ht,a5 as Ot,y as _,z as v,A as C,N as ve,a7 as rt,a6 as Dt,g as k,d as b,B as x,O as ce,a2 as At,T as ct,e as ie,b as m,v as Rt,f as Pt,a3 as jt,h as u,V as je,W as Ge,m as S,n as M,X as Me,Y as h,C as Z,a as z,c as w,k as H,q as y,al as Wt,l as O,r as E}from"../chunks/index.b0fe5a0f.js";import{G as qt}from"../chunks/navigation.9bd98935.js";import{H as Ft}from"../chunks/Heading.19c03976.js";import{D as re}from"../chunks/Demo.82a35c94.js";import{C as Gt}from"../chunks/Center.b83aac32.js";import{C as j}from"../chunks/Checkbox.67f10399.js";import{S as Ce}from"../chunks/Stack.2f330b05.js";import{R as Nt}from"../chunks/Rocket.35f82675.js";import{I as Ut}from"../chunks/Input.9e06e2ef.js";function wt(r,e,a){const t=r.slice();return t[18]=e[a],t}function yt(r){let e,a;function t(...s){return r[15](r[18],...s)}return e=new j({props:{use:r[2],label:r[18].label,value:r[18].value,checked:r[1].includes(r[18].value),radius:r[9],size:r[8],color:r[5]}}),e.$on("change",t),{c(){_(e.$$.fragment)},l(s){v(e.$$.fragment,s)},m(s,n){C(e,s,n),a=!0},p(s,n){r=s;const l={};n&4&&(l.use=r[2]),n&64&&(l.label=r[18].label),n&64&&(l.value=r[18].value),n&66&&(l.checked=r[1].includes(r[18].value)),n&512&&(l.radius=r[9]),n&256&&(l.size=r[8]),n&32&&(l.color=r[5]),e.$set(l)},i(s){a||(k(e.$$.fragment,s),a=!0)},o(s){b(e.$$.fragment,s),a=!1},d(s){x(e,s)}}}function Zt(r){let e,a,t=r[6],s=[];for(let l=0;l<t.length;l+=1)s[l]=yt(wt(r,t,l));const n=l=>b(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=ie()},l(l){for(let c=0;c<s.length;c+=1)s[c].l(l);e=ie()},m(l,c){for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(l,c);m(l,e,c),a=!0},p(l,c){if(c&9062){t=l[6];let i;for(i=0;i<t.length;i+=1){const g=wt(l,t,i);s[i]?(s[i].p(g,c),k(s[i],1)):(s[i]=yt(g),s[i].c(),k(s[i],1),s[i].m(e.parentNode,e))}for(Rt(),i=t.length;i<s.length;i+=1)n(i);Pt()}},i(l){if(!a){for(let c=0;c<t.length;c+=1)k(s[c]);a=!0}},o(l){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)b(s[c]);a=!1},d(l){jt(s,l),l&&u(e)}}}function Lt(r){let e,a;return e=new qt({props:{direction:r[10],spacing:r[12],align:r[11],$$slots:{default:[Zt]},$$scope:{ctx:r}}}),{c(){_(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,s){C(e,t,s),a=!0},p(t,s){const n={};s&1024&&(n.direction=t[10]),s&4096&&(n.spacing=t[12]),s&2048&&(n.align=t[11]),s&2098022&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){a||(k(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){x(e,t)}}}function Xt(r){let e,a,t;const s=[{class:r[3]},{label:r[7]},{override:r[4]},{size:r[8]},r[14]];function n(c){r[16](c)}let l={$$slots:{default:[Lt]},$$scope:{ctx:r}};for(let c=0;c<s.length;c+=1)l=T(l,s[c]);return r[0]!==void 0&&(l.element=r[0]),e=new Ut({props:l}),Ht.push(()=>Ot(e,"element",n)),{c(){_(e.$$.fragment)},l(c){v(e.$$.fragment,c)},m(c,i){C(e,c,i),t=!0},p(c,[i]){const g=i&16792?ve(s,[i&8&&{class:c[3]},i&128&&{label:c[7]},i&16&&{override:c[4]},i&256&&{size:c[8]},i&16384&&rt(c[14])]):{};i&2105190&&(g.$$scope={dirty:i,ctx:c}),!a&&i&1&&(a=!0,g.element=c[0],Dt(()=>a=!1)),e.$set(g)},i(c){t||(k(e.$$.fragment,c),t=!0)},o(c){b(e.$$.fragment,c),t=!1},d(c){x(e,c)}}}function Yt(r,e,a){const t=["use","element","class","override","color","items","value","label","size","radius","direction","align","spacing"];let s=ce(e,t),{use:n=[],element:l=void 0,class:c="",override:i={},color:g="gray",items:R=[],value:p=[],label:V=null,size:f="md",radius:P="sm",direction:q="row",align:te="flex-start",spacing:L="md"}=e;const F=At();function X(d,D){D.checked?a(1,p=[...p,d]):a(1,p=p.filter(pe=>pe!==d)),F("change",p)}const N=(d,D)=>X(d.value,D.target);function ue(d){l=d,a(0,l)}return r.$$set=d=>{e=T(T({},e),ct(d)),a(14,s=ce(e,t)),"use"in d&&a(2,n=d.use),"element"in d&&a(0,l=d.element),"class"in d&&a(3,c=d.class),"override"in d&&a(4,i=d.override),"color"in d&&a(5,g=d.color),"items"in d&&a(6,R=d.items),"value"in d&&a(1,p=d.value),"label"in d&&a(7,V=d.label),"size"in d&&a(8,f=d.size),"radius"in d&&a(9,P=d.radius),"direction"in d&&a(10,q=d.direction),"align"in d&&a(11,te=d.align),"spacing"in d&&a(12,L=d.spacing)},[l,p,n,c,i,g,R,V,f,P,q,te,L,X,s,N,ue]}class Jt extends I{constructor(e){super(),A(this,e,Yt,Xt,W,{use:2,element:0,class:3,override:4,color:5,items:6,value:1,label:7,size:8,radius:9,direction:10,align:11,spacing:12})}}const Kt=Jt;function Qt(r){let e,a,t=[{width:r[1]},{height:r[1]},{viewBox:"0 0 15 15"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},r[2]],s={};for(let n=0;n<t.length;n+=1)s=T(s,t[n]);return{c(){e=je("svg"),a=je("path"),this.h()},l(n){e=Ge(n,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var l=S(e);a=Ge(l,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),S(a).forEach(u),l.forEach(u),this.h()},h(){M(a,"fill-rule","evenodd"),M(a,"clip-rule","evenodd"),M(a,"d","M4.89346 2.35248C3.49195 2.35248 2.35248 3.49359 2.35248 4.90532C2.35248 6.38164 3.20954 7.9168 4.37255 9.33522C5.39396 10.581 6.59464 11.6702 7.50002 12.4778C8.4054 11.6702 9.60608 10.581 10.6275 9.33522C11.7905 7.9168 12.6476 6.38164 12.6476 4.90532C12.6476 3.49359 11.5081 2.35248 10.1066 2.35248C9.27059 2.35248 8.81894 2.64323 8.5397 2.95843C8.27877 3.25295 8.14623 3.58566 8.02501 3.88993C8.00391 3.9429 7.98315 3.99501 7.96211 4.04591C7.88482 4.23294 7.7024 4.35494 7.50002 4.35494C7.29765 4.35494 7.11523 4.23295 7.03793 4.04592C7.01689 3.99501 6.99612 3.94289 6.97502 3.8899C6.8538 3.58564 6.72126 3.25294 6.46034 2.95843C6.18109 2.64323 5.72945 2.35248 4.89346 2.35248ZM1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.0084 1.35248 6.73504 1.76049 7.20884 2.2953C7.32062 2.42147 7.41686 2.55382 7.50002 2.68545C7.58318 2.55382 7.67941 2.42147 7.79119 2.2953C8.265 1.76049 8.99164 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"),M(a,"fill",r[0]),Me(e,s)},m(n,l){m(n,e,l),h(e,a)},p(n,[l]){l&1&&M(a,"fill",n[0]),Me(e,s=ve(t,[l&2&&{width:n[1]},l&2&&{height:n[1]},{viewBox:"0 0 15 15"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},l&4&&n[2]]))},i:Z,o:Z,d(n){n&&u(e)}}}function en(r,e,a){const t=["color","size"];let s=ce(e,t),{color:n="currentColor"}=e,{size:l=15}=e;return r.$$set=c=>{e=T(T({},e),ct(c)),a(2,s=ce(e,t)),"color"in c&&a(0,n=c.color),"size"in c&&a(1,l=c.size)},[n,l,s]}class tn extends I{constructor(e){super(),A(this,e,en,Qt,W,{color:0,size:1})}}const nn=tn;function sn(r){let e,a,t=[{width:r[1]},{height:r[1]},{viewBox:"0 0 15 15"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},r[2]],s={};for(let n=0;n<t.length;n+=1)s=T(s,t[n]);return{c(){e=je("svg"),a=je("path"),this.h()},l(n){e=Ge(n,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var l=S(e);a=Ge(l,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),S(a).forEach(u),l.forEach(u),this.h()},h(){M(a,"fill-rule","evenodd"),M(a,"clip-rule","evenodd"),M(a,"d","M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"),M(a,"fill",r[0]),Me(e,s)},m(n,l){m(n,e,l),h(e,a)},p(n,[l]){l&1&&M(a,"fill",n[0]),Me(e,s=ve(t,[l&2&&{width:n[1]},l&2&&{height:n[1]},{viewBox:"0 0 15 15"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},l&4&&n[2]]))},i:Z,o:Z,d(n){n&&u(e)}}}function an(r,e,a){const t=["color","size"];let s=ce(e,t),{color:n="currentColor"}=e,{size:l=15}=e;return r.$$set=c=>{e=T(T({},e),ct(c)),a(2,s=ce(e,t)),"color"in c&&a(0,n=c.color),"size"in c&&a(1,l=c.size)},[n,l,s]}class ln extends I{constructor(e){super(),A(this,e,an,sn,W,{color:0,size:1})}}const on=ln;function rn(r){let e,a;const t=[{checked:!0},r[0]];let s={};for(let n=0;n<t.length;n+=1)s=T(s,t[n]);return e=new j({props:s}),{c(){_(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,l){C(e,n,l),a=!0},p(n,l){const c=l&1?ve(t,[t[0],rt(n[0])]):{};e.$set(c)},i(n){a||(k(e.$$.fragment,n),a=!0)},o(n){b(e.$$.fragment,n),a=!1},d(n){x(e,n)}}}function cn(r){let e,a;return e=new Gt({props:{$$slots:{default:[rn]},$$scope:{ctx:r}}}),{c(){_(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,s){C(e,t,s),a=!0},p(t,[s]){const n={};s&3&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){a||(k(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){x(e,t)}}}const un=(r,e)=>`
<script>
  import { Checkbox } from '@svelteuidev/core';
<\/script>

<Checkbox ${r} />
`,pn="configurator",fn={codeTemplate:un,configurator:[{name:"label",type:"string",initialValue:"I agree to sell my privacy"},{name:"color",type:"color",initialValue:"blue",defaultValue:"blue"},{name:"radius",type:"size",initialValue:"sm",defaultValue:"sm"},{name:"size",type:"size",initialValue:"sm",defaultValue:"sm"},{name:"disabled",type:"boolean",initialValue:!1,defaultValue:!1},{name:"indeterminate",type:"boolean",initialValue:!1,defaultValue:!1}]};function mn(r,e,a){let{props:t={}}=e;return r.$$set=s=>{"props"in s&&a(0,t=s.props)},[t]}class kn extends I{constructor(e){super(),A(this,e,mn,cn,W,{props:0})}}const $n=Object.freeze(Object.defineProperty({__proto__:null,configuration:fn,default:kn,type:pn},Symbol.toStringTag,{value:"Module"}));function bn(r){let e,a,t,s,n,l,c,i,g,R,p,V;return e=new j({props:{checked:!1,label:"Default checkbox"}}),t=new j({props:{checked:!1,indeterminate:!0,label:"Indeterminate checkbox"}}),n=new j({props:{checked:!0,label:"Checked checkbox"}}),c=new j({props:{disabled:!0,label:"Disabled checkbox"}}),g=new j({props:{disabled:!0,checked:!0,label:"Disabled checked checkbox"}}),p=new j({props:{disabled:!0,indeterminate:!0,label:"Disabled indeterminate checkbox"}}),{c(){_(e.$$.fragment),a=z(),_(t.$$.fragment),s=z(),_(n.$$.fragment),l=z(),_(c.$$.fragment),i=z(),_(g.$$.fragment),R=z(),_(p.$$.fragment)},l(f){v(e.$$.fragment,f),a=w(f),v(t.$$.fragment,f),s=w(f),v(n.$$.fragment,f),l=w(f),v(c.$$.fragment,f),i=w(f),v(g.$$.fragment,f),R=w(f),v(p.$$.fragment,f)},m(f,P){C(e,f,P),m(f,a,P),C(t,f,P),m(f,s,P),C(n,f,P),m(f,l,P),C(c,f,P),m(f,i,P),C(g,f,P),m(f,R,P),C(p,f,P),V=!0},p:Z,i(f){V||(k(e.$$.fragment,f),k(t.$$.fragment,f),k(n.$$.fragment,f),k(c.$$.fragment,f),k(g.$$.fragment,f),k(p.$$.fragment,f),V=!0)},o(f){b(e.$$.fragment,f),b(t.$$.fragment,f),b(n.$$.fragment,f),b(c.$$.fragment,f),b(g.$$.fragment,f),b(p.$$.fragment,f),V=!1},d(f){x(e,f),f&&u(a),x(t,f),f&&u(s),x(n,f),f&&u(l),x(c,f),f&&u(i),x(g,f),f&&u(R),x(p,f)}}}function dn(r){let e,a;return e=new Ce({props:{position:"center",$$slots:{default:[bn]},$$scope:{ctx:r}}}),{c(){_(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,s){C(e,t,s),a=!0},p(t,[s]){const n={};s&1&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){a||(k(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){x(e,t)}}}const gn=`<script>
    import { Checkbox } from '@svelteuidev/core';
<\/script>

<Checkbox checked={false} label="Default checkbox" />
<Checkbox checked={false} indeterminate label="Indeterminate checkbox" />
<Checkbox checked label="Checked checkbox" />
<Checkbox disabled label="Disabled checkbox" />
<Checkbox disabled checked label="Disabled checked checkbox" />
<Checkbox disabled indeterminate label="Disabled indeterminate checkbox" />`,hn="demo",_n={code:gn};class vn extends I{constructor(e){super(),A(this,e,null,dn,W,{})}}const Cn=Object.freeze(Object.defineProperty({__proto__:null,configuration:_n,default:vn,type:hn},Symbol.toStringTag,{value:"Module"}));function xn(r){let e,a;return e=new Nt({props:{size:10}}),{c(){_(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,s){C(e,t,s),a=!0},p:Z,i(t){a||(k(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){x(e,t)}}}function zn(r){let e,a;return e=new nn({props:{size:10}}),{c(){_(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,s){C(e,t,s),a=!0},i(t){a||(k(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){x(e,t)}}}function wn(r){let e,a;return e=new on({props:{size:10}}),{c(){_(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,s){C(e,t,s),a=!0},i(t){a||(k(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){x(e,t)}}}function yn(r){let e,a,t,s;const n=[wn,zn],l=[];function c(i,g){return 0}return e=c(),a=l[e]=n[e](r),{c(){a.c(),t=ie()},l(i){a.l(i),t=ie()},m(i,g){l[e].m(i,g),m(i,t,g),s=!0},p:Z,i(i){s||(k(a),s=!0)},o(i){b(a),s=!1},d(i){l[e].d(i),i&&u(t)}}}function En(r){let e,a,t,s;return e=new j({props:{checked:!0,label:"Custom icon",$$slots:{default:[xn]},$$scope:{ctx:r}}}),t=new j({props:{checked:!0,label:"Custom icon",indeterminate:Dn,$$slots:{default:[yn]},$$scope:{ctx:r}}}),{c(){_(e.$$.fragment),a=z(),_(t.$$.fragment)},l(n){v(e.$$.fragment,n),a=w(n),v(t.$$.fragment,n)},m(n,l){C(e,n,l),m(n,a,l),C(t,n,l),s=!0},p(n,l){const c={};l&1&&(c.$$scope={dirty:l,ctx:n}),e.$set(c);const i={};l&1&&(i.$$scope={dirty:l,ctx:n}),t.$set(i)},i(n){s||(k(e.$$.fragment,n),k(t.$$.fragment,n),s=!0)},o(n){b(e.$$.fragment,n),b(t.$$.fragment,n),s=!1},d(n){x(e,n),n&&u(a),x(t,n)}}}function Sn(r){let e,a;return e=new Ce({props:{position:"center",$$slots:{default:[En]},$$scope:{ctx:r}}}),{c(){_(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,s){C(e,t,s),a=!0},p(t,[s]){const n={};s&1&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){a||(k(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){x(e,t)}}}const Vn=`<script>
    import { Checkbox } from '@svelteuidev/core';
    import { Heart, HeartFilled, Rocket } from 'radix-icons-svelte';

    let indeterminate = true;
<\/script>

<Checkbox checked label="Custom icon">
    <Rocket size={10} />    
</Checkbox>
<Checkbox checked label="Custom icon" {indeterminate}>
    {#if indeterminate}
        <HeartFilled size={10} />
    {:else}
        <Heart size={10} />
    {/if}
</Checkbox>`,Hn="demo",On={code:Vn};let Dn=!0;class Rn extends I{constructor(e){super(),A(this,e,null,Sn,W,{})}}const Pn=Object.freeze(Object.defineProperty({__proto__:null,configuration:On,default:Rn,type:Hn},Symbol.toStringTag,{value:"Module"}));function jn(r){let e,a,t,s,n,l,c,i,g,R;return e=new j({props:{checked:!0,size:"xs",label:"xs checkbox"}}),t=new j({props:{checked:!0,size:"sm",label:"sm checkbox"}}),n=new j({props:{checked:!0,size:"md",label:"md checkbox"}}),c=new j({props:{checked:!0,size:"lg",label:"lg checkbox"}}),g=new j({props:{checked:!0,size:"xl",label:"xl checkbox"}}),{c(){_(e.$$.fragment),a=z(),_(t.$$.fragment),s=z(),_(n.$$.fragment),l=z(),_(c.$$.fragment),i=z(),_(g.$$.fragment)},l(p){v(e.$$.fragment,p),a=w(p),v(t.$$.fragment,p),s=w(p),v(n.$$.fragment,p),l=w(p),v(c.$$.fragment,p),i=w(p),v(g.$$.fragment,p)},m(p,V){C(e,p,V),m(p,a,V),C(t,p,V),m(p,s,V),C(n,p,V),m(p,l,V),C(c,p,V),m(p,i,V),C(g,p,V),R=!0},p:Z,i(p){R||(k(e.$$.fragment,p),k(t.$$.fragment,p),k(n.$$.fragment,p),k(c.$$.fragment,p),k(g.$$.fragment,p),R=!0)},o(p){b(e.$$.fragment,p),b(t.$$.fragment,p),b(n.$$.fragment,p),b(c.$$.fragment,p),b(g.$$.fragment,p),R=!1},d(p){x(e,p),p&&u(a),x(t,p),p&&u(s),x(n,p),p&&u(l),x(c,p),p&&u(i),x(g,p)}}}function Gn(r){let e,a;return e=new Ce({props:{position:"center",$$slots:{default:[jn]},$$scope:{ctx:r}}}),{c(){_(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,s){C(e,t,s),a=!0},p(t,[s]){const n={};s&1&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){a||(k(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){x(e,t)}}}const Mn=`<script>
    import { Checkbox } from '@svelteuidev/core';
<\/script>

<Checkbox checked size='xs' label='xs checkbox' />
<Checkbox checked size='sm' label='sm checkbox' />
<Checkbox checked size='md' label='md checkbox' />
<Checkbox checked size='lg' label='lg checkbox' />
<Checkbox checked size='xl' label='xl checkbox' />`,Tn="demo",Bn={code:Mn};class In extends I{constructor(e){super(),A(this,e,null,Gn,W,{})}}const An=Object.freeze(Object.defineProperty({__proto__:null,configuration:Bn,default:In,type:Tn},Symbol.toStringTag,{value:"Module"}));function Et(r,e,a){const t=r.slice();return t[3]=e[a],t[4]=e,t[5]=a,t}function St(r){let e,a,t;function s(l){r[2](l,r[5])}let n={label:r[3].label};return r[0][r[5]].value!==void 0&&(n.checked=r[0][r[5]].value),e=new j({props:n}),Ht.push(()=>Ot(e,"checked",s)),{c(){_(e.$$.fragment)},l(l){v(e.$$.fragment,l)},m(l,c){C(e,l,c),t=!0},p(l,c){r=l;const i={};c&1&&(i.label=r[3].label),!a&&c&1&&(a=!0,i.checked=r[0][r[5]].value,Dt(()=>a=!1)),e.$set(i)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){b(e.$$.fragment,l),t=!1},d(l){x(e,l)}}}function Wn(r){let e,a,t=r[0],s=[];for(let l=0;l<t.length;l+=1)s[l]=St(Et(r,t,l));const n=l=>b(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=ie()},l(l){for(let c=0;c<s.length;c+=1)s[c].l(l);e=ie()},m(l,c){for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(l,c);m(l,e,c),a=!0},p(l,c){if(c&1){t=l[0];let i;for(i=0;i<t.length;i+=1){const g=Et(l,t,i);s[i]?(s[i].p(g,c),k(s[i],1)):(s[i]=St(g),s[i].c(),k(s[i],1),s[i].m(e.parentNode,e))}for(Rt(),i=t.length;i<s.length;i+=1)n(i);Pt()}},i(l){if(!a){for(let c=0;c<t.length;c+=1)k(s[c]);a=!0}},o(l){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)b(s[c]);a=!1},d(l){jt(s,l),l&&u(e)}}}function qn(r){let e,a,t,s;return e=new j({props:{label:"Receive all notifications",indeterminate:!r[1],checked:r[1]}}),t=new Ce({props:{$$slots:{default:[Wn]},$$scope:{ctx:r}}}),{c(){_(e.$$.fragment),a=z(),_(t.$$.fragment)},l(n){v(e.$$.fragment,n),a=w(n),v(t.$$.fragment,n)},m(n,l){C(e,n,l),m(n,a,l),C(t,n,l),s=!0},p(n,l){const c={};l&2&&(c.indeterminate=!n[1]),l&2&&(c.checked=n[1]),e.$set(c);const i={};l&65&&(i.$$scope={dirty:l,ctx:n}),t.$set(i)},i(n){s||(k(e.$$.fragment,n),k(t.$$.fragment,n),s=!0)},o(n){b(e.$$.fragment,n),b(t.$$.fragment,n),s=!1},d(n){x(e,n),n&&u(a),x(t,n)}}}function Fn(r){let e,a;return e=new Ce({props:{position:"center",$$slots:{default:[qn]},$$scope:{ctx:r}}}),{c(){_(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,s){C(e,t,s),a=!0},p(t,[s]){const n={};s&67&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){a||(k(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){x(e,t)}}}const Nn=`<script>
    import { Checkbox, Stack } from '@svelteuidev/core';

    let items = [
        { label: 'Receive email notifications', value: false },
        { label: 'Receive sms notifications', value: false },
        { label: 'Receive push notifications', value: false }
    ]
    $: globalValue = items.every(i => i.value);
<\/script>

<Checkbox label='Receive all notifications' indeterminate={!globalValue} checked={globalValue} />
    <Stack>
        {#each items as item, index}
            <Checkbox bind:checked={items[index].value} label={item.label} />
    {/each}
</Stack>`,Un="demo",Zn={code:Nn};function Ln(r,e,a){let t,s=[{label:"Receive email notifications",value:!1},{label:"Receive sms notifications",value:!1},{label:"Receive push notifications",value:!1}];function n(l,c){r.$$.not_equal(s[c].value,l)&&(s[c].value=l,a(0,s))}return r.$$.update=()=>{r.$$.dirty&1&&a(1,t=s.every(l=>l.value))},[s,t,n]}class Xn extends I{constructor(e){super(),A(this,e,Ln,Fn,W,{})}}const Yn=Object.freeze(Object.defineProperty({__proto__:null,configuration:Zn,default:Xn,type:Un},Symbol.toStringTag,{value:"Module"}));function Jn(r){let e,a;const t=[{items:Vt},{value:["svelte"]},r[0]];let s={};for(let n=0;n<t.length;n+=1)s=T(s,t[n]);return e=new Kt({props:s}),{c(){_(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,l){C(e,n,l),a=!0},p(n,l){const c=l&1?ve(t,[l&0&&{items:Vt},t[1],l&1&&rt(n[0])]):{};e.$set(c)},i(n){a||(k(e.$$.fragment,n),a=!0)},o(n){b(e.$$.fragment,n),a=!1},d(n){x(e,n)}}}function Kn(r){let e,a;return e=new Gt({props:{$$slots:{default:[Jn]},$$scope:{ctx:r}}}),{c(){_(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,s){C(e,t,s),a=!0},p(t,[s]){const n={};s&3&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){a||(k(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){x(e,t)}}}const Qn=(r,e)=>`
<script>
  import { CheckboxGroup } from '@svelteuidev/core';
<\/script>

<CheckboxGroup ${r} />
`,es="configurator",ts={codeTemplate:Qn,configurator:[{name:"color",type:"color",initialValue:"blue",defaultValue:"blue"},{name:"direction",type:"select",data:[{label:"row",value:"row"},{label:"column",value:"column"}],initialValue:"row",defaultValue:"row"},{name:"label",type:"string",initialValue:"Select your favorite framework/library"},{name:"description",type:"string",initialValue:"This is anonymous"},{name:"error",type:"string"},{name:"spacing",type:"size",initialValue:"sm",defaultValue:"sm"},{name:"size",type:"size",initialValue:"sm",defaultValue:"sm"},{name:"required",type:"boolean",initialValue:!0,defaultValue:!0}],multiline:!0},Vt=[{label:"Svelte",value:"svelte"},{label:"React",value:"react"},{label:"Vue",value:"vue"},{label:"Angular",value:"angular"},{label:"Solid",value:"solid"}];function ns(r,e,a){let{props:t={}}=e;return r.$$set=s=>{"props"in s&&a(0,t=s.props)},[t]}class ss extends I{constructor(e){super(),A(this,e,ns,Kn,W,{props:0})}}const as=Object.freeze(Object.defineProperty({__proto__:null,configuration:ts,default:ss,type:es},Symbol.toStringTag,{value:"Module"}));function ls(r){let e,a,t,s,n,l,c,i,g,R,p,V,f,P,q,te,L,F,X,N,ue,d,D,pe,fe,Te,Be,me,Ie,Ae,ke,We,qe,$e,Fe,Ne,be,Ue,Ze,xe,Y,ze,ne,Le,we,B,Xe,de,Ye,Je,ge,Ke,Qe,ye,J,Ee,se,et,Se,U,tt,he,nt,st,Ve,K,Mt=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token punctuation">/></span></span> // -> not ok, input is not labeled
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>My checkbox<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> // -> ok, input and label is connected
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>My checkbox<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> // -> ok, label is not visible but will be announced by screen reader</code>`,He,ae,at,Oe,Q,De,le,lt,Re,ee,Tt=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> CheckboxGroup <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@svelteuidev/core'</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">&#123;</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Svelte'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'svelte'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#123;</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'React'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'react'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#123;</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Vue'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'vue'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#123;</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Angular'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'angular'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#123;</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Solid'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'solid'</span> <span class="token punctuation">&#125;</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CheckboxGroup</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>items<span class="token punctuation">&#125;</span></span> <span class="token attr-name">value=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token string">'svelte'</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,_e;return document.title=e=ot+" - SvelteUI",t=new Ft({props:{title:ot,group:rs,packageGroup:cs,slug:is,category:us,description:ps,importCode:fs,source:ms,docs:ks}}),i=new re({props:{demo:$n}}),f=new re({props:{demo:Cn}}),F=new re({props:{demo:Pn}}),Y=new re({props:{demo:An}}),J=new re({props:{demo:Yn}}),Q=new re({props:{demo:as}}),{c(){a=z(),_(t.$$.fragment),s=z(),n=H("h2"),l=y("Usage"),c=z(),_(i.$$.fragment),g=z(),R=H("h2"),p=y("States"),V=z(),_(f.$$.fragment),P=z(),q=H("h2"),te=y("Replace icon"),L=z(),_(F.$$.fragment),X=z(),N=H("h2"),ue=y("Sizes"),d=z(),D=H("p"),pe=y("Checkbox has 5 predefined sizes: "),fe=H("code"),Te=y("xs"),Be=y(", "),me=H("code"),Ie=y("sm"),Ae=y(", "),ke=H("code"),We=y("md"),qe=y(", "),$e=H("code"),Fe=y("lg"),Ne=y(", "),be=H("code"),Ue=y("xl"),Ze=y(". Size defines label font-size and input width and height:"),xe=z(),_(Y.$$.fragment),ze=z(),ne=H("h2"),Le=y("Indeterminate state"),we=z(),B=H("p"),Xe=y("Checkbox supports indeterminate state. When "),de=H("code"),Ye=y("indeterminate"),Je=y(" prop is true, "),ge=H("code"),Ke=y("checked"),Qe=y(" prop is ignored:"),ye=z(),_(J.$$.fragment),Ee=z(),se=H("h2"),et=y("Accessibility"),Se=z(),U=H("p"),tt=y("Provide "),he=H("code"),nt=y("aria-label"),st=y(" in case you use checkbox without label for screen reader support:"),Ve=z(),K=H("pre"),He=z(),ae=H("h1"),at=y("CheckboxGroup"),Oe=z(),_(Q.$$.fragment),De=z(),le=H("h2"),lt=y("Controlled"),Re=z(),ee=H("pre"),this.h()},l(o){Wt("svelte-pki6ul",document.head).forEach(u),a=w(o),v(t.$$.fragment,o),s=w(o),n=O(o,"H2",{});var it=S(n);l=E(it,"Usage"),it.forEach(u),c=w(o),v(i.$$.fragment,o),g=w(o),R=O(o,"H2",{});var ut=S(R);p=E(ut,"States"),ut.forEach(u),V=w(o),v(f.$$.fragment,o),P=w(o),q=O(o,"H2",{});var pt=S(q);te=E(pt,"Replace icon"),pt.forEach(u),L=w(o),v(F.$$.fragment,o),X=w(o),N=O(o,"H2",{});var ft=S(N);ue=E(ft,"Sizes"),ft.forEach(u),d=w(o),D=O(o,"P",{});var G=S(D);pe=E(G,"Checkbox has 5 predefined sizes: "),fe=O(G,"CODE",{});var mt=S(fe);Te=E(mt,"xs"),mt.forEach(u),Be=E(G,", "),me=O(G,"CODE",{});var kt=S(me);Ie=E(kt,"sm"),kt.forEach(u),Ae=E(G,", "),ke=O(G,"CODE",{});var $t=S(ke);We=E($t,"md"),$t.forEach(u),qe=E(G,", "),$e=O(G,"CODE",{});var bt=S($e);Fe=E(bt,"lg"),bt.forEach(u),Ne=E(G,", "),be=O(G,"CODE",{});var dt=S(be);Ue=E(dt,"xl"),dt.forEach(u),Ze=E(G,". Size defines label font-size and input width and height:"),G.forEach(u),xe=w(o),v(Y.$$.fragment,o),ze=w(o),ne=O(o,"H2",{});var gt=S(ne);Le=E(gt,"Indeterminate state"),gt.forEach(u),we=w(o),B=O(o,"P",{});var oe=S(B);Xe=E(oe,"Checkbox supports indeterminate state. When "),de=O(oe,"CODE",{});var ht=S(de);Ye=E(ht,"indeterminate"),ht.forEach(u),Je=E(oe," prop is true, "),ge=O(oe,"CODE",{});var _t=S(ge);Ke=E(_t,"checked"),_t.forEach(u),Qe=E(oe," prop is ignored:"),oe.forEach(u),ye=w(o),v(J.$$.fragment,o),Ee=w(o),se=O(o,"H2",{});var vt=S(se);et=E(vt,"Accessibility"),vt.forEach(u),Se=w(o),U=O(o,"P",{});var Pe=S(U);tt=E(Pe,"Provide "),he=O(Pe,"CODE",{});var Ct=S(he);nt=E(Ct,"aria-label"),Ct.forEach(u),st=E(Pe," in case you use checkbox without label for screen reader support:"),Pe.forEach(u),Ve=w(o),K=O(o,"PRE",{class:!0});var Bt=S(K);Bt.forEach(u),He=w(o),ae=O(o,"H1",{});var xt=S(ae);at=E(xt,"CheckboxGroup"),xt.forEach(u),Oe=w(o),v(Q.$$.fragment,o),De=w(o),le=O(o,"H2",{});var zt=S(le);lt=E(zt,"Controlled"),zt.forEach(u),Re=w(o),ee=O(o,"PRE",{class:!0});var It=S(ee);It.forEach(u),this.h()},h(){M(K,"class","language-svelte"),M(ee,"class","language-svelte")},m(o,$){m(o,a,$),C(t,o,$),m(o,s,$),m(o,n,$),h(n,l),m(o,c,$),C(i,o,$),m(o,g,$),m(o,R,$),h(R,p),m(o,V,$),C(f,o,$),m(o,P,$),m(o,q,$),h(q,te),m(o,L,$),C(F,o,$),m(o,X,$),m(o,N,$),h(N,ue),m(o,d,$),m(o,D,$),h(D,pe),h(D,fe),h(fe,Te),h(D,Be),h(D,me),h(me,Ie),h(D,Ae),h(D,ke),h(ke,We),h(D,qe),h(D,$e),h($e,Fe),h(D,Ne),h(D,be),h(be,Ue),h(D,Ze),m(o,xe,$),C(Y,o,$),m(o,ze,$),m(o,ne,$),h(ne,Le),m(o,we,$),m(o,B,$),h(B,Xe),h(B,de),h(de,Ye),h(B,Je),h(B,ge),h(ge,Ke),h(B,Qe),m(o,ye,$),C(J,o,$),m(o,Ee,$),m(o,se,$),h(se,et),m(o,Se,$),m(o,U,$),h(U,tt),h(U,he),h(he,nt),h(U,st),m(o,Ve,$),m(o,K,$),K.innerHTML=Mt,m(o,He,$),m(o,ae,$),h(ae,at),m(o,Oe,$),C(Q,o,$),m(o,De,$),m(o,le,$),h(le,lt),m(o,Re,$),m(o,ee,$),ee.innerHTML=Tt,_e=!0},p(o,[$]){(!_e||$&0)&&e!==(e=ot+" - SvelteUI")&&(document.title=e)},i(o){_e||(k(t.$$.fragment,o),k(i.$$.fragment,o),k(f.$$.fragment,o),k(F.$$.fragment,o),k(Y.$$.fragment,o),k(J.$$.fragment,o),k(Q.$$.fragment,o),_e=!0)},o(o){b(t.$$.fragment,o),b(i.$$.fragment,o),b(f.$$.fragment,o),b(F.$$.fragment,o),b(Y.$$.fragment,o),b(J.$$.fragment,o),b(Q.$$.fragment,o),_e=!1},d(o){o&&u(a),x(t,o),o&&u(s),o&&u(n),o&&u(c),x(i,o),o&&u(g),o&&u(R),o&&u(V),x(f,o),o&&u(P),o&&u(q),o&&u(L),x(F,o),o&&u(X),o&&u(N),o&&u(d),o&&u(D),o&&u(xe),x(Y,o),o&&u(ze),o&&u(ne),o&&u(we),o&&u(B),o&&u(ye),x(J,o),o&&u(Ee),o&&u(se),o&&u(Se),o&&u(U),o&&u(Ve),o&&u(K),o&&u(He),o&&u(ae),o&&u(Oe),x(Q,o),o&&u(De),o&&u(le),o&&u(Re),o&&u(ee)}}}const os={title:"Checkbox",group:"svelteuidev-core",packageGroup:"@svelteuidev/core",slug:"/core/checkbox/",category:"inputs",description:"Wrapper around the checkbox input type",importCode:"import { Checkbox } from '@svelteuidev/core';",source:"svelteui-core/src/components/Checkbox/Checkbox.svelte",docs:"core/checkbox.md"},{title:ot,group:rs,packageGroup:cs,slug:is,category:us,description:ps,importCode:fs,source:ms,docs:ks}=os;class zs extends I{constructor(e){super(),A(this,e,null,ls,W,{})}}export{zs as default,os as metadata};
