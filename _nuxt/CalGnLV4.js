import{d as p,c as t,e as u,D as m,n as d,E as i,G as f,a7 as S,i as _,w as r,H as o,h as l,a4 as c,g as $,t as g,f as B,F as T,a8 as D,L as F,C as V}from"./C19zmeCd.js";import{_ as I}from"./DxbWcAni.js";import{_ as z}from"./B9ZWjdF3.js";const E=p({__name:"CardContent",props:{class:{}},setup(a){const n=a;return(s,e)=>(t(),u("div",{class:d(i(f)("p-6 pt-0",n.class))},[m(s.$slots,"default")],2))}}),H=p({__name:"CardDescription",props:{class:{}},setup(a){const n=a;return(s,e)=>(t(),u("p",{class:d(i(f)("text-sm text-muted-foreground",n.class))},[m(s.$slots,"default")],2))}}),L=p({__name:"CardFooter",props:{class:{}},setup(a){const n=a;return(s,e)=>(t(),u("div",{class:d(i(f)("flex items-center p-6 pt-0",n.class))},[m(s.$slots,"default")],2))}}),G=p({__name:"CardTitle",props:{class:{}},setup(a){const n=a;return(s,e)=>(t(),u("h3",{class:d(i(f)("text-2xl font-semibold leading-none tracking-tight",n.class))},[m(s.$slots,"default")],2))}}),R={class:"group-has-[div]:mt-0 [&:not(:first-child)]:mt-5"},K=p({__name:"Card",props:{title:{},description:{},footer:{},content:{},to:{},target:{},icon:{},inStack:{type:Boolean},img:{}},setup(a){const[n,s]=S();return(e,j)=>{const h=D,C=F,k=G,y=H,w=z,b=E,v=L,U=I,N=V;return t(),u(T,null,[_(i(n),null,{default:r(()=>[_(U,{class:d(["relative h-full overflow-hidden transition-all",[e.to&&"hover:bg-muted",e.inStack&&"mb-0 rounded-none border-none shadow-none"]])},{default:r(()=>[e.img?(t(),o(h,{key:0,src:e.img,class:"w-full"},null,8,["src"])):l("",!0),e.icon||e.title||e.$slots.title||e.description||e.$slots.description?(t(),o(w,{key:1},{default:r(()=>[e.icon?(t(),o(C,{key:0,class:"mb-2",name:e.icon,size:24},null,8,["name"])):l("",!0),e.title||e.$slots.title?(t(),o(k,{key:1},{default:r(()=>[c(e.$slots,"title",{unwrap:"p"}),$(" "+g(e.title),1)]),_:3})):l("",!0),e.description||e.$slots.description?(t(),o(y,{key:2},{default:r(()=>[c(e.$slots,"description",{unwrap:"p"}),$(" "+g(e.description),1)]),_:3})):l("",!0)]),_:3})):l("",!0),e.content||e.$slots.content||e.$slots.default?(t(),o(b,{key:2},{default:r(()=>[c(e.$slots,"content",{unwrap:"p"}),c(e.$slots,"default",{unwrap:"p"})]),_:3})):l("",!0),e.footer||e.$slots.footer?(t(),o(v,{key:3},{default:r(()=>[c(e.$slots,"footer",{unwrap:"p"}),$(" "+g(e.footer),1)]),_:3})):l("",!0),e.to?(t(),o(C,{key:4,name:"lucide:arrow-up-right",class:"absolute right-4 top-4"})):l("",!0)]),_:3},8,["class"])]),_:3}),B("div",R,[e.to?(t(),o(N,{key:0,to:e.to,target:e.target},{default:r(()=>[_(i(s))]),_:1},8,["to","target"])):(t(),o(i(s),{key:1}))])],64)}}});export{K as default};
