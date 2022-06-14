const menuNav = document.querySelector('#menu-nav');
const menuIcon = document.querySelector('#menu-icon');
const menuOption = document.getElementsByClassName('menu-option');

function openMenu() {
  menuNav.classList.toggle('active');
  menuIcon.classList.toggle('active');
}

function closeMenu() {
  menuNav.classList.remove('active');
}

menuIcon.onclick = function () { openMenu(); };
menuOption.onclick = function () { closeMenu(); };