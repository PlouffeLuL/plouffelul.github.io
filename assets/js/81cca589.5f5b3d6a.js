"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4},i="Entity Creation",l={unversionedId:"plouffe_lib/functions/spawner",id:"plouffe_lib/functions/spawner",title:"Entity Creation",description:"- Importing Utils",source:"@site/docs/plouffe_lib/functions/spawner.md",sourceDirName:"plouffe_lib/functions",slug:"/plouffe_lib/functions/spawner",permalink:"/docs/plouffe_lib/functions/spawner",draft:!1,editUrl:"https://github.com/plouffelul/plouffelul.github.io/tree/main/docs/plouffe_lib/functions/spawner.md",tags:[],version:"current",lastUpdatedAt:1665262541,formattedLastUpdatedAt:"Oct 8, 2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"plouffe_lib",previous:{title:"Interface",permalink:"/docs/plouffe_lib/functions/interface"},next:{title:"Streaming",permalink:"/docs/plouffe_lib/functions/streaming"}},p={},s=[],m={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"entity-creation"},"Entity Creation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Importing Utils")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'  local Utils = exports.plouffe_lib:Get("Utils")\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Spawning a ped"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Utils:SpawnPed(model,coords,heading,networked,mission,ignoreRemoveModel)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Params",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"---@param model string ped model\n---@param coords vector3 spawn coords\n---@param heading number spawn heading\n---@param networked boolean IsNetworked\n---@param mission boolean IsMission\n---@param ignoreRemoveModel boolean to remove the model after one second\n---@return entityId ped that was created\n"))))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Spawning a vehicle"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Utils:SpawnVehicle(model,coords,heading,networked,mission,giveKeys,ignoreRemoveModel)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Params",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"---@param model text ped model\n---@param coords vector3 spawn coords\n---@param heading number spawn heading\n---@param networked boolean IsNetworked\n---@param mission boolean IsMission\n---@param giveKeys boolean give car keys\n---@param ignoreRemoveModel boolean to remove the model after one second\n---@return entityId vehicle that was created\n"))))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Spawning an object"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Utils:CreateProp(model,coords,heading,networked,mission,ignoreRemoveModel)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Params",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"---@param model text ped model\n---@param coords vector3 spawn coords\n---@param heading number spawn heading\n---@param networked boolean IsNetworked\n---@param mission boolean IsMission\n---@param ignoreRemoveModel boolean to remove the model after one second\n---@return entityId ped that was created\n")))))))))}c.isMDXComponent=!0}}]);