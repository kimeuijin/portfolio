
// const hamburger = document.querySelector('.hamburger');
// const menuBox = document.querySelector('.menu-box');


// $(function() {
//     $("hamburger").click(function() {
//         $("menuBox").slideToggle();
//     });
// });

window.onload = function() {
    const hamburger = document.querySelector(".hamburger") ;
    const menuBox = document.querySelector(".menu-box");

 
    toggleBtn.addEventListener("click", () => {
     title.classList.toggle("title-none");
    });
  }

//modal 
// const overlay = document.querySelector('#overlay');
// const photoCon = document.querySelector('.photo');
// const colseButton = document.querySelector('.close');

// function showBic(e) { //e는 이벤트가 발생된 대상
//     const orgImg = e.querySelector("img").src;
//     const output = `<img src="${orgImg}"><p>${e.querySelector("p").innerHTML} </p>`;

//     photoCon.innerHTML = output;
//     overlay.classList.add("show");

//     document.body.classList.add("stop-scroll"); // body scroll 방지
// }


// colseButton.addEventListener('click', () => {
//             overlay.classList.remove("show");
//             document.body.classList.remove("stop-scroll"); // body scroll 방지