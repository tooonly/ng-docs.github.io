function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"5UAH":function(n,e,t){"use strict";t.r(e);var r=t("ofXK"),a=t("tk/3"),c=t("PCNd"),o=t("JIr8"),i=t("lJxs"),u=t("jn67"),s=t("fXoL"),f=t("vHPH");function l(n,e){if(1&n&&(s.Vb(0,"div",1),s.Vb(1,"div",2),s.Qb(2,"img",3),s.Qb(3,"p",4),s.Vb(4,"a",5),s.Gc(5,"Learn More"),s.Tb(),s.Tb(),s.Tb()),2&n){var t=s.hc();s.Ab(2),s.mc("src",t.announcement.imageUrl,s.xc),s.Ab(1),s.mc("innerHTML",t.announcement.message,s.wc),s.Ab(1),s.mc("href",t.announcement.linkUrl,s.xc)}}var b,m=u.a+"announcements.json",p=((b=function(){function n(e,t){_classCallCheck(this,n),this.http=e,this.logger=t}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.http.get(m).pipe(Object(o.a)((function(e){return n.logger.error(new Error("".concat(m," request failed: ").concat(e.message))),[]})),Object(i.a)((function(e){return n.findCurrentAnnouncement(e)})),Object(o.a)((function(e){return n.logger.error(new Error("".concat(m," contains invalid data: ").concat(e.message))),[]}))).subscribe((function(e){return n.announcement=e}))}},{key:"findCurrentAnnouncement",value:function(n){return n.filter((function(n){return new Date(n.startDate).valueOf()<Date.now()})).filter((function(n){return new Date(n.endDate).valueOf()>Date.now()}))[0]}}]),n}()).\u0275fac=function(n){return new(n||b)(s.Pb(a.a),s.Pb(f.a))},b.\u0275cmp=s.Jb({type:b,selectors:[["aio-announcement-bar"]],decls:1,vars:1,consts:[["class","homepage-container",4,"ngIf"],[1,"homepage-container"],[1,"announcement-bar"],["alt","",3,"src"],[3,"innerHTML"],[1,"button",3,"href"]],template:function(n,e){1&n&&s.Ec(0,l,6,3,"div",0),2&n&&s.mc("ngIf",e.announcement)},directives:[r.k],encapsulation:2}),b);t.d(e,"AnnouncementBarModule",(function(){return h}));var d,h=((d=function n(){_classCallCheck(this,n),this.customElementComponent=p}).\u0275mod=s.Nb({type:d}),d.\u0275inj=s.Mb({factory:function(n){return new(n||d)},imports:[[r.c,c.a,a.b]]}),d)}}]);
//# sourceMappingURL=announcement-bar-announcement-bar-module-es5.1a46560a3e0751a68e04.js.map