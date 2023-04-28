import{S as _a,i as ya,s as Pa,k as e,q as l,a as i,l as p,m as o,r as c,h as a,c as u,n as F,b as r,W as n,X as Ws}from"./index.b4f0bbdc.js";function wa(ka){let f,us,Q,P,ks,V,w,I,vs,L,ds,Z,E,va=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SvelteUIProvider <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@svelteuidev/core'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SvelteUIProvider</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>YourApp</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SvelteUIProvider</span><span class="token punctuation">></span></span></code>`,ss,b,U,fs,x,ms,as,h,da=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SvelteUIProvider <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@svelteuidev/core'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SvelteUIProvider</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SvelteUIProvider</span><span class="token punctuation">></span></span></code>`,ns,C,Ss,ts,j,gs,es,k,m,A,Es,hs,G,_s,ys,Ps,S,H,ws,Is,M,bs,Us,Cs,g,Y,js,Ds,q,Os,Ts,ps,v,Rs,K,zs,Ns,W,Fs,Ls,os,_,fa=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SvelteUIProvider <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@svelteuidev/core'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SvelteUIProvider</span> <span class="token attr-name">withNormalizeCSS</span> <span class="token attr-name">withGlobalStyles</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>YourApp</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SvelteUIProvider</span><span class="token punctuation">></span></span></code>`,ls,D,xs,cs,O,As,rs,y,ma=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SvelteUIProvider <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@svelteuidev/core'</span><span class="token punctuation">;</span>
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> pageleave <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@svelteuidev/actions'</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> element
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> element <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

&lt;SvelteUIProvider
    bind:element
    use=<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token punctuation">[</span>pageleave<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'page left'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>
    class='animate-bounce' // &lt;-- &#96;Tailwind class&#96;
    override=<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span><span class="token literal-property property">mt</span><span class="token operator">:</span> <span class="token string">'$4'</span><span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> // <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>--</span> <span class="token attr-name">&#96;using</span> <span class="token attr-name">style</span> <span class="token attr-name">utilities</span> <span class="token attr-name">and</span> <span class="token attr-name">theme</span> <span class="token attr-name">tokens&#96;</span>
<span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>YourApp</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SvelteUIProvider</span><span class="token punctuation">></span></span></code>`,is,d,Gs,T,Hs,Ms,R,Ys;return{c(){f=e("h1"),us=l("Getting Started"),Q=i(),P=e("p"),ks=l("For SvelteUI to work properly, you need to set up the SvelteUIProvider at the top level of your application."),V=i(),w=e("p"),I=e("strong"),vs=l("For Svelte projects -> "),L=e("code"),ds=l("App.svelte"),Z=i(),E=e("pre"),ss=i(),b=e("p"),U=e("strong"),fs=l("For SvelteKit projects -> "),x=e("code"),ms=l("+layout.svelte"),as=i(),h=e("pre"),ns=i(),C=e("h2"),Ss=l("NormalizeCSS and global styles"),ts=i(),j=e("p"),gs=l("SvelteUIProvider includes a NormalizeCSS style sheet and some extra global styles added to body element:"),es=i(),k=e("ul"),m=e("li"),A=e("code"),Es=l("background-color"),hs=l(" to "),G=e("code"),_s=l('theme.colors["dark700"].value'),ys=l(" in dark color scheme and white in light"),Ps=i(),S=e("li"),H=e("code"),ws=l("color"),Is=l(" to "),M=e("code"),bs=l('theme.colors["dark50"].value'),Us=l(" in dark color scheme and black in light"),Cs=i(),g=e("li"),Y=e("code"),js=l("font-family"),Ds=l(" and "),q=e("code"),Os=l("font-size"),Ts=l(" based on theme"),ps=i(),v=e("p"),Rs=l("To enable these global styles, set "),K=e("code"),zs=l("withNormalizeCSS"),Ns=l(" and "),W=e("code"),Fs=l("withGlobalStyles"),Ls=l(" props:"),os=i(),_=e("pre"),ls=i(),D=e("h2"),xs=l("Component concepts"),cs=i(),O=e("p"),As=l("SvelteUIProvider can accept actions, classes, element bindings, and style overrides just like any other component"),rs=i(),y=e("pre"),is=i(),d=e("p"),Gs=l("For information on SSR and color scheme changes, refer to "),T=e("a"),Hs=l("Server Side Rendering"),Ms=l(", "),R=e("a"),Ys=l("Dark Theme"),this.h()},l(s){f=p(s,"H1",{});var t=o(f);us=c(t,"Getting Started"),t.forEach(a),Q=u(s),P=p(s,"P",{});var Xs=o(P);ks=c(Xs,"For SvelteUI to work properly, you need to set up the SvelteUIProvider at the top level of your application."),Xs.forEach(a),V=u(s),w=p(s,"P",{});var $s=o(w);I=p($s,"STRONG",{});var qs=o(I);vs=c(qs,"For Svelte projects -> "),L=p(qs,"CODE",{});var Bs=o(L);ds=c(Bs,"App.svelte"),Bs.forEach(a),qs.forEach(a),$s.forEach(a),Z=u(s),E=p(s,"PRE",{class:!0});var Sa=o(E);Sa.forEach(a),ss=u(s),b=p(s,"P",{});var Js=o(b);U=p(Js,"STRONG",{});var Ks=o(U);fs=c(Ks,"For SvelteKit projects -> "),x=p(Ks,"CODE",{});var Qs=o(x);ms=c(Qs,"+layout.svelte"),Qs.forEach(a),Ks.forEach(a),Js.forEach(a),as=u(s),h=p(s,"PRE",{class:!0});var ga=o(h);ga.forEach(a),ns=u(s),C=p(s,"H2",{});var Vs=o(C);Ss=c(Vs,"NormalizeCSS and global styles"),Vs.forEach(a),ts=u(s),j=p(s,"P",{});var Zs=o(j);gs=c(Zs,"SvelteUIProvider includes a NormalizeCSS style sheet and some extra global styles added to body element:"),Zs.forEach(a),es=u(s),k=p(s,"UL",{});var z=o(k);m=p(z,"LI",{});var X=o(m);A=p(X,"CODE",{});var sa=o(A);Es=c(sa,"background-color"),sa.forEach(a),hs=c(X," to "),G=p(X,"CODE",{});var aa=o(G);_s=c(aa,'theme.colors["dark700"].value'),aa.forEach(a),ys=c(X," in dark color scheme and white in light"),X.forEach(a),Ps=u(z),S=p(z,"LI",{});var $=o(S);H=p($,"CODE",{});var na=o(H);ws=c(na,"color"),na.forEach(a),Is=c($," to "),M=p($,"CODE",{});var ta=o(M);bs=c(ta,'theme.colors["dark50"].value'),ta.forEach(a),Us=c($," in dark color scheme and black in light"),$.forEach(a),Cs=u(z),g=p(z,"LI",{});var B=o(g);Y=p(B,"CODE",{});var ea=o(Y);js=c(ea,"font-family"),ea.forEach(a),Ds=c(B," and "),q=p(B,"CODE",{});var pa=o(q);Os=c(pa,"font-size"),pa.forEach(a),Ts=c(B," based on theme"),B.forEach(a),z.forEach(a),ps=u(s),v=p(s,"P",{});var N=o(v);Rs=c(N,"To enable these global styles, set "),K=p(N,"CODE",{});var oa=o(K);zs=c(oa,"withNormalizeCSS"),oa.forEach(a),Ns=c(N," and "),W=p(N,"CODE",{});var la=o(W);Fs=c(la,"withGlobalStyles"),la.forEach(a),Ls=c(N," props:"),N.forEach(a),os=u(s),_=p(s,"PRE",{class:!0});var Ea=o(_);Ea.forEach(a),ls=u(s),D=p(s,"H2",{});var ca=o(D);xs=c(ca,"Component concepts"),ca.forEach(a),cs=u(s),O=p(s,"P",{});var ra=o(O);As=c(ra,"SvelteUIProvider can accept actions, classes, element bindings, and style overrides just like any other component"),ra.forEach(a),rs=u(s),y=p(s,"PRE",{class:!0});var ha=o(y);ha.forEach(a),is=u(s),d=p(s,"P",{});var J=o(d);Gs=c(J,"For information on SSR and color scheme changes, refer to "),T=p(J,"A",{href:!0});var ia=o(T);Hs=c(ia,"Server Side Rendering"),ia.forEach(a),Ms=c(J,", "),R=p(J,"A",{href:!0});var ua=o(R);Ys=c(ua,"Dark Theme"),ua.forEach(a),J.forEach(a),this.h()},h(){F(E,"class","language-svelte"),F(h,"class","language-svelte"),F(_,"class","language-svelte"),F(y,"class","language-svelte"),F(T,"href","/theming/ssr"),F(R,"href","/theming/dark-theme")},m(s,t){r(s,f,t),n(f,us),r(s,Q,t),r(s,P,t),n(P,ks),r(s,V,t),r(s,w,t),n(w,I),n(I,vs),n(I,L),n(L,ds),r(s,Z,t),r(s,E,t),E.innerHTML=va,r(s,ss,t),r(s,b,t),n(b,U),n(U,fs),n(U,x),n(x,ms),r(s,as,t),r(s,h,t),h.innerHTML=da,r(s,ns,t),r(s,C,t),n(C,Ss),r(s,ts,t),r(s,j,t),n(j,gs),r(s,es,t),r(s,k,t),n(k,m),n(m,A),n(A,Es),n(m,hs),n(m,G),n(G,_s),n(m,ys),n(k,Ps),n(k,S),n(S,H),n(H,ws),n(S,Is),n(S,M),n(M,bs),n(S,Us),n(k,Cs),n(k,g),n(g,Y),n(Y,js),n(g,Ds),n(g,q),n(q,Os),n(g,Ts),r(s,ps,t),r(s,v,t),n(v,Rs),n(v,K),n(K,zs),n(v,Ns),n(v,W),n(W,Fs),n(v,Ls),r(s,os,t),r(s,_,t),_.innerHTML=fa,r(s,ls,t),r(s,D,t),n(D,xs),r(s,cs,t),r(s,O,t),n(O,As),r(s,rs,t),r(s,y,t),y.innerHTML=ma,r(s,is,t),r(s,d,t),n(d,Gs),n(d,T),n(T,Hs),n(d,Ms),n(d,R),n(R,Ys)},p:Ws,i:Ws,o:Ws,d(s){s&&a(f),s&&a(Q),s&&a(P),s&&a(V),s&&a(w),s&&a(Z),s&&a(E),s&&a(ss),s&&a(b),s&&a(as),s&&a(h),s&&a(ns),s&&a(C),s&&a(ts),s&&a(j),s&&a(es),s&&a(k),s&&a(ps),s&&a(v),s&&a(os),s&&a(_),s&&a(ls),s&&a(D),s&&a(cs),s&&a(O),s&&a(rs),s&&a(y),s&&a(is),s&&a(d)}}}const ba={title:"SvelteUIProvider",description:"The SvelteUIProvider is the central part of your app.",docs:"theming/svelteui-provider.md"};class Ua extends _a{constructor(f){super(),ya(this,f,null,wa,Pa,{})}}export{Ua as default,ba as metadata};
