module.exports=function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e,n){"use strict";function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return a}))},,,,function(t,e){t.exports=flarum.core.compat["components/SettingsModal"]},,function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(1),o=n(5),l="itnt-uitab.admin.settings.",s=function(t){function e(){return t.apply(this,arguments)||this}Object(i.a)(e,t);var n=e.prototype;return n.className=function(){return"UitabSettingsModal Modal--small"},n.title=function(){return r.a.translator.trans(l+"title")},n.form=function(){return[m("div",{className:"Form-group"},m("div",{className:"helpText"},m("i",{className:"uitabSettingsIcon fas fa-exclamation-circle"}),m("span",null,r.a.translator.trans(l+"requirement"))),m("h3",null,r.a.translator.trans(l+"tags_title")),m("div",{className:"helpText"},r.a.translator.trans(l+"help_text")),m("label",null,r.a.translator.trans(l+"home_page_label")),m("input",{required:!0,className:"FormControl",type:"text",placeholder:"/",bidi:this.setting("itnt-uitab.home_page","/")}),m("label",null,r.a.translator.trans(l+"tags_page_label")),m("input",{required:!0,className:"FormControl",type:"text",placeholder:"/tags",bidi:this.setting("itnt-uitab.tags_page","/tags")}),m("label",null,r.a.translator.trans(l+"create_page_label")),m("input",{required:!0,className:"FormControl",type:"text",placeholder:"/composer",bidi:this.setting("itnt-uitab.create_page","/composer")}),m("label",null,r.a.translator.trans(l+"settings_page_label")),m("input",{required:!0,className:"FormControl",type:"text",placeholder:"/settings",bidi:this.setting("itnt-uitab.settings_page","/settings")}),m("label",null,r.a.translator.trans(l+"notifications_page_label")),m("input",{required:!0,className:"FormControl",type:"text",placeholder:"/notifications",bidi:this.setting("itnt-uitab.notifications_page","/notifications")}))]},e}(n.n(o).a);r.a.initializers.add("itnt-uitab",(function(){r.a.extensionSettings["itnt-uitab"]=function(){return r.a.modal.show(new s)}}))}]);
//# sourceMappingURL=admin.js.map