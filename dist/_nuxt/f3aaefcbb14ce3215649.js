(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{222:function(t,e,r){"use strict";r(14),r(15),r(7),r(31);var n=r(9),c=r(11),o=r(12),l=r(5),f=r(4),d=r(25);function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var v=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},y=function(t){Object(c.a)(f,t);var e,r=(e=f,function(){var t,r=Object(l.a)(e);if(h()){var n=Object(l.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(o.a)(this,t)});function f(){return Object(n.a)(this,f),r.apply(this,arguments)}return f}(d.Vue);v([Object(d.Prop)()],y.prototype,"current",void 0),v([Object(d.Prop)()],y.prototype,"breadcrumbList",void 0);var O=y=v([d.Component],y),j=r(20),m=Object(j.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-6"},[r("ol",{staticClass:"breadcrumb float-sm-right"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"}},[t._v("\n        Home\n      ")])],1),t._v(" "),t._l(t.breadcrumbList,(function(e,n){return r("li",{key:n,staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:e.url}},[t._v("\n        "+t._s(e.title)+"\n      ")])],1)})),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[t._v("\n      "+t._s(t.current.title)+"\n    ")])],2)])}),[],!1,null,null,null).exports;function R(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var _=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},C=function(t){Object(c.a)(f,t);var e,r=(e=f,function(){var t,r=Object(l.a)(e);if(R()){var n=Object(l.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(o.a)(this,t)});function f(){return Object(n.a)(this,f),r.apply(this,arguments)}return f}(d.Vue);_([Object(d.Prop)()],C.prototype,"current",void 0),_([Object(d.Prop)()],C.prototype,"breadcrumbList",void 0);var P=C=_([Object(d.Component)({components:{Breadcrumb:m}})],C),w=Object(j.a)(P,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-header"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row mb-2"},[e("div",{staticClass:"col-sm-6"},[e("h1",[this._v(this._s(this.current.title))])]),this._v(" "),e("Breadcrumb",{attrs:{current:this.current,"breadcrumb-list":this.breadcrumbList}})],1)])])}),[],!1,null,null,null);e.a=w.exports},231:function(t,e,r){"use strict";r.r(e);r(14),r(15),r(7),r(31),r(65);var n=r(9),c=r(21),o=r(11),l=r(12),f=r(5),d=r(4),h=r(25),v=r(222);function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var O=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},j=function(t){Object(o.a)(d,t);var e,r=(e=d,function(){var t,r=Object(f.a)(e);if(y()){var n=Object(f.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(l.a)(this,t)});function d(){return Object(n.a)(this,d),r.apply(this,arguments)}return Object(c.a)(d,[{key:"mounted",value:function(){this.$router.replace("/form/basic/")}}]),d}(h.Vue),m=j=O([Object(h.Component)({components:{ContentHeader:v.a},middleware:["authenticated"]})],j),R=r(20),component=Object(R.a)(m,(function(){var t=this.$createElement;return(this._self._c||t)("ContentHeader",{attrs:{current:{title:"HOME",url:"/form/basic/"},"breadcrumb-list":[]}})}),[],!1,null,null,null);e.default=component.exports}}]);