export function numberKeyButtonAnimation(comp, animationName){
    const key = comp.key
    const button = document.getElementById(key)
    button.classList.add(animationName)
    setTimeout(() => {
        button.classList.remove(animationName)
    }, 200)
}
