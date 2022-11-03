import {buttonClassName}        from "./Button/Button"
import {setKeyEvent} from "./ButtonEventSetterDependencies/eventSetters/setKeyEvent"
import {setClickEvent} from "./ButtonEventSetterDependencies/eventSetters/setClickEvent"


// la definicion de displayElement no se puede colocar por fuera de la funcion buttonEventSetter, ya que, de nuevo, el codigo de afuera de la funcion
// se estaria ejecutando antes del renderizado del elemento. Al meter la definicion dentro de la funcion, de nuevo estariamos usando la cola de tareas
// para "retardar" la definicion hasta que se renderize el elemento

export function buttonEventSetter(){
    setKeyEvent()
    let buttonList = document.getElementsByClassName(buttonClassName)
    for (let i = 0; i < buttonList.length; i++){
        setClickEvent(buttonList[i])
    }
}
