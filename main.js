const menuNav = document.querySelector('#menu-nav');
const menuIcon = document.querySelector('#menu-icon');
const menuOption = document.getElementsByClassName('menu-option');
let projectIdModal = 1;

function openMenu() {
  menuNav.classList.toggle('active');
  menuIcon.classList.toggle('active');
}

function closeMenu() {
  menuNav.classList.remove('active');
}

menuIcon.onclick = function () { openMenu(); };
menuOption.onclick = function () { closeMenu(); };

// Projects array objects
const projects = [
  {
    projectID: 1,
    name: 'Money moves',
    featuredImage: './images/project_1.jpg',
    technologies: ['Tailwind', 'Ruby on Rails', 'PostgreSQL'],
    descriptionP1: 'This is a mobile web application, which allows users to control their budgets.'
      + 'The user can divide the budget into different categories. ',
    descriptionP2: 'And insert the expenses that have been made in the categories.'
      + ' This project was built with Ruby on Rails, Postgresql, and Tailwind.',
    linkLiveVersion: 'https://money-moves.onrender.com/',
    linkSource: 'https://github.com/VaneCode/money_moves',
  },
  {
    projectID: 2,
    name: 'Space travelers',
    featuredImage: 'images/project_2.jpg',
    technologies: ['Bootstrap', 'React', 'Axios'],
    descriptionP1: 'Space travelers is an exciting project for space adventurers.'
      + 'This application allows them to reserve rockets, and also join space missions.',
    descriptionP2: 'Users can go to their profiles to see their reserved rockets and missions.'
      + 'As well as cancel them.',
    linkLiveVersion: 'https://poetic-truffle-186148.netlify.app/',
    linkSource: 'https://github.com/VaneCode/SpaceTravelers',
  },
  {
    projectID: 3,
    name: 'Bookstore',
    featuredImage: 'images/project_3.jpg',
    technologies: ['HTML5/CSS3', 'React', 'MUI'],
    descriptionP1: 'The perfect website for reading lovers, it shows information about a list of books fetched from an API.'
      + 'With this application, the user can add a book, and delete a select book.',
    descriptionP2: 'The app also shows the reading progress by book.'
      + 'This project was created with React, HTML5, and CSS3.',
    linkLiveVersion: 'https://idyllic-starship-595a45.netlify.app/',
    linkSource: 'https://github.com/VaneCode/Bookstore',
  },
  {
    projectID: 4,
    name: 'To do list',
    featuredImage: 'images/project_4.jpg',
    technologies: ['HTML5/SASS', 'JavaScript', 'Luxon'],
    descriptionP1: 'This is a web tool that allows the user to organize the task for the day.'
      + 'Users can add a new task, check a task as completed.',
    descriptionP2: 'Also, delete all completed tasks and clear the list.'
      + 'his project was created usign JavaScript, HTML5 and SASS.',
    linkLiveVersion: 'https://github.com/VaneCode/to-do-list',
    linkSource: 'https://vanecode.github.io/to-do-list/dist/',
  },
  {
    projectID: 5,
    name: 'Leaderboard',
    featuredImage: 'images/project_5.jpg',
    technologies: ['HTML5', 'Sass', 'JavaScript'],
    descriptionP1: 'This is a project that shows the highest scores in the dashboard.'
      + 'and allows the user to enter their own scores.',
    descriptionP2: 'So with this project, you can keep track of any game that you want.'
      + 'This project was building using Webpack, Sass, JavaScript and HTML5.',
    linkLiveVersion: 'https://tubular-vacherin-65e4cd.netlify.app/',
    linkSource: 'https://github.com/VaneCode/leaderboard',
  },
  {
    projectID: 6,
    name: 'Art gallery',
    featuredImage: 'images/project_6.jpg',
    technologies: ['HTML5', 'Sass', 'JavaScript'],
    descriptionP1: 'This is a project that contains a web page of the gallery Evocative Artworks.'
      + 'Its information and, featured exhibitions.',
    descriptionP2: 'This application was creating using the approach mobile first.'
      + 'This project was built using JavaScript, HTML5 and Sass.',
    linkLiveVersion: 'https://vanecode.github.io/art-gallery/',
    linkSource: 'https://github.com/VaneCode/art-gallery',
  },
];

