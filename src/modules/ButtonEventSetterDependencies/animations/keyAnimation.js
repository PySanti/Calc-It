export function keyAnimation(buttonsDict, key, animationClassName){
    if (buttonsDict[key]){
        let elemnt = document.getElementById(buttonsDict[key])
        elemnt.classList.add(animationClassName)
        setTimeout(() => {
            elemnt.classList.remove(animationClassName)
        }, 100)
    }
}
