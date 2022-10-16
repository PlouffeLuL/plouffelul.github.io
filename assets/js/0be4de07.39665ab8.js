"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),y=a,d=c["".concat(p,".").concat(y)]||c[y]||m[y]||l;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:1},i="Register",o={unversionedId:"plouffe_lib/zones/register",id:"plouffe_lib/zones/register",title:"Register",description:"- Params",source:"@site/docs/plouffe_lib/zones/register.md",sourceDirName:"plouffe_lib/zones",slug:"/plouffe_lib/zones/register",permalink:"/docs/plouffe_lib/zones/register",draft:!1,editUrl:"https://github.com/plouffelul/plouffelul.github.io/tree/main/docs/plouffe_lib/zones/register.md",tags:[],version:"current",lastUpdatedAt:1665964096,formattedLastUpdatedAt:"Oct 16, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"plouffe_lib",previous:{title:"Zones",permalink:"/docs/category/zones"},next:{title:"AreCoordsInZone",permalink:"/docs/plouffe_lib/zones/AreCoordsInZone"}},p={},u=[],s={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"register"},"Register"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local registered, reason = exports.plouffe_lib:Register(data)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Params ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"name",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Type: string"),(0,a.kt)("li",{parentName:"ul"},"Unique identifier of a created zone"))),(0,a.kt)("li",{parentName:"ul"},"label",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Type: string"),(0,a.kt)("li",{parentName:"ul"},"Will be formated to the key used in the keymap if it isnt nil"),(0,a.kt)("li",{parentName:"ul"},"Is not of any use of the 'isZone' param is not true"))),(0,a.kt)("li",{parentName:"ul"},"isZone",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Type: boolean"),(0,a.kt)("li",{parentName:"ul"},"If you want to use the ui or use the zonemap event needs to be true"))),(0,a.kt)("li",{parentName:"ul"},"distance ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Type: number"),(0,a.kt)("li",{parentName:"ul"},"If you're coords arent a table this will be used to identify the distance from the center"))),(0,a.kt)("li",{parentName:"ul"},"zMax",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Type: number"),(0,a.kt)("li",{parentName:"ul"},"Absolute Z maximum"))),(0,a.kt)("li",{parentName:"ul"},"zMin ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Type: number"),(0,a.kt)("li",{parentName:"ul"},"Absolute Z minimum   "))),(0,a.kt)("li",{parentName:"ul"},"coords ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Type: table with multiples vector3 or table with x,y,z, vector3, table with x,y,z"),(0,a.kt)("li",{parentName:"ul"},"Examples: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"coords = vector3(0,0,0)"),(0,a.kt)("li",{parentName:"ul"},"coords = {x = 0.0, y = 0.0, z = 0.0}"),(0,a.kt)("li",{parentName:"ul"},"coords = {\n{x = 0.0, y = 0.0, z = 0.0},\n{x = 0.0, y = 0.0, z = 0.0},\n{x = 0.0, y = 0.0, z = 0.0}\n}"),(0,a.kt)("li",{parentName:"ul"},"coords = {\nvector3(0,0,0),\nvector3(0,0,0),\nvector3(0,0,0),\nvector3(0,0,0),\nvector3(0,0,0)\n}"))))),(0,a.kt)("li",{parentName:"ul"},"params",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Type: table"),(0,a.kt)("li",{parentName:"ul"},"this data will be send in the event when triggered"))),(0,a.kt)("li",{parentName:"ul"},"groups",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Type: table"),(0,a.kt)("li",{parentName:"ul"},"Examples: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"groups = {'police'}"),(0,a.kt)("li",{parentName:"ul"},"groups = {police = true}"),(0,a.kt)("li",{parentName:"ul"},"groups = {police = {1,2,3,4}}"),(0,a.kt)("li",{parentName:"ul"},"groups = {police = {","['1']"," = true}"))))),(0,a.kt)("li",{parentName:"ul"},"vehicle",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Type: boolean"),(0,a.kt)("li",{parentName:"ul"},"true = only accesible in a vehicle"))),(0,a.kt)("li",{parentName:"ul"},"keyMap",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Type: table"),(0,a.kt)("li",{parentName:"ul"},"Examples = {\nkey = 'E',\nevent ='some_event'\n}"))),(0,a.kt)("li",{parentName:"ul"},"zoneMap",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Type: table"),(0,a.kt)("li",{parentName:"ul"},"Examples = {\ninEvent = 'inZone' ,\noutEvent = 'exitZone'\n}"))),(0,a.kt)("li",{parentName:"ul"},"ped",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Type: table"),(0,a.kt)("li",{parentName:"ul"},"Examples = {\nmodel = type: string,\ncoords = type: vector3 or table with xyz,\nheading = type: number\n}")))))),(0,a.kt)("h1",{id:"raw-examples"},"Raw examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    local data = {\n        name = "(optional) type: string, if you\'re not using it you wont be able to acces this zone with exports as its used as main identifier and it will be overriden if you restart your resource this SHOULD REALLY BE USED",\n        label = "(optional) type: string, will be formated to the key used in the keymap if it isnt nil",\n        isZone = "(optional) type: boolean if you want to use the ui or use the zonemap event needs to be true",\n        distance = "(optional) type: number",\n        zMax = "(optional) type: number",\n        zMin = "(optional) type: number",\n        coords = "type: table with multiples vector3 or table with x,y,z, vector3, table with x,y,z",\n        params = "(optional) type: table ex: {kekers = true}, this data will be send in the event when triggered",\n        groups = "(optional) type: table ex: {\'police\'}, {police = true}, {police = {1,2,3,4}}, police = {[\'1\'] = true}, uses groups identity and subgroups. Subgroups are unlimited and can be used with any dataType. They are subject to what you set your group has with the setter.",\n        vehicle = "(optional) type: boolean ex: true = only accesible in a vehicle ",\n        keyMap = "(optional) type: table, ex: {key = type: string ex: \'E\', event = type: string ex: \'some_event\'}",\n        zoneMap = "(optional) type: table, ex: {inEvent = type: string ex: \'inZone_hospital\' , outEvent = type: string ex: \'extiZone_hospital\'}",\n        ped = "(optional) type: table, ex: {model = type: string, coords = type: vector3 or table with xyz, heading = type: number}"\n    }\n\n    ---@return registered boolean If the zone has been properly registered\n    ---@return reason string the reason why the zone hasnt been registered\n    local registered, reason = exports.plouffe_lib:Register(data)\n')))}m.isMDXComponent=!0}}]);