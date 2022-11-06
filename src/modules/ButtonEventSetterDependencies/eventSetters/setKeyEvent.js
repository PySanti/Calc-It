import {setInputEvent} from "./setInputEvent"
import { buttonAnimationClassName } from "../../Button/Button";
import { buttonsDict } from "../../Numbers/Numbers";
import { keyAnimation } from "../animations/keyAnimation";



export function setKeyEvent(displayElement){
    document.getElementsByTagName("body")[0].addEventListener(("keydown"), (e) => {
        if (e.key === "/") e.preventDefault()
        keyAnimation(buttonsDict, e.key, buttonAnimationClassName)
        setInputEvent({isClick : false, buttonContent : e.key,  display : displayElement, event : e})
    })
}