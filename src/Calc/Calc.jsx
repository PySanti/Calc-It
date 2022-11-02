import "./CalcStyles.css"
import {React} from "react"
import {Display} from "../Display/Display"
import {Operation} from "../Operation/Operation"

export function Calc(props){
    return (
        <div className="calc-container">
            <Display/>
            <Operation/>
        </div>
    )
}