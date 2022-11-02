import {React} from "react"
import {Button} from "../Button/Button"
import "./ResultButtonStyles.css"

export const resultButtonClassName = "result-button"

export function ResultButton(props){
    return (
        <Button classnm={resultButtonClassName} content="="/>
    )
}