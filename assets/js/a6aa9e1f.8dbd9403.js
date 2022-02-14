"use strict";(self.webpackChunkgboost_docs=self.webpackChunkgboost_docs||[]).push([[89],{4296:function(e,t,a){a.d(t,{Z:function(){return h}});var r=a(3157),n=a(9231),l=a(1506),i=a(3787),m=a(8311),s="sidebar_e51r",o="sidebarItemTitle_pYKJ",c="sidebarItemList_uFeg",d="sidebarItem_Zme4",g="sidebarItemLink_rVOC",u="sidebarItemLinkActive_GD8Y",p=a(1509);function v(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),n.createElement("ul",{className:c},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:d},n.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:u},e.title))}))))}var E=["sidebar","toc","children"];var h=function(e){var t=e.sidebar,a=e.toc,m=e.children,s=(0,r.Z)(e,E),o=t&&t.items.length>0;return n.createElement(i.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},o&&n.createElement("aside",{className:"col col--3"},n.createElement(v,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},m),a&&n.createElement("div",{className:"col col--2"},a))))}},1393:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(9231),n=a(2412),l=a(4296),i=a(9540),m=a(1509),s=a(5440);var o=function(e){var t=e.metadata,a=t.previousPage,n=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(s.Z,{permalink:a,title:r.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.createElement(s.Z,{permalink:n,title:r.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))},c=a(5182);var d=function(e){var t=e.metadata,a=e.items,m=e.sidebar,s=(0,n.Z)().siteConfig.title,d=t.blogDescription,g=t.blogTitle,u="/"===t.permalink?s:g;return r.createElement(l.Z,{title:u,description:d,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:m},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(o,{metadata:t}))}},9540:function(e,t,a){a.d(t,{Z:function(){return k}});var r=a(9231),n=a(1506),l=a(4852),i=a(1509),m=a(8311),s=a(8039),o=a(5182),c=a(8353),d=a(1586),g=a(1653),u="blogPostTitle_dA8o",p="blogPostData_AFwD",v="blogPostDetailsFull_nVln",E=a(258),h="image_o6vu";var b=function(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(m.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:h,src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(m.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},f="authorCol_HhAZ",_="imageOnlyAuthorRow__Efm",Z="imageOnlyAuthorCol_eCOK";function N(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",l?_:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,n.Z)(!l&&"col col--6",l?Z:f),key:t},r.createElement(b,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}var k=function(e){var t,a,h,b=(h=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return h(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),f=(0,s.C)().withBaseUrl,_=e.children,Z=e.frontMatter,k=e.assets,P=e.metadata,T=e.truncated,w=e.isBlogPostPage,C=void 0!==w&&w,y=P.date,A=P.formattedDate,I=P.permalink,L=P.tags,M=P.readingTime,x=P.title,R=P.editUrl,U=P.authors,B=null!=(t=k.image)?t:Z.image,O=!C&&T,D=L.length>0,F=C?"h1":"h2";return r.createElement("article",{className:C?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(F,{className:u,itemProp:"headline"},C?x:r.createElement(m.Z,{itemProp:"url",to:I},x)),r.createElement("div",{className:(0,n.Z)(p,"margin-vert--md")},r.createElement("time",{dateTime:y,itemProp:"datePublished"},A),void 0!==M&&r.createElement(r.Fragment,null," \xb7 ",b(M))),r.createElement(N,{authors:U,assets:k})),B&&r.createElement("meta",{itemProp:"image",content:f(B,{absolute:!0})}),r.createElement("div",{id:C?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:d.Z},_)),(D||T)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(a={},a[v]=C,a))},D&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":O})},r.createElement(E.Z,{tags:L})),C&&R&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(g.Z,{editUrl:R})),O&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":D})},r.createElement(m.Z,{to:P.permalink,"aria-label":"Read more about "+x},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},1653:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(9231),n=a(1509),l=a(6260),i=a(3157),m=a(1506),s="iconEdit_mkjS",o=["className"];var c=function(e){var t=e.className,a=(0,i.Z)(e,o);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,m.Z)(s,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},d=a(5182);function g(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:d.kM.common.editThisPage},r.createElement(c,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},5440:function(e,t,a){var r=a(9231),n=a(8311);t.Z=function(e){var t=e.permalink,a=e.title,l=e.subLabel;return r.createElement(n.Z,{className:"pagination-nav__link",to:t},l&&r.createElement("div",{className:"pagination-nav__sublabel"},l),r.createElement("div",{className:"pagination-nav__label"},a))}},1277:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(9231),n=a(1506),l=a(8311),i="tag_A7C8",m="tagRegular_Gy8i",s="tagWithCount_GFeO";var o=function(e){var t,a=e.permalink,o=e.name,c=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(i,(t={},t[m]=!c,t[s]=c,t))},o,c&&r.createElement("span",null,c))}},258:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(9231),n=a(1506),l=a(1509),i=a(1277),m="tags_GHHx",s="tag_XItQ";function o(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(m,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:s},r.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);