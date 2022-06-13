const menuNav = document.querySelector('#menu-nav')
const menuIcon = document.querySelector('#menu-icon')


function toggleMenu() {
    menuNav.classList.toggle('active')
    menuIcon.classList.toggle('active')
}

function closeMenu(){
    menuNav.classList.remove('active')
}
