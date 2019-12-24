(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/CO3":function(t,l,e){"use strict";e.r(l);var n=e("8Y7J"),i=e("jtHE"),s=e("itXk"),u=e("lJxs");class a{constructor(){this.query="",this.status="all",this.type="all"}}class c{constructor(t,l){this.apiService=t,this.locationService=l,this.showStatusMenu=!1,this.showTypeMenu=!1,this.criteriaSubject=new i.a(1),this.searchCriteria=new a,this.types=[{value:"all",title:"\u5168\u90e8"},{value:"class",title:"\u7c7b"},{value:"const",title:"\u5e38\u91cf"},{value:"decorator",title:"\u88c5\u9970\u5668"},{value:"directive",title:"\u6307\u4ee4"},{value:"enum",title:"\u679a\u4e3e"},{value:"function",title:"\u51fd\u6570"},{value:"interface",title:"\u63a5\u53e3"},{value:"pipe",title:"\u7ba1\u9053"},{value:"ngmodule",title:"NgModule"},{value:"type-alias",title:"\u7c7b\u578b\u522b\u540d"},{value:"package",title:"\u5305"}],this.statuses=[{value:"all",title:"\u5168\u90e8"},{value:"deprecated",title:"\u5f03\u7528"},{value:"security-risk",title:"\u5b89\u5168\u98ce\u9669"}]}ngOnInit(){this.filteredSections=Object(s.a)(this.apiService.sections,this.criteriaSubject).pipe(Object(u.a)(t=>({sections:t[0],criteria:t[1]})),Object(u.a)(t=>t.sections.map(l=>Object.assign({},l,{items:this.filterSection(l,t.criteria)})))),this.initializeSearchCriteria()}setQuery(t){this.setSearchCriteria({query:(t||"").toLowerCase().trim()})}setStatus(t){this.toggleStatusMenu(),this.status=t,this.setSearchCriteria({status:t.value})}setType(t){this.toggleTypeMenu(),this.type=t,this.setSearchCriteria({type:t.value})}toggleStatusMenu(){this.showStatusMenu=!this.showStatusMenu}toggleTypeMenu(){this.showTypeMenu=!this.showTypeMenu}filterSection(t,{query:l,status:e,type:n}){const i=t.items.filter(i=>("all"===n||n===i.docType)&&("all"===e||e===i.stability||"security-risk"===e&&i.securityRisk)&&(!l||-1!==t.name.indexOf(l)||-1!==i.name.indexOf(l)));return i.length?i:"package"!==n||l&&-1===t.name.indexOf(l)?null:[]}initializeSearchCriteria(){const{query:t,status:l,type:e}=this.locationService.search(),n=(t||"").toLowerCase();this.queryEl.nativeElement.value=n,this.status=this.statuses.find(t=>t.value===l)||this.statuses[0],this.type=this.types.find(t=>t.value===e)||this.types[0],this.searchCriteria={query:n,status:this.status.value,type:this.type.value},this.criteriaSubject.next(this.searchCriteria)}setLocationSearch(){const{query:t,status:l,type:e}=this.searchCriteria;this.locationService.setSearch("API \u641c\u7d22",{query:t||void 0,status:"all"!==l?l:void 0,type:"all"!==e?e:void 0})}setSearchCriteria(t){this.criteriaSubject.next(Object.assign(this.searchCriteria,t)),this.setLocationSearch()}}class o{constructor(){this.customElementComponent=c}}var r=e("SVse"),h=e("1nbL"),b=e("x4lQ"),p=e("XNiG"),y=e("1G5W"),d=e("vkgz"),m=e("jn67");class f{constructor(t,l){this.http=t,this.logger=l,this.apiBase=m.b+"api/",this.apiListJsonDefault="api-list.json",this.firstTime=!0,this.onDestroy=new p.a,this.sectionsSubject=new i.a(1),this._sections=this.sectionsSubject.pipe(Object(y.a)(this.onDestroy))}get sections(){return this.firstTime&&(this.firstTime=!1,this.fetchSections(),this._sections.subscribe(t=>this.logger.log("ApiService got API sections"))),this._sections.pipe(Object(d.a)(t=>{t.forEach(t=>{t.deprecated=!!t.items&&t.items.every(t=>"deprecated"===t.stability)})}))}ngOnDestroy(){this.onDestroy.next()}fetchSections(t){const l=this.apiBase+(t||this.apiListJsonDefault);this.http.get(l).pipe(Object(y.a)(this.onDestroy),Object(d.a)(()=>this.logger.log(`Got API sections from ${l}`))).subscribe(t=>this.sectionsSubject.next(t),t=>{throw this.logger.error(t),t})}}var g=e("/lUL"),v=n.mb({encapsulation:2,styles:[],data:{}});function w(t){return n.Gb(0,[(t()(),n.ob(0,0,null,null,2,"h2",[],null,null,null,null,null)),(t()(),n.ob(1,0,null,null,1,"a",[],[[8,"href",4],[2,"deprecated-api-item",null]],null,null,null,null)),(t()(),n.Eb(2,null,["",""]))],null,function(t,l){t(l,1,0,l.parent.context.$implicit.path,l.parent.context.$implicit.deprecated),t(l,2,0,l.parent.context.$implicit.title)})}function S(t){return n.Gb(0,[(t()(),n.ob(0,0,null,null,4,null,null,null,null,null,null,null)),(t()(),n.ob(1,0,null,null,3,"li",[["class","api-item"]],null,null,null,null,null)),(t()(),n.ob(2,0,null,null,2,"a",[],[[8,"href",4],[2,"deprecated-api-item",null]],null,null,null,null)),(t()(),n.ob(3,0,null,null,0,"span",[],[[8,"className",0]],null,null,null,null)),(t()(),n.Eb(4,null,[" "," "]))],null,function(t,l){t(l,2,0,l.context.$implicit.path,"deprecated"===l.context.$implicit.stability),t(l,3,0,n.qb(1,"symbol ",l.context.$implicit.docType,"")),t(l,4,0,l.context.$implicit.title)})}function k(t){return n.Gb(0,[(t()(),n.ob(0,0,null,null,2,"ul",[["class","api-list"]],null,null,null,null,null)),(t()(),n.eb(16777216,null,null,1,null,S)),n.nb(2,278528,null,0,r.j,[n.O,n.L,n.r],{ngForOf:[0,"ngForOf"]},null)],function(t,l){t(l,2,0,l.parent.context.$implicit.items)},null)}function O(t){return n.Gb(0,[(t()(),n.ob(0,0,null,null,4,"div",[],null,null,null,null,null)),(t()(),n.eb(16777216,null,null,1,null,w)),n.nb(2,16384,null,0,r.k,[n.O,n.L],{ngIf:[0,"ngIf"]},null),(t()(),n.eb(16777216,null,null,1,null,k)),n.nb(4,16384,null,0,r.k,[n.O,n.L],{ngIf:[0,"ngIf"]},null)],function(t,l){t(l,2,0,l.context.$implicit.items),t(l,4,0,null==l.context.$implicit.items?null:l.context.$implicit.items.length)},null)}function j(t){return n.Gb(0,[n.Cb(402653184,1,{queryEl:0}),(t()(),n.ob(1,0,null,null,8,"div",[["class","l-flex-wrap api-filter"]],null,null,null,null,null)),(t()(),n.ob(2,0,null,null,1,"aio-select",[["label","\u7c7b\u578b\uff1a"]],null,[[null,"change"],["document","click"],["document","keydown.escape"]],function(t,l,e){var i=!0,s=t.component;return"document:click"===l&&(i=!1!==n.yb(t,3).onClick(e.target)&&i),"document:keydown.escape"===l&&(i=!1!==n.yb(t,3).onKeyDown()&&i),"change"===l&&(i=!1!==s.setType(e.option)&&i),i},h.b,h.a)),n.nb(3,114688,null,0,b.a,[n.k],{selected:[0,"selected"],options:[1,"options"],showSymbol:[2,"showSymbol"],label:[3,"label"]},{change:"change"}),(t()(),n.ob(4,0,null,null,1,"aio-select",[["label","\u72b6\u6001\uff1a"]],null,[[null,"change"],["document","click"],["document","keydown.escape"]],function(t,l,e){var i=!0,s=t.component;return"document:click"===l&&(i=!1!==n.yb(t,5).onClick(e.target)&&i),"document:keydown.escape"===l&&(i=!1!==n.yb(t,5).onKeyDown()&&i),"change"===l&&(i=!1!==s.setStatus(e.option)&&i),i},h.b,h.a)),n.nb(5,114688,null,0,b.a,[n.k],{selected:[0,"selected"],options:[1,"options"],label:[2,"label"],disabled:[3,"disabled"]},{change:"change"}),(t()(),n.ob(6,0,null,null,3,"div",[["class","form-search"]],null,null,null,null,null)),(t()(),n.ob(7,0,[[1,0],["filter",1]],null,0,"input",[["placeholder","\u8fc7\u6ee4"]],null,[[null,"input"]],function(t,l,e){var n=!0;return"input"===l&&(n=!1!==t.component.setQuery(e.target.value)&&n),n},null,null)),(t()(),n.ob(8,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(t()(),n.Eb(-1,null,["search"])),(t()(),n.ob(10,0,null,null,3,"article",[["class","api-list-container l-content-small docs-content"]],null,null,null,null,null)),(t()(),n.eb(16777216,null,null,2,null,O)),n.nb(12,278528,null,0,r.j,[n.O,n.L,n.r],{ngForOf:[0,"ngForOf"]},null),n.zb(131072,r.b,[n.h])],function(t,l){var e=l.component;t(l,3,0,e.type,e.types,!0,"\u7c7b\u578b\uff1a"),t(l,5,0,e.status,e.statuses,"\u72b6\u6001\uff1a","package"===e.type.value),t(l,12,0,n.Fb(l,12,0,n.yb(l,13).transform(e.filteredSections)))},null)}function x(t){return n.Gb(0,[(t()(),n.ob(0,0,null,null,1,"aio-api-list",[],null,null,null,j,v)),n.nb(1,114688,null,0,c,[f,g.a],null,null)],function(t,l){t(l,1,0)},null)}var C=n.kb("aio-api-list",c,x,{},{},[]),T=e("IheW"),L=e("vHPH"),M=e("PCNd");e.d(l,"ApiListModuleNgFactory",function(){return $});var $=n.lb(o,[],function(t){return n.vb([n.wb(512,n.j,n.Z,[[8,[C]],[3,n.j],n.w]),n.wb(4608,r.m,r.l,[n.t,[2,r.B]]),n.wb(4608,T.h,T.n,[r.d,n.A,T.l]),n.wb(4608,T.o,T.o,[T.h,T.m]),n.wb(5120,T.a,function(t){return[t]},[T.o]),n.wb(4608,T.k,T.k,[]),n.wb(6144,T.i,null,[T.k]),n.wb(4608,T.g,T.g,[T.i]),n.wb(6144,T.b,null,[T.g]),n.wb(4608,T.f,T.j,[T.b,n.q]),n.wb(4608,T.c,T.c,[T.f]),n.wb(135680,f,f,[T.c,L.a]),n.wb(1073742336,r.c,r.c,[]),n.wb(1073742336,M.a,M.a,[]),n.wb(1073742336,T.e,T.e,[]),n.wb(1073742336,T.d,T.d,[]),n.wb(1073742336,o,o,[]),n.wb(256,T.l,"XSRF-TOKEN",[]),n.wb(256,T.m,"X-XSRF-TOKEN",[])])})}}]);
//# sourceMappingURL=7-es2015.e0e0b4ca5f9cbf42dd20.js.map