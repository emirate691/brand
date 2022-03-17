const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

var navbarBtn = document.getElementById("#navbar-btn");
function  showBtn() {
    navbarBtn.style.right ="0";
    
}

function  hideBtn() {

    navbarBtn.style.right ="-200px";
    
}