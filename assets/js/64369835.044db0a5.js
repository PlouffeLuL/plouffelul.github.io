"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[348],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=p(n),c=r,d=s["".concat(u,".").concat(c)]||s[c]||f[c]||l;return n?a.createElement(d,o(o({ref:e},m),{},{components:n})):a.createElement(d,o({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},839:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1,description:"Required script configuration"},o="Configuration",i={unversionedId:"plouffe_jail/configuration",id:"plouffe_jail/configuration",title:"Configuration",description:"Required script configuration",source:"@site/docs/plouffe_jail/configuration.md",sourceDirName:"plouffe_jail",slug:"/plouffe_jail/configuration",permalink:"/docs/plouffe_jail/configuration",draft:!1,editUrl:"https://github.com/plouffelul/plouffelul.github.io/tree/main/docs/plouffe_jail/configuration.md",tags:[],version:"current",lastUpdatedAt:1666386568,formattedLastUpdatedAt:"Oct 21, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Required script configuration"},sidebar:"plouffe_jail",previous:{title:"Jail",permalink:"/docs/category/jail"},next:{title:"Events",permalink:"/docs/plouffe_jail/events"}},u={},p=[],m={toc:p};function f(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("h1",{id:"dependencies"},"Dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"plouffe_lib")),(0,r.kt)("h1",{id:"github"},"Github"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/PlouffeLuL/plouffe_jail"},"https://github.com/PlouffeLuL/plouffe_jail"))),(0,r.kt)("h1",{id:"convars"},"Convars"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"police_groups"),(0,r.kt)("td",{parentName:"tr",align:null},"set plouffe_jail:police_groups ",'["police", "sherif"]'),(0,r.kt)("td",{parentName:"tr",align:null},"Groups to be detected as 'Police'"),(0,r.kt)("td",{parentName:"tr",align:null},"json string[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_jail_time"),(0,r.kt)("td",{parentName:"tr",align:null},"set plouffe_jail:max_jail_time 120"),(0,r.kt)("td",{parentName:"tr",align:null},"Max jail to be sentenced"),(0,r.kt)("td",{parentName:"tr",align:null},"number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buyable_items"),(0,r.kt)("td",{parentName:"tr",align:null},"set plouffe_jail:buyable_items ",'["phone:5", "weapon_bat:10"]'),(0,r.kt)("td",{parentName:"tr",align:null},"Items buyable with reputation"),(0,r.kt)("td",{parentName:"tr",align:null},"item_name:required_reputation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_com_serv"),(0,r.kt)("td",{parentName:"tr",align:null},"set plouffe_jail:max_com_serv 200"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum comunity services a player is allowed"),(0,r.kt)("td",{parentName:"tr",align:null},"number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"com_serv_punition"),(0,r.kt)("td",{parentName:"tr",align:null},"set plouffe_jail:com_serv_punition 100"),(0,r.kt)("td",{parentName:"tr",align:null},"Jail time to give the player if he gets over the maximum comunity services"),(0,r.kt)("td",{parentName:"tr",align:null},"number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_com_serv_sentence"),(0,r.kt)("td",{parentName:"tr",align:null},"set plouffe_jail:max_com_serv_sentence 200"),(0,r.kt)("td",{parentName:"tr",align:null},"Max comunity services allowed to be sentenced"),(0,r.kt)("td",{parentName:"tr",align:null},"number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"breakout"),(0,r.kt)("td",{parentName:"tr",align:null},"set plouffe_jail:breakout true"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow jail breakout or not"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"breakout_item"),(0,r.kt)("td",{parentName:"tr",align:null},'set plouffe_jail:breakout_item "thermal_charge"'),(0,r.kt)("td",{parentName:"tr",align:null},"Item to be used when doing the breakout"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"breakout_cooldown"),(0,r.kt)("td",{parentName:"tr",align:null},"set plouffe_jail:breakout_cooldown 12"),(0,r.kt)("td",{parentName:"tr",align:null},"Time in hours between all breakouts"),(0,r.kt)("td",{parentName:"tr",align:null},"number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min_breakout_cops"),(0,r.kt)("td",{parentName:"tr",align:null},"set plouffe_jail:min_breakout_cops 2"),(0,r.kt)("td",{parentName:"tr",align:null},"Cops needed to be allowed to do a breakout"),(0,r.kt)("td",{parentName:"tr",align:null},"number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plouffe_doorlock"),(0,r.kt)("td",{parentName:"tr",align:null},"set plouffe_jail:plouffe_doorlock true"),(0,r.kt)("td",{parentName:"tr",align:null},"If you're using my doorlock script"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean")))),(0,r.kt)("h1",{id:"example-config"},"Example config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'set plouffe_jail:police_groups ["police", "sherif"]\nset plouffe_jail:max_jail_time 120\nset plouffe_jail:buyable_items ["phone:5", "weapon_bat:10"]\nset plouffe_jail:max_com_serv 200\nset plouffe_jail:com_serv_punition 100\nset plouffe_jail:max_com_serv_sentence 200\nset plouffe_jail:breakout true\nset plouffe_jail:breakout_item "thermal_charge"\nset plouffe_jail:breakout_cooldown 12\nset plouffe_jail:min_breakout_cops 2\nset plouffe_jail:plouffe_doorlock true\n')),(0,r.kt)("h1",{id:"important"},"Important"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All the convars needs to be set for the script to work")))}f.isMDXComponent=!0}}]);