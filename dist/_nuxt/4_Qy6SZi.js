import{_ as g}from"./CjKSYk5E.js";import{u as f}from"./ie0jLNPh.js";import{q as h}from"./DyabSl35.js";import{_ as x,j as v,k as b,l as k,e as a,o as c,c as p,h as w,u as d,F as Y,a as A,w as B,n as C,t as _}from"./BBzcnZ-k.js";import"./IShi1APO.js";import"./9a4BAK3D.js";const N={class:"not-prose font-mono"},q={__name:"BlogPosts",props:{limit:{type:Number,default:null}},async setup(m){let s,n;const i=m,{data:u}=([s,n]=v(()=>f("blog-list",()=>{const e=h("/blog").where({_path:{$ne:"/blog"}}).only(["_path","title","publishedAt"]).sort({publishedAt:-1});return i.limit&&e.limit(i.limit),e.find()})),s=await s,n(),s),l=b(()=>{if(!u.value)return[];const e=[];let o=null;for(const r of u.value){const t=new Date(r.publishedAt).getFullYear(),y=t!==o;r.displayYear=y,r.year=t,e.push(r),o=t}return e});return console.log(l),(e,o)=>{const r=g;return k(e.$slots,"default",{posts:d(l)},()=>[a("section",N,[o[0]||(o[0]=a("div",{class:"column text-gray-400 text-sm"},[a("div",null,"date"),a("div",null,"title")],-1)),a("ul",null,[(c(!0),p(Y,null,w(d(l),t=>(c(),p("li",{key:t._path},[A(r,{to:t._path,class:"column group hover:bg-gray-100 dark:hover:bg-gray-800"},{default:B(()=>[a("div",{class:C({"text-white group-hover:text-gray-100 dark:text-gray-900 dark:group-hover:text-gray-800":!t.displayYear,"text-gray-400 dark:text-gray-500":t.displayYear})},_(t.year),3),a("div",null,_(t.title),1)]),_:2},1032,["to"])]))),128))])])],!0)}}},j=x(q,[["__scopeId","data-v-fc5dc34f"]]);export{j as default};
