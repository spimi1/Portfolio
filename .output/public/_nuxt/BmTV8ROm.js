const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./C7nh6crl.js","./BBzcnZ-k.js","./entry.DHyL_72x.css","./DyabSl35.js","./IShi1APO.js","./9a4BAK3D.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{h as p}from"./IShi1APO.js";import{u as f}from"./ie0jLNPh.js";import{y as v,D as g,z as d,E as l,k as h,G as _,A as y,C as r}from"./BBzcnZ-k.js";import{q as C,w as c,e as w,s as P,j as $,u as N}from"./DyabSl35.js";import{u as j}from"./9a4BAK3D.js";import{_ as D}from"./CjKSYk5E.js";const E=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=C(e));const a=e.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${p(a)}.${t.integrity}`}/${w(a)}.json`):c(`/navigation/${p(a)}.${t.integrity}.json`);if(P())return(await g(()=>import("./C7nh6crl.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:j().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},T=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=h(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&_("dd-navigation").value){const{navigation:n}=N();return{navigation:n}}const{data:s}=await f(`content-navigation-${p(a.value)}`,()=>E(a.value));return{navigation:s}},render(e){const t=y(),{navigation:a}=e,s=o=>r(D,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),m=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}}),R=T;export{R as default};
