"use strict";(self.webpackChunksocialicity_assesment_app=self.webpackChunksocialicity_assesment_app||[]).push([[140],{6140:function(n,t,e){e.d(t,{x7:function(){return Tn},Am:function(){return R}});var r=e(2791),o=e(4942),i={data:""},a=function(n){return"object"==typeof window?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||i},s=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,u=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,f=function n(t,e){var r="",o="",i="",a=function(a){var u=t[a];"@"==a[0]?"i"==a[1]?r=a+" "+u+";":o+="f"==a[1]?n(u,a):a+"{"+n(u,"k"==a[1]?"":e)+"}":"object"==typeof u?o+=n(u,e?e.replace(/([^,])+/g,(function(n){return a.replace(/(^:.*)|([^,])+/g,(function(t){return/&/.test(t)?t.replace(/&/g,n):n?n+" "+t:t}))})):a):null!=u&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=n.p?n.p(a,u):a+":"+u+";"),s=a};for(var s in t)a(s);return r+(e&&i?e+"{"+i+"}":i)+o},d={},l=function n(t){if("object"==typeof t){var e="";for(var r in t)e+=r+n(t[r]);return e}return t},p=function(n,t,e,r,i){var a=l(n),p=d[a]||(d[a]=function(n){for(var t=0,e=11;t<n.length;)e=101*e+n.charCodeAt(t++)>>>0;return"go"+e}(a));if(!d[p]){var m=a!==n?n:function(n){for(var t,e,r=[{}];t=s.exec(n.replace(u,""));)t[4]?r.shift():t[3]?(e=t[3].replace(c," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][t[1]]=t[2].replace(c," ").trim();return r[0]}(n);d[p]=f(i?(0,o.Z)({},"@keyframes "+p,m):m,e?"":"."+p)}return function(n,t,e){-1==t.data.indexOf(n)&&(t.data=e?n+t.data:t.data+n)}(d[p],t,r),p},m=function(n,t,e){return n.reduce((function(n,r,o){var i=t[o];if(i&&i.call){var a=i(e),s=a&&a.props&&a.props.className||/^go/.test(a)&&a;i=s?"."+s:a&&"object"==typeof a?a.props?"":f(a,""):!1===a?"":a}return n+r+(null==i?"":i)}),"")};function v(n){var t=this||{},e=n.call?n(t.p):n;return p(e.unshift?e.raw?m(e,[].slice.call(arguments,1),t.p):e.reduce((function(n,e){return Object.assign(n,e&&e.call?e(t.p):e)}),{}):e,a(t.target),t.g,t.o,t.k)}v.bind({g:1});var g,y,h,b=v.bind({k:1});function T(n,t){var e=this||{};return function(){var r=arguments;function o(i,a){var s=Object.assign({},i),u=s.className||o.className;e.p=Object.assign({theme:y&&y()},s),e.o=/ *go\d+/.test(u),s.className=v.apply(e,r)+(u?" "+u:""),t&&(s.ref=a);var c=n;return n[0]&&(c=s.as||n,delete s.as),h&&c[0]&&h(s),g(c,s)}return t?t(o):o}}function x(){return x=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},x.apply(this,arguments)}function S(n,t){return t||(t=n.slice(0)),n.raw=t,n}var A,E=function(n,t){return function(n){return"function"===typeof n}(n)?n(t):n},O=function(){var n=0;return function(){return(++n).toString()}}(),w=function(){var n=void 0;return function(){if(void 0===n&&"undefined"!==typeof window){var t=matchMedia("(prefers-reduced-motion: reduce)");n=!t||t.matches}return n}}();!function(n){n[n.ADD_TOAST=0]="ADD_TOAST",n[n.UPDATE_TOAST=1]="UPDATE_TOAST",n[n.UPSERT_TOAST=2]="UPSERT_TOAST",n[n.DISMISS_TOAST=3]="DISMISS_TOAST",n[n.REMOVE_TOAST=4]="REMOVE_TOAST",n[n.START_PAUSE=5]="START_PAUSE",n[n.END_PAUSE=6]="END_PAUSE"}(A||(A={}));var _=new Map,D=function(n){if(!_.has(n)){var t=setTimeout((function(){_.delete(n),U({type:A.REMOVE_TOAST,toastId:n})}),1e3);_.set(n,t)}},P=function n(t,e){switch(e.type){case A.ADD_TOAST:return x({},t,{toasts:[e.toast].concat(t.toasts).slice(0,20)});case A.UPDATE_TOAST:return e.toast.id&&function(n){var t=_.get(n);t&&clearTimeout(t)}(e.toast.id),x({},t,{toasts:t.toasts.map((function(n){return n.id===e.toast.id?x({},n,e.toast):n}))});case A.UPSERT_TOAST:var r=e.toast;return t.toasts.find((function(n){return n.id===r.id}))?n(t,{type:A.UPDATE_TOAST,toast:r}):n(t,{type:A.ADD_TOAST,toast:r});case A.DISMISS_TOAST:var o=e.toastId;return o?D(o):t.toasts.forEach((function(n){D(n.id)})),x({},t,{toasts:t.toasts.map((function(n){return n.id===o||void 0===o?x({},n,{visible:!1}):n}))});case A.REMOVE_TOAST:return void 0===e.toastId?x({},t,{toasts:[]}):x({},t,{toasts:t.toasts.filter((function(n){return n.id!==e.toastId}))});case A.START_PAUSE:return x({},t,{pausedAt:e.time});case A.END_PAUSE:var i=e.time-(t.pausedAt||0);return x({},t,{pausedAt:void 0,toasts:t.toasts.map((function(n){return x({},n,{pauseDuration:n.pauseDuration+i})}))})}},j=[],k={toasts:[],pausedAt:void 0},U=function(n){k=P(k,n),j.forEach((function(n){n(k)}))},I={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},M=function(n){return function(t,e){var r=function(n,t,e){return void 0===t&&(t="blank"),x({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0},e,{id:(null==e?void 0:e.id)||O()})}(t,n,e);return U({type:A.UPSERT_TOAST,toast:r}),r.id}},R=function(n,t){return M("blank")(n,t)};R.error=M("error"),R.success=M("success"),R.loading=M("loading"),R.custom=M("custom"),R.dismiss=function(n){U({type:A.DISMISS_TOAST,toastId:n})},R.remove=function(n){return U({type:A.REMOVE_TOAST,toastId:n})},R.promise=function(n,t,e){var r=R.loading(t.loading,x({},e,null==e?void 0:e.loading));return n.then((function(n){return R.success(E(t.success,n),x({id:r},e,null==e?void 0:e.success)),n})).catch((function(n){R.error(E(t.error,n),x({id:r},e,null==e?void 0:e.error))})),n};var N=function(n){var t=function(n){void 0===n&&(n={});var t=(0,r.useState)(k),e=t[0],o=t[1];(0,r.useEffect)((function(){return j.push(o),function(){var n=j.indexOf(o);n>-1&&j.splice(n,1)}}),[e]);var i=e.toasts.map((function(t){var e,r,o;return x({},n,n[t.type],t,{duration:t.duration||(null==(e=n[t.type])?void 0:e.duration)||(null==(r=n)?void 0:r.duration)||I[t.type],style:x({},n.style,null==(o=n[t.type])?void 0:o.style,t.style)})}));return x({},e,{toasts:i})}(n),e=t.toasts,o=t.pausedAt;(0,r.useEffect)((function(){if(!o){var n=Date.now(),t=e.map((function(t){if(t.duration!==1/0){var e=(t.duration||0)+t.pauseDuration-(n-t.createdAt);if(!(e<0))return setTimeout((function(){return R.dismiss(t.id)}),e);t.visible&&R.dismiss(t.id)}}));return function(){t.forEach((function(n){return n&&clearTimeout(n)}))}}}),[e,o]);var i=(0,r.useMemo)((function(){return{startPause:function(){U({type:A.START_PAUSE,time:Date.now()})},endPause:function(){o&&U({type:A.END_PAUSE,time:Date.now()})},updateHeight:function(n,t){return U({type:A.UPDATE_TOAST,toast:{id:n,height:t}})},calculateOffset:function(n,t){var r,o=t||{},i=o.reverseOrder,a=void 0!==i&&i,s=o.gutter,u=void 0===s?8:s,c=o.defaultPosition,f=e.filter((function(t){return(t.position||c)===(n.position||c)&&t.height})),d=f.findIndex((function(t){return t.id===n.id})),l=f.filter((function(n,t){return t<d&&n.visible})).length,p=(r=f.filter((function(n){return n.visible}))).slice.apply(r,a?[l+1]:[0,l]).reduce((function(n,t){return n+(t.height||0)+u}),0);return p}}}),[e,o]);return{toasts:e,handlers:i}};function z(){var n=S(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);return z=function(){return n},n}function C(){var n=S(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]);return C=function(){return n},n}function F(){var n=S(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return F=function(){return n},n}function V(){var n=S(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]);return V=function(){return n},n}var H=b(V()),L=b(F()),Z=b(C()),q=T("div")(z(),(function(n){return n.primary||"#ff4b4b"}),H,L,(function(n){return n.secondary||"#fff"}),Z);function B(){var n=S(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"]);return B=function(){return n},n}function Y(){var n=S(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return Y=function(){return n},n}var $=b(Y()),G=T("div")(B(),(function(n){return n.secondary||"#e0e0e0"}),(function(n){return n.primary||"#616161"}),$);function J(){var n=S(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);return J=function(){return n},n}function K(){var n=S(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]);return K=function(){return n},n}function Q(){var n=S(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]);return Q=function(){return n},n}var W=b(Q()),X=b(K()),nn=T("div")(J(),(function(n){return n.primary||"#61d345"}),W,X,(function(n){return n.secondary||"#fff"}));function tn(){var n=S(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);return tn=function(){return n},n}function en(){var n=S(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return en=function(){return n},n}function rn(){var n=S(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);return rn=function(){return n},n}function on(){var n=S(["\n  position: absolute;\n"]);return on=function(){return n},n}var an=T("div")(on()),sn=T("div")(rn()),un=b(en()),cn=T("div")(tn(),un),fn=function(n){var t=n.toast,e=t.icon,o=t.type,i=t.iconTheme;return void 0!==e?"string"===typeof e?(0,r.createElement)(cn,null,e):e:"blank"===o?null:(0,r.createElement)(sn,null,(0,r.createElement)(G,Object.assign({},i)),"loading"!==o&&(0,r.createElement)(an,null,"error"===o?(0,r.createElement)(q,Object.assign({},i)):(0,r.createElement)(nn,Object.assign({},i))))};function dn(){var n=S(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]);return dn=function(){return n},n}function ln(){var n=S(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);return ln=function(){return n},n}var pn=function(n){return"\n0% {transform: translate3d(0,"+-200*n+"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"},mn=function(n){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,"+-150*n+"%,-1px) scale(.6); opacity:0;}\n"},vn=T("div",r.forwardRef)(ln()),gn=T("div")(dn()),yn=(0,r.memo)((function(n){var t=n.toast,e=n.position,o=n.style,i=n.children,a=null!=t&&t.height?function(n,t){var e=n.includes("top")?1:-1,r=w()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[pn(e),mn(e)],o=r[1];return{animation:t?b(r[0])+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":b(o)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}}(t.position||e||"top-center",t.visible):{opacity:0},s=(0,r.createElement)(fn,{toast:t}),u=(0,r.createElement)(gn,Object.assign({},t.ariaProps),E(t.message,t));return(0,r.createElement)(vn,{className:t.className,style:x({},a,o,t.style)},"function"===typeof i?i({icon:s,message:u}):(0,r.createElement)(r.Fragment,null,s,u))}));function hn(){var n=S(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]);return hn=function(){return n},n}!function(n,t,e,r){f.p=t,g=n,y=e,h=r}(r.createElement);var bn=v(hn()),Tn=function(n){var t=n.reverseOrder,e=n.position,o=void 0===e?"top-center":e,i=n.toastOptions,a=n.gutter,s=n.children,u=n.containerStyle,c=n.containerClassName,f=N(i),d=f.toasts,l=f.handlers;return(0,r.createElement)("div",{style:x({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},u),className:c,onMouseEnter:l.startPause,onMouseLeave:l.endPause},d.map((function(n){var e,i=n.position||o,u=function(n,t){var e=n.includes("top"),r=e?{top:0}:{bottom:0},o=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return x({left:0,right:0,display:"flex",position:"absolute",transition:w()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+t*(e?1:-1)+"px)"},r,o)}(i,l.calculateOffset(n,{reverseOrder:t,gutter:a,defaultPosition:o})),c=n.height?void 0:(e=function(t){l.updateHeight(n.id,t.height)},function(n){n&&setTimeout((function(){var t=n.getBoundingClientRect();e(t)}))});return(0,r.createElement)("div",{ref:c,className:n.visible?bn:"",key:n.id,style:u},"custom"===n.type?E(n.message,n):s?s(n):(0,r.createElement)(yn,{toast:n,position:i}))})))}}}]);
//# sourceMappingURL=140.fd073cb1.chunk.js.map