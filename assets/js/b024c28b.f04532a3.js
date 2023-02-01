"use strict";(self.webpackChunklefthanded_dev=self.webpackChunklefthanded_dev||[]).push([[95],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,v=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return t?r.createElement(v,i(i({ref:n},c),{},{components:t})):r.createElement(v,i({ref:n},c))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5401:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(4778),a=(t(9496),t(9613));const o={title:"NodeJS",tags:["nodejs","node"]},i=void 0,s={unversionedId:"software-dev/nodejs",id:"software-dev/nodejs",title:"NodeJS",description:"NodeJS is an open-source Javascript runtime.",source:"@site/docs/software-dev/nodejs.md",sourceDirName:"software-dev",slug:"/software-dev/nodejs",permalink:"/wiki/software-dev/nodejs",draft:!1,editUrl:"https://github.com/matthew-vance/lefthanded.dev/tree/main/docs/software-dev/nodejs.md",tags:[{label:"nodejs",permalink:"/wiki/tags/nodejs"},{label:"node",permalink:"/wiki/tags/node"}],version:"current",lastUpdatedBy:"Matthew Vance",lastUpdatedAt:1675253514,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{title:"NodeJS",tags:["nodejs","node"]},sidebar:"tutorialSidebar",previous:{title:"Git",permalink:"/wiki/software-dev/git"}},l={},d=[{value:"Resources",id:"resources",level:2},{value:"Notes",id:"notes",level:2},{value:"Safely Reading Environment Variables",id:"safely-reading-environment-variables",level:3},{value:"With Zod",id:"with-zod",level:4},{value:"With Envalid",id:"with-envalid",level:4}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"NodeJS is an open-source Javascript runtime."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/docs/"},"Official docs"))),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("h3",{id:"safely-reading-environment-variables"},"Safely Reading Environment Variables"),(0,a.kt)("p",null,"Since variables read from ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env")," might not be defined at runtime it is important to verify them prior to referencing them in code."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// SOME_CLIENT_ID could be undefined!\nconst someClientId = process.env.SOME_CLIENT_ID;\n"))),(0,a.kt)("h4",{id:"with-zod"},"With ",(0,a.kt)("a",{parentName:"h4",href:"https://zod.dev/"},"Zod")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { z } from "zod";\n\nconst validEnvironmentValues = ["development", "test", "production"];\n\nconst envSchema = z.object({\n  NODE_ENV: z\n    .string()\n    .trim()\n    .refine((value) => validEnvironmentValues.includes(value), {\n      message: `Value must be one of [${validEnvironmentValues.join(", ")}]`,\n    }),\n  SOME_CLIENT_ID: z.string().trim(),\n  SOME_CLIENT_SECRET: z.string().trim(),\n});\n\n// An error will be thrown if process.env does not fit the schema.\nconst env = envSchema.parse(process.env);\n\n// Variables can now be safely referenced from env.\nconst someClientId = env.SOME_CLIENT_ID;\n')),(0,a.kt)("h4",{id:"with-envalid"},"With ",(0,a.kt)("a",{parentName:"h4",href:"https://github.com/af/envalid"},"Envalid")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { cleanEnv, str } from "envalid";\n\n// Will throw an error if validation fails.\nconst env = cleanEnv(process.env, {\n  NODE_ENV: str({\n    choices: ["development", "test", "production"],\n    default: "development",\n  }),\n  SOME_CLIENT_ID: str(),\n  SOME_CLIENT_SECRET: str(),\n});\n\n// Variables can now be safely referenced from env.\nconst someClientId = env.SOME_CLIENT_ID;\n')))}p.isMDXComponent=!0}}]);