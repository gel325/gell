let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('.body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: '1.png',
        price: 120
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: 'images/Gown.jpg',
        price: 120
    },
    {
        id: 3,
        name: 'PRODUCT NAME 1',
        image: 'images/Gown.jpg',
        price: 120
    },
    {
        id: 4,
        name: 'PRODUCT NAME 1',
        image: 'images/Gown.jpg',
        price: 120
    },
    {
        id: 5,
        name: 'PRODUCT NAME 1',
        image: 'images/Gown.jpg',
        price: 120
    },
    {
        id: 6,
        name: 'PRODUCT NAME 1',
        image: 'images/Gown.jpg',
        price: 120
    },
    {
        id: 7,
        name: 'PRODUCT NAME 1',
        image: 'images/Gown.jpg',
        price: 120
    },
    {
        id: 8,
        name: 'PRODUCT NAME 1',
        image: 'images/Gown.jpg',
        price: 120
    },
    {
        id: 9,
        name: 'PRODUCT NAME 1',
        image: 'images/Gown.jpg',
        price: 120
    },
    {
        id: 10,
        name: 'PRODUCT NAME 1',
        image: 'images/Gown.jpg',
        price: 120
    },
];
let listCards = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
            <img src="image/${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
        `;
        list.appendChild(newDiv);
    })
}
initApp();