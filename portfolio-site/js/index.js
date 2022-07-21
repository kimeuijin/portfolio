//toggle button
$(function() {
    // $(".menu-box").hide();
    $(".hamburger").click(function() {
        $(".menu-box").slideToggle();
    });
    // $(".gnb > li").click(function() {
    //     $(".menu-box").hide();
    // })
});

//graph
$(window).ready(function(){
    draw(95, '.graph-h', '#ff8363');
    draw(95, '.graph-c', '#009de6');
    draw(95, '.graph-s','#cf649a');
    draw(80, '.graph-j','#ffca3e');
    draw(80, '.graph-r','#61dafb');
    draw(80, '.graph-jq','#535556');
    draw(80, '.graph-d','#0a1f35');
    
});

function draw(max, classname, colorname){
    var i = 1;
    var func1 = setInterval(function(){
        if(i<max){
            color1(i,classname,colorname);
            i++;
        } else{
            clearInterval(func1);
        }
    },10);
}

function color1(i, classname,colorname){
    $(classname).css({
        "background":"conic-gradient("+colorname+" 0% "+i+"%, #f7f0e0 "+i+"% 100%)"
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

//     document.body.classList.add("stop-scroll"); 
// }


// colseButton.addEventListener('click', () => {
//     overlay.classList.remove("show");
//     document.body.classList.remove("stop-scroll");
// })