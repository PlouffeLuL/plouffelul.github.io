"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6223],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>g});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},i=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),f=s(t),g=o,m=f["".concat(l,".").concat(g)]||f[g]||c[g]||p;return t?n.createElement(m,u(u({ref:r},i),{},{components:t})):n.createElement(m,u({ref:r},i))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var p=t.length,u=new Array(p);u[0]=f;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var s=2;s<p;s++)u[s]=t[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9504:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>u,default:()=>c,frontMatter:()=>p,metadata:()=>a,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const p={sidebar_position:1},u="Groups Setter",a={unversionedId:"plouffe-lib/groups/server/setgroup",id:"plouffe-lib/groups/server/setgroup",title:"Groups Setter",description:"- Importing Groups",source:"@site/docs/plouffe-lib/groups/server/setgroup.md",sourceDirName:"plouffe-lib/groups/server",slug:"/plouffe-lib/groups/server/setgroup",permalink:"/docs/plouffe-lib/groups/server/setgroup",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Get group",permalink:"/docs/plouffe-lib/groups/server/getgroup"},next:{title:"Get player group",permalink:"/docs/plouffe-lib/groups/server/getplayergroup"}},l={},s=[],i={toc:s};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"groups-setter"},"Groups Setter"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Importing Groups")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'  local Groups = exports.plouffe_lib:Get("Groups")\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Setting a player group")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"  playerId : number\n  groupType : string\n  group : string\n  subgroup : string or number\n    \n  Groups:Set(playerId, groupType, group, subgroup)\n")))}c.isMDXComponent=!0}}]);