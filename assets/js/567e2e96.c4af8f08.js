"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},i="IsInZone",l={unversionedId:"plouffe_lib/zones/isInZone",id:"plouffe_lib/zones/isInZone",title:"IsInZone",description:"- Params",source:"@site/docs/plouffe_lib/zones/isInZone.md",sourceDirName:"plouffe_lib/zones",slug:"/plouffe_lib/zones/isInZone",permalink:"/docs/plouffe_lib/zones/isInZone",draft:!1,editUrl:"https://github.com/plouffelul/plouffelul.github.io/tree/main/docs/plouffe_lib/zones/isInZone.md",tags:[],version:"current",lastUpdatedAt:1665262541,formattedLastUpdatedAt:"Oct 8, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"plouffe_lib",previous:{title:"Usage",permalink:"/docs/plouffe_lib/zones/usage"},next:{title:"DestroyZone",permalink:"/docs/plouffe_lib/zones/DestroyZone"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"isinzone"},"IsInZone"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local isInZone = exports.plouffe_lib:IsInZone(zoneName)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Params ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"zoneName : string \n"))),(0,o.kt)("li",{parentName:"ul"},"This can be used when a zone is created but the ",(0,o.kt)("inlineCode",{parentName:"li"},"isZone")," param is not true.")))}u.isMDXComponent=!0}}]);