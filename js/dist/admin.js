module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=18)}([,function(t,e){t.exports=flarum.core.compat["admin/app"]},,,,,function(t,e){t.exports=flarum.core.compat["common/utils/extractText"]},function(t,e,r){t.exports=r(16)},function(t,e){t.exports=flarum.core.compat["common/components/Switch"]},,,,,function(t,e){t.exports=flarum.core.compat["admin/components/ExtensionPage"]},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e){t.exports=flarum.core.compat["admin/utils/saveSettings"]},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=w(i,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l={};function d(){}function f(){}function h(){}var p={};s(p,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(E([])));y&&y!==e&&r.call(y,o)&&(p=y);var m=h.prototype=d.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,s){var c=u(t[o],t,a);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,s)}))}s(c.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=h,s(m,"constructor",h),s(h,"constructor",f),f.displayName=s(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,s(t,i,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(b.prototype),s(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(m),s(m,i,"Generator"),s(m,o,(function(){return this})),s(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},,function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function i(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var c=r(7),u=r.n(c),l=r(13),d=r.n(l),f=r(14),h=r.n(f),p=r(8),v=r.n(p),y=r(15),g=r.n(y),b=r(6),w=r.n(b),x=["header","sidebar","between_posts","footer","discussion_header","discussion_sidebar"],_=function(t,e){return o.a.translator.trans("davwheat.ads.admin.settings."+t,e)},L=function(t){var e,r;function n(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).state={enabledLocations:[],code:{header:"",footer:"",sidebar:"",between_posts:"",discussion_header:"",discussion_sidebar:""},enableAdAfterPlaceholder:!1,betweenNPosts:0,pubId:"",isDirty:!1,loading:!1},e.loading=void 0,e}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,s(e,r);var c=n.prototype;return c.oninit=function(e){var r=this;t.prototype.oninit.call(this,e),this.state.enabledLocations=JSON.parse(o.a.data.settings["davwheat-ads.enabled-ad-locations"]||"[]"),x.forEach((function(t){r.state.code[t]=o.a.data.settings["davwheat-ads.ad-code."+t]||""})),this.state.pubId=o.a.data.settings["davwheat-ads.ca-pub-id"]||"",this.state.betweenNPosts=parseInt(o.a.data.settings["davwheat-ads.between-n-posts"]),this.state.enableAdAfterPlaceholder="1"===o.a.data.settings["davwheat-ads.enable-ad-after-placeholder"]},c.content=function(){var t=this;return m("div",{class:"content"},m("fieldset",{class:"Form-group"},m("label",null,_("pub_id"),m("input",{class:"FormControl",placeholder:"ca-pub-XXXXXXXXXX",type:"text",value:this.state.pubId,disabled:this.state.loading,oninput:function(e){t.state.isDirty=!0,t.state.pubId=e.currentTarget.value}}))),m("fieldset",{class:"Form-group"},m("legend",null,_("enabled_locations")),x.map((function(e){return m(v.a,{key:e,state:t.isLocationEnabled(e),onchange:function(r){var n=new Set(t.state.enabledLocations);r?n.add(e):n.delete(e),t.state.enabledLocations=Array.from(n),t.state.isDirty=!0},disabled:t.state.loading},o.a.translator.trans("davwheat.ads.lib.locations."+e))}))),m("fieldset",{class:"Form-group"},m("label",null,_("between_posts_gap"),m("input",{class:"FormControl",type:"number",min:"1",max:"25",value:this.state.betweenNPosts,disabled:this.state.loading||!this.isLocationEnabled("between_posts"),oninput:function(e){var r=parseInt(e.currentTarget.value);t.state.isDirty=!0,t.state.betweenNPosts=r}})),m(v.a,{state:this.state.enableAdAfterPlaceholder,onchange:function(e){t.state.isDirty=!0,t.state.enableAdAfterPlaceholder=e},loading:this.state.loading,disabled:this.state.loading||!this.isLocationEnabled("between_posts")},_("allow_after_placeholder"))),m("aside",{class:"davwheat-ads-notice"},_("warning")),m("fieldset",{class:"Form-group"},x.map((function(e){return m("label",null,_("code_input",{for:o.a.translator.trans("davwheat.ads.lib.locations."+e)}),m("textarea",{disabled:t.state.loading||!t.isLocationEnabled(e),class:"FormControl",value:t.isLocationEnabled(e)?t.state.code[e]:_("code_input_disabled"),oninput:function(r){t.state.isDirty=!0;var n=r.currentTarget.value;t.state.code[e]=n}}))}))),m(h.a,{onclick:this.saveSettings.bind(this),class:"Button Button--primary",disabled:!this.state.isDirty,loading:this.state.loading},this.getButtonText()))},c.isLocationEnabled=function(t){return this.state.enabledLocations.includes(t)},c.getButtonText=function(){return this.state.loading?w()(_("save_btn.saving")):this.state.isDirty?w()(_("save_btn.dirty")):w()(_("save_btn.saved"))},c.makeDirty=function(){this.state.isDirty=!0},c.saveSettings=function(){var t,e=(t=u.a.mark((function t(e){var r=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),o.a.alerts.clear(),this.state.loading=!0,!Object.keys(this.state.code).some((function(t){return!!r.state.code[t].includes("<script")}))){t.next=8;break}return o.a.alerts.show({type:"error"},_("alert.code_has_script")),this.state.loading=!1,t.abrupt("return",!1);case 8:return t.next=10,g()(a({"davwheat-ads.enabled-ad-locations":JSON.stringify(this.state.enabledLocations),"davwheat-ads.ca-pub-id":this.state.pubId,"davwheat-ads.between-n-posts":this.state.betweenNPosts,"davwheat-ads.enable-ad-after-placeholder":this.state.enableAdAfterPlaceholder?1:0},Object.keys(this.state.code).reduce((function(t,e){var n;return a({},t,((n={})["davwheat-ads.ad-code."+e]=r.state.code[e],n))}),{})));case 10:return this.onSettingsSaved(),t.abrupt("return",!0);case 12:case"end":return t.stop()}}),t,this)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function s(t){i(a,n,o,s,c,"next",t)}function c(t){i(a,n,o,s,c,"throw",t)}s(void 0)}))});return function(t){return e.apply(this,arguments)}}(),c.onSettingsSaved=function(){this.state.loading=!1,this.state.isDirty=!1,o.a.alerts.show({type:"success"},o.a.translator.trans("core.admin.settings.saved_message"))},n}(d.a);o.a.initializers.add("davwheat/ads",(function(){o.a.extensionData.for("davwheat-ads").registerPage(L)}))}]);
//# sourceMappingURL=admin.js.map