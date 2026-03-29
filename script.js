const toggleButton = document.querySelector('.menu-toggle');
const menuList = document.querySelector('#menu-list');
const menuLinks = [...document.querySelectorAll('.menu-list a')];

if (toggleButton && menuList) {
    toggleButton.addEventListener('click', () => {
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
        toggleButton.setAttribute('aria-expanded', String(!isExpanded));
        menuList.classList.toggle('open');
    });

    menuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            toggleButton.setAttribute('aria-expanded', 'false');
            menuList.classList.remove('open');
        });
    });
}