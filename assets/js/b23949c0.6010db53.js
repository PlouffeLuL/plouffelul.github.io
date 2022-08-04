"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=i,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1},o="Text ui",l={unversionedId:"plouffe-lib/interface/ui/textui",id:"plouffe-lib/interface/ui/textui",title:"Text ui",description:"- Importing only TextUi if you didnt import interface before",source:"@site/docs/plouffe-lib/interface/ui/textui.md",sourceDirName:"plouffe-lib/interface/ui",slug:"/plouffe-lib/interface/ui/textui",permalink:"/docs/plouffe-lib/interface/ui/textui",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Moving squares",permalink:"/docs/plouffe-lib/interface/games/movingsquares"},next:{title:"Progress",permalink:"/docs/plouffe-lib/interface/ui/progress"}},u={},c=[],s={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"text-ui"},"Text ui"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Importing only TextUi if you didnt import interface before")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'    local TextUi = exports.plouffe_lib:Get("Interface", "TextUi")\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Show")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"    TextUi.Show({\n        message : string -- ... your message\n        id : string -- unique identifier\n        color : string -- needs to be css compatible\n    })\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hide")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"    TextUi.Hide({\n        id : string -- unique identifier\n    })\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Change")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"    TextUi.Change({\n        message : string -- ... your message\n        id : string -- unique identifier\n        color : string -- needs to be css compatible\n    })\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Test command if the lib is in debug mode ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"showTextUi\nhideTextUi\nchangeTextUi\n")))}p.isMDXComponent=!0}}]);