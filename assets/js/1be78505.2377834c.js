"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[514,742],{1246:(e,t,n)=>{n.r(t),n.d(t,{default:()=>nt});var a=n(7378),r=n(8944),l=n(9032),o=n(1149),i=n(6127),c=n(9390),s=n(2180),d=n(9901),m=n(367),u=n(6381),b=n(2112),p=n(3947);const f="backToTopButton_iEvu",v="backToTopButtonShow_DO8w";function h(){const{shown:e,scrollToTop:t}=function({threshold:e}){const[t,n]=(0,a.useState)(!1),r=(0,a.useRef)(!1),{startScroll:l,cancelScroll:o}=(0,b.Ct)();return(0,b.RF)((({scrollY:t},a)=>{const l=null==a?void 0:a.scrollY;l&&(r.current?r.current=!1:t>=l?(o(),n(!1)):t<e?n(!1):t+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),(0,p.S)((e=>{e.location.hash&&(r.current=!0,n(!1))})),{shown:t,scrollToTop:()=>l(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",o.k.common.backToTopButton,f,e&&v),type:"button",onClick:t})}var E=n(5331),g=n(9453),y=n(7371),_=n(5778),k=Object.defineProperty,C=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,S=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function w(e){return a.createElement("svg",((e,t)=>{for(var n in t||(t={}))I.call(t,n)&&S(e,n,t[n]);if(C)for(var n of C(t))O.call(t,n)&&S(e,n,t[n]);return e})({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const N="collapseSidebarButton_oTwn",x="collapseSidebarButtonIcon_pMEX";function P({onClick:e}){return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",N),onClick:e},a.createElement(w,{className:x}))}var j=n(8127),T=n(5071);const Z=Symbol("EmptyContext"),L=a.createContext(Z);function A({children:e}){const[t,n]=(0,a.useState)(null),r=(0,a.useMemo)((()=>({expandedItem:t,setExpandedItem:n})),[t]);return a.createElement(L.Provider,{value:r},e)}var M=n(7310),B=n(2181),F=n(3067),H=n(4185),R=Object.defineProperty,D=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,Y=(e,t,n)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function z({categoryLabel:e,onClick:t}){return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:e}),type:"button",className:"clean-btn menu__caret",onClick:t})}function U(e){var t=e,{item:n,onItemClick:l,activePath:i,level:s,index:d}=t,m=((e,t)=>{var n={};for(var a in e)V.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&D)for(var a of D(e))t.indexOf(a)<0&&W.call(e,a)&&(n[a]=e[a]);return n})(t,["item","onItemClick","activePath","level","index"]);const{items:u,label:b,collapsible:p,className:f,href:v}=n,{docs:{sidebar:{autoCollapseCategories:h}}}=(0,y.L)(),E=function(e){const t=(0,H.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0),[e,t])}(n),g=(0,c._F)(n,i),_=(0,B.Mg)(v,i),{collapsed:k,setCollapsed:C}=(0,M.u)({initialState:()=>!!p&&(!g&&n.collapsed)}),{expandedItem:I,setExpandedItem:O}=function(){const e=(0,a.useContext)(L);if(e===Z)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),S=(e=!k)=>{O(e?null:d),C(e)};return function({isActive:e,collapsed:t,updateCollapsed:n}){const r=(0,T.D9)(e);(0,a.useEffect)((()=>{e&&!r&&t&&n(!1)}),[e,r,t,n])}({isActive:g,collapsed:k,updateCollapsed:S}),(0,a.useEffect)((()=>{p&&null!=I&&I!==d&&h&&C(!0)}),[p,I,d,C,h]),a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(s),"menu__list-item",{"menu__list-item--collapsed":k},f)},a.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},a.createElement(F.Z,((e,t)=>{for(var n in t||(t={}))V.call(t,n)&&Y(e,n,t[n]);if(D)for(var n of D(t))W.call(t,n)&&Y(e,n,t[n]);return e})({className:(0,r.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!v&&p,"menu__link--active":g}),onClick:p?e=>{null==l||l(n),v?S(!1):(e.preventDefault(),S())}:()=>{null==l||l(n)},"aria-current":_?"page":void 0,"aria-expanded":p?!k:void 0,href:p?null!=E?E:"#":E},m),b),v&&p&&a.createElement(z,{categoryLabel:b,onClick:e=>{e.preventDefault(),S()}})),a.createElement(M.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(he,{items:u,tabIndex:k?-1:0,onItemClick:l,activePath:i,level:s+1})))}var G=n(4513),K=n(556);const q="menuExternalLink_BiEj";var J=Object.defineProperty,Q=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,ee=(e,t,n)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,te=(e,t)=>{for(var n in t||(t={}))X.call(t,n)&&ee(e,n,t[n]);if(Q)for(var n of Q(t))$.call(t,n)&&ee(e,n,t[n]);return e};function ne(e){var t=e,{item:n,onItemClick:l,activePath:i,level:s,index:d}=t,m=((e,t)=>{var n={};for(var a in e)X.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&Q)for(var a of Q(e))t.indexOf(a)<0&&$.call(e,a)&&(n[a]=e[a]);return n})(t,["item","onItemClick","activePath","level","index"]);const{href:u,label:b,className:p,autoAddBaseUrl:f}=n,v=(0,c._F)(n,i),h=(0,G.Z)(u);return a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(s),"menu__list-item",p),key:b},a.createElement(F.Z,te(te({className:(0,r.Z)("menu__link",!h&&q,{"menu__link--active":v}),autoAddBaseUrl:f,"aria-current":v?"page":void 0,to:u},h&&{onClick:l?()=>l(n):void 0}),m),b,!h&&a.createElement(K.Z,null)))}const ae="menuHtmlItem_OniL";function re({item:e,level:t,index:n}){const{value:l,defaultStyle:i,className:c}=e;return a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(t),i&&[ae,"menu__list-item"],c),key:n,dangerouslySetInnerHTML:{__html:l}})}var le=Object.defineProperty,oe=Object.getOwnPropertySymbols,ie=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable,se=(e,t,n)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,de=(e,t)=>{for(var n in t||(t={}))ie.call(t,n)&&se(e,n,t[n]);if(oe)for(var n of oe(t))ce.call(t,n)&&se(e,n,t[n]);return e};function me(e){var t=e,{item:n}=t,r=((e,t)=>{var n={};for(var a in e)ie.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&oe)for(var a of oe(e))t.indexOf(a)<0&&ce.call(e,a)&&(n[a]=e[a]);return n})(t,["item"]);switch(n.type){case"category":return a.createElement(U,de({item:n},r));case"html":return a.createElement(re,de({item:n},r));default:return a.createElement(ne,de({item:n},r))}}var ue=Object.defineProperty,be=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,ve=(e,t,n)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const he=(0,a.memo)((function(e){var t=e,{items:n}=t,r=((e,t)=>{var n={};for(var a in e)pe.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&be)for(var a of be(e))t.indexOf(a)<0&&fe.call(e,a)&&(n[a]=e[a]);return n})(t,["items"]);return a.createElement(A,null,n.map(((e,t)=>a.createElement(me,((e,t)=>{for(var n in t||(t={}))pe.call(t,n)&&ve(e,n,t[n]);if(be)for(var n of be(t))fe.call(t,n)&&ve(e,n,t[n]);return e})({key:t,item:e,index:t},r)))))})),Ee="menu_jmj1",ge="menuWithAnnouncementBar_YufC";function ye({path:e,sidebar:t,className:n}){const l=function(){const{isActive:e}=(0,j.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((({scrollY:t})=>{e&&n(0===t)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,r.Z)("menu thin-scrollbar",Ee,l&&ge,n)},a.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(he,{items:t,activePath:e,level:1})))}const _e="sidebar_CUen",ke="sidebarWithHideableNavbar_w4KB",Ce="sidebarHidden_k6VE",Ie="sidebarLogo_CYvI";const Oe=a.memo((function({path:e,sidebar:t,onCollapse:n,isHidden:l}){const{navbar:{hideOnScroll:o},docs:{sidebar:{hideable:i}}}=(0,y.L)();return a.createElement("div",{className:(0,r.Z)(_e,o&&ke,l&&Ce)},o&&a.createElement(_.Z,{tabIndex:-1,className:Ie}),a.createElement(ye,{path:e,sidebar:t}),i&&a.createElement(P,{onClick:n}))}));var Se=n(8561),we=n(1273);const Ne=({sidebar:e,path:t})=>{const n=(0,we.e)();return a.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(he,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1}))};const xe=a.memo((function(e){return a.createElement(Se.Zo,{component:Ne,props:e})}));var Pe=Object.defineProperty,je=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,Le=(e,t,n)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ae=(e,t)=>{for(var n in t||(t={}))Te.call(t,n)&&Le(e,n,t[n]);if(je)for(var n of je(t))Ze.call(t,n)&&Le(e,n,t[n]);return e};function Me(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(Oe,Ae({},e)),r&&a.createElement(xe,Ae({},e)))}const Be="expandButton_YOoA",Fe="expandButtonIcon_GZLG";function He({toggleSidebar:e}){return a.createElement("div",{className:Be,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e},a.createElement(w,{className:Fe}))}const Re={docSidebarContainer:"docSidebarContainer_y0RQ",docSidebarContainerHidden:"docSidebarContainerHidden_uArb",sidebarViewport:"sidebarViewport_EJ1r"};function De({children:e}){var t;const n=(0,d.V)();return a.createElement(a.Fragment,{key:null!=(t=null==n?void 0:n.name)?t:"noSidebar"},e)}function Ve({sidebar:e,hiddenSidebarContainer:t,setHiddenSidebarContainer:n}){const{pathname:l}=(0,E.TH)(),[i,c]=(0,a.useState)(!1),s=(0,a.useCallback)((()=>{i&&c(!1),n((e=>!e))}),[n,i]);return a.createElement("aside",{className:(0,r.Z)(o.k.docs.docSidebarContainer,Re.docSidebarContainer,t&&Re.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(Re.docSidebarContainer)&&t&&c(!0)}},a.createElement(De,null,a.createElement("div",{className:(0,r.Z)(Re.sidebarViewport,i&&Re.sidebarViewportHidden)},a.createElement(Me,{sidebar:e,path:l,onCollapse:s,isHidden:i}),i&&a.createElement(He,{toggleSidebar:s}))))}const We={docMainContainer:"docMainContainer_sTIZ",docMainContainerEnhanced:"docMainContainerEnhanced_iSjt",docItemWrapperEnhanced:"docItemWrapperEnhanced_PxMR"};function Ye({hiddenSidebarContainer:e,children:t}){const n=(0,d.V)();return a.createElement("main",{className:(0,r.Z)(We.docMainContainer,(e||!n)&&We.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",We.docItemWrapper,e&&We.docItemWrapperEnhanced)},t))}const ze="docPage_KLoz",Ue="docsWrapper_ct1J";function Ge({children:e}){const t=(0,d.V)(),[n,r]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:Ue},a.createElement(h,null),a.createElement("div",{className:ze},t&&a.createElement(Ve,{sidebar:t.items,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}),a.createElement(Ye,{hiddenSidebarContainer:n},e)))}var Ke=n(9742),qe=n(512),Je=Object.defineProperty,Qe=Object.getOwnPropertySymbols,Xe=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable,et=(e,t,n)=>t in e?Je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function tt(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(qe.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(l.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function nt(e){const{versionMetadata:t}=e,n=(0,c.hI)(e);if(!n)return a.createElement(Ke.default,null);const{docElement:i,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(tt,((e,t)=>{for(var n in t||(t={}))Xe.call(t,n)&&et(e,n,t[n]);if(Qe)for(var n of Qe(t))$e.call(t,n)&&et(e,n,t[n]);return e})({},e)),a.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(Ge,null,i)))))}},9742:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(7378),r=n(6381),l=n(9032),o=n(367);function i(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},2180:(e,t,n)=>{n.d(t,{E:()=>i,q:()=>o});var a=n(7378),r=n(5071);const l=a.createContext(null);function o({children:e,version:t}){return a.createElement(l.Provider,{value:t},e)}function i(){const e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);