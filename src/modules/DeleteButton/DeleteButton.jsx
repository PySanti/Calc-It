import {React} from "react"
import "./DeleteButtonStyles.css"
import {Button} from "../Button/Button"
import { buttonsDict } from "../Numbers/Numbers"
import { nanoid } from "nanoid"

export const deleteButtonClassName = "delete-button"


export function DeleteButton(props){
    let currentId = nanoid()
    buttonsDict["Escape"] = currentId
    return (
        <Button key = {currentId} id={currentId}classnm="delete-button" content="delete"/>
    )
}