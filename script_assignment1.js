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
/* ui and li  */
const ulElement = document.createElement('ui');
ulElement.classList.add(
  'navbar-nav',
  'mx-auto',
  'ml-12',
  'mb-lg-0',
  'd-lg-flex',
  'd-none'
);
/* maping used for links (forEach) */
const linkText = ['demos', 'about us', 'services', 'taxi', 'blog', 'all pages'];
linkText.forEach((text) => {
  const listElement = document.createElement('li');
  listElement.classList.add('nav-item');
  const link = document.createElement('a');
  link.classList.add('nav-link');
  link.href = '#';
  link.textContent = text;
  link.style.color = 'white';
  link.style.fontSize = '1.1rem';
  link.style.marginLeft = '20px';
  listElement.append(link);
  ulElement.appendChild(listElement);
});
navElement.appendChild(ulElement);
/* navBtn */
const navBtn = mainButton('Book My Ride');
navBtn.classList.add('ms-auto');
navElement.appendChild(navBtn);
/* hero section */
const heroSection = document.querySelector('.Hero');
/* taxi img */
const heroSectionImg = document.createElement('img');
heroSectionImg.setAttribute('src', './assets/taxi.jpg');
heroSectionImg.setAttribute('alt', 'taxi.jpg');
heroSectionImg.style.height = '50vmax';
heroSectionImg.style.width = '100%';
heroSectionImg.style.background = 'rgba(0,0,0,0.5)';
heroSection.appendChild(heroSectionImg);
/* text container */
const textContainer = document.createElement('div');
textContainer.style.position = 'absolute';
textContainer.style.top = '30%';
textContainer.style.left = '5%';
textContainer.style.width = '50%';
textContainer.style.color = 'white';
textContainer.style.zIndex = '9';
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

cardContainer.style.padding = '40px';

const cardContainer2 = document.createElement('div');
const header3 = document.createElement('h1');
header3.style.fontSize = '3.5vmax';
header3.textContent = 'Ensuring You Have A Comfortable Trip';

const paragraph3 = document.createElement('p');
paragraph3.classList.add('card-text');
paragraph3.style.marginBlock = '12px';
paragraph3.style.fontSize = '1.3vmax';
paragraph3.textContent =
  "Our user-friendly website and mobile app make it effortless to book a taxi or car rental. We're available 24/7, so you can rely on us for last-minute travel needs.";
const button3 = mainButton('Book My Ride');
textContainer.appendChild(button3);
cardContainer2.style.marginBottom = '20px';
cardContainer2.appendChild(header3);
cardContainer2.appendChild(paragraph3);
cardContainer2.appendChild(button3);
cardContainer.appendChild(cardContainer2);
/* img div */
const imgContainer = document.createElement('div');
const img4 = document.createElement('img');
img4.setAttribute('src', './assets/asset 7.webp');
img4.setAttribute('alt', 'Img1');
img4.setAttribute('width', '30%');

imgContainer.appendChild(img4);
// imgContainer.classList.add('red');
// cardContainer.classList.add('red');
// cardContainer2.classList.add('red');

const cardContents = document.createElement('div');

cardContainer.appendChild(imgContainer);
document.body.appendChild(cardContainer);

/* our services */
const serviceElement = document.createElement('div');
serviceElement.classList.add('container');
const header4 = document.createElement('h1');
header4.style.fontWeight = 'bold';
header4.style.fontSize = '4.5vmax';
header4.textContent = 'Our Services';

const paragraph4 = document.createElement('p');
paragraph4.classList.add('card-text');
paragraph4.style.marginBlock = '12px';
paragraph4.style.fontSize = '1.3vmax';
paragraph4.textContent =
  "We're available 24/7, so you can rely on us for last-minute travel needs.";

serviceElement.appendChild(header4);
serviceElement.appendChild(paragraph4);
document.body.appendChild(serviceElement);

/* small cards */

const smallCardContainer = document.createElement('div');
smallCardContainer.classList.add('container', 'mx-auto', 'flex');

