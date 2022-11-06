import {isBackButton}           from "../buttonIdentifiers/isBackButton"
import {isDeleteButton}         from "../buttonIdentifiers/isDeleteButton"
import {isNumberButton}         from "../buttonIdentifiers/isNumberButton"
import {isOperatorButton}       from "../buttonIdentifiers/isOperatorButton"
import {isResultButton}         from "../buttonIdentifiers/isResultButton"

import { numberButtonHandler }  from "../buttonHandlers/numberButtonHandler";
import {backButtonHandler}      from "../buttonHandlers/backButtonHandler"
import {deleteButtonHandler}    from "../buttonHandlers/deleteButtonHandler"
import {operatorHandler}        from "../buttonHandlers/operatorHandler"
import {resultButtonHandler}    from "../buttonHandlers/resultButtonHandler"

import {operatorsList}          from "../../Operators/Operators";


let pendingValue = undefined;
let currentResult = undefined;
let lastOperator = undefined;


export function setInputEvent({isClick, buttonContent, display, event} ){
    if (isNumberButton(buttonContent)){
        numberButtonHandler(buttonContent, display, isClick)
    } else if (isDeleteButton(buttonContent)){
        deleteButtonHandler(display)
    } else if (isBackButton(buttonContent)){
        backButtonHandler(display)
    } else if (isOperatorButton(buttonContent, operatorsList)){
        if (!(isClick) || (buttonContent === "/")){
            event.preventDefault()
        }
        [pendingValue,lastOperator] = operatorHandler(pendingValue, display, lastOperator, buttonContent)
    } else if (isResultButton(buttonContent)){
        [pendingValue,currentResult] = resultButtonHandler(display, lastOperator, pendingValue, currentResult,operatorsList)
    }

}