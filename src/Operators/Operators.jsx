import {React}  from "react"
import {Button} from "../Button/Button"
import "./OperatorsStyles.css"

export const operatorsList = ["+", "-", "x", "/"]
let operatorsButton = []
operatorsList.forEach((operator) => {
    operatorsButton.push(<Button classnm="operator-item" content={operator}/>)
})

export const operatorsComponentlist = operatorsButton;

export function Operators(){
    return (
        <div className="operators">
            {operatorsButton}
        </div>
    )
}