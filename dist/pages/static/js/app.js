webpackJsonp([1],{"0Vvi":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("/5sW"),i=n("3EgV"),o=n.n(i),s=(n("7zck"),n("//Fk")),r=n.n(s),l={_e:function(e){return chrome.i18n.getMessage(e)},_s:{get:function(e){return new r.a(function(t){chrome.storage.local.get(e,function(e){return t(e)})})},set:function(e){return new r.a(function(t){chrome.storage.local.set(e,function(){return t()})})},remove:function(e){return new r.a(function(t){chrome.storage.local.remove(e,function(){return t()})})}}},u=n("Ynpq"),m=n.n(u);a.default.use(o.a);var c={name:"App",computed:{version:function(){return"v"+m.a.version}},methods:{lt:function(e){return l._e(e)}}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("v-app",[t("v-toolbar",{staticClass:"v-primary",attrs:{app:"",absolute:"","clipped-left":"",height:"56"}},[t("span",{staticClass:"title v-primary"},[this._v(this._s(this.lt("extName"))+" "),t("span",{staticStyle:{"font-size":"12px"}},[this._v(this._s(this.version))])])]),this._v(" "),t("v-content",[t("router-view")],1)],1)],1)},staticRenderFns:[]};var h=n("VU/8")(c,d,!1,function(e){n("T+T1")},null,null).exports,v=n("/ocq"),g=(n("vfKq"),{name:"Options",data:function(){return{quanlityItems:[{text:l._e("ugoira_normal"),value:10},{text:l._e("ugoira_good"),value:5},{text:l._e("ugoira_best"),value:1}],ugoiraQuanlity:10,ugoiraRenameFormat:"",mangaRenameFormat:"",mangaImageRenameFormat:"",enableExtension:!0,enablePackUgoiraFramesInfo:!0,mangaPagesInChunk:99}},mounted:function(){var e=this;l._s.get(null).then(function(t){e.ugoiraQuanlity=t.ugoiraQuanlity?t.ugoiraQuanlity:e.ugoiraQuanlity,e.ugoiraRenameFormat=t.ugoiraRenameFormat?t.ugoiraRenameFormat:"",e.mangaRenameFormat=t.mangaRenameFormat?t.mangaRenameFormat:"",e.mangaImageRenameFormat=t.mangaImageRenameFormat?t.mangaImageRenameFormat:"",e.enableExtension=t.enableExtension?t.enableExtension:"",e.enablePackUgoiraFramesInfo=!!t.enablePackUgoiraFramesInfo,e.mangaPagesInChunk=t.mangaPagesInChunk})},beforeRouteUpdate:function(e,t,n){var a=this;"RenameManga"===t.name?l._s.get("mangaRenameFormat").then(function(e){a.mangaRenameFormat=e.mangaRenameFormat}):"RenameMangaImage"===t.name?l._s.get("mangaImageRenameFormat").then(function(e){a.mangaImageRenameFormat=e.mangaImageRenameFormat}):"RenameUgoira"===t.name&&l._s.get("ugoiraRenameFormat").then(function(e){a.ugoiraRenameFormat=e.ugoiraRenameFormat}),n()},computed:{ugoiraRenameFormatPreview:function(){return this.ugoiraRenameFormat?this.ugoiraRenameFormat:"Not set"},mangaRenameFormatPreview:function(){return this.mangaRenameFormat?this.mangaRenameFormat:"Not set"},mangaImageRenameFormatPreview:function(){return this.mangaImageRenameFormat?this.mangaImageRenameFormat:"Not set"}},watch:{enableExtension:function(e){l._s.set({enableExtension:e}).then(function(){window.cr.storage.items.enableExtend=e})}},methods:{tileClickHandler:function(e){},showRenameUgoiraDialog:function(e){this.$router.push({name:"RenameUgoira",params:{renameFormat:this.ugoiraRenameFormat}})},showRenameMangaDialog:function(e){this.$router.push({name:"RenameManga",params:{renameFormat:this.mangaRenameFormat}})},showRenameMangaImageDialog:function(e){this.$router.push({name:"RenameMangaImage",params:{renameFormat:this.mangaImageRenameFormat}})},showUgoiraExtendDialog:function(e){this.$router.push("ugoira-extend")},onUgoiraQuanlityChangeHandler:function(){l._s.set({ugoiraQuanlity:this.ugoiraQuanlity})},onEnablePackUgoiraFramesInfoChangedHandler:function(){l._s.set({enablePackUgoiraFramesInfo:this.enablePackUgoiraFramesInfo})},mangaPagesInChunkChanged:function(){this.mangaPagesInChunk.match(/^[1-9]\d*$/)?l._s.set({mangaPagesInChunk:parseInt(this.mangaPagesInChunk)}):alert("Please input number greater then 1")},tl:function(e){return l._e(e)}}}),_={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticStyle:{"max-width":"640px"}},[n("span",{staticClass:"card-title"},[e._v("Ugoira")]),e._v(" "),n("v-card",{staticStyle:{"margin-bottom":"30px"}},[n("v-list",{attrs:{"two-line":""}},[n("v-list-tile",{on:{click:function(t){return e.showRenameUgoiraDialog()}}},[n("v-list-tile-content",[n("v-list-tile-title",[e._v("Rename ugoira file")]),e._v(" "),n("v-list-tile-sub-title",[e._v(e._s(e.ugoiraRenameFormatPreview))])],1),e._v(" "),n("v-list-tile-action",[n("v-btn",{attrs:{icon:"",ripple:""}},[n("v-icon",[e._v("keyboard_arrow_right")])],1)],1)],1),e._v(" "),n("v-list-tile",[n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(e.tl("quality")))])],1),e._v(" "),n("v-list-tile-action",[n("v-select",{staticStyle:{width:"150px"},attrs:{items:e.quanlityItems,type:"value"},on:{change:e.onUgoiraQuanlityChangeHandler},model:{value:e.ugoiraQuanlity,callback:function(t){e.ugoiraQuanlity=t},expression:"ugoiraQuanlity"}})],1)],1),e._v(" "),n("v-list-tile",[n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(e.tl("pack_ugoira_frames_info")))]),e._v(" "),n("v-list-tile-sub-title",[e._v(e._s(e.tl("pack_ugoira_frames_info_into_zip")))])],1),e._v(" "),n("v-list-tile-action",[n("v-switch",{on:{change:e.onEnablePackUgoiraFramesInfoChangedHandler},model:{value:e.enablePackUgoiraFramesInfo,callback:function(t){e.enablePackUgoiraFramesInfo=t},expression:"enablePackUgoiraFramesInfo"}})],1)],1),e._v(" "),n("v-list-tile",{on:{click:function(t){return e.showUgoiraExtendDialog()}}},[n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(e.tl("extend_duration")))]),e._v(" "),n("v-list-tile-sub-title",[e._v(e._s(e.tl("extend_duration_desc")))])],1),e._v(" "),n("v-list-tile-action",[n("v-btn",{attrs:{icon:"",ripple:""}},[n("v-icon",[e._v("keyboard_arrow_right")])],1)],1)],1)],1)],1),e._v(" "),n("span",{staticClass:"card-title"},[e._v("Manga")]),e._v(" "),n("v-card",[n("v-list",{attrs:{"two-line":""}},[n("v-list-tile",{on:{click:function(t){return e.showRenameMangaDialog()}}},[n("v-list-tile-content",[n("v-list-tile-title",[e._v("Rename manga file")]),e._v(" "),n("v-list-tile-sub-title",[e._v(e._s(e.mangaRenameFormatPreview))])],1),e._v(" "),n("v-list-tile-action",[n("v-btn",{attrs:{icon:"",ripple:""}},[n("v-icon",[e._v("keyboard_arrow_right")])],1)],1)],1),e._v(" "),n("v-list-tile",{on:{click:function(t){return e.showRenameMangaImageDialog()}}},[n("v-list-tile-content",[n("v-list-tile-title",[e._v("Rename manga image file")]),e._v(" "),n("v-list-tile-sub-title",[e._v(e._s(e.mangaImageRenameFormatPreview))])],1),e._v(" "),n("v-list-tile-action",[n("v-btn",{attrs:{icon:"",ripple:""}},[n("v-icon",[e._v("keyboard_arrow_right")])],1)],1)],1),e._v(" "),n("v-list-tile",[n("v-list-tile-content",[n("v-list-tile-title",[e._v("Number of pages in each chunk")]),e._v(" "),n("v-list-tile-sub-title",[e._v("Reduce this number if browser is crushing during downloading")])],1),e._v(" "),n("v-list-tile-action",[n("v-text-field",{staticStyle:{width:"100px"},attrs:{reverse:"",type:"number"},on:{change:e.mangaPagesInChunkChanged},model:{value:e.mangaPagesInChunk,callback:function(t){e.mangaPagesInChunk=t},expression:"mangaPagesInChunk"}})],1)],1)],1)],1),e._v(" "),n("router-view")],1)},staticRenderFns:[]};var p=n("VU/8")(g,_,!1,function(e){n("eUoX")},"data-v-7780ccf1",null).exports,f={name:"UgoiraExtendDialog",data:function(){return{showDialog:!0,secondsItems:[1,2,3],extendDurationItems:[3,4,5],enableExtend:!1,enableWhenUnderSeconds:1,extendDuration:3}},mounted:function(){this.enableWhenUnderSeconds=window.cr.storage.items.enableWhenUnderSeconds,this.extendDuration=window.cr.storage.items.extendDuration,this.enableExtend=window.cr.storage.items.enableExtend},watch:{showDialog:function(e){!1==!!e&&this.$router.go(-1)},enableExtend:function(e){l._s.set({enableExtend:e}).then(function(){window.cr.storage.items.enableExtend=e})}},methods:{onEnableWhenUnderSecondsChangeHandler:function(e){var t=this;l._s.set({enableWhenUnderSeconds:t.enableWhenUnderSeconds}).then(function(){window.cr.storage.items.enableWhenUnderSeconds=t.enableWhenUnderSeconds})},onExtendDurationChangeHandler:function(e){var t=this;l._s.set({extendDuration:t.extendDuration}).then(function(){window.cr.storage.items.extendDuration=t.extendDuration})},lt:function(e){return l._e(e)}}},b={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"560"},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}},[n("v-card",[n("v-list",{attrs:{"two-line":""}},[n("v-list-tile",[n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(e.lt("extend_enable")))])],1),e._v(" "),n("v-list-tile-action",[n("v-switch",{model:{value:e.enableExtend,callback:function(t){e.enableExtend=t},expression:"enableExtend"}})],1)],1),e._v(" "),n("v-list-tile",[n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(e.lt("extend_duration_desc")))]),e._v(" "),n("v-list-tile-sub-title",[e._v(e._s(e.lt("enable_extend_desc")))])],1),e._v(" "),n("v-list-tile-action",[n("v-select",{staticStyle:{"max-width":"100px"},attrs:{items:e.secondsItems,disabled:!e.enableExtend},on:{change:function(t){return e.onEnableWhenUnderSecondsChangeHandler()}},model:{value:e.enableWhenUnderSeconds,callback:function(t){e.enableWhenUnderSeconds=t},expression:"enableWhenUnderSeconds"}})],1)],1),e._v(" "),n("v-list-tile",[n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(e.lt("extend_duration_seconds_title")))])],1),e._v(" "),n("v-list-tile-action",[n("v-select",{staticStyle:{"max-width":"100px"},attrs:{items:e.extendDurationItems,disabled:!e.enableExtend},on:{change:function(t){return e.onExtendDurationChangeHandler()}},model:{value:e.extendDuration,callback:function(t){e.extendDuration=t},expression:"extendDuration"}})],1)],1)],1)],1)],1)},staticRenderFns:[]};var x=n("VU/8")(f,b,!1,function(e){n("z/hn")},"data-v-3b57c05c",null).exports,w={data:function(){return{inputPos:0,renameFormat:""}},methods:{setInputCursor:function(e,t){var n=this,a=this.inputPos+t.length;setTimeout(function(){e.focus(),e.setSelectionRange(a,a),n.inputPos=a})},updateInputPos:function(e){this.inputPos=e.target.selectionStart},updateFormat:function(e){this.renameFormat=this.renameFormat.slice(0,this.inputPos)+e+this.renameFormat.slice(this.inputPos)}}},F={name:"RenameUgoiraDialog",mixins:[w],data:function(){return{showDialog:!0,metasConfig:[{title:l._e("id"),holder:"{id}"},{title:l._e("title"),holder:"{title}"},{title:l._e("author"),holder:"{author}"},{title:l._e("author_id"),holder:"{authorId}"}]}},watch:{showDialog:function(e){!1==!!e&&this.$router.go(-1)},renameFormat:function(e){this.saveTimeout&&clearTimeout(this.saveTimeout),this.saveTimeout=setTimeout(function(){l._s.set({ugoiraRenameFormat:e}).then(function(){})},300)}},mounted:function(){this.$route.params.renameFormat&&(this.renameFormat=this.$route.params.renameFormat)},methods:{pickMeta:function(e){this.updateFormat(e.holder),this.setInputCursor(this.$refs.renameInput.$refs.input,e.holder)},lt:function(e){return l._e(e)}}},k={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"560"},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}},[n("v-card",[n("v-card-text",[n("h2",[e._v(e._s(e.lt("rename_ugoira")))]),e._v(" "),n("div",{staticClass:"section-block"},[n("h3",[e._v(e._s(e.lt("quick_picks")))]),e._v(" "),e._l(e.metasConfig,function(t){return n("v-btn",{key:t.value,attrs:{small:"",ripple:!1,color:"info"},on:{click:function(n){return e.pickMeta(t)}}},[e._v(e._s(t.title))])})],2),e._v(" "),n("div",{staticClass:"section-block"},[n("h3",[e._v(e._s(e.lt("rename_format")))]),e._v(" "),n("v-text-field",{ref:"renameInput",staticClass:"v-input-first",attrs:{placeholder:"Not set",hint:"Example: {authorId}_{author}_{id}_{title}","persistent-hint":!0},on:{focus:e.updateInputPos,keyup:e.updateInputPos,click:e.updateInputPos},model:{value:e.renameFormat,callback:function(t){e.renameFormat=t},expression:"renameFormat"}})],1)])],1)],1)},staticRenderFns:[]};var I=n("VU/8")(F,k,!1,function(e){n("WGFX")},"data-v-4081f92e",null).exports,R={name:"RenameMangaDialog",mixins:[w],data:function(){return{showDialog:!0,saveTimeout:null,metasConfig:[{title:l._e("id"),holder:"{id}"},{title:l._e("author_id"),holder:"{authorId}"}]}},watch:{showDialog:function(e){!1==!!e&&this.$router.go(-1)},renameFormat:function(e){this.saveTimeout&&clearTimeout(this.saveTimeout),this.saveTimeout=setTimeout(function(){l._s.set({mangaRenameFormat:e}).then(function(){})},300)}},mounted:function(){this.$route.params.renameFormat&&(this.renameFormat=this.$route.params.renameFormat)},methods:{pickMeta:function(e){this.updateFormat(e.holder),this.setInputCursor(this.$refs.renameInput.$refs.input,e.holder)},lt:function(e){return l._e(e)}}},D={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"560"},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}},[n("v-card",[n("v-card-text",[n("h2",[e._v(e._s(e.lt("rename_manga")))]),e._v(" "),n("div",{staticClass:"section-block"},[n("h3",[e._v(e._s(e.lt("quick_picks")))]),e._v(" "),e._l(e.metasConfig,function(t){return n("v-btn",{key:t.value,attrs:{small:"",ripple:!1,color:"info"},on:{click:function(n){return e.pickMeta(t)}}},[e._v(e._s(t.title))])})],2),e._v(" "),n("div",{staticClass:"section-block"},[n("h3",[e._v(e._s(e.lt("rename_format")))]),e._v(" "),n("v-text-field",{ref:"renameInput",staticClass:"v-input-first",attrs:{placeholder:"Not set",hint:"Example: {authorId}_{id}","persistent-hint":!0},on:{focus:e.updateInputPos,keyup:e.updateInputPos,click:e.updateInputPos},model:{value:e.renameFormat,callback:function(t){e.renameFormat=t},expression:"renameFormat"}})],1)])],1)],1)},staticRenderFns:[]};var C=n("VU/8")(R,D,!1,function(e){n("JaCa")},"data-v-449d2652",null).exports,P={name:"RenameMangaImageDialog",mixins:[w],data:function(){return{showDialog:!0,metasConfig:[{title:l._e("id"),holder:"{id}"},{title:l._e("author_id"),holder:"{authorId}"},{title:l._e("page_num"),holder:"{pageNum}"}]}},watch:{showDialog:function(e){!1==!!e&&this.$router.go(-1)},renameFormat:function(e){this.saveTimeout&&clearTimeout(this.saveTimeout),this.saveTimeout=setTimeout(function(){l._s.set({mangaImageRenameFormat:e}).then(function(){})},300)}},mounted:function(){this.$route.params.renameFormat&&(this.renameFormat=this.$route.params.renameFormat)},methods:{pickMeta:function(e){this.updateFormat(e.holder),this.setInputCursor(this.$refs.renameInput.$refs.input,e.holder)},lt:function(e){return l._e(e)}}},U={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"560"},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}},[n("v-card",[n("v-card-text",[n("h2",[e._v(e._s(e.lt("rename_manga_image")))]),e._v(" "),n("div",{staticClass:"section-block"},[n("h3",[e._v(e._s(e.lt("quick_picks")))]),e._v(" "),e._l(e.metasConfig,function(t){return n("v-btn",{key:t.value,attrs:{small:"",ripple:!1,color:"info"},on:{click:function(n){return e.pickMeta(t)}}},[e._v(e._s(t.title))])})],2),e._v(" "),n("div",{staticClass:"section-block"},[n("h3",[e._v(e._s(e.lt("rename_format")))]),e._v(" "),n("v-text-field",{ref:"renameInput",staticClass:"v-input-first",attrs:{placeholder:"Not set",hint:"Example: {authorId}_{id}_{pageNum}","persistent-hint":!0},on:{focus:e.updateInputPos,keyup:e.updateInputPos,click:e.updateInputPos},model:{value:e.renameFormat,callback:function(t){e.renameFormat=t},expression:"renameFormat"}})],1)])],1)],1)},staticRenderFns:[]};var y=n("VU/8")(P,U,!1,function(e){n("n5cr")},"data-v-0a9f4f9a",null).exports;a.default.use(v.a);var E=new v.a({routes:[{path:"/",name:"Options",component:p,children:[{path:"ugoira-extend",name:"UgoiraExtend",component:x},{path:"rename-ugoira",name:"RenameUgoira",component:I},{path:"rename-manga",name:"RenameManga",component:C},{path:"rename-manga-image",name:"RenameMangaImage",component:y}]}]});a.default.config.productionTip=!1,window.cr={},l._s.get().then(function(e){window.cr={storage:{items:e}},new a.default({el:"#app",router:E,render:function(e){return e(h)}})})},"7zck":function(e,t){},JaCa:function(e,t){},"T+T1":function(e,t){},WGFX:function(e,t){},Ynpq:function(e,t){e.exports={background:{scripts:["background.js"]},browser_action:{default_icon:"icon.png",default_title:"__MSG_extName__"},short_name:"PTK",content_security_policy:"script-src 'self'; object-src 'self'; worker-src blob https://www.pixiv.net",default_locale:"en",description:"__MSG_extDescription__",icons:{16:"icon16.png",48:"icon48.png",128:"icon128.png"},manifest_version:2,name:"__MSG_extName__",permissions:["webRequest","storage","*://*.pixiv.net/*","*://*.pximg.net/*"],content_scripts:[{matches:["*://*.pixiv.net/member_illust.php?mode=medium&illust_id=*"],js:["js/common.js","js/illustInjectDetector.js"]},{matches:["*://*.pixiv.net/member_illust.php?mode=manga&illust_id=*"],js:["js/common.js","lib/jszip/jszip.js","js/manga.js"]},{matches:["*://*.pixiv.net/novel/show.php?id=*"],js:["lib/handlebars-latest.js","lib/jszip/jszip.js","lib/jszip/jszip-utils.min.js","lib/js-epub-maker/js-epub-maker.js","js/common.js","js/novel/Novel189.js","js/NovelAdapter.js"]}],version:"2.0.0",web_accessible_resources:["img/download.png"],options_page:"pages/index.html"}},eUoX:function(e,t){},n5cr:function(e,t){},vfKq:function(e,t){},"z/hn":function(e,t){}},["0Vvi"]);