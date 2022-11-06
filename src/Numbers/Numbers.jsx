import {React}          from "react"
import {Button}         from "../Button/Button"
import {BackButton}     from "../BackButton/BackButton"
import {DeleteButton}   from "../DeleteButton/DeleteButton"
import {ResultButton}   from "../ResultButton/ResultButton"
import {nanoid}         from "nanoid"
import "./NumbersStyles.css"

const numberButtonClassName = "number-item"
let items_list = []

for (let i = 0; i <= 9; i ++){
    let currentId = nanoid()
    items_list.push(<Button key={currentId} id={currentId} classnm={numberButtonClassName} content = {i}/>)
}

export const numbersComponentList = items_list;
export const numbersAnimationClassName = "number-key-animation"

export function Numbers(){
    return (
        <div className="numbers-container">
            {items_list}
            <BackButton/>
            <DeleteButton/>
            <ResultButton/>
        </div>
    )
}