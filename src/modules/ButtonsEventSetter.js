import {buttonClassName}        from "./Button/Button"
import {setKeyEvent} from "./ButtonEventSetterDependencies/eventSetters/setKeyEvent"
import {setClickEvent} from "./ButtonEventSetterDependencies/eventSetters/setClickEvent"
import {displayClassName}       from "./Display/Display"


// la definicion de displayElement no se puede colocar por fuera de la funcion buttonEventSetter, ya que, de nuevo, el codigo de afuera de la funcion
// se estaria ejecutando antes del renderizado del elemento. Al meter la definicion dentro de la funcion, de nuevo estariamos usando la cola de tareas
// para "retardar" la definicion hasta que se renderize el elemento


export function buttonEventSetter(){
    const displayElement = document.getElementsByClassName(displayClassName)[0];
    let buttonList = document.getElementsByClassName(buttonClassName)
    setKeyEvent(displayElement)
    setClickEvent(buttonList, displayElement)
}
