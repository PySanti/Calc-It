import {React} from "react"
import {Button} from "../Button/Button"
import "./NumbersStyles.css"

let items_list = []
for (let i = 0; i <= 9; i ++){
    items_list.push(<Button classnm="number-item" content = {i}/>)
}

export function Numbers(){
    return (
        <div className="numbers-container">
            {items_list}
        </div>
    )
}