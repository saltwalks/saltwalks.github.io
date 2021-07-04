// Main Slider
const slideList = document.getElementById("slide-list");
const imageNum = slideList.children.length;
slideList.style.width = window.innerWidth * imageNum + "px";

let cnt = 0;
setInterval(() => {
    slideList.style.transition = "500ms";
    cnt = cnt < imageNum - 1 ? cnt + 1 : 0;
    slideList.style.transform = `translateX(-${window.innerWidth * cnt}px)`;
}, 5000);