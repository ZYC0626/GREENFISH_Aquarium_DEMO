(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c84d4"],{"53ff":function(t,e,a){"use strict";a.r(e);var c=a("7a23"),r={class:"container-fluid pb-4",style:{"min-height":"85vh"}},n=Object(c["h"])("footer",{class:"container-fluid bg-primary py-4 mt-3"},[Object(c["h"])("div",{class:"container px-md-5"},[Object(c["h"])("div",{class:"text-center my-4"},[Object(c["j"])("© Copyright 2021 "),Object(c["h"])("br",{class:"d-block d-md-none"}),Object(c["j"])(" 練習使用非商業用途")])])],-1);function o(t,e,a,o,s,i){var l=Object(c["H"])("Navbar"),b=Object(c["H"])("ToastMessages"),u=Object(c["H"])("fixedTool"),d=Object(c["H"])("router-view");return Object(c["A"])(),Object(c["g"])(c["a"],null,[Object(c["k"])(l),Object(c["k"])(b),Object(c["k"])(u),Object(c["h"])("div",r,[Object(c["k"])(d)]),n],64)}a("ac1f"),a("5319");var s=a("cfb9"),i=a("81e6"),l=a("0c0a"),b=a.n(l),u={class:"navbar navbar-expand-md navbar-dark bg-primary"},d={class:"container-fluid"},h=Object(c["h"])("img",{src:b.a,height:"50",alt:"LOGO"},null,-1),j=Object(c["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["h"])("span",{class:"navbar-toggler-icon"})],-1),v={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},p={class:"navbar-nav"},O=Object(c["j"])("商品"),f=Object(c["j"])("訂單"),g=Object(c["j"])("優惠券");function m(t,e){var a=Object(c["H"])("router-link");return Object(c["A"])(),Object(c["g"])("nav",u,[Object(c["h"])("div",d,[Object(c["k"])(a,{to:"/dashboard/products",class:"navbar-brand m-0"},{default:Object(c["S"])((function(){return[h]})),_:1}),j,Object(c["h"])("div",v,[Object(c["h"])("div",p,[Object(c["k"])(a,{to:"/dashboard/products",class:Object(c["r"])(["nav-link",{active:"/dashboard/products"===t.$route.path}])},{default:Object(c["S"])((function(){return[O]})),_:1},8,["class"]),Object(c["k"])(a,{to:"/dashboard/orders",class:Object(c["r"])(["nav-link",{active:"/dashboard/orders"===t.$route.path}])},{default:Object(c["S"])((function(){return[f]})),_:1},8,["class"]),Object(c["k"])(a,{to:"/dashboard/coupons",class:Object(c["r"])(["nav-link",{active:"/dashboard/coupons"===t.$route.path}])},{default:Object(c["S"])((function(){return[g]})),_:1},8,["class"])])])])])}const k={};k.render=m;var $=k,y={id:"circularMenu",class:"circular-menu"},x=Object(c["h"])("span",{class:"material-icons"},"meeting_room ",-1),w=[x],A={class:"items-wrapper"},M=Object(c["h"])("a",{href:"#",class:"menu-item material-icons",title:"回商店首頁"},"home",-1);function T(t,e,a,r,n,o){return Object(c["A"])(),Object(c["g"])("div",y,[Object(c["h"])("a",{class:"floating-btn",href:"#",onClick:e[0]||(e[0]=Object(c["U"])((function(){return o.active&&o.active.apply(o,arguments)}),["prevent"]))},w),Object(c["h"])("div",A,[Object(c["h"])("a",{href:"#",onClick:e[1]||(e[1]=Object(c["U"])((function(){return o.logout&&o.logout.apply(o,arguments)}),["prevent"])),class:"menu-item material-icons",title:"登出"},"logout"),M])])}var H={methods:{logout:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","logout");this.$http.post(e).then((function(e){e.data.success&&t.$router.push("/login")}))},active:function(){document.getElementById("circularMenu").classList.toggle("active")}}};H.render=T;var N=H,_={components:{Navbar:$,ToastMessages:i["a"],FixedTool:N},provide:function(){return{emitter:s["a"]}},created:function(){var t=this,e=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization="".concat(e);var a="".concat("https://vue3-course-api.hexschool.io/","api/user/check");this.$http.post(a).then((function(e){e.data.success||t.$router.push("/login")}))}};_.render=o;e["default"]=_}}]);
//# sourceMappingURL=chunk-2d0c84d4.761d5a73.js.map