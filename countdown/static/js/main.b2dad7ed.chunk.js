(this["webpackJsonpcountdown-node"]=this["webpackJsonpcountdown-node"]||[]).push([[0],{13:function(e,t){var n,r,a={"+":function(e,t){return!(e<0||t<0)&&e+t},"-":function(e,t){return!(t>=e)&&e-t},_:function(e,t){return!(e>=t)&&t-e},"*":function(e,t){return e*t},"/":function(e,t){return 0!==t&&e%t===0&&e/t},"?":function(e,t){return 0!==e&&t%e===0&&t/e}},c={"+":1,"-":1.05,_:1.05,"*":1.2,"/":1.3,"?":1.3};function s(e,t,o,i,u,l,f){u--;for(var h=0;h<e.length-1;++h){var d=e[h];if(!1!==d){e[h]=!1;for(var b=h+1;b<e.length;++b){var j=e[b];if(!1!==j&&(!(h<t)||o[h]||o[b]))for(var v in a){var p=a[v](d[0],j[0]);if(!1!==p){for(var m=Math.abs(p);m%10===0&&0!==m;)m/=10;10!==d[0]&&10!==j[0]||"*"!==v||(m=1);var O=l+(m*=c[v]);(Math.abs(p-i)<Math.abs(n[0]-i)||Math.abs(p-i)===Math.abs(n[0]-i)&&(f||O<r))&&(n=[p,v,d,j],r=O),e[b]=[p,v,d,j];var g=o[b];o[b]=!0,u>0&&(f||n[0]!==i||O<r)&&s(e,h+1,o,i,u,O,f),o[b]=g,e[b]=j}}}e[h]=d}}}function o(e){if(e.constructor!==Array)return 0;for(var t=0,n=0;n<e.length;++n)t+=o(e[n]);return t+e.length}function i(e,t,r){e=e.map((function(e){return[e,!1]}));var a=new Array(e.length).fill(!1);return n=[0,0],s(e,0,a,t,e.length,0,r),n}function u(e){var t={"?":"/",_:"-"},n={"*":!0,"+":!0};if(e.length<4)return e;for(var r=2;r<e.length;++r){var a=e[r];(a=u(a))[1]===e[1]&&n[e[1]]?(e.splice(r--,1),e=e.concat(a.slice(2))):e[r]=a}if(e[1]in t){e[1]=t[e[1]];var c=e[2];e[2]=e[3],e[3]=c}else if(n[e[1]])for(var s=e.slice(2).sort((function(e,t){return t[0]-e[0]})),o=2;o<e.length;++o)e[o]=s[o-2];return e}function l(e){for(var t=[],n=2;n<e.length;++n){var r=e[n];r.length>=4&&t.push(l(r))}t.sort((function(e,t){return o(t)-o(e)}));for(var a=[],c=0;c<t.length;++c)a=a.concat(t[c]);var s=e.slice(2).map((function(e){return e[0]})),i=[e[0],e[1]].concat(s);return a.concat([i])}function f(e,t){var n="";e=e.slice(0);for(var r=0;r<e.length;++r){var a=e[r];n+=a.slice(2).join(" ".concat(a[1]," "))+" = ".concat(a[0],", ")}n=n.substr(0,n.length-2);var c=e[e.length-1][0];return c!==t&&(n+=" (off by ".concat(Math.abs(c-t),")")),n}t.serialisedResult=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e.sort(),n=[e[0],e[0]],!a){for(var c=1;c<e.length;++c)Math.abs(e[c]-t)<Math.abs(n[0]-t)&&(n=[e[c],e[c]],r=e[c]);if(n[0]===t)return t+" = "+t}return l(u(i(e,t,a)))},t.solve_numbers=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return f(t.serialisedResult(e,n,r),n)}},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(12),s=n.n(c),o=n(2),i=n(0),u=function(){return Object(i.jsx)("header",{children:Object(i.jsxs)("div",{className:"header-container",children:[Object(i.jsx)("a",{href:"https://reallybigshoe.co.uk/index.html",children:Object(i.jsx)("img",{src:"images/favicon-32x32.png",alt:"Home"})}),Object(i.jsx)("a",{href:"https://reallybigshoe.co.uk/index.html",children:"Home"}),Object(i.jsx)("a",{className:"twitter",href:"https://twitter.com/ReallyBigShoeUK",target:"_blank",rel:"noopener noreferrer",children:"Twitter"}),Object(i.jsx)("a",{className:"github",href:"https://github.com/JulianNicholls",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})]})})},l=function(e){var t=e.panel,n=e.setPanel;return Object(i.jsxs)("div",{className:"container tab-holder",children:[Object(i.jsx)("div",{className:"tab"+("letters"===t?" active":""),"data-section":"letters",onClick:function(){return n("letters")},children:"Letters"}),Object(i.jsx)("div",{className:"tab"+("numbers"===t?" active":""),"data-section":"numbers",onClick:function(){return n("numbers")},children:"Numbers"})]})},f=n(13),h=n(11),d=n.n(h),b=n(14),j=n(7),v=n(8),p=n(16),m=function(){function e(t){Object(j.a)(this,e),this.text=t.toLowerCase(),this._deconstruct()}return Object(v.a)(e,[{key:"canBeMadeFrom",value:function(t){t instanceof e?t=t.letterMap:t instanceof Map||(t=new e(t).letterMap);var n=!0;return this.letterMap.forEach((function(e,r){n=n&&t.has(r)&&t.get(r)>=e})),n}},{key:"isAnagramOf",value:function(t){return t instanceof e?t=t.letterMap:t instanceof Map||(t=new e(t).letterMap),this.letterMap.size===t.size&&(this.letterMap.forEach((function(e,n){var r=t.get(n);if(!r||r!==e)return!1})),!0)}},{key:"_deconstruct",value:function(){var e=this;this.letterMap=new Map,Object(p.a)(this.text).forEach((function(t){var n=e.letterMap.get(t);e.letterMap.set(t,n+1||1)}))}}]),e}(),O=function(){function e(){Object(j.a)(this,e),this._loadWords()}return Object(v.a)(e,[{key:"canBeMadeFrom",value:function(e){return e instanceof m?e=e.letterMap:e instanceof Map||(e=new m(e).letterMap),this.words.filter((function(t){return t.canBeMadeFrom(e)})).map((function(e){return e.text})).sort((function(e,t){var n=t.length-e.length;return 0!==n?n:e<t?-1:1}))}},{key:"_loadWords",value:function(){var e=Object(b.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/data/countdown.words.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.words=n.map((function(e){return new m(e)}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),g=a.a.createContext(),x=function(e){var t=e.children,n=Object(r.useState)([]),a=Object(o.a)(n,2),c=a[0],s=a[1],u=Object(r.useState)([]),l=Object(o.a)(u,2),h=l[0],d=l[1];Object(r.useEffect)((function(){s(new O)}),[]);var b={foundWords:h,getWords:function(e){d(c.canBeMadeFrom(e))},solveNumbers:f.serialisedResult};return Object(i.jsx)(g.Provider,{value:b,children:t})},w=function(){var e=Object(r.useContext)(g);if(void 0===e)throw new Error("useWords() must be used within a WordsProvider");return e},M=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],c=w().getWords;return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("form",{id:"letters-form",onSubmit:function(e){return e.preventDefault(),c(n),!1},children:[Object(i.jsx)("input",{type:"search",inputMode:"search",id:"letters",value:n,onChange:function(e){var t=e.target.value;/^[A-Z]*$/i.test(t)&&(a(t),t.length>=7&&t.length<=15&&c(t))},autoComplete:"off",autoCorrect:"off",autoFocus:!0}),Object(i.jsx)("button",{type:"submit",className:"big-button",disabled:n.length<7,children:"Countdown"})]})})},N=n(15),y=function(e){var t=e.result;if(0===t.length)return null;var n=t.map((function(e){var t=Object(N.a)(e),n=t[0],r=t[1];return t.slice(2).join(" ".concat(r," "))+" = ".concat(n,"\n")}));return Object(i.jsx)("pre",{children:n})},C=function(e){var t=e.result;return Object(i.jsxs)("div",{className:"result-box",children:[Object(i.jsx)("div",{className:"header",children:"Method"}),Object(i.jsx)("div",{className:"rb-main",children:Object(i.jsx)(y,{result:t})})]})},k=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(o.a)(c,2),u=s[0],l=s[1],f=Object(r.useState)([]),h=Object(o.a)(f,2),d=h[0],b=h[1],j=w().solveNumbers;return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("form",{id:"numbers-form",children:[Object(i.jsx)("label",{htmlFor:"numbers",children:"Numbers"}),Object(i.jsx)("input",{type:"search",inputMode:"search",id:"numbers",value:n,onChange:function(e){var t=e.target.value;t=t.trimStart(),/^(\d{1,3}\s*){0,6}$/.test(t)&&a(t)},autoComplete:"off",autoCorrect:"off",autoFocus:!0,placeholder:"e.g. 1 7 3 4 8 25"}),Object(i.jsx)("label",{htmlFor:"target",children:"Target"}),Object(i.jsx)("input",{type:"number",id:"target",value:u,onChange:function(e){var t=e.target.value;t=t.trim(),/^\d{0,3}$/.test(t)&&l(t)},autoComplete:"off",autoCorrect:"off"}),Object(i.jsx)("button",{id:"solve-numbers",type:"submit",className:"big-button",onClick:function(e){e.preventDefault();var t=n.split(/\s+/).map((function(e){return parseInt(e,10)})),r=parseInt(u,10);b(j(t,r))},disabled:!(/^(\d{1,3}\s+){5}\d{1,3}$/.test(n.trim())&&/^\d{3}$/.test(u)),children:"Countdown"})]}),Object(i.jsx)(C,{result:d})]})},S=function(e){var t=e.words,n=t.length,r=t[0].length;return Object(i.jsxs)("div",{className:n<21?"word-box":"word-box wide",children:[Object(i.jsxs)("div",{className:"header",id:"header-".concat(r),children:[r,"-letter words ",Object(i.jsxs)("span",{children:["(",n,")"]})]}),Object(i.jsx)("p",{children:t.map((function(e,t){return Object(i.jsxs)("a",{href:"http://dictionary.reference.com/browse/".concat(e),target:"_blank",rel:"noopener noreferrer",children:[e.toUpperCase(),t!==n-1&&", "]},e)}))})]})},_=function(){var e=w().foundWords;return 0===e.length?null:Object(i.jsx)("div",{className:"wordview",children:function(e){var t=0,n=[],r=[];return e.forEach((function(e){e.length!==t&&(0!==n.length&&r.push(Object(i.jsx)(S,{words:n},t)),n=[],t=e.length),n.push(e)})),r.concat(Object(i.jsx)(S,{words:n},t))}(e)})},F=function(){var e=Object(r.useState)("letters"),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(u,{}),Object(i.jsx)(l,{panel:n,setPanel:a}),"letters"===n?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(M,{}),Object(i.jsx)(_,{})]}):Object(i.jsx)(k,{})]})};n(23),n(24);s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(x,{children:Object(i.jsx)(F,{})})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.b2dad7ed.chunk.js.map