function y(r){const e=r.toLowerCase().split("+").map(o=>o.trim()),n={alt:e.includes("alt"),ctrl:e.includes("ctrl"),meta:e.includes("meta"),mod:e.includes("mod"),shift:e.includes("shift")},t=["alt","ctrl","meta","shift","mod"],s=e.find(o=>!t.includes(o));return{...n,key:s}}function E(r,e){const{alt:n,ctrl:t,meta:s,mod:o,shift:u,key:a}=r,{altKey:l,ctrlKey:i,metaKey:c,shiftKey:d,key:m}=e;if(n!==l)return!1;if(o){if(!i&&!c)return!1}else if(t!==i||s!==c)return!1;return u!==d?!1:!!(a&&(m.toLowerCase()===a.toLowerCase()||e.code.replace("Key","").toLowerCase()===a.toLowerCase()))}function f(r){return e=>E(y(r),e)}function h(r){return e=>{r.forEach(([n,t])=>{f(n)(e)&&(e.preventDefault(),t(e))})}}function k(r){if(r.target instanceof HTMLElement)return!["INPUT","TEXTAREA","SELECT"].includes(r.target.tagName)}function L(r,e){const n=t=>{e.forEach(([s,o])=>{f(s)(t)&&k(t)&&(t.preventDefault(),o(t))})};return document.documentElement.addEventListener("keydown",n),{update:t=>{e=t},destroy:()=>{document.documentElement.removeEventListener("keydown",n)}}}export{h as g,L as h};
