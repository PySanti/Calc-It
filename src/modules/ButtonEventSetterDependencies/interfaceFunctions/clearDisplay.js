import { pendingValueAnimation } from "../animations/pendingValueAnimation"

export function clearDisplay(display, pendingValue, lastOperator){
    display.innerText = "0"
    pendingValueAnimation({add : false})
}