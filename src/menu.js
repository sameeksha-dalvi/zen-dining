

function loadMenu() {
    const contentDiv = document.querySelector('#content');
    contentDiv.textContent = '';
    
    const card = document.createElement('div');
    card.className = 'menu-card';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'headingText';
    titleDiv.textContent = 'Our Menu';

    const startersDiv = document.createElement('div');


    card.appendChild(titleDiv);
    contentDiv.appendChild(card);


}

export default loadMenu;