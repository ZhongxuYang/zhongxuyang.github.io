import{A as f}from"../app.2824fd48.js";function p(d={}){const{immediate:l=!1,onNeedRefresh:v,onOfflineReady:t,onRegistered:r,onRegisteredSW:o,onRegisterError:s}=d;let i,n;const c=async(a=!0)=>{await n};async function g(){if("serviceWorker"in navigator){const{Workbox:a}=await f(()=>import("./workbox-window.prod.es5.295a6886.js"),[]);i=new a("/blog/sw.js",{scope:"/blog/",type:"classic"}),i.addEventListener("activated",e=>{(e.isUpdate||e.isExternal)&&window.location.reload()}),i.addEventListener("installed",e=>{e.isUpdate||t==null||t()}),i.register({immediate:l}).then(e=>{o?o("/blog/sw.js",e):r==null||r(e)}).catch(e=>{s==null||s(e)})}}return n=g(),c}export{p as registerSW};