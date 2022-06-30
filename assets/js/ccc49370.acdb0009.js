"use strict";(self.webpackChunkgboost_docs=self.webpackChunkgboost_docs||[]).push([[6103],{9513:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(9231),l=a(1506),r=a(3730),o=a(9301),s=a(4621);const i="sidebar_rwCE",c="sidebarItemTitle_YXpK",m="sidebarItemList_zGUC",u="sidebarItem_FfP6",d="sidebarItemLink_Gh18",g="sidebarItemLinkActive_EyQP";function p(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(i,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(m,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:u},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title)))))))}var h=a(9484);function v(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function f(e){return n.createElement(h.Zo,{component:v,props:e})}var b=a(5017);function E(e){let{sidebar:t}=e;const a=(0,b.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(f,{sidebar:t}):n.createElement(p,{sidebar:t}):null}function N(e){const{sidebar:t,toc:a,children:o,...s}=e,i=t&&t.items.length>0;return n.createElement(r.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(E,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},4659:(e,t,a)=>{a.d(t,{Z:()=>L});var n=a(9231),l=a(1506),r=a(4621),o=a(9301),s=a(6763),i=a(808),c=a(5992),m=a(160),u=a(2683);const d="blogPostTitle_Z3O8",g="blogPostData_tJLm",p="blogPostDetailsFull_fWDL";var h=a(197);function v(e){return e.href?n.createElement(o.Z,e):n.createElement(n.Fragment,null,e.children)}function f(e){let{author:t}=e;const{name:a,title:l,url:r,imageURL:o,email:s}=t,i=r||s&&"mailto:"+s||void 0;return n.createElement("div",{className:"avatar margin-bottom--sm"},o&&n.createElement(v,{href:i,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:o,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(v,{href:i,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}const b="authorCol_zaFR",E="imageOnlyAuthorRow_JcWX",N="imageOnlyAuthorCol_atWC";function _(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const r=t.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",r?E:"row")},t.map(((e,t)=>{var o;return n.createElement("div",{className:(0,l.Z)(!r&&"col col--6",r?N:b),key:t},n.createElement(f,{author:{...e,imageURL:null!=(o=a.authorsImageUrls[t])?o:e.imageURL}}))})))}function L(e){var t;const a=function(){const{selectMessage:e}=(0,i.c)();return t=>{const a=Math.ceil(t);return e(a,(0,r.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:v}=(0,s.C)(),{children:f,frontMatter:b,assets:E,metadata:N,truncated:L,isBlogPostPage:k=!1}=e,{date:Z,formattedDate:P,permalink:x,tags:C,readingTime:y,title:H,editUrl:I,authors:w}=N,T=null!=(t=E.image)?t:b.image,A=!k&&L,M=C.length>0,R=k?"h1":"h2";return n.createElement("article",{className:k?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement("header",null,n.createElement(R,{className:d,itemProp:"headline"},k?H:n.createElement(o.Z,{itemProp:"url",to:x},H)),n.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:Z,itemProp:"datePublished"},P),void 0!==y&&n.createElement(n.Fragment,null," \xb7 ",a(y))),n.createElement(_,{authors:w,assets:E})),T&&n.createElement("meta",{itemProp:"image",content:v(T,{absolute:!0})}),n.createElement("div",{id:k?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},n.createElement(m.Z,null,f)),(M||L)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",k&&p)},M&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":A})},n.createElement(h.Z,{tags:C})),k&&I&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:I})),A&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":M})},n.createElement(o.Z,{to:N.permalink,"aria-label":(0,r.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:H})},n.createElement("b",null,n.createElement(r.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},4779:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(9231),l=a(9513),r=a(4659),o=a(1528),s=a(4621),i=a(6369);function c(e){const{nextItem:t,prevItem:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a&&n.createElement(i.Z,(0,o.Z)({},a,{subLabel:n.createElement(s.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&n.createElement(i.Z,(0,o.Z)({},t,{subLabel:n.createElement(s.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var m=a(4073),u=a(6183),d=a(5187),g=a(1506);function p(e){var t;const{content:a}=e,{assets:l,metadata:r}=a,{title:o,description:s,date:i,tags:c,authors:u,frontMatter:d}=r,{keywords:g}=d,p=null!=(t=l.image)?t:d.image;return n.createElement(m.d,{title:o,description:s,keywords:g,image:p},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:i}),u.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:u.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&n.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}function h(e){const{content:t,sidebar:a}=e,{assets:o,metadata:s}=t,{nextItem:i,prevItem:m,frontMatter:u}=s,{hide_table_of_contents:g,toc_min_heading_level:p,toc_max_heading_level:h}=u;return n.createElement(l.Z,{sidebar:a,toc:!g&&t.toc&&t.toc.length>0?n.createElement(d.Z,{toc:t.toc,minHeadingLevel:p,maxHeadingLevel:h}):void 0},n.createElement(r.Z,{frontMatter:u,assets:o,metadata:s,isBlogPostPage:!0},n.createElement(t,null)),(i||m)&&n.createElement(c,{nextItem:i,prevItem:m}))}function v(e){return n.createElement(m.FG,{className:(0,g.Z)(u.k.wrapper.blogPages,u.k.page.blogPostPage)},n.createElement(p,e),n.createElement(h,e))}},5187:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(1528),l=a(9231),r=a(1506),o=a(3615);const s="tableOfContents_Btii";function i(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,r.Z)(s,"thin-scrollbar",t)},l.createElement(o.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3615:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(1528),l=a(9231);function r(e){let{toc:t,className:a,linkClassName:n,isChild:o}=e;return t.length?l.createElement("ul",{className:o?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(r,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const o=l.memo(r);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const n=a.slice(2,e.level);e.parentIndex=Math.max(...n),a[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:a,...l}=e;a>=0?t[a].children.push(l):n.push(l)})),n}function i(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[{...e,children:t}]:t}))}var c=a(4733);function m(e){const t=e.getBoundingClientRect();return t.top===t.bottom?m(e.parentNode):t}function u(e,t){var a;let{anchorTopOffset:n}=t;const l=e.find((e=>m(e).top>=n));if(l){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(m(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null}return null!=(a=e[e.length-1])?a:null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,c.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function g(e){const t=(0,l.useRef)(void 0),a=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const n=[];for(let l=t;l<=a;l+=1)n.push("h"+l+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),i=u(s,{anchorTopOffset:a.current}),c=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(l)),e.classList.add(l),t.current=e}else e.classList.remove(l)}(e,e===c)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,a])}function p(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:u,maxHeadingLevel:d,...p}=e;const h=(0,c.L)(),v=null!=u?u:h.tableOfContents.minHeadingLevel,f=null!=d?d:h.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return(0,l.useMemo)((()=>i({toc:s(t),minHeadingLevel:a,maxHeadingLevel:n})),[t,a,n])}({toc:t,minHeadingLevel:v,maxHeadingLevel:f});return g((0,l.useMemo)((()=>{if(r&&m)return{linkClassName:r,linkActiveClassName:m,minHeadingLevel:v,maxHeadingLevel:f}}),[r,m,v,f])),l.createElement(o,(0,n.Z)({toc:b,className:a,linkClassName:r},p))}},808:(e,t,a)=>{a.d(t,{c:()=>c});var n=a(9231),l=a(8343);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),s}}),[e])}function c(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms+"), but the message contains "+n.length+": "+e);const l=a.select(t),r=a.pluralForms.indexOf(l);return n[Math.min(r,n.length-1)]}(a,t,e)}}}}]);