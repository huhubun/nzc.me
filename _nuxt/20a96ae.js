(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{272:function(t,e,n){var content=n(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("3a3359aa",content,!0,{sourceMap:!1})},305:function(t,e,n){"use strict";var r=n(477),o=n(484),l=n(478),c=n(306),d=n(482),f=n(485),_=n(481),h=n(210),v=n(208),m=n(136),x=n(209),w=n(89),k=n(480),y=n(483),C=n(479),F=n(173),N={data:function(){return{clipped:!0,drawer:!1,items:[{icon:"mdi-home-outline",title:"首页",to:"/"},{icon:"mdi-information-outline",title:"博客",href:"https://bun.plus/"},{icon:"mdi-information-outline",title:"开发",href:"https://huhubun.com/"}],title:"关于呼呼小笼包"}}},j=n(96),component=Object(j.a)(N,(function(){var t=this,e=t._self._c;return e(r.a,[e(y.a,{attrs:{clipped:t.clipped,fixed:"",temporary:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(v.a,t._l(t.items,(function(n,i){return e(m.a,{key:"drawer_nav_item_".concat(i),attrs:{to:n.to,href:n.href,router:"",exact:""}},[e(x.a,[e(h.a,[t._v(t._s(n.icon))])],1),t._v(" "),e(w.a,[e(w.c,{domProps:{textContent:t._s(n.title)}})],1)],1)})),1)],1),t._v(" "),e(o.a,{attrs:{"clipped-left":t.clipped,flat:"",app:""}},[e(l.a,{staticClass:"hidden-sm-and-up",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e(F.b,{domProps:{textContent:t._s(t.title)}}),t._v(" "),e(C.a),t._v(" "),e(F.a,{staticClass:"hidden-xs-only"},[t._l(t.items,(function(n,i){return[e(c.a,{key:"toolbar_item_".concat(i,"_btn"),attrs:{text:"",to:t.items[i].to,href:t.items[i].href}},[t._v("\n          "+t._s(t.items[i].title)+"\n        ")])]}))],2)],1),t._v(" "),e(k.a,[e(f.a,[e("nuxt")],1)],1),t._v(" "),e(_.a,{attrs:{absolute:"",app:""}},[e(d.a,{staticClass:"text-center"},[e("span",{staticClass:"blue-grey-darken-4--text"},[t._v("\n        © "+t._s((new Date).getFullYear())+"\n        "),e("a",{staticClass:"text-decoration-none blue-grey--text text--darken-4",attrs:{href:"https://bun.plus/"}},[t._v("\n          huhubun\n        ")])])])],1)],1)}),[],!1,null,null,null);e.a=component.exports},326:function(t,e,n){n(327),t.exports=n(328)},377:function(t,e,n){"use strict";n(272)},378:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),r.locals={},t.exports=r},86:function(t,e,n){"use strict";var r=n(477),o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},l=(n(377),n(96)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports}},[[326,7,1,8]]]);