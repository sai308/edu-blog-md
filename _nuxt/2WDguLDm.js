import l from"./DtjM3zBB.js";import{d as u,Q as c,c as o,e as n,f as t,t as s,E as m,h as a,i as p,w as f,g as d,a4 as _}from"./C19zmeCd.js";const h={class:"[&:not(:first-child)]:mt-4 [&:not(:first-child)]:pt-4"},x={class:"mb-2"},g={class:"flex items-center gap-2"},y={class:"text-md font-bold text-primary"},V={key:0,class:"font-mono text-sm text-muted-foreground"},v={class:"ml-auto font-mono text-sm text-muted-foreground"},C={key:0,class:"text-muted-foreground"},k={class:"text-sm text-muted-foreground"},b=u({__name:"Field",props:{name:{},type:{},required:{type:Boolean},description:{},defaultValue:{}},setup(B){const{fieldRequiredText:r}=c().value.main;return(e,N)=>{const i=l;return o(),n("div",h,[t("div",x,[t("div",g,[t("span",y,s(e.name),1),e.required?(o(),n("span",V,s(m(r)),1)):a("",!0),t("span",v,s(e.type),1)]),e.defaultValue?(o(),n("div",C,[p(i,null,{default:f(()=>[d(s(e.defaultValue),1)]),_:1})])):a("",!0)]),t("span",k,[_(e.$slots,"default",{unwrap:"p"}),d(" "+s(e.description),1)])])}}});export{b as default};