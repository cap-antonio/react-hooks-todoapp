(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),c=n.n(r),l=(n(11),n(2)),i=n(1),u=(n(12),n(13),function(e){var t=e.setSearchValue;return o.a.createElement("div",{className:"input-group mb-3 search-input"},o.a.createElement("input",{type:"text",className:"form-control",placeholder:"type to search","aria-label":"type to search","aria-describedby":"basic-addon2",onChange:function(e){t(e.target.value)}}))}),s=n(5),d=(n(14),n(15),function(e){var t=e.label,n=e.important,a=e.done,r=e.onDelete,c=e.onToggleImportant,l=e.onToggleDone,i="TodoListItem";return!0===a&&(i+=" done"),!0===n&&(i+=" important"),o.a.createElement("div",{className:i},o.a.createElement("span",{className:"TodoListItemLabel",onClick:l},t),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:c},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:r},o.a.createElement("i",{className:"fa fa-trash-o"})))}),m=function(e){var t=e.todos,n=e.onDelete,a=e.onToggleImportant,r=e.onToggleDone,c=t.map((function(e){var t=e.id,c=Object(s.a)(e,["id"]);return o.a.createElement("li",{key:t,className:"list-group-item"},o.a.createElement(d,Object.assign({},c,{onDelete:function(){return n(t)},onToggleImportant:function(){return a(t)},onToggleDone:function(){return r(t)}})))}));return o.a.createElement("ul",{className:"list-group todo-list"},c)},f=(n(16),function(e){var t=e.todo,n=e.done;return o.a.createElement("div",{className:"app-header d-flex"},o.a.createElement("h1",null,"do it!"),o.a.createElement("h2",null," ",t?"".concat(t," more to do"):"nothing to do",", ",n?"".concat(n," done"):"nothing done"))}),b=function(e){var t=e.filterOption,n=e.setFilterOption,a=[{name:"all",label:"all"},{name:"active",label:"active"},{name:"done",label:"done"}].map((function(e){var a=e.name,r=e.label,c=t===a?"btn-info":"btn-outline-secondary";return o.a.createElement("button",{type:"button",className:"btn ".concat(c),key:a,onClick:function(){n(a)}},r)}));return o.a.createElement("div",{className:"btn-group input-group mb-3"},a)},p=(n(17),function(e){var t=e.addTodo,n=e.onLabelChange,r=Object(a.useState)(""),c=Object(i.a)(r,2),l=c[0],u=c[1],s=Object(a.useState)("what I need to do?"),d=Object(i.a)(s,2),m=d[0],f=d[1];n=function(e){u(e.target.value)};var b=function(e){e.preventDefault(),0===l.trim().length?(u(""),f("THE FIELD CAN NOT BE EMPTY!")):(t(l),u(""),f("what I need to do?"))};return o.a.createElement("form",{className:"input-group mb-3 add-item-input",onSubmit:b},o.a.createElement("input",{type:"text",className:"form-control",placeholder:m,"aria-label":"what I need to do?","aria-describedby":"basic-addon2",autoFocus:!0,value:l,onChange:n,required:!0}),o.a.createElement("button",{type:"button",className:"btn btn-info",onClick:b},"add task"))}),g=function(){var e=Object(a.useState)([{label:"Make awesome apps",important:!1,done:!1,id:1},{label:"Do your best",important:!1,done:!1,id:2},{label:"Go on",important:!1,done:!1,id:3},{label:"Ok",important:!1,done:!1,id:4}]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),d=s[0],g=s[1],h=Object(a.useState)("all"),v=Object(i.a)(h,2),E=v[0],O=v[1],N=n.length+1,j=n.filter((function(e){return!e.done})).length,y=n.filter((function(e){return e.done})).length,w=function(e,t){switch(t){case"all":return e;case"done":return e.filter((function(e){return e.done}));case"active":return e.filter((function(e){return!e.done}));default:return e}}(function(e,t){return 0===t.length?e:e.filter((function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1}))}(n,d),E);return o.a.createElement("div",{className:" container main-container"},o.a.createElement(f,{todo:j,done:y}),o.a.createElement(p,{addTodo:function(e){var t=[].concat(Object(l.a)(n),[{label:e,important:!1,done:!1,id:N++}]);r(t)}}),0===n.length?null:o.a.createElement("div",{className:"app-header d-flex"},o.a.createElement(u,{setSearchValue:g}),o.a.createElement(b,{setFilterOption:O,filterOption:E})),o.a.createElement(m,{todos:w,onDelete:function(e){var t=n.findIndex((function(t){return t.id===e})),a=Object(l.a)(n);a.splice(t,1),r(a)},onToggleImportant:function(e){var t=n.findIndex((function(t){return t.id===e})),a=Object(l.a)(n);a[t].important=!a[t].important,r(a)},onToggleDone:function(e){var t=n.findIndex((function(t){return t.id===e})),a=Object(l.a)(n);a[t].done=!a[t].done,r(a)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.c075d5c9.chunk.js.map