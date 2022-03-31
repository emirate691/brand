const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})



function openForm() {
    document.getElementsById("myForm")
    .style.display ="block";
}

function  closeForm() {
    document.getElementsById("myForm")
    .style.display ="none";
}