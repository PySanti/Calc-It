import {React} from "react"
import "./BackButtonStyles.css"
import {Button} from "../Button/Button"

export const backButtonClassName = "back-button"


export function BackButton(props){
    return (
        <Button classnm={backButtonClassName} content="back"/>
    )
}