// Generate works section dinamically
const dinamicProjects = document.querySelector('#dinamicProject');
projects.forEach((project) => {
  // Div projects
  const divProject = document.createElement('div');
  divProject.setAttribute('class', 'container-work');
  divProject.setAttribute('id', `project${project.projectID}`);
  // Div project image
  const divProjectImage = document.createElement('div');
  let classImg = 'img-work img-work-source';
  const imgNumber = project.projectID;
  classImg = classImg.concat(imgNumber);
  divProjectImage.setAttribute('class', classImg);
  divProjectImage.setAttribute('id', project.projectID);
  divProject.appendChild(divProjectImage);
  // Div project name
  const divProjectName = document.createElement('div');
  if (project.projectID === 1 || project.projectID === 6) {
    divProjectName.setAttribute('class', 'div-title flex-work-title');
  } else {
    divProjectName.setAttribute('class', 'div-title flex-work-title title-p2');
  }
  const projectName = document.createElement('h3');
  projectName.setAttribute('class', 'text-titleH3');
  const projectNameText = document.createTextNode(project.name);
  projectName.appendChild(projectNameText);
  divProjectName.appendChild(projectName);
  divProject.appendChild(divProjectName);
  // Div for description
  const divProjectDescription = document.createElement('div');
  divProjectDescription.setAttribute('class','flex-work-description');
  const projectDescription = document.createElement('p');
  const desciption = project.descriptionP1.concat( ).concat(project.descriptionP2);
  const projectDescriptionText = document.createTextNode(desciption);
  projectDescription.appendChild(projectDescriptionText);
  divProjectDescription.appendChild(projectDescription);
  divProject.appendChild(divProjectDescription);
  // Div for flex technologies
  const divFlexTech = document.createElement('div');
  if (project.projectID === 1 || project.projectID === 6) {
    divFlexTech.setAttribute('class', 'flex-ul-work');
  } else {
    divFlexTech.setAttribute('class', ' flex-ul-work tech-p2');
  }
  // Div UL technologies
  const divUlTech = document.createElement('div');
  divUlTech.setAttribute('class', 'ul-work-item');
  divFlexTech.appendChild(divUlTech);
  // Technologis ul
  const techUl = document.createElement('ul');
  techUl.setAttribute('class', 'ul-style');
  const techs = project.technologies;
  techs.forEach((tech) => {
    const liTech = document.createElement('li');
    liTech.setAttribute('class', 'li-style');
    const liText = document.createTextNode(tech);
    liTech.appendChild(liText);
    techUl.appendChild(liTech);
    divUlTech.appendChild(techUl);
    divProject.appendChild(divFlexTech);
  });
  // Div for buttoms (project)
  const divBtnProject = document.createElement('div');
  if (project.projectID !== 1 && project.projectID !== 6) {
    divBtnProject.setAttribute('class', 'button-p2');
  }
  const btnProject = document.createElement('button');
  btnProject.setAttribute('type', 'button');
  btnProject.setAttribute('class', 'button-work');
  //btnProject.setAttribute('id', project.projectID);
  const textbtnProject = document.createTextNode(' See this project ');
  const svgIcon = document.createElement('svg');
  svgIcon.setAttribute('class', 'arrow_icon flex-button-icon');
  btnProject.appendChild(textbtnProject);
  btnProject.appendChild(svgIcon);
  divBtnProject.appendChild(btnProject);
  divProject.appendChild(divBtnProject);
  // All divs inside of the Card div
  dinamicProjects.appendChild(divProject);
});

// Modals
const projectModalContainer = document.querySelector('#project-modal-container');
const projectDetailsModal = document.querySelector('#project-details-modal');

