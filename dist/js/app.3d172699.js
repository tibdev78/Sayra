(function(t){function e(e){for(var n,i,o=e[0],c=e[1],d=e[2],f=0,u=[];f<o.length;f++)i=o[f],s[i]&&u.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(u.length)u.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var l=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4678:function(t,e,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=r(t);return a(e)}function r(t){var e=n[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}s.keys=function(){return Object.keys(n)},s.resolve=r,t.exports=s,s.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-toggleable-md navbar-inverse bg-danger fixed-top"},[a("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-toggle":"collapse"},on:{click:t.showMenu}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("Sayra")]),a("div",{staticClass:"collapse navbar-collapse",class:{show:1==t.show},attrs:{id:"navbarsExampleDefault"}},[t._m(0),t._m(1)])]),a("div",{staticClass:"container page-moveFromRight"},[a("router-view")],1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item  active"},[a("a",{staticClass:"nav-link",attrs:{href:"/"}},[t._v("Gifs"),a("span",{staticClass:"sr-only"},[t._v("(current)")])])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"Random"}},[t._v("Random"),a("span",{staticClass:"sr-only"})])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"Sticker"}},[t._v("Sticker"),a("span",{staticClass:"sr-only"})])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Contact")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"form-inline my-2 my-lg-0"},[a("input",{staticClass:"form-control mr-sm-2",attrs:{type:"text",placeholder:"Search"}}),a("button",{staticClass:"btn btn-primary my-2 my-sm-0",attrs:{type:"submit"}},[t._v("Search")])])}],i={name:"App",data:function(){return{show:!1}},methods:{showMenu:function(){this.show=!this.show}}},o=i,c=a("2877"),d=Object(c["a"])(o,s,r,!1,null,null,null);d.options.__file="App.vue";var l=d.exports,f=a("8c4f"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},t._l(t.getGiphyData,function(t){return a("giphy-data",{key:t.id,attrs:{giphyData:t}})}))},h=[],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-4 bg-dark text-white"},[a("v-lazy-image",{staticClass:"card-img",attrs:{src:t.giphyData.image.url,"src-placeholder":"./img/default2.png"}}),a("div",{staticClass:"card-img-overlay"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.giphyData.title))]),a("p",{staticClass:"card-text"},[a("small",[t._v(" "+t._s(t.giphyData.date_import)+" ")])])])],1)])},p=[],b=a("8dc2"),j=a.n(b),v={name:"giphy-data",data:function(){return{spinner:{loading:!0,color:"#d9534f",size:"55px"}}},props:{giphyData:{type:Object,required:!0}},components:{VLazyImage:j.a}},g=v,y=Object(c["a"])(g,m,p,!1,null,null,null);y.options.__file="GiphyData.vue";var _=y.exports,w={name:"Home",components:{GiphyData:_},data:function(){return{giphyData:this.$store.state.Giphy}},mounted:function(){this.$store.dispatch("GET_TRENDING_GIFS")},computed:{getGiphyData:function(){return this.$store.state.Giphy}}},k=w,E=Object(c["a"])(k,u,h,!1,null,null,null);E.options.__file="Home.vue";var D=E.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},t._l(t.getRandomGiphyData,function(t){return a("giphy-data",{key:t.id,attrs:{giphyData:t}})}))},R=[],S={name:"Random",components:{GiphyData:_},data:function(){return{show:!1,giphyData:this.$store.state.Giphy}},mounted:function(){this.$store.dispatch("GET_RANDOM_GIFS")},computed:{getRandomGiphyData:function(){return this.$store.state.Giphy}},methods:{showMenu:function(){this.show=!this.show}}},C=S,Y=Object(c["a"])(C,G,R,!1,null,null,null);Y.options.__file="Random.vue";var x=Y.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},t._l(t.getRandomGiphyData,function(t){return a("giphy-data",{key:t.id,attrs:{giphyData:t}})}))},O=[],T={name:"Random",components:{GiphyData:_},data:function(){return{show:!1,giphyData:this.$store.state.Giphy}},mounted:function(){this.$store.dispatch("GET_STICKER")},computed:{getRandomGiphyData:function(){return this.$store.state.Giphy}},methods:{showMenu:function(){this.show=!this.show}}},A=T,I=Object(c["a"])(A,z,O,!1,null,null,null);I.options.__file="Sticker.vue";var H=I.exports;n["a"].use(f["a"]);var M=new f["a"]({mode:"history",routes:[{path:"*",redirect:"/"},{path:"/",name:"Home",component:D},{path:"/Random",name:"Random",component:x},{path:"/Sticker",name:"Sticker",component:H}]}),P=a("2f62"),$={ADD_GIPHY:function(t,e){t.Giphy=e}},N=(a("ac6a"),{SERVER_ADDRESS:"//api.giphy.com/v1/",API_KEY:"dqqR8NHc8M6lT4ZmuZPbY3dUJKYW1aJB"}),K=(a("96cf"),a("1da1")),q=new Headers,F={fetchGET:function(){var t=Object(K["a"])(regeneratorRuntime.mark(function t(e){var a,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a={method:"GET",headers:q,mode:"cors",cache:"default"},n=new Request(e,a),t.next=4,fetch(n,a).then(function(t){if(t.ok)return t.json();throw new Error("Server response wasn't OK")}).then(function(t){return t}).catch(function(t){throw new Error(t)});case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},V={getGiphy:function(){return F.fetchGET("".concat(N.SERVER_ADDRESS,"search?q=cat&api_key=").concat(N.API_KEY,"&limit=9"))},getTrendingGifs:function(){return F.fetchGET("".concat(N.SERVER_ADDRESS,"gifs/trending?api_key=").concat(N.API_KEY))},getRandomGifs:function(){return console.log("".concat(N.SERVER_ADDRESS,"gifs/random?api_key=").concat(N.API_KEY)),F.fetchGET("".concat(N.SERVER_ADDRESS,"gifs/random?api_key=").concat(N.API_KEY))},getRandomSticker:function(){return F.fetchGET("".concat(N.SERVER_ADDRESS,"stickers/random?api_key=").concat(N.API_KEY))}},J=a("c1df"),U=a.n(J),B={GET_GHIPHY:function(t){var e=t.commit;V.getGiphy().then(function(t){var a=[];t.data.data.forEach(function(t){var e=U()(t.import_datetime).format("DD/MM/YYYY HH:mm");a.push({id:t.id,title:t.title,date_import:e,image:t.images.fixed_height})}),e("ADD_GIPHY",a)}).catch(function(t){throw new Error(t)})},GET_TRENDING_GIFS:function(t){var e=t.commit;L.state.Giphy=[],V.getTrendingGifs().then(function(t){var a=[];t.data.forEach(function(t){var e=U()(t.import_datetime).format("DD/MM/YYYY HH:mm");a.push({id:t.id,title:t.title,date_import:e,image:t.images.fixed_height})}),e("ADD_GIPHY",a)}).catch(function(t){throw new Error(t)})},GET_RANDOM_GIFS:function(t){var e=t.commit;V.getRandomGifs().then(function(t){var a=[];console.log(t);var n=U()(t.data.import_datetime).format("DD/MM/YYYY HH:mm");a.push({id:t.data.id,title:t.data.title,date_import:n,image:t.data.images.fixed_height}),e("ADD_GIPHY",a)}).catch(function(t){throw new Error(t)})},GET_STICKER:function(t){var e=t.commit;V.getRandomSticker().then(function(t){var a=[];console.log(t);var n=U()(t.data.import_datetime).format("DD/MM/YYYY HH:mm");a.push({id:t.data.id,title:t.data.title,date_import:n,image:t.data.images.fixed_height}),e("ADD_GIPHY",a)}).catch(function(t){throw new Error(t)})}};n["a"].use(P["a"]);var L=new P["a"].Store({state:{Giphy:[]},mutations:$,actions:B}),Z=a("9483");Object(Z["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("content in cached")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(l)},router:M,store:L}).$mount("#app")}});
//# sourceMappingURL=app.3d172699.js.map