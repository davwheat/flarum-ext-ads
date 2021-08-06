module.exports=function(t){var e={};function a(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,a),s.l=!0,s.exports}return a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=16)}([function(t,e){t.exports=flarum.core.compat["admin/app"]},,,,function(t,e){t.exports=flarum.core.compat["common/utils/extractText"]},,,,,,,function(t,e){t.exports=flarum.core.compat["admin/components/ExtensionPage"]},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e){t.exports=flarum.core.compat["common/components/Switch"]},function(t,e){t.exports=flarum.core.compat["admin/utils/saveSettings"]},,function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var i=a(11),c=a.n(i),d=a(12),u=a.n(d),l=a(13),p=a.n(l),f=a(14),b=a.n(f),h=a(4),v=a.n(h),g=["header","discussion_sidebar","between_posts","footer","discussion_header"],y=function(t,e){return s.a.translator.trans("davwheat.ads.admin.settings."+t,e)},w=function(t){var e,a;function n(){for(var e,a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))||this).state={enabledLocations:[],code:{header:"",footer:"",discussion_sidebar:"",between_posts:"",discussion_header:""},betweenNPosts:0,pubId:"",isDirty:!1,loading:!1},e.loading=void 0,e}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,r(e,a);var i=n.prototype;return i.oninit=function(e){var a=this;t.prototype.oninit.call(this,e),this.state.enabledLocations=JSON.parse(s.a.data.settings["davwheat-ads.enabled-ad-locations"]),g.forEach((function(t){a.state.code[t]=s.a.data.settings["davwheat-ads.ad-code."+t]})),this.state.pubId=s.a.data.settings["davwheat-ads.ca-pub-id"],this.state.betweenNPosts=parseInt(s.a.data.settings["davwheat-ads.between-n-posts"])},i.content=function(){var t=this;return m("div",{class:"content"},m("fieldset",{class:"Form-group"},m("label",null,y("pub_id"),m("input",{class:"FormControl",placeholder:"ca-pub-XXXXXXXXXX",type:"text",value:this.state.pubId,oninput:function(e){t.state.isDirty=!0,t.state.pubId=e.currentTarget.value}}))),m("fieldset",{class:"Form-group"},m("legend",null,y("enabled_locations")),g.map((function(e){return m(p.a,{key:e,state:t.isLocationEnabled(e),onchange:function(a){var n=new Set(t.state.enabledLocations);a?n.add(e):n.delete(e),t.state.enabledLocations=Array.from(n),t.state.isDirty=!0},disabled:t.state.loading},s.a.translator.trans("davwheat.ads.lib.locations."+e))}))),m("fieldset",{class:"Form-group"},m("label",null,y("between_posts_gap"),m("input",{class:"FormControl",type:"number",min:"1",max:"25",value:this.state.betweenNPosts,oninput:function(e){var a=parseInt(e.currentTarget.value);t.state.isDirty=!0,t.state.betweenNPosts=a}}))),m("aside",{class:"davwheat-ads-notice"},y("warning")),m("fieldset",{class:"Form-group"},g.map((function(e){return m("label",null,y("code_input",{for:s.a.translator.trans("davwheat.ads.lib.locations."+e)}),m("textarea",{disabled:t.state.loading||!t.isLocationEnabled(e),class:"FormControl",value:t.isLocationEnabled(e)?t.state.code[e]:y("code_input_disabled"),oninput:function(a){t.state.isDirty=!0;var n=a.currentTarget.value;t.state.code[e]=n}}))}))),m(u.a,{onclick:this.saveSettings.bind(this),class:"Button Button--primary",disabled:!this.state.isDirty,loading:this.state.loading},this.getButtonText()))},i.isLocationEnabled=function(t){return this.state.enabledLocations.includes(t)},i.getButtonText=function(){return this.state.loading?v()(y("save_btn.saving")):this.state.isDirty?v()(y("save_btn.dirty")):v()(y("save_btn.saved"))},i.makeDirty=function(){this.state.isDirty=!0},i.saveSettings=function(t){var e=this;return t.preventDefault(),s.a.alerts.clear(),this.state.loading=!0,b()(o({"davwheat-ads.enabled-ad-locations":JSON.stringify(this.state.enabledLocations),"davwheat-ads.ca-pub-id":this.state.pubId,"davwheat-ads.between-n-posts":this.state.betweenNPosts},Object.keys(this.state.code).reduce((function(t,a){var n;return o({},t,((n={})["davwheat-ads.ad-code."+a]=e.state.code[a],n))}),{}))).then(this.onSettingsSaved.bind(this))},i.onSettingsSaved=function(){this.state.loading=!1,this.state.isDirty=!1,s.a.alerts.show({type:"success"},s.a.translator.trans("core.admin.settings.saved_message"))},n}(c.a);s.a.initializers.add("davwheat/ads",(function(){s.a.extensionData.for("davwheat-ads").registerPage(w)}))}]);
//# sourceMappingURL=admin.js.map