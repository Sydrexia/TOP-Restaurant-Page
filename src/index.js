console.log('Setup! Let\'s go!');

import { clearContent } from './clear-content.js';
import { addContact } from './contact-us.js';
import { addIntro } from './intro.js';
import { addMenu } from './menu.js';
import './style.css';

// Header Elements

function header() {
    const header = document.createElement('div');
    header.setAttribute('id', 'header')

    const intro = document.createElement('button');
    intro.innerHTML = 'Intro';
    intro.addEventListener('click', () => {
        clearContent();
        addIntro();
    })

    const menu = document.createElement('button');
    menu.innerHTML = 'Menu';
    menu.addEventListener('click', () => {
        clearContent();
        addMenu();
    })

    const contactUs = document.createElement('button');
    contactUs.innerHTML = 'Contact Us';
    contactUs.addEventListener('click', () => {
        clearContent();
        addContact();
    })

    header.appendChild(intro);
    header.appendChild(menu);
    header.appendChild(contactUs);

    return header;
}

// Main Elements

function main() {
    const main = document.createElement('div');
    main.setAttribute('id', 'content');

    return main;
}

document.body.appendChild(header());
document.body.appendChild(main());