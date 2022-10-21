"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=u(n),s=r,m=g["".concat(p,".").concat(s)]||g[s]||f[s]||l;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1,description:"Required script configuration"},o="Configuration",i={unversionedId:"plouffe_vangelico/configuration",id:"plouffe_vangelico/configuration",title:"Configuration",description:"Required script configuration",source:"@site/docs/plouffe_vangelico/configuration.md",sourceDirName:"plouffe_vangelico",slug:"/plouffe_vangelico/configuration",permalink:"/docs/plouffe_vangelico/configuration",draft:!1,editUrl:"https://github.com/plouffelul/plouffelul.github.io/tree/main/docs/plouffe_vangelico/configuration.md",tags:[],version:"current",lastUpdatedAt:1666386568,formattedLastUpdatedAt:"Oct 21, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Required script configuration"},sidebar:"plouffe_vangelico",previous:{title:"Vangelico Heist",permalink:"/docs/category/vangelico-heist"},next:{title:"Exports",permalink:"/docs/plouffe_vangelico/exports"}},p={},u=[],c={toc:u};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("h1",{id:"dependencies"},"Dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"plouffe_lib"),(0,r.kt)("li",{parentName:"ul"},"plouffe_doorlock")),(0,r.kt)("h1",{id:"github"},"Github"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/PlouffeLuL/plouffe_vangelico"},"https://github.com/PlouffeLuL/plouffe_vangelico"))),(0,r.kt)("h1",{id:"convars"},"Convars"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plouffe_vangelico:use_guards"),(0,r.kt)("td",{parentName:"tr",align:null},'set plouffe_vangelico:use_guards "true"'),(0,r.kt)("td",{parentName:"tr",align:null},"If the script should create the guards inside or not"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plouffe_vangelico:hack_loot"),(0,r.kt)("td",{parentName:"tr",align:null},'set plouffe_vangelico:hack_loot "card_fleeca"'),(0,r.kt)("td",{parentName:"tr",align:null},"The item to be given the player once the hack is finished (set amount to 0 if you dont want it)"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plouffe_vangelico:hack_loot_amount"),(0,r.kt)("td",{parentName:"tr",align:null},'set plouffe_vangelico:hack_loot_amount "1"'),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of the set item to be given the player once the hack is finished (set to 0 if you dont want it)"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plouffe_vangelico:grinder_item_name"),(0,r.kt)("td",{parentName:"tr",align:null},'set plouffe_vangelico:grinder_item_name "grinder"'),(0,r.kt)("td",{parentName:"tr",align:null},"The nescesary item to start the grinder minigame (will also look for the disc name item)"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plouffe_vangelico:grinder_disc_name"),(0,r.kt)("td",{parentName:"tr",align:null},'set plouffe_vangelico:grinder_disc_name "grinder_disc"'),(0,r.kt)("td",{parentName:"tr",align:null},"The item to be consumed when the player fails the grinder minigame"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plouffe_vangelico:loots"),(0,r.kt)("td",{parentName:"tr",align:null},"setr plouffe_vangelico:loots ",'["diamond"]'),(0,r.kt)("td",{parentName:"tr",align:null},"The possibles items to find when looting"),(0,r.kt)("td",{parentName:"tr",align:null},"json string[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plouffe_vangelico:min_loots"),(0,r.kt)("td",{parentName:"tr",align:null},'set plouffe_vangelico:min_loots "1"'),(0,r.kt)("td",{parentName:"tr",align:null},"The minimum amount of possible items to find"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plouffe_vangelico:max_loots"),(0,r.kt)("td",{parentName:"tr",align:null},'set plouffe_vangelico:max_loots "5"'),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum amount of possible items to find"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plouffe_vangelico:police_groups"),(0,r.kt)("td",{parentName:"tr",align:null},"set plouffe_vangelico:police_groups ",'["police", "sherif"]'),(0,r.kt)("td",{parentName:"tr",align:null},"Groups to be detected as 'Police'"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plouffe_vangelico:min_cops"),(0,r.kt)("td",{parentName:"tr",align:null},'set plouffe_vangelico:min_cops "5"'),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum player in 'polices' groups required to start the robbery"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plouffe_vangelico:rob_interval"),(0,r.kt)("td",{parentName:"tr",align:null},'set plouffe_vangelico:rob_interval "1"'),(0,r.kt)("td",{parentName:"tr",align:null},"Time in HOURS between robberies"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plouffe_vangelico:allowed_time_to_rob"),(0,r.kt)("td",{parentName:"tr",align:null},'set plouffe_vangelico:allowed_time_to_rob "1"'),(0,r.kt)("td",{parentName:"tr",align:null},"Allowed time in HOURS to finish looting"),(0,r.kt)("td",{parentName:"tr",align:null},"string")))),(0,r.kt)("h1",{id:"example-config"},"Example config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'set plouffe_vangelico:use_guards "true"\nset plouffe_vangelico:hack_loot "card_fleeca"\nset plouffe_vangelico:hack_loot_amount "1"\nset plouffe_vangelico:grinder_item_name "grinder"\nset plouffe_vangelico:grinder_disc_name "grinder_disc"\nset plouffe_vangelico:loots [\n    "diamond",\n    "diamond_ring",\n    "gold_chain",\n    "gold_ring",\n    "gold_watch",\n    "silver_watch"\n]\nset plouffe_vangelico:min_loots "1"\nset plouffe_vangelico:max_loots "5"\nset plouffe_vangelico:police_groups ["police", "sherif"]\nset plouffe_vangelico:min_cops "5"\nset plouffe_vangelico:rob_interval "1" # Hours\nset plouffe_vangelico:allowed_time_to_rob "1" # Hours\n')),(0,r.kt)("h1",{id:"important"},"Important"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All the convars needs to be set for the script to work")))}f.isMDXComponent=!0}}]);