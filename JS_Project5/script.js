var imgarr = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg"];
var index = 0;

document.getElementById("next").addEventListener("click", function(){
    document.querySelector("img").setAttribute("src", imgarr[index]);
    index++;
    if (index>= imgarr.length) {
        index=0;
    }
});

document.getElementById("previous").addEventListener("click", function(){
    document.querySelector("img").setAttribute("src", imgarr[index]);
    index--;
    if (index<0) {
        index=5;
    }
});


// function changeImage(){
//     document.querySelector(".container-fluid").style.backgroundImage = "url(" + imgarr[index] + ")";
//     index++;
//     if (index >= imgarr.length) {
//         index = 0;
//     }
// };

// setInterval(cycleImage, 3000);