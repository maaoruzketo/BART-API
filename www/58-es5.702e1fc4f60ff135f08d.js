function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function asyncGeneratorStep(e,t,o,r,i,n,a){try{var s=e[n](a),p=s.value}catch(c){return void o(c)}s.done?t(p):Promise.resolve(p).then(r,i)}function _asyncToGenerator(e){return function(){var t=this,o=arguments;return new Promise((function(r,i){var n=e.apply(t,o);function a(e){asyncGeneratorStep(n,r,i,a,s,"next",e)}function s(e){asyncGeneratorStep(n,r,i,a,s,"throw",e)}a(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{VgKV:function(e,t,o){"use strict";o.r(t),o.d(t,"ion_popover",(function(){return f}));var r=o("54nT"),i=(o("AfW+"),o("aiEM"),o("iAHb")),n=(o("kBU6"),o("u6aj")),a=o("Dl6n"),s=o("m9yc"),p=o("Uch9"),c=function(e,t){var o="top",r="left",n=e.querySelector(".popover-content"),a=n.getBoundingClientRect(),s=a.width,p=a.height,c=e.ownerDocument.defaultView.innerWidth,d=e.ownerDocument.defaultView.innerHeight,u=t&&t.target&&t.target.getBoundingClientRect(),h=null!=u&&"top"in u?u.top:d/2-p/2,f=null!=u&&"left"in u?u.left:c/2,m=u&&u.width||0,v=u&&u.height||0,b=e.querySelector(".popover-arrow"),y=b.getBoundingClientRect(),g=y.width,w=y.height;null==u&&(b.style.display="none");var x={top:h+v,left:f+m/2-g/2},k={top:h+v+(w-1),left:f+m/2-s/2},j=!1,O=!1;k.left<l+25?(j=!0,k.left=l):s+l+k.left+25>c&&(O=!0,k.left=c-s-l,r="right"),h+v+p>d&&h-p>0?(x.top=h-(w+1),k.top=h-p-(w-1),e.className=e.className+" popover-bottom",o="bottom"):h+v+p>d&&(n.style.bottom=l+"%"),b.style.top=x.top+"px",b.style.left=x.left+"px",n.style.top=k.top+"px",n.style.left=k.left+"px",j&&(n.style.left="calc(".concat(k.left,"px + var(--ion-safe-area-left, 0px))")),O&&(n.style.left="calc(".concat(k.left,"px - var(--ion-safe-area-right, 0px))")),n.style.transformOrigin=o+" "+r;var P=Object(i.a)(),D=Object(i.a)(),E=Object(i.a)();return D.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)"),E.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),P.addElement(e).easing("ease").duration(100).addAnimation([D,E])},l=5,d=function(e){var t=Object(i.a)(),o=Object(i.a)(),r=Object(i.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,r])},u=function(e,t){var o=e.ownerDocument,r="rtl"===o.dir,n="top",a=r?"right":"left",s=e.querySelector(".popover-content"),p=s.getBoundingClientRect(),c=p.width,l=p.height,d=o.defaultView.innerWidth,u=o.defaultView.innerHeight,h=t&&t.target&&t.target.getBoundingClientRect(),f=null!=h&&"bottom"in h?h.bottom:u/2-l/2,m=h&&h.height||0,v={top:f,left:null!=h&&"left"in h?r?h.left-c+h.width:h.left:d/2-c/2};v.left<12?(v.left=12,a="left"):c+12+v.left>d&&(v.left=d-c-12,a="right"),f+m+l>u&&f-l>0?(v.top=f-l-m,e.className=e.className+" popover-bottom",n="bottom"):f+m+l>u&&(s.style.bottom="12px");var b=Object(i.a)(),y=Object(i.a)(),g=Object(i.a)(),w=Object(i.a)(),x=Object(i.a)();return y.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)"),g.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),w.addElement(s).beforeStyles({top:"".concat(v.top,"px"),left:"".concat(v.left,"px"),"transform-origin":"".concat(n," ").concat(a)}).fromTo("transform","scale(0.001)","scale(1)"),x.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),b.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([y,g,w,x])},h=function(e){var t=Object(i.a)(),o=Object(i.a)(),r=Object(i.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,r])},f=function(){function e(t){var o=this;_classCallCheck(this,e),Object(r.k)(this,t),this.presented=!1,this.mode=Object(r.d)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),o.dismiss()},this.onBackdropTap=function(){o.dismiss(void 0,n.a)},this.onLifecycle=function(e){var t=o.usersElement,r=m[e.type];if(t&&r){var i=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(i)}},Object(n.e)(this.el),this.didPresent=Object(r.e)(this,"ionPopoverDidPresent",7),this.willPresent=Object(r.e)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(r.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(r.e)(this,"ionPopoverDidDismiss",7)}var t,o;return _createClass(e,[{key:"present",value:(o=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.presented){e.next=2;break}return e.abrupt("return");case 2:if(t=this.el.querySelector(".popover-content")){e.next=5;break}throw new Error("container is undefined");case 5:return o=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),e.next=8,Object(s.a)(this.delegate,t,this.component,["popover-viewport",this.el["s-sc"]],o);case 8:return this.usersElement=e.sent,e.next=11,Object(p.a)(this.usersElement);case 11:return e.abrupt("return",Object(n.f)(this,"popoverEnter",c,u,this.event));case 12:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"dismiss",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(t,o){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(n.g)(this,t,o,"popoverLeave",d,h,this.event);case 2:if(r=e.sent,e.t0=r,!e.t0){e.next=7;break}return e.next=7,Object(s.b)(this.delegate,this.usersElement);case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}}),e,this)}))),function(e,o){return t.apply(this,arguments)})},{key:"onDidDismiss",value:function(){return Object(n.h)(this.el,"ionPopoverDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(n.h)(this.el,"ionPopoverWillDismiss")}},{key:"render",value:function(){var e,t=Object(r.d)(this),o=this.onLifecycle;return Object(r.i)(r.a,{"aria-modal":"true","no-router":!0,style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(a.b)(this.cssClass)),(e={},_defineProperty(e,t,!0),_defineProperty(e,"popover-translucent",this.translucent),e)),onIonPopoverDidPresent:o,onIonPopoverWillPresent:o,onIonPopoverWillDismiss:o,onIonPopoverDidDismiss:o,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(r.i)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(r.i)("div",{class:"popover-wrapper"},Object(r.i)("div",{class:"popover-arrow"}),Object(r.i)("div",{class:"popover-content"})))}},{key:"el",get:function(){return Object(r.f)(this)}}],[{key:"style",get:function(){return".sc-ion-popover-md-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12);--backdrop-opacity:var(--ion-backdrop-opacity,0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:.1s;transition-delay:.1s}"}}]),e}(),m={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}}}]);