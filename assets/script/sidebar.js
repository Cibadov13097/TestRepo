function toggleMenu() {
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');
    const body = document.getElementsByTagName('body')[0]; 

    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    body.style.transform = 'translateX(-200px)';

}