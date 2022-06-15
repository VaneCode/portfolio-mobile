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
    projectID: 0,
    name: 'Project 1',
    featuredImage: 'images/project_1.jpg',
    technologies: ['HTML/CSS', 'Ruby on rails', 'RubyJavaScript'],
    linkLiveVersion: 'www.google.com',
    linkSource: 'www.github.com'
  },
  {
    projectID: 1,
    name: 'Project 2',
    featuredImage: 'images/project_2.jpg',
    technologies: ['HTML/CSS', 'Ruby on rails', 'RubyJavaScript'],
    linkLiveVersion: 'www.google.com',
    linkSource: 'www.github.com'
  },
  {
    projectID: 2,
    name: 'Project 3',
    featuredImage: 'images/project_3.jpg',
    technologies: ['HTML/CSS', 'Ruby on rails', 'RubyJavaScript'],
    linkLiveVersion: 'www.google.com',
    linkSource: 'www.github.com'
  },
  {
    projectID: 3,
    name: 'Project 4',
    featuredImage: 'images/project_4.jpg',
    technologies: ['HTML/CSS', 'Ruby on rails', 'RubyJavaScript'],
    linkLiveVersion: 'www.google.com',
    linkSource: 'www.github.com'
  },
  {
    projectID: 4,
    name: 'Project 5',
    featuredImage: 'images/project_5.png',
    technologies: ['HTML/CSS', 'Ruby on rails', 'RubyJavaScript'],
    linkLiveVersion: 'www.google.com',
    linkSource: 'www.github.com'
  },
  {
    projectID: 5,
    name: 'Project 6',
    featuredImage: 'images/project_6.jpg',
    technologies: ['HTML/CSS', 'Ruby on rails', 'RubyJavaScript'],
    linkLiveVersion: 'www.google.com',
    linkSource: 'www.github.com'
  },
];

//Generate works section dinamically
const dinamicProjects = document.querySelector('#dinamicProject');
projects.forEach((project, index) => {
  //Div projects
  let divProject = document.createElement('div');
  divProject.setAttribute("class", "container-work");
  //Div project image
  let divProjectImage = document.createElement('div');
  divProjectImage.setAttribute("class", "img-work");
  divProjectImage.style.backgroundImage(project.featuredImage);
  divProject.appendChild(divProjectImage);
   //Div project name
   let divProjectName = document.createElement('div');
   let projectName = document.createElement('h2');
   let projectNameText = document.createTextNode(project.name);
   projectName.appendChild(projectNameText);
   divProject.appendChild(projectName);
  //See project button
  let btnSeeProject = document.createElement('button');
  let btnText = document.createTextNode('See project');
  btnSeeProject.setAttribute("class", "buttons neonText2");
  btnSeeProject.setAttribute("id", project.projectID);
  btnSeeProject.appendChild(btnText);
  divProject.appendChild(btnSeeProject);
  //Technologis ul
  let techUl = document.createElement('ul');
  techUl.setAttribute("class", "skillsused");
  let techs = project.technologies;
  techs.forEach((tech) => {
    let liTech = document.createElement('li');
    let liText = document.createTextNode(tech);
    liTech.appendChild(liText);
    techUl.appendChild(liTech);
    divProject.appendChild(techUl);
  });

  //Add div to dinamicProjects
  dinamicProjects.appendChild(divProject);
});

