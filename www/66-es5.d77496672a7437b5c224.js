function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function asyncGeneratorStep(e,r,t,n,i,s,o){try{var a=e[s](o),l=a.value}catch(c){return void t(c)}a.done?r(l):Promise.resolve(l).then(n,i)}function _asyncToGenerator(e){return function(){var r=this,t=arguments;return new Promise((function(n,i){var s=e.apply(r,t);function o(e){asyncGeneratorStep(s,n,i,o,a,"next",e)}function a(e){asyncGeneratorStep(s,n,i,o,a,"throw",e)}o(void 0)}))}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{RODS:function(e,r,t){"use strict";t.r(r),t.d(r,"ion_refresher",(function(){return v})),t.d(r,"ion_refresher_content",(function(){return y}));var n=t("54nT"),i=t("AfW+"),s=t("aiEM"),o=t("iAHb"),a=t("0AIG"),l=(t("AzGJ"),t("MTcp"),t("kBU6"),t("MgeF"),t("u6aj"),t("YtD4")),c=t("TMBv"),f={getEngine:function(){var e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(e){var r=this.getEngine();if(r){var t=this.isCapacitor()?e.style.toUpperCase():e.style;r.impact({style:t})}},notification:function(e){var r=this.getEngine();if(r){var t=this.isCapacitor()?e.style.toUpperCase():e.style;r.notification({style:t})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())}},h=function(e){var r=e.querySelector("ion-spinner"),t=r.shadowRoot.querySelector("circle"),n=e.querySelector(".spinner-arrow-container"),i=e.querySelector(".arrow-container"),s=i?i.querySelector("ion-icon"):null,a=Object(o.a)().duration(1e3).easing("ease-out"),l=Object(o.a)().addElement(n).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),c=Object(o.a)().addElement(t).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),f=Object(o.a)().addElement(r).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(i&&s){var h=Object(o.a)().addElement(i).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),u=Object(o.a)().addElement(s).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);a.addAnimation([h,u])}return a.addAnimation([l,c,f])},u=function(e,r){e.style.setProperty("opacity",r.toString())},p=function(e,r){if(!e)return Promise.resolve();var t=g(e);return Object(n.l)((function(){e.style.setProperty("transition","0.2s all ease-out"),void 0===r?e.style.removeProperty("transform"):e.style.setProperty("transform","translate3d(0px, ".concat(r,", 0px)"))})),t},d=function(e,r){var t=e.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),n=e.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");return null!==t&&null!==n&&("ios"===r&&Object(i.f)("mobile")&&void 0!==e.style.webkitOverflowScrolling||"md"===r)},g=function(e){return new Promise((function(r){m(e,r)}))},m=function(e,r){var t,n={passive:!0},i=function(){t&&t()},s=function(t){e===t.target&&(i(),r(t))};return e&&(e.addEventListener("webkitTransitionEnd",s,n),e.addEventListener("transitionend",s,n),t=function(){e.removeEventListener("webkitTransitionEnd",s,n),e.removeEventListener("transitionend",s,n)}),i},v=function(){function e(r){_classCallCheck(this,e),Object(n.k)(this,r),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.pointerDown=!1,this.needsCompletion=!1,this.didRefresh=!1,this.lastVelocityY=0,this.animations=[],this.nativeRefresher=!1,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1,this.ionRefresh=Object(n.e)(this,"ionRefresh",7),this.ionPull=Object(n.e)(this,"ionPull",7),this.ionStart=Object(n.e)(this,"ionStart",7)}var r,i,l,c,m,v,y;return _createClass(e,[{key:"disabledChanged",value:function(){this.gesture&&this.gesture.enable(!this.disabled)}},{key:"checkNativeRefresher",value:function(){var e=d(this.el,Object(n.d)(this));if(e&&!this.nativeRefresher){var r=this.el.closest("ion-content");this.setupNativeRefresher(r)}else e||this.destroyNativeRefresher()}},{key:"destroyNativeRefresher",value:function(){this.scrollEl&&this.scrollListenerCallback&&(this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback),this.scrollListenerCallback=void 0),this.nativeRefresher=!1}},{key:"resetNativeRefresher",value:(y=_asyncToGenerator(regeneratorRuntime.mark((function e(r,t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state=t,"ios"!==Object(n.d)(this)){e.next=6;break}return e.next=4,p(r,void 0);case 4:e.next=8;break;case 6:return e.next=8,g(this.el.querySelector(".refresher-refreshing-icon"));case 8:this.didRefresh=!1,this.needsCompletion=!1,this.pointerDown=!1,this.animations.forEach((function(e){return e.destroy()})),this.animations=[],this.progress=0,this.state=1;case 15:case"end":return e.stop()}}),e,this)}))),function(e,r){return y.apply(this,arguments)})},{key:"setupiOSNativeRefresher",value:(v=_asyncToGenerator(regeneratorRuntime.mark((function e(r,i){var o,a,l,c=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.elementToTransform=this.scrollEl,o=r.shadowRoot.querySelectorAll("svg"),a=.16*this.scrollEl.clientHeight,l=o.length,Object(n.l)((function(){return o.forEach((function(e){return e.style.setProperty("animation","none")}))})),this.scrollListenerCallback=function(){(c.pointerDown||1!==c.state)&&Object(n.g)((function(){var e=c.scrollEl.scrollTop,t=c.el.clientHeight;if(e>0){if(8===c.state){var h=Object(s.c)(0,e/(.5*t),1);return void Object(n.l)((function(){return u(i,1-h)}))}Object(n.l)((function(){return u(r,0)}))}else{c.pointerDown&&(c.didStart||(c.didStart=!0,c.ionStart.emit()),c.pointerDown&&c.ionPull.emit());var d,g,m=Object(s.c)(0,Math.abs(e)/t,.99),v=c.progress=Object(s.c)(0,(Math.abs(e)-30)/a,1),y=Object(s.c)(0,Math.floor(v*l),l-1);8===c.state||y===l-1?(c.pointerDown&&(d=i,g=c.lastVelocityY,Object(n.l)((function(){d.style.setProperty("--refreshing-rotation-duration",g>=1?"0.5s":"2s"),d.style.setProperty("opacity","1")}))),c.didRefresh||(c.beginRefresh(),c.didRefresh=!0,f.impact({style:"light"}),c.pointerDown||p(c.elementToTransform,"".concat(t,"px")))):(c.state=2,function(e,r,t,i){Object(n.l)((function(){u(e,t),r.forEach((function(e,r){return e.style.setProperty("opacity",r<=i?"0.99":"0")}))}))}(r,o,m,y))}}))},this.scrollEl.addEventListener("scroll",this.scrollListenerCallback),e.next=7,Promise.resolve().then(t.bind(null,"AzGJ"));case 7:e.t0={el:this.scrollEl,gestureName:"refresher",gesturePriority:10,direction:"y",threshold:5,onStart:function(){c.pointerDown=!0,c.didRefresh||p(c.elementToTransform,"0px")},onMove:function(e){c.lastVelocityY=e.velocityY},onEnd:function(){c.pointerDown=!1,c.didStart=!1,c.needsCompletion?(c.resetNativeRefresher(c.elementToTransform,32),c.needsCompletion=!1):c.didRefresh&&Object(n.g)((function(){return p(c.elementToTransform,"".concat(c.el.clientHeight,"px"))}))}},this.gesture=e.sent.createGesture(e.t0),this.disabledChanged();case 10:case"end":return e.stop()}}),e,this)}))),function(e,r){return v.apply(this,arguments)})},{key:"setupMDNativeRefresher",value:(m=_asyncToGenerator(regeneratorRuntime.mark((function e(r,i,l){var c,f,u,p=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=i.shadowRoot.querySelector("circle"),f=this.el.querySelector("ion-refresher-content .refresher-pulling-icon"),u=l.shadowRoot.querySelector("circle"),null!==c&&null!==u&&Object(n.l)((function(){c.style.setProperty("animation","none"),l.style.setProperty("animation-delay","-655ms"),u.style.setProperty("animation-delay","-655ms")})),e.next=4,Promise.resolve().then(t.bind(null,"AzGJ"));case 4:e.t0={el:this.scrollEl,gestureName:"refresher",gesturePriority:10,direction:"y",threshold:5,canStart:function(){return 8!==p.state&&32!==p.state&&0===p.scrollEl.scrollTop},onStart:function(e){e.data={animation:void 0,didStart:!1,cancelled:!1}},onMove:function(e){if(e.velocityY<0&&0===p.progress&&!e.data.didStart||e.data.cancelled)e.data.cancelled=!0;else{if(!e.data.didStart)return e.data.didStart=!0,p.state=2,void Object(n.l)((function(){var t=function(e,r){return"scale"===e?function(e){var r=e.clientHeight,t=Object(o.a)().addElement(e).keyframes([{offset:0,transform:"scale(0) translateY(-".concat(r+20,"px)")},{offset:1,transform:"scale(1) translateY(100px)"}]);return h(e).addAnimation([t])}(r):function(e){var r=e.clientHeight,t=Object(o.a)().addElement(e).keyframes([{offset:0,transform:"translateY(-".concat(r+20,"px)")},{offset:1,transform:"translateY(100px)"}]);return h(e).addAnimation([t])}(r)}(function(e){var r=e.previousElementSibling;return null!==r&&"ION-HEADER"===r.tagName?"translate":"scale"}(r),f);e.data.animation=t,p.scrollEl.style.setProperty("--overflow","hidden"),t.progressStart(!1,0),p.ionStart.emit(),p.animations.push(t)}));p.progress=Object(s.c)(0,e.deltaY/180*.5,1),e.data.animation.progressStep(p.progress),p.ionPull.emit()}},onEnd:function(e){if(e.data.didStart){if(Object(n.l)((function(){return p.scrollEl.style.removeProperty("--overflow")})),p.progress<=.4)return p.gesture.enable(!1),void e.data.animation.progressEnd(0,p.progress,500).onFinish((function(){p.animations.forEach((function(e){return e.destroy()})),p.animations=[],p.gesture.enable(!0),p.state=1}));var r=Object(a.a)([0,0],[0,0],[1,1],[1,1],p.progress)[0],t=function(e){return Object(o.a)().duration(125).addElement(e).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)")}(f);p.animations.push(t),Object(n.l)(_asyncToGenerator(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return f.style.setProperty("--ion-pulling-refresher-translate","".concat(100*r,"px")),e.data.animation.progressEnd(),n.next=4,t.play();case 4:p.beginRefresh(),e.data.animation.destroy();case 6:case"end":return n.stop()}}),n)}))))}}},this.gesture=e.sent.createGesture(e.t0),this.disabledChanged();case 7:case"end":return e.stop()}}),e,this)}))),function(e,r,t){return m.apply(this,arguments)})},{key:"setupNativeRefresher",value:(c=_asyncToGenerator(regeneratorRuntime.mark((function e(r){var t,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.scrollListenerCallback&&r&&!this.nativeRefresher&&this.scrollEl){e.next=2;break}return e.abrupt("return");case 2:this.nativeRefresher=!0,t=this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),i=this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner"),"ios"===Object(n.d)(this)?this.setupiOSNativeRefresher(t,i):this.setupMDNativeRefresher(r,t,i);case 5:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)})},{key:"componentDidUpdate",value:function(){this.checkNativeRefresher()}},{key:"connectedCallback",value:(l=_asyncToGenerator(regeneratorRuntime.mark((function e(){var r,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("fixed"===this.el.getAttribute("slot")){e.next=2;break}return e.abrupt("return",void console.error('Make sure you use: <ion-refresher slot="fixed">'));case 2:if(!(r=this.el.closest("ion-content"))){e.next=19;break}return e.next=6,r.getScrollElement();case 6:if(this.scrollEl=e.sent,this.backgroundContentEl=r.shadowRoot.querySelector("#background-content"),!d(this.el,Object(n.d)(this))){e.next=12;break}this.setupNativeRefresher(r),e.next=17;break;case 12:return e.next=14,Promise.resolve().then(t.bind(null,"AzGJ"));case 14:e.t0={el:r,gestureName:"refresher",gesturePriority:10,direction:"y",threshold:20,passive:!1,canStart:function(){return i.canStart()},onStart:function(){return i.onStart()},onMove:function(e){return i.onMove(e)},onEnd:function(){return i.onEnd()}},this.gesture=e.sent.createGesture(e.t0),this.disabledChanged();case 17:e.next=20;break;case 19:console.error("<ion-refresher> must be used inside an <ion-content>");case 20:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.destroyNativeRefresher(),this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"complete",value:(i=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.nativeRefresher?(this.needsCompletion=!0,this.pointerDown||this.resetNativeRefresher(this.elementToTransform,32)):this.close(32,"120ms");case 1:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"cancel",value:(r=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.nativeRefresher?this.pointerDown||this.resetNativeRefresher(this.elementToTransform,16):this.close(16,"");case 1:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"getProgress",value:function(){return Promise.resolve(this.progress)}},{key:"canStart",value:function(){return!(!this.scrollEl||1!==this.state||this.scrollEl.scrollTop>0)}},{key:"onStart",value:function(){this.progress=0,this.state=1}},{key:"onMove",value:function(e){if(this.scrollEl){var r=e.event;if(!(r.touches&&r.touches.length>1)&&0==(56&this.state)){var t=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,n=e.deltaY*t;if(n<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(r.cancelable&&r.preventDefault(),this.setCss(n,"0ms",!0,""),0!==n){var i=this.pullMin;this.progress=n/i,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),n<i?this.state=2:n>this.pullMax?this.beginRefresh():this.state=4}else this.progress=0}}}},{key:"onEnd",value:function(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()}},{key:"beginRefresh",value:function(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})}},{key:"close",value:function(e,r){var t=this;setTimeout((function(){t.state=1,t.progress=0,t.didStart=!1,t.setCss(0,"0ms",!1,"")}),600),this.state=e,this.setCss(0,this.closeDuration,!0,r)}},{key:"setCss",value:function(e,r,t,i){var s=this;this.nativeRefresher||(this.appliedStyles=e>0,Object(n.l)((function(){if(s.scrollEl&&s.backgroundContentEl){var n=s.scrollEl.style,o=s.backgroundContentEl.style;n.transform=o.transform=e>0?"translateY(".concat(e,"px) translateZ(0px)"):"translateZ(0px)",n.transitionDuration=o.transitionDuration=r,n.transitionDelay=o.transitionDelay=i,n.overflow=t?"hidden":""}})))}},{key:"render",value:function(){var e,r=Object(n.d)(this);return Object(n.i)(n.a,{slot:"fixed",class:(e={},_defineProperty(e,r,!0),_defineProperty(e,"refresher-".concat(r),!0),_defineProperty(e,"refresher-native",this.nativeRefresher),_defineProperty(e,"refresher-active",1!==this.state),_defineProperty(e,"refresher-pulling",2===this.state),_defineProperty(e,"refresher-ready",4===this.state),_defineProperty(e,"refresher-refreshing",8===this.state),_defineProperty(e,"refresher-cancelling",16===this.state),_defineProperty(e,"refresher-completing",32===this.state),e)})}},{key:"el",get:function(){return Object(n.f)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledChanged"]}}},{key:"style",get:function(){return"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}:host-context([dir=rtl]) ion-refresher,[dir=rtl] ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon,[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-icon,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-crescent circle,.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line{stroke:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary,#3880ff)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary,#3880ff);font-size:12px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid #ececec;background:#fff;-webkit-box-shadow:0 1px 6px rgba(0,0,0,.1);box-shadow:0 1px 6px rgba(0,0,0,.1)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}"}}]),e}(),y=function(){function e(r){_classCallCheck(this,e),Object(n.k)(this,r)}return _createClass(e,[{key:"componentWillLoad",value:function(){if(void 0===this.pullingIcon){var e=Object(n.d)(this),r=void 0!==this.el.style.webkitOverflowScrolling?"lines":"arrow-down";this.pullingIcon=i.b.get("refreshingIcon","ios"===e&&Object(i.f)("mobile")?i.b.get("spinner",r):"circular")}if(void 0===this.refreshingSpinner){var t=Object(n.d)(this);this.refreshingSpinner=i.b.get("refreshingSpinner",i.b.get("spinner","ios"===t?"lines":"circular"))}}},{key:"render",value:function(){var e=this.pullingIcon,r=null!=e&&void 0!==c.a[e],t=Object(n.d)(this);return Object(n.i)(n.a,{class:t},Object(n.i)("div",{class:"refresher-pulling"},this.pullingIcon&&r&&Object(n.i)("div",{class:"refresher-pulling-icon"},Object(n.i)("div",{class:"spinner-arrow-container"},Object(n.i)("ion-spinner",{name:this.pullingIcon,paused:!0}),"md"===t&&"circular"===this.pullingIcon&&Object(n.i)("div",{class:"arrow-container"},Object(n.i)("ion-icon",{name:"caret-back-sharp"})))),this.pullingIcon&&!r&&Object(n.i)("div",{class:"refresher-pulling-icon"},Object(n.i)("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&Object(n.i)("div",{class:"refresher-pulling-text",innerHTML:Object(l.a)(this.pullingText)})),Object(n.i)("div",{class:"refresher-refreshing"},this.refreshingSpinner&&Object(n.i)("div",{class:"refresher-refreshing-icon"},Object(n.i)("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&Object(n.i)("div",{class:"refresher-refreshing-text",innerHTML:Object(l.a)(this.refreshingText)})))}},{key:"el",get:function(){return Object(n.f)(this)}}]),e}()}}]);