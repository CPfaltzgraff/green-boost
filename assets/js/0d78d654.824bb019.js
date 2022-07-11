"use strict";(self.webpackChunkgboost_docs=self.webpackChunkgboost_docs||[]).push([[8754],{4852:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(9231);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5421:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(6215),o=(r(9231),r(4852));const a={id:"FunctionProps",title:"Interface: FunctionProps",sidebar_label:"FunctionProps",sidebar_position:0,custom_edit_url:null},i=void 0,p={unversionedId:"api-infra/interfaces/FunctionProps",id:"api-infra/interfaces/FunctionProps",title:"Interface: FunctionProps",description:"Hierarchy",source:"@site/docs/api-infra/interfaces/FunctionProps.md",sourceDirName:"api-infra/interfaces",slug:"/api-infra/interfaces/FunctionProps",permalink:"/green-boost/docs/api-infra/interfaces/FunctionProps",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"FunctionProps",title:"Interface: FunctionProps",sidebar_label:"FunctionProps",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"CommonProps",permalink:"/green-boost/docs/api-infra/interfaces/CommonProps"},next:{title:"StaticSiteProps",permalink:"/green-boost/docs/api-infra/interfaces/StaticSiteProps"}},s={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"stage",id:"stage",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/green-boost/docs/api-infra/interfaces/CommonProps"},(0,o.kt)("inlineCode",{parentName:"a"},"CommonProps")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"NodejsFunctionProps")),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"FunctionProps"))))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"stage"},"stage"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"stage"),": ",(0,o.kt)("a",{parentName:"p",href:"/green-boost/docs/api-infra/enums/Stage"},(0,o.kt)("inlineCode",{parentName:"a"},"Stage"))),(0,o.kt)("p",null,"Stage or type of environment to deploy to"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Default"))),(0,o.kt)("p",null," Stage.Dev"),(0,o.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/green-boost/docs/api-infra/interfaces/CommonProps"},"CommonProps"),".",(0,o.kt)("a",{parentName:"p",href:"/green-boost/docs/api-infra/interfaces/CommonProps#stage"},"stage")),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/awslabs/green-boost/blob/main/packages/gboost-infra/src/common-props.ts#L12"},"common-props.ts:12")))}u.isMDXComponent=!0}}]);