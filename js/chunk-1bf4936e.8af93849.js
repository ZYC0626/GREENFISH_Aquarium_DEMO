(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bf4936e"],{1906:function(e,a,t){"use strict";t.r(a);t("b0c0");var c=t("7a23"),l=Object(c["h"])("div",{class:"loader-wrapper"},[Object(c["h"])("span",{class:"loader"})],-1),r=Object(c["i"])('<section><div class="container-fluid p-0"><div class="landing bg-cover bg-center" style="background-image:url(https://images.unsplash.com/photo-1550376672-6d778f8a4b5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1934&amp;q=80);"></div></div></section><div class="container py-4 px-md-6 mt-md-6 mt-4"><ul class="progressbar"><li class="active"><span class="progressbar_text">填寫資料</span></li><li class=""><span class="progressbar_text">確認付款</span></li><li class=""><span class="progressbar_text">訂單完成</span></li></ul></div>',2),s={class:"container p-md-6 p-4 mb-4"},n={class:"row justify-content-center"},o={class:"col-lg-8 col-md-10"},i=Object(c["h"])("h3",null,"收件人資訊",-1),d=Object(c["h"])("hr",null,null,-1),u={class:"col-12"},b=Object(c["h"])("label",{for:"email",class:"form-label"},"信箱",-1),m=Object(c["h"])("span",{class:"badge rounded-pill bg-danger ms-2"},"必填",-1),f={class:"col-md-6"},p=Object(c["h"])("label",{for:"name",class:"form-label"},"姓名",-1),h=Object(c["h"])("span",{class:"badge rounded-pill bg-danger ms-2"},"必填",-1),j={class:"col-md-6"},O=Object(c["h"])("label",{for:"tel",class:"form-label"},"電話",-1),v=Object(c["h"])("span",{class:"badge rounded-pill bg-danger ms-2"},"必填",-1),g={class:"col-12"},k=Object(c["h"])("label",{for:"address",class:"form-label"},"地址",-1),x=Object(c["h"])("span",{class:"badge rounded-pill bg-danger ms-2"},"必填",-1),y={class:"col-12"},w=Object(c["h"])("label",{class:"form-check-label ms-2",for:"checkbox"}," 已了解所有購物須知。 ",-1),V={class:"col-12"},H=Object(c["h"])("label",{for:"message",class:"form-label"},"備註",-1),S={class:"col-12 d-flex"},q=Object(c["h"])("i",{class:"bi bi-chevron-left"},null,-1),U=Object(c["j"])("回到購物車"),_=Object(c["h"])("button",{type:"submit",class:"ms-auto btn btn-primary"},[Object(c["j"])("下一步"),Object(c["h"])("i",{class:"bi bi-chevron-right"})],-1);function L(e,a,t,L,M,E){var A=Object(c["H"])("Loading"),B=Object(c["H"])("Field"),F=Object(c["H"])("ErrorMessage"),T=Object(c["H"])("router-link"),D=Object(c["H"])("Form");return Object(c["A"])(),Object(c["g"])(c["a"],null,[Object(c["k"])(A,{active:M.isLoading},{default:Object(c["S"])((function(){return[l]})),_:1},8,["active"]),r,Object(c["h"])("section",s,[Object(c["h"])("div",n,[Object(c["h"])("div",o,[i,d,Object(c["k"])(D,{class:"row g-3",onSubmit:E.creatOrder},{default:Object(c["S"])((function(e){var t=e.errors;return[Object(c["h"])("div",u,[b,m,Object(c["k"])(B,{id:"email",name:"email",type:"email",class:Object(c["r"])(["form-control",{"is-invalid":t["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:M.form.user.email,"onUpdate:modelValue":a[0]||(a[0]=function(e){return M.form.user.email=e})},null,8,["class","modelValue"]),Object(c["k"])(F,{name:"email",class:"invalid-feedback"})]),Object(c["h"])("div",f,[p,h,Object(c["k"])(B,{id:"name",name:"姓名",type:"text",class:Object(c["r"])(["form-control",{"is-invalid":t["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:M.form.user.name,"onUpdate:modelValue":a[1]||(a[1]=function(e){return M.form.user.name=e})},null,8,["class","modelValue"]),Object(c["k"])(F,{name:"姓名",class:"invalid-feedback"})]),Object(c["h"])("div",j,[O,v,Object(c["k"])(B,{id:"tel",name:"電話",type:"tel",class:Object(c["r"])(["form-control",{"is-invalid":t["電話"]}]),placeholder:"請輸入電話",rules:"required",modelValue:M.form.user.tel,"onUpdate:modelValue":a[2]||(a[2]=function(e){return M.form.user.tel=e})},null,8,["class","modelValue"]),Object(c["k"])(F,{name:"電話",class:"invalid-feedback"})]),Object(c["h"])("div",g,[k,x,Object(c["k"])(B,{id:"address",name:"地址",type:"text",class:Object(c["r"])(["form-control",{"is-invalid":t["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:M.form.user.address,"onUpdate:modelValue":a[3]||(a[3]=function(e){return M.form.user.address=e})},null,8,["class","modelValue"]),Object(c["k"])(F,{name:"地址",class:"invalid-feedback"})]),Object(c["h"])("div",y,[Object(c["k"])(B,{class:Object(c["r"])(["form-check-input",{"is-invalid":t["確認須知"]}]),name:"確認須知",type:"checkbox",id:"checkbox",rules:"required",modelValue:M.checked,"onUpdate:modelValue":a[4]||(a[4]=function(e){return M.checked=e}),value:"confirm"},null,8,["class","modelValue"]),w,Object(c["k"])(F,{name:"確認須知",class:"invalid-feedback"})]),Object(c["h"])("div",V,[H,Object(c["T"])(Object(c["h"])("textarea",{class:"form-control",id:"message",rows:"3",placeholder:"產品備註...","onUpdate:modelValue":a[5]||(a[5]=function(e){return M.form.message=e})},null,512),[[c["O"],M.form.message]])]),Object(c["h"])("div",S,[Object(c["k"])(T,{to:"/cart",class:"me-auto btn btn-outline-primary"},{default:Object(c["S"])((function(){return[q,U]})),_:1}),_])]})),_:1},8,["onSubmit"])])])])],64)}t("99af");var M={data:function(){return{isLoading:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""},checked:""}},inject:["emitter"],methods:{creatOrder:function(){var e=this,a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("zyc0626-api","/order");this.isLoading=!0;var t=this.form;this.$http.post(a,{data:t}).then((function(a){console.log(a.data),e.isLoading=!1,e.emitter.emit("updatecart"),e.$router.push("/checkoutPay/".concat(a.data.orderId))}))}}};M.render=L;a["default"]=M},"1dde":function(e,a,t){var c=t("d039"),l=t("b622"),r=t("2d00"),s=l("species");e.exports=function(e){return r>=51||!c((function(){var a=[],t=a.constructor={};return t[s]=function(){return{foo:1}},1!==a[e](Boolean).foo}))}},8418:function(e,a,t){"use strict";var c=t("a04b"),l=t("9bf2"),r=t("5c6c");e.exports=function(e,a,t){var s=c(a);s in e?l.f(e,s,r(0,t)):e[s]=t}},"99af":function(e,a,t){"use strict";var c=t("23e7"),l=t("d039"),r=t("e8b5"),s=t("861d"),n=t("7b0b"),o=t("50c4"),i=t("8418"),d=t("65f0"),u=t("1dde"),b=t("b622"),m=t("2d00"),f=b("isConcatSpreadable"),p=9007199254740991,h="Maximum allowed index exceeded",j=m>=51||!l((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),O=u("concat"),v=function(e){if(!s(e))return!1;var a=e[f];return void 0!==a?!!a:r(e)},g=!j||!O;c({target:"Array",proto:!0,forced:g},{concat:function(e){var a,t,c,l,r,s=n(this),u=d(s,0),b=0;for(a=-1,c=arguments.length;a<c;a++)if(r=-1===a?s:arguments[a],v(r)){if(l=o(r.length),b+l>p)throw TypeError(h);for(t=0;t<l;t++,b++)t in r&&i(u,b,r[t])}else{if(b>=p)throw TypeError(h);i(u,b++,r)}return u.length=b,u}})},b0c0:function(e,a,t){var c=t("83ab"),l=t("9bf2").f,r=Function.prototype,s=r.toString,n=/^\s*function ([^ (]*)/,o="name";c&&!(o in r)&&l(r,o,{configurable:!0,get:function(){try{return s.call(this).match(n)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-1bf4936e.8af93849.js.map