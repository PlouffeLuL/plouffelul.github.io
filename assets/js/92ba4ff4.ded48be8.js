"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7342],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,k=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1598:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:6},i="Lockpick",l={unversionedId:"plouffe-lib/interface/games/lockpick",id:"plouffe-lib/interface/games/lockpick",title:"Lockpick",description:"- Importing only moving lockpick if you didnt import interface before",source:"@site/docs/plouffe-lib/interface/games/lockpick.md",sourceDirName:"plouffe-lib/interface/games",slug:"/plouffe-lib/interface/games/lockpick",permalink:"/docs/plouffe-lib/interface/games/lockpick",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"Moving squares",permalink:"/docs/plouffe-lib/interface/games/movingsquares"},next:{title:"Text ui",permalink:"/docs/plouffe-lib/interface/ui/textui"}},c={},p=[],u={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lockpick"},"Lockpick"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Importing only moving lockpick if you didnt import interface before")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'    local Lockpick = exports.plouffe_lib:Get("Interface", "Lockpick")\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example usage")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"    local win = Lockpick.New(data)\n    print(win)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data structure ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"    amount : number -- total amount of checkes\n    range : number -- size of the skill check range\n    maxKeys : number -- 1 to 9, the keys to be used on keyboard\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Test command if the lib is in debug mode ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"testLockpick\n")))}s.isMDXComponent=!0}}]);