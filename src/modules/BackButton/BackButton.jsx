import {React} from "react"
import {Button} from "../Button/Button"
import { nanoid } from "nanoid"
import { buttonsDict } from "../Numbers/Numbers"
import "./BackButtonStyles.css"

export const backButtonClassName = "back-button"


export function BackButton(props){
    let currentId = nanoid()
    buttonsDict["Backspace"] = currentId
    return (
        <Button id={currentId} key={currentId}classnm={backButtonClassName} content="back"/>
    )
}