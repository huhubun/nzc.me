(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{420:function(t,e,l){"use strict";l.r(e);var n={data:function(){return{myTags:[{text:"90 后"},{text:"巨蟹座"},{text:"广西桂林人"},{text:"现居辽宁大连"},{text:"软件开发工程师"}]}}},r=l(86),c=l(121),v=l.n(c),o=l(429),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"text-center"},[l("h1",{staticClass:"text-md-h2 text-h4 mt-10 mb-3"},[t._v("关于 呼呼小笼包")]),t._v(" "),l("div",{staticClass:"mb-6"},t._l(t.myTags,(function(e){return l("v-chip",{key:e.text,staticClass:"ma-2",attrs:{color:"green darken-1",outlined:""}},[t._v(t._s(e.text))])})),1),t._v(" "),t._m(0),t._v(" "),l("div",[l("site-card-group")],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-body-1"},[e("p",[this._v("\n      呼呼小笼包\n      "),e("em",[this._v("(huhubun)")]),this._v("\n      是我从高中开始使用的昵称，一直沿用至今。\n    ")]),this._v(" "),e("p",[this._v("\n      大学就读于大连职业技术学院软件技术专业，现在从事计算机软件开发相关工作。\n    ")])])}],!1,null,null,null);e.default=component.exports;v()(component,{SiteCardGroup:l(423).default}),v()(component,{VChip:o.a})},421:function(t,e,l){"use strict";l.r(e);var n={},r=l(86),c=l(121),v=l.n(c),o=l(385),d=l(145),m=l(428),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("h1",{staticClass:"text-md-h4 text-h5 mb-3 text-center"},[t._v("历程")]),t._v(" "),l("v-row",[l("v-col",{attrs:{cols:"12",sm:"12",lg:"3","offset-lg":"1",md:"4"}},[l("v-img",{staticClass:"ma-auto",attrs:{src:"/images/huhubun_at_ignite_2016.jpg","max-width":"306","max-height":"408"}})],1),t._v(" "),l("v-col",{attrs:{cols:"12",sm:"10","offset-sm":"1",lg:"7",md:"8","offset-md":"0"}},[l("p",[t._v("\n        小学时第一次接触到了计算机，当时还是 Windows 98 系统和大屁股的 CRT\n        显示器，软磨硬泡家里终于同意让我参加计算机兴趣班，但报名当天，好像是因为前一天作业完成的不好，被班主任拒绝报名\n        😂。\n      ")]),t._v(" "),l("p",[t._v("\n        上初中后，因为是住校生活，经常去学校图书馆，图书馆的老师向我推荐了《电脑爱好者》杂志，从此一发不可收拾。把图书馆馆藏的都看过之后，最期待的就是每周《电脑报》和每个月《电脑爱好者》上新。\n      ")]),t._v(" "),l("p",[t._v("\n        当时手机属于奢饰品，但是我有一台电子词典，通过它接触了 BASIC\n        ，可以绘制线条，输出文本，还有大佬用它制作了游戏，我便被编程深深吸引。\n      ")]),t._v(" "),l("p",[t._v("\n        升入高中后开办了人生中第一个网站“呼呼小盒子”"),l("small",[t._v("（现在已倒闭）")]),t._v("。当时大家或多或少都拥有了手机，我觉得应该有一个靠谱的下载软件的地方，就用“啊估软件站\n        ASP\n        版”折腾了个手机软件下载网站。当时用百度搜索“涂鸦跳跃”排名第一的一度是我这个网站。\n      ")]),t._v(" "),l("p",[t._v("\n        但上传别人的成果到自己网站上有悖互联网精神。当时相同功能的软件百花齐放，于是打算转型做专业软件测评网站，研究了织梦\n        CMS，学习了大量 HTML\n        知识后，还是因为贪玩而转型失败，网站也被我关停了。\n      ")]),t._v(" "),l("p",[t._v("\n        高三下学期时开办了人生中第二个网站，基于 WordPress\n        的博客，使用的是现在这个站点的域名\n        nzc.me。但是因为不怎么更新，长期长草，加上前几年想捡起来的时候 .me\n        域名已经无法备案，到了 2019\n        年被我关闭，博客推翻重做，便有了新的博客站点\n        "),l("a",{staticClass:"blue-grey--text text--darken-4",attrs:{href:"https://bun.plus/"}},[t._v("\n          bun.plus\n        ")]),t._v("\n        。\n      ")]),t._v(" "),l("p",[t._v("后来上大学来到大连，便在这里工作、定居。")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCol:o.a,VImg:d.a,VRow:m.a})},422:function(t,e,l){"use strict";l.r(e);l(64),l(11);var n={data:function(){var t=new Date,e=new Date(2014,7,11),l={lv1:{text:"了解",value:0,color:"grey darken-3"},lv2:{text:"掌握",value:1,color:"blue-grey"},lv3:{text:"熟练掌握",value:2,color:"blue"},lv4:{text:"精通",value:3,color:"green"}};return{jobCards:[{title:"工作经验",text:"".concat(t.getUTCFullYear()-e.getUTCFullYear()," 年")},{title:"主要方向",text:"ASP.NET"},{title:"最高职位",text:"开发经理"}],jobSkillLabels:Object.keys(l).map((function(t){return l[t].text})),certificationLogoSize:64,certifications:[{title:"RHCSA (2014)",subtitle:"Red Hat Certified System Administrator",icon:"mdi-redhat"},{title:"MCSA (2016)",subtitle:"Microsoft Certified Solutions Associate",img:"/images/mcsa.png"}],jobSkills:[{label:"C#",lv:l.lv3},{label:"ASP.NET MVC / Web API",lv:l.lv3},{label:"Entity Framework",lv:l.lv3},{label:"SQL Server",lv:l.lv2},{label:"Redis",lv:l.lv2},{label:"RabbitMQ",lv:l.lv2},{label:"JavaScript",lv:l.lv3},{label:"jQuery",lv:l.lv2},{label:"Vue.js",lv:l.lv2},{label:"Jenkins",lv:l.lv2}]}}},r=l(86),c=l(121),v=l.n(c),o=l(393),d=l(392),m=l(385),_=l(172),h=l(145),f=l(115),C=l(175),x=l(78),y=l(98),k=l(428),S=l(433),V=l(430),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("h1",{staticClass:"text-md-h4 text-h5 text-center"},[t._v("工作")]),t._v(" "),l("div",{staticClass:"text-center"},[l("div",[l("v-row",{staticClass:"justify-center"},t._l(t.jobCards,(function(e){return l("v-col",{key:e.title,attrs:{cols:"12",md:"3",sm:"4"}},[l("v-card",{attrs:{flat:""}},[l("v-card-title",{staticClass:"justify-center pb-2"},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),l("v-card-text",{staticClass:"pa-0"},[l("p",{staticClass:"text-h5 mb-0"},[t._v(t._s(e.text))])])],1)],1)})),1)],1),t._v(" "),l("div",{staticClass:"text-center"},[l("v-row",{staticClass:"justify-center"},t._l(t.certifications,(function(e){return l("v-col",{key:e.title,attrs:{cols:"12",lg:"4",sm:"6"}},[l("v-card",{staticClass:"mt-5 mx-auto",attrs:{outlined:"",width:"400"}},[l("v-list-item",{staticClass:"pa-2"},[e.icon?l("v-list-item-icon",{staticClass:"ma-0"},[l("v-icon",{attrs:{size:t.certificationLogoSize}},[t._v("\n                  "+t._s(e.icon)+"\n                ")])],1):t._e(),t._v(" "),e.img?l("v-list-item-avatar",{staticClass:"ma-0",attrs:{tile:"",size:t.certificationLogoSize}},[l("v-img",{attrs:{src:"/images/mcsa.png"}})],1):t._e(),t._v(" "),l("v-list-item-content",{staticClass:"ml-3"},[l("v-list-item-title",{staticClass:"headline mb-1"},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),l("v-list-item-subtitle",[t._v("\n                  "+t._s(e.subtitle)+"\n                ")])],1)],1)],1)],1)})),1)],1),t._v(" "),l("div",[l("v-row",{staticClass:"justify-center"},t._l(t.jobSkills,(function(e,n){return l("v-col",{key:e.label,staticClass:"py-0",attrs:{cols:"12",sm:"10"}},[l("v-subheader",{staticClass:"pl-0"},[t._v(" "+t._s(e.label)+" ")]),t._v(" "),l("v-slider",{attrs:{readonly:"",height:"10px",value:e.lv.value,"tick-labels":0==n||n==t.jobSkills.length-1?t.jobSkillLabels:[],color:e.lv.color,max:t.jobSkillLabels.length-1,ticks:"always"}})],1)})),1)],1)])])}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCard:o.a,VCardText:d.a,VCardTitle:d.b,VCol:m.a,VIcon:_.a,VImg:h.a,VListItem:f.a,VListItemAvatar:C.a,VListItemContent:x.a,VListItemIcon:y.a,VListItemSubtitle:x.b,VListItemTitle:x.c,VRow:k.a,VSlider:S.a,VSubheader:V.a})},423:function(t,e,l){"use strict";l.r(e);var n={data:function(){return{sites:[{title:"博客",domain:"bun.plus",color:"blue-grey darken-4"},{title:"作品",domain:"bun.dev",color:"blue darken-1"},{title:"导航",domain:"huhubun.com",color:"rgb(247,137,126)"}]}}},r=l(86),c=l(121),v=l.n(c),o=l(257),d=l(385),m=l(428),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-row",{attrs:{justify:"center",align:"center"}},t._l(t.sites,(function(e){return l("v-col",{key:e.href,attrs:{cols:"12",sm:"4",lg:"3"}},[l("v-btn",{staticClass:"white--text",attrs:{block:"",depressed:"",href:"https://"+e.domain,color:e.color}},[t._v("\n      "+t._s(e.title)+" | "+t._s(e.domain)+"\n    ")])],1)})),1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:o.a,VCol:d.a,VRow:m.a})},434:function(t,e,l){"use strict";l.r(e);var n={head:function(){return{title:"首页",meta:[{hid:"description",name:"description",content:"这里是呼呼小笼包的介绍，可以进一步了解他。"},{hid:"keywords",name:"keywords",content:"关于呼呼小笼包,nzc.me,呼呼小笼包,huhubun,"}]}}},r=l(86),c=l(121),v=l.n(c),o=l(431),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("top-about"),this._v(" "),e("v-divider",{staticClass:"my-10"}),this._v(" "),e("my-experience"),this._v(" "),e("v-divider",{staticClass:"my-10"}),this._v(" "),e("job-skill"),this._v(" "),e("div",{staticStyle:{}},[this._v(" ")])],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{TopAbout:l(420).default,MyExperience:l(421).default,JobSkill:l(422).default}),v()(component,{VDivider:o.a})}}]);