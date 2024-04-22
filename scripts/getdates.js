function insertDateAndIcon() {
    const dateNow = new Date.getFullYear();

    const dateElement = document.getElementById('currentyear');
    const iconElement = document.querySelector('.footer');

    const date = document.createTextNode('/u00a9');
    const icon = document.createTextNode(dateNow);
    dateElement.appendChild(date);
    iconElement.appendChild(icon);
}

insertDateAndIcon();