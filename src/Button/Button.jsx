import {React} from "react"
import "./ButtonStyles.css"

export function Button({content, classnm}){
    return (
        <div className={`button ${classnm}`}>{content}</div>
    )
}