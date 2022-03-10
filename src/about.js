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
  }, 1000);
  html.style.overflow = 'hidden';
}

function closeMenu() {
  navMenu.classList.remove('open');
  navMenu.classList.add('hide');
  setTimeout(() => {
    closeBtn.style.display = 'none';
  }, 1000);
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

let state = false;

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