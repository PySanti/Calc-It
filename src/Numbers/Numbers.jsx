import {React} from "react"
import {Button} from "../Button/Button"
import "./NumbersStyles.css"

const numberButtonClassName = "number-item"
let items_list = []

for (let i = 0; i <= 9; i ++){
    items_list.push(<Button classnm={numberButtonClassName} content = {i}/>)
}

export function Numbers(){
    return (
        <div className="numbers-container">
            {items_list}
        </div>
    )
}