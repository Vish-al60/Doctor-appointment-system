"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[564],{3321:function(n,e,t){t(2791);var i=t(184);e.Z=function(){return(0,i.jsx)("h2",{className:"nothing flex-center",children:"Nothing to show"})}},6794:function(n,e,t){t.d(e,{Z:function(){return r}});t(2791);var i=t(6355),s=t(3495),l=t(1087),o=t(184),r=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("footer",{children:[(0,o.jsxs)("div",{className:"footer",children:[(0,o.jsxs)("div",{className:"footer-links",children:[(0,o.jsx)("h3",{children:"Links"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(l.OL,{to:"/",children:"Home"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.OL,{to:"/doctors",children:"Doctors"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.OL,{to:"/appointments",children:"Appointments"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.OL,{to:"/notifications",children:"Notifications"})}),(0,o.jsx)("li",{children:(0,o.jsx)(s.fO,{to:"/#contact",children:"Contact Us"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.OL,{to:"/profile",children:"Profile"})})]})]}),(0,o.jsxs)("div",{className:"social",children:[(0,o.jsx)("h3",{children:"Social links"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{className:"facebook",children:(0,o.jsx)(i.tBk,{})}),(0,o.jsx)("li",{className:"youtube",children:(0,o.jsx)(i.V2E,{})}),(0,o.jsx)("li",{className:"instagram",children:(0,o.jsx)(i.Zf_,{})})]})]})]}),(0,o.jsxs)("div",{className:"footer-bottom",children:["Made by Vishal"," ","\xa9 ",(new Date).getFullYear()]})]})})}},3841:function(n,e,t){t.d(e,{Z:function(){return j}});var i=t(9439),s=t(2791),l=t(7689),o=t(1087),r=t(3495),c=t(9434),d=t(5318),a=t(3853),h=t(1213),u=t(456),x=t(184),j=function(){var n=(0,s.useState)(!1),e=(0,i.Z)(n,2),t=e[0],j=e[1],v=(0,c.I0)(),m=(0,l.s0)(),p=(0,s.useState)(localStorage.getItem("token")||""),f=(0,i.Z)(p,2),g=f[0],k=(f[1],(0,s.useState)(localStorage.getItem("token")?(0,u.Z)(localStorage.getItem("token")):"")),b=(0,i.Z)(k,2),N=b[0];b[1];return(0,x.jsxs)("header",{children:[(0,x.jsxs)("nav",{className:t?"nav-active":"",children:[(0,x.jsx)("h2",{className:"nav-logo",children:(0,x.jsx)(o.OL,{to:"/",children:"HealthBooker"})}),(0,x.jsxs)("ul",{className:"nav-links",children:[(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/",children:"Home"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/doctors",children:"Doctors"})}),g&&N.isAdmin&&(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/dashboard/users",children:"Dashboard"})}),g&&!N.isAdmin&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/appointments",children:"Appointments"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/notifications",children:"Notifications"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,x.jsx)("li",{children:(0,x.jsx)(r.fO,{to:"/#contact",children:"Contact Us"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/profile",children:"Profile"})})]}),g?(0,x.jsx)("li",{children:(0,x.jsx)("span",{className:"btn",onClick:function(){v((0,d.ps)({})),localStorage.removeItem("token"),m("/login")},children:"Logout"})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{className:"btn",to:"/login",children:"Login"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,x.jsxs)("div",{className:"menu-icons",children:[!t&&(0,x.jsx)(a.cur,{className:"menu-open",onClick:function(){j(!0)}}),t&&(0,x.jsx)(h.ySC,{className:"menu-close",onClick:function(){j(!1)}})]})]})}},564:function(n,e,t){t.r(e);var i=t(4165),s=t(5861),l=t(9439),o=t(2791),r=t(3321),c=t(6794),d=t(3841),a=t(4971),h=t(5318),u=t(3200),x=t(9434),j=t(456),v=t(3263),m=t(3402),p=(t(5108),t(184));e.default=function(){var n,e=(0,o.useState)([]),t=(0,l.Z)(e,2),f=t[0],g=t[1],k=(0,x.I0)(),b=(0,x.v9)((function(n){return n.root})).loading,N=(0,j.Z)(localStorage.getItem("token")).userId,Z=function(){var n=(0,s.Z)((0,i.Z)().mark((function n(e){var t;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,k((0,h.K4)(!0)),n.next=4,(0,a.Z)("/appointment/getallappointments?search=".concat(N));case 4:t=n.sent,g(t),k((0,h.K4)(!1)),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}();(0,o.useEffect)((function(){Z()}),[]);var I=function(){var n=(0,s.Z)((0,i.Z)().mark((function n(e){var t,s,l;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m.ZP.promise(v.Z.put("/appointment/completed",{appointid:null===e||void 0===e?void 0:e._id,doctorId:null===e||void 0===e||null===(t=e.doctorId)||void 0===t?void 0:t._id,doctorname:"".concat(null===e||void 0===e||null===(s=e.userId)||void 0===s?void 0:s.firstname," ").concat(null===e||void 0===e||null===(l=e.userId)||void 0===l?void 0:l.lastname)},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Appointment booked successfully",error:"Unable to book appointment",loading:"Booking appointment..."});case 3:Z(),n.next=9;break;case 6:return n.prev=6,n.t0=n.catch(0),n.abrupt("return",n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.Z,{}),b?(0,p.jsx)(u.Z,{}):(0,p.jsxs)("section",{className:"container notif-section",children:[(0,p.jsx)("h2",{className:"page-heading",children:"Your Appointments"}),f.length>0?(0,p.jsx)("div",{className:"appointments",children:(0,p.jsxs)("table",{children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{children:"S.No"}),(0,p.jsx)("th",{children:"Doctor"}),(0,p.jsx)("th",{children:"Patient"}),(0,p.jsx)("th",{children:"Appointment Date"}),(0,p.jsx)("th",{children:"Appointment Time"}),(0,p.jsx)("th",{children:"Booking Date"}),(0,p.jsx)("th",{children:"Booking Time"}),(0,p.jsx)("th",{children:"Status"}),N===(null===(n=f[0].doctorId)||void 0===n?void 0:n._id)?(0,p.jsx)("th",{children:"Action"}):(0,p.jsx)(p.Fragment,{})]})}),(0,p.jsx)("tbody",{children:null===f||void 0===f?void 0:f.map((function(n,e){var t,i,s,l,o;return(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:e+1}),(0,p.jsx)("td",{children:(null===n||void 0===n||null===(t=n.doctorId)||void 0===t?void 0:t.firstname)+" "+(null===n||void 0===n||null===(i=n.doctorId)||void 0===i?void 0:i.lastname)}),(0,p.jsx)("td",{children:(null===n||void 0===n||null===(s=n.userId)||void 0===s?void 0:s.firstname)+" "+(null===n||void 0===n||null===(l=n.userId)||void 0===l?void 0:l.lastname)}),(0,p.jsx)("td",{children:null===n||void 0===n?void 0:n.date}),(0,p.jsx)("td",{children:null===n||void 0===n?void 0:n.time}),(0,p.jsx)("td",{children:null===n||void 0===n?void 0:n.createdAt.split("T")[0]}),(0,p.jsx)("td",{children:null===n||void 0===n?void 0:n.updatedAt.split("T")[1].split(".")[0]}),(0,p.jsx)("td",{children:null===n||void 0===n?void 0:n.status}),N===(null===n||void 0===n||null===(o=n.doctorId)||void 0===o?void 0:o._id)?(0,p.jsx)("td",{children:(0,p.jsx)("button",{className:"btn user-btn accept-btn ".concat("Completed"===(null===n||void 0===n?void 0:n.status)?"disable-btn":""),disabled:"Completed"===(null===n||void 0===n?void 0:n.status),onClick:function(){return I(n)},children:"Complete"})}):(0,p.jsx)(p.Fragment,{})]},null===n||void 0===n?void 0:n._id)}))})]})}):(0,p.jsx)(r.Z,{})]}),(0,p.jsx)(c.Z,{})]})}},5108:function(){}}]);
//# sourceMappingURL=564.c68ce9ae.chunk.js.map