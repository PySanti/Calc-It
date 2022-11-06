import { clearDisplay } from "../interfaceFunctions/clearDisplay";
import {pendingValueAnimation} from "../animations/pendingValueAnimation"

export function operatorHandler(pendingValue, display, lastOperator, buttonContent){
    if (pendingValue === undefined){
        pendingValue = Number(display.innerText);
        clearDisplay(display)
        lastOperator = buttonContent 
        pendingValueAnimation({pendingValueContent : pendingValue, operator : lastOperator, add : true})
    } 
    return [pendingValue, lastOperator];
}