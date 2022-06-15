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

//Projects array objects
const projects = [
  {
    projectID:0,
    name: 'Project 1',
    featuredImage: 'images/project_1.jpg',
    technologies:['HTML/CSS', 'Ruby on rails', 'RubyJavaScript'],
    linkLiveVersion:'www.google.com',
    linkSource:'www.github.com'
  },
  {
    projectID:1,
    name: 'Project 2',
    featuredImage: 'images/project_2.jpg',
    technologies:['HTML/CSS', 'Ruby on rails', 'RubyJavaScript'],
    linkLiveVersion:'www.google.com',
    linkSource:'www.github.com'
  },
  {
    projectID:2,
    name: 'Project 3',
    featuredImage: 'images/project_3.jpg',
    technologies:['HTML/CSS', 'Ruby on rails', 'RubyJavaScript'],
    linkLiveVersion:'www.google.com',
    linkSource:'www.github.com'
  },
  {
    projectID:3,
    name: 'Project 4',
    featuredImage: 'images/project_4.jpg',
    technologies:['HTML/CSS', 'Ruby on rails', 'RubyJavaScript'],
    linkLiveVersion:'www.google.com',
    linkSource:'www.github.com'
  },
  {
    projectID:4,
    name: 'Project 5',
    featuredImage: 'images/project_5.png',
    technologies:['HTML/CSS', 'Ruby on rails', 'RubyJavaScript'],
    linkLiveVersion:'www.google.com',
    linkSource:'www.github.com'
  },
  {
    projectID:5,
    name: 'Project 6',
    featuredImage: 'images/project_6.jpg',
    technologies:['HTML/CSS', 'Ruby on rails', 'RubyJavaScript'],
    linkLiveVersion:'www.google.com',
    linkSource:'www.github.com'
  },
 
];

