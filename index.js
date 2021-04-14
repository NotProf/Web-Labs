const toggleButton = document.getElementsByClassName('toggle-button').item(0);
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

console.log(toggleButton);

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
