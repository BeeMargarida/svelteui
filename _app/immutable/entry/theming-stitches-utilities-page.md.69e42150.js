import{S as bt,i as gt,s as St,y as E,z as C,A as U,g as B,d as T,B as I,C as Xe,a as m,k as n,q as r,al as _t,h as t,c,l as v,m as p,r as u,n as b,b as s,Y as o}from"../chunks/index.b0fe5a0f.js";import{B as Ve}from"../chunks/navigation.618498c8.js";import{H as wt}from"../chunks/Heading.a23d207d.js";import"../chunks/paths.48415ce3.js";import{D as kt}from"../chunks/Demo.7e60bc72.js";import{C as yt}from"../chunks/Center.c6049ae6.js";import{P as xt}from"../chunks/Prism.337ac556.js";const Et=`
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
`,Ct=`
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
    `;function Ut(h){let a,f;return a=new Ve({props:{css:h[0]}}),{c(){E(a.$$.fragment)},l(l){C(a.$$.fragment,l)},m(l,d){U(a,l,d),f=!0},p:Xe,i(l){f||(B(a.$$.fragment,l),f=!0)},o(l){T(a.$$.fragment,l),f=!1},d(l){I(a,l)}}}function Bt(h){let a,f;return a=new yt({props:{$$slots:{default:[Ut]},$$scope:{ctx:h}}}),{c(){E(a.$$.fragment)},l(l){C(a.$$.fragment,l)},m(l,d){U(a,l,d),f=!0},p(l,[d]){const g={};d&2&&(g.$$scope={dirty:d,ctx:l}),a.$set(g)},i(l){f||(B(a.$$.fragment,l),f=!0)},o(l){T(a.$$.fragment,l),f=!1},d(l){I(a,l)}}}const Tt=`
<script>
  import { Box } from '@svelteuidev/core';

  const demoStyles = {
    size: '200px',
    linearGradient: '19deg, #21D4FD 0%, #B721FF 100%',
    br: '$squared'
  };
<\/script>

<Box css={demoStyles} />
`,It="demo",Ht={code:Tt};function Wt(h){return[{size:"200px",linearGradient:"19deg, #21D4FD 0%, #B721FF 100%",br:"$squared"}]}class zt extends bt{constructor(a){super(),gt(this,a,Wt,Bt,St,{})}}const Dt=Object.freeze(Object.defineProperty({__proto__:null,configuration:Ht,default:zt,type:It},Symbol.toStringTag,{value:"Module"}));function Ot(h){let a,f;return a=new xt({props:{override:h[0],code:Ct}}),{c(){E(a.$$.fragment)},l(l){C(a.$$.fragment,l)},m(l,d){U(a,l,d),f=!0},p:Xe,i(l){f||(B(a.$$.fragment,l),f=!0)},o(l){T(a.$$.fragment,l),f=!1},d(l){I(a,l)}}}function Pt(h){let a,f;return a=new xt({props:{override:h[0],code:Et}}),{c(){E(a.$$.fragment)},l(l){C(a.$$.fragment,l)},m(l,d){U(a,l,d),f=!0},p:Xe,i(l){f||(B(a.$$.fragment,l),f=!0)},o(l){T(a.$$.fragment,l),f=!1},d(l){I(a,l)}}}function qt(h){let a,f,l,d,g,ge,oe,_,Se,H,xe,_e,ie,W,z,we,ke,re,A,V,ye,ue,L,Ee,se,$,Ce,X,Ue,Be,Z,Te,Ie,ee,He,We,ne,D,ve,M,ze,pe,F,De,fe,w,me,G,S,Oe,O,Pe,qe,P,Re,Ae,ce,Y,Le,de,j,Me,he,J,Fe,$e,k,be,K,x,Ge,q,Ye,je,te,Je,Ke,le;return document.title=a=Ne+" - SvelteUI",l=new wt({props:{title:Ne,description:At,docs:Lt}}),D=new kt({props:{demo:Dt}}),w=new Ve({props:{css:{pre:{bc:"$gray50"},"pre code":{color:"$gray900"}},$$slots:{default:[Ot]},$$scope:{ctx:h}}}),k=new Ve({props:{css:{pre:{bc:"$gray50"},"pre code":{color:"$gray900"}},$$slots:{default:[Pt]},$$scope:{ctx:h}}}),{c(){f=m(),E(l.$$.fragment),d=m(),g=n("h2"),ge=r("Getting Started"),oe=m(),_=n("p"),Se=r("SvelteUI provides a set of amazing out of the box "),H=n("a"),xe=r("Stitches"),_e=r(` utilities. Once
you get used to them, you can save a lot of time writing CSS-in-JS code.`),ie=m(),W=n("p"),z=n("a"),we=r("Stitches"),ke=r(` allows you to create a set of utilities that can be used for styling components so
we create a custom set that can be used for styling SvelteUI components or elements.`),re=m(),A=n("blockquote"),V=n("p"),ye=r("SvelteUI doesn’t support custom utilities yet, we hope to add this feature in the future."),ue=m(),L=n("h2"),Ee=r("Usage"),se=m(),$=n("p"),Ce=r("You can use any of the utilities through the "),X=n("code"),Ue=r("override"),Be=r(" prop, the "),Z=n("code"),Te=r("css"),Ie=r(" function, or the "),ee=n("code"),He=r("createStyles"),We=r(" function."),ne=m(),E(D.$$.fragment),ve=m(),M=n("h2"),ze=r("Utilities"),pe=m(),F=n("p"),De=r("Here is a complete list of all available utilities and their values:"),fe=m(),E(w.$$.fragment),me=m(),G=n("blockquote"),S=n("p"),Oe=r("Note: If you would like for us to add more utilities, please let us know on "),O=n("a"),Pe=r("SvelteUI Discussions"),qe=r(", or on "),P=n("a"),Re=r("Discord"),Ae=r("."),ce=m(),Y=n("h2"),Le=r("Theme Map"),de=m(),j=n("p"),Me=r("SvelteUI tokens types are automatically mapped to CSS Properties for an improved developer experience."),he=m(),J=n("p"),Fe=r("Here is the detailed list of all the mapped tokens:"),$e=m(),E(k.$$.fragment),be=m(),K=n("blockquote"),x=n("p"),Ge=r("You can read "),q=n("a"),Ye=r("this"),je=r(" for more information about "),te=n("code"),Je=r("defaultStitchesThemeMap"),Ke=r("."),this.h()},l(e){_t("svelte-pki6ul",document.head).forEach(t),f=c(e),C(l.$$.fragment,e),d=c(e),g=v(e,"H2",{});var ae=p(g);ge=u(ae,"Getting Started"),ae.forEach(t),oe=c(e),_=v(e,"P",{});var R=p(_);Se=u(R,"SvelteUI provides a set of amazing out of the box "),H=v(R,"A",{href:!0,rel:!0});var Ze=p(H);xe=u(Ze,"Stitches"),Ze.forEach(t),_e=u(R,` utilities. Once
you get used to them, you can save a lot of time writing CSS-in-JS code.`),R.forEach(t),ie=c(e),W=v(e,"P",{});var Qe=p(W);z=v(Qe,"A",{href:!0,rel:!0});var et=p(z);we=u(et,"Stitches"),et.forEach(t),ke=u(Qe,` allows you to create a set of utilities that can be used for styling components so
we create a custom set that can be used for styling SvelteUI components or elements.`),Qe.forEach(t),re=c(e),A=v(e,"BLOCKQUOTE",{});var tt=p(A);V=v(tt,"P",{});var lt=p(V);ye=u(lt,"SvelteUI doesn’t support custom utilities yet, we hope to add this feature in the future."),lt.forEach(t),tt.forEach(t),ue=c(e),L=v(e,"H2",{});var at=p(L);Ee=u(at,"Usage"),at.forEach(t),se=c(e),$=v(e,"P",{});var y=p($);Ce=u(y,"You can use any of the utilities through the "),X=v(y,"CODE",{});var ot=p(X);Ue=u(ot,"override"),ot.forEach(t),Be=u(y," prop, the "),Z=v(y,"CODE",{});var it=p(Z);Te=u(it,"css"),it.forEach(t),Ie=u(y," function, or the "),ee=v(y,"CODE",{});var rt=p(ee);He=u(rt,"createStyles"),rt.forEach(t),We=u(y," function."),y.forEach(t),ne=c(e),C(D.$$.fragment,e),ve=c(e),M=v(e,"H2",{});var ut=p(M);ze=u(ut,"Utilities"),ut.forEach(t),pe=c(e),F=v(e,"P",{});var st=p(F);De=u(st,"Here is a complete list of all available utilities and their values:"),st.forEach(t),fe=c(e),C(w.$$.fragment,e),me=c(e),G=v(e,"BLOCKQUOTE",{});var nt=p(G);S=v(nt,"P",{});var Q=p(S);Oe=u(Q,"Note: If you would like for us to add more utilities, please let us know on "),O=v(Q,"A",{href:!0,rel:!0});var vt=p(O);Pe=u(vt,"SvelteUI Discussions"),vt.forEach(t),qe=u(Q,", or on "),P=v(Q,"A",{href:!0,rel:!0});var pt=p(P);Re=u(pt,"Discord"),pt.forEach(t),Ae=u(Q,"."),Q.forEach(t),nt.forEach(t),ce=c(e),Y=v(e,"H2",{});var ft=p(Y);Le=u(ft,"Theme Map"),ft.forEach(t),de=c(e),j=v(e,"P",{});var mt=p(j);Me=u(mt,"SvelteUI tokens types are automatically mapped to CSS Properties for an improved developer experience."),mt.forEach(t),he=c(e),J=v(e,"P",{});var ct=p(J);Fe=u(ct,"Here is the detailed list of all the mapped tokens:"),ct.forEach(t),$e=c(e),C(k.$$.fragment,e),be=c(e),K=v(e,"BLOCKQUOTE",{});var dt=p(K);x=v(dt,"P",{});var N=p(x);Ge=u(N,"You can read "),q=v(N,"A",{href:!0,rel:!0});var ht=p(q);Ye=u(ht,"this"),ht.forEach(t),je=u(N," for more information about "),te=v(N,"CODE",{});var $t=p(te);Je=u($t,"defaultStitchesThemeMap"),$t.forEach(t),Ke=u(N,"."),N.forEach(t),dt.forEach(t),this.h()},h(){b(H,"href","https://stitches.dev/docs/utils"),b(H,"rel","nofollow"),b(z,"href","https://stitches.dev/docs/utils"),b(z,"rel","nofollow"),b(O,"href","https://github.com/svelteuidev/svelteui/discussions"),b(O,"rel","nofollow"),b(P,"href","https://discord.gg/2J2xmzCS79"),b(P,"rel","nofollow"),b(q,"href","https://stitches.dev/docs/tokens#property-mapping"),b(q,"rel","nofollow")},m(e,i){s(e,f,i),U(l,e,i),s(e,d,i),s(e,g,i),o(g,ge),s(e,oe,i),s(e,_,i),o(_,Se),o(_,H),o(H,xe),o(_,_e),s(e,ie,i),s(e,W,i),o(W,z),o(z,we),o(W,ke),s(e,re,i),s(e,A,i),o(A,V),o(V,ye),s(e,ue,i),s(e,L,i),o(L,Ee),s(e,se,i),s(e,$,i),o($,Ce),o($,X),o(X,Ue),o($,Be),o($,Z),o(Z,Te),o($,Ie),o($,ee),o(ee,He),o($,We),s(e,ne,i),U(D,e,i),s(e,ve,i),s(e,M,i),o(M,ze),s(e,pe,i),s(e,F,i),o(F,De),s(e,fe,i),U(w,e,i),s(e,me,i),s(e,G,i),o(G,S),o(S,Oe),o(S,O),o(O,Pe),o(S,qe),o(S,P),o(P,Re),o(S,Ae),s(e,ce,i),s(e,Y,i),o(Y,Le),s(e,de,i),s(e,j,i),o(j,Me),s(e,he,i),s(e,J,i),o(J,Fe),s(e,$e,i),U(k,e,i),s(e,be,i),s(e,K,i),o(K,x),o(x,Ge),o(x,q),o(q,Ye),o(x,je),o(x,te),o(te,Je),o(x,Ke),le=!0},p(e,[i]){(!le||i&0)&&a!==(a=Ne+" - SvelteUI")&&(document.title=a);const ae={};i&2&&(ae.$$scope={dirty:i,ctx:e}),w.$set(ae);const R={};i&2&&(R.$$scope={dirty:i,ctx:e}),k.$set(R)},i(e){le||(B(l.$$.fragment,e),B(D.$$.fragment,e),B(w.$$.fragment,e),B(k.$$.fragment,e),le=!0)},o(e){T(l.$$.fragment,e),T(D.$$.fragment,e),T(w.$$.fragment,e),T(k.$$.fragment,e),le=!1},d(e){e&&t(f),I(l,e),e&&t(d),e&&t(g),e&&t(oe),e&&t(_),e&&t(ie),e&&t(W),e&&t(re),e&&t(A),e&&t(ue),e&&t(L),e&&t(se),e&&t($),e&&t(ne),I(D,e),e&&t(ve),e&&t(M),e&&t(pe),e&&t(F),e&&t(fe),I(w,e),e&&t(me),e&&t(G),e&&t(ce),e&&t(Y),e&&t(de),e&&t(j),e&&t(he),e&&t(J),e&&t($e),I(k,e),e&&t(be),e&&t(K)}}}const Rt={title:"Stitches Utilities",description:"SvelteUI provides out of the box Stitches utilities.",docs:"theming/stitches-utilities.md"},{title:Ne,description:At,docs:Lt}=Rt;function Mt(h){return[{"& .token.literal-property.property":{color:"$violet400"}}]}class Nt extends bt{constructor(a){super(),gt(this,a,Mt,qt,St,{})}}export{Nt as default,Rt as metadata};