// function to create project's detail modal content
function createModalProjectContent(id) {
  projectIdModal = id;
  // Search the project with the same id in the projects array
  const project = projects.find((project) => Number(project.projectID) === Number(id));
  // Project div headar
  const header = document.createElement('div');
  header.setAttribute('class', 'modal-header');
  // Close button
  const closeBtn = document.createElement('button');
  const textCloseBtn = document.createTextNode('X');
  closeBtn.appendChild(textCloseBtn);
  closeBtn.setAttribute('id', 'close-button');
  closeBtn.setAttribute('class', 'close-modal-button');
  header.appendChild(closeBtn);
  // Project name
  const projectNameHeader = document.createElement('h1');
  const textProjectName = document.createTextNode(project.name);
  projectNameHeader.appendChild(textProjectName);
  projectNameHeader.setAttribute('class', 'text-title text-titleModal');
  header.appendChild(projectNameHeader);
  projectDetailsModal.appendChild(header);
  // Project technologies
  // Technologis ul
  const techUl = document.createElement('ul');
  techUl.setAttribute('class', 'ul-modal');
  const techs = project.technologies;
  // Technologies li
  techs.forEach((tech) => {
    const liTech = document.createElement('li');
    const liText = document.createTextNode(tech);
    liTech.appendChild(liText);
    techUl.appendChild(liTech);
  });
  projectDetailsModal.appendChild(techUl);
  // Project div image
  const divProjectImage = document.createElement('div');
  divProjectImage.setAttribute('class', 'img-work-modal');
  const projectImg = document.createElement('img');
  projectImg.setAttribute('src', project.featuredImage);
  projectImg.setAttribute('class', 'img-modal');
  divProjectImage.appendChild(projectImg);
  projectDetailsModal.appendChild(divProjectImage);
  // Project description div
  const projectDespcriptionDiv = document.createElement('div');
  projectDespcriptionDiv.setAttribute('class', 'description-project');
  const projectDespcriptionP1 = document.createElement('p');
  const textProjectDescription1 = document.createTextNode(project.descriptionP1);
  projectDespcriptionP1.appendChild(textProjectDescription1);
  projectDespcriptionP1.setAttribute('class', 'text-p-modal');
  projectDespcriptionDiv.appendChild(projectDespcriptionP1);
  const projectDespcriptionP2 = document.createElement('p');
  const textProjectDescription2 = document.createTextNode(project.descriptionP2);
  projectDespcriptionP2.appendChild(textProjectDescription2);
  projectDespcriptionP2.setAttribute('class', 'text-p-modal');
  projectDespcriptionDiv.appendChild(projectDespcriptionP2);
  projectDetailsModal.appendChild(projectDespcriptionDiv);
  // Project div see live button and see source button
  const projectBtnCointaner1 = document.createElement('div');
  projectBtnCointaner1.setAttribute('class', 'div-btn-modal1');
  projectBtnCointaner1.setAttribute('id', 'btn-container-2');
  projectDespcriptionDiv.appendChild(projectBtnCointaner1);
  // Project see live button
  const seeLiveAnchor = document.createElement('a');
  seeLiveAnchor.setAttribute('href', project.linkLiveVersion);
  seeLiveAnchor.setAttribute('target', '_blank');
  seeLiveAnchor.setAttribute('rel', 'noopener');
  seeLiveAnchor.setAttribute('style', 'text-decoration:none');
  const seeLiveBtn = document.createElement('button');
  seeLiveBtn.setAttribute('class', 'modal-buttons');
  const textSeeLiveBtn = document.createTextNode('See live');
  seeLiveBtn.appendChild(textSeeLiveBtn);
  const textSeeLiveBtnDiv = document.createElement('div');
  textSeeLiveBtnDiv.setAttribute('class', 'text-modal-bottons');
  textSeeLiveBtnDiv.appendChild(textSeeLiveBtn);
  seeLiveBtn.appendChild(textSeeLiveBtnDiv);
  const iconSeeLiveBtn = document.createElement('div');
  iconSeeLiveBtn.setAttribute('class', 'icon-see-live icon-btn-modal');
  iconSeeLiveBtn.setAttribute('id', 'icon-see-live-div');
  seeLiveBtn.appendChild(iconSeeLiveBtn);
  seeLiveAnchor.appendChild(seeLiveBtn);
  projectBtnCointaner1.appendChild(seeLiveAnchor);
  // Project see source button
  const seeSourceAnchor = document.createElement('a');
  seeSourceAnchor.setAttribute('href', project.linkSource);
  seeSourceAnchor.setAttribute('target', '_blank');
  seeSourceAnchor.setAttribute('rel', 'noopener');
  seeSourceAnchor.setAttribute('style', 'text-decoration:none');
  const seeSourceBtn = document.createElement('button');
  seeSourceBtn.setAttribute('class', 'modal-buttons');
  const textSeeSourceBtn = document.createTextNode('See source');
  const textSeeSourceBtnDiv = document.createElement('div');
  textSeeSourceBtnDiv.setAttribute('class', 'text-modal-bottons');
  textSeeSourceBtnDiv.appendChild(textSeeSourceBtn);
  seeSourceBtn.appendChild(textSeeSourceBtnDiv);
  const iconSeeSourceBtn = document.createElement('div');
  iconSeeSourceBtn.setAttribute('class', 'icon-see-source icon-btn-modal');
  iconSeeSourceBtn.setAttribute('id', 'icon-see-source-div');
  seeSourceBtn.appendChild(iconSeeSourceBtn);
  seeSourceAnchor.appendChild(seeSourceBtn);
  projectBtnCointaner1.appendChild(seeSourceAnchor);
  projectDetailsModal.appendChild(projectBtnCointaner1);
  // Project div previous button and next button
  const projectBtnCointaner2 = document.createElement('div');
  projectBtnCointaner2.setAttribute('class', 'div-btn-modal2');
  projectBtnCointaner2.setAttribute('id', 'btn-container-2');
  // Project previous project button
  const prevProjectBtn = document.createElement('button');
  prevProjectBtn.setAttribute('class', 'modal-buttons-prev');
  const iconPrevProject = document.createElement('div');
  iconPrevProject.setAttribute('class', 'icon-previous icon-btn-modal');
  prevProjectBtn.appendChild(iconPrevProject);
  const textPrevProject = document.createTextNode('Previous');
  const textPrevProjectDiv = document.createElement('div');
  textPrevProjectDiv.setAttribute('class', 'text-modal-bottons');
  textPrevProjectDiv.appendChild(textPrevProject);
  prevProjectBtn.appendChild(textPrevProjectDiv);
  prevProjectBtn.setAttribute('id', 'prev-btn');
  projectBtnCointaner2.appendChild(prevProjectBtn);
  // Project next project button
  const nextProjectBtn = document.createElement('button');
  nextProjectBtn.setAttribute('class', 'modal-buttons-prev');
  const textNextProject = document.createTextNode('Next');
  const textNextProjectDiv = document.createElement('div');
  textNextProjectDiv.setAttribute('class', 'text-modal-bottons');
  textNextProjectDiv.appendChild(textNextProject);
  nextProjectBtn.appendChild(textNextProjectDiv);
  const iconNextProject = document.createElement('div');
  iconNextProject.setAttribute('class', 'icon-next icon-btn-modal');
  nextProjectBtn.appendChild(iconNextProject);
  nextProjectBtn.setAttribute('id', 'next-btn');
  projectBtnCointaner2.appendChild(nextProjectBtn);
  projectDetailsModal.appendChild(projectBtnCointaner2);
}

