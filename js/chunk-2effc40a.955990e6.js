(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2effc40a"],{"1dde":function(t,e,c){var a=c("d039"),n=c("b622"),i=c("2d00"),r=n("species");t.exports=function(t){return i>=51||!a((function(){var e=[],c=e.constructor={};return c[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4de4":function(t,e,c){"use strict";var a=c("23e7"),n=c("b727").filter,i=c("1dde"),r=i("filter");a({target:"Array",proto:!0,forced:!r},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},"55ad":function(t,e,c){t.exports=c.p+"img/WLOGODeepBlue.6bd9e72d.png"},8418:function(t,e,c){"use strict";var a=c("a04b"),n=c("9bf2"),i=c("5c6c");t.exports=function(t,e,c){var r=a(e);r in t?n.f(t,r,i(0,c)):t[r]=c}},"88e9":function(t,e,c){"use strict";c.r(e);var a=c("7a23"),n={class:"container-fluid position-relative px-0"};function i(t,e,c,i,r,s){var o=Object(a["H"])("UserNavbar"),l=Object(a["H"])("router-view"),b=Object(a["H"])("ToastMessages"),d=Object(a["H"])("LikesList"),u=Object(a["H"])("ToTop"),h=Object(a["H"])("Userfooter");return Object(a["A"])(),Object(a["g"])(a["a"],null,[Object(a["k"])(o),Object(a["h"])("div",n,[Object(a["k"])(l),Object(a["k"])(b),Object(a["k"])(d),Object(a["k"])(u)]),Object(a["k"])(h)],64)}var r=c("55ad"),s=c.n(r),o={class:"navbar navbar-expand-md navbar-light bg-xl-transparent fixed-top transitionNavbar"},l={class:"container-fluid px-0"},b=Object(a["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText"},[Object(a["h"])("span",{class:"navbar-toggler-icon"})],-1),d=Object(a["h"])("a",{class:"navbar-brand m-0",href:"#"},[Object(a["h"])("img",{src:s.a,height:"55",alt:"LOGO",class:"d-md-inline-block d-none"}),Object(a["h"])("img",{src:s.a,height:"40",alt:"LOGO",class:"d-inline-block d-md-none"})],-1),u={class:"collapse navbar-collapse",id:"navbarText",ref:"collapseX"},h={class:"navbar-nav ms-auto mb-2 mb-lg-0"},j={class:"nav-item"},O={class:"nav-item"},f=Object(a["j"])("商品"),p={class:"nav-item"};function v(t,e,c,n,i,r){var s=Object(a["H"])("Cart"),v=Object(a["H"])("router-link");return Object(a["A"])(),Object(a["g"])("nav",o,[Object(a["h"])("div",l,[b,d,Object(a["k"])(s),Object(a["h"])("div",u,[Object(a["h"])("ul",h,[Object(a["h"])("li",j,[Object(a["h"])("a",{href:"#",class:Object(a["r"])(["nav-link text-center px-lg-5 nav-link-shadow",{active:"Home"===i.routeName}])},"首頁",2)]),Object(a["h"])("li",O,[Object(a["k"])(v,{to:"/products/all",class:Object(a["r"])(["nav-link text-center px-lg-5 nav-link-shadow",{active:"products"===i.routeName||"prodInfo"===i.routeName}])},{default:Object(a["S"])((function(){return[f]})),_:1},8,["class"])]),Object(a["h"])("li",p,[Object(a["h"])("a",{class:"nav-link text-center px-lg-5 nav-link-shadow","data-bs-toggle":"offcanvas",href:"#collectCanvas",onClick:e[0]||(e[0]=Object(a["U"])((function(){return t.test&&t.test.apply(t,arguments)}),["prevent"]))},"最愛")])])],512)])])}c("b0c0");var m={class:"dropdown order-md-1"},g={class:"btn btn-cart position-relative",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},k=Object(a["h"])("div",{class:"material-icons md-36"},"shopping_cart",-1),y={class:"badge rounded-pill bg-danger position-absolute"},x={class:"dropdown-menu dropdown-menu-end"},w={key:0,class:"p-4 py-3 text-center"},L=Object(a["h"])("div",{class:"mw-300"},[Object(a["h"])("i",{class:"bi bi-bag-check-fill fs-1"}),Object(a["h"])("p",{class:"m-0"},"已在購物確認流程")],-1),S=[L],I={key:1,class:"px-md-4 px-3 py-3"},T={key:0},A=Object(a["h"])("h6",null,"已選擇商品",-1),C={class:"table table-sm mw-300"},$={class:"align-middle text-center"},H=["onClick"],N=Object(a["h"])("i",{class:"bi bi-x-circle-fill"},null,-1),_=[N],U={class:"align-middle"},P={class:"align-middle"},E={class:"align-middle text-end"},K={key:0,colspan:"4",class:"text-end text-success"},q={class:"d-grid gap-2"},M=Object(a["h"])("i",{class:"bi bi-bag-check me-3"},null,-1),G=Object(a["j"])("結帳去"),J={key:1},B=Object(a["h"])("div",{class:"mw-300 text-primary"},[Object(a["h"])("p",null,"購物車還沒有加入任何商品!")],-1),F={class:"d-grid gap-2"},z=Object(a["h"])("i",{class:"bi bi-cart-plus me-3"},null,-1),Y=Object(a["j"])("購物去");function D(t,e,c,n,i,r){var s=Object(a["H"])("router-link");return Object(a["A"])(),Object(a["g"])("div",m,[Object(a["h"])("button",g,[k,Object(a["h"])("span",y,Object(a["K"])(i.count),1)]),Object(a["h"])("div",x,[i.lock?(Object(a["A"])(),Object(a["g"])("div",w,S)):(Object(a["A"])(),Object(a["g"])("div",I,[i.count>0?(Object(a["A"])(),Object(a["g"])("div",T,[A,Object(a["h"])("table",C,[Object(a["h"])("tbody",null,[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(i.cart.carts,(function(e){return Object(a["A"])(),Object(a["g"])("tr",{key:e.id},[Object(a["h"])("td",$,[Object(a["h"])("a",{href:"#",class:"text-danger",onClick:Object(a["U"])((function(t){return r.delCart(e)}),["prevent"])},_,8,H)]),Object(a["h"])("td",U,Object(a["K"])(e.product.title),1),Object(a["h"])("td",P,Object(a["K"])(e.qty)+Object(a["K"])(e.product.unit),1),Object(a["h"])("td",E,"NT$ "+Object(a["K"])(t.$filters.currency(e.final_total)),1)])})),128)),Object(a["h"])("tr",null,[i.coupon?(Object(a["A"])(),Object(a["g"])("td",K," 已套用優惠碼 : "+Object(a["K"])(i.coupon),1)):Object(a["f"])("",!0)])])]),Object(a["h"])("div",q,[Object(a["k"])(s,{to:"/cart",class:"btn btn-primary"},{default:Object(a["S"])((function(){return[M,G]})),_:1})])])):(Object(a["A"])(),Object(a["g"])("div",J,[B,Object(a["h"])("div",F,[Object(a["k"])(s,{to:"/products/all",class:"btn btn-primary"},{default:Object(a["S"])((function(){return[z,Y]})),_:1})])]))]))])])}c("99af");var W={data:function(){return{cart:[],count:0,coupon:"",lock:!1}},methods:{getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("zyc0626-api","/cart");this.$http.get(e).then((function(e){t.cart=e.data.data,t.count=t.cart.carts.length,t.coupon=t.count>0&&t.cart.carts[0].coupon?t.cart.carts[0].coupon.code:""}))},delCart:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("zyc0626-api","/cart/").concat(t.id);this.$http.delete(c).then((function(t){e.$httpMessageState(t,"從購物車移除"),e.getCart()}))}},watch:{$route:function(t,e){"/cart"===t.fullPath||"/checkoutInfo"===t.fullPath||"checkoutPay"===this.$route.name?this.lock=!0:this.lock=!1}},inject:["emitter"],created:function(){this.getCart(),this.emitter.on("updatecart",this.getCart),"/cart"!==this.$route.fullPath&&"/checkoutInfo"!==this.$route.fullPath||(this.lock=!0)}};W.render=D;var X=W,Q={components:{Cart:X},data:function(){return{routeName:""}},created:function(){window.addEventListener("scroll",this.handleScroll),this.routeName=this.$route.name},unmounted:function(){window.removeEventListener("scroll",this.handleScroll)},watch:{$route:function(t,e){this.routeName=this.$route.name}},methods:{handleScroll:function(t){var e=document.querySelector(".navbar");window.scrollY>10?(e.classList.add("bg-light"),e.classList.remove("bg-xl-transparent")):(e.classList.remove("bg-light"),e.classList.add("bg-xl-transparent"))}}};Q.render=v;var R=Q,V=c("0c0a"),Z=c.n(V),tt={class:"container-fluid bg-primary py-4"},et={class:"container px-md-5"},ct={class:"row mt-3 g-0 justify-content-between align-items-center"},at={class:"col-md-6"},nt=Object(a["h"])("a",{href:"#"},[Object(a["h"])("img",{src:Z.a,height:"50",alt:"LOGO"})],-1),it={class:"list-unstyled d-flex ms-3 mt-2"},rt=Object(a["i"])('<li><a href="#"><i class="bi bi-instagram pe-3"></i></a></li><li><a href="#"><i class="bi bi-facebook pe-3"></i></a></li><li><a href="#"><i class="bi bi-github pe-3"></i></a></li>',3),st=Object(a["h"])("i",{class:"bi bi-person-circle pe-3"},null,-1),ot=Object(a["i"])('<div class="col-md-6"><ul class="list-unstyled text-md-end"><li class="pt-2"><a class="text-decoration-none" href="tel:02-1234-5678">02-1234-5678</a></li><li class="pt-2"><a class="text-decoration-none" href="mailto:greenfish@aquarium.com">greenfish@aquarium.com</a></li><li class="pt-2"><a class="text-decoration-none" href="http://maps.google.com/?q=基隆市中正區北寧路367號" target="_blank">202 基隆市中正區北寧路367號</a></li></ul></div>',1),lt=Object(a["h"])("div",{class:"text-md-center my-4"},[Object(a["j"])("© Copyright 2021 "),Object(a["h"])("br",{class:"d-block d-md-none"}),Object(a["j"])(" 練習使用非商業用途")],-1);function bt(t,e){var c=Object(a["H"])("router-link");return Object(a["A"])(),Object(a["g"])("footer",tt,[Object(a["h"])("div",et,[Object(a["h"])("div",ct,[Object(a["h"])("div",at,[nt,Object(a["h"])("ul",it,[rt,Object(a["h"])("li",null,[Object(a["k"])(c,{to:"/login",title:"登入後台"},{default:Object(a["S"])((function(){return[st]})),_:1})])])]),ot]),lt])])}const dt={};dt.render=bt;var ut=dt,ht=c("f367"),jt={class:"offcanvas offcanvas-custom","data-bs-scroll":"true",tabindex:"-1",id:"collectCanvas",ref:"canvas"},Ot=Object(a["i"])('<div class="offcanvas-header"><h5 class="offcanvas-title text-primary"><i class="bi bi-star-fill me-2"></i>最愛列表</h5><button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button></div><hr class="m-0">',2),ft={class:"offcanvas-body"},pt={class:"likeItem-remove"},vt=["onClick","disabled"],mt=Object(a["h"])("i",{class:"bi bi-pin-angle-fill"},null,-1),gt=[mt],kt={class:"row g-0 mb-3"},yt={class:"col-5"},xt={class:"\r\n              col-7\r\n              d-flex\r\n              align-items-center\r\n              justify-content-center\r\n            "},wt=["onClick"],Lt={key:0,class:"bi bi-geo-alt-fill me-1"},St={key:1,class:"bi bi-search me-1"},It={class:"fs-5 mt-4 text-primary"},Tt={key:0},At=Object(a["h"])("p",null,[Object(a["j"])("快使用"),Object(a["h"])("i",{class:"bi bi-star mx-2"}),Object(a["j"])("將商品加入最愛列表吧 !")],-1),Ct=Object(a["h"])("p",null,"讓你快速抵達商品資訊 !",-1),$t=Object(a["j"])("前往商品列表"),Ht=Object(a["h"])("i",{class:"bi bi-chevron-right"},null,-1);function Nt(t,e,c,n,i,r){var s=Object(a["H"])("router-link");return Object(a["A"])(),Object(a["g"])("div",jt,[Ot,Object(a["h"])("div",ft,[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(i.likes,(function(e){return Object(a["A"])(),Object(a["g"])("div",{class:Object(a["r"])(["likeItem",{"slide-out":i.removeId===e.id}]),key:e.id},[Object(a["h"])("div",pt,[Object(a["h"])("button",{type:"button",class:"btn",onClick:function(t){return r.updateLikes(e)},disabled:""!==i.removeId},gt,8,vt)]),Object(a["h"])("div",kt,[Object(a["h"])("div",yt,[Object(a["h"])("div",{class:"likeItemImg",style:Object(a["s"])({"background-image":"url("+e.imageUrl+")"})},null,4)]),Object(a["h"])("div",xt,[Object(a["h"])("a",{href:"#",class:Object(a["r"])(["text-decoration-none text-center likeItme-text",{active:t.$route.params.productId===e.id}]),onClick:Object(a["U"])((function(t){return r.goToProd(e.id)}),["prevent"])},[t.$route.params.productId===e.id?(Object(a["A"])(),Object(a["g"])("i",Lt)):(Object(a["A"])(),Object(a["g"])("i",St)),Object(a["h"])("span",null,Object(a["K"])(e.title),1)],10,wt)])])],2)})),128)),Object(a["h"])("div",It,[0===i.likes.length?(Object(a["A"])(),Object(a["g"])("p",Tt,"您還沒有將喜愛的商品加入最愛")):Object(a["f"])("",!0),At,Ct,Object(a["k"])(s,{to:"/products/all",class:"btn btn-outline-primary mt-2"},{default:Object(a["S"])((function(){return[$t,Ht]})),_:1})])])],512)}c("d81d"),c("4de4");var _t={data:function(){return{likes:[],likesId:[],removeId:""}},methods:{getLikes:function(){var t=localStorage.getItem("likelist")?localStorage.getItem("likelist"):"[]";this.likes=JSON.parse(t),this.likesId=this.likes.map((function(t){return t.id}))},goToProd:function(t){this.$router.push("/product/".concat(t))},updateLikes:function(t){var e=this;this.removeId=t.id,setTimeout((function(){e.likes=e.likes.filter((function(e){return e.id!==t.id})),e.likesId=e.likes.map((function(t){return t.id})),e.saveLocalStorage(e.likes),"products"===e.$route.name?e.emitter.emit("updatelike"):"prodInfo"===e.$route.name&&e.emitter.emit("updatelikeId"),e.removeId=""}),800)},saveLocalStorage:function(t){var e=JSON.stringify(t);try{localStorage.setItem("likelist",e)}catch(c){return!1}},messagePush:function(){var t={data:{data:{},message:"最愛列表",success:!0}};this.$httpMessageState(t,"從最愛列表移除")}},inject:["emitter"],created:function(){this.getLikes()},mounted:function(){this.$refs.canvas.addEventListener("show.bs.offcanvas",this.getLikes)}};_t.render=Nt;var Ut=_t,Pt=Object(a["h"])("span",{class:"material-icons"}," keyboard_double_arrow_up ",-1),Et=[Pt];function Kt(t,e,c,n,i,r){return Object(a["A"])(),Object(a["g"])("a",{class:"toTop",href:"#",onClick:e[0]||(e[0]=Object(a["U"])((function(){return r.goToTop&&r.goToTop.apply(r,arguments)}),["prevent"]))},Et)}var qt={data:function(){return{}},methods:{goToTop:function(){window.scrollTo({top:0,behavior:"smooth"})},handleScroll:function(t){var e=document.querySelector(".toTop");window.scrollY>500?e.classList.add("active"):e.classList.remove("active")}},created:function(){window.addEventListener("scroll",this.handleScroll),this.routeName=this.$route.name},unmounted:function(){window.removeEventListener("scroll",this.handleScroll)}};qt.render=Kt;var Mt=qt,Gt=c("cfb9"),Jt={name:"Home",components:{UserNavbar:R,Userfooter:ut,LikesList:Ut,ToTop:Mt,ToastMessages:ht["a"]},provide:function(){return{emitter:Gt["a"]}}};Jt.render=i;e["default"]=Jt},"99af":function(t,e,c){"use strict";var a=c("23e7"),n=c("d039"),i=c("e8b5"),r=c("861d"),s=c("7b0b"),o=c("50c4"),l=c("8418"),b=c("65f0"),d=c("1dde"),u=c("b622"),h=c("2d00"),j=u("isConcatSpreadable"),O=9007199254740991,f="Maximum allowed index exceeded",p=h>=51||!n((function(){var t=[];return t[j]=!1,t.concat()[0]!==t})),v=d("concat"),m=function(t){if(!r(t))return!1;var e=t[j];return void 0!==e?!!e:i(t)},g=!p||!v;a({target:"Array",proto:!0,forced:g},{concat:function(t){var e,c,a,n,i,r=s(this),d=b(r,0),u=0;for(e=-1,a=arguments.length;e<a;e++)if(i=-1===e?r:arguments[e],m(i)){if(n=o(i.length),u+n>O)throw TypeError(f);for(c=0;c<n;c++,u++)c in i&&l(d,u,i[c])}else{if(u>=O)throw TypeError(f);l(d,u++,i)}return d.length=u,d}})},b0c0:function(t,e,c){var a=c("83ab"),n=c("9bf2").f,i=Function.prototype,r=i.toString,s=/^\s*function ([^ (]*)/,o="name";a&&!(o in i)&&n(i,o,{configurable:!0,get:function(){try{return r.call(this).match(s)[1]}catch(t){return""}}})},d81d:function(t,e,c){"use strict";var a=c("23e7"),n=c("b727").map,i=c("1dde"),r=i("map");a({target:"Array",proto:!0,forced:!r},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-2effc40a.955990e6.js.map