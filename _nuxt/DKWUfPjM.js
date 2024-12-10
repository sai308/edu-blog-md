import{d as o,c as s,H as m,ah as r}from"./BaMFaaxO.js";import{u}from"./CIyEkwec.js";const d=o({__name:"PmRun",props:{inStack:{type:Boolean,default:!1},script:{},sync:{default:"_pm"},noSync:{type:Boolean}},setup(n){const e=`
::code-group{${n.inStack?"in-stack":""} ${n.noSync?"":`sync="${n.sync}"`}}
${u().packageManagers.value.map(a=>{const c=`${a.command}${a.run}${n.script}`;return`\`\`\`bash [${a.name}]
${c}
\`\`\`
`}).join(`
`)}
::
`;return(a,c)=>{const t=r;return s(),m(t,{value:e,class:"[&:not(:first-child)]:mt-5"})}}});export{d as default};
