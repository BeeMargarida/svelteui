import{S as F,i as J,s as K,y as b,a as E,z as k,c as U,A as y,b as u,a1 as L,g as p,d as v,B as S,h as f,aj as Q,q as _,r as g,e as M,v as W,f as X,k as Y,l as B,m as I,_ as Z,a9 as N,al as ee,n as te,Y as $}from"../chunks/index.b0fe5a0f.js";import{T as oe}from"../chunks/navigation.9bd98935.js";import{H as re}from"../chunks/Heading.19c03976.js";import{D as le}from"../chunks/Demo.82a35c94.js";import{f as R}from"../chunks/index.9cca5c0f.js";import{A as ne}from"../chunks/ArrowUp.86b238a6.js";import{A as se}from"../chunks/Affix.4484eb35.js";import{B as ie}from"../chunks/Button.36168772.js";const{window:fe}=Q;function ae(a){let t;return{c(){t=_("Affix is located at the bottom of the screen, scroll to see it")},l(o){t=g(o,"Affix is located at the bottom of the screen, scroll to see it")},m(o,e){u(o,t,e)},d(o){o&&f(t)}}}function V(a){let t,o,e,l;return o=new ie({props:{$$slots:{leftIcon:[me],default:[ce]},$$scope:{ctx:a}}}),o.$on("click",a[2]),{c(){t=Y("div"),b(o.$$.fragment)},l(n){t=B(n,"DIV",{});var c=I(t);k(o.$$.fragment,c),c.forEach(f)},m(n,c){u(n,t,c),y(o,t,null),l=!0},p(n,c){const s={};c&8&&(s.$$scope={dirty:c,ctx:n}),o.$set(s)},i(n){l||(p(o.$$.fragment,n),Z(()=>{l&&(e||(e=N(t,R,{y:20,duration:250},!0)),e.run(1))}),l=!0)},o(n){v(o.$$.fragment,n),e||(e=N(t,R,{y:20,duration:250},!1)),e.run(0),l=!1},d(n){n&&f(t),S(o),n&&e&&e.end()}}}function ce(a){let t;return{c(){t=_("Scroll to top")},l(o){t=g(o,"Scroll to top")},m(o,e){u(o,t,e)},d(o){o&&f(t)}}}function me(a){let t,o;return t=new ne({}),{c(){b(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,l){y(t,e,l),o=!0},i(e){o||(p(t.$$.fragment,e),o=!0)},o(e){v(t.$$.fragment,e),o=!1},d(e){S(t,e)}}}function ue(a){let t,o,e=a[0]>0&&V(a);return{c(){e&&e.c(),t=M()},l(l){e&&e.l(l),t=M()},m(l,n){e&&e.m(l,n),u(l,t,n),o=!0},p(l,n){l[0]>0?e?(e.p(l,n),n&1&&p(e,1)):(e=V(l),e.c(),p(e,1),e.m(t.parentNode,t)):e&&(W(),v(e,1,1,()=>{e=null}),X())},i(l){o||(p(e),o=!0)},o(l){v(e),o=!1},d(l){e&&e.d(l),l&&f(t)}}}function pe(a){let t,o,e,l,n,c;return t=new oe({props:{align:"center",$$slots:{default:[ae]},$$scope:{ctx:a}}}),e=new se({props:{position:{bottom:20,right:20},$$slots:{default:[ue]},$$scope:{ctx:a}}}),{c(){b(t.$$.fragment),o=E(),b(e.$$.fragment)},l(s){k(t.$$.fragment,s),o=U(s),k(e.$$.fragment,s)},m(s,i){y(t,s,i),u(s,o,i),y(e,s,i),l=!0,n||(c=L(fe,"scroll",a[1]),n=!0)},p(s,[i]){const h={};i&8&&(h.$$scope={dirty:i,ctx:s}),t.$set(h);const d={};i&9&&(d.$$scope={dirty:i,ctx:s}),e.$set(d)},i(s){l||(p(t.$$.fragment,s),p(e.$$.fragment,s),l=!0)},o(s){v(t.$$.fragment,s),v(e.$$.fragment,s),l=!1},d(s){S(t,s),s&&f(o),S(e,s),n=!1,c()}}}const de=`
<script>
  import { fly } from 'svelte/transition';
	import { Affix, Button, Text } from '@svelteuidev/core';
	import { ArrowUp } from 'radix-icons-svelte';

  let scrollY = 0;
<\/script>

<svelte:window on:scroll={() => scrollY = window.scrollY } />

<Text align="center">Affix is located at the bottom of the screen, scroll to see it</Text>
<Affix position={{ bottom: 20, right: 20 }}>
    {#if scrollY > 0}
        <div transition:fly={{ y: 20, duration: 250 }}>
            <Button on:click={() => window.scrollTo(0, 0)}>
                <svelte:fragment slot='leftIcon'>
                    <ArrowUp />
                </svelte:fragment>
                Scroll to top
            </Button>
        </div>
    {/if}
</Affix>`,$e="demo",_e={code:de};function ge(a,t,o){let e=0;return[e,()=>o(0,e=window.scrollY),()=>window.scrollTo(0,0)]}class ve extends F{constructor(t){super(),J(this,t,ge,pe,K,{})}}const xe=Object.freeze(Object.defineProperty({__proto__:null,configuration:_e,default:ve,type:$e},Symbol.toStringTag,{value:"Module"}));function he(a){let t,o,e,l,n,c,s,i,h,d,C,D,w,j,H,P,x,T;return document.title=t=O+" - SvelteUI",e=new re({props:{title:O,group:Ae,packageGroup:be,slug:ke,category:ye,description:Se,importCode:Te,source:Ee,docs:Ue}}),x=new le({props:{demo:xe}}),{c(){o=E(),b(e.$$.fragment),l=E(),n=Y("h2"),c=_("Usage"),s=E(),i=Y("p"),h=_("Affix renders an element inside the "),d=Y("code"),C=_("target"),D=_(" prop given, with fixed position inside a "),w=Y("a"),j=_("Portal"),H=_(" component."),P=E(),b(x.$$.fragment),this.h()},l(r){ee("svelte-pki6ul",document.head).forEach(f),o=U(r),k(e.$$.fragment,r),l=U(r),n=B(r,"H2",{});var q=I(n);c=g(q,"Usage"),q.forEach(f),s=U(r),i=B(r,"P",{});var A=I(i);h=g(A,"Affix renders an element inside the "),d=B(A,"CODE",{});var z=I(d);C=g(z,"target"),z.forEach(f),D=g(A," prop given, with fixed position inside a "),w=B(A,"A",{href:!0});var G=I(w);j=g(G,"Portal"),G.forEach(f),H=g(A," component."),A.forEach(f),P=U(r),k(x.$$.fragment,r),this.h()},h(){te(w,"href","/core/portal")},m(r,m){u(r,o,m),y(e,r,m),u(r,l,m),u(r,n,m),$(n,c),u(r,s,m),u(r,i,m),$(i,h),$(i,d),$(d,C),$(i,D),$(i,w),$(w,j),$(i,H),u(r,P,m),y(x,r,m),T=!0},p(r,[m]){(!T||m&0)&&t!==(t=O+" - SvelteUI")&&(document.title=t)},i(r){T||(p(e.$$.fragment,r),p(x.$$.fragment,r),T=!0)},o(r){v(e.$$.fragment,r),v(x.$$.fragment,r),T=!1},d(r){r&&f(o),S(e,r),r&&f(l),r&&f(n),r&&f(s),r&&f(i),r&&f(P),S(x,r)}}}const we={title:"Affix",group:"svelteuidev-core",packageGroup:"@svelteuidev/core",slug:"/core/affix/",category:"overlay",description:"Render Svelte component inside portal at fixed position",importCode:"import { Affix } from '@svelteuidev/core';",source:"svelteui-core/src/components/Affix/Affix.svelte",docs:"core/affix.md"},{title:O,group:Ae,packageGroup:be,slug:ke,category:ye,description:Se,importCode:Te,source:Ee,docs:Ue}=we;class Oe extends F{constructor(t){super(),J(this,t,null,he,K,{})}}export{Oe as default,we as metadata};