// function to clean modals
function cleanModal(ID) {
  const div = document.getElementById(ID);
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

// function to open modal's project
function openModal() {
  projectModalContainer.classList.add('showUp');
  window.onclick = function (event) {
    if (event.target === projectModalContainer) {
      projectModalContainer.classList.remove('showUp');
    }
  };
}

dinamicProjects.addEventListener('click', (e) => {
  const elementId = e.target.id;
  // Only for button See project
  if (e.target.classList.contains('img-work')) {
    cleanModal(projectDetailsModal.id);
    createModalProjectContent(elementId);
    openModal();
  }
});

projectDetailsModal.addEventListener('click', (e) => {
  const elementId = e.target.id;
  if (elementId === 'close-button') {
    projectModalContainer.classList.remove('showUp');
  } else if (elementId === 'prev-btn') {
    if (Number(projectIdModal) === Number(1)) {
      projectIdModal = 6;
    } else {
      projectIdModal -= 1;
    }
    cleanModal(projectDetailsModal.id);
    createModalProjectContent(projectIdModal);
  } else if (elementId === 'next-btn') {
    if (Number(projectIdModal) === Number(6)) {
      projectIdModal = 1;
    } else {
      projectIdModal += 1;
    }
    cleanModal(projectDetailsModal.id);
    createModalProjectContent(projectIdModal);
  }
});

// -----------------Form validation------------------//
const contactFrm = document.getElementById('contactFrm');
const nameFrm = document.querySelector('#name');
const emailFrm = document.querySelector('#email');
const messageFrm = document.querySelector('#message');

function validationFrm(event) {
  const email = document.getElementById('email');
  const error = document.getElementById('error-email');

  if (email !== email.toLowerCase()) {
    error.textContent = 'Please enter your email in lower case.';
    event.preventDefault();
  } else {
    error.textContent = '';
  }
}

contactFrm.addEventListener('submit', validationFrm);

// -----------------Local storage------------------//
const contactFrmData = {
  name: '',
  email: '',
  message: '',
};

// Function to validate if local storage is available
function storageAvailable(type) {
  try {
    const storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22
      // Firefox
      || e.code === 1014
      // test name field too, because code might not be present
      // everything except Firefox
      || e.name === 'QuotaExceededError'
      // Firefox
      || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      // acknowledge QuotaExceededError only if there's something already stored
      && localStorage.length !== 0;
  }
}

// Function to save data from local storage in contact frm
function setFrmData() {
  const newDataFrm = JSON.parse(localStorage.getItem('contactFrmData'));

  nameFrm.value = newDataFrm.name;
  emailFrm.value = newDataFrm.email;
  messageFrm.value = newDataFrm.message;
}

// Function to save data from contact form in local storage
function saveFrmData() {
  contactFrmData.name = nameFrm.value;
  contactFrmData.email = emailFrm.value;
  contactFrmData.message = messageFrm.value;

  const dataStr = JSON.stringify(contactFrmData);
  localStorage.setItem('contactFrmData', dataStr);

  setFrmData();
}

if (storageAvailable('localStorage')) {
  if (!localStorage.getItem('contactFrmData')) {
    saveFrmData();
  } else {
    setFrmData();
  }
} else {
  // Too bad, no localStorage for us
}

nameFrm.onchange = saveFrmData;
emailFrm.onchange = saveFrmData;
messageFrm.onchange = saveFrmData;
