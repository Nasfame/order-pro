(this["webpackJsonporder-pro"]=this["webpackJsonporder-pro"]||[]).push([[0],{91:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(17),c=n.n(a),s=n(13),o=n(20),i=n(7),l=Object(r.createContext)({}),j=n(51),d=n.n(j),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"GET",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r="https://pro-order.herokuapp.com/order";n&&(r+="/".concat(n));var a={method:e,url:r,mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},data:t};return d()(a)},b=n(23),m=n.n(b),O=n(30),h=n(34),p=n(98),x=n(99),f=n(97),v=n(1),g=function(e){e.history;var t=e.Class,n=e.Id,r=[["/","Home","home"],["/add","Order entry","notepad"],["/add","Receipt entry","notepad"],["/orders","Order history","pad"],["/orders","Receipt history","pad"],["","Refresh","refresh"],["/login","Logout","power"]].map((function(e,t){var n=Object(s.a)(e,3),r=n[0],a=n[1],c=n[2];return Object(v.jsx)("li",{children:Object(v.jsx)(w,{to:r,Class:"icon-".concat(c),children:Object(v.jsx)("b",{children:a})},t)})}));return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(p.a,{children:[Object(v.jsx)(p.a.Toggle,{variant:"",className:"icon-hamburger p-3"}),Object(v.jsxs)(p.a.Menu,{className:t,id:n,children:[Object(v.jsxs)(x.a,{bg:"primary d-flex flex-column align-items-start py-0",expand:"lg",variant:"dark",children:[Object(v.jsx)(f.a,{className:"logo m-2"}),Object(v.jsx)(x.a.Brand,{href:"",className:"m-2\r ",children:"Order Pro"})]}),Object(v.jsx)("ol",{className:"navbar-nav m-2 text-nowrap",children:r})]})]})})},y=function(e){var t=e.Class,n=e.Id,r=e.children;return Object(v.jsx)("div",{className:t,id:n,children:r})},C=function(e){var t=e.Class,n=e.children;return Object(v.jsx)("header",{className:"font-weight-bold p-2 m-2 "+t,children:n})},N=n(54),w=function(e){var t=e.Class,n=e.to,r=e.children,a=Object(i.g)();return Object(v.jsx)(N.a,{variant:"default",className:"text-decoration-none "+t,onClick:function(){return a.push(n)},children:r})},S=function(e){var t=e.Class,n=e.children;return Object(v.jsx)("nav",{className:"navbar bg-primary navBar "+t,children:n})},T=n(101),G=function(e){var t=e.order,n=(e.handleRemoveOrder,t.id),r=(t.time,t.date,t.customerName),a=t.customerDetails;return Object(v.jsx)(T.a,{className:"order text-nowrap mb-2 mx-2",children:Object(v.jsxs)(T.a.Body,{className:"order-details",children:[Object(v.jsxs)(y,{Class:"d-flex justify-content-between",children:[Object(v.jsx)(T.a.Text,{className:"d-inline",children:r}),Object(v.jsx)(w,{Class:"text-primary d-inline",to:"/edit/".concat(n),children:Object(v.jsx)("b",{children:"View"})})]}),Object(v.jsx)(T.a.Text,{children:a})]})})},D=n(21),k=n(24),E=n(100),P=function(e){var t=e.orderToEdit,n=e.handleOnSubmit,a=Object(i.g)(),c=Object(r.useState)(null!==t&&void 0!==t?t:{id:"",customerName:"",customerDetails:"",date:"",discount:"",amount:"",time:""}),o=Object(s.a)(c,2),l=o[0],j=o[1],d=Object(r.useState)(""),u=Object(s.a)(d,2),b=u[0],m=u[1],O=function(e){var t=e.target,n=t.name,r=t.value;j((function(e){return Object(k.a)(Object(k.a)({},e),{},Object(D.a)({},n,r))}))};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(S,{Class:"justify-content-between py-3",children:[Object(v.jsx)(N.a,{className:"icon-back",onClick:function(){a.goBack()}}),Object(v.jsx)(y,{children:"ACCOUNT DETAILS"}),Object(v.jsx)(y,{})]}),Object(v.jsxs)(y,{Class:"container-fluid justify-content-center align-items-center",children:[b&&Object(v.jsx)(y,{Class:"errorMsg",children:b}),Object(v.jsxs)(E.a,{onSubmit:function(e){e.preventDefault();var t="";Object.values(l).every((function(e){return""!=="".concat(e).trim()}))?n(l):t="Please fill out all the fields.",m(t)},children:[Object(v.jsx)(E.a.Group,{children:Object(v.jsx)(E.a.Control,{className:"icon-menu input-control",type:"number",value:l.id,placeholder:"Order Number",onChange:O,name:"id"})}),Object(v.jsx)(E.a.Group,{children:Object(v.jsx)(E.a.Control,{className:"icon-date input-control",type:"date",value:l.date,placeholder:"Date",onChange:O,name:"date"})}),Object(v.jsx)(E.a.Group,{children:Object(v.jsx)(E.a.Control,{className:" icon-time input-control",type:"time",value:l.time,placeholder:"Time",onChange:O,name:"time"})}),Object(v.jsx)(E.a.Group,{children:Object(v.jsx)(E.a.Control,{className:"icon-people input-control",type:"text",value:l.customerName,placeholder:"Customer Name",onChange:O,name:"customerName"})}),Object(v.jsx)(E.a.Group,{children:Object(v.jsx)(E.a.Control,{className:"icon-hamburger input-control",value:l.customerDetails,placeholder:"  Customer Details",onChange:O,type:"text",name:"customerDetails"})}),Object(v.jsx)(E.a.Group,{children:Object(v.jsx)(E.a.Label,{className:"icon-plus input-control py-2 px-3 text-primary",children:"Add an item"})}),Object(v.jsx)(E.a.Group,{children:Object(v.jsx)(E.a.Control,{className:"icon-discount input-control",type:"number",value:l.discount,placeholder:"Discount",onChange:O,name:"discount"})}),Object(v.jsx)(E.a.Group,{children:Object(v.jsx)(E.a.Control,{className:"icon-amount input-control",type:"number",value:l.amount,placeholder:"Total Amount",onChange:O,name:"amount"})}),Object(v.jsx)(N.a,{variant:"default",type:"submit",className:"d-inline-flex justify-content-center border border-primary text-primary submit-btn",children:"Submit"})]})]})]})},I=function(e){var t=e.history,n=Object(r.useContext)(l),a=n.orders,c=n.setOrders,s=n.api,o=function(){var e=Object(O.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c([].concat(Object(h.a)(a),[n]));case 2:s("POST",n),t.push("/orders");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(P,{handleOnSubmit:o,history:t})})},A=function(e){var t=e.history,n=Object(r.useContext)(l),a=n.orders,c=n.setOrders,s=n.api,o=Object(i.h)().id,j=a.find((function(e){return e.id==o}));return Object(v.jsx)(P,{orderToEdit:j,handleOnSubmit:function(e){var n=a.filter((function(e){return e.id!=o}));c([e].concat(Object(h.a)(n))),s("PATCH",e,o),t.push("/")}})},F=function(e){var t=e.history,n=Object(r.useContext)(l).handleLogin,a=Object(r.useState)(""),c=Object(s.a)(a,2),o=c[0],i=c[1],j=Object(r.useState)({username:"",password:""}),d=Object(s.a)(j,2),u=d[0],b=d[1],m=function(e){var t=e.target,n=t.name,r=t.value;b((function(e){return Object(k.a)(Object(k.a)({},e),{},Object(D.a)({},n,r))}))};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(S,{Class:"flex-column justify-content-center align-items-center py-5",children:[Object(v.jsx)(y,{Class:"logo my-2"}),Object(v.jsx)(y,{children:"webinfosoftwares@gmail.com"}),Object(v.jsx)(y,{children:"9387303270 "})]}),Object(v.jsx)(C,{Class:"text-primary",children:"Welcome!"}),Object(v.jsxs)("div",{className:"container-fluid justify-content-center",children:[o&&Object(v.jsx)("p",{className:"errorMsg",children:o}),Object(v.jsxs)(E.a,{onSubmit:function(e){e.preventDefault();var r="";Object.values(u).every((function(e){return""!=="".concat(e).trim()}))?(console.log(u),n(u,t),b({username:"",password:""})):r="Please fill out all the fields.",i(r)},children:[Object(v.jsx)(E.a.Group,{children:Object(v.jsx)(E.a.Control,{className:"icon-people input-control",value:u.username,placeholder:"Username",onChange:m,name:"username"})}),Object(v.jsx)(E.a.Group,{children:Object(v.jsx)(E.a.Control,{className:"icon-password input-control",type:"password",value:u.password,placeholder:"Password",onChange:m,name:"password"})}),Object(v.jsx)(N.a,{variant:"default",type:"submit",className:"d-inline-flex justify-content-center border border-primary text-primary submit-btn",children:"Login"})]})]})]})},L=n(57),B=n.n(L),U=function(e){e.history;var t=Object(r.useContext)(l),n=t.orders;t.setOrders,t.api,t.handler;return Object(v.jsxs)(y,{Class:"orders",children:[Object(v.jsxs)(S,{children:[Object(v.jsx)(g,{Id:"side-bar",Class:"m-0 p-0"}),Object(v.jsx)(w,{Class:"text-light border-white rounded py-1 mx-3 my-2",to:"/login",children:"PUNCH OUT"})]}),Object(v.jsx)(y,{Class:"order-list",children:B.a.isEmpty(n)?Object(v.jsx)(y,{Class:"message",children:"No Orders Yet"}):n.map((function(e){return Object(v.jsx)(G,{order:e},e.id)}))})]})},J=function(e,t){var n=Object(r.useState)((function(){try{var n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(r){return t}})),a=Object(s.a)(n,2),c=a[0],o=a[1];return Object(r.useEffect)((function(){localStorage.setItem(e,JSON.stringify(c))}),[e,c]),[c,o]},R=function(){var e=J("orders",[]),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),j=Object(s.a)(c,2),d=(j[0],j[1]);Object(r.useEffect)((function(){u().then((function(e){if(500!=e.status){var t=e.data;console.log(t),a(t)}})),console.log("mount")}),[]);return Object(v.jsx)(o.a,{children:Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(y,{Class:"main-content",children:Object(v.jsx)(l.Provider,{value:{orders:n,setOrders:a,api:u,handleLogin:function(e,t){var n=e.username,r=e.password;"admin"==n&&"admin"==r&&(d(!0),t.push("/orders"))}},children:Object(v.jsxs)(i.d,{children:[Object(v.jsx)(i.b,{component:F,path:"/",exact:!0}),Object(v.jsx)(i.b,{component:I,path:"/add"}),Object(v.jsx)(i.b,{component:U,path:"/orders"}),Object(v.jsx)(i.b,{component:A,path:"/edit/:id"}),Object(v.jsx)(i.b,{component:F,path:"/login"}),Object(v.jsx)(i.b,{path:"*",component:function(){return Object(v.jsx)(i.a,{to:"/"})}})]})})})})})};n(90),n(91);c.a.render(Object(v.jsx)(R,{}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.41ad80a4.chunk.js.map