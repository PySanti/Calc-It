import { displayIsVoid } from "../interfaceFunctions/displayIsVoid"
import { displayInputAnimation } from "../animations/displayInputAnimation";

export function numberButtonHandler(number, display){
    let activateAnimation = false;
    if ((displayIsVoid(display))){
        if (number !== "0"){
            display.innerText = (number)
            activateAnimation = true;
        }
    } else {
        display.innerText += (number)
        activateAnimation = true;
    }
    if (activateAnimation){
        displayInputAnimation(display);
    }

}