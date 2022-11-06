import { displayIsVoid } from "../interfaceFunctions/displayIsVoid"
import { displayInputAnimation } from "../animations/displayInputAnimation";
import { numbersComponentList } from "../../Numbers/Numbers";
import { numbersAnimationClassName} from "../../Numbers/Numbers"
import { numberKeyButtonAnimation } from "../animations/numberKeyButtonAnimation";

export function numberButtonHandler(number, display, isClick){
    let activateAnimation = false;
    if ((displayIsVoid(display))){
        if (number !== "0"){
            display.innerText = (number)
            activateAnimation = true;
        }
    } else {
        display.innerText += (number)
        activateAnimation = true;
    }
    if (activateAnimation){
        displayInputAnimation(display);
    }
    if (!isClick){
        for (let i  = 0; i < numbersComponentList.length; i++){
            let comp = numbersComponentList[i]
            if (comp.props.content === Number(number)){
                numberKeyButtonAnimation(comp, numbersAnimationClassName)
                break
            }
        }
    }
}