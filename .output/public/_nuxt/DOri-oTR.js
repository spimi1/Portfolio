import{a1 as o,r as u,a2 as d,v as f,d as v,a3 as l,a4 as i,a5 as h,T as m}from"./BBzcnZ-k.js";function U(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=u(!1),n=u({});d(()=>{n.value=s.value?{}:h(a)});const r=t.push(n.value,e);return f(n,c=>{r.patch(c)}),m()&&(v(()=>{r.dispose()}),l(()=>{s.value=!0}),i(()=>{s.value=!1})),r}export{U as u};
