import "./styles.css";
import loadHome from "./home.js"
loadHome();



const navBtnClick = document.querySelector('.nav-bar');

navBtnClick.addEventListener('click',function(event){

    if(event.target.closest('#home')){
        loadHome();
    }

    if(event.target.closest('#menu')){
        alert("menu clicked");
    }

    if(event.target.closest('#contact')){
        alert("contact clicked");
    }
});
