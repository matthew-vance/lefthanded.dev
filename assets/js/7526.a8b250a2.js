"use strict";(self.webpackChunklefthanded_dev=self.webpackChunklefthanded_dev||[]).push([[7526],{8840:(e,t,a)=>{a.d(t,{Z:()=>_});var n=a(9496),l=a(5924),r=a(597),o=a(5074),s=a(2328),i=a(2089);const c="sidebar_gcns",m="sidebarItemTitle_heoD",u="sidebarItemList_HVpX",d="sidebarItem_W88T",g="sidebarItemLink_OtWJ",p="sidebarItemLinkActive_wuph";function h(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:d},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title)))))))}var f=a(4191);function E(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function v(e){return n.createElement(f.Zo,{component:E,props:e})}function b(e){let{sidebar:t}=e;const a=(0,o.i)();return t?.items.length?"mobile"===a?n.createElement(v,{sidebar:t}):n.createElement(h,{sidebar:t}):null}function _(e){const{sidebar:t,toc:a,children:o,...s}=e,i=t&&t.items.length>0;return n.createElement(r.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(b,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},9269:(e,t,a)=>{a.d(t,{Z:()=>R});var n=a(9496),l=a(5924),r=a(2628),o=a(1395);function s(e){let{children:t,className:a}=e;const{frontMatter:l,assets:s}=(0,r.C)(),{withBaseUrl:i}=(0,o.C)(),c=s.image??l.image;return n.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&n.createElement("meta",{itemProp:"image",content:i(c,{absolute:!0})}),t)}var i=a(2328);const c="title_guLh";function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,r.C)(),{permalink:s,title:m}=a,u=o?"h1":"h2";return n.createElement(u,{className:(0,l.Z)(c,t),itemProp:"headline"},o?m:n.createElement(i.Z,{itemProp:"url",to:s},m))}var u=a(2089),d=a(9648);const g="container_dCUD";function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return n.createElement(n.Fragment,null,a(t))}function h(e){let{date:t,formattedDate:a}=e;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function f(){return n.createElement(n.Fragment,null," \xb7 ")}function E(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:o,formattedDate:s,readingTime:i}=a;return n.createElement("div",{className:(0,l.Z)(g,"margin-vert--md",t)},n.createElement(h,{date:o,formattedDate:s}),void 0!==i&&n.createElement(n.Fragment,null,n.createElement(f,null),n.createElement(p,{readingTime:i})))}function v(e){return e.href?n.createElement(i.Z,e):n.createElement(n.Fragment,null,e.children)}function b(e){let{author:t,className:a}=e;const{name:r,title:o,url:s,imageURL:i,email:c}=t,m=s||c&&`mailto:${c}`||void 0;return n.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",a)},i&&n.createElement(v,{href:m,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:i,alt:r})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(v,{href:m,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),o&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const _="authorCol_iOou",N="imageOnlyAuthorRow_zTei",P="imageOnlyAuthorCol_YQRM";function Z(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,r.C)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",s?N:"row",t)},a.map(((e,t)=>n.createElement("div",{className:(0,l.Z)(!s&&"col col--6",s?P:_),key:t},n.createElement(b,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function k(){return n.createElement("header",null,n.createElement(m,null),n.createElement(E,null),n.createElement(Z,null))}var T=a(6874),C=a(2022);function w(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,r.C)();return n.createElement("div",{id:o?T.blogPostContainerID:void 0,className:(0,l.Z)("markdown",a),itemProp:"articleBody"},n.createElement(C.Z,null,t))}var y=a(1532),M=a(5448),B=a(4778);function I(){return n.createElement("b",null,n.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function L(e){const{blogPostTitle:t,...a}=e;return n.createElement(i.Z,(0,B.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),n.createElement(I,null))}const F="blogPostFooterDetailsFull_W2V5";function x(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:o,editUrl:s,hasTruncateMarker:i}=e,c=!t&&i,m=a.length>0;return m||c||s?n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",t&&F)},m&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":c})},n.createElement(M.Z,{tags:a})),t&&s&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(y.Z,{editUrl:s})),c&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":m})},n.createElement(L,{blogPostTitle:o,to:e.permalink}))):null}function R(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return n.createElement(s,{className:(0,l.Z)(o,a)},n.createElement(k,null),n.createElement(w,null,t),n.createElement(x,null))}},1532:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(9496),l=a(2089),r=a(7835),o=a(4778),s=a(5924);const i="iconEdit_HxOU";function c(e){let{className:t,...a}=e;return n.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},n.createElement(c,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2363:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(9496),l=a(5924),r=a(2328);function o(e){const{permalink:t,title:a,subLabel:o,isNext:s}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&n.createElement("div",{className:"pagination-nav__sublabel"},o),n.createElement("div",{className:"pagination-nav__label"},a))}},9746:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(9496),l=a(5924),r=a(2328);const o="tag_G87n",s="tagRegular_cuR9",i="tagWithCount__u8a";function c(e){let{permalink:t,label:a,count:c}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(o,c?i:s)},a,c&&n.createElement("span",null,c))}},5448:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(9496),l=a(5924),r=a(2089),o=a(9746);const s="tags_uOLY",i="tag_Brt3";function c(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(s,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:i},n.createElement(o.Z,{label:t,permalink:a}))}))))}},2628:(e,t,a)=>{a.d(t,{C:()=>s,n:()=>o});var n=a(9496),l=a(9148);const r=n.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return n.createElement(r.Provider,{value:o},t)}function s(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("BlogPostProvider");return e}},9648:(e,t,a)=>{a.d(t,{c:()=>c});var n=a(9496),l=a(2485);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function c(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const l=a.select(t),r=a.pluralForms.indexOf(l);return n[Math.min(r,n.length-1)]}(a,t,e)}}},1610:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:a,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===a)return e;const[l]=e.split(/[#?]/),r="/"===l||l===n?l:(o=l,a?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(l,r)}},6874:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.applyTrailingSlash=t.blogPostContainerID=void 0,t.blogPostContainerID="post-content";var l=a(1610);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(l).default}})}}]);