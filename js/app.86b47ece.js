(function(t){function e(e){for(var r,s,l=e[0],a=e[1],c=e[2],h=0,d=[];h<l.length;h++)s=l[h],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,l=1;l<n.length;l++){var a=n[l];0!==o[a]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-simon/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=a;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0689":function(t,e,n){t.exports=n.p+"media/2.d2c4a2c4.mp3"},"0ad0":function(t,e,n){t.exports=n.p+"media/1.99e50f7d.mp3"},"1c1a":function(t,e,n){t.exports=n.p+"media/4.36d5a722.mp3"},2550:function(t,e,n){},"3c92":function(t,e,n){t.exports=n.p+"media/3.c1c96b44.mp3"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],s=n("2877"),l={},a=Object(s["a"])(l,o,i,!1,null,null,null),c=a.exports,u=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._m(1),t._m(2),t._m(3),n("label",{attrs:{for:"name"}},[t._v("level ")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.level,expression:"level"}],attrs:{name:"level",id:"level"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.level=e.target.multiple?n:n[0]}}},[n("option",[t._v("Easy")]),n("option",[t._v("Medium")]),n("option",[t._v("Hard")])]),n("div",{attrs:{id:"outer-circle"}},[n("div",{attrs:{id:"topleft"},on:{click:t.topleftFn}}),n("div",{attrs:{id:"topright"},on:{click:t.toprightFn}}),n("div",{attrs:{id:"bottomleft"},on:{click:t.bottomleftFn}}),n("div",{attrs:{id:"bottomright"},on:{click:t.bottomrightFn}}),n("div",{attrs:{id:"inner-circle"}},[n("div",{staticClass:"font-effect-emboss",attrs:{id:"title"}},[t._v("SIMON!")]),n("div",{attrs:{id:"switches"}},[n("input",{staticClass:"toggle",attrs:{type:"checkbox",id:"on"},on:{change:t.onFn}}),n("button",{staticClass:"button",attrs:{id:"start"},on:{click:t.startFn}},[t._v("Start")]),n("input",{staticClass:"toggle",attrs:{type:"checkbox",id:"strict"},on:{change:t.strictFn}})]),t._m(4),n("div",{attrs:{id:"turn"}}),n("div",{staticClass:"text2"},[t._v(" COUNT ")])])])])},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("audio",{attrs:{id:"sound1"}},[r("source",{attrs:{src:n("0ad0")}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("audio",{attrs:{id:"sound2"}},[r("source",{attrs:{src:n("0689")}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("audio",{attrs:{id:"sound3"}},[r("source",{attrs:{src:n("3c92")}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("audio",{attrs:{id:"sound4"}},[r("source",{attrs:{src:n("1c1a")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text1"},[n("span",[t._v("POWER")]),n("span",[t._v("STRICT")])])}],f={name:"Simon",data:function(){return{order:[],playerOrder:[],flash:null,turn:null,good:null,compTurn:null,intervalId:null,strict:!1,noise:!1,on:!1,win:null,level:"Easy",levelInterval:1500}},methods:{strictFn:function(){var t=document.getElementById("strict");t.checked?this.strict=!0:this.strict=!1},onFn:function(){var t=document.getElementById("turn"),e=document.getElementById("on");e.checked?(this.on=!0,t.innerHTML="-"):(this.on=!1,t.innerHTML="",this.clearColor(),clearInterval(this.intervalId))},startFn:function(){(this.on||this.win)&&this.play(),"Easy"==this.level?this.levelInterval=1500:"Medium"==this.level?this.levelInterval=1e3:this.levelInterval=400,console.log(this.level,this.levelInterval/1e3)},play:function(){var t=document.getElementById("turn");this.win=!1,this.order=[],this.playerOrder=[],this.flash=0,this.intervalId=0,this.turn=1,t.innerHTML=1,this.good=!0;for(var e=0;e<20;e++)this.order.push(Math.floor(4*Math.random())+1);this.compTurn=!0,this.intervalId=setInterval(this.gameTurn,800)},gameTurn:function(){var t=this;this.on=!1,this.flash===this.turn&&(clearInterval(this.intervalId),this.compTurn=!1,this.clearColor(),this.on=!0),this.compTurn&&(this.clearColor(),setTimeout((function(){1==t.order[t.flash]&&t.one(),2==t.order[t.flash]&&t.two(),3==t.order[t.flash]&&t.three(),4==t.order[t.flash]&&t.four(),t.flash++}),200))},one:function(){if(this.noise){var t=document.getElementById("sound1");t.play()}this.noise=!0;var e=document.getElementById("topleft");e.style.backgroundColor="lightgreen"},two:function(){if(this.noise){var t=document.getElementById("sound2");t.play()}this.noise=!0;var e=document.getElementById("topright");e.style.backgroundColor="tomato"},three:function(){if(this.noise){var t=document.getElementById("sound3");t.play()}this.noise=!0;var e=document.getElementById("bottomleft");e.style.backgroundColor="yellow"},four:function(){if(this.noise){var t=document.getElementById("sound4");t.play()}this.noise=!0;var e=document.getElementById("bottomright");e.style.backgroundColor="lightskyblue"},clearColor:function(){topleft.style.backgroundColor="darkgreen",topright.style.backgroundColor="darkred",bottomleft.style.backgroundColor="goldenrod",bottomright.style.backgroundColor="darkblue"},flashColor:function(){topleft.style.backgroundColor="lightgreen",topright.style.backgroundColor="tomato",bottomleft.style.backgroundColor="yellow",bottomright.style.backgroundColor="lightskyblue"},topleftFn:function(){var t=this;this.on&&(this.playerOrder.push(1),this.check(),this.one(),this.win||setTimeout((function(){t.clearColor()}),300))},toprightFn:function(){var t=this;this.on&&(this.playerOrder.push(2),this.check(),this.two(),this.win||setTimeout((function(){t.clearColor()}),300))},bottomleftFn:function(){var t=this;this.on&&(this.playerOrder.push(3),this.check(),this.three(),this.win||setTimeout((function(){t.clearColor()}),300))},bottomrightFn:function(){var t=this;this.on&&(this.playerOrder.push(4),this.check(),this.four(),this.win||setTimeout((function(){t.clearColor()}),300))},check:function(){var t=this,e=document.getElementById("turn");this.playerOrder[this.playerOrder.length-1]!==this.order[this.playerOrder.length-1]&&(this.good=!1),20==this.playerOrder.length&&this.good&&this.winGame(),0==this.good&&(this.flashColor(),e.innerHTML="No",setTimeout((function(){e.innerHTML=t.turn,t.clearColor,t.strict?t.play():(t.compTurn=!0,t.flash=0,t.playerOrder=[],t.good=!0,t.intervalId=setInterval(t.gameTurn,800))}),800),this.noise=!1),this.turn==this.playerOrder.length&&this.good&&!this.win&&(this.turn=this.turn+1,this.playerOrder=[],this.compTurn=!0,this.flash=0,e.innerHTML=this.turn,this.intervalId=setInterval(this.gameTurn,this.levelInterval))},winGame:function(){var t=document.getElementById("turn");this.flashColor(),t.innerHTML="Win",this.on=!1,this.win=!0}}},p=f,v=(n("5e26"),Object(s["a"])(p,h,d,!1,null,"22f2b789",null)),m=v.exports;r["a"].use(u["a"]);var g=[{path:"/",name:"simon",component:m}],y=new u["a"]({mode:"history",base:"/vue-simon/",routes:g}),b=y,_=n("2f62");r["a"].use(_["a"]);var k=new _["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:b,store:k,render:function(t){return t(c)}}).$mount("#app")},"5e26":function(t,e,n){"use strict";var r=n("2550"),o=n.n(r);o.a}});
//# sourceMappingURL=app.86b47ece.js.map