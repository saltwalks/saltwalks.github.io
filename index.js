const IMAGE_NUM = 2;

let a = document.getElementById("main-page");
let cnt = 0;

setInterval(() => {
    a.style.background = `url(image/main${cnt}.jpg)`;
    a.style.backgroundSize = "cover";
    cnt = cnt < IMAGE_NUM ? cnt + 1 : 0;
}, 5000);