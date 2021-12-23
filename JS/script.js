const navOverlay = document.querySelector('.nav-overlay');
const navHumburger = document.querySelector('.nav-humburger');
const xIcon = document.querySelector('.xicon-image');
const overlayNav = document.querySelectorAll('.overlay-link');

function displayOn() {
  navOverlay.classList.remove('off-display');
  document.body.classList.add('scroll');
}

function displayOff() {
  navOverlay.classList.add('off-display');
  document.body.classList.remove('scroll');
  for (let j = 0; j < overlayNav.length; j += 1) {
    overlayNav[j].addEventListener('click', displayOff);
  }
}

navHumburger.addEventListener('click', displayOn);
xIcon.addEventListener('click', displayOff);
overlayNav.addEventListener('click', displayOff);