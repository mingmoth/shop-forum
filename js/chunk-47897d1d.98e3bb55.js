(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47897d1d"],{"27f1":function(t,a,i){t.exports=i.p+"img/angle-left-solid.56918349.svg"},"350f":function(t,a,i){},a721:function(t,a,i){"use strict";i("350f")},d2f1:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"app-contianer"},[i("div",{staticClass:"head"},[i("Navbar")],1),i("div",{staticClass:"main"},[i("ProductDetail")],1),i("div",{staticClass:"foot"})])},s=[],c=i("d178"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detail-container"},[e("div",{staticClass:"detail-head"},[e("div",{staticClass:"detail-image"},[e("div",{staticClass:"detail-back",on:{click:function(a){return t.$router.back()}}},[e("img",{staticClass:"detail-back-img",attrs:{src:i("27f1"),alt:""}})]),e("img",{staticClass:"detail-photo",attrs:{src:t.getProduct.image,alt:""}})]),e("div",{staticClass:"detail-canvas"})]),e("div",{staticClass:"detail-body"},[e("div",{staticClass:"detail-name"},[t._v(t._s(t.getProduct.name))]),e("div",{staticClass:"detail-price"},[e("span",[t._v("$ ")]),t._v(t._s(t.getProduct.price))]),e("div",{staticClass:"detail-description"},[t._v(" "+t._s(t.getProduct.description)+" ")]),e("form",{attrs:{action:""}},[t._m(0),e("button",{staticClass:"detail-add",on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.addCart(t.getProduct.id)}}},[t._v("加入購物車")])])])])},r=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"detail-quantity"},[i("label",{attrs:{for:"quantity"}},[t._v("數量 :")]),i("input",{attrs:{type:"number",id:"quantity",name:"quantity",min:"0"}})])}],d=i("5530"),l=(i("b0c0"),i("2f62")),o=i("9690"),u=i("eae4"),v={name:"ProductDetail",mixins:[o["d"],o["b"]],computed:Object(d["a"])({},Object(l["c"])(["getProduct","getCurrentUser"])),created:function(){var t=this.$route.params.id;this.setProduct(t)},beforeRouteUpdate:function(t,a,i){var e=t.params.id;this.setProduct(e),i()},methods:{addCart:function(t){this.getCurrentUser.name?this.addCartItem(t):(u["a"].fire({title:"請先登入後再加入商品"}),this.$router.push("/signin"))}}},f=v,p=(i("a721"),i("2877")),m=Object(p["a"])(f,n,r,!1,null,"5eaa2e29",null),C=m.exports,b={name:"Product",components:{Navbar:c["a"],ProductDetail:C}},g=b,h=Object(p["a"])(g,e,s,!1,null,null,null);a["default"]=h.exports}}]);
//# sourceMappingURL=chunk-47897d1d.98e3bb55.js.map