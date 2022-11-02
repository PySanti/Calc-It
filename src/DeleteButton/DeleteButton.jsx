import {React} from "react"
import "./DeleteButtonStyles.css"
import {Button} from "../Button/Button"

export const deleteButtonClassName = "delete-button"

export function DeleteButton(props){
    return (
        <Button classnm="delete-button" content="delete"/>
    )
}