function v(){}const Y=t=>t;function vt(t,e){for(const n in e)t[n]=e[n];return t}function ft(t){return t()}function ct(){return Object.create(null)}function T(t){t.forEach(ft)}function P(t){return typeof t=="function"}function Zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let z;function te(t,e){return z||(z=document.createElement("a")),z.href=e,t===z.href}function Tt(t){return Object.keys(t).length===0}function Nt(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ee(t,e,n){t.$$.on_destroy.push(Nt(e,n))}function ne(t,e,n,i){if(t){const s=_t(t,e,n,i);return t[0](s)}}function _t(t,e,n,i){return t[1]&&i?vt(n.ctx.slice(),t[1](i(e))):n.ctx}function ie(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const a=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)a[o]=e.dirty[o]|s[o];return a}return e.dirty|s}return e.dirty}function se(t,e,n,i,s,a){if(s){const r=_t(e,n,i,a);t.p(r,s)}}function re(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function oe(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ce(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function ae(t){const e={};for(const n in t)e[n]=!0;return e}function le(t){return t??""}function ue(t,e,n){return t.set(n),e}function fe(t){return t&&P(t.destroy)?t.destroy:v}function _e(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const dt=typeof window<"u";let Z=dt?()=>window.performance.now():()=>Date.now(),tt=dt?t=>requestAnimationFrame(t):v;const j=new Set;function ht(t){j.forEach(e=>{e.c(t)||(j.delete(e),e.f())}),j.size!==0&&tt(ht)}function et(t){let e;return j.size===0&&tt(ht),{promise:new Promise(n=>{j.add(e={c:t,f:n})}),abort(){j.delete(e)}}}let J=!1;function At(){J=!0}function Mt(){J=!1}function St(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function jt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=l?s+1:St(1,s,h=>e[n[h]].claim_order,l))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,s=Math.max(_,s)}const a=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(a.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);a.reverse(),r.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<r.length;c++){for(;l<a.length&&r[c].claim_order>=a[l].claim_order;)l++;const f=l<a.length?a[l]:null;t.insertBefore(r[c],f)}}function Ct(t,e){t.appendChild(e)}function mt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Dt(t){const e=nt("style");return Pt(mt(t),e),e.sheet}function Pt(t,e){return Ct(t.head||t,e),e.sheet}function Lt(t,e){if(J){for(jt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ot(t,e,n){t.insertBefore(e,n||null)}function Ht(t,e,n){J&&!n?Lt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function H(t){t.parentNode&&t.parentNode.removeChild(t)}function de(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function nt(t){return document.createElement(t)}function pt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function it(t){return document.createTextNode(t)}function he(){return it(" ")}function me(){return it("")}function pe(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ye(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ge(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function st(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Rt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:st(t,i,e[i])}function $e(t,e){for(const n in e)st(t,n,e[n])}function qt(t,e){Object.keys(e).forEach(n=>{Bt(t,n,e[n])})}function Bt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:st(t,e,n)}function be(t){return/-/.test(t)?qt:Rt}function xe(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function we(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function Ee(t){return t===""?null:+t}function zt(t){return Array.from(t.childNodes)}function yt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function gt(t,e,n,i,s=!1){yt(t);const a=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function $t(t,e,n,i){return gt(t,s=>s.nodeName===e,s=>{const a=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||a.push(o.name)}a.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ke(t,e,n){return $t(t,e,n,nt)}function ve(t,e,n){return $t(t,e,n,pt)}function Ft(t,e){return gt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>it(e),!0)}function Te(t){return Ft(t," ")}function at(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Ne(t,e){const n=at(t,"HTML_TAG_START",0),i=at(t,"HTML_TAG_END",n);if(n===i)return new lt(void 0,e);yt(t);const s=t.splice(n,i-n+1);H(s[0]),H(s[s.length-1]);const a=s.slice(1,s.length-1);for(const r of a)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new lt(a,e)}function Ae(t,e){e=""+e,t.data!==e&&(t.data=e)}function Me(t,e){t.value=e??""}function Se(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function je(t,e,n){t.classList[n?"add":"remove"](e)}function bt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Ce(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const a=s.textContent.trim();a===`HEAD_${t}_END`?(i-=1,n.push(s)):a===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Gt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=pt(n.nodeName):this.e=nt(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Ot(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(H)}}class lt extends Gt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Ht(this.t,this.n[n],e)}}function De(t,e){return new t(e)}const G=new Map;let U=0;function Ut(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Wt(t,e){const n={stylesheet:Dt(e),rules:{}};return G.set(t,n),n}function W(t,e,n,i,s,a,r,o=0){const c=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=c){const g=e+(n-e)*a(m);l+=m*100+`%{${r(g,1-g)}}
`}const f=l+`100% {${r(n,1-n)}}
}`,_=`__svelte_${Ut(f)}_${o}`,h=mt(t),{stylesheet:u,rules:d}=G.get(h)||Wt(h,t);d[_]||(d[_]=!0,u.insertRule(`@keyframes ${_} ${f}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${i}ms linear ${s}ms 1 both`,U+=1,_}function I(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),U-=s,U||It())}function It(){tt(()=>{U||(G.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&H(e)}),G.clear())})}let R;function O(t){R=t}function A(){if(!R)throw new Error("Function called outside component initialization");return R}function Pe(t){A().$$.before_update.push(t)}function Le(t){A().$$.on_mount.push(t)}function Oe(t){A().$$.after_update.push(t)}function He(t){A().$$.on_destroy.push(t)}function Re(){const t=A();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const a=bt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,a)}),!a.defaultPrevented}return!0}}function qe(t,e){return A().$$.context.set(t,e),e}function Be(t){return A().$$.context.get(t)}function ze(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const S=[],ut=[];let C=[];const V=[],xt=Promise.resolve();let X=!1;function wt(){X||(X=!0,xt.then(Et))}function Fe(){return wt(),xt}function D(t){C.push(t)}function Ge(t){V.push(t)}const Q=new Set;let M=0;function Et(){if(M!==0)return;const t=R;do{try{for(;M<S.length;){const e=S[M];M++,O(e),Jt(e.$$)}}catch(e){throw S.length=0,M=0,e}for(O(null),S.length=0,M=0;ut.length;)ut.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];Q.has(n)||(Q.add(n),n())}C.length=0}while(S.length);for(;V.length;)V.pop()();X=!1,Q.clear(),O(t)}function Jt(t){if(t.fragment!==null){t.update(),T(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}function Kt(t){const e=[],n=[];C.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),C=e}let L;function rt(){return L||(L=Promise.resolve(),L.then(()=>{L=null})),L}function N(t,e,n){t.dispatchEvent(bt(`${e?"intro":"outro"}${n}`))}const F=new Set;let E;function Ue(){E={r:0,c:[],p:E}}function We(){E.r||T(E.c),E=E.p}function kt(t,e){t&&t.i&&(F.delete(t),t.i(e))}function Qt(t,e,n,i){if(t&&t.o){if(F.has(t))return;F.add(t),E.c.push(()=>{F.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ot={duration:0};function Ie(t,e,n){const i={direction:"in"};let s=e(t,n,i),a=!1,r,o,c=0;function l(){r&&I(t,r)}function f(){const{delay:h=0,duration:u=300,easing:d=Y,tick:p=v,css:m}=s||ot;m&&(r=W(t,0,1,u,h,d,m,c++)),p(0,1);const g=Z()+h,k=g+u;o&&o.abort(),a=!0,D(()=>N(t,!0,"start")),o=et($=>{if(a){if($>=k)return p(1,0),N(t,!0,"end"),l(),a=!1;if($>=g){const b=d(($-g)/u);p(b,1-b)}}return a})}let _=!1;return{start(){_||(_=!0,I(t),P(s)?(s=s(i),rt().then(f)):f())},invalidate(){_=!1},end(){a&&(l(),a=!1)}}}function Je(t,e,n){const i={direction:"out"};let s=e(t,n,i),a=!0,r;const o=E;o.r+=1;function c(){const{delay:l=0,duration:f=300,easing:_=Y,tick:h=v,css:u}=s||ot;u&&(r=W(t,1,0,f,l,_,u));const d=Z()+l,p=d+f;D(()=>N(t,!1,"start")),et(m=>{if(a){if(m>=p)return h(0,1),N(t,!1,"end"),--o.r||T(o.c),!1;if(m>=d){const g=_((m-d)/f);h(1-g,g)}}return a})}return P(s)?rt().then(()=>{s=s(i),c()}):c(),{end(l){l&&s.tick&&s.tick(1,0),a&&(r&&I(t,r),a=!1)}}}function Ke(t,e,n,i){const s={direction:"both"};let a=e(t,n,s),r=i?0:1,o=null,c=null,l=null;function f(){l&&I(t,l)}function _(u,d){const p=u.b-r;return d*=Math.abs(p),{a:r,b:u.b,d:p,duration:d,start:u.start,end:u.start+d,group:u.group}}function h(u){const{delay:d=0,duration:p=300,easing:m=Y,tick:g=v,css:k}=a||ot,$={start:Z()+d,b:u};u||($.group=E,E.r+=1),o||c?c=$:(k&&(f(),l=W(t,r,u,p,d,m,k)),u&&g(0,1),o=_($,p),D(()=>N(t,u,"start")),et(b=>{if(c&&b>c.start&&(o=_(c,p),c=null,N(t,o.b,"start"),k&&(f(),l=W(t,r,o.b,o.duration,0,m,a.css))),o){if(b>=o.end)g(r=o.b,1-r),N(t,o.b,"end"),c||(o.b?f():--o.group.r||T(o.group.c)),o=null;else if(b>=o.start){const q=b-o.start;r=o.a+o.d*m(q/o.duration),g(r,1-r)}}return!!(o||c)}))}return{run(u){P(a)?rt().then(()=>{a=a(s),h(u)}):h(u)},end(){f(),o=c=null}}}const Qe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ve(t,e){Qt(t,1,1,()=>{e.delete(t.key)})}function Xe(t,e,n,i,s,a,r,o,c,l,f,_){let h=t.length,u=a.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const m=[],g=new Map,k=new Map,$=[];for(d=u;d--;){const y=_(s,a,d),x=n(y);let w=r.get(x);w?i&&$.push(()=>w.p(y,e)):(w=l(x,y),w.c()),g.set(x,m[d]=w),x in p&&k.set(x,Math.abs(d-p[x]))}const b=new Set,q=new Set;function K(y){kt(y,1),y.m(o,f),r.set(y.key,y),f=y.first,u--}for(;h&&u;){const y=m[u-1],x=t[h-1],w=y.key,B=x.key;y===x?(f=y.first,h--,u--):g.has(B)?!r.has(w)||b.has(w)?K(y):q.has(B)?h--:k.get(w)>k.get(B)?(q.add(w),K(y)):(b.add(B),h--):(c(x,r),h--)}for(;h--;){const y=t[h];g.has(y.key)||c(y,r)}for(;u;)K(m[u-1]);return T($),m}function Ye(t,e){const n={},i={},s={$$scope:1};let a=t.length;for(;a--;){const r=t[a],o=e[a];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[a]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Ze(t){return typeof t=="object"&&t!==null?t:{}}function tn(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function en(t){t&&t.c()}function nn(t,e){t&&t.l(e)}function Vt(t,e,n,i){const{fragment:s,after_update:a}=t.$$;s&&s.m(e,n),i||D(()=>{const r=t.$$.on_mount.map(ft).filter(P);t.$$.on_destroy?t.$$.on_destroy.push(...r):T(r),t.$$.on_mount=[]}),a.forEach(D)}function Xt(t,e){const n=t.$$;n.fragment!==null&&(Kt(n.after_update),T(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Yt(t,e){t.$$.dirty[0]===-1&&(S.push(t),wt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function sn(t,e,n,i,s,a,r,o=[-1]){const c=R;O(t);const l=t.$$={fragment:null,ctx:[],props:a,update:v,not_equal:s,bound:ct(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ct(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(_,h,...u)=>{const d=u.length?u[0]:h;return l.ctx&&s(l.ctx[_],l.ctx[_]=d)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](d),f&&Yt(t,_)),h}):[],l.update(),f=!0,T(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){At();const _=zt(e.target);l.fragment&&l.fragment.l(_),_.forEach(H)}else l.fragment&&l.fragment.c();e.intro&&kt(t.$$.fragment),Vt(t,e.target,e.anchor,e.customElement),Mt(),Et()}O(c)}class rn{$destroy(){Xt(this,1),this.$destroy=v}$on(e,n){if(!P(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ie as $,Vt as A,Xt as B,v as C,Nt as D,T as E,P as F,ne as G,vt as H,Rt as I,fe as J,se as K,re as L,ie as M,Ye as N,ce as O,ee as P,Pe as Q,A as R,rn as S,oe as T,qe as U,pt as V,ve as W,$e as X,Lt as Y,ze as Z,D as _,he as a,Je as a0,pe as a1,Re as a2,de as a3,ue as a4,tn as a5,Ge as a6,Ze as a7,je as a8,Ke as a9,_e as aa,Y as ab,lt as ac,Ne as ad,ye as ae,ge as af,Be as ag,be as ah,ae as ai,Qe as aj,He as ak,Ce as al,le as am,Z as an,et as ao,te as ap,we as aq,Me as ar,Ee as as,Xe as at,Ve as au,xe as av,Ht as b,Te as c,Qt as d,me as e,We as f,kt as g,H as h,sn as i,Oe as j,nt as k,ke as l,zt as m,st as n,Le as o,Se as p,it as q,Ft as r,Zt as s,Fe as t,Ae as u,Ue as v,ut as w,De as x,en as y,nn as z};