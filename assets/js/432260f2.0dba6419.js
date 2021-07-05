(self.webpackChunkrematch_docs=self.webpackChunkrematch_docs||[]).push([[2178],{8659:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var n=r(9603),a=r(120),i=(r(7378),r(5318)),o={id:"index",title:"Rematch API Reference",sidebar_label:"Introduction",slug:"/api-reference/"},p={unversionedId:"api-reference/index",id:"api-reference/index",isDocsHomePage:!1,title:"Rematch API Reference",description:"The API exposed by Rematch is very simple and it is based around the init method. It creates and returns a Rematch store, which is essentially a Redux store with a few additional properties and extra features.",source:"@site/../docs/api-reference/index.md",sourceDirName:"api-reference",slug:"/api-reference/",permalink:"/docs/api-reference/",editUrl:"https://github.com/rematch/rematch/edit/main/docs/../docs/api-reference/index.md",version:"current",sidebar_label:"Introduction",frontMatter:{id:"index",title:"Rematch API Reference",sidebar_label:"Introduction",slug:"/api-reference/"},sidebar:"docs",previous:{title:"Typescript",permalink:"/docs/getting-started/typescript"},next:{title:"Models",permalink:"/docs/api-reference/models"}},l=[{value:"init(config)",id:"initconfig",children:[]}],s={toc:l};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The API exposed by Rematch is very simple and it is based around the ",(0,i.kt)("a",{parentName:"p",href:"#initconfig"},"init")," method. It creates and returns a ",(0,i.kt)("a",{parentName:"p",href:"store"},"Rematch store"),", which is essentially a ",(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org/api/store"},"Redux store")," with a few additional properties and extra features."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To use Rematch in your project, you need to understand how to define ",(0,i.kt)("a",{parentName:"li",href:"models"},"models")," that are passed to the init configuration."),(0,i.kt)("li",{parentName:"ul"},"If you are planning to migrate from the plain Redux setup or you want to make some changes to the Redux configuration,\ncheck out ",(0,i.kt)("a",{parentName:"li",href:"redux"},"init's Redux configuration"),"."),(0,i.kt)("li",{parentName:"ul"},"If you would like to develop a new plugin, see the ",(0,i.kt)("a",{parentName:"li",href:"plugins"},"Plugin API")," reference.")),(0,i.kt)("h2",{id:"initconfig"},"init(","[config]",")"),(0,i.kt)("p",null,"The function called to setup Rematch."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("p",null,"Init accepts one argument - ",(0,i.kt)("strong",{parentName:"p"},"config"),", which is an object with the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"[",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"]"," (",(0,i.kt)("em",{parentName:"p"},"string"),"): a name for your store. It might be useful when creating multiple stores. Default value is: ",(0,i.kt)("em",{parentName:"p"},'"Rematch Store {counter}"'),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"[",(0,i.kt)("inlineCode",{parentName:"p"},"models"),"]"," (",(0,i.kt)("em",{parentName:"p"},"Object"),"): each model describes its part of the state, reducers and effects. This parameter is a mapping from models' names to their configuration. See ",(0,i.kt)("a",{parentName:"p",href:"models"},"Model API")," for details.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"[",(0,i.kt)("inlineCode",{parentName:"p"},"plugins"),"]"," (",(0,i.kt)("em",{parentName:"p"},"Array"),"): plugins are special sets of configuration that can extend the functionality of your store. You can pass an array of plugins that you want to use in your store. See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/plugins/"},"plugins")," developed by the Rematch team or the ",(0,i.kt)("a",{parentName:"p",href:"plugins"},"API for creating plugins"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"[",(0,i.kt)("inlineCode",{parentName:"p"},"redux"),"]"," (",(0,i.kt)("em",{parentName:"p"},"Object"),"): there are situations where you might want to access Redux configuration directly, e.g. to migrate existing redux project or add middlewares. See ",(0,i.kt)("a",{parentName:"p",href:"redux"},"Redux API")," for details."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),":"),(0,i.kt)("p",null,"(",(0,i.kt)("em",{parentName:"p"},"Object"),") Fully configured Redux store with extra properties and methods supplied by Rematch. See ",(0,i.kt)("a",{parentName:"p",href:"store"},"Store API")," for details."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { init } from '@rematch/core'\n\nconst store = init({\n  name: 'my custom store name',\n  models: {example1, example2},\n  plugins: [plugin1, plugin2],\n  redux: customReduxConfig,\n})\n")),(0,i.kt)("p",null,"For more comprehensive examples, visit ",(0,i.kt)("a",{parentName:"p",href:"/examples/"},"examples"),"."))}c.isMDXComponent=!0},5318:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);