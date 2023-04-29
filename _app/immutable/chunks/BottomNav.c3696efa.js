import{S as q,i as I,s as M,y as d,z as k,A as w,g as c,d as g,B as v,a as S,k as U,e as z,c as C,l as V,m as E,h as b,n as R,b as y,Y as F,v as j,f as D,q as N,r as P,u as G,P as O,C as W}from"./index.b0fe5a0f.js";import{f as Y,T as X,G as J}from"./navigation.fd10cd14.js";import{A as K}from"./ArrowLeft.eea6f972.js";import{A as Q}from"./ArrowRight.332a65f6.js";import{b as B}from"./paths.605af923.js";import{A as Z}from"./Anchor.ec4b795e.js";import{u as H}from"./upper-first.a5ff10ec.js";import{D as x}from"./Divider.4f248468.js";import{u as ee}from"./use-viewport-size.c9b460dc.js";import{S as te}from"./Stack.9cc3a338.js";const re=Y((l,t,r)=>({root:{darkMode:{color:l.colors.white.value,backgroundColor:l.fn.themeColor("dark",8),border:`1px solid ${l.fn.themeColor("dark",8)}`},display:"flex !important",alignItems:"center !important",textDecoration:"none !important",justifyContent:"space-between !important",color:`${l.colors.black.value} !important`,padding:`${l.space.mdPX.value} !important`,borderRadius:`${l.radii.md.value} !important`,backgroundColor:`${l.colors.white.value} !important`,border:`1px solid ${l.fn.themeColor("gray",3)} !important`,transition:"box-shadow 200ms ease, transform 100ms ease","&.next":{[`& .${r("body")}`]:{marginRight:`${l.space.mdPX.value} !important`}},"&:hover":{transform:"scale(1.01)",boxShadow:"$md"}},body:{ref:r("body"),marginRight:`${t.type==="next"?l.space.mdPX.value:"0px"} !important`,marginLeft:`${t.type==="prev"?l.space.mdPX.value:"0px"} !important`},text:{darkMode:{color:"white !important"}}}));function L(l){let t,r;return t=new K({props:{size:22}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,s){w(t,e,s),r=!0},i(e){r||(c(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function ne(l){let t=l[2]==="next"?"Up next":"Go back",r;return{c(){r=N(t)},l(e){r=P(e,t)},m(e,s){y(e,r,s)},p(e,s){s&4&&t!==(t=e[2]==="next"?"Up next":"Go back")&&G(r,t)},d(e){e&&b(r)}}}function se(l){let t=l[0].title+"",r,e,s=(l[0].package||H(l[0].group))+"",n;return{c(){r=N(t),e=N(" - "),n=N(s)},l(o){r=P(o,t),e=P(o," - "),n=P(o,s)},m(o,u){y(o,r,u),y(o,e,u),y(o,n,u)},p(o,u){u&1&&t!==(t=o[0].title+"")&&G(r,t),u&1&&s!==(s=(o[0].package||H(o[0].group))+"")&&G(n,s)},d(o){o&&b(r),o&&b(e),o&&b(n)}}}function T(l){let t,r;return t=new Q({props:{size:22}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,s){w(t,e,s),r=!0},i(e){r||(c(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function le(l){let t,r,e,s,n,o,u,i,$,a=l[2]==="prev"&&L();e=new X({props:{size:"lg",align:l[2]==="next"?"left":"right",override:{lineHeight:"$md"},class:l[5].text,$$slots:{default:[ne]},$$scope:{ctx:l}}}),n=new X({props:{color:"dimmed",size:"sm",align:l[2]==="next"?"left":"right",$$slots:{default:[se]},$$scope:{ctx:l}}});let m=l[2]==="next"&&T();return{c(){a&&a.c(),t=S(),r=U("div"),d(e.$$.fragment),s=S(),d(n.$$.fragment),u=S(),m&&m.c(),i=z(),this.h()},l(f){a&&a.l(f),t=C(f),r=V(f,"DIV",{class:!0});var p=E(r);k(e.$$.fragment,p),s=C(p),k(n.$$.fragment,p),p.forEach(b),u=C(f),m&&m.l(f),i=z(),this.h()},h(){R(r,"class",o=l[5].body)},m(f,p){a&&a.m(f,p),y(f,t,p),y(f,r,p),w(e,r,null),F(r,s),w(n,r,null),y(f,u,p),m&&m.m(f,p),y(f,i,p),$=!0},p(f,p){f[2]==="prev"?a?p&4&&c(a,1):(a=L(),a.c(),c(a,1),a.m(t.parentNode,t)):a&&(j(),g(a,1,1,()=>{a=null}),D());const h={};p&4&&(h.align=f[2]==="next"?"left":"right"),p&32&&(h.class=f[5].text),p&132&&(h.$$scope={dirty:p,ctx:f}),e.$set(h);const _={};p&4&&(_.align=f[2]==="next"?"left":"right"),p&129&&(_.$$scope={dirty:p,ctx:f}),n.$set(_),(!$||p&32&&o!==(o=f[5].body))&&R(r,"class",o),f[2]==="next"?m?p&4&&c(m,1):(m=T(),m.c(),c(m,1),m.m(i.parentNode,i)):m&&(j(),g(m,1,1,()=>{m=null}),D())},i(f){$||(c(a),c(e.$$.fragment,f),c(n.$$.fragment,f),c(m),$=!0)},o(f){g(a),g(e.$$.fragment,f),g(n.$$.fragment,f),g(m),$=!1},d(f){a&&a.d(f),f&&b(t),f&&b(r),v(e),v(n),f&&b(u),m&&m.d(f),f&&b(i)}}}function ae(l){let t,r;return t=new Z({props:{underline:!1,href:""+(B+l[0].slug),class:`${l[6](l[4]({css:l[1]}),{next:l[2]==="next"},l[3])} sibling`,$$slots:{default:[le]},$$scope:{ctx:l}}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,s){w(t,e,s),r=!0},p(e,[s]){const n={};s&1&&(n.href=""+(B+e[0].slug)),s&94&&(n.class=`${e[6](e[4]({css:e[1]}),{next:e[2]==="next"},e[3])} sibling`),s&165&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){r||(c(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function oe(l,t,r){let e,s,n,{data:o={slug:"/",title:"Title Here",package:"Package Here"},override:u={},type:i="next",class:$=""}=t;return l.$$set=a=>{"data"in a&&r(0,o=a.data),"override"in a&&r(1,u=a.override),"type"in a&&r(2,i=a.type),"class"in a&&r(3,$=a.class)},l.$$.update=()=>{l.$$.dirty&4&&r(6,{cx:e,classes:s,getStyles:n}=re({type:i}),e,(r(5,s),r(2,i)),(r(4,n),r(2,i)))},[o,u,i,$,n,s,e]}class A extends q{constructor(t){super(),I(this,t,oe,ae,M,{data:0,override:1,type:2,class:3})}}function ie(l){let t,r;return t=new J({props:{noWrap:!0,grow:!!l[0],position:l[0]?"apart":l[1]==="prev"?"left":"right",$$slots:{default:[ce]},$$scope:{ctx:l}}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,s){w(t,e,s),r=!0},p(e,s){const n={};s&1&&(n.grow=!!e[0]),s&3&&(n.position=e[0]?"apart":e[1]==="prev"?"left":"right"),s&4111&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){r||(c(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function fe(l){let t,r;return t=new te({props:{$$slots:{default:[$e]},$$scope:{ctx:l}}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,s){w(t,e,s),r=!0},p(e,s){const n={};s&4108&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){r||(c(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function ue(l){let t,r;return t=new A({props:{data:l[5]}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,s){w(t,e,s),r=!0},p:W,i(e){r||(c(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function me(l){let t,r;return t=new A({props:{data:l[5],type:l[1]}}),{c(){d(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,s){w(t,e,s),r=!0},p(e,s){const n={};s&2&&(n.type=e[1]),t.$set(n)},i(e){r||(c(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function pe(l){let t,r,e,s;return t=new A({props:{data:l[2]||l[5],type:"prev"}}),e=new A({props:{data:l[3]||l[5]}}),{c(){d(t.$$.fragment),r=S(),d(e.$$.fragment)},l(n){k(t.$$.fragment,n),r=C(n),k(e.$$.fragment,n)},m(n,o){w(t,n,o),y(n,r,o),w(e,n,o),s=!0},p(n,o){const u={};o&4&&(u.data=n[2]||n[5]),t.$set(u);const i={};o&8&&(i.data=n[3]||n[5]),e.$set(i)},i(n){s||(c(t.$$.fragment,n),c(e.$$.fragment,n),s=!0)},o(n){g(t.$$.fragment,n),g(e.$$.fragment,n),s=!1},d(n){v(t,n),n&&b(r),v(e,n)}}}function ce(l){let t,r,e,s;const n=[pe,me,ue],o=[];function u(i,$){return i[0]?0:i[1]==="prev"?1:2}return t=u(l),r=o[t]=n[t](l),{c(){r.c(),e=z()},l(i){r.l(i),e=z()},m(i,$){o[t].m(i,$),y(i,e,$),s=!0},p(i,$){let a=t;t=u(i),t===a?o[t].p(i,$):(j(),g(o[a],1,1,()=>{o[a]=null}),D(),r=o[t],r?r.p(i,$):(r=o[t]=n[t](i),r.c()),c(r,1),r.m(e.parentNode,e))},i(i){s||(c(r),s=!0)},o(i){g(r),s=!1},d(i){o[t].d(i),i&&b(e)}}}function $e(l){let t,r,e,s;return t=new A({props:{data:l[2]||l[5],type:"prev"}}),e=new A({props:{data:l[3]||l[5]}}),{c(){d(t.$$.fragment),r=S(),d(e.$$.fragment)},l(n){k(t.$$.fragment,n),r=C(n),k(e.$$.fragment,n)},m(n,o){w(t,n,o),y(n,r,o),w(e,n,o),s=!0},p(n,o){const u={};o&4&&(u.data=n[2]||n[5]),t.$set(u);const i={};o&8&&(i.data=n[3]||n[5]),e.$set(i)},i(n){s||(c(t.$$.fragment,n),c(e.$$.fragment,n),s=!0)},o(n){g(t.$$.fragment,n),g(e.$$.fragment,n),s=!1},d(n){v(t,n),n&&b(r),v(e,n)}}}function ge(l){let t,r,e,s,n,o;t=new x({props:{size:"lg",override:{mt:"$20 !important"}}});const u=[fe,ie],i=[];function $(a,m){return a[0]&&a[4]<=950?0:1}return e=$(l),s=i[e]=u[e](l),{c(){d(t.$$.fragment),r=S(),s.c(),n=z()},l(a){k(t.$$.fragment,a),r=C(a),s.l(a),n=z()},m(a,m){w(t,a,m),y(a,r,m),i[e].m(a,m),y(a,n,m),o=!0},p(a,[m]){let f=e;e=$(a),e===f?i[e].p(a,m):(j(),g(i[f],1,1,()=>{i[f]=null}),D(),s=i[e],s?s.p(a,m):(s=i[e]=u[e](a),s.c()),c(s,1),s.m(n.parentNode,n))},i(a){o||(c(t.$$.fragment,a),c(s),o=!0)},o(a){g(t.$$.fragment,a),g(s),o=!1},d(a){v(t,a),a&&b(r),i[e].d(a),a&&b(n)}}}function _e(l,t,r){let e,s,n,{slug:o,title:u,group:i,both:$=!1,type:a="next"}=t;const m={slug:o,title:u,package:i},f=ee();O(l,f,_=>r(11,n=_));let p,h;return l.$$set=_=>{"slug"in _&&r(7,o=_.slug),"title"in _&&r(8,u=_.title),"group"in _&&r(9,i=_.group),"both"in _&&r(0,$=_.both),"type"in _&&r(1,a=_.type)},l.$$.update=()=>{l.$$.dirty&896&&r(10,e=typeof o=="object"&&typeof u=="object"&&typeof i=="object"),l.$$.dirty&1921&&e&&$&&(r(2,p={slug:o.prev,title:u.prev,package:i.prev}),r(3,h={slug:o.next,title:u.next,package:i.next})),l.$$.dirty&2048&&r(4,{width:s}=n,s)},[$,a,p,h,s,m,f,o,u,i,e,n]}class Ae extends q{constructor(t){super(),I(this,t,_e,ge,M,{slug:7,title:8,group:9,both:0,type:1})}}export{Ae as B};