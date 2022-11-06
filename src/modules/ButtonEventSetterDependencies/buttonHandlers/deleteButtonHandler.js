import { clearDisplay } from "../interfaceFunctions/clearDisplay"

export function deleteButtonHandler(display, pendingValue, lastOperator){
    clearDisplay(display, pendingValue, lastOperator)
    return [undefined, undefined]
}
