(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(13),r=t.n(l),c=(t(20),t(2)),u=t(3),i=t.n(u),m="/api/persons",s=function(){return i.a.get(m).then(function(e){return e.data})},f=function(e){return i.a.post(m,e).then(function(e){return e.data})},d=function(e,n){return i.a.put("".concat(m,"/").concat(e),n)},g=function(e){return i.a.delete("".concat(m,"/").concat(e)).then(function(e){return e.data})},b=function(e){return o.a.createElement("div",null,o.a.createElement("p",{className:"person"},e.name," ",e.number," ",o.a.createElement("button",{onClick:e.onClick,value:e.id},"delete")))},h=function(e){return o.a.createElement("div",null,(n=e.allPersons,t=e.onClick,n.map(function(e){return o.a.createElement(b,{key:e.id,id:e.id,name:e.name,number:e.number,onClick:t})})));var n,t},p=function(e){return o.a.createElement("div",null,o.a.createElement("p",null,"filter shown with: ",o.a.createElement("input",{value:e.value,onChange:e.onChange,onKeyUp:e.onKeyUp})))},v=function(e){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:e.onSubmit},o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:e.valueName,onChange:e.onChangeName})),o.a.createElement("div",null,"number: ",o.a.createElement("input",{value:e.valueNumber,onChange:e.onChangeNumber})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add"))))},E=function(e){var n=e.type,t=e.message;return null===t?null:"error"===n?o.a.createElement("div",{className:"error"},t):o.a.createElement("div",{className:"success"},t)},k=function(){return o.a.createElement("div",{style:{color:"white",fontStyle:"italic",fontSize:16,background:"teal",height:100,textAlign:"center",marginTop:50}},o.a.createElement("br",null),o.a.createElement("em",null,"Phonebook app by ",o.a.createElement("strong",null,"Code for my Life")))},y=function(){return o.a.createElement("div",{style:{color:"white",fontStyle:"italic",fontSize:16,background:"teal",height:50,paddingLeft:10,paddingBottom:15}},o.a.createElement("br",null),o.a.createElement("p",null,"Phonebook App by ",o.a.createElement("strong",null,"Code for my Life")," - Created with React"))},w=[],C=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],l=n[1],r=Object(a.useState)(""),u=Object(c.a)(r,2),i=u[0],m=u[1],b=Object(a.useState)(""),C=Object(c.a)(b,2),O=C[0],j=C[1],N=Object(a.useState)(""),S=Object(c.a)(N,2),P=S[0],A=S[1],L=Object(a.useState)(null),R=Object(c.a)(L,2),U=R[0],I=R[1],x=Object(a.useState)(""),B=Object(c.a)(x,2),K=B[0],z=B[1];Object(a.useEffect)(function(){console.log("effect"),s().then(function(e){l(e),w=e})},[]);var D=function(e,n){return e.filter(function(e){return!0===e.name.toLowerCase().startsWith(n.toLowerCase())})},J=function(e,n,a){if(z(e),I(n),setTimeout(function(){I(null)},4e3),"error"===e&&null!=a){var o=t.filter(function(e){return e.id!==a});l(o),w=o}};return o.a.createElement("div",null,o.a.createElement(y,null),o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,"Phonebook"),o.a.createElement(E,{type:K,message:U}),o.a.createElement(p,{value:P,onChange:function(e){if(A(e.target.value),console.log(e.target.value),""===e.target.value)console.log("effect"),s().then(function(e){return l(e)});else{var n=D(w,e.target.value);console.log("debug filtered",n),l(n)}},onKeyUp:function(e){if(console.log("press button",e.key),"Backspace"===e.key){var n=D(w,e.target.value);console.log("debug onkeyup",n),l(n)}}}),o.a.createElement("h3",null,"Add a new or update existing one"),o.a.createElement(v,{onSubmit:function(e){e.preventDefault();var n=t.filter(function(e){return e.name===i});console.log("isInArray",n.length),console.log("isInArray:::",n);var a={name:i,number:O};if(0===n.length)console.log("button clicked",e.target),f(a).then(function(e){l(t.concat(e)),m(""),j(""),w.push(e),console.log("debug phonebooktmp",w),J("success","Added ".concat(a.name," to the phonebook"),null)});else if(window.confirm("".concat(i," is already added to phonebook, replace the old number with a new one?"))){var o=n[0].id;console.log("id",o),d(o,a).then(function(e){l(t.map(function(n){return n.id!==o?n:e.data})),J("success","Updated ".concat(a.name," to the phonebook"),null),m(""),j("")}).catch(function(e){J("error","Updating of ".concat(a.name," caused an error: '").concat(e.message,"'"),null),m(""),j("")})}else m(""),j("")},valueName:i,onChangeName:function(e){console.log(e.target.value),m(e.target.value)},valueNumber:O,onChangeNumber:function(e){console.log(e.target.value),j(e.target.value)}}),o.a.createElement("h3",null,"Numbers"),o.a.createElement(h,{allPersons:t,onClick:function(e){console.log("in removePersons");var n=parseInt(e.target.value),a=t.find(function(e){return e.id===n});console.log("remove id",n,"removed: ",a.name),window.confirm("Do you really want to delete '".concat(a.name,"'?"))&&g(n).then(function(e){console.log("returnedPersons",e);var o=t.filter(function(e){return e.id!==n});l(o),w=o,console.log("phonebook tmp",w),console.log("persons",t),J("success","Removed ".concat(a.name," from the phonebook"),null)}).catch(function(e){J("error","the person '".concat(a.name,"' cannot be deleted from the server! ERROR:: ").concat(e),null)})}})),o.a.createElement(k,null))};r.a.render(o.a.createElement(C,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a773473c.chunk.js.map