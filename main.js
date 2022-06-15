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
    projectID: 1,
    name: 'Project 1',
    featuredImage: 'images/project_1.jpg',
    technologies: ['HTML/CSS', 'Ruby on rails', 'RubyJavaScript'],
    linkLiveVersion: 'www.google.com',
    linkSource: 'www.github.com'
  },
  {
    projectID: 2,
    name: 'Project 2',
    featuredImage: 'images/project_2.jpg',
    technologies: ['HTML/CSS', 'Ruby on rails', 'RubyJavaScript'],
    linkLiveVersion: 'www.google.com',
    linkSource: 'www.github.com'
  },
  {
    projectID: 3,
    name: 'Project 3',
    featuredImage: 'images/project_3.jpg',
    technologies: ['HTML/CSS', 'Ruby on rails', 'RubyJavaScript'],
    linkLiveVersion: 'www.google.com',
    linkSource: 'www.github.com'
  },
  {
    projectID: 4,
    name: 'Project 4',
    featuredImage: 'images/project_4.jpg',
    technologies: ['HTML/CSS', 'Ruby on rails', 'RubyJavaScript'],
    linkLiveVersion: 'www.google.com',
    linkSource: 'www.github.com'
  },
  {
    projectID: 5,
    name: 'Project 5',
    featuredImage: 'images/project_5.png',
    technologies: ['HTML/CSS', 'Ruby on rails', 'RubyJavaScript'],
    linkLiveVersion: 'www.google.com',
    linkSource: 'www.github.com'
  },
  {
    projectID: 6,
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
  divProject.setAttribute('id',`project${project.projectID}`);
  //Div project image
  let divProjectImage = document.createElement('div');
  let classImg ="img-work img-work-source";
  let imgNumber = project.projectID;
  classImg=classImg.concat(imgNumber);
  console.log(classImg);
  divProjectImage.setAttribute("class", classImg);
  divProject.appendChild(divProjectImage);
   //Div project name
   let divProjectName = document.createElement('div');
   if(project.projectID==1 || project.projectID==6){
    divProjectName.setAttribute('class','div-title flex-work-title');
   }else{
    divProjectName.setAttribute('class','div-title flex-work-title title-p2');
   }
   let projectName = document.createElement('h3');
   projectName.setAttribute('class','text-titleH3');
   let projectNameText = document.createTextNode(project.name);
   projectName.appendChild(projectNameText);
   divProjectName.appendChild(projectName);
   divProject.appendChild(divProjectName)
    //Div for flex technologies
    let divFlexTech = document.createElement('div');
    divFlexTech.setAttribute('class', 'flex-ul-work');
     //Div UL technologies
     let divUlTech = document.createElement('div');
     divUlTech.setAttribute('class', "ul-work-item");
     divFlexTech.appendChild(divUlTech);
      //Technologis ul
      let techUl = document.createElement('ul');
      techUl.setAttribute("class", "ul-style");
      let techs = project.technologies;
      techs.forEach((tech) => {
      let liTech = document.createElement('li');
      liTech.setAttribute('class', "li-style")
      let liText = document.createTextNode(tech);
      liTech.appendChild(liText);
      techUl.appendChild(liTech);
      divUlTech.appendChild(techUl);
      divProject.appendChild(divFlexTech);
      })
       //Div for buttoms (project)
       let divBtnProject = document.createElement('div');
       let btnProject = document.createElement('button');
       btnProject.setAttribute('type', "button");
       btnProject.setAttribute('class', "button-work");
       btnProject.setAttribute('id',project.projectID);
       let textbtnProject = document.createTextNode('See this project');
       let svgIcon = document.createElement('svg');
       svgIcon.setAttribute('class', "arrow_icon flex-button-icon");
       btnProject.appendChild(textbtnProject);
       btnProject.appendChild(svgIcon);
       divBtnProject.appendChild(btnProject);
       divProject.appendChild(divBtnProject);
        //All divs inside of the Card div
        dinamicProjects.appendChild(divProject)
  });

