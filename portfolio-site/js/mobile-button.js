const toggleBtn = document.querySelector('.toggleBtn');
const logoMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.gnb');
const github = document.querySelector('.github');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    logoMenu.classList.toggle('active');
    menu.classList.toggle('active');
    github.classList.toggle('active');
});

menu.addEventListener('click', removeToggleMenu);
window.addEventListener('resize', removeToggleMenu);

function removeToggleMenu() {
    toggleBtn.classList.remove('active');
    logoMenu.classList.remove('active');
    menu.classList.remove('active');
    github.classList.remove('active');
}