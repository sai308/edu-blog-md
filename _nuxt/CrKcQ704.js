import{_ as n}from"./B2mPLv5M.js";import{u as s}from"./Cj67F-Jr.js";import{d as i,J as c,c as m,H as u,w as d,g as l,f,t as p,E as g}from"./B9UYqjP7.js";const k={class:"font-semibold"},h=i({__name:"ReadMore",props:{title:{},to:{},target:{},icon:{default:"lucide:bookmark"}},setup(e){const a=c(()=>{if(e.title)return e.title;try{return s(e.to).map(t=>t.title).join(" > ")}catch{return e.to}});return(t,o)=>{const r=n;return m(),u(r,{to:t.to,target:t.target,icon:t.icon},{default:d(()=>[o[0]||(o[0]=l(" Read more at ")),f("span",k,p(g(a)),1)]),_:1},8,["to","target","icon"])}}});export{h as default};