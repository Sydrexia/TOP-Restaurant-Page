export function addContact() {
    let content = document.querySelector('#content');

    const heading = document.createElement('h1');
    heading.innerHTML = 'Hey you, contact us!'

    content.appendChild(heading);
};

