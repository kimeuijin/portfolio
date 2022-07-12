const hamberger = document.getElementById("menu");
const menuBar = document.querySelector(".gnb");

let subToggle = true;
function showMenu(){
    if(subToggle) {
        menuBar.style.setProperty('height', 'calc(100vh - 80px)');
        subToggle =! subToggle;
      } else {
        menuBar.style.height = "0px";
        subToggle =! subToggle;
    }
}

hamberger.addEventListener("click", showMenu);
document.querySelector(".close-btn").addEventListener("click", showMenu);