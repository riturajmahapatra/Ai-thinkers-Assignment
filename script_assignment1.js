const bodyElement = document.createElement('body');
bodyElement.style.backgroundColor = '#1B1B1B';

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
logoImage.setAttribute('src', './assets/asset 0.svg');
logoImage.setAttribute('alt', 'logo');
logoImage.classList.add('h-8', 'w-auto', 'mr-2');
logoContainer.appendChild(logoImage);
navElement.appendChild(logoContainer);
/* hero section */
const heroSection = document.querySelector('.Hero');
/* taxi img */
const heroSectionImg = document.createElement('img');
heroSectionImg.setAttribute('src', './assets/taxi.jpg');
heroSectionImg.setAttribute('alt', 'taxi.jpg');
heroSectionImg.style.height = '100vh';
heroSectionImg.style.width = '100%';
heroSection.appendChild(heroSectionImg);

const textContainer = document.createElement('div');
textContainer.style.position = 'absolute';
textContainer.style.top = '40%';
textContainer.style.left = '5%';
textContainer.style.color = 'white';
textContainer.style.zIndex = '9999';
const textContent = document.createTextNode(
  'Reliable way to get around the town'
);
const heroPara = document.createElement('p');
heroPara.textContent =
  'Whether you need a quick ride to the airport, a trip to a business meeting, or a night out on the town, our fleet of well-maintained taxis and professional drivers are at your service.';
textContainer.style.fontSize = '4.5rem';
textContainer.style.fontWeight = 'bold';
textContainer.style.width = '50%';
textContainer.appendChild(textContent);
heroPara.style.fontSize = '1.2rem';
heroPara.style.fontWeight = 'normal';
textContainer.appendChild(heroPara);
heroSection.append(textContainer);

function mainButton(btn_text) {
  const button = document.createElement('button');
  button.textContent = btn_text;
  button.classList.add('booking_btn');

  button.style.padding = '15px 25px';
  button.style.fontSize = '1rem';
  button.style.color = 'black';
  button.style.backgroundColor = '#bedb42';
  button.style.border = 'none';
  button.style.transition = 'all 0.3s ease-in-out';

  button.addEventListener('mouseover', function () {
    button.style.color = '#bedb42';
    button.style.backgroundColor = 'transparent';
    button.style.border = '1px solid #bedb42';
  });
  button.addEventListener('mouseout', function () {
    button.style.color = 'black';
    button.style.backgroundColor = '#bedb42';
    button.style.border = 'none';
  });
  return button;
}
const button = mainButton('Book My Ride');
textContainer.appendChild(button);
