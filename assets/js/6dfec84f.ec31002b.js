"use strict";(self.webpackChunkgboost_docs=self.webpackChunkgboost_docs||[]).push([[258],{4852:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(9231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2933:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(6260),a=n(3157),o=(n(9231),n(4852)),i=["components"],l={},s="Intro",p={unversionedId:"getting-started/intro",id:"getting-started/intro",title:"Intro",description:"Green Boost is a framework for boosting development of greenfield web apps on AWS \u26a1",source:"@site/docs/getting-started/intro.md",sourceDirName:"getting-started",slug:"/getting-started/intro",permalink:"/green-boost/docs/getting-started/intro",editUrl:"https://github.com/awslabs/green-boost/docs/getting-started/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",next:{title:"Installation",permalink:"/green-boost/docs/getting-started/installation"}},u=[{value:"Highlights",id:"highlights",children:[],level:2},{value:"Motivation",id:"motivation",children:[],level:2},{value:"Toolbox",id:"toolbox",children:[],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"intro"},"Intro"),(0,o.kt)("p",null,"Green Boost is a framework for ",(0,o.kt)("strong",{parentName:"p"},"boost"),"ing development of ",(0,o.kt)("strong",{parentName:"p"},"green"),"field web apps on AWS \u26a1"),(0,o.kt)("h2",{id:"highlights"},"Highlights"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Web apps include authentication, user management and user settings so you can focus on features that add business value"),(0,o.kt)("li",{parentName:"ul"},"CI/CD pipelines and pre-push hooks to enforce secure infrastructure and high code quality"),(0,o.kt)("li",{parentName:"ul"},"CDK Constructs and React Components built for common web app needs on AWS help you build new features faster")),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"Building a web app on AWS can feel daunting. There are many design decisions to make. While developing, there can be a lot of setup and boilerplate code. AWS Professional Services has experience building different types of web apps and we've learned some lessons along the way. We wanted to share with you these best practices while also providing an easy way to get started. That's why we built Green Boost."),(0,o.kt)("h2",{id:"toolbox"},"Toolbox"),(0,o.kt)("p",null,"Green Boost has opinions on what tools to use. A standard toolbox enables develoment teams to work faster together. We've picked tools that are easy to use and modern. If you don't have experience with some of these tools, we think you'll be able to pick them up quickly and enjoy working with them."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Programming Language: ",(0,o.kt)("a",{parentName:"li",href:"https://typescriptlang.com"},"TypeScript")),(0,o.kt)("li",{parentName:"ul"},"Infrastructure As Code (IaC): ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cdk/latest/guide/home.html"},"AWS Cloud Development Kit (CDK)")),(0,o.kt)("li",{parentName:"ul"},"Back End Run Time: ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en"},"Node.js")),(0,o.kt)("li",{parentName:"ul"},"Front End Framework: ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org"},"React")),(0,o.kt)("li",{parentName:"ul"},"API: ",(0,o.kt)("a",{parentName:"li",href:"https://graphql.org"},"GraphQL")),(0,o.kt)("li",{parentName:"ul"},"UI Component Library: ",(0,o.kt)("a",{parentName:"li",href:"https://ui.docs.amplify.aws"},"Amplify UI")),(0,o.kt)("li",{parentName:"ul"},"CSS Framework: ",(0,o.kt)("a",{parentName:"li",href:"https://stitches.dev/"},"Stitches")),(0,o.kt)("li",{parentName:"ul"},"AWS Lambda Middleware Engine: ",(0,o.kt)("a",{parentName:"li",href:"https://middy.js.org/"},"Middy")),(0,o.kt)("li",{parentName:"ul"},"Node.js Package Manager: ",(0,o.kt)("a",{parentName:"li",href:"https://pnpm.io/"},"PNPM")),(0,o.kt)("li",{parentName:"ul"},"Front End Tooling: ",(0,o.kt)("a",{parentName:"li",href:"https://vitejs.dev"},"Vite")),(0,o.kt)("li",{parentName:"ul"},"Unit Test Framework: ",(0,o.kt)("a",{parentName:"li",href:"https://jestjs.io"},"Jest")),(0,o.kt)("li",{parentName:"ul"},"Static Runtime Code Analysis: ",(0,o.kt)("a",{parentName:"li",href:"https://eslint.org/"},"ESLint")),(0,o.kt)("li",{parentName:"ul"},"Static Infrastructure Code Analysis: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/cdklabs/cdk-nag"},"cdk-nag")),(0,o.kt)("li",{parentName:"ul"},"3rd Party Dependency Analysis: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/v8/commands/npm-audit"},"npm audit"))))}d.isMDXComponent=!0}}]);