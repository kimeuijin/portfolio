const hambuger = document.getElementById("menu");
const menuBar = document.querySelector(".mobile-gnb");

let subToggle = true;

hambuger.addEventListener("click", showMenu);

function showToggle(){
   const menuChild = document.querySelector(".menuChild");
   const toggleChild = menuChild.children;

   if(subToggle){
        menuBar.style.setProperty("height", "calc(100vh)");
        for(let i = 0; i < toggleChild.length; i++ ) {
            const lineSpan = toggleChild[i];
            lineSpan.style.backgroundColor = "black";
        }
   }else{
        menuBar.style.height = "0px";
        for(let i = 0; i < toggleChild.length; i++ ) {
            const lineSpan = toggleChild[i];
            lineSpan.style.backgroundColor = "white";
        }
   }

   toggleSub(subToggle);
   subToggle = !subToggle;
}

$(".gnbItem").on("click", function(){
    hambuger.checked = false;
    showMenu();
})
