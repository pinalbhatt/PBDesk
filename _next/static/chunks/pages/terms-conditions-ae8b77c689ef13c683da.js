(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[898],{2167:function(e,t,n){"use strict";var o=n(3038);t.default=void 0;var r,i=(r=n(7294))&&r.__esModule?r:{default:r},a=n(1063),s=n(4651),u=n(7426);var l={};function c(e,t,n,o){if(e&&a.isLocalURL(t)){e.prefetch(t,n,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=s.useRouter(),d=i.default.useMemo((function(){var t=a.resolveHref(r,e.href,!0),n=o(t,2),i=n[0],s=n[1];return{href:i,as:e.as?a.resolveHref(r,e.as):s||i}}),[r,e.href,e.as]),f=d.href,p=d.as,m=e.children,h=e.replace,v=e.shallow,y=e.scroll,g=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var b=(t=i.default.Children.only(m))&&"object"===typeof t&&t.ref,x=u.useIntersection({rootMargin:"200px"}),w=o(x,2),q=w[0],k=w[1],L=i.default.useCallback((function(e){q(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,q]);i.default.useEffect((function(){var e=k&&n&&a.isLocalURL(f),t="undefined"!==typeof g?g:r&&r.locale,o=l[f+"%"+p+(t?"%"+t:"")];e&&!o&&c(r,f,p,{locale:t})}),[p,f,k,g,n,r]);var I={ref:L,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,i,s,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==s&&o.indexOf("#")>=0&&(s=!1),t[r?"replace":"push"](n,o,{shallow:i,locale:u,scroll:s}))}(e,r,f,p,h,v,y,g)},onMouseEnter:function(e){a.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c(r,f,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var j="undefined"!==typeof g?g:r&&r.locale,C=r&&r.isLocaleDomain&&a.getDomainLocale(p,j,r&&r.locales,r&&r.domainLocales);I.href=C||a.addBasePath(a.addLocale(p,j,r&&r.defaultLocale))}return i.default.cloneElement(t,I)};t.default=d},7426:function(e,t,n){"use strict";var o=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,u=r.useRef(),l=r.useState(!1),c=o(l,2),d=c[0],f=c[1],p=r.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,t,n){var o=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var o=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:r,elements:o}),n}(n),r=o.id,i=o.observer,a=o.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),s.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return r.useEffect((function(){if(!a&&!d){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),[p,d]};var r=n(7294),i=n(3447),a="undefined"!==typeof IntersectionObserver;var s=new Map},6155:function(e,t,n){"use strict";n.r(t);var o=n(5671),r=n(3144),i=n(9340),a=n(6215),s=n(1120),u=n(7294),l=n(9672),c=n(7251),d=n(1613),f=n(5893);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,s.Z)(e);if(t){var r=(0,s.Z)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,a.Z)(this,n)}}var m=function(e){(0,i.Z)(n,e);var t=p(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,r.Z)(n,[{key:"render",value:function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.Z,{}),(0,f.jsx)(c.Z,{pageTitle:"Terms & Conditions",homePageUrl:"/",homePageText:"Home",activePageText:"Terms & Conditions"}),(0,f.jsx)("div",{className:"text-container ptb-100",children:(0,f.jsxs)("div",{className:"container",children:[(0,f.jsx)("h3",{children:"What is lorem ipsum?"}),(0,f.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),(0,f.jsx)("h3",{children:"Where does it come from?"}),(0,f.jsx)("p",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..".'}),(0,f.jsx)("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla"}),(0,f.jsx)("h3",{children:"Where can I get some?"}),(0,f.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."}),(0,f.jsx)("p",{children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected."}),(0,f.jsx)("p",{children:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that"})]})}),(0,f.jsx)(d.Z,{})]})}}]),n}(u.Component);t.default=m},6064:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/terms-conditions",function(){return n(6155)}])},1664:function(e,t,n){e.exports=n(2167)},1163:function(e,t,n){e.exports=n(4651)},4925:function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return o}})}},function(e){e.O(0,[884,774,888,179],(function(){return t=6064,e(e.s=t);var t}));var t=e.O();_N_E=t}]);