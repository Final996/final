(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49c6106d"],{"0ccb":function(e,t,r){var n=r("50c4"),a=r("1148"),o=r("1d80"),i=Math.ceil,s=function(e){return function(t,r,s){var u,c,l=String(o(t)),f=l.length,p=void 0===s?" ":String(s),d=n(r);return d<=f||""==p?l:(u=d-f,c=a.call(p,i(u/p.length)),c.length>u&&(c=c.slice(0,u)),e?l+c:c+l)}};e.exports={start:s(!1),end:s(!0)}},"0e8f":function(e,t,r){"use strict";r.d(t,"c",(function(){return a})),r.d(t,"e",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"d",(function(){return s})),r.d(t,"f",(function(){return u})),r.d(t,"b",(function(){return c}));var n=r("b775");function a(){return Object(n["a"])({url:"/company/department"})}function o(){return Object(n["a"])({url:"/sys/user/simple"})}function i(e){return Object(n["a"])({method:"post",url:"/company/department",data:e})}function s(e){return Object(n["a"])({url:"/company/department/".concat(e)})}function u(e){return Object(n["a"])({method:"put",url:"/company/department/".concat(e.id),data:e})}function c(e){return Object(n["a"])({method:"delete",url:"/company/department/".concat(e)})}},1148:function(e,t,r){"use strict";var n=r("a691"),a=r("1d80");e.exports="".repeat||function(e){var t=String(a(this)),r="",o=n(e);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(r+=t);return r}},"14c3":function(e,t,r){var n=r("c6b6"),a=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var o=r.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"2a2a":function(e,t,r){},"2c3e":function(e,t,r){var n=r("83ab"),a=r("9f7f").UNSUPPORTED_Y,o=r("9bf2").f,i=r("69f3").get,s=RegExp.prototype;n&&a&&o(RegExp.prototype,"sticky",{configurable:!0,get:function(){if(this!==s){if(this instanceof RegExp)return!!i(this).sticky;throw TypeError("Incompatible receiver, RegExp required")}}})},"430d":function(e,t,r){"use strict";r("7d2a")},4939:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"dashboard-container"},[t("div",{staticClass:"app-container"},[t("div",{staticClass:"edit-form"},[t("el-form",{ref:"userForm",attrs:{model:e.userInfo,rules:e.rules,"label-width":"220px"}},[t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"姓名",prop:"username"}},[t("el-input",{staticClass:"inputW",attrs:{size:"mini"},model:{value:e.userInfo.username,callback:function(t){e.$set(e.userInfo,"username",t)},expression:"userInfo.username"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"工号",prop:"workNumber"}},[t("el-input",{staticClass:"inputW",attrs:{disabled:"",size:"mini"},model:{value:e.userInfo.workNumber,callback:function(t){e.$set(e.userInfo,"workNumber",t)},expression:"userInfo.workNumber"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[t("el-input",{staticClass:"inputW",attrs:{disabled:!!e.$route.params.id,size:"mini"},model:{value:e.userInfo.mobile,callback:function(t){e.$set(e.userInfo,"mobile",t)},expression:"userInfo.mobile"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"部门",prop:"departmentId"}},[t("select-tree",{staticClass:"inputW",model:{value:e.userInfo.departmentId,callback:function(t){e.$set(e.userInfo,"departmentId",t)},expression:"userInfo.departmentId"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"聘用形式",prop:"formOfEmployment"}},[t("el-select",{staticClass:"inputW",attrs:{size:"mini"},model:{value:e.userInfo.formOfEmployment,callback:function(t){e.$set(e.userInfo,"formOfEmployment",t)},expression:"userInfo.formOfEmployment"}},[t("el-option",{attrs:{label:"正式",value:1}}),t("el-option",{attrs:{label:"非正式",value:2}})],1)],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"入职时间",prop:"timeOfEntry"}},[t("el-date-picker",{staticClass:"inputW",attrs:{size:"mini",type:"date","value-format":"yyyy-MM-dd"},model:{value:e.userInfo.timeOfEntry,callback:function(t){e.$set(e.userInfo,"timeOfEntry",t)},expression:"userInfo.timeOfEntry"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"转正时间",prop:"correctionTime"}},[t("el-date-picker",{staticClass:"inputW",attrs:{size:"mini",type:"date"},model:{value:e.userInfo.correctionTime,callback:function(t){e.$set(e.userInfo,"correctionTime",t)},expression:"userInfo.correctionTime"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"员工头像"}},[t("image-upload",{model:{value:e.userInfo.staffPhoto,callback:function(t){e.$set(e.userInfo,"staffPhoto",t)},expression:"userInfo.staffPhoto"}})],1)],1)],1),t("el-row",{attrs:{type:"flex"}},[t("el-col",{staticStyle:{"margin-left":"220px"},attrs:{span:12}},[t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.saveData}},[e._v("保存更新")])],1)],1)],1)],1)])])},a=[],o=r("c7eb"),i=r("1da1"),s=function(){var e=this,t=e._self._c;return t("el-cascader",{attrs:{value:e.value,size:"mini",options:e.treeData,props:e.props,separator:"-"},on:{change:e.changeValue}})},u=[],c=(r("a9e3"),r("0e8f")),l=r("ed08"),f={props:{value:{type:Number,default:null}},data:function(){return{treeData:[],props:{label:"name",value:"id"}}},created:function(){this.getDepartment()},methods:{getDepartment:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=l["a"],t.next=3,Object(c["c"])();case 3:t.t1=t.sent,e.treeData=(0,t.t0)(t.t1,0);case 5:case"end":return t.stop()}}),t)})))()},changeValue:function(e){e.length>0?this.$emit("input",e[e.length-1]):this.$emit("input",null)}}},p=f,d=r("2877"),m=Object(d["a"])(p,s,u,!1,null,null,null),b=m.exports,g=function(){var e=this,t=e._self._c;return t("el-upload",{staticClass:"avatar-uploader",attrs:{action:"","show-file-list":!1,"before-upload":e.beforeAvatarUpload,"http-request":e.uploadImage}},[e.value?t("img",{staticClass:"avatar",attrs:{src:e.value}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])},v=[],h=(r("caad"),{props:{value:{type:String,default:""}},methods:{beforeAvatarUpload:function(e){var t=["image/jpeg","image/png","image/gif","image/bmp"].includes(e.type),r=e.size/1024/1024<5;return t||this.$message.error("上传头像图片只能是 JPG PNG GIF BMP 格式!"),r||this.$message.error("上传头像图片大小不能超过 5MB!"),t&&r},uploadImage:function(e){console.log(e.file)}}}),y=h,E=(r("430d"),Object(d["a"])(y,g,v,!1,null,null,null)),x=E.exports,O=r("ef75"),I={components:{SelectTree:b,ImageUpload:x},data:function(){var e=this;return{userInfo:{username:"",mobile:"",workNumber:"",formOfEmployment:null,departmentId:null,timeOfEntry:"",correctionTime:"",staffPhoto:""},rules:{username:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:1,max:4,message:"姓名为1-4位"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^1[3-9]\d{9}$/,message:"手机号格式不正确",trigger:"blur"}],formOfEmployment:[{required:!0,message:"请选择聘用形式",trigger:"blur"}],departmentId:[{required:!0,message:"请选择部门",trigger:"blur"}],timeOfEntry:[{required:!0,message:"请选择入职时间",trigger:"blur"}],correctionTime:[{required:!0,message:"请选择转正时间",trigger:"blur"},{validator:function(t,r,n){e.userInfo.timeOfEntry&&new Date(e.userInfo.timeOfEntry)>new Date(r)?n(new Error("转正时间不能小于入职时间")):n()}}]}}},created:function(){this.$route.params.id&&this.getEmployeeDetail()},methods:{getEmployeeDetail:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(O["e"])(e.$route.params.id);case 2:e.userInfo=t.sent;case 3:case"end":return t.stop()}}),t)})))()},saveData:function(){var e=this;this.$refs.userForm.validate(function(){var t=Object(i["a"])(Object(o["a"])().mark((function t(r){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=11;break}if(!e.$route.params.id){t.next=7;break}return t.next=4,Object(O["i"])(e.userInfo);case 4:e.$message.success("更新员工成功"),t.next=10;break;case 7:return t.next=9,Object(O["a"])(e.userInfo);case 9:e.$message.success("新增员工成功");case 10:e.$router.push("/employee");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},w=I,j=(r("5869"),Object(d["a"])(w,n,a,!1,null,"699c86f8",null));t["default"]=j.exports},"4d63":function(e,t,r){var n=r("83ab"),a=r("da84"),o=r("94ca"),i=r("7156"),s=r("9bf2").f,u=r("241c").f,c=r("44e7"),l=r("ad6d"),f=r("9f7f"),p=r("6eeb"),d=r("d039"),m=r("69f3").set,b=r("2626"),g=r("b622"),v=g("match"),h=a.RegExp,y=h.prototype,E=/a/g,x=/a/g,O=new h(E)!==E,I=f.UNSUPPORTED_Y,w=n&&o("RegExp",!O||I||d((function(){return x[v]=!1,h(E)!=E||h(x)==x||"/a/i"!=h(E,"i")})));if(w){var j=function(e,t){var r,n=this instanceof j,a=c(e),o=void 0===t;if(!n&&a&&e.constructor===j&&o)return e;O?a&&!o&&(e=e.source):e instanceof j&&(o&&(t=l.call(e)),e=e.source),I&&(r=!!t&&t.indexOf("y")>-1,r&&(t=t.replace(/y/g,"")));var s=i(O?new h(e,t):h(e,t),n?this:y,j);return I&&r&&m(s,{sticky:r}),s},$=function(e){e in j||s(j,e,{configurable:!0,get:function(){return h[e]},set:function(t){h[e]=t}})},k=u(h),S=0;while(k.length>S)$(k[S++]);y.constructor=j,j.prototype=y,p(a,"RegExp",j)}b("RegExp")},"4d90":function(e,t,r){"use strict";var n=r("23e7"),a=r("0ccb").start,o=r("9a0c");n({target:"String",proto:!0,forced:o},{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5319:function(e,t,r){"use strict";var n=r("d784"),a=r("825a"),o=r("7b0b"),i=r("50c4"),s=r("a691"),u=r("1d80"),c=r("8aa5"),l=r("14c3"),f=Math.max,p=Math.min,d=Math.floor,m=/\$([$&'`]|\d\d?|<[^>]*>)/g,b=/\$([$&'`]|\d\d?)/g,g=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var v=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,h=n.REPLACE_KEEPS_$0,y=v?"$":"$0";return[function(r,n){var a=u(this),o=void 0==r?void 0:r[e];return void 0!==o?o.call(r,a,n):t.call(String(a),r,n)},function(e,n){if(!v&&h||"string"===typeof n&&-1===n.indexOf(y)){var o=r(t,e,this,n);if(o.done)return o.value}var u=a(e),d=String(this),m="function"===typeof n;m||(n=String(n));var b=u.global;if(b){var x=u.unicode;u.lastIndex=0}var O=[];while(1){var I=l(u,d);if(null===I)break;if(O.push(I),!b)break;var w=String(I[0]);""===w&&(u.lastIndex=c(d,i(u.lastIndex),x))}for(var j="",$=0,k=0;k<O.length;k++){I=O[k];for(var S=String(I[0]),R=f(p(s(I.index),d.length),0),T=[],P=1;P<I.length;P++)T.push(g(I[P]));var _=I.groups;if(m){var C=[S].concat(T,R,d);void 0!==_&&C.push(_);var D=String(n.apply(void 0,C))}else D=E(S,d,R,T,_,n);R>=$&&(j+=d.slice($,R)+D,$=R+S.length)}return j+d.slice($)}];function E(e,r,n,a,i,s){var u=n+e.length,c=a.length,l=b;return void 0!==i&&(i=o(i),l=m),t.call(s,l,(function(t,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,n);case"'":return r.slice(u);case"<":s=i[o.slice(1,-1)];break;default:var l=+o;if(0===l)return t;if(l>c){var f=d(l/10);return 0===f?t:f<=c?void 0===a[f-1]?o.charAt(1):a[f-1]+o.charAt(1):t}s=a[l-1]}return void 0===s?"":s}))}}))},5869:function(e,t,r){"use strict";r("2a2a")},"7d2a":function(e,t,r){},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"9a0c":function(e,t,r){var n=r("342f");e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),o=r("b622"),i=r("9263"),s=r("9112"),u=o("species"),c=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=o("replace"),p=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),d=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,f){var m=o(e),b=!a((function(){var t={};return t[m]=function(){return 7},7!=""[e](t)})),g=b&&!a((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[m]=/./[m]),r.exec=function(){return t=!0,null},r[m](""),!t}));if(!b||!g||"replace"===e&&(!c||!l||p)||"split"===e&&!d){var v=/./[m],h=r(m,""[e],(function(e,t,r,n,a){return t.exec===i?b&&!a?{done:!0,value:v.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),y=h[0],E=h[1];n(String.prototype,e,y),n(RegExp.prototype,m,2==t?function(e,t){return E.call(e,this,t)}:function(e){return E.call(e,this)})}f&&s(RegExp.prototype[m],"sham",!0)}},ed08:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("53ca"),r("d3b7"),r("4d63"),r("ac1f"),r("2c3e"),r("00b4"),r("25f0"),r("4d90"),r("5319"),r("159b");function n(e,t){var r=[];return e.forEach((function(a){if(a.pid===t){r.push(a);var o=n(e,a.id);o.length&&(a.children=o)}})),r}},ef75:function(e,t,r){"use strict";r.d(t,"f",(function(){return a})),r.d(t,"d",(function(){return o})),r.d(t,"h",(function(){return i})),r.d(t,"j",(function(){return s})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return c})),r.d(t,"e",(function(){return l})),r.d(t,"i",(function(){return f})),r.d(t,"g",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r("b775");function a(e){return Object(n["a"])({url:"/sys/user",params:e})}function o(){return Object(n["a"])({url:"/sys/user/export",responseType:"blob"})}function i(){return Object(n["a"])({url:"/sys/user/import/template",responseType:"blob"})}function s(e){return Object(n["a"])({url:"/sys/user/import",method:"post",data:e})}function u(e){return Object(n["a"])({method:"delete",url:"/sys/user/".concat(e)})}function c(e){return Object(n["a"])({url:"/sys/user",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/sys/user/".concat(e)})}function f(e){return Object(n["a"])({url:"/sys/user/".concat(e.id),method:"put",data:e})}function p(){return Object(n["a"])({url:"/sys/role/list/enabled"})}function d(e){return Object(n["a"])({url:"/sys/user/assignRoles",method:"put",data:e})}}}]);