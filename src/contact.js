

function loadContact() {
    const contentDiv = document.querySelector('#content');
    contentDiv.textContent = '';

    const card = document.createElement('div');
    card.className = 'contact-card';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'headingText';
    titleDiv.textContent = 'Contact Us';
    card.appendChild(titleDiv);

    const introLine = document.createElement('div');
    introLine.className = 'intro-line';
    introLine.textContent = 'We’d love to hear from you. Reach out to us using the details below.'
    card.appendChild(introLine);

    const addressDiv = document.createElement('div');
    addressDiv.className = 'contact-row';

    const addressLabel = document.createElement('span');
    addressLabel.className = 'contact-label';
    addressLabel.textContent = 'Address: ';

    const addressValue = document.createElement('span');
    addressValue.className = 'contact-value';
    addressValue.textContent = 'Sakura Street, Tokyo';

    addressDiv.appendChild(addressLabel);
    addressDiv.appendChild(addressValue);

    card.appendChild(addressDiv);

    const phoneDiv = document.createElement('div');
    phoneDiv.className = 'contact-row';

    const phoneLabel = document.createElement('span');
    phoneLabel.className = 'contact-label';
    phoneLabel.textContent = 'Phone: ';

    const phoneValue = document.createElement('span');
    phoneValue.className = 'contact-value';
    phoneValue.textContent = '+81 90 1234 5678';

    phoneDiv.appendChild(phoneLabel);
    phoneDiv.appendChild(phoneValue);
    card.appendChild(phoneDiv);

    const emailDiv = document.createElement('div');
    emailDiv.className = 'contact-row';

    const emailLabel = document.createElement('span');
    emailLabel.className = 'contact-label';
    emailLabel.textContent = 'Email: ';

    const emailValue = document.createElement('span');
    emailValue.className = 'contact-value';
    emailValue.textContent = 'hello@zendining.jp';

    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailValue);
    card.appendChild(emailDiv);

    const hoursDiv = document.createElement('div');
    hoursDiv.className = 'contact-row';

    const hoursLabel = document.createElement('span');
    hoursLabel.className = 'contact-label';
    hoursLabel.textContent = 'Hours: ';

    const hoursValue = document.createElement('span');
    hoursValue.className = 'contact-value';
    hoursValue.textContent = '10:00 AM – 10:00 PM';

    hoursDiv.appendChild(hoursLabel);
    hoursDiv.appendChild(hoursValue);
    card.appendChild(hoursDiv);

    contentDiv.appendChild(card);
}

export default loadContact;