import {React} from "react"

import "./ButtonStyles.css"

export const buttonClassName = "button"
export function Button({content, classnm, id, key}){
    return (
        <div id={id}   className={`${buttonClassName} ${classnm}`}>{content}</div>
    )
}