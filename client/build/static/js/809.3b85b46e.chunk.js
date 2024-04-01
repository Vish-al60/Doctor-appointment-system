"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[809],{3321:function(n,e,s){s(2791);var i=s(184);e.Z=function(){return(0,i.jsx)("h2",{className:"nothing flex-center",children:"Nothing to show"})}},6794:function(n,e,s){s.d(e,{Z:function(){return r}});s(2791);var i=s(6355),t=s(3495),l=s(1087),c=s(184),r=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("footer",{children:[(0,c.jsxs)("div",{className:"footer",children:[(0,c.jsxs)("div",{className:"footer-links",children:[(0,c.jsx)("h3",{children:"Links"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(l.OL,{to:"/",children:"Home"})}),(0,c.jsx)("li",{children:(0,c.jsx)(l.OL,{to:"/doctors",children:"Doctors"})}),(0,c.jsx)("li",{children:(0,c.jsx)(l.OL,{to:"/appointments",children:"Appointments"})}),(0,c.jsx)("li",{children:(0,c.jsx)(l.OL,{to:"/notifications",children:"Notifications"})}),(0,c.jsx)("li",{children:(0,c.jsx)(t.fO,{to:"/#contact",children:"Contact Us"})}),(0,c.jsx)("li",{children:(0,c.jsx)(l.OL,{to:"/profile",children:"Profile"})})]})]}),(0,c.jsxs)("div",{className:"social",children:[(0,c.jsx)("h3",{children:"Social links"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{className:"facebook",children:(0,c.jsx)(i.tBk,{})}),(0,c.jsx)("li",{className:"youtube",children:(0,c.jsx)(i.V2E,{})}),(0,c.jsx)("li",{className:"instagram",children:(0,c.jsx)(i.Zf_,{})})]})]})]}),(0,c.jsxs)("div",{className:"footer-bottom",children:["Made by Vishal"," ","\xa9 ",(new Date).getFullYear()]})]})})}},3841:function(n,e,s){s.d(e,{Z:function(){return u}});var i=s(9439),t=s(2791),l=s(7689),c=s(1087),r=s(3495),o=s(9434),a=s(5318),d=s(3853),h=s(1213),x=s(456),j=s(184),u=function(){var n=(0,t.useState)(!1),e=(0,i.Z)(n,2),s=e[0],u=e[1],f=(0,o.I0)(),m=(0,l.s0)(),p=(0,t.useState)(localStorage.getItem("token")||""),v=(0,i.Z)(p,2),g=v[0],N=(v[1],(0,t.useState)(localStorage.getItem("token")?(0,x.Z)(localStorage.getItem("token")):"")),k=(0,i.Z)(N,2),L=k[0];k[1];return(0,j.jsxs)("header",{children:[(0,j.jsxs)("nav",{className:s?"nav-active":"",children:[(0,j.jsx)("h2",{className:"nav-logo",children:(0,j.jsx)(c.OL,{to:"/",children:"HealthBooker"})}),(0,j.jsxs)("ul",{className:"nav-links",children:[(0,j.jsx)("li",{children:(0,j.jsx)(c.OL,{to:"/",children:"Home"})}),(0,j.jsx)("li",{children:(0,j.jsx)(c.OL,{to:"/doctors",children:"Doctors"})}),g&&L.isAdmin&&(0,j.jsx)("li",{children:(0,j.jsx)(c.OL,{to:"/dashboard/users",children:"Dashboard"})}),g&&!L.isAdmin&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(c.OL,{to:"/appointments",children:"Appointments"})}),(0,j.jsx)("li",{children:(0,j.jsx)(c.OL,{to:"/notifications",children:"Notifications"})}),(0,j.jsx)("li",{children:(0,j.jsx)(c.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,j.jsx)("li",{children:(0,j.jsx)(r.fO,{to:"/#contact",children:"Contact Us"})}),(0,j.jsx)("li",{children:(0,j.jsx)(c.OL,{to:"/profile",children:"Profile"})})]}),g?(0,j.jsx)("li",{children:(0,j.jsx)("span",{className:"btn",onClick:function(){f((0,a.ps)({})),localStorage.removeItem("token"),m("/login")},children:"Logout"})}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(c.OL,{className:"btn",to:"/login",children:"Login"})}),(0,j.jsx)("li",{children:(0,j.jsx)(c.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,j.jsxs)("div",{className:"menu-icons",children:[!s&&(0,j.jsx)(d.cur,{className:"menu-open",onClick:function(){u(!0)}}),s&&(0,j.jsx)(h.ySC,{className:"menu-close",onClick:function(){u(!1)}})]})]})}},809:function(n,e,s){s.r(e),s.d(e,{default:function(){return f}});var i=s(4165),t=s(5861),l=s(9439),c=s(2791),r=s(9434),o=s(3321),a=s(6794),d=s(3841),h=s(4971),x=s(5318),j=s(3200),u=(s(5108),s(184)),f=function(){var n=(0,c.useState)([]),e=(0,l.Z)(n,2),s=e[0],f=e[1],m=(0,r.I0)(),p=(0,r.v9)((function(n){return n.root})).loading,v=function(){var n=(0,t.Z)((0,i.Z)().mark((function n(e){var s;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m((0,x.K4)(!0)),n.next=4,(0,h.Z)("/notification/getallnotifs");case 4:s=n.sent,m((0,x.K4)(!1)),f(s),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}();return(0,c.useEffect)((function(){v()}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.Z,{}),p?(0,u.jsx)(j.Z,{}):(0,u.jsxs)("section",{className:"container notif-section",children:[(0,u.jsx)("h2",{className:"page-heading",children:"Your Notifications"}),s.length>0?(0,u.jsx)("div",{className:"notifications",children:(0,u.jsxs)("table",{children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"S.No"}),(0,u.jsx)("th",{children:"Content"}),(0,u.jsx)("th",{children:"Date"}),(0,u.jsx)("th",{children:"Time"})]})}),(0,u.jsx)("tbody",{children:null===s||void 0===s?void 0:s.map((function(n,e){return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:e+1}),(0,u.jsx)("td",{children:null===n||void 0===n?void 0:n.content}),(0,u.jsx)("td",{children:null===n||void 0===n?void 0:n.updatedAt.split("T")[0]}),(0,u.jsx)("td",{children:null===n||void 0===n?void 0:n.updatedAt.split("T")[1].split(".")[0]})]},null===n||void 0===n?void 0:n._id)}))})]})}):(0,u.jsx)(o.Z,{})]}),(0,u.jsx)(a.Z,{})]})}},5108:function(){}}]);
//# sourceMappingURL=809.3b85b46e.chunk.js.map