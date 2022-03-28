export function addIntro() {
    let content = document.querySelector('#content');

    const heading = document.createElement('h1');
    heading.innerHTML = 'Hey you, this is us!'

    content.appendChild(heading);
};

