//hamburger button

// const hambuger = document.getElementById("menu");
// const menuBar = document.querySelector(".mobile-gnb");

// let subToggle = true;

// hambuger.addEventListener("click", showMenu);

// function showToggle(){
//    const menuChild = document.querySelector(".menuChild");
//    const toggleChild = menuChild.children;

//    if(subToggle){
//         menuBar.style.setProperty("height", "calc(100vh)");
//         for(let i = 0; i < toggleChild.length; i++ ) {
//             const lineSpan = toggleChild[i];
//             lineSpan.style.backgroundColor = "black";
//         }
//    }else{
//         menuBar.style.height = "0px";
//         for(let i = 0; i < toggleChild.length; i++ ) {
//             const lineSpan = toggleChild[i];
//             lineSpan.style.backgroundColor = "white";
//         }
//    }

//    toggleSub(subToggle);
//    subToggle = !subToggle;
// }

// $(".gnbItem").on("click", function(){
//     hambuger.checked = false;
//     showMenu();
// })

// const menu = document.getElementById("menu");
// const mobileGnb = document.querySelector(".mobile-gnb");

$(function() {
    $("mobileGnb").hide();
    $("menu").click(function() {
        $("mobileGnb").slideToggle();
    });
});

//modal 
const overlay = document.querySelector('#overlay');
const photoCon = document.querySelector('.photo');
const colseButton = document.querySelector('.close');

function showBic(e) { //e는 이벤트가 발생된 대상
    const orgImg = e.querySelector("img").src;
    const output = `<img src="${orgImg}"><p>${e.querySelector("p").innerHTML} </p>`;

    photoCon.innerHTML = output;
    overlay.classList.add("show");

    document.body.classList.add("stop-scroll"); // body scroll 방지
}


colseButton.addEventListener('click', () => {
            overlay.classList.remove("show");
            document.body.classList.remove("stop-scroll"); // body scroll 방지