import{S as ft,i as ct,s as mt,y as z,z as I,A as H,g as D,d as O,B as P,X as Je,k as n,q as i,a as m,l as v,m as p,r as u,h as t,c as d,n as b,b as s,W as o}from"./index.b4f0bbdc.js";import{D as ht}from"./Demo.9cccb4ab.js";import{C as $t}from"./Center.c93e1a75.js";import{B as Ye}from"./Box.195443f6.js";import{P as dt}from"./Prism.7d17a500.js";const bt=`
    export const themeMap = {
        ...defaultStitchesThemeMap,
        width: 'space',
        height: 'space',
        minWidth: 'space',
        maxWidth: 'space',
        minHeight: 'space',
        maxHeight: 'space',
        flexBasis: 'space',
        gridTemplateColumns: 'space',
        gridTemplateRows: 'space',
        blockSize: 'space',
        minBlockSize: 'space',
        maxBlockSize: 'space',
        inlineSize: 'space',
        minInlineSize: 'space',
        maxInlineSize: 'space',
        borderWidth: 'borderWeights'
    };
`,gt=`
    export const utils = {
        // Abbreviated padding properties
        pt: (value) => ({
            paddingTop: value
        }),
        pr: (value) => ({
            paddingRight: value
        }),
        pb: (value) => ({
            paddingBottom: value
        }),
        pl: (value) => ({
            paddingLeft: value
        }),
        px: (value) => ({
            paddingLeft: value,
            paddingRight: value
        }),
        py: (value) => ({
            paddingTop: value,
            paddingBottom: value
        }),
        // Abbreviated padding properties
        m: (value) => ({
            margin: value
        }),
        mt: (value) => ({
            marginTop: value
        }),
        mr: (value) => ({
            marginRight: value
        }),
        mb: (value) => ({
            marginBottom: value
        }),
        ml: (value) => ({
            marginLeft: value
        }),
        mx: (value) => ({
            marginLeft: value,
            marginRight: value
        }),
        my: (value) => ({
            marginTop: value,
            marginBottom: value
        }),
        ta: (value) => ({
            textAlign: value
        }),
        tt: (value) => ({
            textTransform: value
        }),
        to: (value) => ({
            textOverflow: value
        }),
        d: (value) => ({ display: value }),
        dflex: (value) => ({
            display: 'flex',
            alignItems: value,
            justifyContent: value
        }),
        fd: (value) => ({
            flexDirection: value
        }),
        fw: (value) => ({ flexWrap: value }),
        ai: (value) => ({
            alignItems: value
        }),
        ac: (value) => ({
            alignContent: value
        }),
        jc: (value) => ({
            justifyContent: value
        }),
        as: (value) => ({
            alignSelf: value
        }),
        fg: (value) => ({ flexGrow: value }),
        fs: (value) => ({
            fontSize: value
        }),
        fb: (value) => ({
            flexBasis: value
        }),
        bc: (value) => ({
            backgroundColor: value
        }),
        bf: (value) => ({
            backdropFilter: value
        }),
        bg: (value) => ({
            background: value
        }),
        bgBlur: (value) => ({
            bf: 'saturate(180%) blur(10px)',
            bg: \`\${value}600\`
        }),
        bgColor: (value) => ({
            backgroundColor: value
        }),
        backgroundClip: (value) => ({
            WebkitBackgroundClip: value,
            backgroundClip: value
        }),
        bgClip: (value) => ({
            WebkitBackgroundClip: value,
            backgroundClip: value
        }),
        br: (value) => ({
            borderRadius: value
        }),
        bw: (value) => ({
            borderWidth: value
        }),
        btrr: (value) => ({
            borderTopRightRadius: value
        }),
        bbrr: (value) => ({
            borderBottomRightRadius: value
        }),
        bblr: (value) => ({
            borderBottomLeftRadius: value
        }),
        btlr: (value) => ({
            borderTopLeftRadius: value
        }),
        bs: (value) => ({
            boxShadow: value
        }),
        normalShadow: (value) => ({
            boxShadow:  \`0 4px 14px 0 $colors\${value}\`
        }),
        normalShadowVar: (value) => ({
            boxShadow: \`0 4px 14px 0 \${value}\`
        }),
        lh: (value) => ({
            lineHeight: value
        }),
        ov: (value) => ({ overflow: value }),
        ox: (value) => ({
            overflowX: value
        }),
        oy: (value) => ({
            overflowY: value
        }),
        pe: (value) => ({
            pointerEvents: value
        }),
        events: (value) => ({
            pointerEvents: value
        }),
        us: (value) => ({
            WebkitUserSelect: value,
            userSelect: value
        }),
        userSelect: (value) => ({
            WebkitUserSelect: value,
            userSelect: value
        }),
        w: (value) => ({ width: value }),
        h: (value) => ({ height: value }),
        mw: (value) => ({ maxWidth: value }),
        maxW: (value) => ({
            maxWidth: value
        }),
        mh: (value) => ({
            maxHeight: value
        }),
        maxH: (value) => ({
            maxHeight: value
        }),
        size: (value) => ({
            width: value,
            height: value
        }),
        minSize: (value) => ({
            minWidth: value,
            minHeight: value,
            width: value,
            height: value
        }),
        sizeMin: (value) => ({
            minWidth: value,
            minHeight: value,
            width: value,
            height: value
        }),
        maxSize: (value) => ({
            maxWidth: value,
            maxHeight: value
        }),
        sizeMax: (value) => ({
            maxWidth: value,
            maxHeight: value
        }),
        appearance: (value) => ({
            WebkitAppearance: value,
            appearance: value
        }),
        scale: (value) => ({
            transform: \`scale(\${value})\`
        }),
        linearGradient: (value) => ({
            backgroundImage: \`linear-gradient(\${value})\`
        }),
        tdl: (value) => ({
            textDecorationLine: value
        }),
        // Text gradient effect
        textGradient: (value) => ({
            backgroundImage: \`linear-gradient(\${value})\`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
        })
    };
    `;function xt(h){let a,f;return a=new Ye({props:{css:h[0]}}),{c(){z(a.$$.fragment)},l(l){I(a.$$.fragment,l)},m(l,c){H(a,l,c),f=!0},p:Je,i(l){f||(D(a.$$.fragment,l),f=!0)},o(l){O(a.$$.fragment,l),f=!1},d(l){P(a,l)}}}function St(h){let a,f;return a=new $t({props:{$$slots:{default:[xt]},$$scope:{ctx:h}}}),{c(){z(a.$$.fragment)},l(l){I(a.$$.fragment,l)},m(l,c){H(a,l,c),f=!0},p(l,[c]){const q={};c&2&&(q.$$scope={dirty:c,ctx:l}),a.$set(q)},i(l){f||(D(a.$$.fragment,l),f=!0)},o(l){O(a.$$.fragment,l),f=!1},d(l){P(a,l)}}}const _t=`
<script>
  import { Box } from '@svelteuidev/core';

  const demoStyles = {
    size: '200px',
    linearGradient: '19deg, #21D4FD 0%, #B721FF 100%',
    br: '$squared'
  };
<\/script>

<Box css={demoStyles} />
`,wt="demo",yt={code:_t};function kt(h){return[{size:"200px",linearGradient:"19deg, #21D4FD 0%, #B721FF 100%",br:"$squared"}]}class Et extends ft{constructor(a){super(),ct(this,a,kt,St,mt,{})}}const Ct=Object.freeze(Object.defineProperty({__proto__:null,configuration:yt,default:Et,type:wt},Symbol.toStringTag,{value:"Module"}));function Bt(h){let a,f;return a=new dt({props:{override:h[0],code:gt}}),{c(){z(a.$$.fragment)},l(l){I(a.$$.fragment,l)},m(l,c){H(a,l,c),f=!0},p:Je,i(l){f||(D(a.$$.fragment,l),f=!0)},o(l){O(a.$$.fragment,l),f=!1},d(l){P(a,l)}}}function Ut(h){let a,f;return a=new dt({props:{override:h[0],code:bt}}),{c(){z(a.$$.fragment)},l(l){I(a.$$.fragment,l)},m(l,c){H(a,l,c),f=!0},p:Je,i(l){f||(D(a.$$.fragment,l),f=!0)},o(l){O(a.$$.fragment,l),f=!1},d(l){P(a,l)}}}function Tt(h){let a,f,l,c,q,y,$e,be,le,k,E,ge,xe,ae,R,N,Se,oe,A,_e,re,$,we,X,ye,ke,V,Ee,Ce,Z,Be,Ue,ie,C,ue,L,Te,se,M,We,ne,S,ve,F,g,ze,B,Ie,He,U,De,Oe,pe,G,Pe,fe,j,qe,ce,Y,Re,me,_,de,J,x,Ae,T,Le,Me,ee,Fe,Ge,he;return C=new ht({props:{demo:Ct}}),S=new Ye({props:{css:{pre:{bc:"$gray50"},"pre code":{color:"$gray900"}},$$slots:{default:[Bt]},$$scope:{ctx:h}}}),_=new Ye({props:{css:{pre:{bc:"$gray50"},"pre code":{color:"$gray900"}},$$slots:{default:[Ut]},$$scope:{ctx:h}}}),{c(){a=n("h2"),f=i("Getting Started"),l=m(),c=n("p"),q=i("SvelteUI provides a set of amazing out of the box "),y=n("a"),$e=i("Stitches"),be=i(` utilities. Once
you get used to them, you can save a lot of time writing CSS-in-JS code.`),le=m(),k=n("p"),E=n("a"),ge=i("Stitches"),xe=i(` allows you to create a set of utilities that can be used for styling components so
we create a custom set that can be used for styling SvelteUI components or elements.`),ae=m(),R=n("blockquote"),N=n("p"),Se=i("SvelteUI doesn’t support custom utilities yet, we hope to add this feature in the future."),oe=m(),A=n("h2"),_e=i("Usage"),re=m(),$=n("p"),we=i("You can use any of the utilities through the "),X=n("code"),ye=i("override"),ke=i(" prop, the "),V=n("code"),Ee=i("css"),Ce=i(" function, or the "),Z=n("code"),Be=i("createStyles"),Ue=i(" function."),ie=m(),z(C.$$.fragment),ue=m(),L=n("h2"),Te=i("Utilities"),se=m(),M=n("p"),We=i("Here is a complete list of all available utilities and their values:"),ne=m(),z(S.$$.fragment),ve=m(),F=n("blockquote"),g=n("p"),ze=i("Note: If you would like for us to add more utilities, please let us know on "),B=n("a"),Ie=i("SvelteUI Discussions"),He=i(", or on "),U=n("a"),De=i("Discord"),Oe=i("."),pe=m(),G=n("h2"),Pe=i("Theme Map"),fe=m(),j=n("p"),qe=i("SvelteUI tokens types are automatically mapped to CSS Properties for an improved developer experience."),ce=m(),Y=n("p"),Re=i("Here is the detailed list of all the mapped tokens:"),me=m(),z(_.$$.fragment),de=m(),J=n("blockquote"),x=n("p"),Ae=i("You can read "),T=n("a"),Le=i("this"),Me=i(" for more information about "),ee=n("code"),Fe=i("defaultStitchesThemeMap"),Ge=i("."),this.h()},l(e){a=v(e,"H2",{});var r=p(a);f=u(r,"Getting Started"),r.forEach(t),l=d(e),c=v(e,"P",{});var W=p(c);q=u(W,"SvelteUI provides a set of amazing out of the box "),y=v(W,"A",{href:!0,rel:!0});var te=p(y);$e=u(te,"Stitches"),te.forEach(t),be=u(W,` utilities. Once
you get used to them, you can save a lot of time writing CSS-in-JS code.`),W.forEach(t),le=d(e),k=v(e,"P",{});var je=p(k);E=v(je,"A",{href:!0,rel:!0});var Ke=p(E);ge=u(Ke,"Stitches"),Ke.forEach(t),xe=u(je,` allows you to create a set of utilities that can be used for styling components so
we create a custom set that can be used for styling SvelteUI components or elements.`),je.forEach(t),ae=d(e),R=v(e,"BLOCKQUOTE",{});var Qe=p(R);N=v(Qe,"P",{});var Ne=p(N);Se=u(Ne,"SvelteUI doesn’t support custom utilities yet, we hope to add this feature in the future."),Ne.forEach(t),Qe.forEach(t),oe=d(e),A=v(e,"H2",{});var Xe=p(A);_e=u(Xe,"Usage"),Xe.forEach(t),re=d(e),$=v(e,"P",{});var w=p($);we=u(w,"You can use any of the utilities through the "),X=v(w,"CODE",{});var Ve=p(X);ye=u(Ve,"override"),Ve.forEach(t),ke=u(w," prop, the "),V=v(w,"CODE",{});var Ze=p(V);Ee=u(Ze,"css"),Ze.forEach(t),Ce=u(w," function, or the "),Z=v(w,"CODE",{});var et=p(Z);Be=u(et,"createStyles"),et.forEach(t),Ue=u(w," function."),w.forEach(t),ie=d(e),I(C.$$.fragment,e),ue=d(e),L=v(e,"H2",{});var tt=p(L);Te=u(tt,"Utilities"),tt.forEach(t),se=d(e),M=v(e,"P",{});var lt=p(M);We=u(lt,"Here is a complete list of all available utilities and their values:"),lt.forEach(t),ne=d(e),I(S.$$.fragment,e),ve=d(e),F=v(e,"BLOCKQUOTE",{});var at=p(F);g=v(at,"P",{});var K=p(g);ze=u(K,"Note: If you would like for us to add more utilities, please let us know on "),B=v(K,"A",{href:!0,rel:!0});var ot=p(B);Ie=u(ot,"SvelteUI Discussions"),ot.forEach(t),He=u(K,", or on "),U=v(K,"A",{href:!0,rel:!0});var rt=p(U);De=u(rt,"Discord"),rt.forEach(t),Oe=u(K,"."),K.forEach(t),at.forEach(t),pe=d(e),G=v(e,"H2",{});var it=p(G);Pe=u(it,"Theme Map"),it.forEach(t),fe=d(e),j=v(e,"P",{});var ut=p(j);qe=u(ut,"SvelteUI tokens types are automatically mapped to CSS Properties for an improved developer experience."),ut.forEach(t),ce=d(e),Y=v(e,"P",{});var st=p(Y);Re=u(st,"Here is the detailed list of all the mapped tokens:"),st.forEach(t),me=d(e),I(_.$$.fragment,e),de=d(e),J=v(e,"BLOCKQUOTE",{});var nt=p(J);x=v(nt,"P",{});var Q=p(x);Ae=u(Q,"You can read "),T=v(Q,"A",{href:!0,rel:!0});var vt=p(T);Le=u(vt,"this"),vt.forEach(t),Me=u(Q," for more information about "),ee=v(Q,"CODE",{});var pt=p(ee);Fe=u(pt,"defaultStitchesThemeMap"),pt.forEach(t),Ge=u(Q,"."),Q.forEach(t),nt.forEach(t),this.h()},h(){b(y,"href","https://stitches.dev/docs/utils"),b(y,"rel","nofollow"),b(E,"href","https://stitches.dev/docs/utils"),b(E,"rel","nofollow"),b(B,"href","https://github.com/svelteuidev/svelteui/discussions"),b(B,"rel","nofollow"),b(U,"href","https://discord.gg/2J2xmzCS79"),b(U,"rel","nofollow"),b(T,"href","https://stitches.dev/docs/tokens#property-mapping"),b(T,"rel","nofollow")},m(e,r){s(e,a,r),o(a,f),s(e,l,r),s(e,c,r),o(c,q),o(c,y),o(y,$e),o(c,be),s(e,le,r),s(e,k,r),o(k,E),o(E,ge),o(k,xe),s(e,ae,r),s(e,R,r),o(R,N),o(N,Se),s(e,oe,r),s(e,A,r),o(A,_e),s(e,re,r),s(e,$,r),o($,we),o($,X),o(X,ye),o($,ke),o($,V),o(V,Ee),o($,Ce),o($,Z),o(Z,Be),o($,Ue),s(e,ie,r),H(C,e,r),s(e,ue,r),s(e,L,r),o(L,Te),s(e,se,r),s(e,M,r),o(M,We),s(e,ne,r),H(S,e,r),s(e,ve,r),s(e,F,r),o(F,g),o(g,ze),o(g,B),o(B,Ie),o(g,He),o(g,U),o(U,De),o(g,Oe),s(e,pe,r),s(e,G,r),o(G,Pe),s(e,fe,r),s(e,j,r),o(j,qe),s(e,ce,r),s(e,Y,r),o(Y,Re),s(e,me,r),H(_,e,r),s(e,de,r),s(e,J,r),o(J,x),o(x,Ae),o(x,T),o(T,Le),o(x,Me),o(x,ee),o(ee,Fe),o(x,Ge),he=!0},p(e,[r]){const W={};r&2&&(W.$$scope={dirty:r,ctx:e}),S.$set(W);const te={};r&2&&(te.$$scope={dirty:r,ctx:e}),_.$set(te)},i(e){he||(D(C.$$.fragment,e),D(S.$$.fragment,e),D(_.$$.fragment,e),he=!0)},o(e){O(C.$$.fragment,e),O(S.$$.fragment,e),O(_.$$.fragment,e),he=!1},d(e){e&&t(a),e&&t(l),e&&t(c),e&&t(le),e&&t(k),e&&t(ae),e&&t(R),e&&t(oe),e&&t(A),e&&t(re),e&&t($),e&&t(ie),P(C,e),e&&t(ue),e&&t(L),e&&t(se),e&&t(M),e&&t(ne),P(S,e),e&&t(ve),e&&t(F),e&&t(pe),e&&t(G),e&&t(fe),e&&t(j),e&&t(ce),e&&t(Y),e&&t(me),P(_,e),e&&t(de),e&&t(J)}}}const Pt={title:"Utilities",description:"SvelteUI provides out of the box Stitches utilities.",docs:"theming/utilities.md"};function Wt(h){return[{"& .token.literal-property.property":{color:"$violet400"}}]}class qt extends ft{constructor(a){super(),ct(this,a,Wt,Tt,mt,{})}}export{qt as default,Pt as metadata};
