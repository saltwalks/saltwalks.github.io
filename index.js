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

/*------------------------------- Modal -------------------------------------*/
const boring = document.getElementById("boring");
const modalOverlay = document.querySelector(".modal-overlay");

boring.addEventListener("click", () => {
    modalOverlay.style.display = "flex";
});

modalOverlay.addEventListener("click", event => {
    const overlayOnly = event.target;
    if(overlayOnly.classList.contains("modal-overlay")) {
        modalOverlay.style.display = "none";
    }
});

/*------------------------------- Copy -------------------------------------*/
function clipboardCopy(id) {
    const textToCopy = document.getElementById(id.replace("-copy", ""));
    navigator.clipboard.writeText(textToCopy.innerHTML).then(() => {
        alert("Clipboard Copied!");
    }).catch(() => {
        alert("Damn");
    });
}

/*------------------------------- Resume -------------------------------------*/
function getResume(id) {
    if(id.replace("-resume", "") === "en") {
        alert("English Resume Not Prepared");
    } else {
        alert("Korean Resume Not Prepared");
    }
}