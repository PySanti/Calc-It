import {React} from "react"
import "./OperationStyles.css"
import { Numbers } from "../Numbers/Numbers"
import { Operators } from "../Operators/Operators"

export function Operation(props){
    return (
    <div className="operation-container">
        <Numbers/>
        <Operators/>
    </div>
    )
}