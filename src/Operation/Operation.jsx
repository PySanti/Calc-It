import {React}          from "react"
import { Numbers }      from "../Numbers/Numbers"
import { Operators }    from "../Operators/Operators"
import "./OperationStyles.css"

export function Operation(props){
    return (
    <div className="operation-container">
        <Numbers/>
        <Operators/>
    </div>
    )
}