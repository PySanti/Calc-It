import { clearDisplay } from "../interfaceFunctions/clearDisplay";

export function operatorHandler(pendingValue, display, lastOperator, buttonContent){
    if (pendingValue === undefined){
        pendingValue = Number(display.innerText);
        clearDisplay(display)
        lastOperator = buttonContent 
    } 
    return [pendingValue, lastOperator];
}