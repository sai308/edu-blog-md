import{d,c as n,H as i,w as t,D as h,n as l,E as c,G as z,aM as y,Y as C,aN as k,ai as B,i as r,f as s,t as _,e as $,F as b,K as A,L as N,C as U}from"./C19zmeCd.js";import{_ as V}from"./DxbWcAni.js";import{_ as w}from"./B9ZWjdF3.js";const F=d({__name:"Avatar",props:{class:{},size:{default:"sm"},shape:{default:"circle"}},setup(o){const e=o;return(a,m)=>(n(),i(c(y),{class:l(c(z)(c(L)({size:a.size,shape:a.shape}),e.class))},{default:t(()=>[h(a.$slots,"default")]),_:3},8,["class"]))}}),I=d({__name:"AvatarImage",props:{src:{},referrerPolicy:{},asChild:{type:Boolean},as:{}},setup(o){const e=o;return(a,m)=>(n(),i(c(k),C(e,{class:"size-full object-cover"}),null,16))}}),L=B("inline-flex shrink-0 select-none items-center justify-center overflow-hidden bg-secondary font-normal text-foreground",{variants:{size:{sm:"size-10 text-xs",base:"size-16 text-2xl",lg:"size-32 text-5xl"},shape:{circle:"rounded-full",square:"rounded-md"}}}),S={class:"text-lg font-bold"},j={class:"text-sm text-muted-foreground"},P=d({__name:"TeamCard",props:{avatar:{},name:{},title:{},links:{},center:{type:Boolean,default:!0}},setup(o){return(e,a)=>{const m=I,p=F,f=N,v=U,x=w,g=V;return n(),i(g,null,{default:t(()=>[r(x,null,{default:t(()=>[s("div",{class:l(["flex flex-col gap-3",{"text-center":e.center}])},[r(p,{class:l({"mx-auto":e.center})},{default:t(()=>[r(m,{src:e.avatar,alt:e.name},null,8,["src","alt"])]),_:1},8,["class"]),s("div",null,[s("div",S,_(e.name),1),s("div",j,_(e.title),1)]),s("div",{class:l(["flex gap-3 text-secondary-foreground",{"mx-auto":e.center}])},[(n(!0),$(b,null,A(e.links,u=>(n(),i(v,{key:u.to,to:u.to},{default:t(()=>[r(f,{name:u.icon},null,8,["name"])]),_:2},1032,["to"]))),128))],2)],2)]),_:1})]),_:1})}}});export{P as default};