var b=Object.defineProperty;var a=(t,o)=>b(t,"name",{value:o,configurable:!0});import"./iframe-2905bf81.js";import{R as n}from"./index-7d015b99.js";import{R as h}from"./index-2408a976.js";var E={fontSize:"14px",letterSpacing:"0.2px",margin:"10px 0"},k={margin:"auto",padding:30,borderRadius:10,background:"rgba(0,0,0,0.03)"},w={textAlign:"center"},v=a(function(){return n.createElement("div",{style:E,className:"sb-nodocs sb-wrapper"},n.createElement("div",{style:k},n.createElement("h1",{style:w},"No Docs"),n.createElement("p",null,"Sorry, but there are no docs for the selected story. To add them, set the story's ",n.createElement("code",null,"docs")," parameter. If you think this is an error:"),n.createElement("ul",null,n.createElement("li",null,"Please check the story definition."),n.createElement("li",null,"Please check the Storybook config."),n.createElement("li",null,"Try reloading the page.")),n.createElement("p",null,"If the problem persists, check the browser console, or the terminal you've run Storybook from.")))},"NoDocs");v.displayName="NoDocs";function g(t,o,i,s,u,c,r){try{var d=t[c](r),l=d.value}catch(m){i(m);return}d.done?o(l):Promise.resolve(l).then(s,u)}a(g,"asyncGeneratorStep");function D(t){return function(){var o=this,i=arguments;return new Promise(function(s,u){var c=t.apply(o,i);function r(l){g(c,s,u,r,d,"next",l)}a(r,"_next");function d(l){g(c,s,u,r,d,"throw",l)}a(d,"_throw"),r(void 0)})}}a(D,"_asyncToGenerator");function I(t,o,i,s){return P(t,o,i).then(s)}a(I,"renderDocs");function P(t,o,i){return f.apply(this,arguments)}a(P,"renderDocsAsync");function f(){return f=D(regeneratorRuntime.mark(a(function t(o,i,s){var u,c,r,d,l,m;return regeneratorRuntime.wrap(a(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=o.parameters.docs,!((r!=null&&r.getPage||r!=null&&r.page)&&!(r!=null&&r.getContainer||r!=null&&r.container))){e.next=3;break}throw new Error("No `docs.container` set, did you run `addon-docs/preset`?");case 3:if(e.t1=r.container,e.t1){e.next=8;break}return e.next=7,(u=r.getContainer)===null||u===void 0?void 0:u.call(r);case 7:e.t1=e.sent;case 8:if(e.t0=e.t1,e.t0){e.next=11;break}e.t0=function(p){var y=p.children;return n.createElement(n.Fragment,null,y)};case 11:if(d=e.t0,e.t3=r.page,e.t3){e.next=17;break}return e.next=16,(c=r.getPage)===null||c===void 0?void 0:c.call(r);case 16:e.t3=e.sent;case 17:if(e.t2=e.t3,e.t2){e.next=20;break}e.t2=v;case 20:return l=e.t2,m=n.createElement(d,{key:o.componentId,context:i},n.createElement(l,null)),e.next=24,new Promise(function(p){h.render(m,s,p)});case 24:case"end":return e.stop()}},"_callee$"),t)},"_callee"))),f.apply(this,arguments)}a(f,"_renderDocsAsync");function T(t){h.unmountComponentAtNode(t)}a(T,"unmountDocs");export{I as renderDocs,T as unmountDocs};
//# sourceMappingURL=renderDocs-6e66045b.js.map
