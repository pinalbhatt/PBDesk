(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[681],{2167:function(e,t,r){"use strict";var n=r(3038);t.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},s=r(1063),c=r(4651),l=r(7426);var i={};function u(e,t,r,n){if(e&&s.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;i[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,o=c.useRouter(),f=a.default.useMemo((function(){var t=s.resolveHref(o,e.href,!0),r=n(t,2),a=r[0],c=r[1];return{href:a,as:e.as?s.resolveHref(o,e.as):c||a}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,m=e.shallow,y=e.scroll,x=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var j=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,g=l.useIntersection({rootMargin:"200px"}),b=n(g,2),w=b[0],N=b[1],E=a.default.useCallback((function(e){w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,w]);a.default.useEffect((function(){var e=N&&r&&s.isLocalURL(d),t="undefined"!==typeof x?x:o&&o.locale,n=i[d+"%"+p+(t?"%"+t:"")];e&&!n&&u(o,d,p,{locale:t})}),[p,d,N,x,r,o]);var R={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:l,scroll:c}))}(e,o,d,p,v,m,y,x)},onMouseEnter:function(e){s.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof x?x:o&&o.locale,O=o&&o.isLocaleDomain&&s.getDomainLocale(p,_,o&&o.locales,o&&o.domainLocales);R.href=O||s.addBasePath(s.addLocale(p,_,o&&o.defaultLocale))}return a.default.cloneElement(t,R)};t.default=f},7426:function(e,t,r){"use strict";var n=r(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!s,l=o.useRef(),i=o.useState(!1),u=n(i,2),f=u[0],d=u[1],p=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||f||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,s=n.elements;return s.set(e,t),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return o.useEffect((function(){if(!s&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=r(7294),a=r(3447),s="undefined"!==typeof IntersectionObserver;var c=new Map},333:function(e,t,r){"use strict";r.r(t);var n=r(5671),o=r(3144),a=r(9340),s=r(6215),c=r(1120),l=r(7294),i=r(9672),u=r(7251),f=r(1613),d=r(1664),p=r(5893);function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var o=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var v=function(e){(0,a.Z)(r,e);var t=h(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"render",value:function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.Z,{}),(0,p.jsx)(u.Z,{pageTitle:"Recover Password",homePageUrl:"/",homePageText:"Home",activePageText:"Recover Password"}),(0,p.jsx)("section",{className:"user-area-all-style recover-password-area ptb-100",children:(0,p.jsx)("div",{className:"container",children:(0,p.jsx)("div",{className:"row",children:(0,p.jsx)("div",{className:"col-12",children:(0,p.jsxs)("div",{className:"contact-form-action",children:[(0,p.jsxs)("div",{className:"form-heading text-center",children:[(0,p.jsx)("h3",{className:"form-title",children:"Reset Password!"}),(0,p.jsxs)("p",{className:"reset-desc",children:["Enter the email of your account to reset the password. Then you will receive a link to email to reset the password. If you have any issue about reset password ",(0,p.jsx)(d.default,{href:"/contact",children:(0,p.jsx)("a",{children:"contact us."})})]})]}),(0,p.jsx)("form",{method:"post",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-12",children:(0,p.jsx)("div",{className:"form-group",children:(0,p.jsx)("input",{className:"form-control",type:"text",name:"name",placeholder:"Enter Email Address"})})}),(0,p.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6",children:(0,p.jsx)(d.default,{href:"/login",children:(0,p.jsx)("a",{className:"now-log-in font-q",children:"Log In"})})}),(0,p.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6",children:(0,p.jsxs)("p",{className:"now-register",children:["Not a member? \xa0",(0,p.jsx)(d.default,{href:"/sign-up",children:(0,p.jsx)("a",{className:"font-q",children:"Register"})})]})}),(0,p.jsx)("div",{className:"col-12",children:(0,p.jsx)("button",{className:"default-btn btn-two",type:"submit",children:"Reset Password"})})]})})]})})})})}),(0,p.jsx)(f.Z,{})]})}}]),r}(l.Component);t.default=v},4689:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/recover-password",function(){return r(333)}])},1664:function(e,t,r){e.exports=r(2167)},1163:function(e,t,r){e.exports=r(4651)},4925:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,{Z:function(){return n}})}},function(e){e.O(0,[884,774,888,179],(function(){return t=4689,e(e.s=t);var t}));var t=e.O();_N_E=t}]);