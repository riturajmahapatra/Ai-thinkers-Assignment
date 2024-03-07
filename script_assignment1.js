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

/* header function */
function mainHeader(headerText, fontSize, fontWeight, color) {
  const header = document.createElement('h1');
  header.textContent = headerText;
  header.style.fontSize = fontSize;
  header.style.fontWeight = fontWeight;
  header.style.color = color;
  return header;
}
/* para function */
function mainPara(paraText, fontSize, fontWeight) {
  const paragraph = document.createElement('p');
  paragraph.textContent = paraText;
  paragraph.style.fontSize = fontSize;
  paragraph.style.fontWeight = fontWeight;
  return paragraph;
}
const textContainer = document.createElement('div');
textContainer.style.position = 'absolute';
textContainer.style.top = '30%';
textContainer.style.left = '5%';
textContainer.style.width = '50%';
textContainer.style.color = 'white';
textContainer.style.zIndex = '9';
/* const textContent = document.createTextNode(
  'Reliable way to get around the town'
); */
const header = mainHeader(
  'Reliable way to get around the town',
  '4.5vmax',
  'bold',
  'white'
);
textContainer.appendChild(header);
const paragraph = mainPara(
  'Whether you need a quick ride to the airport, a trip to a business meeting, or a night out on the town, our fleet of well-maintained taxis and professional drivers are at your service.',
  '1.5vmax',
  'normal'
);
paragraph.style.marginBlock = '10px';
textContainer.appendChild(paragraph);
heroSection.appendChild(textContainer);

/* button function */
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

/* sectoin 2 */
const heroSection2 = document.querySelector('.heroSection2');

const sectionContainer1 = document.createElement('div');
sectionContainer1.classList.add('container', 'text-center', 'p-12');

sectionContainer1.style.width = '70%';
sectionContainer1.style.color = 'white';
sectionContainer1.style.zIndex = '9';
const header2 = mainHeader(
  'Your Safety And Convenience',
  '4.5vmax',
  'bold',
  'white'
);
const paragraph2 = mainPara(
  "We're available 24/7, so you can rely on us for last-minute travel needs.",
  '1.5vmax',
  'normal'
);
const button2 = mainButton('Book Your Ride');
sectionContainer1.appendChild(header2);
sectionContainer1.appendChild(paragraph2);
heroSection2.appendChild(sectionContainer1);

heroSection2.classList.add('text-center');
heroSection2.appendChild(button2);

/* img cards */
function imgCard(imgSrc, imgAlt) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.style.width = '20rem';

  const img = document.createElement('img');
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.objectFit = 'cover';
  img.setAttribute('src', imgSrc);
  img.setAttribute('alt', imgAlt);
  card.appendChild(img);
  return card;
}
const flexContainer = document.createElement('div');
flexContainer.classList.add('d-flex', 'justify-content-center', 'flex-wrap');
flexContainer.style.gap = '40px';
flexContainer.style.marginBlock = '50px';

document.body.appendChild(flexContainer);

const img1 = imgCard('./assets/asset 7.webp', 'Img1');
flexContainer.appendChild(img1);
const img2 = imgCard('./assets/asset 8.webp', 'Img1');
img2.style.marginTop = '50px';
img2.style.overflow = 'none';
flexContainer.appendChild(img2);
const img3 = imgCard('./assets/asset 9.webp', 'Img1');
flexContainer.appendChild(img3);

/* big card with content on left and picture on right */
const cardContainer = document.createElement('div');
cardContainer.classList.add('card', 'mb-3', 'container');
cardContainer.style.backgroundColor = '#2D2D2D';

const cardContainer2 = document.createElement('div');
cardContainer2.classList.add('card-body');

const header3 = document.createElement('h1');
header3.style.fontSize = '2.5vmax';
header3.textContent = 'Ensuring You Have A Comfortable Trip';

const paragraph3 = document.createElement('p');
paragraph3.classList.add('card-text');
paragraph3.textContent =
  "Our user-friendly website and mobile app make it effortless to book a taxi or car rental. We're available 24/7, so you can rely on us for last-minute travel needs.";
cardContainer2.appendChild(header3);
cardContainer.appendChild(cardContainer2);
document.body.appendChild(cardContainer);
