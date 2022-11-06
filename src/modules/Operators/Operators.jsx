import {React}  from "react"
import {Button} from "../Button/Button"
import { nanoid } from "nanoid"
import { buttonsDict } from "../Numbers/Numbers"
import "./OperatorsStyles.css"

export const operatorsList = ["+", "-", "x", "/"]
let operatorsButton = []
operatorsList.forEach((operator) => {
    let currentId = nanoid()
    operatorsButton.push(<Button key = {currentId} id = {currentId}classnm="operator-item" content={operator}/>)
    buttonsDict[operator] = currentId
})



export function Operators(){
    return (
        <div className="operators">
            {operatorsButton}
        </div>
    )
}