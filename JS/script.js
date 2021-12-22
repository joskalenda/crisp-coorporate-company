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

// creat pag=e dynamically

const Html = document.getElementsByTagName('html')[0];
const Speakers = document.querySelector('.feature--container');

const projects = [
  {
    id: 'project_1',
    images: {
      img: 'assets/backgrd/member1.png',
      altText: 'member 1',
    },
    name: 'Yochai Benkler',
    heading: 'Founder and CEO of Crisp Company',
    description: 'Crisp has been an incredible and invaluable part of our team and really protected our users.'
  },
  {
    id: 'project_2',
    images: {
      img: 'assets/backgrd/member2.png',
      altText: 'member 2',
    },
    name: 'Rachid Hammas',
    heading: 'Founder and CEO of Crisp Company',
    description: 'Crisp has been an incredible and invaluable part of our team and really protected our users.'
  },
  {
    id: 'project_3',
    images: {
      img: 'assets/backgrd/member3.png',
      altText: 'member 3',
    },
    name: 'Petter Benkler',
    heading: 'Founder and CEO of Crisp Company',
    description: 'Crisp has been an incredible and invaluable part of our team and really protected our users.'
  },
  {
    id: 'project_4',
    images: {
      img: 'assets/backgrd/member4.png',
      altText: 'member 4',
    },
    name: 'Karis Yoga',
    heading: 'Founder and CEO of Crisp Company',
    description: 'Crisp has been an incredible and invaluable part of our team and really protected our users.'
  },
  {
    id: 'project_4',
    images: {
      img: 'assets/backgrd/member5.png',
      altText: 'member 5',
    },
    name: 'Julias Eduard',
    heading: 'Founder and CEO of Crisp Company',
    description: 'Crisp has been an incredible and invaluable part of our team and really protected our users.'
  },
  {
    id: 'project_6',
    images: {
      img: 'assets/backgrd/member6.png',
      altText: 'member 6',
    },
    name: 'David Beket',
    heading: 'Founder and CEO of Crisp Company',
    description: 'Crisp has been an incredible and invaluable part of our team and really protected our users.'
  }]
  
  
