import{e as _,M as h,N as b,u,o as m,y as p,S as x,q as t,A as r,H as g,z as a,L as k,a1 as v,O as w}from"./entry-ccb149fb.mjs";import{J as y,a as V,_ as c,b as i,c as C}from"./Label-e9054b60.mjs";const $=["value"],A={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{type:String,default:null}},emits:["update:checked"],setup(d,{emit:e}){const n=d,l=_({get(){return n.checked},set(s){e("update:checked",s)}});return(s,o)=>h((m(),p("input",{"onUpdate:modelValue":o[0]||(o[0]=f=>x(l)?l.value=f:null),type:"checkbox",value:d.value,class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,8,$)),[[b,u(l)]])}},B={class:"min-h-screen flex flex-col"},N=a("div",{class:"text-2xl font-bold w-full text-center"}," \u5F15\u8DEF\u4EBA\u767B\u5165 ",-1),S=["onSubmit"],U={class:"mt-4"},q={class:"block mt-4"},J={class:"flex items-center"},M=a("span",{class:"ml-2 text-sm text-gray-600"},"\u8A18\u4F4F\u6211",-1),z={class:"flex items-center justify-end mt-4"},H=w(" \u767B\u5165 "),D={__name:"login",setup(d){const e={email:"",password:"",remember:!1,processing:!1},n=()=>{};return(l,s)=>(m(),p("div",B,[t(u(g)),t(y,null,{logo:r(()=>[t(V)]),default:r(()=>[N,a("form",{onSubmit:v(n,["prevent"])},[a("div",null,[t(c,{for:"email",value:"\u96FB\u5B50\u90F5\u4EF6"}),t(i,{id:"email",modelValue:e.email,"onUpdate:modelValue":s[0]||(s[0]=o=>e.email=o),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"])]),a("div",U,[t(c,{for:"password",value:"\u5BC6\u78BC"}),t(i,{id:"password",modelValue:e.password,"onUpdate:modelValue":s[1]||(s[1]=o=>e.password=o),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"])]),a("div",q,[a("label",J,[t(A,{checked:e.remember,"onUpdate:checked":s[2]||(s[2]=o=>e.remember=o),name:"remember"},null,8,["checked"]),M])]),a("div",z,[t(C,{class:k(["ml-4",{"opacity-25":e.processing}]),disabled:e.processing},{default:r(()=>[H]),_:1},8,["class","disabled"])])],40,S)]),_:1})]))}};export{D as default};
