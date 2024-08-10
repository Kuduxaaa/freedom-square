document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('.menu');
    let menuClose = document.querySelector('.close-menu');
    let menuOpen = document.querySelector('.open-menu');
    
    menuOpen.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.add('display-block')
    });

    menuClose.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.remove('display-block');
        menu.classList.add('display-none');
    })
});