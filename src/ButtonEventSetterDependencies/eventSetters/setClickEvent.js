import {setInputEvent}          from "./setInputEvent"
import {displayClassName}       from "../../Display/Display"



export function setClickEvent(button){
    const displayElement = document.getElementsByClassName(displayClassName)[0];
    button.addEventListener(("click"), (e) => {
        setInputEvent({isClick : true, buttonContent : button.innerText,  display : displayElement, event : e})
    })
}