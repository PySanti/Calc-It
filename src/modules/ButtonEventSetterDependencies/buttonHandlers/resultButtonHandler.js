import { isPlusOperator }   from "../buttonIdentifiers/isPlusOperator"
import { isSubsOperator }   from "../buttonIdentifiers/isSubsOperator"
import { isDivOperator }    from "../buttonIdentifiers/isDivOperator"
import { isProdOperator }   from "../buttonIdentifiers/isProdOperator"
import { pendingValueAnimation } from "../animations/pendingValueAnimation"

export function resultButtonHandler(display, lastOperator, pendingValue, currentResult, operatorsList){
    if ((operatorsList.includes(lastOperator)) && (pendingValue !== undefined)){
        let currentDisplayValue = Number(display.innerText)
        if (isPlusOperator(lastOperator)){
            currentResult = pendingValue + currentDisplayValue
        } else if (isSubsOperator(lastOperator)){
            currentResult= pendingValue - currentDisplayValue
        } else if (isProdOperator(lastOperator)){
            currentResult= pendingValue * currentDisplayValue
        } else if (isDivOperator(lastOperator)){
            currentResult = Math.round(pendingValue / currentDisplayValue)
        }
        display.innerText = `${currentResult}`
        pendingValue = undefined;
        currentResult = undefined
        pendingValueAnimation({add : false})
    } 
    return [pendingValue,currentResult]
}