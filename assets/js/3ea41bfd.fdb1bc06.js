(self.webpackChunkrematch_docs=self.webpackChunkrematch_docs||[]).push([[8411],{4285:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var a=n(9603),r=n(120),o=(n(7378),n(5318)),i={id:"models",title:"Models",sidebar_label:"Models",slug:"/api-reference/models"},s={unversionedId:"api-reference/models",id:"api-reference/models",isDocsHomePage:!1,title:"Models",description:"Models are crucial parts of your store. They allow you to define your initial state, reducers and effects. You can provide them to the Rematch init method as config.models property.",source:"@site/../docs/api-reference/models.md",sourceDirName:"api-reference",slug:"/api-reference/models",permalink:"/docs/api-reference/models",editUrl:"https://github.com/rematch/rematch/edit/main/docs/../docs/api-reference/models.md",version:"current",sidebar_label:"Models",frontMatter:{id:"models",title:"Models",sidebar_label:"Models",slug:"/api-reference/models"},sidebar:"docs",previous:{title:"Rematch API Reference",permalink:"/docs/api-reference/"},next:{title:"Redux",permalink:"/docs/api-reference/redux"}},l=[{value:"Configuration",id:"configuration",children:[]}],c={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Models are crucial parts of your store. They allow you to define your initial state, reducers and effects. You can provide them to the Rematch ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/#initconfig"},"init")," method as ",(0,o.kt)("inlineCode",{parentName:"p"},"config.models")," property."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Configuration for a model is build using the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[",(0,o.kt)("inlineCode",{parentName:"li"},"name"),"]"," (",(0,o.kt)("em",{parentName:"li"},"string"),"): the name will become a key in the store's state and in the dispatch created by Rematch. It means that you will be able to access state of a model named 'count' using ",(0,o.kt)("inlineCode",{parentName:"li"},"store.getState().count")," and dispatch actions using ",(0,o.kt)("inlineCode",{parentName:"li"},"store.dispatch.count"),". If you don't provide a name for the model, Rematch will use a key from the ",(0,o.kt)("inlineCode",{parentName:"li"},"models")," object provided to ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/#initconfig"},"init")," function.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"state")," (",(0,o.kt)("em",{parentName:"p"},"any"),"): initial state for a model.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"reducers")," (",(0,o.kt)("em",{parentName:"p"},"{ ","[string]",": (state, payload) => any }"),"): an object of functions that change the model's state. These functions take the model's previous state and a payload, and return the model's next state. These should be pure functions relying only on the state and payload arguments to compute the next state. For code that relies on the \"outside world\" ","(","impure functions like api calls, etc.",")",", use effects."),(0,o.kt)("p",{parentName:"li"},"  Reducers may also listen to actions from other models by listing the 'model name' + 'action name' as their key (see example)."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("inlineCode",{parentName:"p"},"baseReducer"),"]"," (",(0,o.kt)("em",{parentName:"p"},"(state, action) => state"),"): a reducer that will run before the model's ",(0,o.kt)("inlineCode",{parentName:"p"},"reducers"),". This function takes the model's previous state and an action, and returns the model state that ",(0,o.kt)("inlineCode",{parentName:"p"},"reducers")," will use."),(0,o.kt)("p",{parentName:"li"},"  In general, you don't need to use baseReducer. However, it is especially useful for adding redux libraries to your store in a structured manner. See the recipe for ",(0,o.kt)("a",{parentName:"p",href:"/docs/recipes/redux-plugins"},"redux plugins"),"."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("inlineCode",{parentName:"p"},"effects"),"]"," (",(0,o.kt)("em",{parentName:"p"},"{ ","[string]",": (payload, rootState) } | (dispatch => { ","[string]",": (payload, rootState) })"),"): effects have  access to model's state and reducers, and they allow to handle the world outside of the model. Therefore, they are often used to manage asynchronous actions."),(0,o.kt)("p",{parentName:"li"},"  Effect is a function which takes a payload and store's ",(0,o.kt)("strong",{parentName:"p"},"root state")," and returns anything. ",(0,o.kt)("inlineCode",{parentName:"p"},"effects")," property is an object with effect functions. ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," reference of each effect is bind to the model's dispatcher, which means it's possible to dispatch model's actions from effects."),(0,o.kt)("p",{parentName:"li"},"  There might a need to access dispatchers for different models - not only the one being defined. In this case, it is possible to define ",(0,o.kt)("inlineCode",{parentName:"p"},"effects")," as a factory taking store's dispatch and returning object with effect functions."),(0,o.kt)("p",{parentName:"li"},"  Effects functions that share a name with a reducer are called ",(0,o.kt)("strong",{parentName:"p"},"after")," their reducer counterpart."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="models.js"',title:'"models.js"'},"export const countModel = {\n  state: { counter: 0 }, // initial state\n  reducers: {\n    add: (state, payload) => {\n      return {\n        ...state,\n        counter: state.counter + payload\n      }\n    },\n  },\n  effects: {\n    async loadData(payload, rootState) {\n      const response = await fetch(`http://example.com/${payload}`)\n      const data = await response.json()\n      this.add(data) // dispatch action to a local reducer\n    }\n  },\n}\n\nexport const exampleNamedModel = {\n  name: 'example',\n  state: 1000,\n  reducers: {\n    subtract: (state, payload) => state - payload,\n  },\n  effects: dispatch => ({\n    async triggerData(payload, rootState) {\n      console.log(rootState.example) // log current state of example model\n      await dispatch.count.loadData(payload); // dispatch action from a different model\n    }\n  }),\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="store.js"',title:'"store.js"'},"import { init } from '@rematch/core';\nimport { countModel, exampleNamedModel } from './models';\n\nconst store = init({\n  models: {\n    count: countModel, // adding model with a name 'count', taken from the key since our countModel object doesn't define its name\n    anything: exampleNamedModel, // adding model with a name 'example' which is defined in the model\n  }\n})\n")))}d.isMDXComponent=!0},5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);