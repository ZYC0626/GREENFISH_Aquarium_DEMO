(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-350b5ac8"],{"159d":function(t,e,c){"use strict";c.r(e);c("b0c0");var a=c("7a23"),l=Object(a["h"])("div",{class:"loader-wrapper"},[Object(a["h"])("span",{class:"loader"})],-1),n=Object(a["h"])("div",{class:"mt-4"},[Object(a["h"])("h3",{class:"m-0 d-flex align-items-center"},[Object(a["h"])("span",{class:"material-icons me-2 md-24"}," rule "),Object(a["j"])("訂單列表")])],-1),r=Object(a["h"])("hr",null,null,-1),d={class:"table-responsive-xl mb-3"},s={class:"table mt-4 text-nowrap"},i=Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("th",{width:"50"},"明細"),Object(a["h"])("th",null,"購買時間"),Object(a["h"])("th",{class:"d-none d-md-table-cell"},"Email"),Object(a["h"])("th",{class:"d-md-none d-table-cell"},"姓名"),Object(a["h"])("th",{class:"d-none d-md-table-cell"},"購買款項"),Object(a["h"])("th",null,"應付金額"),Object(a["h"])("th",null,"是否付款"),Object(a["h"])("th",{class:"text-end"},"刪除")])],-1),b=["onClick"],o=Object(a["h"])("i",{class:"bi bi-file-text"},null,-1),O=[o],u={class:"d-none d-md-table-cell"},h=["textContent"],j={class:"d-md-none d-table-cell"},p=["textContent"],g={class:"d-none d-md-table-cell"},m={class:"list-unstyled"},f={class:"text-right"},v={class:"form-check form-switch"},y=["id","onUpdate:modelValue","onChange"],k=["for"],x={key:0},w={key:1},A={class:"text-end"},M=["onClick"],_=Object(a["h"])("i",{class:"bi bi-x-lg"},null,-1),K=[_];function P(t,e,c,o,_,P){var C=Object(a["H"])("Loading"),$=Object(a["H"])("OrderModal"),L=Object(a["H"])("DelModal"),U=Object(a["H"])("Pagination");return Object(a["A"])(),Object(a["g"])(a["a"],null,[Object(a["k"])(C,{active:_.isLoading},{default:Object(a["S"])((function(){return[l]})),_:1},8,["active"]),n,r,Object(a["h"])("div",d,[Object(a["h"])("table",s,[i,Object(a["h"])("tbody",null,[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(_.orders,(function(e,c){return Object(a["A"])(),Object(a["g"])(a["a"],{key:c},[_.orders.length?(Object(a["A"])(),Object(a["g"])("tr",{key:0,class:Object(a["r"])({"text-secondary":!e.is_paid})},[Object(a["h"])("td",null,[Object(a["h"])("button",{class:"btn btn-outline-secondary border-0 btn-sm",onClick:function(t){return P.openModal(!1,e)}},O,8,b)]),Object(a["h"])("td",null,Object(a["K"])(t.$filters.date(e.create_at)),1),Object(a["h"])("td",u,[e.user?(Object(a["A"])(),Object(a["g"])("span",{key:0,textContent:Object(a["K"])(e.user.email)},null,8,h)):Object(a["f"])("",!0)]),Object(a["h"])("td",j,[e.user?(Object(a["A"])(),Object(a["g"])("span",{key:0,textContent:Object(a["K"])(e.user.name)},null,8,p)):Object(a["f"])("",!0)]),Object(a["h"])("td",g,[Object(a["h"])("ul",m,[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(e.products,(function(t,e){return Object(a["A"])(),Object(a["g"])("li",{key:e},Object(a["K"])(t.product.title)+" 數量："+Object(a["K"])(t.qty)+" "+Object(a["K"])(t.product.unit),1)})),128))])]),Object(a["h"])("td",f,Object(a["K"])(e.total),1),Object(a["h"])("td",null,[Object(a["h"])("div",v,[Object(a["T"])(Object(a["h"])("input",{class:"form-check-input",type:"checkbox",id:"paidSwitch".concat(e.id),"onUpdate:modelValue":function(t){return e.is_paid=t},onChange:function(t){return P.updatePaid(e)}},null,40,y),[[a["N"],e.is_paid]]),Object(a["h"])("label",{class:"form-check-label",for:"paidSwitch".concat(e.id)},[e.is_paid?(Object(a["A"])(),Object(a["g"])("span",x,"已付款")):(Object(a["A"])(),Object(a["g"])("span",w,"未付款"))],8,k)])]),Object(a["h"])("td",A,[Object(a["h"])("button",{class:"btn btn-outline-danger border-0 btn-sm",onClick:function(t){return P.openDelOrderModal(e)}},K,8,M)])],2)):Object(a["f"])("",!0)],64)})),128))])])]),Object(a["k"])($,{order:_.tempOrder,ref:"orderModal",onUpdateOrder:P.updatePaid},null,8,["order","onUpdateOrder"]),Object(a["k"])(L,{item:_.tempOrder,ref:"delModal",onDelItem:P.delOrder},null,8,["item","onDelItem"]),Object(a["k"])(U,{pages:_.pagination,onEmitPages:P.getOrders},null,8,["pages","onEmitPages"])],64)}var C=c("5530"),$=(c("99af"),c("6ff1")),L={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},U={class:"modal-dialog modal-xl",role:"document"},D={class:"modal-content border-0"},F=Object(a["h"])("div",{class:"modal-header bg-primary text-white"},[Object(a["h"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(a["h"])("span",null,"訂單細節")]),Object(a["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),S={class:"modal-body"},E={class:"row"},H={class:"col-md-4"},N=Object(a["h"])("h3",null,"用戶資料",-1),z={class:"table"},q={key:0},I=Object(a["h"])("th",{style:{width:"100px"}},"姓名",-1),J=Object(a["h"])("th",null,"Email",-1),V=Object(a["h"])("th",null,"電話",-1),T=Object(a["h"])("th",null,"地址",-1),B={class:"col-md-8"},G=Object(a["h"])("h3",null,"訂單細節",-1),Q={class:"table"},R=Object(a["h"])("th",{style:{width:"100px"}},"訂單編號",-1),W=Object(a["h"])("th",null,"下單時間",-1),X=Object(a["h"])("th",null,"付款時間",-1),Y={key:0},Z={key:1},tt=Object(a["h"])("th",null,"付款狀態",-1),et={key:0,class:"text-success"},ct={key:1,class:"text-muted"},at=Object(a["h"])("th",null,"總金額",-1),lt=Object(a["h"])("h3",null,"選購商品",-1),nt={class:"table"},rt=Object(a["h"])("thead",null,[Object(a["h"])("tr")],-1),dt={class:"text-end"},st={class:"modal-footer"},it=Object(a["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function bt(t,e,c,l,n,r){return Object(a["A"])(),Object(a["g"])("div",L,[Object(a["h"])("div",U,[Object(a["h"])("div",D,[F,Object(a["h"])("div",S,[Object(a["h"])("div",E,[Object(a["h"])("div",H,[N,Object(a["h"])("table",z,[n.tempOrder.user?(Object(a["A"])(),Object(a["g"])("tbody",q,[Object(a["h"])("tr",null,[I,Object(a["h"])("td",null,Object(a["K"])(n.tempOrder.user.name),1)]),Object(a["h"])("tr",null,[J,Object(a["h"])("td",null,Object(a["K"])(n.tempOrder.user.email),1)]),Object(a["h"])("tr",null,[V,Object(a["h"])("td",null,Object(a["K"])(n.tempOrder.user.tel),1)]),Object(a["h"])("tr",null,[T,Object(a["h"])("td",null,Object(a["K"])(n.tempOrder.user.address),1)])])):Object(a["f"])("",!0)])]),Object(a["h"])("div",B,[G,Object(a["h"])("table",Q,[Object(a["h"])("tbody",null,[Object(a["h"])("tr",null,[R,Object(a["h"])("td",null,Object(a["K"])(n.tempOrder.id),1)]),Object(a["h"])("tr",null,[W,Object(a["h"])("td",null,Object(a["K"])(t.$filters.date(n.tempOrder.create_at)),1)]),Object(a["h"])("tr",null,[X,Object(a["h"])("td",null,[n.tempOrder.paid_date?(Object(a["A"])(),Object(a["g"])("span",Y,Object(a["K"])(t.$filters.date(n.tempOrder.paid_date)),1)):(Object(a["A"])(),Object(a["g"])("span",Z,"時間不正確"))])]),Object(a["h"])("tr",null,[tt,Object(a["h"])("td",null,[n.tempOrder.is_paid?(Object(a["A"])(),Object(a["g"])("strong",et,"已付款")):(Object(a["A"])(),Object(a["g"])("span",ct,"尚未付款"))])]),Object(a["h"])("tr",null,[at,Object(a["h"])("td",null,Object(a["K"])(t.$filters.currency(n.tempOrder.total)),1)])])]),lt,Object(a["h"])("table",nt,[rt,Object(a["h"])("tbody",null,[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(n.tempOrder.products,(function(e){return Object(a["A"])(),Object(a["g"])("tr",{key:e.id},[Object(a["h"])("th",null,Object(a["K"])(e.product.title),1),Object(a["h"])("td",null,Object(a["K"])(e.qty)+" / "+Object(a["K"])(e.product.unit),1),Object(a["h"])("td",dt,Object(a["K"])(t.$filters.currency(e.final_total)),1)])})),128))])])])])]),Object(a["h"])("div",st,[it,Object(a["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=function(e){return t.$emit("update-order",n.tempOrder)})}," 確認 ")])])])],512)}var ot=c("e0ae"),Ot={name:"orderModal",props:{order:{type:Object,default:function(){return{}}}},data:function(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},mixins:[ot["a"]],watch:{order:function(){this.tempOrder=this.order,this.isPaid=this.tempOrder.is_paid}}};Ot.render=bt;var ut=Ot,ht=c("1799"),jt={data:function(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},components:{Pagination:ht["a"],DelModal:$["a"],OrderModal:ut},methods:{getOrders:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.currentPage=e;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("zyc0626-api","/admin/orders?page=").concat(e);this.isLoading=!0,this.$http.get(c,this.tempProduct).then((function(e){t.orders=e.data.orders,t.pagination=e.data.pagination,t.isLoading=!1}))},openModal:function(t,e){this.tempOrder=Object(C["a"])({},e),this.isNew=!1;var c=this.$refs.orderModal;c.showModal()},openDelOrderModal:function(t){this.tempOrder=Object(C["a"])({},t);var e=this.$refs.delModal;e.showModal()},updatePaid:function(t){var e=this;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("zyc0626-api","/admin/order/").concat(t.id),a={is_paid:t.is_paid};this.$http.put(c,{data:a}).then((function(t){e.isLoading=!1,e.getOrders(e.currentPage),e.$httpMessageState(t,"更新付款狀態")}))},delOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("zyc0626-api","/admin/order/").concat(this.tempOrder.id);this.isLoading=!0,this.$http.delete(e).then((function(e){var c=t.$refs.delModal;c.hideModal(),t.getOrders(t.currentPage)}))}},created:function(){this.getOrders()}};jt.render=P;e["default"]=jt},1799:function(t,e,c){"use strict";var a=c("7a23"),l={class:"pagination pagination-lg justify-content-center"},n=Object(a["h"])("i",{class:"bi bi-chevron-left"},null,-1),r=[n],d=["onClick"],s=Object(a["h"])("i",{class:"bi bi-chevron-right"},null,-1),i=[s];function b(t,e,c,n,s,b){return Object(a["A"])(),Object(a["g"])("nav",null,[Object(a["h"])("ul",l,[Object(a["h"])("li",{class:Object(a["r"])(["page-item",{disabled:1===c.pages.current_page}])},[Object(a["h"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=Object(a["U"])((function(t){return b.updatePage(c.pages.current_page-1)}),["prevent"]))},r)],2),(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(c.pages.total_pages,(function(t){return Object(a["A"])(),Object(a["g"])("li",{class:Object(a["r"])(["page-item",{active:t===c.pages.current_page}]),key:t},[Object(a["h"])("a",{class:"page-link",href:"#",onClick:Object(a["U"])((function(e){return b.updatePage(t)}),["prevent"])},Object(a["K"])(t),9,d)],2)})),128)),Object(a["h"])("li",{class:Object(a["r"])(["page-item",{disabled:c.pages.current_page===c.pages.total_pages}])},[Object(a["h"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=Object(a["U"])((function(t){return b.updatePage(c.pages.current_page+1)}),["prevent"]))},i)],2)])])}var o={props:["pages"],methods:{updatePage:function(t){this.$emit("emit-pages",t)}}};o.render=b;e["a"]=o},b0c0:function(t,e,c){var a=c("83ab"),l=c("9bf2").f,n=Function.prototype,r=n.toString,d=/^\s*function ([^ (]*)/,s="name";a&&!(s in n)&&l(n,s,{configurable:!0,get:function(){try{return r.call(this).match(d)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-350b5ac8.ca196988.js.map