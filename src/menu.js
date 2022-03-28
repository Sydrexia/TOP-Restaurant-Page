export function addMenu() {
    let content = document.querySelector('#content');

    const heading = document.createElement('h1');
    heading.innerHTML = 'Hey you, this is our menu!'

    content.appendChild(heading);
};