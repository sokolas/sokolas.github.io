(function(e){function t(t){for(var n,a,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);b&&b(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,a=1;a<o.length;a++){var u=o[a];0!==r[u]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={app:0},c=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6cc5d367"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],o=r[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=n);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=a(e);var s=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(l);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",s.name="ChunkLoadError",s.type=n,s.request=c,o[1](s)}r[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var b=s;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("cd49")},a793:function(e,t,o){},b9d4:function(e,t,o){"use strict";o("a793")},cd49:function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("0cdd");var n=o("7a23"),r={id:"nav"},c=Object(n["f"])("Home"),a=Object(n["f"])(" | "),i=Object(n["f"])("Donate"),u=Object(n["f"])(" | "),s=Object(n["f"])("Log out");function l(e,t){var o=Object(n["t"])("router-link"),l=Object(n["t"])("router-view");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])("div",r,[Object(n["g"])(o,{to:"/"},{default:Object(n["z"])((function(){return[c]})),_:1}),a,Object(n["g"])(o,{to:"/donate"},{default:Object(n["z"])((function(){return[i]})),_:1}),u,Object(n["g"])(o,{to:"/logout"},{default:Object(n["z"])((function(){return[s]})),_:1})]),Object(n["g"])(l)],64)}o("b9d4");const b={};b.render=l;var d=b,p=(o("d3b7"),o("3ca3"),o("ddb0"),o("6c02")),g={key:2,class:"jumbotron"},f=Object(n["g"])("h1",{class:"display-4"},"Hello!",-1),O={key:0},h=Object(n["g"])("hr",{class:"my-4"},null,-1);function j(e,t,o,r,c,a){var i=Object(n["t"])("User"),u=Object(n["t"])("Webhook");return Object(n["p"])(),Object(n["d"])(n["a"],null,[r.isLoggedIn?(Object(n["p"])(),Object(n["d"])(i,{key:0})):Object(n["e"])("",!0),r.isLoggedIn?(Object(n["p"])(),Object(n["d"])(u,{key:1})):Object(n["e"])("",!0),r.isLoggedIn?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("div",g,[f,r.loading?(Object(n["p"])(),Object(n["d"])("h2",O,"Loading...")):Object(n["e"])("",!0),h,Object(n["g"])("a",{class:"btn btn-primary",href:r.btnHref},"Log in with Twitch",8,["href"])]))],64)}var m=o("5502"),v=(o("b0c0"),{class:"jumbotron"}),k={class:"media"},y={class:"media-body"},w={class:"mt-0"};function L(e,t,o,r,c,a){return Object(n["p"])(),Object(n["d"])("div",v,[Object(n["g"])("div",k,[Object(n["g"])("img",{class:"mr-3",width:"64",height:"64",src:e.user.profile_image_url},null,8,["src"]),Object(n["g"])("div",y,[Object(n["g"])("h1",w,"Hello, "+Object(n["v"])(e.user.name)+"!",1)])])])}var S=Object(n["h"])({name:"User",setup:function(){var e=Object(n["b"])((function(){return Object(m["b"])().state.user}));return{user:e}}});S.render=L;var W=S;function I(e,t,o,r,c,a){return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["A"])(Object(n["g"])("input",{type:"text",class:"form-control",placeholder:"Webhook","aria-label":"Webhook","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.webhook=t})},null,512),[[n["x"],e.webhook]]),Object(n["g"])("button",{class:"btn btn-primary",type:"button",onClick:t[2]||(t[2]=function(){return e.addWebhook&&e.addWebhook.apply(e,arguments)})},"save"),Object(n["g"])("button",{class:"btn btn-danger",type:"button",onClick:t[3]||(t[3]=function(){return e.deleteWebhook&&e.deleteWebhook.apply(e,arguments)})},"delete")],64)}var _=Object(n["h"])({setup:function(){var e=Object(m["b"])(),t=Object(n["b"])((function(){return e.state.webhook})),o=Object(n["s"])(e.state.webhook);function r(){e.dispatch("setWebhook",o.value)}function c(){o.value=null,e.dispatch("setWebhook",null)}return console.log(o.value),{webhook:o,getHook:t,addWebhook:r,deleteWebhook:c}},name:"Webhook"});_.render=I;var E=_,x="https://ybww9nzma4.execute-api.us-east-2.amazonaws.com/main",H={setup:function(){var e=Object(m["b"])(),t=function(t){e.commit("setError",t)};e.getters.hasSid&&!e.state.loggedIn&&e.dispatch("logIn");var o=Object(n["b"])((function(){return Object(m["b"])().state.loggedIn})),r="https://id.twitch.tv/oauth2/authorize?client_id=qkc5eid1708t3j2ms0nswbw6gkmqw7&redirect_uri=".concat(x,"/getToken&response_type=code"),c=Object(n["b"])((function(){return e.state.loading}));return{setLastError:t,isLoggedIn:o,btnHref:r,loading:c}},components:{User:W,Webhook:E},name:"Home"};H.render=j;var P=H,U={style:{}},z=Object(n["g"])("h1",{class:"display-4"},"Hello, simp!",-1);function T(e,t,o,r,c,a){return Object(n["p"])(),Object(n["d"])("div",U,[z])}o("ac1f"),o("5319");var C=Object(n["h"])({props:{sid:String},setup:function(e){var t=Object(p["c"])();e.sid&&Object(m["b"])().commit("setSid",e.sid),t.replace({path:"/"})},name:"Login"});C.render=T;var M=C,q={class:"alert alert-danger"};function J(e,t,o,r,c,a){return Object(n["p"])(),Object(n["d"])("div",q,[Object(n["g"])("code",null,Object(n["v"])(a.getLastError),1)])}var A={name:"Error",computed:{getLastError:function(){return this.$store.state.error}}};A.render=J;var D=A,G={style:{}},N=Object(n["g"])("h1",{class:"display-4"},"Goodbye!",-1);function V(e,t,o,r,c,a){return Object(n["p"])(),Object(n["d"])("div",G,[N])}var $={setup:function(){Object(m["b"])().dispatch("logOut")},name:"Logout"};$.render=V;var B=$,F=[{path:"/",name:"Home",component:P},{path:"/donate",name:"Donate",component:function(){return o.e("about").then(o.bind(null,"8125"))}},{path:"/login/:sid",name:"Login",component:M,props:!0},{path:"/error",name:"Error",component:D},{path:"/logout",name:"Logout",component:B}],K=Object(p["a"])({history:Object(p["b"])(),routes:F}),Q=K,R=o("bc3a"),X=o.n(R),Y=Object(m["a"])({state:{error:{},user:null,loggedIn:!1,sid:window.localStorage.getItem("sid"),loading:!1,webhook:null},getters:{hasSid:function(e){return void 0!==e.sid&&null!=e.sid}},mutations:{setError:function(e,t){e.error=t},logIn:function(e,t){e.user=t,e.loggedIn=!0},logOut:function(e){e.loggedIn=!1},setUser:function(e,t){e.user=t},removeUser:function(e){e.user=null},setSid:function(e,t){e.sid=t,window.localStorage.setItem("sid",t)},removeSid:function(e){e.sid=null,window.localStorage.removeItem("sid")},startLoading:function(e){e.loading=!0},stopLoading:function(e){e.loading=!1},setWebhook:function(e,t){e.webhook=t}},actions:{logIn:function(e){var t=e.commit,o=e.state;console.log("logging in, ".concat(o.sid)),t("setSid",o.sid),t("startLoading"),X.a.get(x+"/getCurrentUser",{headers:{token:o.sid}}).then((function(e){console.log(e.status),200===e.status&&t("logIn",e.data),t("stopLoading")})).catch((function(e){t("setError",e),t("stopLoading")}))},setWebhook:function(e,t){var o=e.commit,n=e.state;console.log("Setting webhook: "+t),o("startLoading"),X.a.post(x+"/updateWebhook",JSON.stringify({webhook:t}),{headers:{token:n.sid}}).then((function(e){console.log(e.status),200===e.status&&o("setWebhook",t),o("stopLoading")})).catch((function(e){o("setError",e),o("stopLoading")}))},logOut:function(e){var t=e.commit;t("logOut"),t("removeUser"),t("removeSid")}},modules:{}});o("7b17"),o("ab8b");Object(n["c"])(d).use(Y).use(Q).mount("#app")}});
//# sourceMappingURL=app.19224f2e.js.map