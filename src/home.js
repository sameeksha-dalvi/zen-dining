import restuarantImage from "./img/restuarant.jpg";

const contentDiv = document.querySelector('#content');

const card = document.createElement('div');
card.className = 'home-card';

const titleDiv = document.createElement('div');

titleDiv.className = 'title headingText';

titleDiv.textContent = 'Zen Dining';

const aboutSectionDiv = document.createElement('div');

aboutSectionDiv.className = 'about-section';

const homeImageDiv = document.createElement('div');

const homeImage = document.createElement('img');

homeImage.setAttribute('src', restuarantImage);
homeImage.className = 'homeImage';

homeImageDiv.appendChild(homeImage);

const aboutDiv = document.createElement('div');

aboutDiv.className = 'aboutText';

aboutDiv.textContent = 'A minimalist dining space inspired by Japanese Zen philosophy, offering thoughtfully crafted meals in a calm and welcoming atmosphere';

aboutSectionDiv.appendChild(homeImageDiv);
aboutSectionDiv.appendChild(aboutDiv);

const hoursDiv = document.createElement('div');

hoursDiv.className = 'detailText';
hoursDiv.textContent = 'Hours: 10:00 AM – 10:00 PM';

const openDaysDiv = document.createElement('div');

openDaysDiv.className = 'detailText';
openDaysDiv.textContent = 'Open Days: Monday – Sunday';

const locationDiv = document.createElement('div');

locationDiv.className = 'detailText';
locationDiv.textContent = 'Location: Sakura Street, Tokyo';

// contentDiv.appendChild(titleDiv);
// contentDiv.appendChild(aboutDiv);
// contentDiv.appendChild(hoursDiv);
// contentDiv.appendChild(openDaysDiv);
// contentDiv.appendChild(locationDiv);

card.appendChild(titleDiv);
card.appendChild(aboutSectionDiv);
card.appendChild(hoursDiv);
card.appendChild(openDaysDiv);
card.appendChild(locationDiv);

contentDiv.appendChild(card);