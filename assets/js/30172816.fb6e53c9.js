"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4695],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>g});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=i(t),g=o,m=f["".concat(l,".").concat(g)]||f[g]||c[g]||p;return t?n.createElement(m,a(a({ref:r},s),{},{components:t})):n.createElement(m,a({ref:r},s))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var p=t.length,a=new Array(p);a[0]=f;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var i=2;i<p;i++)a[i]=t[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7712:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>p,metadata:()=>u,toc:()=>i});var n=t(7462),o=(t(7294),t(3905));const p={sidebar_position:2},a="Has group",u={unversionedId:"plouffe-lib/groups/client/hasgroup",id:"plouffe-lib/groups/client/hasgroup",title:"Has group",description:"- Importing Groups",source:"@site/docs/plouffe-lib/groups/client/hasgroup.md",sourceDirName:"plouffe-lib/groups/client",slug:"/plouffe-lib/groups/client/hasgroup",permalink:"/docs/plouffe-lib/groups/client/hasgroup",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Groups Setter",permalink:"/docs/plouffe-lib/groups/client/setgroup"},next:{title:"Get group",permalink:"/docs/plouffe-lib/groups/server/getgroup"}},l={},i=[],s={toc:i};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"has-group"},"Has group"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Importing Groups")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'    local Groups = exports.plouffe_lib:Get("Groups")\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Checking if a player has a group client side")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"    groupType : string\n    group : string\n    subgroup : any -- Needs to match the setter\n    \n    Groups.HasGroup(groupType, group, subgroup)\n")))}c.isMDXComponent=!0}}]);