import { displayIsVoid }    from "../interfaceFunctions/displayIsVoid"
import { clearDisplay }     from "../interfaceFunctions/clearDisplay"

export function backButtonHandler(display){
    if (!displayIsVoid(display)){
        display.innerText = display.innerText.slice(0, display.innerText.length - 1) 
        if (display.innerText.length === 0 ){
            clearDisplay(display)
        } 
    }
}