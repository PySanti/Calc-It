import {pendingValueAnimationClassName} from "../../PendingValue/PendingValue"


export function pendingValueAnimation({pendingValueContent = null, operator = null, add}){
    let pendingValueElement = document.getElementsByClassName("pending-value")[0];
    if (add){
        pendingValueElement.innerText = String(pendingValueContent) + ` ${operator}`
        pendingValueElement.classList.add(pendingValueAnimationClassName)
    } else {
        pendingValueElement.classList.remove(pendingValueAnimationClassName)
    }

}