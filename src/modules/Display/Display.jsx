import {React} from "react"
import "./DisplayStyles.css"

export const displayClassName = "display"
export const displayInputAnimationClassName = "input-animation"

export function Display(){
    return (
        <div className={displayClassName}>0</div>
    )
}