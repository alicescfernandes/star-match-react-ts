(this["webpackJsonpstart-match"]=this["webpackJsonpstart-match"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),s=n(4),u=n.n(s),i=(n(10),n(2)),o=(n(11),{sum:function(e){return e.reduce((function(e,t){return e+t}),0)},range:function(e,t){return Array.from({length:t-e+1},(function(t,n){return e+n}))},random:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randomSumIn:function(e,t){for(var n=[[]],a=[],r=0;r<e.length;r++)for(var c=0,s=n.length;c<s;c++){var u=n[c].concat(e[r]),i=o.sum(u);i<=t&&(n.push(u),a.push(i))}return a[o.random(0,a.length-1)]}}),l={available:"lightgray",used:"lightgreen",wrong:"lightcoral",candidate:"deepskyblue"};function m(e){var t=e.number,n=e.status,r=e.onNumberClick;return Object(a.jsx)("button",{style:{backgroundColor:l[n]},onClick:function(){r(t,n)},className:"number",children:t},Date.now()+"-n-"+t)}function d(e){var t=e.stars;return Object(a.jsx)(a.Fragment,{children:o.range(1,t).map((function(e){return Object(a.jsx)("div",{className:"star"},Date.now()+"-s-"+e)}))})}function b(e){var t=e.onClick,n=e.gameStatus;return Object(a.jsxs)("div",{onClick:t,className:"game-done",children:[Object(a.jsx)("div",{style:{color:"lost"===n?"red":"green"},className:"message",children:"lost"===n?"Game Over":"Nice"}),Object(a.jsx)("button",{children:"Play Again"})]})}var j=function(e){var t=e.resetGame,n=function(){var e=Object(r.useState)(o.random(1,9)),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(o.range(1,9)),s=Object(i.a)(c,2),u=s[0],l=s[1],m=Object(r.useState)([]),d=Object(i.a)(m,2),b=d[0],j=d[1],f=Object(r.useState)(10),h=Object(i.a)(f,2),g=h[0],v=h[1];return Object(r.useEffect)((function(){if(g>0&&u.length>0){var e=setTimeout((function(){v(g-1)}),1e3);return function(){return clearTimeout(e)}}})),{stars:n,availableNums:u,candidateNums:b,secondsLeft:g,setGameState:function(e){if(o.sum(e)!==n)j(e);else{var t=u.filter((function(t){return!e.includes(t)}));a(o.randomSumIn(t,9)),l(t),j([])}}}}(),c=n.stars,s=n.availableNums,u=n.candidateNums,l=n.secondsLeft,j=n.setGameState,f=o.sum(u)>c,h=0===s.length?"won":0===l?"lost":"active";function g(e){return s.includes(e)?u.includes(e)?f?"wrong":"candidate":"available":"used"}function v(e,t){if("active"===h&&"used"!==t){var n="available"===t?u.concat(e):u.filter((function(t){return t!==e}));j(n)}}return Object(a.jsxs)("div",{className:"game",children:[Object(a.jsx)("div",{className:"help",children:"Pick 1 or more numbers that sum to the number of stars"}),Object(a.jsxs)("div",{className:"body",children:[Object(a.jsx)("div",{className:"left",children:"active"!==h?Object(a.jsx)(b,{gameStatus:h,onClick:t}):Object(a.jsx)(d,{stars:c})}),Object(a.jsx)("div",{className:"right",children:o.range(1,9).map((function(e){return Object(a.jsx)(m,{status:g(e),number:e,onNumberClick:v})}))})]}),Object(a.jsxs)("div",{className:"timer",children:["Time Remaining: ",l]})]})},f=function(){var e=Object(r.useState)(1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.jsx)(j,{resetGame:function(){return c(n+1)}},n)},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};u.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),h(console.log)}},[[12,1,2]]]);
//# sourceMappingURL=main.bcce85f6.chunk.js.map