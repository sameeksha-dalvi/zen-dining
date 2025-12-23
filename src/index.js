import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
loadHome();



const navBtnClick = document.querySelector('.nav-bar');

navBtnClick.addEventListener('click',function(event){

    if(event.target.closest('#home')){
        loadHome();
    }

    if(event.target.closest('#menu')){
        loadMenu();
    }

    if(event.target.closest('#contact')){
        alert("contact clicked");
    }
});
