"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5087],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),u=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?o.createElement(m,i(i({ref:t},s),{},{components:r})):o.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8261:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:2,description:"Data structure"},i="Structure",l={unversionedId:"plouffe_doorlock/structure",id:"plouffe_doorlock/structure",title:"Structure",description:"Data structure",source:"@site/docs/plouffe_doorlock/structure.md",sourceDirName:"plouffe_doorlock",slug:"/plouffe_doorlock/structure",permalink:"/docs/plouffe_doorlock/structure",draft:!1,editUrl:"https://github.com/plouffelul/plouffelul.github.io/tree/main/docs/plouffe_doorlock/structure.md",tags:[],version:"current",lastUpdatedAt:1665964096,formattedLastUpdatedAt:"Oct 16, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Data structure"},sidebar:"plouffe_doorlock",previous:{title:"Configuration",permalink:"/docs/plouffe_doorlock/configuration"},next:{title:"Exports",permalink:"/docs/plouffe_doorlock/exports"}},c={},u=[],s={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"structure"},"Structure"),(0,n.kt)("h1",{id:"regular-door-example"},"Regular door Example"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add an object including this data structure to the ",(0,n.kt)("inlineCode",{parentName:"li"},"Doors.DoorList")," table in serverConfig.lua."),(0,n.kt)("li",{parentName:"ul"},"You can also use ",(0,n.kt)("inlineCode",{parentName:"li"},"exports.plouffe_doorlock:RegisterDoor()")," ",(0,n.kt)("strong",{parentName:"li"},"Server side only"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"  davispd_entry_front = { -- The index/name needs to be unique \n        lock = true,\n    interactCoords = { -- List of coords from where you can interact with the door\n            {coords = vector3(380.7673034668, -1593.4407958984, 30.051382064819), maxDst = 2.0}\n        },\n        doors = { -- List of doors, to handle\n            {model = 1670919150, coords = vector3(379.78421020508, -1592.6057128906, 30.201282501221)},\n            {model = 618295057, coords = vector3(381.77600097656, -1594.2769775391, 30.201282501221)}\n        },\n    access = {\n          groups = {\n              police = {rankMin = 0, rankMax = 7}, -- Police in server rank 0 to rank 7 \n              policeoff = {rankMin = 0, rankMax = 7}, -- Police off service rank 0 to rank 7 \n        police = {rankSpecific = 7} -- Can be set to a specific rank only\n            }\n    }\n  }\n")),(0,n.kt)("h1",{id:"automated-door-example-do-not-use-if-you-dont-know-100-what-you-are-doing"},"Automated door Example (Do not use if you dont know 100% what you are doing)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add an object including this data structure to the ",(0,n.kt)("inlineCode",{parentName:"li"},"Doors.Automated")," table in serverConfig.lua."),(0,n.kt)("li",{parentName:"ul"},"You can also use ",(0,n.kt)("inlineCode",{parentName:"li"},"exports.plouffe_doorlock:RegisterDoor()")," ",(0,n.kt)("strong",{parentName:"li"},"Server side only"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"  fleeca_vinewood_vault = { -- The index/name needs to be unique \n        model = 2121050683, -- Entity model\n        heading = {\n      close = 249.86596679688, -- Closed heading\n      open = 160.0, -- Opened heading\n      modifier = -0.01 -- Opening speed\n    },\n        coords = vector3(313, -282, 55) -- Door coords\n    }\n")))}d.isMDXComponent=!0}}]);