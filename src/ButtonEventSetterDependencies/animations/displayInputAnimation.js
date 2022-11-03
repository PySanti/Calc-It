import { displayInputAnimationClassName } from "../../Display/Display"

export function displayInputAnimation(display){
    console.log(display)
    console.log(displayInputAnimationClassName)
    display.classList.add(displayInputAnimationClassName);
    setTimeout(() => {
        display.classList.remove(displayInputAnimationClassName)
    }, 100);
}