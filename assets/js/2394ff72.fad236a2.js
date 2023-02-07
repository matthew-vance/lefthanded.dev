"use strict";(self.webpackChunklefthanded_dev=self.webpackChunklefthanded_dev||[]).push([[148],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),v=a,f=p["".concat(l,".").concat(v)]||p[v]||m[v]||i;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=v;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},2112:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(4778),a=(t(9496),t(9613));const i={title:"Safely Reading Environment Variables in NodeJS",tags:["nodejs","javascript","typescript"]},o=void 0,s={unversionedId:"safely-reading-env-vars-in-nodejs",id:"safely-reading-env-vars-in-nodejs",title:"Safely Reading Environment Variables in NodeJS",description:"Since variables read from process.env might not be defined at runtime it is important to verify them prior to referencing them in code.",source:"@site/docs/safely-reading-env-vars-in-nodejs.md",sourceDirName:".",slug:"/safely-reading-env-vars-in-nodejs",permalink:"/wiki/safely-reading-env-vars-in-nodejs",draft:!1,editUrl:"https://github.com/matthew-vance/lefthanded.dev/tree/main/docs/safely-reading-env-vars-in-nodejs.md",tags:[{label:"nodejs",permalink:"/wiki/tags/nodejs"},{label:"javascript",permalink:"/wiki/tags/javascript"},{label:"typescript",permalink:"/wiki/tags/typescript"}],version:"current",lastUpdatedBy:"Matthew Vance",lastUpdatedAt:1675773118,formattedLastUpdatedAt:"Feb 7, 2023",frontMatter:{title:"Safely Reading Environment Variables in NodeJS",tags:["nodejs","javascript","typescript"]},sidebar:"tutorialSidebar",previous:{title:"Bash Script Best Practices",permalink:"/wiki/bash-script-best-practices"}},l={},c=[{value:"With Zod",id:"with-zod",level:2},{value:"With Envalid",id:"with-envalid",level:2}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Since variables read from ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env")," might not be defined at runtime it is important to verify them prior to referencing them in code."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// SOME_CLIENT_ID could be undefined!\nconst someClientId = process.env.SOME_CLIENT_ID;\n"))),(0,a.kt)("h2",{id:"with-zod"},"With ",(0,a.kt)("a",{parentName:"h2",href:"https://zod.dev/"},"Zod")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { z } from "zod";\n\nconst validEnvironmentValues = ["development", "test", "production"];\n\nconst envSchema = z.object({\n  NODE_ENV: z\n    .string()\n    .trim()\n    .refine((value) => validEnvironmentValues.includes(value), {\n      message: `Value must be one of [${validEnvironmentValues.join(", ")}]`,\n    }),\n  SOME_CLIENT_ID: z.string().trim(),\n  SOME_CLIENT_SECRET: z.string().trim(),\n});\n\n// An error will be thrown if process.env does not fit the schema.\nconst env = envSchema.parse(process.env);\n\n// Variables can now be safely referenced from env.\nconst someClientId = env.SOME_CLIENT_ID;\n')),(0,a.kt)("h2",{id:"with-envalid"},"With ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/af/envalid"},"Envalid")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { cleanEnv, str } from "envalid";\n\n// Will throw an error if validation fails.\nconst env = cleanEnv(process.env, {\n  NODE_ENV: str({\n    choices: ["development", "test", "production"],\n    default: "development",\n  }),\n  SOME_CLIENT_ID: str(),\n  SOME_CLIENT_SECRET: str(),\n});\n\n// Variables can now be safely referenced from env.\nconst someClientId = env.SOME_CLIENT_ID;\n')))}p.isMDXComponent=!0}}]);