(self.webpackChunkrematch_docs=self.webpackChunkrematch_docs||[]).push([[4881],{3245:function(e,t,n){"use strict";var a=n(7378);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},8287:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(7378),r=n(1415),o=n(8944),i="tabItem_c0e5",l="tabItemActive_28AG";var s=37,u=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,d=e.values,p=e.groupId,m=e.className,g=(0,r.Z)(),f=g.tabGroupChoices,h=g.setTabGroupChoices,k=(0,a.useState)(c),b=k[0],v=k[1],y=a.Children.toArray(e.children),N=[];if(null!=p){var w=f[p];null!=w&&w!==b&&d.some((function(e){return e.value===w}))&&v(w)}var x=function(e){var t=e.currentTarget,n=N.indexOf(t),a=d[n].value;v(a),null!=p&&(h(p,a),setTimeout((function(){var e,n,a,r,o,i,s,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,s=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case u:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case s:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:x,onClick:x},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},1335:function(e,t,n){"use strict";var a=(0,n(7378).createContext)(void 0);t.Z=a},1415:function(e,t,n){"use strict";var a=n(7378),r=n(1335);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},9121:function(e,t,n){"use strict";n.d(t,{Y:function(){return l}});var a=n(7378),r=n(8287),o=n(3245),i=[{label:"JavaScript",value:"js"},{label:"Typescript",value:"ts"}],l=function(e){var t=e.defaultValue,n=void 0===t?"js":t,l=e.values,s=void 0===l?i:l,u=e.children;return a.createElement(r.Z,{defaultValue:n,values:s},s.map((function(e,t){return a.createElement(o.Z,{key:e.value,value:e.value},u[t])})))}},5510:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(9603),r=n(120),o=(n(7378),n(5318)),i=n(8287),l=n(3245),s=n(9121),u={id:"loading",title:"Loading",sidebar_label:"@rematch/loading",slug:"/plugins/loading/"},c={unversionedId:"plugins/loading",id:"plugins/loading",isDocsHomePage:!1,title:"Loading",description:"The loading plugin for Rematch. Adds automated loading indicators for effects, so you don't need to manage state like loading: true by yourself. Inspired by dva-loading.",source:"@site/../docs/plugins/loading.md",sourceDirName:"plugins",slug:"/plugins/loading/",permalink:"/docs/plugins/loading/",editUrl:"https://github.com/rematch/rematch/edit/main/docs/../docs/plugins/loading.md",version:"current",sidebar_label:"@rematch/loading",frontMatter:{id:"loading",title:"Loading",sidebar_label:"@rematch/loading",slug:"/plugins/loading/"},sidebar:"docs",previous:{title:"Select",permalink:"/docs/plugins/select/"},next:{title:"Updated",permalink:"/docs/plugins/updated/"}},d=[{value:"Compatibility",id:"compatibility",children:[]},{value:"Install",id:"install",children:[]},{value:"loadingPlugin(config)",id:"loadingpluginconfig",children:[]},{value:"Usage",id:"usage",children:[{value:"Setup the store",id:"setup-the-store",children:[]},{value:"Use in the view",id:"use-in-the-view",children:[]}]}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The loading plugin for Rematch. Adds automated loading indicators for effects, so you don't need to manage state like ",(0,o.kt)("inlineCode",{parentName:"p"},"loading: true")," by yourself. Inspired by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dvajs/dva/tree/master/packages/dva-loading"},"dva-loading"),"."),(0,o.kt)("h2",{id:"compatibility"},"Compatibility"),(0,o.kt)("p",null,"Install the correct version of loading plugin based on the version of the core Rematch library in your project."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"@rematch/core"),(0,o.kt)("th",{parentName:"tr",align:"center"},"@rematch/immer"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"1.x.x"),(0,o.kt)("td",{parentName:"tr",align:"center"},"1.x.x")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"2.x.x"),(0,o.kt)("td",{parentName:"tr",align:"center"},"2.x.x")))),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)(i.Z,{groupId:"npm2yarn",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @rematch/loading\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @rematch/loading\n")))),(0,o.kt)("h2",{id:"loadingpluginconfig"},"loadingPlugin(","[config]",")"),(0,o.kt)("p",null,"The loading plugin accepts one optional argument - ",(0,o.kt)("strong",{parentName:"p"},"config"),", which is an object with the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[",(0,o.kt)("inlineCode",{parentName:"li"},"name"),"]"," (",(0,o.kt)("em",{parentName:"li"},"string?"),'): key for the loading model in your store. If you name it "custom", loading state can be accessed from ',(0,o.kt)("em",{parentName:"li"},"state.custom"),". ",(0,o.kt)("strong",{parentName:"li"},"Defaults to ",(0,o.kt)("em",{parentName:"strong"},"loading")),"."),(0,o.kt)("li",{parentName:"ul"},"[",(0,o.kt)("inlineCode",{parentName:"li"},"asNumber"),"]"," (",(0,o.kt)("em",{parentName:"li"},"boolean?"),"): loading plugin by default keeps track of running effects using booleans, so for example: ",(0,o.kt)("em",{parentName:"li"},"state.loading.global === true"),". You can change that behaviour and use numbers instead - plugin will keep track of the number of times an effect was executed, for example: ",(0,o.kt)("em",{parentName:"li"},"state.loading.global === 5"),". Defaults to ",(0,o.kt)("em",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},"[",(0,o.kt)("inlineCode",{parentName:"li"},"whitelist"),"]"," (",(0,o.kt)("em",{parentName:"li"},"string[]?"),"): an array of effects names that you want to use loading plugin for. If defined, plugin will work only for the whitelisted effects."),(0,o.kt)("li",{parentName:"ul"},"[",(0,o.kt)("inlineCode",{parentName:"li"},"blacklist"),"]"," (",(0,o.kt)("em",{parentName:"li"},"string[]?"),"): an array of effects names that you ",(0,o.kt)("strong",{parentName:"li"},"don't want")," to use loading plugin for. If defined, plugin will work for all effects except those blacklisted.")),(0,o.kt)("p",null,"Both ",(0,o.kt)("inlineCode",{parentName:"p"},"blacklist")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"whitelist"),' accept the "full" effect name, in a format ',(0,o.kt)("inlineCode",{parentName:"p"},"modelName/effectFunctionName"),", for example ",(0,o.kt)("em",{parentName:"p"},"'count/addOne'"),"."),(0,o.kt)("p",null,"If both ",(0,o.kt)("inlineCode",{parentName:"p"},"blacklist")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"whitelist")," aren't provided, plugin works for all effects."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Let's say we have a model 'count' in our store. Loading plugin's state will have the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "global": true, // true when any effect in any model is loading\n    "models": {\n      "count": true // true when any effect in \'count\' model is loading\n    },\n    "effects": {\n      "count": {\n        "addOne": true, // true when effect \'addOne\' in model \'count\' is loading\n      },\n    },\n}\n')),(0,o.kt)("p",null,"Check out below an example of how to use loading plugin in React:"),(0,o.kt)("p",null,"Set up your store with default or custom settings."),(0,o.kt)("h3",{id:"setup-the-store"},"Setup the store"),(0,o.kt)(s.Y,{mdxType:"MultiLangComponent"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="store.js"',title:'"store.js"'},"import loadingPlugin from '@rematch/loading'\nimport { init } from '@rematch/core'\nimport * as models from './models'\n\ninit({\n    models,\n    // add loadingPlugin to your store\n    plugins: [loadingPlugin()],\n})\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="store.ts"',title:'"store.ts"'},"import loadingPlugin, { ExtraModelsFromLoading } from '@rematch/loading'\nimport { init, RematchDispatch, RematchRootState } from '@rematch/core'\nimport { models, RootModel } from './models'\n\n\n/** IF YOU USE THE BASIC SETUP USE THIS METHOD **/\ntype FullModel =  ExtraModelsFromLoading<RootModel>\n\nexport const store = init<RootModel, FullModel>({\n    models,\n      plugins: [loadingPlugin()],\n})\n\n\n/** IF YOU USE THE { asNumber } SETUP USE THIS METHOD **/\ntype FullModel = ExtraModelsFromLoading<RootModel, { asNumber: true }>\n\nexport const store = init<RootModel, FullModel>({\n    models,\n    plugins: [loadingPlugin({ asNumber: true })],\n})\n\nexport type Store = typeof store\nexport type Dispatch = RematchDispatch<RootModel>\nexport type RootState = RematchRootState<RootModel, FullModel>\n\n"))),(0,o.kt)("h3",{id:"use-in-the-view"},"Use in the view"),(0,o.kt)("p",null,"Use state created by the loading plugin in your view."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="App.jsx"',title:'"App.jsx"'},"import React from 'react'\nimport { connect } from 'react-redux'\nimport AwesomeLoadingButton from './AwesomeLoadingButton'\n\nconst LoginButton = props => (\n    <AwesomeLoadingButton onClick={props.login} loading={props.isLoading}>\n        Login\n    </AwesomeLoadingButton>\n)\n\nconst mapState = state => ({\n    isLoading: state.loading.effects.auth.login, // true when the `auth/login` effect is running\n    // or\n    isLoading: state.loading.models.auth, // true when ANY effect on the `auth` model is running\n})\n\nconst mapDispatch = dispatch => ({\n    login: () => dispatch.auth.login(),\n})\n\nexport default connect(mapState,mapDispatch)(LoginButton)\n")))}m.isMDXComponent=!0},5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8944:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);