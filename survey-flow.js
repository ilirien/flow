const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/widget-entry-PzVD4Q6f.js","assets/widget-entry-Cc2MgTlM.css"])))=>i.map(i=>d[i]);
const y="modulepreload",f=function(e){return"https://assets.subbly.co/"+e},c={},h=function(i,s,u){let l=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),n=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));l=Promise.allSettled(s.map(o=>{if(o=f(o),o in c)return;c[o]=!0;const d=o.endsWith(".css"),b=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${b}`))return;const r=document.createElement("link");if(r.rel=d?"stylesheet":y,d||(r.as="script"),r.crossOrigin="",r.href=o,n&&r.setAttribute("nonce",n),document.head.appendChild(r),d)return new Promise((w,m)=>{r.addEventListener("load",w),r.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${o}`)))})}))}function a(t){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=t,window.dispatchEvent(n),!n.defaultPrevented)throw t}return l.then(t=>{for(const n of t||[])n.status==="rejected"&&a(n.reason);return i().catch(a)})},v="subblySurveyFlow",E=e=>{const i=typeof(e==null?void 0:e.globalName)=="string"&&(e!=null&&e.globalName)?e==null?void 0:e.globalName:v;return{beforeLoad:()=>{},load:async()=>{const{widget:a}=await h(async()=>{const{widget:t}=await import("./assets/widget-entry-PzVD4Q6f.js");return{widget:t}},__vite__mapDeps([0,1]));return a},afterLoaded:a=>{window.dispatchEvent(new CustomEvent("subbly-survey-flow-loaded")),e.init!==!1&&a.initialize(e).then(t=>{Object.assign(window,{[i]:t}),window.dispatchEvent(new CustomEvent("subbly-survey-flow-initialized"))})}}},p=e=>{window.SubblySurveyFlow=e},L=()=>!window.subblyConfig||typeof window.subblyConfig!="object"?null:window.subblyConfig,S=()=>{const e=L();if(!e)throw new Error("SubblySurveyFlow: missing window.subblyConfig. Initialization failed.");const{beforeLoad:i,load:s,afterLoaded:u}=E(e);i(),s().then(l=>{p(l),u(l)})};S();
