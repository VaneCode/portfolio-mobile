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
    name: 'Project 1',
    featuredImage: './images/project_1.jpg',
    technologies: ['HTML/CSS', 'Ruby on rails', 'JavaScript'],
    descriptionP1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
    descriptionP2: 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
      + 'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    linkLiveVersion: 'www.google.com',
    linkSource: 'www.github.com',
  },
  {
    projectID: 2,
    name: 'Project 2',
    featuredImage: 'images/project_2.jpg',
    technologies: ['HTML/CSS', 'Ruby on rails', 'JavaScript'],
    descriptionP1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
    descriptionP2: 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
      + 'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    linkLiveVersion: 'www.google.com',
    linkSource: 'www.github.com',
  },
  {
    projectID: 3,
    name: 'Project 3',
    featuredImage: 'images/project_3.jpg',
    technologies: ['HTML/CSS', 'Ruby on rails', 'JavaScript'],
    descriptionP1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
    descriptionP2: 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
      + 'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    linkLiveVersion: 'www.google.com',
    linkSource: 'www.github.com',
  },
  {
    projectID: 4,
    name: 'Project 4',
    featuredImage: 'images/project_4.jpg',
    technologies: ['HTML/CSS', 'Ruby on rails', 'JavaScript'],
    descriptionP1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
    descriptionP2: 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
      + 'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    linkLiveVersion: 'www.google.com',
    linkSource: 'www.github.com',
  },
  {
    projectID: 5,
    name: 'Project 5',
    featuredImage: 'images/project_5.png',
    technologies: ['HTML/CSS', 'Ruby on rails', 'JavaScript'],
    descriptionP1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
    descriptionP2: 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
      + 'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    linkLiveVersion: 'www.google.com',
    linkSource: 'www.github.com',
  },
  {
    projectID: 6,
    name: 'Project 6',
    featuredImage: 'images/project_6.jpg',
    technologies: ['HTML/CSS', 'Ruby on rails', 'JavaScript'],
    descriptionP1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
    descriptionP2: 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
      + 'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    linkLiveVersion: 'www.google.com',
    linkSource: 'www.github.com',
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
  btnProject.setAttribute('id', project.projectID);
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
    // liTech.setAttribute('class', "li-style")
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
  projectBtnCointaner1.appendChild(seeLiveBtn);
  // Project see source button
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
  projectBtnCointaner1.appendChild(seeSourceBtn);
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
  if (e.target.classList.contains('button-work')) {
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
