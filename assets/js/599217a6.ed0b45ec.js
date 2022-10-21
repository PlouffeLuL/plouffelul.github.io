"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7779],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(r),c=a,d=m["".concat(u,".").concat(c)]||m[c]||f[c]||i;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3699:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1},l="Configuration",o={unversionedId:"plouffe_lib/configuration",id:"plouffe_lib/configuration",title:"Configuration",description:"- These files needs to be configurated before the script usage",source:"@site/docs/plouffe_lib/configuration.md",sourceDirName:"plouffe_lib",slug:"/plouffe_lib/configuration",permalink:"/docs/plouffe_lib/configuration",draft:!1,editUrl:"https://github.com/plouffelul/plouffelul.github.io/tree/main/docs/plouffe_lib/configuration.md",tags:[],version:"current",lastUpdatedAt:1666386568,formattedLastUpdatedAt:"Oct 21, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"plouffe_lib",previous:{title:"Plouffe lib",permalink:"/docs/category/plouffe-lib"},next:{title:"Fivem",permalink:"/docs/category/fivem"}},u={},p=[],s={toc:p};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration"},"Configuration"),(0,a.kt)("h1",{id:"important"},"Important"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"These files needs to be configurated before the script usage",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"plouffe_lib/configs/client.lua"),(0,a.kt)("li",{parentName:"ul"},"plouffe_lib/configs/server.lua")))),(0,a.kt)("h1",{id:"setr"},"Setr"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Locales "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Sets the locales languages, currently only "fr" and "eng" is supported.'),(0,a.kt)("li",{parentName:"ul"},"You can add your own locales inside of locales folder and then use this file name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'setr plouffe_lib:locales "fr"')))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Framework "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Sets the framework to be used, currently "esx" or "qbcore" is supported. Refer to configs file for more information.'),(0,a.kt)("li",{parentName:"ul"},"You can manually configure it for your own framework or any other. Refer to config files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'setr plouffe_lib:framework "ox"')))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Inventory Framework "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Sets the inventory to be used, currently only "ox", "esx" or "qbcore". Refer to configs file for more information.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'setr plouffe_lib:inventoryFramework "ox"')))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Framework Logs "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"functions la inventory.ReduceDurability are only compatible with ox_inventory and needs to be configure manually. Setting this convar to true will disable those logs."),(0,a.kt)("li",{parentName:"ul"},"You can manually configure it for your own inventory or any other. Refer to config files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'setr plouffe_lib:disableFrameWorkLogs "true"')))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Warnings"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Events manager warning, this is mostly used when registering game events for rdr."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'setr plouffe_lib:warnings "true"')))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cache timer"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The cache timer update, default is 10000 (10 seconds)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setr plouffe_lib:cahe_update 5000")),(0,a.kt)("li",{parentName:"ul"},"This would set the timer to 5 seconds"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Weather "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The lib comes with a decently optimised weather and time system"),(0,a.kt)("li",{parentName:"ul"},"To activate it ",(0,a.kt)("inlineCode",{parentName:"li"},'setr plouffe_lib:use_weater "true"')))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Debuging "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This activates the debuging functions of the script, mostly used for the zone manager."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'setr plouffe_lib:debug "true"')," "),(0,a.kt)("li",{parentName:"ul"},"You will be able to use this commands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zone:draw"))))))}f.isMDXComponent=!0}}]);