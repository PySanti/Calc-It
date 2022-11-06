import {setInputEvent}          from "./setInputEvent"

function setEvent(currentButton, displayElement){
    currentButton.addEventListener(("click"), (e) => {
        setInputEvent({isClick : true, buttonContent : currentButton.innerText,  display : displayElement, event : e})
    })
}

export function setClickEvent(buttonList, displayElement){
    for (let i = 0; i < buttonList.length; i++){
        setEvent(buttonList[i], displayElement)
    }
}