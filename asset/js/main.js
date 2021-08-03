var menuIcon = document.querySelector(".menu-icon") ;
var sidebar = document.querySelector(".sidebar") ;
var container = document.querySelector(".container");
var sider = document.querySelector(".sider-bar");
menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
    sider.classList.toggle("hide-side");
};
// 
var hideDes = document.querySelector(".hide-des");
var des = document.querySelector(".des");
hideDes.onclick = function() {
    des.classList.toggle("on-des");
};
//
