(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),c=n(18),i=n.n(c),r=(n(74),n(75),n(65)),s=n(57),u=n(58),l=n(66),h=n(59),m=n(67),f=(n(78),function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(l.a)(this,Object(h.a)(e).call(this,t))).state={echo:""},n}return Object(m.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("/").then(function(e){console.log(e),e.ok&&e.text().then(function(e){t.setState({echo:e})})}).catch(function(t){console.log(t.status)})}},{key:"componentWillUnmount",value:function(){this.serverRequest.abort()}},{key:"render",value:function(){return a.a.createElement("div",{className:"APP"},a.a.createElement(r.a,{type:"primary"},this.state.echo))}}]),e}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},69:function(t,e,n){t.exports=n(125)},74:function(t,e,n){},78:function(t,e,n){}},[[69,1,2]]]);
//# sourceMappingURL=main.28e90ea4.chunk.js.map