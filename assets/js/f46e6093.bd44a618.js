"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8397],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var l=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=l.createContext({}),i=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=i(e.components);return l.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=i(a),f=r,d=c["".concat(u,".").concat(f)]||c[f]||m[f]||n;return a?l.createElement(d,p(p({ref:t},s),{},{components:a})):l.createElement(d,p({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,p=new Array(n);p[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var i=2;i<n;i++)p[i]=a[i];return l.createElement.apply(null,p)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5534:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>i});var l=a(7462),r=(a(7294),a(3905));const n={sidebar_position:2,description:"Script exports"},p="Exports",o={unversionedId:"plouffe_jail/exports",id:"plouffe_jail/exports",title:"Exports",description:"Script exports",source:"@site/docs/plouffe_jail/exports.md",sourceDirName:"plouffe_jail",slug:"/plouffe_jail/exports",permalink:"/docs/plouffe_jail/exports",draft:!1,editUrl:"https://github.com/plouffelul/plouffelul.github.io/tree/main/docs/plouffe_jail/exports.md",tags:[],version:"current",lastUpdatedAt:1666386568,formattedLastUpdatedAt:"Oct 21, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Script exports"},sidebar:"plouffe_jail",previous:{title:"Events",permalink:"/docs/plouffe_jail/events"}},u={},i=[],s={toc:i};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"exports"},"Exports"),(0,r.kt)("h1",{id:"client"},"Client"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jail menu",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used to send a player to jail")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"exports.plouffe_jail:SendToJailMenu()\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unjail menu",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used to remove a player from jail")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"exports.plouffe_jail:UnjailMenu()\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Comunity services menu",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used to send a player to comunity services")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"exports.plouffe_jail:ComservMenu()\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PlantBomb",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used to trigger the plant bomb part of the breakout")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"exports.plouffe_jail:PlantBomb()\n")),(0,r.kt)("h1",{id:"server"},"Server"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ReduceSentence",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used to reduce a player jail time")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"exports.plouffe_jail:ReduceSentence(playerId, amount)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"UpSentence",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used to raise a player jail time")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"exports.plouffe_jail:UpSentence(playerId, amount)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used to set a player in jail")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"exports.plouffe_jail:Set(playerId, time)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Remove",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used to remove a player from jail")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'exports.plouffe_jail:Remove("playerId", playerId)\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AddComServ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used to give a player comunity services")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"exports.plouffe_jail:AddComServ(playerId, amount)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RemoveComServ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used to remove all of a player comunity services")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'exports.plouffe_jail:RemoveComServ("playerId", playerId)\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ReduceComserv",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used to reduce a player comunity services")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'exports.plouffe_jail:ReduceComserv("playerId", playerId, amount)\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Breakout",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used to trigger a breakout")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"exports.plouffe_jail:Breakout()\n")))}m.isMDXComponent=!0}}]);