"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4180],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||s[m]||o;return n?i.createElement(d,a(a({ref:t},f),{},{components:n})):i.createElement(d,a({ref:t},f))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},a="Notifications",l={unversionedId:"plouffe-lib/interface/ui/notification",id:"plouffe-lib/interface/ui/notification",title:"Notifications",description:"- Importing only Notifications if you didnt import interface before",source:"@site/docs/plouffe-lib/interface/ui/notification.md",sourceDirName:"plouffe-lib/interface/ui",slug:"/plouffe-lib/interface/ui/notification",permalink:"/docs/plouffe-lib/interface/ui/notification",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Progress",permalink:"/docs/plouffe-lib/interface/ui/progress"},next:{title:"Menu",permalink:"/docs/plouffe-lib/interface/ui/menu"}},c={},u=[],f={toc:u};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"notifications"},"Notifications"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Importing only Notifications if you didnt import interface before")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'    local Notifications = exports.plouffe_lib:Get("Interface", "Notifications")\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Show")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"    Notifications.Show({\n        style : string -- succes, error, info\n        time : number -- MS if no persistentId or provided the notification will be removed after <default is 5000>\n        persistentId : string -- Unique identifier \n        header : string -- <optional>\n        message : string -- <optional>\n    })\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Remove")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"    id : string -- unique identifier used initialy\n    Notifications.Remove(id)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Test command if the lib is in debug mode ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    RegisterCommand("notification", function(s,a,r)\n        Notifications.Show({\n            style = a[1],\n            persistentId = a[2];\n            time = 5000,\n            header = a[3] and "Mecano",\n            message = "Vous avez r\xe9par\xe9 le v\xe9hicule"\n        })\n    end)\n\n    RegisterCommand("removenotification", function(s,a,r)\n        Notifications.Remove(a[1])\n    end)\n')))}s.isMDXComponent=!0}}]);