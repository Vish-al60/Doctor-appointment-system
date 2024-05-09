"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[110],{6794:function(e,t,n){n.d(t,{Z:function(){return o}});n(2791);var i=n(6355),s=n(3495),r=n(1087),a=n(184),o=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("footer",{children:[(0,a.jsxs)("div",{className:"footer",children:[(0,a.jsxs)("div",{className:"footer-links",children:[(0,a.jsx)("h3",{children:"Links"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(r.OL,{to:"/",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.OL,{to:"/doctors",children:"Doctors"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.OL,{to:"/appointments",children:"Appointments"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.OL,{to:"/notifications",children:"Notifications"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.fO,{to:"/#contact",children:"Contact Us"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.OL,{to:"/profile",children:"Profile"})})]})]}),(0,a.jsxs)("div",{className:"social",children:[(0,a.jsx)("h3",{children:"Social links"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"facebook",children:(0,a.jsx)(i.tBk,{})}),(0,a.jsx)("li",{className:"youtube",children:(0,a.jsx)(i.V2E,{})}),(0,a.jsx)("li",{className:"instagram",children:(0,a.jsx)(i.Zf_,{})})]})]})]}),(0,a.jsxs)("div",{className:"footer-bottom",children:["Made by Vishal"," ","\xa9 ",(new Date).getFullYear()]})]})})}},3841:function(e,t,n){n.d(t,{Z:function(){return p}});var i=n(9439),s=n(2791),r=n(7689),a=n(1087),o=n(3495),l=n(9434),c=n(5318),u=n(3853),d=n(1213),h=n(456),f=n(184),p=function(){var e=(0,s.useState)(!1),t=(0,i.Z)(e,2),n=t[0],p=t[1],m=(0,l.I0)(),x=(0,r.s0)(),g=(0,s.useState)(localStorage.getItem("token")||""),j=(0,i.Z)(g,2),y=j[0],v=(j[1],(0,s.useState)(localStorage.getItem("token")?(0,h.Z)(localStorage.getItem("token")):"")),b=(0,i.Z)(v,2),V=b[0];b[1];return(0,f.jsxs)("header",{children:[(0,f.jsxs)("nav",{className:n?"nav-active":"",children:[(0,f.jsx)("h2",{className:"nav-logo",children:(0,f.jsx)(a.OL,{to:"/",children:"HealthBooker"})}),(0,f.jsxs)("ul",{className:"nav-links",children:[(0,f.jsx)("li",{children:(0,f.jsx)(a.OL,{to:"/",children:"Home"})}),(0,f.jsx)("li",{children:(0,f.jsx)(a.OL,{to:"/doctors",children:"Doctors"})}),y&&V.isAdmin&&(0,f.jsx)("li",{children:(0,f.jsx)(a.OL,{to:"/dashboard/users",children:"Dashboard"})}),y&&!V.isAdmin&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("li",{children:(0,f.jsx)(a.OL,{to:"/appointments",children:"Appointments"})}),(0,f.jsx)("li",{children:(0,f.jsx)(a.OL,{to:"/notifications",children:"Notifications"})}),(0,f.jsx)("li",{children:(0,f.jsx)(a.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,f.jsx)("li",{children:(0,f.jsx)(o.fO,{to:"/#contact",children:"Contact Us"})}),(0,f.jsx)("li",{children:(0,f.jsx)(a.OL,{to:"/profile",children:"Profile"})})]}),y?(0,f.jsx)("li",{children:(0,f.jsx)("span",{className:"btn",onClick:function(){m((0,c.ps)({})),localStorage.removeItem("token"),x("/login")},children:"Logout"})}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("li",{children:(0,f.jsx)(a.OL,{className:"btn",to:"/login",children:"Login"})}),(0,f.jsx)("li",{children:(0,f.jsx)(a.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,f.jsxs)("div",{className:"menu-icons",children:[!n&&(0,f.jsx)(u.cur,{className:"menu-open",onClick:function(){p(!0)}}),n&&(0,f.jsx)(d.ySC,{className:"menu-close",onClick:function(){p(!1)}})]})]})}},4890:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var i=n(2791),s=n(4942),r=n(1413),a=n(9439),o=(n(1062),n(184)),l=function(){var e=(0,i.useState)({name:"",email:"",message:""}),t=(0,a.Z)(e,2),n=t[0],l=t[1],c=function(e){var t=e.target,i=t.name,a=t.value;return l((0,r.Z)((0,r.Z)({},n),{},(0,s.Z)({},i,a)))};return(0,o.jsx)("section",{className:"register-section flex-center",id:"contact",children:(0,o.jsxs)("div",{className:"contact-container flex-center contact",children:[(0,o.jsx)("h2",{className:"form-heading",children:"Contact Us"}),(0,o.jsxs)("form",{method:"POST",action:"https://formspree.io/f/xdoqwpde",className:"register-form ",children:[(0,o.jsx)("input",{type:"text",name:"name",className:"form-input",placeholder:"Enter your name",required:!0,autoComplete:"off",value:n.name,onChange:c}),(0,o.jsx)("input",{type:"email",name:"email",className:"form-input",placeholder:"Enter your email",required:!0,autoComplete:"off",value:n.email,onChange:c}),(0,o.jsx)("textarea",{type:"text",name:"message",className:"form-input",placeholder:"Enter your message",required:!0,autoComplete:"off",value:n.message,onChange:c,rows:"8",cols:"12"}),(0,o.jsx)("button",{type:"submit",className:"btn form-btn",children:"send"})]})]})})},c=n.p+"static/media/aboutimg.af2db4b9f307d04f8745.jpg",u=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("section",{className:"container",children:[(0,o.jsx)("h2",{className:"page-heading about-heading",children:"About Us"}),(0,o.jsxs)("div",{className:"about",children:[(0,o.jsx)("div",{className:"hero-img",children:(0,o.jsx)("img",{src:c,alt:"hero"})}),(0,o.jsx)("div",{className:"hero-content",children:(0,o.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur doloremque molestias repellat minus asperiores in aperiam dolor, quaerat praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quibusdam doloremque ex? Officia atque ab dolore? Tempore totam non ea!"})})]})]})})},d=n(6794),h=n.p+"static/media/heroimg.8bbd2437f7c9d842026c.jpg",f=function(){return(0,o.jsxs)("section",{className:"hero",children:[(0,o.jsxs)("div",{className:"hero-content",children:[(0,o.jsxs)("h1",{children:["Your Health, ",(0,o.jsx)("br",{}),"Our Responsibility"]}),(0,o.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur doloremque molestias repellat minus asperiores in aperiam dolor, quaerat praesentium."})]}),(0,o.jsx)("div",{className:"hero-img",children:(0,o.jsx)("img",{src:h,alt:"hero"})})]})},p=n(3841),m=n(835),x=function(){return(0,o.jsxs)("section",{className:"container circles",children:[(0,o.jsxs)("div",{className:"circle",children:[(0,o.jsx)(m.ZP,{start:0,end:1e3,delay:0,enableScrollSpy:!0,scrollSpyDelay:500,children:function(e){var t=e.countUpRef;return(0,o.jsxs)("div",{className:"counter",children:[(0,o.jsx)("span",{ref:t}),"+"]})}}),(0,o.jsxs)("span",{className:"circle-name",children:["Satisfied",(0,o.jsx)("br",{}),"Patients"]})]}),(0,o.jsxs)("div",{className:"circle",children:[(0,o.jsx)(m.ZP,{start:0,end:250,delay:0,enableScrollSpy:!0,scrollSpyDelay:500,children:function(e){var t=e.countUpRef;return(0,o.jsxs)("div",{className:"counter",children:[(0,o.jsx)("span",{ref:t}),"+"]})}}),(0,o.jsxs)("span",{className:"circle-name",children:["Verified",(0,o.jsx)("br",{}),"Doctors"]})]}),(0,o.jsxs)("div",{className:"circle",children:[(0,o.jsx)(m.ZP,{start:0,end:75,delay:0,enableScrollSpy:!0,scrollSpyDelay:500,children:function(e){var t=e.countUpRef;return(0,o.jsxs)("div",{className:"counter",children:[(0,o.jsx)("span",{ref:t}),"+"]})}}),(0,o.jsxs)("span",{className:"circle-name",children:["Specialist",(0,o.jsx)("br",{}),"Doctors"]})]})]})},g=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p.Z,{}),(0,o.jsx)(f,{}),(0,o.jsx)(u,{}),(0,o.jsx)(x,{}),(0,o.jsx)(l,{}),(0,o.jsx)(d.Z,{})]})}},7340:function(e,t,n){n.r(t),n.d(t,{CountUp:function(){return s}});var i=function(){return(i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},s=function(){function e(e,t,n){var s=this;this.endVal=t,this.options=n,this.version="2.4.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){s.startTime||(s.startTime=e);var t=e-s.startTime;s.remaining=s.duration-t,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(t,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(t,s.startVal,s.endVal-s.startVal,s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(t/s.duration);var n=s.countDown?s.frameVal<s.endVal:s.frameVal>s.endVal;s.frameVal=n?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),t<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.callback&&s.callback()},this.formatNumber=function(e){var t,n,i,r,a=e<0?"-":"";t=Math.abs(e).toFixed(s.options.decimalPlaces);var o=(t+="").split(".");if(n=o[0],i=o.length>1?s.options.decimal+o[1]:"",s.options.useGrouping){r="";for(var l=3,c=0,u=0,d=n.length;u<d;++u)s.options.useIndianSeparators&&4===u&&(l=2,c=1),0!==u&&c%l==0&&(r=s.options.separator+r),c++,r=n[d-u-1]+r;n=r}return s.options.numerals&&s.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return s.options.numerals[+e]})),i=i.replace(/[0-9]/g,(function(e){return s.options.numerals[+e]}))),a+s.options.prefix+n+i+s.options.suffix},this.easeOutExpo=function(e,t,n,i){return n*(1-Math.pow(2,-10*e/i))*1024/1023+t},this.options=i(i({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return s.handleScroll(s)})),window.onscroll=function(){window.onScrollFns.forEach((function(e){return e()}))},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,n=e.el.getBoundingClientRect(),i=n.top+window.pageYOffset,s=n.top+n.height+window.pageYOffset;s<t&&s>window.scrollY&&e.paused?(e.paused=!1,setTimeout((function(){return e.start()}),e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>s||i>t)&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var t=e-this.startVal;if(Math.abs(t)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var n=this.countDown?1:-1;this.endVal=e+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t=this.formattingFn(e);this.el&&("INPUT"===this.el.tagName?this.el.value=t:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=t:this.el.innerHTML=t)},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},835:function(e,t,n){var i=n(2791),s=n(7340);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?i.useLayoutEffect:i.useEffect;function d(e){var t=i.useRef(e);return u((function(){t.current=e})),i.useCallback((function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.current.apply(void 0,n)}),[])}var h=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],f={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},p=function(e){var t=i.useMemo((function(){return a(a({},f),e)}),[e]),n=t.ref,r=t.startOnMount,o=t.enableReinitialize,l=t.delay,u=t.onEnd,p=t.onStart,m=t.onPauseResume,x=t.onReset,g=t.onUpdate,j=c(t,h),y=i.useRef(),v=i.useRef(),b=i.useRef(!1),V=d((function(){return function(e,t){var n=t.decimal,i=t.decimals,r=t.duration,a=t.easingFn,o=t.end,l=t.formattingFn,c=t.numerals,u=t.prefix,d=t.separator,h=t.start,f=t.suffix,p=t.useEasing,m=t.enableScrollSpy,x=t.scrollSpyDelay,g=t.scrollSpyOnce;return new s.CountUp(e,o,{startVal:h,duration:r,decimal:n,decimalPlaces:i,easingFn:a,formattingFn:l,numerals:c,separator:d,prefix:u,suffix:f,useEasing:p,useGrouping:!!d,enableScrollSpy:m,scrollSpyDelay:x,scrollSpyOnce:g})}("string"===typeof n?n:n.current,j)})),O=d((function(e){var t=y.current;if(t&&!e)return t;var n=V();return y.current=n,n})),N=d((function(){var e=function(){return O(!0).start((function(){null===u||void 0===u||u({pauseResume:S,reset:w,start:F,update:E})}))};l&&l>0?v.current=setTimeout(e,1e3*l):e(),null===p||void 0===p||p({pauseResume:S,reset:w,update:E})})),S=d((function(){O().pauseResume(),null===m||void 0===m||m({reset:w,start:F,update:E})})),w=d((function(){O().el&&(v.current&&clearTimeout(v.current),O().reset(),null===x||void 0===x||x({pauseResume:S,start:F,update:E}))})),E=d((function(e){O().update(e),null===g||void 0===g||g({pauseResume:S,reset:w,start:F})})),F=d((function(){w(),N()})),P=d((function(e){r&&(e&&w(),N())}));return i.useEffect((function(){b.current?o&&P(!0):(b.current=!0,P())}),[o,b,P,l,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),i.useEffect((function(){return function(){w()}}),[w]),{start:F,pauseResume:S,reset:w,update:E,getCountUp:O}},m=["className","redraw","containerProps","children","style"];t.ZP=function(e){var t=e.className,n=e.redraw,s=e.containerProps,r=e.children,o=e.style,u=c(e,m),h=i.useRef(null),f=i.useRef(!1),x=p(a(a({},u),{},{ref:h,startOnMount:"function"!==typeof r||0===e.delay,enableReinitialize:!1})),g=x.start,j=x.reset,y=x.update,v=x.pauseResume,b=x.getCountUp,V=d((function(){g()})),O=d((function(t){e.preserveValue||j(),y(t)})),N=d((function(){"function"!==typeof e.children||h.current instanceof Element?b():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));i.useEffect((function(){N()}),[N]),i.useEffect((function(){f.current&&O(e.end)}),[e.end,O]);var S=n&&e;return i.useEffect((function(){n&&f.current&&V()}),[V,n,S]),i.useEffect((function(){!n&&f.current&&V()}),[V,n,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),i.useEffect((function(){f.current=!0}),[]),"function"===typeof r?r({countUpRef:h,start:g,reset:j,update:y,pauseResume:v,getCountUp:b}):i.createElement("span",l({className:t,ref:h,style:o},s),"undefined"!==typeof e.start?b().formattingFn(e.start):"")}},1062:function(){}}]);
//# sourceMappingURL=110.dcf4c2f9.chunk.js.map