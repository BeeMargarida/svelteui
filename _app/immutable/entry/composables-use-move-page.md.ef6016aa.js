import{S as pe,i as re,s as le,k as g,a as $,q as _,l as T,m as x,h as t,c as C,r as b,p as m,b as c,Y as h,J as ke,a1 as q,u as K,C as N,E as ve,y as Q,al as fe,z as Z,n as ee,A as se,g as ne,d as te,B as ae}from"../chunks/index.b0fe5a0f.js";import"../chunks/navigation.9bd98935.js";import{H as de}from"../chunks/Heading.19c03976.js";import{D as he}from"../chunks/Demo.82a35c94.js";function oe({value:o,min:n,max:a}){return Math.min(Math.max(o,n),a)}function ye(o){let n=!1,a=0;function i(){document.addEventListener("mousemove",y),document.addEventListener("mouseup",E),document.addEventListener("touchmove",w),document.addEventListener("touchend",M)}function p(){document.removeEventListener("touchend",M),document.removeEventListener("touchmove",w),document.removeEventListener("mouseup",E),document.removeEventListener("mousemove",y)}function k(){n||(n=!0,o.dispatchEvent(new CustomEvent("move:start")),i())}function f(s,l){cancelAnimationFrame(a),a=requestAnimationFrame(()=>{const{left:v,top:U,width:H,height:D}=o.getBoundingClientRect();!H||!D||o.dispatchEvent(new CustomEvent("move",{detail:{x:oe({value:(s-v)/H,min:0,max:1}),y:oe({value:(l-U)/D,min:0,max:1})}}))})}function d(){n&&(n=!1,p(),o.dispatchEvent(new CustomEvent("move:stop")))}function u(s){k(),y(s)}function y(s){f(s.clientX,s.clientY)}function E(){d()}function L(s){k(),w(s)}function w(s){f(s.changedTouches[0].clientX,s.changedTouches[0].clientY)}function M(){d()}return o.addEventListener("mousedown",u),o.addEventListener("touchstart",L),{destroy(){p(),o.removeEventListener("touchstart",L),o.removeEventListener("mousedown",u)}}}function Ee(o){let n,a,i,p,k,f=o[1].x*100+"",d,u,y=o[1].y*100+"",E,L,w,M;return{c(){n=g("div"),a=g("div"),i=$(),p=g("div"),k=_("X: "),d=_(f),u=_("% Y: "),E=_(y),L=_("%"),this.h()},l(s){n=T(s,"DIV",{style:!0});var l=x(n);a=T(l,"DIV",{style:!0}),x(a).forEach(t),l.forEach(t),i=C(s),p=T(s,"DIV",{style:!0});var v=x(p);k=b(v,"X: "),d=b(v,f),u=b(v,"% Y: "),E=b(v,y),L=b(v,"%"),v.forEach(t),this.h()},h(){m(a,"position","absolute"),m(a,"cursor","pointer"),m(a,"background-color",o[0]?"green":"red"),m(a,"width","20px"),m(a,"height","20px"),m(a,"left","calc("+o[1].x*100+"% - 10px)"),m(a,"top","calc("+o[1].y*100+"% - 10px)"),m(n,"position","relative"),m(n,"width","90%"),m(n,"height","200px"),m(n,"background-color","lightgrey"),m(n,"margin","20px"),m(p,"text-align","center"),m(p,"margin-top","10px")},m(s,l){c(s,n,l),h(n,a),c(s,i,l),c(s,p,l),h(p,k),h(p,d),h(p,u),h(p,E),h(p,L),w||(M=[ke(ye.call(null,n)),q(n,"move:start",o[2]),q(n,"move",o[3]),q(n,"move:stop",o[4])],w=!0)},p(s,[l]){l&1&&m(a,"background-color",s[0]?"green":"red"),l&2&&m(a,"left","calc("+s[1].x*100+"% - 10px)"),l&2&&m(a,"top","calc("+s[1].y*100+"% - 10px)"),l&2&&f!==(f=s[1].x*100+"")&&K(d,f),l&2&&y!==(y=s[1].y*100+"")&&K(E,y)},i:N,o:N,d(s){s&&t(n),s&&t(i),s&&t(p),w=!1,ve(M)}}}const _e=`
<script>
    import { Button, Paper } from '@svelteuidev/core';
    import { clickoutside } from '@svelteuidev/composables';

    let open = true;
<\/script>

<div use:clickoutside={{ enabled: open, callback: () => open = false }}>
    <Button on:click={() => open = true}>Open Modal</Button>
    {#if open}
        <Paper shadow='sm'>
            This is a modal, click anywhere to close
        </Paper>
    {/if}
</div>`,be="demo",we={code:_e};function ge(o,n,a){let i=!1,p={x:0,y:0};function k(){a(0,i=!0)}function f(u){a(1,p=u.detail)}function d(){a(0,i=!1)}return[i,p,k,f,d]}class Te extends pe{constructor(n){super(),re(this,n,ge,Ee,le,{})}}const xe=Object.freeze(Object.defineProperty({__proto__:null,configuration:we,default:Te,type:be},Symbol.toStringTag,{value:"Module"}));function Le(o){let n,a,i,p,k,f,d,u,y,E,L,w,M,s,l,v,U,H,D,R,I,P,ce=`<code class="language-js"><span class="token literal-property property">on</span><span class="token operator">:</span>move<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> CustomEvent<span class="token operator">&lt;</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">;</span> y<span class="token operator">:</span> number <span class="token punctuation">&#125;</span><span class="token operator">></span> <span class="token operator">&amp;</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">target</span><span class="token operator">:</span> EventTarget <span class="token operator">&amp;</span> <span class="token constant">T</span> <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> unknown<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token literal-property property">on</span><span class="token operator">:</span>move<span class="token operator">:</span>start<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> CustomEvent<span class="token operator">&lt;</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">;</span> y<span class="token operator">:</span> number <span class="token punctuation">&#125;</span><span class="token operator">></span> <span class="token operator">&amp;</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">target</span><span class="token operator">:</span> EventTarget <span class="token operator">&amp;</span> <span class="token constant">T</span> <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> unknown<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token literal-property property">on</span><span class="token operator">:</span>move<span class="token operator">:</span>stop<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> CustomEvent<span class="token operator">&lt;</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">;</span> y<span class="token operator">:</span> number <span class="token punctuation">&#125;</span><span class="token operator">></span> <span class="token operator">&amp;</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">target</span><span class="token operator">:</span> EventTarget <span class="token operator">&amp;</span> <span class="token constant">T</span> <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> unknown<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span></code>`,Y,j,X,A,S,ie=`<code class="language-js"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">move</span><span class="token punctuation">(</span>
	<span class="token parameter"><span class="token literal-property property">node</span><span class="token operator">:</span> HTMLElement</span>
<span class="token punctuation">)</span><span class="token operator">:</span> ReturnType<span class="token operator">&lt;</span>Action<span class="token operator">></span><span class="token punctuation">;</span></code>`,B;return document.title=n=V+" - SvelteUI",i=new de({props:{title:V,group:$e,packageGroup:Ce,slug:De,description:He,importCode:Pe,docs:Se,source:je}}),s=new he({props:{demo:xe}}),{c(){a=$(),Q(i.$$.fragment),p=$(),k=g("h2"),f=_("Usage"),d=$(),u=g("p"),y=_("With the "),E=g("code"),L=_("use-move"),w=_(" action, it is possible to move an element in the screen with mouse or touch events."),M=$(),Q(s.$$.fragment),l=$(),v=g("h2"),U=_("Events"),H=$(),D=g("p"),R=_("The use-move action dispatches three custom event. The custom event takes a callback function just like other events."),I=$(),P=g("pre"),Y=$(),j=g("h2"),X=_("Definition"),A=$(),S=g("pre"),this.h()},l(e){fe("svelte-pki6ul",document.head).forEach(t),a=C(e),Z(i.$$.fragment,e),p=C(e),k=T(e,"H2",{});var z=x(k);f=b(z,"Usage"),z.forEach(t),d=C(e),u=T(e,"P",{});var O=x(u);y=b(O,"With the "),E=T(O,"CODE",{});var F=x(E);L=b(F,"use-move"),F.forEach(t),w=b(O," action, it is possible to move an element in the screen with mouse or touch events."),O.forEach(t),M=C(e),Z(s.$$.fragment,e),l=C(e),v=T(e,"H2",{});var G=x(v);U=b(G,"Events"),G.forEach(t),H=C(e),D=T(e,"P",{});var W=x(D);R=b(W,"The use-move action dispatches three custom event. The custom event takes a callback function just like other events."),W.forEach(t),I=C(e),P=T(e,"PRE",{class:!0});var ue=x(P);ue.forEach(t),Y=C(e),j=T(e,"H2",{});var J=x(j);X=b(J,"Definition"),J.forEach(t),A=C(e),S=T(e,"PRE",{class:!0});var me=x(S);me.forEach(t),this.h()},h(){ee(P,"class","language-js"),ee(S,"class","language-js")},m(e,r){c(e,a,r),se(i,e,r),c(e,p,r),c(e,k,r),h(k,f),c(e,d,r),c(e,u,r),h(u,y),h(u,E),h(E,L),h(u,w),c(e,M,r),se(s,e,r),c(e,l,r),c(e,v,r),h(v,U),c(e,H,r),c(e,D,r),h(D,R),c(e,I,r),c(e,P,r),P.innerHTML=ce,c(e,Y,r),c(e,j,r),h(j,X),c(e,A,r),c(e,S,r),S.innerHTML=ie,B=!0},p(e,[r]){(!B||r&0)&&n!==(n=V+" - SvelteUI")&&(document.title=n)},i(e){B||(ne(i.$$.fragment,e),ne(s.$$.fragment,e),B=!0)},o(e){te(i.$$.fragment,e),te(s.$$.fragment,e),B=!1},d(e){e&&t(a),ae(i,e),e&&t(p),e&&t(k),e&&t(d),e&&t(u),e&&t(M),ae(s,e),e&&t(l),e&&t(v),e&&t(H),e&&t(D),e&&t(I),e&&t(P),e&&t(Y),e&&t(j),e&&t(A),e&&t(S)}}}const Me={title:"use-move",group:"svelteuidev-composables",packageGroup:"@svelteuidev/composables",slug:"/composables/use-move/",description:"Handles the movement of an element based on mouse and touch events",importCode:"import { move } from '@svelteuidev/composables';",docs:"composables/use-move.md",source:"svelteui-composables/src/actions/use-move/use-move.ts"},{title:V,group:$e,packageGroup:Ce,slug:De,description:He,importCode:Pe,docs:Se,source:je}=Me;class Ae extends pe{constructor(n){super(),re(this,n,null,Le,le,{})}}export{Ae as default,Me as metadata};
