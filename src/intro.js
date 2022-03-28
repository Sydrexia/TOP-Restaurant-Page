import Restaurant from './restaurant.jpg';

export function addIntro() {
    

    let content = document.querySelector('#content');

    const section = document.createElement('div');
    section.classList.add('intro-section');

    const heading = document.createElement('h1');
    heading.innerHTML = 'Hey you, this is us!'

    const myImage = new Image();
    myImage.src = Restaurant;
    myImage.classList.add('rest-image');

    const introduction = document.createElement('p');
    introduction.textContent = 'Hello! We are so grateful that you decided to visit our restaurant\'s homepage. We strive to provide our customer\'s with the best dining experience and most deliscious food possible!';

    content.appendChild(section);

    section.appendChild(heading);
    section.appendChild(myImage);
    section.appendChild(introduction);
};

