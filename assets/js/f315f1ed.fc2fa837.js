"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5379],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},o="Key Mapper",p={unversionedId:"plouffe-lib/rdr/Key Mapper",id:"plouffe-lib/rdr/Key Mapper",title:"Key Mapper",description:"The key mapper allows to have a similar system to the fivem key mapping and lets you have a wrapper for all your keybinds.",source:"@site/docs/plouffe-lib/rdr/Key Mapper.md",sourceDirName:"plouffe-lib/rdr",slug:"/plouffe-lib/rdr/Key Mapper",permalink:"/docs/plouffe-lib/rdr/Key Mapper",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"EventAwait",permalink:"/docs/plouffe-lib/rdr/Events Manager/exports/EventAwait"},next:{title:"Functions",permalink:"/docs/category/functions"}},l={},s=[],u={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"key-mapper"},"Key Mapper"),(0,a.kt)("p",null,"The key mapper allows to have a similar system to the fivem key mapping and lets you have a wrapper for all your keybinds."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Exports"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Registering a key")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"--- @param commandString string command string \n--- @param description string description of the keybind (if we ever make a ui for those keybinds to allow in game modification we would show this description)\n--- @param inputType string keybord or mouse (Currently not supported i only added it for further implementation by cfx of the key mapper so it would be easier to migrate to it)\n--- @param inputKey string Key input\n--- @return boolean if the keybind has been succesfully registered\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports.plouffe_lib:RegisterKeyMapping(commandString, description, inputType, inputKey, modifier)\n")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Removing a key ")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"--- @param commandString string command string \n--- @param inputKey string Key input\n--- @return boolean if the keybind has been succesfully removed\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports.plouffe_lib:RemoveKeyMapping(commandString, inputKey)\n")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Example usage")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'RegisterCommand("test_keymapper", function(s,a,r)\n  if a[1] then\n    exports.plouffe_lib:RemoveKeyMapping("kek", "G")\n  else\n    exports.plouffe_lib:RegisterKeyMapping("kek", "stupid kek", "keyboard", "G", "SHIFT")\n    exports.plouffe_lib:RegisterKeyMapping("idk", "stupid idk", "keyboard", "F")\n\n    RegisterCommand("+idk", function()\n      print("+idk")\n    end)\n\n    RegisterCommand("-idk", function()\n      print("-idk")\n    end)\n\n    RegisterCommand("+kek", function()\n      print("+kek")\n    end)\n\n    RegisterCommand("-kek", function()\n      print("-kek")\n    end)\n  end\nend)\n')))))}m.isMDXComponent=!0}}]);