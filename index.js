const windowWidth = window.innerWidth;

// Main Slider
const slideList = document.getElementById("slide-list");
const imageNum = slideList.children.length;
slideList.style.width = windowWidth * imageNum + "px";

let cnt = 0;
setInterval(() => {
    slideList.style.transition = "500ms";
    cnt = cnt < imageNum - 1 ? cnt + 1 : 0;
    slideList.style.transform = `translateX(-${windowWidth * cnt}px)`;
}, 5000);