module.exports=function(e){var t={};function a(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=17)}([function(e,t){e.exports=flarum.core.compat["forum/app"]},,function(e,t){e.exports=flarum.core.compat["common/extend"]},function(e,t){e.exports=flarum.core.compat["forum/components/IndexPage"]},function(e,t){e.exports=flarum.core.compat["forum/components/PostStream"]},,function(e,t){e.exports=flarum.core.compat["forum/components/DiscussionPage"]},,,function(e,t){e.exports=flarum.core.compat["forum/components/DiscussionHero"]},function(e,t){e.exports=flarum.core.compat["forum/components/DiscussionListPane"]},function(e,t){e.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(e,t){e.exports=flarum.core.compat["common/helpers/listItems"]},,,,,function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(2);function s(){try{(adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){setTimeout(s,1e3)}}var d=a(4),c=a.n(d);var i=a(6),u=a.n(i),p=a(9),l=a.n(p),f=a(10),v=a.n(f),h=a(11),b=a.n(h),w=a(12),y=a.n(w);var x=a(3),g=a.n(x);n.a.initializers.add("davwheat/ads",(function(){var e,t,a=JSON.parse(n.a.data["davwheat-ads.enabled-ad-locations"]);a.includes("header")&&(e=n.a.data["davwheat-ads.ad-code.header"],t=m.trust(e),Object(r.override)(g.a.prototype,"hero",(function(e){return[e(),m("div",{class:"davwheat-ad davwheat-ad-header"},t)]})),Object(r.extend)(g.a.prototype,["oncreate","onupdate"],(function(e){return s(),e}))),a.includes("discussion_header")&&function(){var e=n.a.data["davwheat-ads.ad-code.discussion_header"],t=m.trust(e);Object(r.override)(u.a.prototype,"view",(function(e){var a=this.discussion;return m("div",{className:"DiscussionPage"},m(v.a,{state:n.a.discussions}),m("div",{className:"DiscussionPage-discussion"},a?[l.a.component({discussion:a}),m("div",{className:"container"},m("nav",{className:"DiscussionPage-nav"},m("ul",null,y()(this.sidebarItems().toArray()))),m("div",{className:"DiscussionPage-stream"},m("div",{class:"davwheat-ad davwheat-ad-discussion-header"},t),c.a.component({discussion:a,stream:this.stream,onPositionChange:this.positionChanged.bind(this)})))]:m(b.a,null)))})),Object(r.extend)(u.a.prototype,["oncreate","onupdate"],(function(e){return s(),e}))}(),a.includes("footer")&&function(){var e=n.a.data["davwheat-ads.ad-code.footer"],t=document.createElement("footer");t.className="davwheat-ad davwheat-ad-footer",document.querySelector(".App-content").append(t),t.innerHTML=e;var a=history.pushState;history.pushState=function(){for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];a.apply(history,n),t.innerHTML=e,s()},s()}(),a.includes("between_posts")&&function(){var e=n.a.data["davwheat-ads.ad-code.between_posts"],t=m.trust(e);Object(r.override)(c.a.prototype,"view",(function(e){var a=e().children,o=a.reduce((function(e,o,r){var s=[].concat(e,[o]);return r+1<a.length&&r%(parseInt(n.a.data["davwheat-ads.between-n-posts"])||15)==0&&s.push(m("aside",{key:"davwheat-ad-"+r,class:"PostStream-item"},m("div",{class:"davwheat-ad davwheat-ad-between-posts"},t))),s}),[]);return"1"===n.a.data["davwheat-ads.enable-ad-after-placeholder"]&&o.push(m("aside",{key:"davwheat-ad-after-placeholder",class:"PostStream-item"},m("div",{class:"davwheat-ad davwheat-ad-between-posts davwheat-ad-between-posts--after-placeholder"},t))),m("div",{className:"PostStream"},o)})),Object(r.extend)(c.a.prototype,["onupdate","oncreate"],(function(e){return s(),e}))}(),a.includes("sidebar")&&function(){var e=n.a.data["davwheat-ads.ad-code.sidebar"],t=m.trust(e);Object(r.extend)(g.a.prototype,"sidebarItems",(function(e){return e.add("davwheat-ads",m("div",{class:"davwheat-ad davwheat-ad-sidebar"},t),-1e3),e})),Object(r.extend)(g.a.prototype,["oncreate","onupdate"],(function(e){return s(),e}))}()}))}]);
//# sourceMappingURL=forum.js.map