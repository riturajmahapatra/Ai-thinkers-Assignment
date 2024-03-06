const bodyElement = document.createElement('body');

const navElement = document.createElement('nav');
navElement.classList.add(
  'navbar',
  'navbar-expand-lg',
  'navbar-light',
  'shadow-md',
  'px-4',
  'py-2',
  'fixed',
  'top-0',
  'left-0',
  'w-full',
  'z-50'
);
bodyElement.appendChild(navElement);
navElement.style.backgroundColor = '#1c1b1b';
navElement.style.color = 'white';
document.documentElement.appendChild(bodyElement);

const logoContainer = document.createElement('div');
logoContainer.classList.add('navbar-brand');
const logoImage = document.createElement('img');
logoImage.setAttribute('src', 'logo.png');
logoImage.setAttribute('alt', 'logo');
logoImage.classList.add('h-8', 'w-auto', 'mr-2');
logoContainer.appendChild(logoImage);
navElement.appendChild(logoContainer);
