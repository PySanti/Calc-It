import {setInputEvent} from "./setInputEvent"
import {displayClassName}       from "../../Display/Display"

export function setKeyEvent(){
    const displayElement = document.getElementsByClassName(displayClassName)[0];
    document.getElementsByTagName("body")[0].addEventListener(("keydown"), (e) => {
        setInputEvent({isClick : false, buttonContent : e.key,  display : displayElement, event : e})
    })
}