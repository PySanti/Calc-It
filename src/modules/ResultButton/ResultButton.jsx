import {React} from "react"
import {Button} from "../Button/Button"
import { nanoid } from "nanoid"
import { buttonsDict } from "../Numbers/Numbers"
import "./ResultButtonStyles.css"

export const resultButtonClassName = "result-button"


export function ResultButton(props){
    let currentId = nanoid()
    buttonsDict["="] = currentId
    return (
        <Button key={currentId} id={currentId}classnm={resultButtonClassName} content="="/>
    )
}