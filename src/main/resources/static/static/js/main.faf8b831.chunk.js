(this["webpackJsonpsql-tables-app"]=this["webpackJsonpsql-tables-app"]||[]).push([[0],{30:function(e,t,a){e.exports=a(43)},36:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),c=a.n(r),o=(a(35),a(36),a(10));var s=function(){return l.a.createElement("header",null,l.a.createElement("p",null,l.a.createElement(o.b,{to:"/"},"SQL Table Viewer")))},i=a(11),u=a(12),m=a(14),b=a(13),d=a(26),h=a(15),p=a(27),f=a(16),v=a(29),E=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(d.a)({},a,l))},n.state={loaded:!1,tables:[],selectedTable:""},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://sql-tables.herokuapp.com/api/tables").then((function(e){return e.json()})).then((function(t){e.setState({loaded:!0,tables:t,selectedTable:t[0].name})}))}},{key:"render",value:function(){var e=this.state.tables.map((function(e){return l.a.createElement("option",{key:e.id,value:e.name},e.name)})),t=l.a.createElement(h.a.Group,{as:p.a,controlId:"formSelectTable"},l.a.createElement(h.a.Label,{column:!0,sm:2},"Select table to be shown: "),l.a.createElement(f.a,{sm:4,lg:2},l.a.createElement(h.a.Control,{as:"select",name:"selectedTable",value:this.state.selectedTable,onChange:this.handleChange},e)));return l.a.createElement("div",{className:"basic-spacing",id:"form-container"},this.state.loaded?l.a.createElement(h.a,{onSubmit:function(e){return e.preventDefault()},id:"form-table"},t,l.a.createElement(o.b,{to:"/tables/".concat(this.state.selectedTable)},l.a.createElement(v.a,{type:"submit"},"Show table"))):l.a.createElement("div",null,"Loading table names..."))}}]),a}(n.Component),j=a(28),O=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={contentLoaded:!1,tableContent:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://sql-tables.herokuapp.com/api/".concat(this.props.match.params.tableName)).then((function(e){return e.json()})).then((function(t){e.setState({contentLoaded:!0,tableContent:t})}))}},{key:"render",value:function(){if(this.state.contentLoaded){var e=Object.getOwnPropertyNames(this.state.tableContent[0]).map((function(e){return l.a.createElement("th",null,e)})),t=this.state.tableContent.map((function(e){var t=Object.values(e).map((function(e){return l.a.createElement("td",null,e)}));return l.a.createElement("tr",{key:e.id},t)}));return l.a.createElement("div",null,l.a.createElement(j.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("caption",{style:{captionSide:"top"}},this.state.selectedTable),l.a.createElement("thead",null,l.a.createElement("tr",null,e)),l.a.createElement("tbody",null,t)))}return l.a.createElement("div",null,"Loading content...")}}]),a}(n.Component),g=a(5),k=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={loaded:!1,tables:[],selectedTable:""},n}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement(g.a,{exact:!0,path:"/",component:E}),l.a.createElement(g.a,{path:"/tables/:tableName",component:O}))}}]),a}(n.Component);var y=function(){return l.a.createElement("div",null,l.a.createElement(o.a,null,l.a.createElement(s,null),l.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.faf8b831.chunk.js.map