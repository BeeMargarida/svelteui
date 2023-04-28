import{S as le,i as se,s as ne,y as z,a as h,z as x,c as E,A as w,b as p,X as ae,g as P,d as O,B as C,h as l,k as b,q as f,l as _,m as g,r as $,p as ut,n as bt,W as o}from"./index.b4f0bbdc.js";import{D as _e}from"./Demo.9cccb4ab.js";import{D as k}from"./Divider.a1e29640.js";import{M as _t}from"./MagnifyingGlass.6d2ade11.js";import{B as gt}from"./Box.195443f6.js";function Dt(L){let t,d,n,a,m,u;return t=new k({}),n=new k({props:{variant:"dashed"}}),m=new k({props:{variant:"dotted"}}),{c(){z(t.$$.fragment),d=h(),z(n.$$.fragment),a=h(),z(m.$$.fragment)},l(i){x(t.$$.fragment,i),d=E(i),x(n.$$.fragment,i),a=E(i),x(m.$$.fragment,i)},m(i,v){w(t,i,v),p(i,d,v),w(n,i,v),p(i,a,v),w(m,i,v),u=!0},p:ae,i(i){u||(P(t.$$.fragment,i),P(n.$$.fragment,i),P(m.$$.fragment,i),u=!0)},o(i){O(t.$$.fragment,i),O(n.$$.fragment,i),O(m.$$.fragment,i),u=!1},d(i){C(t,i),i&&l(d),C(n,i),i&&l(a),C(m,i)}}}const ht=`
  <script>
    import { Divider } from '@svelteuidev/core';
  <\/script>

  <Divider />
  <Divider variant='dashed' />
  <Divider variant='dotted' />
`,Et="demo",yt={code:ht};class zt extends le{constructor(t){super(),se(this,t,null,Dt,ne,{})}}const xt=Object.freeze(Object.defineProperty({__proto__:null,configuration:yt,default:zt,type:Et},Symbol.toStringTag,{value:"Module"}));function wt(L){let t,d,n,a,m,u;return d=new _t({}),{c(){t=b("div"),z(d.$$.fragment),n=h(),a=b("span"),m=f("Search results"),this.h()},l(i){t=_(i,"DIV",{slot:!0});var v=g(t);x(d.$$.fragment,v),n=E(v),a=_(v,"SPAN",{style:!0});var D=g(a);m=$(D,"Search results"),D.forEach(l),v.forEach(l),this.h()},h(){ut(a,"vertical-align","middle"),bt(t,"slot","label")},m(i,v){p(i,t,v),w(d,t,null),o(t,n),o(t,a),o(a,m),u=!0},p:ae,i(i){u||(P(d.$$.fragment,i),u=!0)},o(i){O(d.$$.fragment,i),u=!1},d(i){i&&l(t),C(d)}}}function Pt(L){let t,d,n,a,m,u,i,v,D,G;return t=new k({props:{label:"Label on the left",labelPosition:"left"}}),n=new k({props:{label:"Label in the center",labelPosition:"center"}}),m=new k({props:{label:"Label on the right",labelPosition:"right"}}),i=new k({props:{labelPosition:"center",$$slots:{label:[wt]},$$scope:{ctx:L}}}),D=new k({props:{size:"md",variant:"dashed",label:"Click here",labelPosition:"left",labelProps:{variant:"link",href:"https://svelteui.org",root:"a"}}}),{c(){z(t.$$.fragment),d=h(),z(n.$$.fragment),a=h(),z(m.$$.fragment),u=h(),z(i.$$.fragment),v=h(),z(D.$$.fragment)},l(s){x(t.$$.fragment,s),d=E(s),x(n.$$.fragment,s),a=E(s),x(m.$$.fragment,s),u=E(s),x(i.$$.fragment,s),v=E(s),x(D.$$.fragment,s)},m(s,y){w(t,s,y),p(s,d,y),w(n,s,y),p(s,a,y),w(m,s,y),p(s,u,y),w(i,s,y),p(s,v,y),w(D,s,y),G=!0},p(s,[y]){const r={};y&1&&(r.$$scope={dirty:y,ctx:s}),i.$set(r)},i(s){G||(P(t.$$.fragment,s),P(n.$$.fragment,s),P(m.$$.fragment,s),P(i.$$.fragment,s),P(D.$$.fragment,s),G=!0)},o(s){O(t.$$.fragment,s),O(n.$$.fragment,s),O(m.$$.fragment,s),O(i.$$.fragment,s),O(D.$$.fragment,s),G=!1},d(s){C(t,s),s&&l(d),C(n,s),s&&l(a),C(m,s),s&&l(u),C(i,s),s&&l(v),C(D,s)}}}const Ot=`
  <script>
    import { Divider } from '@svelteuidev/core';
    import { MagnifyingGlass } from 'radix-icons-svelte';
  <\/script>

  <Divider label='Label on the left' labelPosition='left' />
  <Divider label='Label in the center' labelPosition='center' />
  <Divider label='Label on the right' labelPosition='right' />
  <Divider labelPosition='center'>
    <div slot='label'>
      <MagnifyingGlass />
      <span>Search results</span>
    </div>
  </Divider>
  <Divider
    size='md'
    variant='dashed'
    label='Click here'
    labelPosition='left'
    labelProps={{ variant: 'link', href: 'https://svelteui.org', root: 'a' }}
  />
`,Ct="demo",St={code:Ot};class Tt extends le{constructor(t){super(),se(this,t,null,Pt,ne,{})}}const jt=Object.freeze(Object.defineProperty({__proto__:null,configuration:St,default:Tt,type:Ct},Symbol.toStringTag,{value:"Module"}));function Mt(L){let t,d,n,a,m,u,i,v,D,G,s,y;return t=new k({props:{size:"xs"}}),n=new k({props:{size:"sm"}}),m=new k({props:{size:"md"}}),i=new k({props:{size:"lg"}}),D=new k({props:{size:"xl"}}),s=new k({props:{size:10}}),{c(){z(t.$$.fragment),d=h(),z(n.$$.fragment),a=h(),z(m.$$.fragment),u=h(),z(i.$$.fragment),v=h(),z(D.$$.fragment),G=h(),z(s.$$.fragment)},l(r){x(t.$$.fragment,r),d=E(r),x(n.$$.fragment,r),a=E(r),x(m.$$.fragment,r),u=E(r),x(i.$$.fragment,r),v=E(r),x(D.$$.fragment,r),G=E(r),x(s.$$.fragment,r)},m(r,j){w(t,r,j),p(r,d,j),w(n,r,j),p(r,a,j),w(m,r,j),p(r,u,j),w(i,r,j),p(r,v,j),w(D,r,j),p(r,G,j),w(s,r,j),y=!0},p:ae,i(r){y||(P(t.$$.fragment,r),P(n.$$.fragment,r),P(m.$$.fragment,r),P(i.$$.fragment,r),P(D.$$.fragment,r),P(s.$$.fragment,r),y=!0)},o(r){O(t.$$.fragment,r),O(n.$$.fragment,r),O(m.$$.fragment,r),O(i.$$.fragment,r),O(D.$$.fragment,r),O(s.$$.fragment,r),y=!1},d(r){C(t,r),r&&l(d),C(n,r),r&&l(a),C(m,r),r&&l(u),C(i,r),r&&l(v),C(D,r),r&&l(G),C(s,r)}}}const kt=`
  <script>
    import { Divider } from '@svelteuidev/core';
  <\/script>

  <Divider size="xs" />
  <Divider size="sm" />
  <Divider size="md" />
  <Divider size="lg" />
  <Divider size="xl" />
  <Divider size={10} />
`,Bt="demo",Lt={code:kt};class Gt extends le{constructor(t){super(),se(this,t,null,Mt,ne,{})}}const Ht=Object.freeze(Object.defineProperty({__proto__:null,configuration:Lt,default:Gt,type:Bt},Symbol.toStringTag,{value:"Module"}));function It(L){let t,d;return t=new k({props:{size:"sm",orientation:"vertical"}}),{c(){z(t.$$.fragment)},l(n){x(t.$$.fragment,n)},m(n,a){w(t,n,a),d=!0},p:ae,i(n){d||(P(t.$$.fragment,n),d=!0)},o(n){O(t.$$.fragment,n),d=!1},d(n){C(t,n)}}}function Nt(L){let t,d;return t=new gt({props:{css:{height:"200px",display:"flex",justifyContent:"center"},$$slots:{default:[It]},$$scope:{ctx:L}}}),{c(){z(t.$$.fragment)},l(n){x(t.$$.fragment,n)},m(n,a){w(t,n,a),d=!0},p(n,[a]){const m={};a&1&&(m.$$scope={dirty:a,ctx:n}),t.$set(m)},i(n){d||(P(t.$$.fragment,n),d=!0)},o(n){O(t.$$.fragment,n),d=!1},d(n){C(t,n)}}}const Vt=`
  <script>
    import { Box, Divider } from '@svelteuidev/core';
  <\/script>

  <Box css={{ height: '200px', display: 'flex', justifyContent: 'center' }}>
    <Divider orientation='vertical' />
  </Box>
`,Wt="demo",qt={code:Vt};class At extends le{constructor(t){super(),se(this,t,null,Nt,ne,{})}}const Ut=Object.freeze(Object.defineProperty({__proto__:null,configuration:qt,default:At,type:Wt},Symbol.toStringTag,{value:"Module"}));function Yt(L){let t,d,n,a,m,u,i,v,D,G,s,y,r,j,V,ge,fe,S,De,Y,he,Ee,R,ye,ze,X,xe,we,F,Pe,Oe,J,Ce,Se,K,Te,je,Q,Me,ke,$e,H,de,W,Be,me,T,Le,Z,Ge,He,ee,Ie,Ne,te,Ve,We,re,qe,Ae,ie,Ue,Ye,oe,Re,Xe,pe,I,ve,q,Fe,ce,A,Je,ue,N,be;return r=new _e({props:{demo:xt}}),H=new _e({props:{demo:jt}}),I=new _e({props:{demo:Ht}}),N=new _e({props:{demo:Ut}}),{c(){t=b("h2"),d=f("Usage"),n=h(),a=b("p"),m=f("Divider component renders an horizontal or vertical line. The border style can be customized with the "),u=b("code"),i=f("variant"),v=f(" and "),D=b("code"),G=f("color"),s=f(" prop."),y=h(),z(r.$$.fragment),j=h(),V=b("h2"),ge=f("With label"),fe=h(),S=b("p"),De=f("It is possible to add a label at the "),Y=b("code"),he=f("left"),Ee=f(", "),R=b("code"),ye=f("right"),ze=f(" or "),X=b("code"),xe=f("center"),we=f(" of the Divider, by setting the prop "),F=b("code"),Pe=f("label"),Oe=f(" and the prop "),J=b("code"),Ce=f("labelPosition"),Se=f(" with the previously mentioned values. It is also possible to override the label props with "),K=b("code"),Te=f("labelProps"),je=f(". This label behaviour is "),Q=b("strong"),Me=f("only available for the horizontal orientation"),ke=f("."),$e=h(),z(H.$$.fragment),de=h(),W=b("h2"),Be=f("Sizes"),me=h(),T=b("p"),Le=f("The Divider component has predefined sizes: "),Z=b("code"),Ge=f("xs"),He=f(", "),ee=b("code"),Ie=f("sm"),Ne=f(", "),te=b("code"),Ve=f("md"),We=f(", "),re=b("code"),qe=f("lg"),Ae=f(" and "),ie=b("code"),Ue=f("xl"),Ye=f(". You can also pass size as a number and it will be set as height in "),oe=b("code"),Re=f("px"),Xe=f("."),pe=h(),z(I.$$.fragment),ve=h(),q=b("h2"),Fe=f("Vertical orientation"),ce=h(),A=b("p"),Je=f("Divider can also be used in vertical position. Notice that the wrapper component must have a defined height."),ue=h(),z(N.$$.fragment)},l(e){t=_(e,"H2",{});var c=g(t);d=$(c,"Usage"),c.forEach(l),n=E(e),a=_(e,"P",{});var U=g(a);m=$(U,"Divider component renders an horizontal or vertical line. The border style can be customized with the "),u=_(U,"CODE",{});var Ke=g(u);i=$(Ke,"variant"),Ke.forEach(l),v=$(U," and "),D=_(U,"CODE",{});var Qe=g(D);G=$(Qe,"color"),Qe.forEach(l),s=$(U," prop."),U.forEach(l),y=E(e),x(r.$$.fragment,e),j=E(e),V=_(e,"H2",{});var Ze=g(V);ge=$(Ze,"With label"),Ze.forEach(l),fe=E(e),S=_(e,"P",{});var M=g(S);De=$(M,"It is possible to add a label at the "),Y=_(M,"CODE",{});var et=g(Y);he=$(et,"left"),et.forEach(l),Ee=$(M,", "),R=_(M,"CODE",{});var tt=g(R);ye=$(tt,"right"),tt.forEach(l),ze=$(M," or "),X=_(M,"CODE",{});var rt=g(X);xe=$(rt,"center"),rt.forEach(l),we=$(M," of the Divider, by setting the prop "),F=_(M,"CODE",{});var it=g(F);Pe=$(it,"label"),it.forEach(l),Oe=$(M," and the prop "),J=_(M,"CODE",{});var ot=g(J);Ce=$(ot,"labelPosition"),ot.forEach(l),Se=$(M," with the previously mentioned values. It is also possible to override the label props with "),K=_(M,"CODE",{});var lt=g(K);Te=$(lt,"labelProps"),lt.forEach(l),je=$(M,". This label behaviour is "),Q=_(M,"STRONG",{});var st=g(Q);Me=$(st,"only available for the horizontal orientation"),st.forEach(l),ke=$(M,"."),M.forEach(l),$e=E(e),x(H.$$.fragment,e),de=E(e),W=_(e,"H2",{});var nt=g(W);Be=$(nt,"Sizes"),nt.forEach(l),me=E(e),T=_(e,"P",{});var B=g(T);Le=$(B,"The Divider component has predefined sizes: "),Z=_(B,"CODE",{});var at=g(Z);Ge=$(at,"xs"),at.forEach(l),He=$(B,", "),ee=_(B,"CODE",{});var ft=g(ee);Ie=$(ft,"sm"),ft.forEach(l),Ne=$(B,", "),te=_(B,"CODE",{});var $t=g(te);Ve=$($t,"md"),$t.forEach(l),We=$(B,", "),re=_(B,"CODE",{});var dt=g(re);qe=$(dt,"lg"),dt.forEach(l),Ae=$(B," and "),ie=_(B,"CODE",{});var mt=g(ie);Ue=$(mt,"xl"),mt.forEach(l),Ye=$(B,". You can also pass size as a number and it will be set as height in "),oe=_(B,"CODE",{});var pt=g(oe);Re=$(pt,"px"),pt.forEach(l),Xe=$(B,"."),B.forEach(l),pe=E(e),x(I.$$.fragment,e),ve=E(e),q=_(e,"H2",{});var vt=g(q);Fe=$(vt,"Vertical orientation"),vt.forEach(l),ce=E(e),A=_(e,"P",{});var ct=g(A);Je=$(ct,"Divider can also be used in vertical position. Notice that the wrapper component must have a defined height."),ct.forEach(l),ue=E(e),x(N.$$.fragment,e)},m(e,c){p(e,t,c),o(t,d),p(e,n,c),p(e,a,c),o(a,m),o(a,u),o(u,i),o(a,v),o(a,D),o(D,G),o(a,s),p(e,y,c),w(r,e,c),p(e,j,c),p(e,V,c),o(V,ge),p(e,fe,c),p(e,S,c),o(S,De),o(S,Y),o(Y,he),o(S,Ee),o(S,R),o(R,ye),o(S,ze),o(S,X),o(X,xe),o(S,we),o(S,F),o(F,Pe),o(S,Oe),o(S,J),o(J,Ce),o(S,Se),o(S,K),o(K,Te),o(S,je),o(S,Q),o(Q,Me),o(S,ke),p(e,$e,c),w(H,e,c),p(e,de,c),p(e,W,c),o(W,Be),p(e,me,c),p(e,T,c),o(T,Le),o(T,Z),o(Z,Ge),o(T,He),o(T,ee),o(ee,Ie),o(T,Ne),o(T,te),o(te,Ve),o(T,We),o(T,re),o(re,qe),o(T,Ae),o(T,ie),o(ie,Ue),o(T,Ye),o(T,oe),o(oe,Re),o(T,Xe),p(e,pe,c),w(I,e,c),p(e,ve,c),p(e,q,c),o(q,Fe),p(e,ce,c),p(e,A,c),o(A,Je),p(e,ue,c),w(N,e,c),be=!0},p:ae,i(e){be||(P(r.$$.fragment,e),P(H.$$.fragment,e),P(I.$$.fragment,e),P(N.$$.fragment,e),be=!0)},o(e){O(r.$$.fragment,e),O(H.$$.fragment,e),O(I.$$.fragment,e),O(N.$$.fragment,e),be=!1},d(e){e&&l(t),e&&l(n),e&&l(a),e&&l(y),C(r,e),e&&l(j),e&&l(V),e&&l(fe),e&&l(S),e&&l($e),C(H,e),e&&l(de),e&&l(W),e&&l(me),e&&l(T),e&&l(pe),C(I,e),e&&l(ve),e&&l(q),e&&l(ce),e&&l(A),e&&l(ue),C(N,e)}}}const Qt={title:"Divider",group:"svelteuidev-core",packageGroup:"@svelteuidev/core",slug:"/core/divider/",category:"misc",description:"Horizontal line with optional label or vertical divider",importCode:"import { Divider } from '@svelteuidev/core';",source:"svelteui-core/src/components/Divider/Divider.svelte",docs:"core/divider.md"};class Zt extends le{constructor(t){super(),se(this,t,null,Yt,ne,{})}}export{Zt as default,Qt as metadata};