function smallCards(imgsrc, headerTxt, paraTxt) {
  const scard1 = document.createElement('div');
  scard1.classList.add('card', 'text-center', 'm-3', 'p-3');
  scard1.style.backgroundColor = '#2D2D2D';

  const simg1 = document.createElement('img');
  simg1.classList.add('card-img-top', 'mx-auto', 'my-3');
  simg1.setAttribute('src', imgsrc);
  simg1.setAttribute('alt', 'img1');
  simg1.style.width = '80px';

  const sheader1 = document.createElement('h1');
  sheader1.textContent = headerTxt;
  sheader1.style.fontSize = '2.7vmax';
  sheader1.style.fontWeight = 'bold';
  sheader1.style.marginBlock = '40px';

  const spara1 = document.createElement('p');
  spara1.textContent = paraTxt;

  scard1.appendChild(simg1);
  scard1.appendChild(sheader1);
  scard1.appendChild(spara1);
  return scard1;
}
const card1 = smallCards(
  './assets/asset 16.svg',
  'Airport Transfer',
  'Well-maintained taxis and professional drivers are at your service.'
);
const card2 = smallCards(
  './assets/asset 17.svg',
  'Airport Transfer',
  'Well-maintained taxis and professional drivers are at your service.'
);
const card3 = smallCards(
  './assets/asset 18.svg',
  'Airport Transfer',
  'Well-maintained taxis and professional drivers are at your service.'
);
smallCardContainer.appendChild(card1);
smallCardContainer.appendChild(card2);
smallCardContainer.appendChild(card3);

document.body.appendChild(smallCardContainer);

/* hero section 3 */

const heroSection3 = document.createElement('div');
heroSection3.style.marginBlock = '70px';
heroSection3.style.position = 'relative';
/* taxi img */
const heroSectionImg1 = document.createElement('img');
heroSectionImg1.setAttribute('src', './assets/taxi2.jpg');
heroSectionImg1.setAttribute('alt', 'taxi2.jpg');
heroSectionImg1.style.height = '30vmax';
heroSectionImg1.style.width = '100%';
heroSectionImg1.style.objectFit = 'cover';
heroSectionImg1.style.background = 'rgba(0,0,0,0.5)';

/* text container */
const textContainer1 = document.createElement('div');
textContainer1.style.position = 'absolute';
textContainer1.style.top = '30%';
textContainer1.style.left = '5%';
textContainer1.style.width = '70%';
textContainer1.style.color = 'white';
textContainer1.style.zIndex = '9';

const header5 = mainHeader(
  'Reliable way to get around the town',
  '3vmax',
  'bold',
  'white'
);
textContainer1.appendChild(header5);
const paragraph5 = mainPara(
  "Getting started is easy. Simply use our online booking or give us a call, and we'll take care of the rest. ",
  '1.5vmax',
  'normal'
);
const button4 = mainButton('Book Your Ride');
paragraph5.style.marginBlock = '10px';
textContainer1.appendChild(paragraph5);
textContainer1.appendChild(button4);
heroSection3.appendChild(textContainer1);
heroSection3.appendChild(heroSectionImg1);
document.body.appendChild(heroSection3);

/* car rentals */

const carRentalElement = document.createElement('div');
carRentalElement.classList.add('container', 'mx-auto');

const carContent = document.createElement('div');
const header6 = mainHeader('Car Rentals', '3vmax', 'bold', 'white');
carContent.appendChild(header6);
const paragraph6 = mainPara(
  "We're available 24/7, so you can rely on us for last-minute travel needs.  ",
  '1.3vmax',
  'normal'
);
carContent.appendChild(paragraph6);
carRentalElement.appendChild(carContent);

const btnElement = document.createElement('div');
const button5 = mainButton('View All');
btnElement.appendChild(button5);
carRentalElement.appendChild(btnElement);
paragraph6.style.marginBlock = '20px';
carRentalElement.classList.add('d-flex', 'justify-content-between');
document.body.appendChild(carRentalElement);

