(this["webpackJsonploan-calculator"]=this["webpackJsonploan-calculator"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(5),i=n.n(r),c=(n(11),n(1)),u=n(3),o=n(2),m=(n(12),function(e){return l.a.createElement("div",{id:"calculator"},l.a.createElement("header",null,l.a.createElement("h1",null,"Loan Calculator")),e.children)}),s=function(e){return l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.submitFunction()}},e.children)},d=function(e){var t=e.label,n=e.type,a=e.identifier,r=e.updateStateFunction;return l.a.createElement("div",null,l.a.createElement("label",{htmlFor:a},t),l.a.createElement("input",{type:n,name:a,id:a,onChange:function(e){var t=e.target,n=t.name,a=t.value;r(Object(c.a)({},n,a))}}))},b=function(e){return l.a.createElement("div",{id:"result"},e.children)};var h=function(){var e=Object(a.useState)({amount:"",interest:"",years:""}),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)({monthlyPayment:"",totalPayment:"",totalInterest:"",isValid:!1}),h=Object(o.a)(i,2),E=h[0],p=h[1],y=Object(a.useState)(""),f=Object(o.a)(y,2),v=f[0],j=f[1],N=function(e){var t=Object.keys(e)[0],a=Object.values(e)[0];r(Object(u.a)(Object(u.a)({},n),{},Object(c.a)({},t,a)))},O=function(){var e=n.amount,t=n.interest,a=n.years,l="";return e&&t&&a?isNaN(e)||isNaN(t)||isNaN(a)?l="All this values must be a valid number !":(Number(e)<=0||Number(t)<=0||Number(a)<=0)&&(l="All this values must be a positive number !"):l="All this value are required !",!l||(j(l),!1)};return l.a.createElement(m,null,l.a.createElement("p",{style:{color:"white",fontWeight:"bold",fontSize:"16px"}},v),l.a.createElement(s,{submitFunction:function(){if(!O())return!1;var e=Number(n.amount),t=Number(n.interest)/100/12,a=12*Number(n.years),l=Math.pow(1+t,a),r=e*l*t/(l-1);if(isFinite(r)){var i=r.toFixed(2),c=(r*a).toFixed(2),u=(r*a-e).toFixed(2);p({monthlyPayment:i,totalPayment:c,totalInterest:u,isValid:!0})}}},l.a.createElement(d,{label:"Amount:",type:"text",identifier:"amount",updateStateFunction:N}),l.a.createElement(d,{label:"Percent:",type:"text",identifier:"interest",updateStateFunction:N}),l.a.createElement(d,{label:"Years:",type:"text",identifier:"years",updateStateFunction:N}),l.a.createElement(d,{type:"submit"})),E.isValid?l.a.createElement(b,null,l.a.createElement("div",null,l.a.createElement("h4",null,"Loan Amount: "),l.a.createElement("p",null,"$",n.amount),l.a.createElement("h4",null,"Loan Percent: "),l.a.createElement("p",null,n.interest,"%"),l.a.createElement("h4",null,"Years To Pay: "),l.a.createElement("p",null,n.years)),l.a.createElement("div",null,l.a.createElement("h4",null,"Monthly Payment: "),l.a.createElement("p",null,E.monthlyPayment),l.a.createElement("h4",null,"Total Payment: "),l.a.createElement("p",null,E.totalPayment),l.a.createElement("h4",null,"Total Percent: "),l.a.createElement("p",null,E.totalInterest))):"")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.querySelector("#container")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.84c3e4ee.chunk.js.map