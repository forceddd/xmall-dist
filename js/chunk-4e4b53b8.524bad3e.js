(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e4b53b8"],{1631:function(t,r,e){},"1da1":function(t,r,e){"use strict";e.d(r,"a",(function(){return o}));e("d3b7"),e("e6cf");function n(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void e(s)}u.done?r(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}},"1e68":function(t,r,e){"use strict";var n=e("1631"),o=e.n(n);o.a},7101:function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"login"},[e("div",{staticClass:"box"},[e("span",[t._v("使用账号 登录官网")]),e("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,"status-icon":"",rules:t.rules,"label-width":"100px"}},[e("el-form-item",{attrs:{label:"账号",prop:"user"}},[e("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:"请输入账号"},model:{value:t.ruleForm.user,callback:function(r){t.$set(t.ruleForm,"user",r)},expression:"ruleForm.user"}})],1),e("el-form-item",{attrs:{label:"密码",prop:"pass"}},[e("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"请输入密码"},model:{value:t.ruleForm.pass,callback:function(r){t.$set(t.ruleForm,"pass",r)},expression:"ruleForm.pass"}})],1),e("div",{staticClass:"geetest"}),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(r){return t.submitForm("ruleForm")}}},[t._v("登录")]),e("el-button",[t._v("返回")])],1)],1)],1)])},o=[],i=(e("96cf"),e("1da1")),a=e("4d73"),u={data:function(){var t=function(t,r,e){r?e():e(new Error("用户名不能为空"))},r=function(t,r,e){r?e():e(new Error("密码不能为空"))};return{ruleForm:{user:"",pass:""},rules:{user:[{validator:t,trigger:"blur"}],pass:[{validator:r,trigger:"blur"}]}}},methods:{submitForm:function(t){var r=this;this.$refs[t].validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n,o,i,u,c,s,l,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e){t.next=17;break}return n=r.ruleForm,o=n.user,i=n.pass,t.next=4,r.$axios.post("/api/login",{user:o,pass:i});case 4:if(u=t.sent,200!==u.data.code){t.next=15;break}return c=u.data,c.username,s=c.token,l=c.id,a["a"].set("token",s),a["a"].set("id",l),t.next=11,r.$axios.post("/api/cartList",{userId:l});case 11:f=t.sent,a["a"].set("cartList",f.data.cartList.cartList),r.$store.commit("ISLOGIN",{info:u.data,isLogin:!0}),r.$router.push({path:r.$route.query.next});case 15:t.next=19;break;case 17:return console.log("error submit!!"),t.abrupt("return",!1);case 19:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())}}},c=u,s=(e("1e68"),e("2877")),l=Object(s["a"])(c,n,o,!1,null,"e28ef69a",null);r["default"]=l.exports},"96cf":function(t,r,e){var n=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=k(t,e,a),i}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var l="suspendedStart",f="suspendedYield",h="executing",p="completed",v={};function d(){}function m(){}function y(){}var g={};g[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(G([])));x&&x!==e&&n.call(x,i)&&(g=x);var b=y.prototype=d.prototype=Object.create(g);function L(t){["next","throw","return"].forEach((function(r){t[r]=function(t){return this._invoke(r,t)}}))}function E(t,r){function e(o,i,a,u){var c=s(t[o],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"===typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,a,u)}),(function(t){e("throw",t,a,u)})):r.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return e("throw",t,a,u)}))}u(c.arg)}var o;function i(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function k(t,r,e){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return N()}e.method=o,e.arg=i;while(1){var a=e.delegate;if(a){var u=F(a,e);if(u){if(u===v)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=h;var c=s(t,r,e);if("normal"===c.type){if(n=e.done?p:f,c.arg===v)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n=p,e.method="throw",e.arg=c.arg)}}}function F(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=r,F(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function G(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){while(++o<t.length)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:r,done:!0}}return m.prototype=b.constructor=y,y.constructor=m,y[u]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},L(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new E(c(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(b),b[u]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){while(r.length){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=G,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=chunk-4e4b53b8.524bad3e.js.map