import{S as G,i as L,s as M,y as f,z as m,A as u,g as p,d as _,B as d,q as w,r as y,b as i,h as l,a as x,c as h,k as U,al as R,l as j,m as H,Y as A}from"../chunks/index.b0fe5a0f.js";import{B as W}from"../chunks/navigation.9bd98935.js";import{H as V}from"../chunks/Heading.19c03976.js";import{D as N}from"../chunks/Demo.82a35c94.js";import{C as Q}from"../chunks/Center.b83aac32.js";import{A as X}from"../chunks/ArrowLeft.eea6f972.js";function Z(a){let t;return{c(){t=w("All elements inside Center are centered")},l(n){t=y(n,"All elements inside Center are centered")},m(n,e){i(n,t,e)},d(n){n&&l(t)}}}function ee(a){let t,n;return t=new W({props:{css:{bc:"$blue200"},$$slots:{default:[Z]},$$scope:{ctx:a}}}),{c(){f(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,s){u(t,e,s),n=!0},p(e,s){const o={};s&1&&(o.$$scope={dirty:s,ctx:e}),t.$set(o)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){d(t,e)}}}function te(a){let t,n;return t=new Q({props:{override:{maxW:400,height:200,bc:"$blue50",m:"auto",p:"$5"},$$slots:{default:[ee]},$$scope:{ctx:a}}}),{c(){f(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,s){u(t,e,s),n=!0},p(e,[s]){const o={};s&1&&(o.$$scope={dirty:s,ctx:e}),t.$set(o)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){d(t,e)}}}const re=`
    <script>
        import { Center } from '@svelteuidev/core';
    <\/script>

    <Center>
        All elements inside Center are centered
    </Center>
	`,ne="demo",oe={code:re};class se extends G{constructor(t){super(),L(this,t,null,te,M,{})}}const le=Object.freeze(Object.defineProperty({__proto__:null,configuration:oe,default:se,type:ne},Symbol.toStringTag,{value:"Module"}));function ae(a){let t;return{c(){t=w("Back to the homepage")},l(n){t=y(n,"Back to the homepage")},m(n,e){i(n,t,e)},d(n){n&&l(t)}}}function ce(a){let t,n,e,s;return t=new X({props:{size:14}}),e=new W({props:{css:{ml:5},$$slots:{default:[ae]},$$scope:{ctx:a}}}),{c(){f(t.$$.fragment),n=x(),f(e.$$.fragment)},l(o){m(t.$$.fragment,o),n=h(o),m(e.$$.fragment,o)},m(o,$){u(t,o,$),i(o,n,$),u(e,o,$),s=!0},p(o,$){const v={};$&1&&(v.$$scope={dirty:$,ctx:o}),e.$set(v)},i(o){s||(p(t.$$.fragment,o),p(e.$$.fragment,o),s=!0)},o(o){_(t.$$.fragment,o),_(e.$$.fragment,o),s=!1},d(o){d(t,o),o&&l(n),d(e,o)}}}function ie(a){let t,n;return t=new Q({props:{inline:!0,$$slots:{default:[ce]},$$scope:{ctx:a}}}),{c(){f(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,s){u(t,e,s),n=!0},p(e,s){const o={};s&1&&(o.$$scope={dirty:s,ctx:e}),t.$set(o)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){d(t,e)}}}function $e(a){let t,n;return t=new W({props:{css:{color:"$blue600"},root:"a",href:"/",target:"_blank",$$slots:{default:[ie]},$$scope:{ctx:a}}}),{c(){f(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,s){u(t,e,s),n=!0},p(e,[s]){const o={};s&1&&(o.$$scope={dirty:s,ctx:e}),t.$set(o)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){d(t,e)}}}const fe=`
    <script>
        import { Anchor, Center, Box } from '@svelteuidev/core';
    <\/script>
    
    <Anchor href="https://svelteui.org" target="_blank">
      <Center inline>
        <ArrowLeft size={14} />
        <Box css={{ ml: 5 }}>Back to SvelteUI website</Box>
      </Center>
    </Anchor>
	`,me="demo",ue={code:fe};class pe extends G{constructor(t){super(),L(this,t,null,$e,M,{})}}const _e=Object.freeze(Object.defineProperty({__proto__:null,configuration:ue,default:pe,type:me},Symbol.toStringTag,{value:"Module"}));function de(a){let t,n,e,s,o,$,v,C,z,k,P,E,g,T,B,D,q,I,b,S;return document.title=t=F+" - SvelteUI",e=new V({props:{title:F,group:ve,packageGroup:Ce,slug:be,category:xe,description:he,importCode:we,source:ye,docs:ke}}),C=new N({props:{demo:le}}),b=new N({props:{demo:_e}}),{c(){n=x(),f(e.$$.fragment),s=x(),o=U("h2"),$=w("Usage"),v=x(),f(C.$$.fragment),z=x(),k=U("h2"),P=w("Inline"),E=x(),g=U("p"),T=w("To use Center with inline elements, set "),B=U("code"),D=w("inline"),q=w(" prop. For example, you can center link icon and label:"),I=x(),f(b.$$.fragment)},l(r){R("svelte-pki6ul",document.head).forEach(l),n=h(r),m(e.$$.fragment,r),s=h(r),o=j(r,"H2",{});var Y=H(o);$=y(Y,"Usage"),Y.forEach(l),v=h(r),m(C.$$.fragment,r),z=h(r),k=j(r,"H2",{});var J=H(k);P=y(J,"Inline"),J.forEach(l),E=h(r),g=j(r,"P",{});var O=H(g);T=y(O,"To use Center with inline elements, set "),B=j(O,"CODE",{});var K=H(B);D=y(K,"inline"),K.forEach(l),q=y(O," prop. For example, you can center link icon and label:"),O.forEach(l),I=h(r),m(b.$$.fragment,r)},m(r,c){i(r,n,c),u(e,r,c),i(r,s,c),i(r,o,c),A(o,$),i(r,v,c),u(C,r,c),i(r,z,c),i(r,k,c),A(k,P),i(r,E,c),i(r,g,c),A(g,T),A(g,B),A(B,D),A(g,q),i(r,I,c),u(b,r,c),S=!0},p(r,[c]){(!S||c&0)&&t!==(t=F+" - SvelteUI")&&(document.title=t)},i(r){S||(p(e.$$.fragment,r),p(C.$$.fragment,r),p(b.$$.fragment,r),S=!0)},o(r){_(e.$$.fragment,r),_(C.$$.fragment,r),_(b.$$.fragment,r),S=!1},d(r){r&&l(n),d(e,r),r&&l(s),r&&l(o),r&&l(v),d(C,r),r&&l(z),r&&l(k),r&&l(E),r&&l(g),r&&l(I),d(b,r)}}}const ge={title:"Center",group:"svelteuidev-core",packageGroup:"@svelteuidev/core",slug:"/core/center/",category:"layout",description:"Centers content vertically and horizontally",importCode:"import { Center } from '@svelteuidev/core';",source:"svelteui-core/src/components/Center/Center.svelte",docs:"core/center.md"},{title:F,group:ve,packageGroup:Ce,slug:be,category:xe,description:he,importCode:we,source:ye,docs:ke}=ge;class Oe extends G{constructor(t){super(),L(this,t,null,de,M,{})}}export{Oe as default,ge as metadata};