/* car rental cards */

const carRentalCards = document.createElement('div');
carRentalCards.classList.add(
  'container',
  'mx-auto',
  'd-flex',
  'justify-content-center',
  'flex-wrap'
);
/* small cards function used */
function smallCarCards(imgsrc, headerTxt, paraTxt) {
  const scard1 = document.createElement('div');
  scard1.classList.add('card', 'text-left', 'm-3');
  scard1.style.width = '350px';
  scard1.style.backgroundColor = '#2D2D2D';
  const simg1 = document.createElement('img');
  simg1.style.objectFit = 'cover';
  simg1.classList.add('card-img-top');
  simg1.setAttribute('src', imgsrc);
  simg1.setAttribute('alt', 'img1');
  simg1.style.width = '100%';
  simg1.style.height = '200px';

  const sheader1 = document.createElement('h1');
  sheader1.textContent = headerTxt;
  sheader1.style.fontSize = '2.5vmax';
  sheader1.style.fontWeight = 'bold';
  sheader1.style.marginBlock = '20px';
  sheader1.style.paddingLeft = '20px';
  const spara1 = document.createElement('p');
  spara1.innerHTML = paraTxt.replace(/(\n)/g, '<br>'); //used innerHtml over textContent as it provides us to play with the br rtags and \n
  spara1.style.paddingLeft = '20px';
  spara1.style.marginBottom = '20px';

  scard1.appendChild(simg1);
  scard1.appendChild(sheader1);
  scard1.appendChild(spara1);
  return scard1;
}

const carCard1 = smallCarCards(
  './assets/asset 27.jpeg',
  'Ampera Helix GT',
  `Daily Rate: $2.50\n Weekly Rate: $0.50<br>Monthly Rate: $0.50`
);
const carCard2 = smallCarCards(
  './assets/asset 28.jpeg',
  'Nexaro CG6',
  `Daily Rate: $2.50\n Weekly Rate: $0.50<br>Monthly Rate: $0.50`
);
const carCard3 = smallCarCards(
  './assets/asset 29.jpeg',
  'Ampera Axia',
  `Daily Rate: $2.50\n Weekly Rate: $0.50<br>Monthly Rate: $0.50`
);

carRentalCards.appendChild(carCard1);
carRentalCards.appendChild(carCard2);
carRentalCards.appendChild(carCard3);

document.body.appendChild(carRentalCards);

/* app secrtion */
const appSection = document.createElement('div');
appSection.classList.add(
  'container',
  'mx-auto',
  'd-flex',
  'justify-content-center',
  'flex-wrap'
);
appSection.style.backgroundColor = '#2D2D2D';

const appSectionImg = document.createElement('div');
const img5 = document.createElement('img');
img5.setAttribute('src', './assets/taxi4.PNG');
img5.setAttribute('alt', 'hi');
appSectionImg.appendChild(img5);
appSection.appendChild(appSectionImg);

/* content area */
const appContent = document.createElement('div');
const header7 = mainHeader(
  'Ensuring You Have A Comfortable Journey',
  '3vmax',
  'bold',
  'white'
);
appContent.appendChild(header7);
const paragraph7 = mainPara(
  "Our user-friendly website and mobile app make it effortless to book a taxi or car rental. We're available 24/7, so you can rely on us for last-minute travel needs.",
  '1.3vmax',
  'normal'
);
const ulElement1 = document.createElement('ul');
const liElement1 = document.createElement('li');
liElement1.innerHTML = `<li>\u2022 Convenient application</li><br><li>\u2022 Quality and comfort in every trip</li><br><li>\u2022 Skilled drivers</li>
`;
ulElement1.appendChild(liElement1);
appContent.appendChild(paragraph7);
appContent.appendChild(ulElement1);
appContent.classList.add('red');
appContent.style.width = '60%';
appContent.style.padding = '60px';
paragraph7.style.marginBlock = '25px';
appSection.appendChild(appContent);
document.body.appendChild(appSection);
