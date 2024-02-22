const navbarButton = document.querySelector('.nav-toggle');
const navbarLinks = document.querySelector('.links');

navbarButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('show-links');
});