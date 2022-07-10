//모바일 토글 버튼
const toggleBtn = document.querySelector('.menu-button');
const logoMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.gnb');
// const github = document.querySelector('.github');

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





// 원형 그래프
$(window).ready(function() {
    draw(80, '.pie-chart1', '#ccc');
    // draw(50, '.pie-chart2', '#8b22ff');
    // draw(30, '.pie-chart3','#ff0');
});

function draw(max, classname, colorname) {
    var i = 1;
    var func1 = setInterval(function() {
        if (i < max) {
            color1(i, classname, colorname);
            i++;
        } else {
            clearInterval(func1);
        }
    }, 10);
}

function color1(i, classname, colorname) {
    $(classname).css({
        "background": "conic-gradient(" + colorname + " 0% " + i + "%, ##f7f0e0 " + i + "% 100%)"
    });
}


function replay() {
    draw(80, '.pie-chart1', '#ccc');
    // draw(50, '.pie-chart2', '#8b22ff');
    // draw(30, '.pie-chart3','#ff0');
}