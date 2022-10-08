"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),f=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=f(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=f(n),m=a,d=s["".concat(l,".").concat(m)]||s[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var f=2;f<o;f++)i[f]=n[f];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>f});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},i="Weapon",p={unversionedId:"plouffe_lib/fivem/Events Manager/weapon",id:"plouffe_lib/fivem/Events Manager/weapon",title:"Weapon",description:"- Event name",source:"@site/docs/plouffe_lib/fivem/Events Manager/weapon.md",sourceDirName:"plouffe_lib/fivem/Events Manager",slug:"/plouffe_lib/fivem/Events Manager/weapon",permalink:"/docs/plouffe_lib/fivem/Events Manager/weapon",draft:!1,editUrl:"https://github.com/plouffelul/plouffelul.github.io/tree/main/docs/plouffe_lib/fivem/Events Manager/weapon.md",tags:[],version:"current",lastUpdatedAt:1665262541,formattedLastUpdatedAt:"Oct 8, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"plouffe_lib",previous:{title:"Vehicle",permalink:"/docs/plouffe_lib/fivem/Events Manager/vehicle"},next:{title:"Rdr",permalink:"/docs/category/rdr"}},l={},f=[],c={toc:f};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"weapon"},"Weapon"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Event name"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"plouffe_lib:hasWeapon\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Args"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"1 : true if the player equiped a weapon or false if player is disarmed\n2 : currently equiped weapon hash\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Example"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'local weaponEquiped = false\n\nAddEventHandler("plouffe_lib:hasWeapon", function(hasWeapon, weaponHash)\n  weaponEquiped = hasWeapon\n\n  CreateThread(function()\n    while weaponEquiped do\n      Wait(1000)\n      print(("Player is holding weapon hash: %s"):format(weaponHash))\n    end\n  end)\nend)\n')))))}u.isMDXComponent=!0}}]);