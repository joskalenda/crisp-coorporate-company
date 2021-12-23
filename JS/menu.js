const Speaker = document.querySelector('.feature--container');

const projects = [
  {
    id: 'member1',
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
      img: '/assets/backgrd/member5.png',
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
}];

function createSpreaker(Speakerobject) {
  const li = document.createElement('li');
  li.className = 'feature';
  li.innerHTML = 
  `<div class="feature--img hidden">
    <img src="${Speakerobject.images.img}" alt="${Speakerobject.images.altText}">
  </div>
  <div class="side-div">
    <h3>${Speakerobject.name}</h3>
    <h4>${Speakerobject.heading}</h4>
    <p>${Speakerobject.description}</p>
  </div>`;

  return li;
}

projects.forEach((object) => {
  const Card = createSpreaker(object);
  Speaker.appendChild(Card);
});

const Lists = document.querySelectorAll('#Event .feature--container li');
const Button = document.querySelector('.show--more');
const Icon = document.querySelector('.show--more i');
const Span = document.querySelector('#more');
const ArrowUp = ('fa', 'fa-chevron-up');
const ArrowDn = ('fa', 'fa-chevron-down');
let value = 0;

function Read() {
  if (!value) {
    Lists.forEach((itmes) => {
      itmes.style.display = 'flex';
    });
    Span.textContent = 'LESS';
    Icon.classList.remove(ArrowDn);
    Icon.classList.add(ArrowUp);

    value = 1;
  } else {
    Lists.forEach((itmes) => {
      itmes.style.display = 'none';
    });
    Lists[0].style.display = 'flex';
    Lists[1].style.display = 'flex';

    Span.textContent = 'MORE';
    Icon.classList.remove(ArrowUp);
    Icon.classList.add(ArrowDn);

    value = 0;
  }
}

Button.addEventListener('click', Read);

// header background

const header = document.querySelector('.header');

window.onscroll = function(){
  let top = window.scrollY;
  if (top >= 100){
    header.classList.add('active');
  }else{
    header.classList.remove('active');
  }
}