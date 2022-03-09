import { works, speakers } from './data.js';

for (let i = 0; i < works.length; i += 1) {
  const program = document.createElement('div');
  program.classList.add('program');
  program.classList.add(`project${i + 1}`);

  program.innerHTML = `
 
 <div class="div"><img src="${works[i].image}" alt="Image" class="image" width="50px" height="50px"></div>
 <div class="div"><h3 class="program-title">${works[i].title}</h3></div>
 <div class="div"><p>${works[i].paragraph}</p></div>
 
 `;
  document.querySelector('.main-program').appendChild(program);
}

for (let j = 0; j < speakers.length; j += 1) {
  const participants = document.createElement('div');
  participants.classList.add('participant');
  participants.classList.add(`speaker${j + 1}`);

  participants.innerHTML = `
 <img src="${speakers[j].image}" alt="Image"class="speak">
<div class="Speake"> <h2 class="participe">${speakers[j].name}</h2>
 <h5>${speakers[j].resume}</h5>
 <div class="line"><hr></div>
 <article>${speakers[j].article}</article></div>
 
 `;
  document.querySelector('.features').appendChild(participants);
}

const html = document.getElementsByTagName('html')[0];
const showBtn = document.querySelector('.show-menu-btn');
const closeBtn = document.querySelector('.close-menu-btn');
const navMenu = document.querySelector('.second-navbar');
const navLinks = document.querySelectorAll('.second-navbar li');

function showMenu() {
  navMenu.classList.add('open');
  navMenu.classList.remove('hide');
  setTimeout(() => {
    closeBtn.style.display = 'block';
  }, 500);
  html.style.overflow = 'hidden';
}

function closeMenu() {
  navMenu.classList.remove('open');
  navMenu.classList.add('hide');
  closeBtn.style.display = 'none';
  html.style.overflow = 'auto';
}

function directMenu() {
  navMenu.classList.remove('open');
  closeBtn.style.display = 'none';
  html.style.overflow = 'auto';
}

navLinks.forEach((link) => {
  link.addEventListener('click', directMenu);
});

showBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click', closeMenu);

const teamList = document.querySelectorAll('#team .features .participant');
const moreBtn = document.querySelector('#team button');
const btnSpan = document.querySelector('#team button span');
const btnIcon = document.querySelector('#team button i');

let state = true;

function displayMore() {
  if (!state) {
    teamList.forEach((team) => {
      team.style.display = 'flex';
    });
    btnSpan.textContent = 'LESS';
    btnIcon.classList.remove('fa-solid', 'fa-circle-chevron-down');
    btnIcon.classList.add('fa-solid', 'fa-circle-chevron-up');

    state = true;
  } else {
    teamList.forEach((team) => {
      team.style.display = 'none';
    });
    teamList[0].style.display = 'flex';
    teamList[1].style.display = 'flex';

    btnSpan.textContent = 'MORE';
    btnIcon.classList.remove('fa-solid', 'fa-circle-chevron-up');
    btnIcon.classList.add('fa-solid', 'fa-circle-chevron-down');
    state = false;
  }
}

moreBtn.addEventListener('click', displayMore);