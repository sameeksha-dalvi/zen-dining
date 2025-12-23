import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
loadHome();



const navBtnClick = document.querySelector('.nav-bar');
const navButtons = navBtnClick.querySelectorAll('button');

navBtnClick.addEventListener('click',function(event){

     navButtons.forEach(btn => btn.classList.remove('btn-active'));

    if(event.target.closest('#home')){
        event.target.classList.add('btn-active');
        loadHome();
        
    }

    if(event.target.closest('#menu')){
        event.target.classList.add('btn-active');
        loadMenu();
    }

    if(event.target.closest('#contact')){
        event.target.classList.add('btn-active');
        alert("contact clicked");
    }
});
