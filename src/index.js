import html from "./index.html";
import "./sass/styles.scss"


/*section education*/
const boyIcon = document.querySelector(".boy-icon");
const girlIcon = document.querySelector(".girl-icon");
const bgBlur = document.querySelector(".solution__bg-blur");
const list = document.querySelector(".education__list");

function updateTopValue() {
    const boyIconHeight = boyIcon.offsetHeight;
    const girlIconHeight = girlIcon.offsetHeight;
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const listHeight = list.getBoundingClientRect().height;
    if (screenWidth < "1200") {
        return bgBlur.style.top = (boyIconHeight - girlIconHeight) + "px";
     }
    else {

        return bgBlur.style.top = -(listHeight/3) + "px";
     }


}

window.addEventListener('load', updateTopValue);
window.addEventListener('resize', updateTopValue);

