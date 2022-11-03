import { displayIsVoid } from "../interfaceFunctions/displayIsVoid"

export function numberButtonHandler(number, display){
    if ((displayIsVoid(display))){
        if (number !== "0"){
            display.innerText = (number)
        }
    } else {
        display.innerText += (number)
    }
}