"use strict";(self.webpackChunkgboost_docs=self.webpackChunkgboost_docs||[]).push([[7505],{4852:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4499:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return d},default:function(){return m}});var i=n(5086),r=n(9126),a=(n(9231),n(4852)),o=["components"],l={id:"StaticSite",title:"Class: StaticSite",sidebar_label:"StaticSite",sidebar_position:0,custom_edit_url:null},s=void 0,p={unversionedId:"api-infra/classes/StaticSite",id:"api-infra/classes/StaticSite",title:"Class: StaticSite",description:"StaticSite Construct",source:"@site/docs/api-infra/classes/StaticSite.md",sourceDirName:"api-infra/classes",slug:"/api-infra/classes/StaticSite",permalink:"/green-boost/docs/api-infra/classes/StaticSite",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"StaticSite",title:"Class: StaticSite",sidebar_label:"StaticSite",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"Function",permalink:"/green-boost/docs/api-infra/classes/Function"},next:{title:"Table",permalink:"/green-boost/docs/api-infra/classes/Table"}},c={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"bucket",id:"bucket",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"distribution",id:"distribution",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"fullDomainName",id:"fulldomainname",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"zone",id:"zone",level:3},{value:"Defined in",id:"defined-in-4",level:4}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"StaticSite Construct\nCreates an S3 Bucket, Origin Access Identity, CloudFront Web Distribution,\nand builds Static Site with optional environment variables"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Construct")),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"StaticSite"))))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new StaticSite"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"scope"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"props"),")"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"scope")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Construct"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"id")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"props")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"StaticSiteProps"))))),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,"Construct.constructor"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/awslabs/green-boost/blob/main/packages/gboost-infra/src/static-site/index.ts#L104"},"static-site/index.ts:104")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"bucket"},"bucket"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"bucket"),": ",(0,a.kt)("a",{parentName:"p",href:"/green-boost/docs/api-infra/classes/Bucket"},(0,a.kt)("inlineCode",{parentName:"a"},"Bucket"))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/awslabs/green-boost/blob/main/packages/gboost-infra/src/static-site/index.ts#L99"},"static-site/index.ts:99")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"distribution"},"distribution"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"distribution"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Distribution")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/awslabs/green-boost/blob/main/packages/gboost-infra/src/static-site/index.ts#L100"},"static-site/index.ts:100")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fulldomainname"},"fullDomainName"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"fullDomainName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/awslabs/green-boost/blob/main/packages/gboost-infra/src/static-site/index.ts#L102"},"static-site/index.ts:102")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"zone"},"zone"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"zone"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"IHostedZone")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/awslabs/green-boost/blob/main/packages/gboost-infra/src/static-site/index.ts#L101"},"static-site/index.ts:101")))}m.isMDXComponent=!0}}]);