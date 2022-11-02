import {buttonClassName}        from "./Button/Button"
import {displayClassName}       from "./Display/Display"
import {backButtonClassName}    from "./BackButton/BackButton";
import {deleteButtonClassName}  from "./DeleteButton/DeleteButton"
import {resultButtonClassName}  from "./ResultButton/ResultButton";
import {operatorsList}          from "./Operators/Operators";

import {clearDisplay}           from "./ButtonEventSetterDependencies/clearDisplay"
import {displayIsVoid}          from "./ButtonEventSetterDependencies/displayIsVoid"
import {isBackButton}           from "./ButtonEventSetterDependencies/isBackButton"
import {isDeleteButton}         from "./ButtonEventSetterDependencies/isDeleteButton"
import {isNumberButton}         from "./ButtonEventSetterDependencies/isNumberButton"
import {isOperatorButton}       from "./ButtonEventSetterDependencies/isOperatorButton"
import {isResultButton}         from "./ButtonEventSetterDependencies/isResultButton"
import { isPlusOperator }       from "./ButtonEventSetterDependencies/isPlusOperator"
import {isSubsOperator}         from "./ButtonEventSetterDependencies/isSubsOperator"
import {isProdOperator}         from "./ButtonEventSetterDependencies/isProdOperator"
import {isDivOperator}          from "./ButtonEventSetterDependencies/isDivOperator"

// la definicion de displayElement no se puede colocar por fuera de la funcion buttonEventSetter, ya que, de nuevo, el codigo de afuera de la funcion
// se estaria ejecutando antes del renderizado del elemento. Al meter la definicion dentro de la funcion, de nuevo estariamos usando la cola de tareas
// para "retardar" la definicion hasta que se renderize el elemento

let pendingValue = undefined;
let currentResult = undefined;
let lastOperator = undefined;

function setButtonEvent(button){
    const displayElement = document.getElementsByClassName(displayClassName)[0];
    button.addEventListener(("click"), () => {
        if (isNumberButton(button)){
            if ((displayIsVoid(displayElement))){
                if (button.innerText !== "0"){
                    displayElement.innerText = (button.innerText)
                }
            } else {
                displayElement.innerText += (button.innerText)
            }
        } else if (isDeleteButton(button,deleteButtonClassName)){
            clearDisplay(displayElement)
        } else if (isBackButton(button,backButtonClassName)){
            if (!displayIsVoid(displayElement)){
                displayElement.innerText = displayElement.innerText.slice(0, displayElement.innerText.length - 1) 
                if (displayElement.innerText.length === 0 ){
                    clearDisplay(displayElement)
                } 
            }
        } else if (isOperatorButton(button,operatorsList)){
            if (pendingValue === undefined){
                pendingValue = Number(displayElement.innerText);
                clearDisplay(displayElement)
                lastOperator = button.innerText
            } 
        } else if (isResultButton(button,resultButtonClassName)){
            let currentDisplayValue = Number(displayElement.innerText)
            if (isPlusOperator(lastOperator)){
                currentResult = pendingValue + currentDisplayValue
            } else if (isSubsOperator(lastOperator)){
                currentResult= pendingValue - currentDisplayValue
            } else if (isProdOperator(lastOperator)){
                currentResult= pendingValue * currentDisplayValue
            } else if (isDivOperator(lastOperator)){
                currentResult = Math.round(pendingValue / currentDisplayValue)
            }
            displayElement.innerText = `${currentResult}`
            pendingValue = undefined;
            currentResult = undefined
        }
    })
}

export function buttonEventSetter(){
    let buttonList = document.getElementsByClassName(buttonClassName)
    for (let i = 0; i < buttonList.length; i++){
        setButtonEvent(buttonList[i])
    }
}