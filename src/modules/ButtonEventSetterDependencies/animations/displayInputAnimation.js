import { displayInputAnimationClassName } from "../../Display/Display"

export function displayInputAnimation(display){
    display.classList.add(displayInputAnimationClassName);
    setTimeout(() => {
        display.classList.remove(displayInputAnimationClassName)
    }, 100);
}