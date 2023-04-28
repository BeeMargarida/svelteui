function h(){const t=document.createElement("style");return t.type="text/css",t.setAttribute("svelteui-scroll-lock",""),t}function p(){if(typeof window>"u"||typeof document>"u")return 0;const t=parseInt(window.getComputedStyle(document.body).paddingRight,10),e=window.innerWidth-document.documentElement.clientWidth;return t+e}const w=({disableBodyPadding:t})=>{const e=t?null:p();return`body {
        --removed-scroll-width: ${e}px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        ${e?"padding-right: var(--removed-scroll-width) !important;":""}
        `};function m(t,e){t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}function g(t){(document.head||document.getElementsByTagName("head")[0]).appendChild(t)}const u=()=>typeof window<"u",a={browser:u(),server:!u()},b=a.browser?window:void 0;function v(t,e,r={disableBodyPadding:!1}){const{browser:f}=a;let d;f&&(d=b);let i=e??!1;const{disableBodyPadding:y}=r;let n;const c=()=>{const o=w({disableBodyPadding:y}),s=h();m(s,o),g(s),n=s},l=()=>{var o;n&&((o=n==null?void 0:n.parentNode)==null||o.removeChild(n),n=null)};return i?c():l(),e!==void 0&&(i=e),e===void 0&&typeof d<"u"&&d.document.body.style.overflow==="hidden"&&(i=e),{update:o=>{o?c():(d.document.body.style.overflow==="visible"&&(i=e),l())},destroy:()=>{l()}}}export{v as l};
