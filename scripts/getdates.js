function getCurrentYear() {
    return new Date().getFullYear();
}

function insertDateAndIcon() {
    const iconElement = document.querySelector('.footer');
    const name = document.createElement('span');
    name.setAttribute('class', 'my-name');
    name.innerHTML = 'Dominic Abah Odeh';
    const nigeria = document.createElement('span');
    nigeria.setAttribute('class', 'my-country');
    nigeria.innerHTML = 'Nigeria';

    const icon = '\u00a9';
    const date = getCurrentYear();

    const dateAndIcon = `${icon}${date}`;
    const myCountry = document.createTextNode(' Nigeria');
    const author = 'Dominic Abah Odeh';
    const arrows = ` ⤆${author}⤇`;
    name.textContent = arrows;
    iconElement.textContent = dateAndIcon;
    iconElement.appendChild(name);
    iconElement.appendChild(myCountry);
}
const options = {
    weekday : 'long',
    day : 'numeric',
    month : 'long',
    year : 'numeric'
}
function getModifiedDate() {
    return new Date(document.lastModified).toLocaleDateString('en-US', options);
}
function insertTextAndModifiedDate() {
    const dateContainer = document.getElementById('lastModified');

    // Create a text node with Last Modified Date
    const lastModifiedDate = document.createTextNode("Last Modified Date: ");

    // Create a text node with the current date
    const dateTextNode = document.createTextNode(getModifiedDate());

    // Append the icon and text node to the container element
    dateContainer.appendChild(lastModifiedDate);
    dateContainer.appendChild(dateTextNode);
}

function colorMyName() {
    const h1 = document.getElementById('titled');
    const afterText = 'Abah D. Odeh';
    const beforeText = "WDD 131 - Dynamic Web Fundamentals - ";

    const spanElement = document.createElement("span");
    spanElement.textContent = afterText;
    spanElement.style.color = "yellow";

    const finalText = beforeText + spanElement.outerHTML;
    h1.innerHTML = finalText;
}
colorMyName();
insertDateAndIcon();
insertTextAndModifiedDate();