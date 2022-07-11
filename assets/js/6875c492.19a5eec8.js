"use strict";(self.webpackChunkgboost_docs=self.webpackChunkgboost_docs||[]).push([[8610],{9513:(e,t,a)=>{a.d(t,{Z:()=>N});var l=a(9231),r=a(5947),n=a(3730),s=a(9301),o=a(4621);const i="sidebar_rwCE",m="sidebarItemTitle_YXpK",c="sidebarItemList_zGUC",u="sidebarItem_FfP6",g="sidebarItemLink_Gh18",d="sidebarItemLinkActive_EyQP";function p(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.Z)(i,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.Z)(c,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:u},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title)))))))}var h=a(9484);function b(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function E(e){return l.createElement(h.Zo,{component:b,props:e})}var f=a(5017);function v(e){let{sidebar:t}=e;const a=(0,f.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(E,{sidebar:t}):l.createElement(p,{sidebar:t}):null}function N(e){const{sidebar:t,toc:a,children:s,...o}=e,i=t&&t.items.length>0;return l.createElement(n.Z,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(v,{sidebar:t}),l.createElement("main",{className:(0,r.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},2707:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(9231),r=a(4621),n=a(6369);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(n.Z,{permalink:a,title:l.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&l.createElement(n.Z,{permalink:s,title:l.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},4659:(e,t,a)=>{a.d(t,{Z:()=>Z});var l=a(9231),r=a(5947),n=a(4621),s=a(9301),o=a(6763),i=a(808),m=a(5992),c=a(2228),u=a(2683);const g="blogPostTitle_Z3O8",d="blogPostData_tJLm",p="blogPostDetailsFull_fWDL";var h=a(197);function b(e){return e.href?l.createElement(s.Z,e):l.createElement(l.Fragment,null,e.children)}function E(e){let{author:t}=e;const{name:a,title:r,url:n,imageURL:s,email:o}=t,i=n||o&&"mailto:"+o||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},s&&l.createElement(b,{href:i,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:s,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(b,{href:i,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}const f="authorCol_zaFR",v="imageOnlyAuthorRow_JcWX",N="imageOnlyAuthorCol_atWC";function _(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const n=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",n?v:"row")},t.map(((e,t)=>{var s;return l.createElement("div",{className:(0,r.Z)(!n&&"col col--6",n?N:f),key:t},l.createElement(E,{author:{...e,imageURL:null!=(s=a.authorsImageUrls[t])?s:e.imageURL}}))})))}function Z(e){var t;const a=function(){const{selectMessage:e}=(0,i.c)();return t=>{const a=Math.ceil(t);return e(a,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:b}=(0,o.C)(),{children:E,frontMatter:f,assets:v,metadata:N,truncated:Z,isBlogPostPage:P=!1}=e,{date:k,formattedDate:w,permalink:T,tags:y,readingTime:I,title:L,editUrl:F,authors:x}=N,M=null!=(t=v.image)?t:f.image,A=!P&&Z,C=y.length>0,R=P?"h1":"h2";return l.createElement("article",{className:P?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(R,{className:g,itemProp:"headline"},P?L:l.createElement(s.Z,{itemProp:"url",to:T},L)),l.createElement("div",{className:(0,r.Z)(d,"margin-vert--md")},l.createElement("time",{dateTime:k,itemProp:"datePublished"},w),void 0!==I&&l.createElement(l.Fragment,null," \xb7 ",a(I))),l.createElement(_,{authors:x,assets:v})),M&&l.createElement("meta",{itemProp:"image",content:b(M,{absolute:!0})}),l.createElement("div",{id:P?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(c.Z,null,E)),(C||Z)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",P&&p)},C&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":A})},l.createElement(h.Z,{tags:y})),P&&F&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(u.Z,{editUrl:F})),A&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":C})},l.createElement(s.Z,{to:N.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:L})},l.createElement("b",null,l.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6518:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(9231),r=a(9301),n=a(9513),s=a(4659),o=a(4621),i=a(808),m=a(4073),c=a(6183),u=a(2707),g=a(8562),d=a(5947);function p(e){let{tag:t,items:a,sidebar:p,listMetadata:h}=e;const b=function(){const{selectMessage:e}=(0,i.c)();return t=>e(t,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),E=(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:b(t.count),tagName:t.label});return l.createElement(m.FG,{className:(0,d.Z)(c.k.wrapper.blogPages,c.k.page.blogTagPostListPage)},l.createElement(m.d,{title:E}),l.createElement(g.Z,{tag:"blog_tags_posts"}),l.createElement(n.Z,{sidebar:p},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,E),l.createElement(r.Z,{href:t.allTagsPath},l.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((e=>{let{content:t}=e;return l.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},l.createElement(t,null))})),l.createElement(u.Z,{metadata:h})))}},808:(e,t,a)=>{a.d(t,{c:()=>m});var l=a(9231),r=a(8343);const n=["zero","one","two","few","many","other"];function s(e){return n.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),o}}),[e])}function m(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms+"), but the message contains "+l.length+": "+e);const r=a.select(t),n=a.pluralForms.indexOf(r);return l[Math.min(n,l.length-1)]}(a,t,e)}}}}]);