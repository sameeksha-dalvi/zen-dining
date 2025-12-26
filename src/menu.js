const menu = [
    {
        category: "Starters",
        items: [
            { name: "Miso Soup", desc: "Light soybean broth with tofu", price: "¥300" },
            { name: "Edamame", desc: "Steamed soybeans with sea salt", price: "¥420" },
            { name: "Vegetable Gyoza", desc: "Pan-fried dumplings with seasonal vegetables", price: "¥580" }

        ]
    },
    {
        category: "Main Course",
        items: [
            { name: "Vegetable Ramen", desc: "Slow-cooked broth with noodles and fresh vegetables", price: "¥1,200" },
            { name: "Tofu Teriyaki Bowl", desc: "Grilled tofu, rice, and teriyaki glaze", price: "¥1,350" },
            { name: "Vegetable Sushi Platter", desc: "Assorted vegetable sushi rolls", price: "¥1,500" }

        ]
    },
    {
        category: "Desserts",
        items: [
            { name: "Matcha Ice Cream", desc: "Classic green tea flavored ice cream", price: "¥450" },
            { name: "Mochi", desc: "Soft rice cake filled with sweet bean paste", price: "¥380" }

        ]
    },
];

function loadMenu() {
    const contentDiv = document.querySelector('#content');
    contentDiv.textContent = '';

    const card = document.createElement('div');
    card.className = 'menu-card';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'headingText';
    titleDiv.textContent = 'Our Menu';

    card.appendChild(titleDiv);
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'menu-category';

    for (let i = 0; i < menu.length; i++) {

        const categoryName = document.createElement('div');
        categoryName.className = 'category-name';
        categoryName.textContent = menu[i].category;
        categoryDiv.appendChild(categoryName);

        for (let j = 0; j < menu[i].items.length; j < j++) {

            const itemMainDiv = document.createElement('div');

            itemMainDiv.className = 'item-main';

            const itemName = document.createElement('div');
            itemName.className = 'item-name';
            itemName.textContent = menu[i].items[j].name;
            itemMainDiv.appendChild(itemName);

            const itemPrice = document.createElement('div');
            itemPrice.className = 'item-price';
            itemPrice.textContent = menu[i].items[j].price;
            itemMainDiv.appendChild(itemPrice);

            categoryDiv.appendChild(itemMainDiv);

            const itemDesc = document.createElement('div');
            itemDesc.className = 'item-desc';
            itemDesc.textContent = menu[i].items[j].desc;
            categoryDiv.appendChild(itemDesc);


        }

        card.appendChild(categoryDiv);
    }


    contentDiv.appendChild(card);


}


export default loadMenu;