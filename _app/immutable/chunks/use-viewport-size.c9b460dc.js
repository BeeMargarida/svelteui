import{w as s}from"./singletons.43e4cbb8.js";import{b as i,d as o}from"./_configurable.5540db98.js";const r={passive:!0};function h(){let e;i&&(e=o);const t=s({width:i?e.innerWidth:0,height:i?e.innerHeight:0}),n=()=>{t.set({width:e.innerWidth||0,height:e.innerHeight||0})};return i&&(e.addEventListener("resize",n,r),e.addEventListener("orientationchange",n,r)),t}export{h as u};