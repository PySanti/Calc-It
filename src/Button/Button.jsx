import {React} from "react"
import "./ButtonStyles.css"

export const buttonClassName = "button"
export function Button({content, classnm}){
    return (
        <div className={`${buttonClassName} ${classnm}`}>{content}</div>
    )
}