import{S as Ht,i as Tt,s as Vt,w as qt,a5 as Yt,H as Gt,y as F,a as v,z as J,c as g,A as K,b as m,a6 as Wt,N as Nt,a7 as Ft,g as Q,d as X,B as Z,h as n,q as o,r as p,k as c,al as Jt,l as i,m as u,n as ye,Y as t}from"../chunks/index.b0fe5a0f.js";import{B as Kt}from"../chunks/navigation.fd10cd14.js";import{H as Qt}from"../chunks/Heading.bb67d8e2.js";import{b as jt}from"../chunks/paths.605af923.js";import{D as Xt}from"../chunks/Demo.e6142117.js";import{B as Zt}from"../chunks/Button.a7c0fda0.js";import{P as en}from"../chunks/Popper.ad9a807a.js";import{C as tn}from"../chunks/Center.d0c4d84f.js";function nn(k){let a;return{c(){a=o("Reference element")},l(r){a=p(r,"Reference element")},m(r,s){m(r,a,s)},d(r){r&&n(a)}}}function an(k){let a;return{c(){a=o("Popper content")},l(r){a=p(r,"Popper content")},m(r,s){m(r,a,s)},d(r){r&&n(a)}}}function sn(k){let a,r;return a=new tn({props:{$$slots:{default:[an]},$$scope:{ctx:k}}}),{c(){F(a.$$.fragment)},l(s){J(a.$$.fragment,s)},m(s,d){K(a,s,d),r=!0},p(s,d){const _={};d&32&&(_.$$scope={dirty:d,ctx:s}),a.$set(_)},i(s){r||(Q(a.$$.fragment,s),r=!0)},o(s){X(a.$$.fragment,s),r=!1},d(s){Z(a,s)}}}function on(k){let a,r;return a=new Kt({props:{css:{backgroundColor:"$gray100",borderRadius:5,padding:"30px"},$$slots:{default:[sn]},$$scope:{ctx:k}}}),{c(){F(a.$$.fragment)},l(s){J(a.$$.fragment,s)},m(s,d){K(a,s,d),r=!0},p(s,d){const _={};d&32&&(_.$$scope={dirty:d,ctx:s}),a.$set(_)},i(s){r||(Q(a.$$.fragment,s),r=!0)},o(s){X(a.$$.fragment,s),r=!1},d(s){Z(a,s)}}}function pn(k){let a,r,s,d,_;function B(l){k[4](l)}let y={$$slots:{default:[nn]},$$scope:{ctx:k}};k[1]!==void 0&&(y.element=k[1]),a=new Zt({props:y}),qt.push(()=>Yt(a,"element",B)),a.$on("click",k[3]);const $=[{override:{"& .arrow":{backgroundColor:"$gray100"}}},{reference:k[1]},k[0],{mounted:k[2]}];let D={$$slots:{default:[on]},$$scope:{ctx:k}};for(let l=0;l<$.length;l+=1)D=Gt(D,$[l]);return d=new en({props:D}),{c(){F(a.$$.fragment),s=v(),F(d.$$.fragment)},l(l){J(a.$$.fragment,l),s=g(l),J(d.$$.fragment,l)},m(l,h){K(a,l,h),m(l,s,h),K(d,l,h),_=!0},p(l,[h]){const O={};h&32&&(O.$$scope={dirty:h,ctx:l}),!r&&h&2&&(r=!0,O.element=l[1],Wt(()=>r=!1)),a.$set(O);const C=h&7?Nt($,[$[0],h&2&&{reference:l[1]},h&1&&Ft(l[0]),h&4&&{mounted:l[2]}]):{};h&32&&(C.$$scope={dirty:h,ctx:l}),d.$set(C)},i(l){_||(Q(a.$$.fragment,l),Q(d.$$.fragment,l),_=!0)},o(l){X(a.$$.fragment,l),X(d.$$.fragment,l),_=!1},d(l){Z(a,l),l&&n(s),Z(d,l)}}}const ln=k=>`
<script>
	import { Box, Button, Popper } from '@svelteuidev/core';

	let reference;
	let mounted = false;

	const toggleMount = () => {
		mounted = !mounted;
	};
<\/script>

<Button bind:element={reference} on:click={toggleMount}>Reference element</Button>
<Popper {mounted} {reference} ${k}>
	<Box>
		<Center>Popper content</Center>
	</Box>
</Popper>
`,rn="configurator",cn={codeTemplate:ln,configurator:[{name:"position",type:"select",data:[{label:"bottom",value:"bottom"},{label:"top",value:"top"},{label:"left",value:"left"},{label:"right",value:"right"}],initialValue:"bottom",defaultValue:"bottom"},{name:"placement",type:"select",data:[{label:"start",value:"start"},{label:"center",value:"center"},{label:"end",value:"end"}],initialValue:"start",defaultValue:"start"},{name:"gutter",type:"number",min:-20,max:20,initialValue:5,defaultValue:5},{name:"arrowSize",label:"Arrow size",type:"number",min:0,max:15,initialValue:3,defaultValue:3},{name:"withArrow",label:"With arrow",type:"boolean",initialValue:!0,defaultValue:!0}],previewMaxWidth:200};function un(k,a,r){let{props:s={}}=a,d,_=!1;const B=()=>{r(2,_=!_)};function y($){d=$,r(1,d)}return k.$$set=$=>{"props"in $&&r(0,s=$.props)},[s,d,_,B,y]}class fn extends Ht{constructor(a){super(),Tt(this,a,un,pn,Vt,{props:0})}}const dn=Object.freeze(Object.defineProperty({__proto__:null,configuration:cn,default:fn,type:rn},Symbol.toStringTag,{value:"Module"}));function mn(k){let a,r,s,d,_,B,y,$,D,l,h,O,C,Ce,xe,me,H,ze,ke,z,T,ee,Be,De,Oe,w,te,Le,Ie,ne,Me,je,ae,He,Te,_e,L,St=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Popper <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@svelteuidev/core'</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> mounted <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">bind:</span>element=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>reference<span class="token punctuation">&#125;</span></span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>mounted <span class="token operator">=</span> <span class="token operator">!</span>mounted<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>Click here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popper</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>reference<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>mounted<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Popper content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popper</span><span class="token punctuation">></span></span></code>`,$e,V,Ve,ve,S,Se,ge,b,A,se,Ae,Re,Ue,R,oe,qe,Ye,Ge,U,pe,We,Ne,Fe,x,le,Je,Ke,re,Qe,Xe,ce,Ze,et,q,ie,tt,nt,he,I,be,Y,at,we,E,st,ue,ot,pt,fe,lt,rt,Ee,M,At='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popper</span> <span class="token attr-name">zIndex=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">10</span><span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">...</span>$$restProps<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>',de;return document.title=a=mt+" - SvelteUI",s=new Qt({props:{title:mt,group:_n,packageGroup:$n,slug:vn,category:gn,description:hn,importCode:bn,source:wn,docs:En}}),I=new Xt({props:{demo:dn}}),{c(){r=v(),F(s.$$.fragment),d=v(),_=c("h2"),B=o("Usage"),y=v(),$=c("p"),D=o("Popper is a utility component used under the hood in "),l=c("a"),h=o("Menu"),O=o(", Popover (not implemented yet) and "),C=c("a"),Ce=o("Tooltip"),xe=o(". You can use it to create your own dropdowns and popovers."),me=v(),H=c("p"),ze=o("To use Popper, add the following required props:"),ke=v(),z=c("ul"),T=c("li"),ee=c("code"),Be=o("reference"),De=o(" - element (HTML element) based on which Popper will be positioned"),Oe=v(),w=c("li"),te=c("code"),Le=o("mounted"),Ie=o(" - current Popper opened state: "),ne=c("code"),Me=o("true"),je=o(" to display, "),ae=c("code"),He=o("false"),Te=o(" to hide"),_e=v(),L=c("pre"),$e=v(),V=c("h2"),Ve=o("Position"),ve=v(),S=c("p"),Se=o("Popper position is controlled by these props:"),ge=v(),b=c("ul"),A=c("li"),se=c("code"),Ae=o("position"),Re=o(" - left, right, bottom or top"),Ue=v(),R=c("li"),oe=c("code"),qe=o("placement"),Ye=o(" - start, right or center"),Ge=v(),U=c("li"),pe=c("code"),We=o("gutter"),Ne=o(" - spacing between the reference element and the Popper dropdown, in px"),Fe=v(),x=c("li"),le=c("code"),Je=o("withArrow"),Ke=o(" - displays an arrow between the reference element and the Popper dropdown, takes into consideration the "),re=c("code"),Qe=o("position"),Xe=o(" and "),ce=c("code"),Ze=o("placement"),et=v(),q=c("li"),ie=c("code"),tt=o("arrowSize"),nt=o(" - the arrow size in px"),he=v(),F(I.$$.fragment),be=v(),Y=c("h1"),at=o("z-index"),we=v(),E=c("p"),st=o("By default, Popper has "),ue=c("code"),ot=o("z-index: 1"),pt=o(", but it can be changed with the "),fe=c("code"),lt=o("zIndex"),rt=o(" prop:"),Ee=v(),M=c("pre"),this.h()},l(e){Jt("svelte-pki6ul",document.head).forEach(n),r=g(e),J(s.$$.fragment,e),d=g(e),_=i(e,"H2",{});var kt=u(_);B=p(kt,"Usage"),kt.forEach(n),y=g(e),$=i(e,"P",{});var G=u($);D=p(G,"Popper is a utility component used under the hood in "),l=i(G,"A",{href:!0});var _t=u(l);h=p(_t,"Menu"),_t.forEach(n),O=p(G,", Popover (not implemented yet) and "),C=i(G,"A",{href:!0});var $t=u(C);Ce=p($t,"Tooltip"),$t.forEach(n),xe=p(G,". You can use it to create your own dropdowns and popovers."),G.forEach(n),me=g(e),H=i(e,"P",{});var vt=u(H);ze=p(vt,"To use Popper, add the following required props:"),vt.forEach(n),ke=g(e),z=i(e,"UL",{});var Pe=u(z);T=i(Pe,"LI",{});var ct=u(T);ee=i(ct,"CODE",{});var gt=u(ee);Be=p(gt,"reference"),gt.forEach(n),De=p(ct," - element (HTML element) based on which Popper will be positioned"),ct.forEach(n),Oe=g(Pe),w=i(Pe,"LI",{});var j=u(w);te=i(j,"CODE",{});var ht=u(te);Le=p(ht,"mounted"),ht.forEach(n),Ie=p(j," - current Popper opened state: "),ne=i(j,"CODE",{});var bt=u(ne);Me=p(bt,"true"),bt.forEach(n),je=p(j," to display, "),ae=i(j,"CODE",{});var wt=u(ae);He=p(wt,"false"),wt.forEach(n),Te=p(j," to hide"),j.forEach(n),Pe.forEach(n),_e=g(e),L=i(e,"PRE",{class:!0});var Rt=u(L);Rt.forEach(n),$e=g(e),V=i(e,"H2",{});var Et=u(V);Ve=p(Et,"Position"),Et.forEach(n),ve=g(e),S=i(e,"P",{});var Pt=u(S);Se=p(Pt,"Popper position is controlled by these props:"),Pt.forEach(n),ge=g(e),b=i(e,"UL",{});var P=u(b);A=i(P,"LI",{});var it=u(A);se=i(it,"CODE",{});var yt=u(se);Ae=p(yt,"position"),yt.forEach(n),Re=p(it," - left, right, bottom or top"),it.forEach(n),Ue=g(P),R=i(P,"LI",{});var ut=u(R);oe=i(ut,"CODE",{});var Ct=u(oe);qe=p(Ct,"placement"),Ct.forEach(n),Ye=p(ut," - start, right or center"),ut.forEach(n),Ge=g(P),U=i(P,"LI",{});var ft=u(U);pe=i(ft,"CODE",{});var xt=u(pe);We=p(xt,"gutter"),xt.forEach(n),Ne=p(ft," - spacing between the reference element and the Popper dropdown, in px"),ft.forEach(n),Fe=g(P),x=i(P,"LI",{});var W=u(x);le=i(W,"CODE",{});var zt=u(le);Je=p(zt,"withArrow"),zt.forEach(n),Ke=p(W," - displays an arrow between the reference element and the Popper dropdown, takes into consideration the "),re=i(W,"CODE",{});var Bt=u(re);Qe=p(Bt,"position"),Bt.forEach(n),Xe=p(W," and "),ce=i(W,"CODE",{});var Dt=u(ce);Ze=p(Dt,"placement"),Dt.forEach(n),W.forEach(n),et=g(P),q=i(P,"LI",{});var dt=u(q);ie=i(dt,"CODE",{});var Ot=u(ie);tt=p(Ot,"arrowSize"),Ot.forEach(n),nt=p(dt," - the arrow size in px"),dt.forEach(n),P.forEach(n),he=g(e),J(I.$$.fragment,e),be=g(e),Y=i(e,"H1",{});var Lt=u(Y);at=p(Lt,"z-index"),Lt.forEach(n),we=g(e),E=i(e,"P",{});var N=u(E);st=p(N,"By default, Popper has "),ue=i(N,"CODE",{});var It=u(ue);ot=p(It,"z-index: 1"),It.forEach(n),pt=p(N,", but it can be changed with the "),fe=i(N,"CODE",{});var Mt=u(fe);lt=p(Mt,"zIndex"),Mt.forEach(n),rt=p(N," prop:"),N.forEach(n),Ee=g(e),M=i(e,"PRE",{class:!0});var Ut=u(M);Ut.forEach(n),this.h()},h(){ye(l,"href",jt+"/core/menu"),ye(C,"href",jt+"/core/tooltip"),ye(L,"class","language-svelte"),ye(M,"class","language-svelte")},m(e,f){m(e,r,f),K(s,e,f),m(e,d,f),m(e,_,f),t(_,B),m(e,y,f),m(e,$,f),t($,D),t($,l),t(l,h),t($,O),t($,C),t(C,Ce),t($,xe),m(e,me,f),m(e,H,f),t(H,ze),m(e,ke,f),m(e,z,f),t(z,T),t(T,ee),t(ee,Be),t(T,De),t(z,Oe),t(z,w),t(w,te),t(te,Le),t(w,Ie),t(w,ne),t(ne,Me),t(w,je),t(w,ae),t(ae,He),t(w,Te),m(e,_e,f),m(e,L,f),L.innerHTML=St,m(e,$e,f),m(e,V,f),t(V,Ve),m(e,ve,f),m(e,S,f),t(S,Se),m(e,ge,f),m(e,b,f),t(b,A),t(A,se),t(se,Ae),t(A,Re),t(b,Ue),t(b,R),t(R,oe),t(oe,qe),t(R,Ye),t(b,Ge),t(b,U),t(U,pe),t(pe,We),t(U,Ne),t(b,Fe),t(b,x),t(x,le),t(le,Je),t(x,Ke),t(x,re),t(re,Qe),t(x,Xe),t(x,ce),t(ce,Ze),t(b,et),t(b,q),t(q,ie),t(ie,tt),t(q,nt),m(e,he,f),K(I,e,f),m(e,be,f),m(e,Y,f),t(Y,at),m(e,we,f),m(e,E,f),t(E,st),t(E,ue),t(ue,ot),t(E,pt),t(E,fe),t(fe,lt),t(E,rt),m(e,Ee,f),m(e,M,f),M.innerHTML=At,de=!0},p(e,[f]){(!de||f&0)&&a!==(a=mt+" - SvelteUI")&&(document.title=a)},i(e){de||(Q(s.$$.fragment,e),Q(I.$$.fragment,e),de=!0)},o(e){X(s.$$.fragment,e),X(I.$$.fragment,e),de=!1},d(e){e&&n(r),Z(s,e),e&&n(d),e&&n(_),e&&n(y),e&&n($),e&&n(me),e&&n(H),e&&n(ke),e&&n(z),e&&n(_e),e&&n(L),e&&n($e),e&&n(V),e&&n(ve),e&&n(S),e&&n(ge),e&&n(b),e&&n(he),Z(I,e),e&&n(be),e&&n(Y),e&&n(we),e&&n(E),e&&n(Ee),e&&n(M)}}}const kn={title:"Popper",group:"svelteuidev-core",packageGroup:"@svelteuidev/core",slug:"/core/popper/",category:"misc",description:"Render dropdown related to a reference component or in portal",importCode:"import { Popper } from '@svelteuidev/core';",source:"svelteui-core/src/components/Popper/Popper.svelte",docs:"core/popper.md"},{title:mt,group:_n,packageGroup:$n,slug:vn,category:gn,description:hn,importCode:bn,source:wn,docs:En}=kn;class Ln extends Ht{constructor(a){super(),Tt(this,a,null,mn,Vt,{})}}export{Ln as default,kn as metadata};