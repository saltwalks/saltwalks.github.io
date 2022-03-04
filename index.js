/*------------------------------ Main Slider ---------------------------------*/
const slideList = document.getElementById("slide-list");
const imageNum = slideList.children.length;
slideList.style.width = window.innerWidth * imageNum + "px";

let cnt = 0;
setInterval(() => {
    slideList.style.transition = "500ms";
    cnt = cnt < imageNum - 1 ? cnt + 1 : 0;
    slideList.style.transform = `translateX(-${window.innerWidth * cnt}px)`;
}, 5000);

/*------------------------------- Copy -------------------------------------*/
function clipboardCopy(el) {
    if(el.innerHTML != "Copied!") {
        navigator.clipboard.writeText(el.innerHTML).then(() => {
            el.innerHTML = "Copied!";
        }).catch(() => {
            alert("Damn!");
        });
    } else {
        el.innerHTML = "haeram.kim1@gmail.com";
    }
}
