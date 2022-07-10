"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1918],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>b});var l=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=l.createContext({}),p=function(e){var a=l.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},u=function(e){var a=p(e.components);return l.createElement(o.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},s=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(t),b=n,k=s["".concat(o,".").concat(b)]||s[b]||m[b]||r;return t?l.createElement(k,c(c({ref:a},u),{},{components:t})):l.createElement(k,c({ref:a},u))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,c=new Array(r);c[0]=s;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<r;p++)c[p]=t[p];return l.createElement.apply(null,c)}return l.createElement.apply(null,t)}s.displayName="MDXCreateElement"},694:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var l=t(7462),n=(t(7294),t(3905));const r={sidebar_position:2},c="Client callback",i={unversionedId:"plouffe-lib/callbacks/client callback",id:"plouffe-lib/callbacks/client callback",title:"Client callback",description:"- Params",source:"@site/docs/plouffe-lib/callbacks/client callback.md",sourceDirName:"plouffe-lib/callbacks",slug:"/plouffe-lib/callbacks/client callback",permalink:"/docs/plouffe-lib/callbacks/client callback",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Server callback",permalink:"/docs/plouffe-lib/callbacks/server callback"},next:{title:"Uniques",permalink:"/docs/plouffe-lib/uniques"}},o={},p=[],u={toc:p};function m(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,l.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"client-callback"},"Client callback"),(0,n.kt)("h1",{id:"importing-callbacks"},"Importing callbacks"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'local Callback = exports.plouffe_lib:Get("Callback")\n')),(0,n.kt)("h1",{id:"server"},"Server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"Callback:ClientCallback(playerId,name,timeout,cb,...)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Params ",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"---@param playerId number player id to callback\n---@param name string the callback name\n---@param timeout number the maximum time for the callback to be accomplished\n---@param cb function the function callback\n---@param ... any the params to be sent to the callback\n---@return any void\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Example",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'  Callback:ClientCallback(playerId, "hello:world", 30, (data)\n      print(data)\n  end, "foo")\n')))))),(0,n.kt)("h1",{id:"client"},"Client"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"Callback:RegisterClientCallback(name,cb)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Params ",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"---@param playerId number player id to callback\n---@param name string the callback name\n---@param timeout number the maximum time for the callback to be accomplished\n---@param cb function the function callback\n---@param ... any the params to be sent to the callback\n---@return any void\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Example",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'  Callback:RegisterClientCallback("hello:world", function(cb,data)\n      print(data)\n      cb("bar")\n  end)\n')))))))}m.isMDXComponent=!0}}]);