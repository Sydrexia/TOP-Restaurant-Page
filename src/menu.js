import Burger from './burger.jpg'
import Salad from './salad.jpg'
import Cake from './cake.jpg'

export function addMenu() {
    let content = document.querySelector('#content');

    const section = document.createElement('div');
    section.classList.add('intro-section');

    const heading = document.createElement('h1');
    heading.innerHTML = 'Hey you, this is our menu!'

    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');

    const menuCardOne = document.createElement('div');
    menuCardOne.classList.add('menu-card');
    const burgerText = document.createElement('p');
    burgerText.textContent = 'Try our Juicy Burger!';
    const myBurger = new Image();
    myBurger.src = Burger;
    myBurger.classList.add('menu-card-img');

    const menuCardTwo = document.createElement('div');
    menuCardTwo.classList.add('menu-card');
    const saladText = document.createElement('p');
    saladText.textContent = 'Try our Succulent Salad!';
    const mySalad = new Image();
    mySalad.src = Salad;
    mySalad.classList.add('menu-card-img');

    const menuCardThree = document.createElement('div');
    menuCardThree.classList.add('menu-card');
    const cakeText = document.createElement('p');
    cakeText.textContent = 'Try our Cool Cake!';
    const myCake = new Image();
    myCake.src = Cake;
    myCake.classList.add('menu-card-img');

    content.appendChild(heading);
    content.appendChild(section);

    section.appendChild(menuItems);

    menuItems.appendChild(menuCardOne);
    menuItems.appendChild(menuCardTwo);
    menuItems.appendChild(menuCardThree);

    menuCardOne.appendChild(burgerText);
    menuCardOne.appendChild(myBurger);

    menuCardTwo.appendChild(saladText);
    menuCardTwo.appendChild(mySalad);

    menuCardThree.appendChild(cakeText);
    menuCardThree.appendChild(myCake);
};